import React from "react";

import { Link, useParams } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
const ProductCard = ({ id, name, text, img, price, color }) => {
  const { type } = useParams();

  return (
    <Link to={`/filteredProducts/${type}/${id}`}>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          className="h-60"
          component="img"
          alt="green iguana"
          image={img}
        />

        <CardContent className="text-center">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
        <CardActions className="flex items-center justify-between py-3">
          <Typography variant="small">${price}</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            {color?.map((color, index) => {
              return (
                <i
                  className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2 mr-4 "
                  key={index}
                  style={{ backgroundColor: color }}
                ></i>
              );
            })}
          </Typography>
        </CardActions>
      </Card>
    </Link>
  );
};

export default ProductCard;
