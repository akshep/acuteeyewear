import React from "react";

const ProductCard = () => {
  return (
    <div className="col-3">
        <div className="product-card">
            <div className="product-image">
                <img src="images/watch.jpg" alt="product image" />
            </div>
            <div className="product-details">
                <h6 className="brand"> Havels</h6>
            </div>
        </div>
        </div>
  );
};

export default ProductCard;