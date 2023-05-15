import * as React from "react";
import Keyboard from "./Keyboard";
import Disclosure from "./Disclosure";
import useColor from "@/hooks/useColor";

export interface ILayoutProps {}

export function Layout(props: ILayoutProps) {
  return (
    <div className="flex w-screen">
      <div className="flex flex-col lg:flex-row w-full h-screen">
        {/* content */}
        <main className="flex h-3/4 lg:min-h-screen flex-col items-center justify-center lg:p-8 p-0 w-full bg-gradient-to-bl from-gray-100 to-gray-300">
          <Keyboard />
        </main>
        {/* sidebar */}
        <div
          className={`flex lg:top-0 lg:left-0 z-40 lg:h-screen p-4 transition-transform bg-white`}
        >
          <div className="flex flex-col w-full">
            <h5
              id="drawer-navigation-label"
              className="text-base font-semibold text-gray-500 uppercase dark:text-slate-800"
            >
              Menu
            </h5>
            <div className="py-4 overflow-y-auto">
              <div className="w-full">
                <Disclosure />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
