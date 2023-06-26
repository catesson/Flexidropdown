import { DropDown } from "../lib/components/DropDown";
import { examples } from "../examples/dataExample";


export default {
  component: DropDown,
  title: "DropDown",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    option: examples,
    optionValue : "name",
    width: "",
    height: "",
    colorClass : "" ,
    widthClass :"",
    borderClass:"",
    fontFamily:"",
    padding:"",
    fontClass:"",
    customClass:"",
    placeholder:"",
    defaultValue : "test",
    id : ""      
  },
};

export const DefaultRed = {
  args: {
    option: examples,
    optionValue : "name",
    width: "",
    height: "",
    colorClass : "red-style" ,
    widthClass :"",
    borderClass:"",
    fontFamily:"",
    padding:"",
    fontClass:"",
    customClass:"",
    placeholder:"",
    defaultValue : "test",
    id : "" 
  },
};

export const DefaultGreen = {
  args: {
    option: examples,
    optionValue : "name",
    width: "",
    height: "",
    colorClass : "green-style" ,
    widthClass :"",
    borderClass:"",
    fontFamily:"",
    padding:"",
    fontClass:"",
    customClass:"",
    placeholder:"",
    defaultValue : "test",
    id : "" 
  },
};
export const DefaultBlue = {
  args: {
    option: examples,
    optionValue : "name",
    width: "",
    height: "",
    colorClass : "blue-style" ,
    widthClass :"",
    borderClass:"",
    fontFamily:"",
    padding:"",
    fontClass:"",
    customClass:"",
    placeholder:"",
    defaultValue : "test",
    id : "" 
  },
};

export const small = {
  args: {
    option: examples,
    optionValue : "name",
    width: "",
    height: "",
    colorClass : "" ,
    widthClass :"W-30",
    borderClass:"no-border",
    fontFamily:"ft1",
    padding:"",
    fontClass:"",
    customClass:"",
    placeholder:"",
    defaultValue : "test",
    id : "" 
  },
};
export const big = {
  args: {
    option: examples,
    optionValue : "name",
    width: "",
    height: "",
    colorClass : "" ,
    widthClass :"W-90",
    borderClass:"str-border",
    fontFamily:"ft6",
    padding:"",
    fontClass:"",
    customClass:"",
    placeholder:"",
    defaultValue : "test",
    id : "" 
  },
};