import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <header className="print:hidden">
        <Navbar />
      </header>
      <Outlet />
      <Footer />
    </>
  )
}
