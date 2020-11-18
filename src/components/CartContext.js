import React ,{ useContext, useState} from 'react';
export const CartContext = React.createContext();
export const useCartContext = () => useContext(CartContext);


export default function CartProvider({children, defaultCart=[]}){
    const [cart, setCart] = useState(defaultCart);
    function add(item){
        const itemFound= cart.find((it)=>it.id === item.id) 
        if(!itemFound){
            setCart([...cart,item])
        }
    
    };


    function remove(itemId){
    
        console.log('quitas un item', itemId)
        setCart (cart.filter(item => item.id !== itemId ))
    };
    return <CartContext.Provider value = {{cart, add, remove}}>
        {children}
    </CartContext.Provider>
};