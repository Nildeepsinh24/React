import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarApp from './components/NavbarApp'
import FooterApp from './components/FooterApp'

export default function MainLayout() {
  return (
    <div className="main-layout">
      <NavbarApp />
      <main>
        <Outlet />
      </main>
      <FooterApp />
    </div>
  )
}
