import React from 'react'

const BestSellers = () => {
    return (
        <div>
            <div className="best-seller-bg">
                <div className="">
                    <h1 classNameName='mb-5 mt-5'>BEST SELLERS</h1>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner seller-card-img-center">
                            <div className="carousel-item active">
                                <div className="row row-cols-1 row-cols-md-3  g-4">
                                    <div className="col mb-5">
                                        <div className="card seller-card-img h-100">
                                            <img src="https://swissbeauty.in/cdn/shop/files/3_eebc5faf-5aa3-48e3-8f50-6997507d874d_360x.jpg?v=1695038919" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">HIGHLIGHTING PRIMER</h5>
                                                <p className="card-text">MRP : ₹ 299- ₹ 249</p>
                                                <button classNameName="btn btn-dark">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div className="card seller-card-img h-100">
                                            <img src="https://swissbeauty.in/cdn/shop/files/4-Copy_2_360x.jpg?v=1695039220" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">MAKEUP FIXER</h5>
                                                <p className="card-text">MRP : ₹ 299- ₹ 249</p>
                                                <button classNameName="btn btn-dark">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div className="card seller-card-img h-100">
                                            <img src="https://swissbeauty.in/cdn/shop/products/01tangerinebuff_7_360x.jpg?v=1683042825" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">NON_TRANSFER LIPSTIC</h5>
                                                <p className="card-text">MRP : ₹ 299- ₹ 249</p>
                                                <button classNameName="btn btn-dark">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSellers