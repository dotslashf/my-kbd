import * as React from "react";
import Disclosure from "./Disclosure";

export interface IDrawerProps {}

export function Drawer(props: IDrawerProps) {
  const [isHidden, setIsHidden] = React.useState(true);
  return (
    <div className="w-full">
      <div className="text-center">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          onClick={() => {
            setIsHidden(!isHidden);
          }}
        >
          Show Option
        </button>
      </div>

      {/* <div
        className={`absolute top-0 left-0 z-40 w-80 h-screen p-4
        overflow-y-auto transition-transform 
        bg-white
        ${isHidden ? "-translate-x-full" : "translate-x-0"}
        `}
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-slate-800"
        >
          Menu
        </h5>
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
          onClick={() => {
            setIsHidden(!isHidden);
          }}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <div className="w-full">
            <Disclosure />
          </div>
        </div>
      </div> */}
    </div>
  );
}
