import './Slider.css'
function Slider({ imgSrc, headingText, discountText, brandText }){
  return(
    <div className="slider">
      <div className="slider-img-container">
        <img src={imgSrc} alt="" />
      </div>
      <div className="deal-text">
        <h1>{headingText}</h1>
        <p className='discount'>{discountText}</p>
        <p className='dis-brands'>{brandText}</p>
      </div>
    </div>
  )
}
export default Slider