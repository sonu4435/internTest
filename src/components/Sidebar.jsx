import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div className="h-screen w-screen flex">
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 h-fit absolute text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <aside
          id="logo-sidebar"
          className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
            <a href="/" className="flex justify-between items-center  mb-5">
              <h1 className="font-bold text-xl">
                G<span className="text-[#22AD01]">oo</span>d Employee
              </h1>
              <div className="bg-green-500 rounded-lg w-10 h-10 text-white font-bold text-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </div>
            </a>
            <div className="w-full px-4 h-16 bg-gray-200 flex items-center justify-center gap-3 rounded-lg my-5">
              <div className="logo h-3/4 max-w-20 w-12 bg-green-500 flex rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1595347097560-69238724e7bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="logo"
                  className="h-full w-full bg-cover bg-no-repeat "
                />
              </div>
              <div className="flex flex-col text-sm">
                <h1 className="Name h-full text-nowrap  flex items-center font-semibold text-gray-800">
                  Ankush Kumar Padhi
                </h1>
                <span className="gmail text-xs">ankushkumarpadhi@gmail.com</span>
              </div>
            </div>
            <ul className="space-y-3 px-2 font-semibold">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-green-500 rounded-lg hover:bg-gray-100  group hover:text-green-500"
                >
                  <span className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm font-bold">
                    1
                  </span>
                  <span className="ms-3">Personal Info</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100  group hover:text-green-500"
                >
                  <span className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm font-bold">
                    2
                  </span>
                  <span className="flex-1 ms-3 whitespace-nowrap">Education</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100  group hover:text-green-500"
                >
                  <span className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm font-bold">
                    3
                  </span>
                  <span className="flex-1 ms-3 whitespace-nowrap">Work Experience</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100  group hover:text-green-500"
                >
                  <span className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm font-bold">
                    4
                  </span>
                  <span className="flex-1 ms-3 whitespace-nowrap">Skills</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100  group hover:text-green-500"
                >
                  <span className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm font-bold">
                    5
                  </span>
                  <span className="flex-1 ms-3 whitespace-nowrap">Summary</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100  group hover:text-green-500"
                >
                  <span className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm font-bold">
                    6
                  </span>
                  <span className="flex-1 ms-3 whitespace-nowrap">Finalize</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <div className="context w-full h-screen relative z-10 ml-[20vw] px-10 pt-10">
          <a className="text-lg font-bold text-green-600">Go back</a>
          <h1 className="text-3xl w-[60%] font-semibold my-6 mb-0 text-green-900">
            What is your optimal method for employers to reach out to you ?
          </h1>
          <p className="mt-4 text-green-600">
            We suggest including an email and phone number.
          </p>
          <form
            action=""
            className="w-[80%] h-3/4 py-10 px-5 rounded-3xl bg-white relative"
          >
            <div className="FormContent flex w-full h-full gap-4">
              <div className="bg-green-200 h-40 w-40 rounded-3xl flex items-center flex-col">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/011/490/381/original/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-white-background-vector.jpg"
                  alt="avatar"
                  className="h-full w-full mix-blend-darken bg-cover bg-no-repeat"
                />
                <button className="mt-2 text-green-600 text-sm font-bold bg-green-100 px-4 py-4 rounded-xl text-nowrap">
                  UPLOAD PHOTO
                </button>
              </div>
              <div className='w-full absolute flex flex-col gap-4 ml-5'>
                <div className='w-full flex gap-4 px-[20vh] ml-10'>
                <div className="w-[48%]">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Akash"
                    className="w-full bg-green-100/60 placeholder:font-semibold placeholder:text-black/80 h-[40px] border-2 border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="w-[48%]">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Surname
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Padhai"
                    className="w-full h-[40px] border-2 placeholder:font-semibold placeholder:text-black/80 bg-green-100/60 border-gray-300 rounded-lg p-2"
                  />
                </div>
                </div>
                <div className='flex flex-col gap-3 px-[20vh] ml-10'>
                <div className="w-full">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Profession
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Enginner"
                    className="w-full bg-green-100/60 placeholder:font-semibold placeholder:text-black/80 h-[40px] border-2 border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    City
                  </label>
                  <input
                    type="text"
                   placeholder="e.g. Software Enginner"
                    className="w-full h-[40px] border-2 placeholder:font-semibold placeholder:text-black/80 bg-green-100/60 border-gray-300 rounded-lg p-2"
                  />
                </div>
                </div>
                <div className='w-full flex gap-4 pr-10'>
                <div className="w-[48%]">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Akash"
                    className="w-full bg-green-100/60 placeholder:font-semibold placeholder:text-black/80 h-[40px] border-2 border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="w-[48%]">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Padhai"
                    className="w-full h-[40px] border-2 placeholder:font-semibold placeholder:text-black/80 bg-green-100/60 border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="w-[48%]">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Pincode
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Padhai"
                    className="w-full h-[40px] border-2 placeholder:font-semibold placeholder:text-black/80 bg-green-100/60 border-gray-300 rounded-lg p-2"
                  />
                </div>
                </div>
                <div className='w-full flex gap-4 pr-10'>
                <div className="w-[48%]">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email 
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Akash"
                    className="w-full bg-green-100/60 placeholder:font-semibold placeholder:text-black/80 h-[40px] border-2 border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="w-[48%]">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Surname
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Padhai"
                    className="w-full h-[40px] border-2 placeholder:font-semibold placeholder:text-black/80 bg-green-100/60 border-gray-300 rounded-lg p-2"
                  />
                </div>
                </div>
              </div>
              </div>
            <div className="additionalInfo mt-6">
              <p className="text-green-600 mb-2">
                Add additional information to your resume (optional)
              </p>
              <div className="flex gap-4">
                 <button className="mt-2 uppercase text-green-600 text-sm font-bold bg-green-100 px-4 py-4 rounded-xl text-nowrap">
                  Linkedin
                </button>
                 <button className="mt-2 uppercase text-green-600 text-sm font-bold bg-green-100 px-4 py-4 rounded-xl text-nowrap">
                  Website
                </button>
                 <button className="mt-2 uppercase text-green-600 text-sm font-bold bg-green-100 px-4 py-4 rounded-xl text-nowrap">
                  Document card
                </button>
              </div>
            </div>
            <div className="formButtons flex justify-end px-5 gap-2 mt-8">
              <button
                type="button"
                className="flex items-center justify-center px-6 py-2 text-black rounded-lg uppercase underline"
              >
                PREVIEW
              </button>
              <button
                type="submit"
                className="flex items-center justify-center px-6 py-2 text-white bg-green-600 border-2 border-green-600 rounded-lg hover:bg-green-700"
              >
                NEXT: EDUCATION
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7-7 7M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </form>
          </div>
          </div>
    </>
  )
}

export default Sidebar;

