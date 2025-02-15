import React from "react";
import { faArrowDown } from "../assets";

const Main = () => {
  return (
    <main className="h-screen w-full flex justify-center items-center px-4">
      <div className="text-center w-[90%] max-w-[720px] flex flex-col gap-10 items-center">
        <h1 className="font-bold text-6xl md:text-7xl">
          Sign Up, Get Rewarded: Free Coffee
          <span className="text-[#008F0A]"> + $50</span>
        </h1>
        <div className="text-xl md:text-2xl">
          I’m giving you a referral code to register in{" "}
          <a href="https://worldcoin.org/uk-ua/world-app" className="underline">World App</a>. By
          filling out the form below, you will receive:
        </div>
        <div className="flex flex-col items-center md:flex-row justify-center text-2xl sm:text-2xl md:text-3xl gap-5 w-full">
          <div className="flex items-center gap-2">
            <span>💰</span>
            <span>
              43.3 WLD ~{" "}
              <span className="text-[#008F0A] font-semibold">225.53 PLN</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span>☕</span>
            <span>Free cup of coffee</span>
          </div>
        </div>
        <div className="mt-4 rounded-full bg-[#2D2C2D] w-10 h-10 flex justify-center items-center animate-bounce">
          <img src={faArrowDown} alt="" className="w-5 h-5" />
        </div>
      </div>
    </main>
  );
};

export default Main;
