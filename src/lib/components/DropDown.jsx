import React from "react";
import "../styles/styles.css";
import { useState } from "react";
import { useEffect } from "react";
import cx from "classnames";
import styled from "styled-components";
import {
  allBorderClass,
  allWidthClass,
  allColorsClass,
  allFontClass,
} from "./classGenerator";

const StyledSelect = styled.ul`
  width: ${(props) => (props.width ? `${props.width}px` : `100%`)};
  height: ${(props) => (props.height ? `${props.height}px` : ``)};
  padding: ${(props) => (props.padding ? `0 ${props.padding}px` : `0 3px`)};
  margin: 0px;
  list-style: none;
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  max-height: 0;
  transition: 0.3s ease-in-out;
`;
const StyleList = styled.li`
  position: relative;
  height: ${(props) => (props.height ? `${props.height}px` : ``)};
  font-family: ${(props) => (props.fontFamily ? `${props.fontFamily}` : "Arial, Helvetica, sans-serif")};
  font-size: 1.1rem;
  transition: background-color 0.3s;
  opacity: 1;
  padding: ${(props) => (props.padding ? `${props.padding}px` : `3px`)};
`;
const StyledInput = styled.input`
  width: ${(props) => (props.width ? `${props.width}px` : `100%`)};
  height: ${(props) => (props.height ? `${props.height}px` : `auto`)};
  font-family: ${(props) => (props.fontFamily ? `${props.fontFamily}` : "Arial, Helvetica, sans-serif")};
  font-size: 1.1rem;
  padding: ${(props) => (props.padding ? `${props.padding}px` : `3px`)};
  transition: 0.3s ease-in-out;
`;
const StyledDiv = styled.div`
  position: relative;
`;

/**
 * represents a component DropDown
 * @name DropDown
 * @function
 * @param {Object[]} option - array of data 
 * @param {string} optionValue - the name of the champ who content value
 * @param {int} width - the value of fix width
 * @param {int} height - the value of fix height
 * @param {string} colorClass - the name of the class color you want (red-style, blue-style or green-style) 
 * @param {string} widthClass - the name of the class for the width you want (W-30, W-50, W-70 or W-90)
 * @param {string} borderClass - the name of the all class for control the border you want ("str-border, mdm-border, rad5-border, rad10-border, rad15-border, rad20-border, rad25-border or no-border)
 * @param {string} fontClass - the name of the all class for control th font you want (ft1, ft2, ft3, ft4, ft5, ft6, ft-bold, ft-light, ft-uppercase, txt-center or txt-right)
 * @param {string} fontFamily - the name of the font-familly you want use
 * @param {int} padding - the value of the padding you want
 * @param {string} customClass - the name of the class you have create in your css
 * @param {string} placeholder - the value of the placeholder input
 * @param {string} defaultValue - the default value of input
 * @param {string} id - the id you want use for the input
 * @returns {JSX.Element} - the jsx Element, represent the dropdown component 
 * 
 @example
 * //Dropdown
 * <DropDown 
 *      option={examples} 
 *      optionValue="name"
 *      placeholder="test" 
 *      borderClass="rad20-border" 
 *      widthClass="W-30" 
 *      defaultValue="tester"
 *      colorClass="green-style" 
 *      fontClass="ft-light txt-center ft-uppercase ft3" 
 *      customClass="testclass"/>
 */

export function DropDown({
  option,
  optionValue,
  width,
  height,
  colorClass,
  widthClass,
  borderClass,
  fontFamily,
  padding,
  fontClass,
  customClass,
  placeholder,
  defaultValue,
  id,
}) {
  /*control the state open or not open of the dropdown*/
  const [isOpen, setIsOpen] = useState(false);
  /* conten the value of input and put default value if she existe*/
  const [inputValue, setInputValue] = useState(
    defaultValue ? defaultValue : ""
  );
  /*listener for open or close the dropdown*/
  const handleCloseOpenClick = () => {
    setIsOpen(!isOpen);
  };

  /*useEffect(() => {
    isOpen
      ? document.addEventListener("click", handleCloseOpenClick)
      : document.removeEventListener("click", handleCloseOpenClick);
    return () => {
      document.removeEventListener("click", handleCloseOpenClick);
    };
  }, [isOpen]);*/

  return (
    <form>
      <StyledDiv
        onClick={() => {
          handleCloseOpenClick();
        }}
        className={cx(
          "styleDiv",
          customClass,
          colorClass ? allColorsClass(colorClass) : "",
          widthClass ? allWidthClass(widthClass) : "",
          fontClass ? allFontClass(fontClass) : "",
          borderClass ? allBorderClass(borderClass) : ""
        )}
      >
        <StyledInput
          className={`chosen-value ${isOpen ? "open" : ""}`}
          type="text"
          value={inputValue}
          placeholder={placeholder}
          onClick={() => {
            handleCloseOpenClick();
          }}
          width={width}
          height={height}
          padding={padding}
          id={`${id ? id : "dropdown-input"}`}
        />
        <label
          htmlFor={`${id ? id : "dropdown-input"}`}
          className="arrow"
        ></label>
      </StyledDiv>
      <StyledSelect
        className={`value-list ${isOpen ? "open" : ""}`}
        width={width}
        height={height}
      >
        {option.map((data) => (
          
          <StyleList
            onClick={() => {
              handleCloseOpenClick();
              setInputValue(data[optionValue]);
            }}
            key={data[optionValue]}
            padding={padding}
            fontFamily={fontFamily}
          >
            {data[optionValue]}
          </StyleList>
        ))}
      </StyledSelect>
    </form>
  );
}
