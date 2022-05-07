import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { BookShowContext } from '../context/BookShowContext';
import { DetailsContext } from '../context/DetailsContext';



const Details = () => {
    const detailsData = useContext(DetailsContext);
    console.log(detailsData);
    console.log(detailsData.Details[0]);
    const { Details } = useContext(DetailsContext);
    console.log(Details);

    const { dispatch1 } = useContext(BookShowContext);

    return (
        <>
            <section style={{ margin: "130px 0 50px 0" }}>
                <div className="container-fluid">

                    {Details.map((mapItem) => (

                        <div class="card mx-auto" style={{ maxWidth: "1000px" }} key={mapItem.show.id} >
                            <div class="row g-0" >
                                <div class="col-md-4">
                                    <img src={mapItem.show.image.original} class="img-fluid rounded-start" alt="error" />
                                </div>
                                <div class="col-md-8  my-auto">
                                    <div class="card-body" style={{ color: "#3c948b" }}>
                                        <h1 class="card-title">{mapItem.show.name}</h1> <br />
                                        <p class="card-title">Movie Description:   {mapItem.show.summary}</p> <br />
                                        <p class="card-text"><span>Genre: </span>
                                            {mapItem.show.genres.map((genres) => (
                                                <span> {genres} | </span>
                                            ))}</p>
                                        <p class="card-title">Rating: {mapItem.show.rating.average}</p>
                                        <p class="card-title">Language: {mapItem.show.language}</p>
                                        <p class="card-title">Runtime: {mapItem.show.averageRuntime} Min</p>
                                        <p class="card-title">Status:  {mapItem.show.status} </p>
                                        <p class="card-title">Schedule: {mapItem.show.schedule.days[0]}  {mapItem.show.schedule.time} PM</p>

                                        <Link to={`BookShow/${mapItem.show.id}`}>
                                            <div className="d-grid">
                                                <button type="button" class="btn btn-primary" onClick={() => dispatch1({ type: "Book_Show", id: mapItem.show.id, mapItem })}>BookShow</button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>
            </section>

        </>
    )
}

export default Details