"use client";

import Head from 'next/head'
import { AiFillLinkedin } from 'react-icons/ai';

import { useState } from "react";
import InfoSec from './components/infoSection'
import TechStack from './components/techStack'
import TechStackOther from './components/techStackOthers'
import NavegationBar from './components/navBar'
import Experience from './components/experience'
import AboutMe from './components/aboutMe'
import { BrowserRouter } from 'react-router-dom';

function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Gaston Zampaglione</title>
        </Head>
        <main className=" bg-white max-w-none overflow-auto max-h-none dark:bg-black" data-test='background'>
          <section data-test='topBar' id='main'>
            <nav className='py-10 px-2 mb-12 flex justify-between md:px-20 lg:px-40'>
              <h1 className='text-2xl font-LouisBold font-bold dark:text-white' data-test='welcome' >Professional Portfolio</h1>
              <ul className='flex items-center' data-test='topButons'>
                <li data-test='darkThemeIcon' className='cursor-pointer  dark:text-white mt-2' onChange={() => setDarkMode(!darkMode)}>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5  after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 whitespace-no-wrap truncate">Dark mode</span>
                  </label>
                </li>
                <li data-test='linkedinIcon'><a href='https://www.linkedin.com/in/gastonzampaglione/' target="_blank"> <button type="button" className="text-2xl bg-gradient-to-r dark:from-green-400 dark:to-blue-500 dark:hover:from-pink-500 dark:hover:to-orange-500   from-pink-500 to-orange-500 hover:from-green-400 hover:to-blue-500 px-4 py-2 rounded-xl ml-8">
                  <div>
                    <AiFillLinkedin />
                  </div>
                </button>
                </a>
                </li>
              </ul>
            </nav>
          </section>

          <section><NavegationBar /></section>

          <section><InfoSec /></section>

          <div className='max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full'><p className='my-5 flex justify-center text-5xl font-LouisLight font-bold dark:text-white border-b-2' id="techStack">Tech Stack</p></div>
          <TechStack />

          <section><TechStackOther /></section>

          <div className='max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full'><p className='my-2 flex justify-center text-5xl font-LouisLight font-bold dark:text-white border-b-2' id="experience">Experience</p></div>
          <section> <Experience /> </section>

          <div className='max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full'><p className='my-1 flex justify-center text-5xl font-LouisLight font-bold dark:text-white border-b-2' id="aboutMe">About Me</p></div>
          <section><AboutMe /></section>
        </main>
      </div> 
      </div>
  )
}

export default Home