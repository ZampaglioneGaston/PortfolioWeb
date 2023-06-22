function NavegationBar(){
  return <section data-test='bottonNav'>
  <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-600">
    <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">



  <a type="a" href='#main' className="flex items-center flex-col  justify-center px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600">
    <svg className="w-6 h-6 mb-1 text-gray-700 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
    </svg>
    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-600">Home</span>
  </a> 

      <a href='#techStack' type="a" className="flex items-center flex-col  justify-center px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600" >
        <svg className="w-6 h-6 mb-1  text-gray-700 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
          <path clip-rule="evenodd" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"></path>
        </svg>
        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-600 whitespace-no-wrap truncate">Tech Stack</span>
      </a>

    
      <a type="a" href='#experience' className="flex items-center flex-col  justify-center px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-1 text-gray-700 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-600" fill="currentColor" viewBox="0 0 20 20" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
</svg>

        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-600">Experiencies</span>
      </a>


 
      <a type="a" href='#aboutMe' className="flex items-center flex-col  justify-center px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600">
        <svg className="w-6 h-6 mb-1 text-gray-700 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path clip-rule="evenodd" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"></path>
        </svg>
        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-600 whitespace-no-wrap truncate">About Me</span>
      </a>

    </div>
  </div>
</section>
     
}

export default NavegationBar