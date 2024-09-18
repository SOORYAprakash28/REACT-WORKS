import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext";


function AddItemForm() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState(1);

    const { addToCart } = useContext(CartContext);
    
    const handleSubmit =(e) => {
        e.preventDefault();
        if(!name || !price) return alert('Please fill all the fields!');
        const newItem = {
            id: Date.now(),
            name,
            price: parseFloat(price),
            quantity: parseInt(quantity)
        };

        addToCart(newItem);
        setName('');
        setPrice('');
        setQuantity(1);
    };
    return (
        <div>
            <h1>Add Item</h1>
            <form className="add-item-form">
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Item Name"/>

                <input 
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} 
                    placeholder="Item Price"
                    min="0.01"
                    step="0.01"/>
                <input 
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)} 
                    placeholder="Item Quantity"
                    min="1"/>

                <button type="submit" onClick={handleSubmit}>Add Item</button>
            </form>
            
        </div>
    )
}

export default AddItemForm
