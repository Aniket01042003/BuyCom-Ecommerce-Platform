import React from 'react'
import './HomePage.css'
import HomeSectionCarousel from '../../component/HomeSectionCarousel/HomeSectionCarousel'
import Kurta from '../../../Data/Kurta'
import Mens_Kurta from '../../../Data/Mens_Kurta'
import mens_shirt from '../../../Data/mens_shirt'
import Womens_top from '../../../Data/Womens_top'
import Womens_jean from '../../../Data/Womens_jean'
import MainCarousel from '../../component/navigation/HomeCarousal/MainCarousel'

function HomePage() {
  return (
    <div >
      <div>
        <MainCarousel />
      </div>
      <div className='flex  flex-col hk'>
        <HomeSectionCarousel data={Mens_Kurta} sectionName={"Mens Kurtas"} />
        <HomeSectionCarousel data={Kurta} sectionName={"Womens Kurtas"} />
        <HomeSectionCarousel data={mens_shirt} sectionName={"Mens Shirts"} />
        <HomeSectionCarousel data={Womens_top} sectionName={"Womens Tops"} />
        <HomeSectionCarousel data={Womens_jean} sectionName={"Womens Jeans"} />
        <HomeSectionCarousel data={Kurta} sectionName={"Groceries"} />
      </div></div>
  )
}

export default HomePage
