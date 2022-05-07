const BookShowReducer = (state, action) => {

    let Item;


    switch (action.type) {
        case "Book_Show":
            // console.log("you clicked ViewMore btn");
            Item = action.mapItem;
            return {
                BookShow: [Item]
            }
            break;

        default: return state;
    }

}

export default BookShowReducer