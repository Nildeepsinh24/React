import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import EmployeeDetails from './EmployeeData'
// import UserApp from './UserApp'
import GalleryApp from './GalleryApp'
import Data from './Data'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <EmployeeDetails name="neeldeepsinh" age="20" salary="50000" address="abc road rajkot"/> */}

  {/* <UserApp name="neeldeepsinh" email="neeldeepsinh@gmail.com" age="18" address="abc road rajkot" hobbies={["playing","cooking","singing","designing"]} /> */}
{/* 
  <UserApp name="neeldeepsinh" email="neeldeepsinh@gmail.com" age="20" address="abc road rajkot" />

  <UserApp name="neeldeep" email="neeldeepsinh.jadeja@gmail.com" age="20" address="xyz road rajkot" /> */}


  <GalleryApp Data={Data} />
  </StrictMode>,
)