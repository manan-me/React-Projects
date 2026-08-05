import { useState } from 'react'
import Accordian from './Components/Accordian/accordian'
import RandomColorGenerator from './Components/ColorGenerator/colorGeenerator'
import StarRating from './Components/StarRating/starRting'
import ImageSlider from './Components/ImageSlider/imgSlider'
import LoadBtnImages from './Components/LoadBtn/loadBtn'
import QrCodeGenerator from './Components/QR Code Generator/generateQrCode'
import './App.css'

function App() {

  return (
<div>

  <div className="mb-10">
    <Accordian/>
  </div>


  <div className="mb-10">
    <RandomColorGenerator/>
  </div>


  <div className="mb-10">
    <StarRating noOfStars={10}/>
  </div>


  <div className="mb-10">
    <ImageSlider url='https://picsum.photos/v2/list' page={'1'} limit={'10'}/>
  </div>

  <div className="mb-10">
    <LoadBtnImages />
  </div>

  <div className="mb-10">
    <QrCodeGenerator />
  </div>
</div>
  )
}

export default App
