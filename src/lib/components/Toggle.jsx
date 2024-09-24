import React from "react";

const Toggle = ({
  id,
  name,
  checked,
  onChange,
  icon1: Icon1,
  icon2: Icon2,
  small,
  colorPalette
}) => {

  // Actuate toggle if spacebar pressed
  const handleKeyPress = (e) => {
    if (e.keyCode !== 32) return;

    e.preventDefault();
    onChange(!checked);
  };

  const bgColor1 = colorPalette && colorPalette[1] ? colorPalette[1] : '#defaultColor1';
  const bgColor2 = colorPalette && colorPalette[2] ? colorPalette[2] : '#defaultColor2';
  const textColor1 = colorPalette && colorPalette[1] ? colorPalette[1] : '#defaultColor1';
  const textColor2 = colorPalette && colorPalette[2] ? colorPalette[2] : '#defaultColor2';

  return (
    <div className={`relative inline-block ${small ? "w-8" : "w-16"}`}>
      <input
        type="checkbox"
        name={name}
        className="hidden"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {id && (
        <label
          className="block overflow-hidden cursor-pointer rounded-full border-0"
          tabIndex={1}
          onKeyDown={handleKeyPress}
          htmlFor={id}
        >
          <span
            className={`flex items-center justify-around w-[200%] ${checked ? "ml-0" : "ml-[-100%]"} ${small ? "h-4" : "h-7"} transition-all duration-1000 ease-in-out`}
          >
            <span
              className={`flex items-center justify-start w-1/2 text-xs text-white box-border ${small ? "h-4" : "h-7"}`}
              style={{ backgroundColor: bgColor1 }}
            />
            <span
              className={`flex items-center justify-end w-1/2 text-xs text-white box-border ${small ? "h-4" : "h-7"}`}
              style={{ backgroundColor: bgColor2 }}
            />
          </span>

          <span
            className={`block absolute top-0 bottom-0 ${checked ? "right-0" : (small ? "right-4" : "right-9")} ${small ? "w-3 h-3 m-0.5" : "w-5 h-5 m-1"} bg-white rounded-full transition-all duration-500 ease-in-out`}
          >
            <div className={`block absolute top-1 right-1 max-w-full max-h-full text-xs`}
              style={{ color: checked ? textColor1 : textColor2 }}
            >
              {small ? null : (checked ? <Icon2 /> : <Icon1 />)}
            </div>
          </span>

        </label>
      )}
    </div>
  );
};

export default Toggle;