import React from "react";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <section className="h-screen w-screen relative">
      {/* Sidebar */}
      <div className="h-full w-[30vh]">
        <Sidebar />
      </div>
      
    </section>
  );
};

export default Home;
