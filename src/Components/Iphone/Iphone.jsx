import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Iphone.css";

function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3006/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Products from API:", data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="iphone-page">
      <h1>iPhone</h1>

      <div className="iphone-products">
        {products.map((product) => (
          <div className="iphone-card" key={product.Product_id}>
            <img src={product.Product_img} alt={product.product_name} />

            <h2>{product.product_name}</h2>

            <h3>{product.Product_brief_description}</h3>

            <h3>{product.Starting_price}</h3>

            <p>{product.Price_range}</p>

            <Link to={`/iphone/${product.Product_id}`}>Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Iphone;
