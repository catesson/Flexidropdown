import React from "react";
import "../styles/styles.css";
import { useState } from "react";
import { useEffect } from "react";

import styled from "styled-components";

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
  background-color: #fafcfd;
  font-size: 1.1rem;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  opacity: 1;
  padding: ${(props) => (props.padding ? `${props.padding}px` : `3px`)};
`;
const StyledInput = styled.input`

  width: ${(props) => (props.width ? `${props.width}px` : `100%`)};
  height: ${(props) => (props.height ? `${props.height}px` : ``)};
  text-align: center;
  font-family: ${(props) =>
    props.fontFamily ? `${props.fontFamily}` : "sans-serif"};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.1rem;
  padding: ${(props) => (props.padding ? `${props.padding}px` : `3px`)};
  transition: 0.3s ease-in-out;
`;
const StyledDiv = styled.div`
position:relative;
`

export function DropDown({
  option,
  optionValue,
  width,
  height,
  padding,
  fontFamily,
  colorClass,
  placeholder,
  defaultValue,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(
    defaultValue ? defaultValue : ""
  );
  const handleCloseOpenClick = () => {
    setIsOpen(!isOpen);
  };

  const allData = option.map((data) => {
    return (
      <StyleList
        onClick={() => {
          handleCloseOpenClick();
          setInputValue(data[optionValue]);
        }}
        key={data[optionValue]}
      >
        {data[optionValue]}
      </StyleList>
    );
  });
  useEffect(() => {
    isOpen
      ? document.addEventListener("click", handleCloseOpenClick)
      : document.removeEventListener("click", handleCloseOpenClick);
    return () => {
      document.removeEventListener("click", handleCloseOpenClick);
    };
  }, [isOpen]);

  return (
    <form>
<StyledDiv className={colorClass} >
        <StyledInput
          className={`chosen-value ${isOpen ? "open" : ""}`}
          type="text"
          defaultValue={inputValue}
          placeholder={placeholder}
          onClick={handleCloseOpenClick}
          width={width}
          height={height}
          id="dropdown-input"
        />
        <label for="dropdown-input" className="arrow"></label>
</StyledDiv>
      <StyledSelect
        className={`value-list ${isOpen ? "open" : ""}`}
        width={width}
        height={height}
      >
        {allData}
      </StyledSelect>
    </form>
  );
}
