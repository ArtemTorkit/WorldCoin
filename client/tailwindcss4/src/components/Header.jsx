import { useState } from "react";
import { faLogo } from "../assets";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-[50] bg-white shadow-md">
      <nav className="relative">
        <ul className="flex justify-between items-center px-4 py-3 list-none">
          {/* Left Logo */}
          <li className="flex gap-2 items-center cursor-pointer">
            <div className="w-[30px] h-[30px]"><img src={faLogo} alt="logo" /></div>
            <div className="font-bold">Referal link (50 USD)</div>
          </li>

          {/* Mobile Menu Toggle Button */}
          <li className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </li>

          {/* Desktop Menu */}
          <li className="hidden md:flex">
            <a
              href="https://worldcoin.org/uk-ua/world-app"
              className="flex gap-2 items-center cursor-pointer">
              <span className="underline">
                What is World App & Why You Get Paid
              </span>
            </a>
          </li>

          <li className="hidden md:block">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Join Me in Sharing Referrals
            </button>
          </li>
        </ul>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
            <ul className="flex flex-col items-center gap-4 py-4">
              <li>
                <a
                  href="https://worldcoin.org/uk-ua/world-app"
                  className="flex gap-2 items-center">
                  <span className="underline">
                    What is World App & Why You Get Paid
                  </span>
                </a>
              </li>
              <li>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Join Me in Sharing Referrals
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
