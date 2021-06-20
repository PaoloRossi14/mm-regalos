import { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "../../firebase";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 100,
    maxWidth: 345,
    margin: 15,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    marginLeft: "auto",
  },
}));

function ProductsDB() {
  const classes = useStyles();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = () => {
    db.collection("products").onSnapshot((snapshot) => {
      const tempProducts = [];
      snapshot.forEach((doc) => {
        tempProducts.push({ ...doc.data(), id: doc.id });
      });
      setProducts(tempProducts);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    console.log("Geting products...");
    getProducts();
  }, []);

  return (
    <ProductsDBContainer>
      <h1>Products</h1>
      {isLoading && (
        <div
          style={{
            display: "flex",
            displayDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading...
          <br />
          <CircularProgress color="secondary" />
        </div>
      )}
      <ProductsDBList>
        {products.map((product) => (
          <Card key={product.id} className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={product.image}
                title="model-2"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                  <br />
                  <small>{product.price}</small>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.desc}
                </Typography>
                {/* <image src={product.image} alt="" /> */}
              </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton aria-label="settings" className={classes.expand}>
                <MoreVertIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </ProductsDBList>
    </ProductsDBContainer>
  );
}

export default ProductsDB;

const ProductsDBContainer = styled.div`
  background-color: #fff;
  padding: 20px;
`;

const ProductsDBList = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;
