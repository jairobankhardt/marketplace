import React from "react";
import { Modal, Button } from "react-bootstrap";

const ProductModal = ({ product, onHide }) => {
  return (
    <Modal show={true} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={product.image_url}
          alt={product.name}
          className="img-fluid mb-3"
        />
        <p><strong>Preço:</strong> R$ {product.price.toFixed(2)}</p>
        <p><strong>Vendedor:</strong> {product.seller}</p>
        <p><strong>Esporte:</strong> {product.sport}</p>
        <p><strong>Detalhes:</strong> {product.details}</p>
        <p><strong>Tamanhos disponíveis:</strong> {product.available_sizes.join(", ") || "Indisponível"}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
