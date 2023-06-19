export const allColorsClass = (color) => {
  return { 
    "red-style": color.includes("red-style"),
    "blue-style": color.includes("blue-style"),
    "green-style": color.includes("green-style") 
};
};

export const allWidthClass = (width) => {
    return {
        "W-30" : width.includes("W-30"),
        "W-50" : width.includes("W-50"),
        "W-70" : width.includes("W-70"),
        "W-90" : width.includes("W-90"),
    }
}


export const allBorderClass = (border) => {
    return {
        "str-border" : border.includes("str-border"),
        "mdm-border" : border.includes("mdm-border"),
        "rad5-border" : border.includes("rad5-border"),
        "rad10-border" : border.includes("rad10-border"),
        "rad15-border" : border.includes("rad15-border"),
        "rad20-border" : border.includes("rad20-border"),
        "rad25-border" : border.includes("rad25-border"),
        "no-border" : border.includes("no-border"),
    }
}

export const allFontClass = (font) => {
    return {
        "ft1" : font.includes("ft1"),
        "ft2" : font.includes("ft2"),
        "ft3" : font.includes("ft3"),
        "ft4" : font.includes("ft4"),
        "ft5" : font.includes("ft5"),
        "ft6" : font.includes("ft6"),
        "ft-bold" : font.includes("ft-bold"),
        "ft-light" : font.includes("ft-light"),
        "ft-uppercase" : font.includes("ft-uppercase"),
        "txt-center" : font.includes("txt-center"),
        "txt-right" : font.includes("txt-right"),
    }
}