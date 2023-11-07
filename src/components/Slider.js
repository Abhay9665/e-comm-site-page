import React from 'react'

const Slider = () => {
  return (
    <div>
    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://swissbeauty.in/cdn/shop/files/1700x510_7d8a3878-ba4f-4a88-af59-89f5d060bcd9_1728x.jpg?v=1698918592" className="d-block w-100" alt="SliderImg" />
      </div>
      <div className="carousel-item">
        <img src="https://swissbeauty.in/cdn/shop/files/Eco-Friendly-Gift-Box_1728x.gif?v=1698913341" className="d-block w-100" alt="SliderImg" />
      </div>
      <div className="carousel-item">
        <img src="https://swissbeauty.in/cdn/shop/files/1700x510_1_a1abfb6a-a47d-45ca-bea3-828412be4572_1728x.png?v=1697127185" className="d-block w-100" alt="SliderImg" />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    </div>
  )
}

export default Slider