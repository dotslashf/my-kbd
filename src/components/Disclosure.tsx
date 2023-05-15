import React, { useEffect, useState } from "react";
import ColorPicker from "./ColorPicker";
import useColor from "@/hooks/useColor";
import useConfig from "@/hooks/useConfig";

export default function Disclosure() {
  const disclosureData = [
    {
      id: "disclosure-panel-1",
      isOpen: false,
      buttonText: "Colors",
      panelContent: <ColorPanel />,
    },
    {
      id: "disclosure-panel-is-legend-shown",
      isOpen: false,
      buttonText: "Config",
      panelContent: <ConfigPanel />,
    },
    // {
    //   id: "disclosure-panel-2",
    //   isOpen: false,
    //   buttonText: "Settings",
    //   panelContent: (
    //     <>
    //       <label className="relative inline-flex items-center cursor-pointer">
    //         <input
    //           type="checkbox"
    //           value=""
    //           className="sr-only peer"
    //           checked={isEditing}
    //           onClick={() => {
    //             toggleEditing();
    //           }}
    //           readOnly
    //         />
    //         <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    //         <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
    //           {isEditing ? "true" : "false"}
    //         </span>
    //       </label>
    //     </>
    //   ),
    // },
  ];

  const [disclosures, setDisclosures] = useState(disclosureData);

  const handleClick = (id: string) => {
    setDisclosures(
      disclosures.map((d) =>
        d.id === id ? { ...d, isOpen: !d.isOpen } : { ...d, isOpen: false }
      )
    );
  };

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white space-y-2">
        {disclosures.map(({ id, isOpen, buttonText, panelContent }) => (
          <React.Fragment key={id}>
            <button
              className="flex w-full justify-between rounded-md bg-slate-100 p-4 text-left text-sm font-medium text-slate-800 hover:bg-slate-200 focus:outline-none transition"
              onClick={() => handleClick(id)}
              aria-expanded={isOpen}
              {...(isOpen && { "aria-controls": id })}
            >
              {buttonText}
            </button>
            {isOpen && (
              <div className="p-2 text-sm text-slate-600 border-2 border-slate-100 bg-slate-100 rounded-md">
                {panelContent}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function ColorPanel() {
  const { color, setColor } = useColor("keyPrimary");
  const { color: backgroundColor, setColor: setBackgroundColor } =
    useColor("background");
  const { color: textColor, setColor: setTextColor } = useColor("text");
  const { color: colorSecondary, setColor: setColorSecondary } =
    useColor("keySecondary");

  return (
    <>
      <ColorPicker color={color} setColor={setColor} />
      <ColorPicker color={backgroundColor} setColor={setBackgroundColor} />
      <ColorPicker color={textColor} setColor={setTextColor} />
      <ColorPicker color={colorSecondary} setColor={setColorSecondary} />
    </>
  );
}

function ConfigPanel() {
  const { isLegendShown, toggleLegendShown } = useConfig();
  const { isEditing, toggleEditing } = useConfig();

  return (
    <div className="flex flex-col gap-y-2">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={isLegendShown}
          onClick={() => {
            toggleLegendShown();
          }}
          readOnly
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Show Legend?
        </span>
      </label>
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
          Toggle Editing?
        </span>
      </label>
    </div>
  );
}
