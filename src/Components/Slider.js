import  React from 'react'


export default function Slider(prop) {

    return(<>
<div id="carouselExampleCaptions" className="carousel slide "  data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img   src="https://scontent.fstv8-2.fna.fbcdn.net/v/t1.6435-9/71330068_604001270133021_3100586626703687680_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=19026a&_nc_ohc=wOYV8jhNXsgAX_dsISZ&_nc_ht=scontent.fstv8-2.fna&oh=00_AT_C4afeCkv94mdzeXwGl_corlAIIv995ZFFyhNJ3lXzWg&oe=6281B72F" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Some text here</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img  src="https://scontent.fstv8-1.fna.fbcdn.net/v/t1.6435-9/161864386_975295309670280_2517895772834565438_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=e3f864&_nc_ohc=q5nzfpBbMNUAX9ftVmT&tn=oMCeRUqVenBfHHYM&_nc_ht=scontent.fstv8-1.fna&oh=00_AT8jCmhTK8QJAIKMuoFSxNoNehya5ly9ZMPb9vpiJPj6rw&oe=6280AA09" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://scontent.fnag1-3.fna.fbcdn.net/v/t1.6435-9/156698268_823676721567465_7405449238288358821_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=e3f864&_nc_ohc=mNddNwgylYcAX9U1nx3&_nc_oc=AQn9yeQnDKTvauQNlHhu9NcSFH411RYDvZWG9mMqzJZ9YcJdSQMK-L2y38iKeESNs0XNGrRUBB9gxmTvEbqw6ZzW&_nc_ht=scontent.fnag1-3.fna&oh=00_AT8MeHuMJsqLHk-cGy5MpjrEOmPOYj5ooxV0yz-cpL8VBw&oe=6282DFED" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

     </>   );}