import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Category from './Component/Category'
import Product from './Component/Product'
import { useEffect } from 'react'
import axios from 'axios';

function App() {
  const [catName,setCatname]=useState('')


  
  return (
    <>
    <div className='py-[40px]'>
      <div className='max-w-[1320px] mx-auto'>
        <h1 className='text-center font-bold text-[40px] mb-[30px]'>Our Products</h1>
        <div className='grid grid-cols-[30%_auto] gap-[20px]'>
          <div >
          <Category setCatname={setCatname}/>
          </div>
          <div><Product catName={catName}/></div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App
