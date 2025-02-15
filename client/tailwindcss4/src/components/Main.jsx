import React from "react";
import { faArrowDown } from "../assets";

const Main = () => {
  return (
    <main className="h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="text-center max-w-[720px] flex flex-col gap-[40px] items-center">
        <h1 className="font-medium text-7xl">
          Sign Up, Get Rewarded: Free Coffee + $50
        </h1>
        <div className="text-[23px]">
          I’m giving you a referral code to register in World App. By filling
          out the form below, you will receive:
        </div>
        <div className="flex justify-center text-[27px] gap-[20px] w-full">
          <div className="">
            <span>💰</span>
            <span>
              43.3 WLD ~{" "}
              <span className="text-[#008F0A] font-medium">225.53 PLN</span>
            </span>
          </div>
          <div className="">
            <span>☕</span>
            <span>Free cup of coffee</span>
          </div>
        </div>
        <div className="rounded-full bg-[#2D2C2D] w-[40px] h-[40px] flex justify-center items-center arrow-down animate-bounce hover:animate-none">
          <img
            src={faArrowDown}
            alt=""
            className="w-[20px] h-[20px] arrow-down-icon"
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
