import React from 'react'

const ShopTheLook = () => {
    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='cards-wrapper'>
                            <div className="card" style={{width:'18rem'}}>
                                <img src="https://swissbeauty.in/cdn/shop/files/Shop-by-Look_2_360x.jpg?v=1686740005" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <div className='cards-wrapper'>
                            <div className="card" style={{width:'18rem'}}>
                                <img src="https://swissbeauty.in/cdn/shop/files/Shop-by-Look_5_360x.jpg?v=1686740036" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <div className='cards-wrapper'>
                            <div className="card" style={{width:'18rem'}}>
                                <img src="https://swissbeauty.in/cdn/shop/files/Double_Winged_Eyes_360x.jpg?v=1669977241" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="carousel-item">
                    <div className='cards-wrapper'>
                        <div className="card" style={{width:'18rem'}}>
                            <img src="https://swissbeauty.in/cdn/shop/files/Splash_of_Color_720x_b3c38518-e4aa-4fd9-8779-e8a71d95fb09_360x.jpg?v=1676349990" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="carousel-item">
                <div className='cards-wrapper'>
                    <div className="card" style={{width:'18rem'}}>
                        <img src="https://swissbeauty.in/cdn/shop/files/Shop-by-Look_2_360x.jpg?v=1686740005" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

            </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default ShopTheLook