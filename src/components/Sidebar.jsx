import React, { useState } from "react";
import { RiBarChartHorizontalLine } from "react-icons/ri";

const Sidebar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuActive = () => {
    if (window.screen.width < 1024) {
      setMenuActive(prev => !prev);
      console.log(menuActive);
    }
  };

  const menuItems = [
    { id: 1, label: "Personal Info", active: true },
    { id: 2, label: "Education", active: false },
    { id: 3, label: "Work Experience", active: false },
    { id: 4, label: "Skills", active: false },
    { id: 5, label: "Summary", active: false },
    { id: 6, label: "Finalize", active: false }
  ];

  return (
    <div className="h-[250vh] w-[72px] lg:w-72 flex relative">
      <aside
        id="logo-sidebar"
        className={`lg:relative absolute top-0 left-0 bottom-0 z-40 w-72 h-full transition-transform lg:translate-x-0 ${menuActive
          ? "translate-x-0"
          : "-translate-x-[90%]"}`}
        aria-label="Sidebar"
      >
        <div className="h-full py-4 overflow-y-auto bg-white">
          <div className="flex justify-between items-center mb-5 pl-5">
            <h1 className="font-extrabold text-xl">
              G<span className="text-[#22AD01]">oo</span>d Employee
            </h1>
            <div
              onClick={handleMenuActive}
              className="bg-[#003C2F] cursor-pointer radCus w-10 h-10 text-white font-bold text-xl flex items-center justify-center"
            >
              <RiBarChartHorizontalLine className="rotate-180" />
            </div>
          </div>
          <div className="w-full px-4 h-16 flex items-center justify-center gap-3 my-5">
            <div className="h-full w-full flex items-center gap-4 bg-[#F2F7F2] rounded-lg px-2">
              <div className="logo h-[40px] max-w-[40px] w-[40px] bg-green-500 flex rounded-full overflow-hidden">
                <img
                  src="/assets/53.png"
                  alt="logo"
                  className="h-full w-full bg-cover bg-no-repeat"
                />
              </div>
              <div className="flex flex-col text-sm">
                <h1 className="Name h-full text-nowrap flex items-center font-semibold text-gray-800">
                  Ankush Kumar Padhi
                </h1>
                <span className="gmail text-xs">
                  ankushkumarpadhi@gmail.com
                </span>
              </div>
            </div>
          </div>
          <ul className="space-y-3 px-2 pl-5 font-semibold">
            <div className="wrapperLi h-[247px] relative">
              <div className="h-full flex self-start w-2 top-2 left-5 bg-[#e3e3e3] absolute" />
              {menuItems.map(item =>
                <li key={item.id} className="relative z-10">
                  <a
                    href="#"
                    className={`tracking-wider flex items-center p-2 rounded-lg group hover:text-[#22AD01] ${item.active
                      ? "text-[#22AD01]"
                      : "text-gray-600"}`}
                  >
                    <span className="bg-green-600 rounded-full w-[30px] h-[30px] flex items-center justify-center text-white text-sm font-bold">
                      {item.id}
                    </span>
                    <span className="ms-3 flex-1 whitespace-nowrap">
                      {item.label}
                    </span>
                  </a>
                </li>
              )}
            </div>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
