import { auth } from "../../firebase";

export function signIn(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function register(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function signOut() {
  auth.signOut();
}
