import React from "react";
import { useState } from "react";
import '../ItemCount/ItemCount.css';


const ItemCount = ({stockItems}) => {

    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItems);

    const incrementarStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        } 
    }

    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
        
    }

    return (
        <div className="item-count-container">
            <div className="counter-row">
                <div className="counter-col">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn decrement-button" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn counter-button">{counter}</button>
                        <button type="button" className="btn increment-button" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="add-to-cart-row">
                <div className="add-to-cart-col">
                    <button type="button" className="btn add-to-cart-button">Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;