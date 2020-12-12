import React ,{ useContext, useState} from 'react';
export const CartContext = React.createContext();
export const useCartContext = () => useContext(CartContext);


export default function CartProvider({children, defaultCart=[]}){
    const [cart, setCart] = useState(defaultCart);
    function add(itemWrapper){
        const itemFound= cart.find((iw)=>iw.item.id === itemWrapper.item.id) 
        if(!itemFound){
            setCart([...cart, itemWrapper])
        }
    
    };


    function remove(itemId){
        setCart (cart.filter(iw => iw.item.id !== itemId ))
    };

    function empty(itemId){
        setCart ([]);
    };
    return <CartContext.Provider value = {{cart, add, remove, empty}}>
        {children}
    </CartContext.Provider>
};