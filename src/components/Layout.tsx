import * as React from "react";
import Keyboard from "./Keyboard";
import { useSelector } from "react-redux";
import { StateType } from "@/store";
import ColorPicker from "./ColorPicker";
import useColor from "@/hooks/useColor";
import useConfig from "@/hooks/useConfig";

export interface ILayoutProps {}

export function Layout(props: ILayoutProps) {
  const { color, setColor } = useColor("keyPrimary");
  const { color: backgroundColor, setColor: setBackgroundColor } =
    useColor("background");
  const { color: textColor, setColor: setTextColor } = useColor("text");
  const keyMap = useSelector((state: StateType) => state.keyMap.keyMap);
  const { isEditing, toggleEditing } = useConfig();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-20 w-full bg-gradient-to-bl from-sky-400 to-blue-500">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={isEditing}
          onClick={() => {
            toggleEditing();
          }}
          readOnly
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {isEditing ? "true" : "false"}
        </span>
      </label>
      <div className="flex">
        <ColorPicker color={color} setColor={setColor} />
        <ColorPicker color={backgroundColor} setColor={setBackgroundColor} />
        <ColorPicker color={textColor} setColor={setTextColor} />
      </div>
      <div className="flex">{JSON.stringify(keyMap)}</div>
      <Keyboard />
    </main>
  );
}
