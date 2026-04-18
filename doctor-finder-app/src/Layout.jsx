import React from 'react'
import HeaderApp from './components/common/HeaderApp'
import BannerApp from './components/common/BannerApp'
import CategoryApp from './components/pages/CategoryApp'
import DoctorSlider from './components/pages/DoctorSlider'
import ChoiceApp from './components/pages/ChoiceApp'
import TestimonialsApp from './components/pages/TestimonialsApp'
import FooterApp from './components/common/FooterApp'
export default function Layout() {
  return (
    <div>
    <HeaderApp />
    <BannerApp />
    <CategoryApp />
    <DoctorSlider />
    <ChoiceApp />
    <TestimonialsApp />
    <FooterApp />
    </div>
  )
}
