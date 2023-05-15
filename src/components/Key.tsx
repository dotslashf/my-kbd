import { KeyboardKey, KeyboardKeyMap } from "@/const";
import useConfig from "@/hooks/useConfig";
import * as React from "react";

export interface IKeyProps {
  character: KeyboardKey;
  color?: string;
  textColor?: string;
}

function calculateAspectRatio(keyboardKey: KeyboardKey) {
  switch (keyboardKey) {
    case "Space":
      return 6;
    case "LeftShift":
    case "RightShift":
      return 2.5;
    case "CapsLock":
    case "Backspace":
    case "Enter":
      return 2;
    case "Tab":
    case "\\":
    case "Meta":
    case "Control":
      return 1.5;
    default:
      return 1;
  }
}

export function Key(props: IKeyProps) {
  const gridColumnSpan = calculateAspectRatio(props.character);
  const isWithShiftChar = KeyboardKeyMap[props.character].withShiftChar !== "";
  const { editKeyToMap, isLegendShown } = useConfig();

  return (
    <span
      className={`relative bg-slate-200 overflow-hidden rounded-[1px] lg:rounded-sm grow shrink-0 font-extrabold font-mono shadow-md lg:border-2 lg:border-b-8 lg:border-l-4 lg:border-r-4 lg:border-gray-700 lg:border-opacity-30 select-none hover:cursor-pointer lg:hover:border-opacity-0 transition
      ${gridColumnSpan === 1 ? "aspect-square" : ""}
      ${isWithShiftChar ? "lg:gap-y-1 lg:gap-x-0 gap-x-1" : "gap-0"}
      `}
      style={{
        gridColumn: `span ${gridColumnSpan * 4} / span ${gridColumnSpan * 4}`,
        // gap: `${isWithShiftChar ? "0.25rem" : "0"}`,
        backgroundColor: `${props.color ? props.color : "bg-slate-200"}`,
        color: `${props.textColor ? props.textColor : "bg-slate-800"}`,
      }}
      onClick={() => {
        editKeyToMap(props.character);
      }}
    >
      {isLegendShown && (
        <div className="lg:absolute lg:top-2 lg:left-2 overflow-hidden gap-x-0.5 text-[6px] md:text-[10px] lg:text-[14px] text-center flex items-center lg:items-start justify-center h-full lg:h-auto">
          <span>{KeyboardKeyMap[props.character].label}</span>
          {isWithShiftChar && (
            <span className="lg:ml-1 lg:top-0 text-[4px] md:text-[8px] lg:text-xs">
              {KeyboardKeyMap[props.character].withShiftChar}
            </span>
          )}
        </div>
      )}
    </span>
  );
}

export default Key;
