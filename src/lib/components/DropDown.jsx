import React from "react";
import { filterArray } from "./filter";
import "../styles/styles.css";
import { useState } from "react";
import { useEffect } from "react";

import styled from "styled-components";

const StyledSelect = styled.ul`
  width: ${(props) => (props.width ? `${props.width}px` : `auto`)};
  height: ${(props) => (props.height ? `${props.height}px` : `auto`)};
  color: ${(props) => (props.color ? `${props.color}` : `auto`)};
  padding: 0px;
  list-style: none;
  margin-top: ${(props) => (props.height ? `${props.height}px` : `auto`)};
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  max-height: 0;
  transition: 0.3s ease-in-out;

`;
const StyleList = styled.li`
    position: relative;
    height: 4rem;
    background-color: #fafcfd;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s;
    opacity: 1;
`
const StyledInput = styled.input`
  width: ${(props) => (props.width ? `${props.width}px` : `auto`)};
  height: ${(props) => (props.height ? `${props.height}px` : `auto`)};
  color: ${(props) => (props.color ? `${props.color}` : `auto`)};
  padding:0px
  font-family: "Ek Mukta";
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 4px;
  font-size: 1.1rem;
  background-color: #fafcfd;
  border: 3px solid transparent;
  transition: 0.3s ease-in-out;
`;

export function DropDown({
  value,
  optionValue,
  width,
  height,
  color,
  placeholder,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseOpenClick = () => {
    setIsOpen(!isOpen);
  };
  //filter the data tab for do not have a duplicate & find the value data
  const filterValue = filterArray(value, optionValue);

  const allData = filterValue.map((data) => {
    return <StyleList onClick={handleCloseOpenClick} >{data}</StyleList>
  });
  useEffect(() => {
    isOpen ? document.addEventListener('click', handleCloseOpenClick) : document.removeEventListener('click', handleCloseOpenClick);
    return () => {
        document.removeEventListener('click', handleCloseOpenClick);
      };
  }, [isOpen])
    

    
  return (
    <form>
      <StyledInput
        className="chosen-value"
        type="text"
        value=""
        placeholder="Type to filter"
        onClick={handleCloseOpenClick}
        width={width}
        height={height}
        color={color}
      />
      <StyledSelect
        className={`value-list ${isOpen ? "open" : ""}`}
        width={width}
        height={height}
        color={color}
      >
        {allData}
      </StyledSelect>
    </form>
  );
}
