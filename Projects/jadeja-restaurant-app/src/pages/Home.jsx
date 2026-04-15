import React from 'react'
import BannerApp from '../components/BannerApp'
import CategoryApp from '../components/CategoryApp'
import FeaturesProducts from '../components/FeaturesProducts'
import CustomerReviewsApp from '../components/CustomerReviewsApp'
import DownloadApp from '../components/DownloadApp'

export default function Home() {
  return (
    <div className="home-page">
      <BannerApp />
      <CategoryApp />
      <FeaturesProducts />
      <CustomerReviewsApp />
      <DownloadApp />
    </div>
  )
}
