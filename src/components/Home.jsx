import { useContext } from "react";
import { CartContext } from "../components/CartContext";

const products = [
  { id: 1, name: "Nike Air Force 1 Campus Men's Maxico Running Shoes", price: "$24.67", image: "/images/products/1.png" },
  { id: 2, name: "Nike Air Jordan 1 Campus Men's Maxico Running Shoes", price: "$15.32", image: "/images/products/2.png" },
  { id: 3, name: "Nike Air Max 90 Campus Men's Maxico Running Shoes", price: "$44.57", image: "/images/products/3.jpg" },
  { id: 4, name: "Nike Air Max 270 Campus Men's Maxico Running Shoes", price: "$13.46", image: "/images/products/4.png" },
  { id: 5, name: "Nike Air Max 97 Campus Men's Maxico Running Shoes", price: "$17.12", image: "/images/products/5.png" },
  { id: 6, name: "Nike Dunk Low Campus Men's Maxico Running Shoes", price: "$32.12", image: "/images/products/6.png" },
  { id: 7, name: "Nike Blazer Mid Campus Men's Maxico Running Shoes", price: "$25.12", image: "/images/products/1.png" },
  { id: 8, name: "Nike Air Max 90 Campus Men's Maxico Running Shoes", price: "$21.12", image: "/images/products/2.png" }
];

function Home({ keyword }) {
  const { addToCart } = useContext(CartContext);

  const filteredProducts = keyword
    ? products.filter((product) => product.name.toLowerCase().includes(keyword.toLowerCase()))
    : products;

  return (
    <>
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5 ml-5">
        <div className="row">
          {filteredProducts.map(product => (
            <div key={product.id} className="col-sm-12 col-md-6 col-lg-3 my-3">
              <div className="card p-3 rounded text-center">
                <img className="card-img-top mx-auto" src={product.image} alt={product.name} />
                <div className="card-body d-flex flex-column align-items-center">
                  <h5 className="card-title">
                    <a href="#">
                      {product.name}
                    </a>
                  </h5>
                  <p className="card-text">{product.price}</p>
                  <button id="view_btn" className="btn btn-block" onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
