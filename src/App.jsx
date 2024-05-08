import React from 'react'
import landingImage from './assets/main.png'
import logoImage from './assets/logo.png'
import rightImage from './assets/right.png'
import leftImage from './assets/left.png'
import downarrowImage from './assets/downarrow.png'
import homeImage from './assets/Vector.png'
import './App.css'

const App = () => {
  const sym = '>';
  return (
    <div className='overflow-x-hidden'>
      <header className='flex gap-[40vw] p-4 min-w-[100vw] w-[100vw]'>
        <div className=''>
          <img src={logoImage} className='w-[200px] ml-10' alt="" />
        </div>
        <div className='flex '>
              <span className='m-2 p-2 font-int text-[#3A3740] hover:cursor-pointer'>Home</span>
              <span className='m-2 p-2 font-int text-[#3A3740] hover:cursor-pointer'>Flash Card</span>
              <span className='m-2 p-2 font-int text-[#3A3740] hover:cursor-pointer'>Contact</span>
              <span className='m-2 p-2 font-int text-[#3A3740] hover:cursor-pointer'>FAQs</span>
        <span className='bg-gradient-to-r from-[#06286E] to-[#164EC0] p-1 pl-4 pr-4 m-2 rounded-2xl mb-3 text-[#fff] hover:cursor-pointer'>Login</span>
        </div>


      </header>
      <div className='mt-10 ml-14 flex'>
      <img src={homeImage} alt="" className='w-[25px]' />
      <span className='hover:cursor-pointer text-xl ml-2 mr-2 font-bold text-[#06286E]'>{sym}</span>
      <span className='hover:cursor-pointer text-[#696671]'>Flashcard</span>
      <span className='hover:cursor-pointer text-xl ml-2 mr-2 font-bold text-[#06286E]'>{sym}</span>
      <span className='hover:cursor-pointer text-[#696671]'>Mathematics</span>
      <span className='hover:cursor-pointer text-xl ml-2 mr-2 font-bold text-[#06286E]'>{sym}</span>
      <span className='hover:cursor-pointer text-[#06286E] font-bold'>Realtion and Function</span>

      </div>
      <main className='mt-10'>
        <div className='flex flex-col'>
          <div className='flex justify-center'>
            <span className='hover:cursor-pointer font-bold m-2 p-2 text-[#06286E] border-b-2 border-[#06286E]'>Study</span>
            <span className='hover:cursor-pointer text-[#3A3740]  m-2 p-2'>Quiz</span>
            <span className='hover:cursor-pointer text-[#3A3740]  m-2 p-2'>Test</span>
            <span className='hover:cursor-pointer text-[#3A3740]  m-2 p-2'>Game</span>
            <span className='hover:cursor-pointer text-[#3A3740]  m-2 p-2'>Others</span>
          </div>
          <img src={landingImage} className='w-[40%] lg:ml-[30%] md:ml-[27%]' alt="" />
        </div>
      </main>
      <div className='flex justify-between m-4 lg:mr-40 lg:ml-40 md:mr-40 md:ml-40'>
        <img src={rightImage} className='w-[180px]' alt="" />
        <img src={leftImage} className='w-[200px] object-contain' alt="" />

      </div>
      <footer className='mt-20 lg:ml-20 md:ml-5'>
        <span className='font-bold text-5xl bg-gradient-to-r from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text'>FAQ</span>
        <div className='flex flex-col p-2 m-2'>
          <div className='border-2 border-[#217EEC] rounded-xl m-2 p-4 lg:w-[60%] md:w-[60%] flex justify-between'>
            <span>Can education flashcards be used for all age groups?</span>
            <img src={downarrowImage} alt="" className='hover:cursor-pointer h-[10px]' />
          </div>
          <div className='border-2 border-[#217EEC] rounded-xl m-2 p-4 lg:w-[60%] md:w-[60%] flex justify-between'>
            <span>How do education flashcards work?</span>
            <img src={downarrowImage} alt="" className='hover:cursor-pointer h-[10px]' />
          </div>
          <div className='border-2 border-[#217EEC] rounded-xl m-2 p-4 lg:w-[60%] md:w-[60%] flex justify-between'>
            <span>Can education flashcards be used for test preparation?</span>
            <img src={downarrowImage} alt="" className='hover:cursor-pointer h-[10px]' />
          </div>
        </div>

      </footer>
    </div>
  )
}

export default App
