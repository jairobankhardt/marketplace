import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

const ProductList = ({ products, categoryFilter }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const filteredProducts = categoryFilter
    ? products.filter((product) => product.type === categoryFilter)
    : products;

  return (
    <Container className="mt-4">
      <Row>
        {filteredProducts.map((product, index) => (
          <Col md={3} key={index} className="mb-4">
            <ProductCard product={product} onClick={handleCardClick} />
          </Col>
        ))}
      </Row>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onHide={() => setSelectedProduct(null)}
        />
      )}
    </Container>
  );
};

export default ProductList;
