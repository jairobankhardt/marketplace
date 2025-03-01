import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product, onClick }) => {
  return (
    <Card onClick={() => onClick(product)} style={{ cursor: "pointer" }}>
      <Card.Img variant="top" src={product.image_url} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>R$ {product.price.toFixed(2)}</Card.Text>
      </Card.Body>
      <Button variant="success" onClick={() => onClick(product)}>
        Ver detalhes
      </Button>
    </Card>
  );
};

export default ProductCard;
