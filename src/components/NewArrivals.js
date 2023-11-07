import React from 'react'

const NewArrivals = () => {
  return (
    <div>
    <div className="best-seller-bg">
    <div className="">
        <h1 className='mb-5 mt-5 mb-5'>NEW ARRIVELS</h1>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner seller-card-img-center">
                <div className="carousel-item active">
                    <div className="row row-cols-1 row-cols-md-3  g-4">
                        <div className="col mb-5">
                            <div className="card seller-card-img h-100">
                                <img src="https://swissbeauty.in/cdn/shop/files/BOP_ccbfd33d-6a3a-4ada-b13f-fecc4618674c_360x.jpg?v=1697113165" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">HIGHLIGHTING PRIMER</h5>
                                    <p className="card-text">MRP : ₹ 299- ₹ 249</p>
                                    <button className="btn btn-dark">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card seller-card-img h-100">
                                <img src="https://swissbeauty.in/cdn/shop/files/05_1b4fdec7-ac0c-4f9c-862c-4d13e4bf4a07_360x.jpg?v=1697262993" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">MAKEUP FIXER</h5>
                                    <p className="card-text">MRP : ₹ 299- ₹ 249</p>
                                    <button className="btn btn-dark">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card seller-card-img h-100">
                                <img src="https://swissbeauty.in/cdn/shop/files/Artboard2-min_360x.png?v=1698745552" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">NON_TRANSFER LIPSTIC</h5>
                                    <p className="card-text">MRP : ₹ 299- ₹ 249</p>
                                    <button className="btn btn-dark">ADD TO CART</button>
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

export default NewArrivals