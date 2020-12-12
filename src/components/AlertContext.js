import React ,{ useContext, useState} from 'react';
export const AlertContext = React.createContext();
export const useAlertContext = () => useContext(AlertContext);


export default function AlertProvider({children, defaultOrder=[]}){
    const [order, setOrder] = useState(defaultOrder);
    
    return <AlertContext.Provider value = {{order, setOrder}}>
        {children}
    </AlertContext.Provider>
};