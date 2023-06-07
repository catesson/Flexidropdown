import React from "react";
import { DropDown } from "../lib/components/DropDown";
import { examples } from "./dataExample";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    
    <DropDown value={examples} optionValue="name" width={200} height={100} color="red"placeholder="test"/>
    </div>
);



export default App;
