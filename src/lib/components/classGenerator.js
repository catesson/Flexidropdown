/**
 * [internal]
 * function who check the class are choice in the props ColorClass in the component DropDown and return the class if they are choice
 * @name allColorsClass
 * @function
 * @param {string} color - Class are choice in the ColorClass props of the dropdown component
 * @return {object} - object content all colors class with the boolean statue true or false, is they are choice or not. 
 * @example 
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
 * //return 
 * { 
    "red-style": false,
    "blue-style": false,
    "green-style": true 
};
 */
export const allColorsClass = (color) => {
  return {
    "red-style": color.includes("red-style"),
    "blue-style": color.includes("blue-style"),
    "green-style": color.includes("green-style"),
  };
};

/**
 * [internal]
 * function who check the class are choice in the props widthClass in the component DropDown and return the class if they are choice
 * @name allWidthClass
 * @function
 * @param {string} width - Class are choice in the widthClass props of the dropdown component
 * @return {object} - object content all width class with the boolean statue true or false, is they are choice or not. 
 * @example
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
 * //return 
 * {
        "W-30" : true,
        "W-50" : false,
        "W-70" : false,
        "W-90" : false
    }
 */
export const allWidthClass = (width) => {
  return {
    "W-30": width.includes("W-30"),
    "W-50": width.includes("W-50"),
    "W-70": width.includes("W-70"),
    "W-90": width.includes("W-90"),
  };
};

/**
 * [internal]
 * function who check the class are choice in the props borderClass in the component DropDown and return the class if they are choice
 * @name allBorderClass
 * @function
 * @param {string} border - Class are choice in the borderClass props of the dropdown component
 * @return {object} - object content all border class with the boolean statue true or false, is they are choice or not. 
 * @example
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
 * //return 
 * {
        "str-border" : false,
        "mdm-border" : false,
        "rad5-border" : false,
        "rad10-border" : false,
        "rad15-border" : false,
        "rad20-border" : true,
        "rad25-border" : false,
        "no-border" : false
    }
 */
export const allBorderClass = (border) => {
  return {
    "str-border": border.includes("str-border"),
    "mdm-border": border.includes("mdm-border"),
    "rad5-border": border.includes("rad5-border"),
    "rad10-border": border.includes("rad10-border"),
    "rad15-border": border.includes("rad15-border"),
    "rad20-border": border.includes("rad20-border"),
    "rad25-border": border.includes("rad25-border"),
    "no-border": border.includes("no-border"),
  };
};
/**
 * [internal]
 * function who check the class are choice in the props fontClass in the component DropDown and return the class if they are choice
 * @name allFontClass
 * @function
 * @param {string} font - Class are choice in the fontClass props of the dropdown component
 * @return {object} - object content all font class with the boolean statue true or false, is they are choice or not. 
 * @example
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
 * //return  
 * {
        "ft1" : false,
        "ft2" : false,
        "ft3" : true,
        "ft4" : false,
        "ft5" : false,
        "ft6" : false,
        "ft-bold" : false,
        "ft-light" : true,
        "ft-uppercase" : true,
        "txt-center" : true,
        "txt-right" : false,
    }
 */
export const allFontClass = (font) => {
  return {
    "ft1": font.includes("ft1"),
    "ft2": font.includes("ft2"),
    "ft3": font.includes("ft3"),
    "ft4": font.includes("ft4"),
    "ft5": font.includes("ft5"),
    "ft6": font.includes("ft6"),
    "ft-bold": font.includes("ft-bold"),
    "ft-light": font.includes("ft-light"),
    "ft-uppercase": font.includes("ft-uppercase"),
    "txt-center": font.includes("txt-center"),
    "txt-right": font.includes("txt-right"),
  };
};
