import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signIn, register, signOut } from "./authAPI";

const initialState = {
  user: null,
  status: "idle",
  error: null,
};

const getUserInfo = (user) => {
  const { displayName, email, photoURL, uid } = user;
  return {
    avatar: photoURL,
    username: displayName,
    email: email,
    uid: uid,
  };
};

export const userSignIn = createAsyncThunk(
  "auth/userLogin",
  async (credentials) => {
    const { email, password } = credentials;
    const { user } = await signIn(email, password);
    return getUserInfo(user);
  }
);

export const userRegister = createAsyncThunk(
  "auth/userRegister",
  async (credentials) => {
    const { email, password } = credentials;
    const { user } = await register(email, password);
    return getUserInfo(user);
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userSignOut: (state) => {
      signOut();
      state.user = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userSignIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userSignIn.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload;
      })
      .addCase(userSignIn.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(userRegister.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user.push(action.payload);
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const { userSignOut } = authSlice.actions;

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
