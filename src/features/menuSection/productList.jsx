import React, {useState, useEffect, createContext} from 'react';

const ProductListContext = createContext();


export function ProductListProvider ({children})
{
    const [burgerList, setBurgers] = useState([]);

    const [garnishList, setGarnish] = useState([]);

    const [dipList, setDip] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/menu')
        .then(response => {

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setBurgers(data.hamburguesas);
        })

        fetch('http://localhost:5000/extras')
        .then(response => {

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setGarnish(data.Guarniciones);
            setDip(data.Salsas);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }, []);

    return (
        <ProductListContext.Provider value={{burgerList, garnishList, dipList}}>
            {children}
        </ProductListContext.Provider>
    )
}

export default ProductListContext;
