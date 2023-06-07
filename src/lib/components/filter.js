export function filterArray(value, optionValue){
    const filterValue = optionValue
    ? [...new Set(value.map((data) => {
        return data[optionValue]
    }))]
    : [...new Set(value)];

    return filterValue
}