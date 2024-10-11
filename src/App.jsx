import "./App.css";
import React from "react";
import Testimonial from "./components/Testimonial";
import reviews from "./data";

function App() {
  return (
    <div>

      <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-gray-200">

        <div className="text-center">

        <h1 className="text-4xl font-bold mt-[-250px]">Our Testimonials</h1>

        <div className=" h-[4px] w-1/5 bg-violet-400 mt-1 mx-auto "></div>

        </div>

      </div>

      <div>
        <Testimonial reviews = {reviews}/>
      </div>

    </div>
  );
};

export default App;
