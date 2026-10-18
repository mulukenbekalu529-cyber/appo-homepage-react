import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleAppleProduct.css";

function SingleAppleProduct() {
  // Get the ID from /iphone/:id
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3006/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Single product:", data);
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  return (
    <div className="single-product">
      <div className="single-product-image">
        <img src={product.Product_img} alt={product.product_name} />
      </div>

      <div className="single-product-content">
        <h1>{product.product_name}</h1>

        <h2>{product.Product_brief_description}</h2>

        <p>{product.Product_description}</p>

        <h3>{product.Starting_price}</h3>

        <p>{product.Price_range}</p>

        <a href={product.Product_link} target="_blank" rel="noreferrer">
          Buy Now
        </a>
      </div>
    </div>
  );
}

export default SingleAppleProduct;
