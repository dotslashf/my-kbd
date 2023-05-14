import * as React from "react";
import Keyboard from "./Keyboard";
import Disclosure from "./Disclosure";

export interface ILayoutProps {}

export function Layout(props: ILayoutProps) {
  return (
    <div className="flex">
      <div
        className={`flex top-0 left-0 z-40 w-96 h-screen p-4
        overflow-y-auto transition-transform bg-white`}
      >
        <div className="flex flex-col w-full">
          <h5
            id="drawer-navigation-label"
            className="text-base font-semibold text-gray-500 uppercase dark:text-slate-800"
          >
            Menu
          </h5>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
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
        </div>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-center p-8 w-full bg-gradient-to-bl from-sky-400 to-blue-500">
        <Keyboard />
      </main>
    </div>
  );
}
