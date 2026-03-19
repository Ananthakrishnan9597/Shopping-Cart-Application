import { useContext } from 'react';
import { CartContext } from '../components/CartContext';

function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <>
            <h1 id="products_heading">Cart Items</h1>
            <div className="container mt-5">
                {cart.length === 0 ? (
                    <p className="text-center">Your cart is empty.</p>
                ) : (
                    <div className="row">
                        {cart.map((item) => (
                            <div key={item.cartItemId} className="col-sm-12 col-md-6 col-lg-4 my-3">
                                <div className="card p-3 rounded text-center h-100">
                                    <img className="card-img-top mx-auto" src={item.image} alt={item.name} style={{ width: '150px', height: '150px' }} />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">
                                            <a href="#">{item.name}</a>
                                        </h5>
                                        <p className="card-text">{item.price}</p>
                                        <button className="btn btn-danger mt-auto" onClick={() => removeFromCart(item.cartItemId)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default Cart;