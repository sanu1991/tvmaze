import React, { createContext, useEffect, useState } from 'react'

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [items, setItems] = useState([]);

    const getMovieInfo = async () => {
        try {
            // https://api.tvmaze.com/search/shows?q=all  -- url get from
            const url = `https://api.tvmaze.com/search/shows?q=all`;

            const response = await fetch(url);
            console.log(response);

            const data = await response.json();
            console.log(data);

            setItems(data);
            console.log(items);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMovieInfo();
    }, []);

    return (
        <ProductsContext.Provider value={{ items: [...items] }}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider