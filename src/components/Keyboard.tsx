import * as React from "react";
import { KeyboardRows } from "./KeyboardRows";
import KeyboardRow from "./KeyboardRow";
import Key from "./Key";
import { Spacer } from "./Spacer";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { StateType } from "@/store";
import useConfig from "@/hooks/useConfig";

export interface IKeyboardProps {}

export function Keyboard(props: IKeyboardProps) {
  const color = useSelector((state: StateType) => state.color["keyPrimary"]);
  const backgroundColor = useSelector(
    (state: StateType) => state.color["background"]
  );
  const textColor = useSelector((state: StateType) => state.color["text"]);
  const { hashMapKeyAndColor } = useConfig();

  return (
    <div
      className="flex flex-col lg:gap-6 gap-2 w-11/12 lg:w-10/12 p-2 lg:pr-4 lg:pt-4 lg:pl-4 lg:pb-5 rounded-lg shadow-2xl border-b-2 lg:border-b-[12px] border-gray-700 border-opacity-30"
      style={{
        backgroundColor: `${backgroundColor}`,
      }}
    >
      <KeyboardRow>
        <Key
          character={"Escape"}
          key={"Escape"}
          color={hashMapKeyAndColor["Escape"] ?? color}
          textColor={textColor}
        />
        <Spacer size={4} />
        {(["F1", "F2", "F3", "F4"] as const).map((char) => {
          return (
            <Key
              character={char}
              color={hashMapKeyAndColor[char] ?? color}
              key={`${char}-${uuidv4()}`}
              textColor={textColor}
            />
          );
        })}
        <Spacer size={2} />
        {(["F5", "F6", "F7", "F8"] as const).map((char) => {
          return (
            <Key
              character={char}
              color={hashMapKeyAndColor[char] ?? color}
              key={`${char}-${uuidv4()}`}
              textColor={textColor}
            />
          );
        })}
        <Spacer size={2} />
        {(["F9", "F10", "F11", "F12"] as const).map((char) => {
          return (
            <Key
              character={char}
              color={hashMapKeyAndColor[char] ?? color}
              key={`${char}-${uuidv4()}`}
              textColor={textColor}
            />
          );
        })}
        <Spacer size={1} />
        {(["PrintScreen", "ScrollLock", "Pause"] as const).map((char) => {
          return (
            <Key
              character={char}
              color={hashMapKeyAndColor[char] ?? color}
              key={`${char}-${uuidv4()}`}
              textColor={textColor}
            />
          );
        })}
      </KeyboardRow>
      <KeyboardRows />
    </div>
  );
}

export default Keyboard;
