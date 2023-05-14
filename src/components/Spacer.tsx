import * as React from "react";

export type SpacerSize = 1 | 2 | 3 | 4;

export interface ISpacerProps {
  size?: SpacerSize;
}

export function Spacer(props: ISpacerProps) {
  return <span className={`col-span-${props.size ? props.size : 1}`} />;
}
