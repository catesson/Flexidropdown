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
  margin-top: ${(props) => (props.height ? `${props.height}px` : ``)};
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
  text-align: center;
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
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(
    defaultValue ? defaultValue : ""
  );
  const handleCloseOpenClick = () => {
    setIsOpen(!isOpen);
    console.log("j'ai click");
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
