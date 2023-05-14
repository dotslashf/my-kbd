import React, { useEffect, useRef } from "react";
import { HexColorPicker } from "react-colorful";

interface Props {
  color: string;
  setColor: (color: string) => void;
}

const ColorPicker = (props: Props) => {
  const [isColorPickerOpen, setIsColorPickerOpen] = React.useState(false);
  const colorPickerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: { target: any }) => {
    if (
      colorPickerRef.current &&
      !colorPickerRef.current.contains(event.target)
    ) {
      setIsColorPickerOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={colorPickerRef}>
      <div className="flex h-12 my-2">
        <div
          className="h-full flex-shrink-0 w-12 border-slate-800 border-l border-t border-b rounded-l-md"
          style={{ backgroundColor: props.color }}
          onClick={() => {
            setIsColorPickerOpen(!isColorPickerOpen);
          }}
        ></div>
        <input
          type="text"
          value={`#${props.color.replace("#", "")}`}
          className="w-full pl-2 outline-none border-slate-800 border-r border-t border-b rounded-r-md"
          maxLength={7}
          onKeyPress={(e) => {
            const validHexChars = /[0-9a-fA-F]/;
            if (!validHexChars.test(e.key)) {
              e.preventDefault();
            }
          }}
          onChange={(e) => {
            props.setColor(e.target.value.toUpperCase());
          }}
        />
      </div>
      {isColorPickerOpen && (
        <div className="absolute">
          <HexColorPicker
            color={props.color}
            onChange={(value) => {
              props.setColor(value.toUpperCase());
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
