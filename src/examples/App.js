import React from "react";
import { DropDown } from "../lib/components/DropDown";
import { examples } from "./dataExample";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    
    <DropDown option={examples} optionValue="name"  placeholder="test" borderClass="rad20-border" widthClass="W-30" defaultValue="tester"colorClass="green-style" fontClass="ft-light txt-center ft-uppercase ft3" customClass="testclass"/>
    </div>
);



export default App;
