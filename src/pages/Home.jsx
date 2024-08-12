import React from "react";
import Sidebar from "../components/Sidebar";
import { RiAddFill, RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { FiInfo } from "react-icons/fi";

const Home = () => {
  return (
    <>
      <section className="h-screen w-screen relative flex gap-3">
        <div className="lg:relative absolute w-72">
          <Sidebar />
        </div>
        <div className="context w-full h-screen relative z-10 px-10 pt-10 bg-[#F2F7F2]">
          <a
            href="/"
            className="text-lg underline text-green-600 flex items-center gap-2"
          >
            <span className="icon">
              <RiArrowLeftLine />
            </span>{" "}
            Go Back
          </a>
          <h1 className="text-3xl w-[650px] font-semibold my-6 mb-0 text-[#003C2F]">
            What is your optimal method for employers to reach out to you?
          </h1>
          <p className="my-4 text-[#003C2F]/80">
            We suggest including an email and phone number.
          </p>
          <form
            action=""
            className="sm:w-[705px] w-[580px] sm:h-[565px] h-[630px] py-10 pt-5 px-3 rounded-3xl bg-white relative"
          >
            <div className="FormContent flex w-full h-full">
              <div className="w-[191px] h-[246px] flex flex-col">
                <div className="bg-[#E9F7E6] h-[180px] rounded-3xl flex items-center flex-col">
                  <img
                    src="/assets/53.png"
                    alt="avatar"
                    className="h-full w-full mix-blend-darken bg-cover bg-no-repeat"
                  />
                </div>
                <button className="mt-2 text-[#22AD01] text-sm tracking-wider bg-[#F2F7F2] px-4 py-4 rounded-xl text-nowrap">
                  UPLOAD PHOTO
                </button>
              </div>
              <div className="w-full absolute flex flex-col gap-4 sm:ml-0 ml-5">
                <div className="w-full flex gap-4 sm:px-[20vh] px-[12vh] sm:ml-20 ml-24">
                  <div className="w-1/2">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Akash"
                      className="w-full bg-[#F2F7F2] placeholder:font-medium placeholder:text-black h-[40px] focus:border-none focus:outline-none rounded-lg p-2"
                    />
                  </div>
                  <div className="w-1/2 mr-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Surname
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Padhi"
                      className="w-full h-[40px] placeholder:font-medium placeholder:text-black bg-[#F2F7F2] focus:border-none focus:outline-none rounded-lg p-2"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:px-[20vh] px-[12vh] sm:pr-[10vh] sm:ml-20 ml-24 pr-10">
                  <div className="w-full">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Profession
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Software Engineer"
                      className="w-full bg-[#F2F7F2] placeholder:font-medium placeholder:text-black h-[40px] focus:border-none focus:outline-none rounded-lg p-2"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Software Engineer"
                      className="w-full h-[40px] placeholder:font-medium placeholder:text-black bg-[#F2F7F2] focus:border-none focus:outline-none rounded-lg p-2"
                    />
                  </div>
                </div>
                <div className="w-full flex gap-4 pr-16">
                  <div className="w-[45%]">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Akash"
                      className="w-full bg-[#F2F7F2] placeholder:font-medium placeholder:text-black h-[40px] focus:border-none focus:outline-none rounded-lg p-2"
                    />
                  </div>
                  <div className="w-[48%]">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. India"
                      className="w-full h-[40px] placeholder:font-medium placeholder:text-black bg-[#F2F7F2] focus:border-none focus:outline-none rounded-lg p-2"
                    />
                  </div>
                  <div className="w-[48%]">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Pincode
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 751452"
                      className="w-full h-[40px] placeholder:font-medium placeholder:text-black bg-[#F2F7F2] focus:border-none focus:outline-none rounded-lg p-2"
                    />
                  </div>
                </div>
                <div className="w-full flex gap-4 pr-16">
                  <div className="w-[48%]">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. akash@gmail.com"
                      className="w-full bg-[#F2F7F2] placeholder:font-medium placeholder:text-black h-[40px] focus:border-none focus:outline-none rounded-lg p-2"
                    />
                  </div>
                  <div className="w-[48%]">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. +91 0123456789"
                      className="w-full h-[40px] placeholder:font-medium placeholder:text-black bg-[#F2F7F2] focus:border-none focus:outline-none rounded-lg p-2"
                    />
                  </div>
                </div>
              </div>
              <div className="additionalInfo my-5 absolute bottom-0 w-full pr-10">
                <p className="text-green-600 mb-2 flex items-center justify-between">
                  Add additional information to your resume (optional)
                  <span className="icons">
                    <FiInfo />
                  </span>
                </p>
                <div className="flex gap-4">
                  <div className="flex sm:flex-row flex-col gap-2">
                    <button className="mt-2 flex items-center justify-center gap-2 py-[16px] px-[32px] tracking-wider uppercase h-[50px] text-green-600 text-sm bg-[#E9F7E6] rounded-xl text-nowrap">
                      LinkedIn{" "}
                      <span className="Icon">
                        <RiAddFill />
                      </span>
                    </button>
                    <button className="mt-2 flex items-center justify-center gap-2 py-[16px] px-[32px] tracking-wider uppercase h-[50px] text-green-600 text-sm bg-[#E9F7E6] rounded-xl text-nowrap">
                      Website{" "}
                      <span className="Icon">
                        <RiAddFill />
                      </span>
                    </button>
                  </div>
                  <button className="mt-2 flex items-center justify-center gap-2 py-[16px] px-[32px] tracking-wider uppercase h-[50px] text-green-600 text-sm bg-[#E9F7E6] rounded-xl text-nowrap">
                    Document card{" "}
                    <span className="Icon">
                      <RiAddFill />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="formButtons flex justify-end px-5 gap-2 py-8 h-40 my-10">
              <button
                type="button"
                className="h-[50px] flex items-center justify-center px-6 py-2 text-black rounded-lg uppercase underline"
              >
                PREVIEW
              </button>
              <button
                type="submit"
                className="flex h-[50px] gap-2 items-center justify-center px-6 py-2 text-white bg-[#22AD01] rounded-lg uppercase tracking-wide"
              >
                Save and Continue{" "}
                <span className="Icon">
                  <RiArrowRightLine />
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
