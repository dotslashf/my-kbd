import * as React from "react";

export interface IKeyboardRowProps {
  children: React.ReactNode;
}

export function KeyboardRow(props: IKeyboardRowProps) {
  return (
    <div
      className="grid gap-1"
      style={{
        gridTemplateColumns: `repeat(73, minmax(0px, 1fr))`,
      }}
    >
      {props.children}
    </div>
  );
}

export default KeyboardRow;
