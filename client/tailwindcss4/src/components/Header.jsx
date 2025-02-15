import React from "react";
import { faInfo } from "../assets";

const Header = () => {
  return (
    <header className="fixed w-full z-[50] bg-[white]">
      <nav>
        <ul className="flex justify-between items-center relative px-[15px] py-[10px] list-none">
          <li className="flex gap-[5px] items-center cursor-pointer">
            <div className="text-[30px]">☺️</div>
            <div className="font-bold">
              Referal link (50 USD)
            </div>
          </li>
          <li>
            <a
              href="https://worldcoin.org/uk-ua/world-app"
              className="absolute top-[20px] left-1/2 -translate-x-1/2 flex gap-[5px] items-center cursor-pointer">
              <div className="">
                <img src={faInfo}></img>
              </div>
              <div className="underline">
                What is World App & Why You Get Paid
              </div>
            </a>
          </li>
          <li>
            <button>Join Me in Sharing Referrals</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
