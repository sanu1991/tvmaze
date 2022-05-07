import React, { createContext, useReducer } from 'react'
import BookShowReducer from '../reducer/BookShowReducer';

export const BookShowContext = createContext();

const initialState = {
    BookShow: [],
};

const BookShowContextProvider = (props) => {

    const [state, dispatch1] = useReducer(BookShowReducer, initialState);
    return (
        <BookShowContext.Provider value={{ ...state, dispatch1 }}>
            {props.children}
        </BookShowContext.Provider>
    )
}

export default BookShowContextProvider