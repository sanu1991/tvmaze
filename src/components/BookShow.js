import React, { useContext } from 'react'
import { BookShowContext } from '../context/BookShowContext';

const BookShow = () => {
    const BookShowData = useContext(BookShowContext);
    console.log(BookShowData);
    console.log(BookShowData.BookShow[0]);
    const { BookShow } = useContext(BookShowContext);
    console.log(BookShow);

    return (
        <>
            <section style={{ margin: "150px 0 50px 0", height: "360px" }}>
                <div className="container">
                    {BookShow.map((mapItem) => (

                        <div class="mx-auto" style={{ maxWidth: "500px" }} key={mapItem.show.id} >

                            <form>
                                <div class="mb-3">
                                    <label class="form-label">Movie Name </label>
                                    <input type="text" class="form-control" value={mapItem.show.name} />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Runtime </label>
                                    <input type="text" class="form-control" value={mapItem.show.averageRuntime} />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Language </label>
                                    <input type="text" class="form-control" value={mapItem.show.language} />
                                </div>
                            </form>

                        </div>

                    ))}
                </div>
            </section>
        </>
    )
}

export default BookShow