import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

import video from "../assets/car-washing-video.mp4";
import Accordian from "./Accordian";

const Faq = () => {
  
  return (
    <>
      <section className="faq-section md:p-14 px-2 py-8 bg-slate-100">
        <div className="flex">
          <div
            className="grid lg:grid-cols-2 gap-4
          "
          >
            <div className="video-wrapper mx-auto overflow-hidden">
              <video width="500px" height="500px" controls="controls">
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <div className="text-wrapper">
              <p className="text-lg font-medium text-sky-600 relative after:content-[''] after:h-[2px] after:w-14 after:bg-blue-500 after:absolute after:top-1/2 after:ms-1">
                Our Service Benefits
              </p>
              <h2 className="md:text-5xl text-2xl font-semibold my-3 text-cyan-950">
                Why You Should Choose Our Services
              </h2>
              <p className="text-lg my-8 text-slate-500">
                There are many variations of passages of but the majority have
                in some form, by injected humou or words which don't look even
                slightly believable of but the majority have suffered look even
                slightly believable of but the majority have suffered.
              </p>

              <div className="flex gap-8 flex-wrap justify-center">
                <div className="bg-white p-3 text-lg flex items-center gap-1"><BsCheckCircleFill className="inline me-1 text-blue-500"/><span>Reliable and Proven</span></div>
                <div className="bg-white p-3 text-lg flex items-center gap-1"><BsCheckCircleFill className="inline me-1 text-blue-500"/> <span>Best Team Members</span></div>
              </div>

              {/* ==============FAQ============= */}

              <div className="faq-wrapper mt-4">

            <Accordian/>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
