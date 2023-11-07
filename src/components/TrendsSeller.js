import React from 'react'

const TrendsSeller = () => {
  return (
    <div>
    <div className="best-seller-bg">
    <div className="">
        <h1 className='mb-5 mt-5'>TRENDS SELLERS</h1>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner seller-card-img-center">
                <div className="carousel-item active">
                    <div className="row row-cols-1 row-cols-md-3  g-4">
                        <div className="col mb-5">
                            <div className="card seller-card-img h-100">
                                <img src="https://swissbeauty.in/cdn/shop/products/SB-83803_5fac76b1-bb61-4c89-b2d7-1cd12a7002e1_360x.jpg?v=1695630141" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">HIGHLIGHTING PRIMER</h5>
                                    <p className="card-text">MRP : ₹ 299- ₹ 249</p>
                                    <button classNameName="btn btn-dark">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card seller-card-img h-100">
                                <img src="https://swissbeauty.in/cdn/shop/files/02_360x.png?v=1697280475" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">MAKEUP FIXER</h5>
                                    <p className="card-text">MRP : ₹ 299- ₹ 249</p>
                                    <button classNameName="btn btn-dark">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card seller-card-img h-100">
                                <img src="https://swissbeauty.in/cdn/shop/products/SB-83803_5fac76b1-bb61-4c89-b2d7-1cd12a7002e1_360x.jpg?v=1695630141" className="card-img-top" alt="..." />
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

export default TrendsSeller