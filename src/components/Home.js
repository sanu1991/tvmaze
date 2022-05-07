import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DetailsContext } from '../context/DetailsContext';
import { ProductsContext } from '../context/ProductsContext';

const Home = () => {
    // const Data = useContext(ProductsContext);
    // console.log(Data);
    const { items } = useContext(ProductsContext);
    // console.log(items);

    const { dispatch } = useContext(DetailsContext);

    return (
        <>
            <section style={{ marginTop: "90px" }}>
                <div class="text-center">
                    <h1 style={{ color: "#3c948b" }}>Shows</h1>
                </div>
                <div class="mx-5" style={{ height: "800px", overflowY: "scroll", backgroundColor: "#3c948b" }}>
                    <div class="container my-5">
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">

                            {items.map((mapItem) => (

                                <div class="col" key={mapItem.show.id}>
                                    <div class="card mx-auto" style={{ width: "17rem" }}>
                                        <img style={{ width: "17rem", height: "22rem", transition: "0.5s" }} src={mapItem.show.image.original} class="card-img-top" alt="error" />
                                        <div class="card-body">

                                            <h3 class="card-title text-center">{mapItem.show.name}</h3>
                                            <p class="card-text text-center">Rating: {mapItem.show.rating.average}</p>

                                            <Link to={`Details/${mapItem.show.id}`}>
                                                <div className="d-grid">
                                                    <button type="button" class="btn btn-primary" onClick={() => dispatch({ type: "VIEW_DETAILS", id: mapItem.show.id, mapItem })}>ViewMore</button>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            ))}

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home