
const firstString = "House";
const secondString = "Computers";
const findingCommonString = (firstString = '', secondString = '') => {
    const commonstring = Object.create(null);
    let u, w, part;
    for (u = 0; u < firstString.length -1; u++) {
        for (w = u + 1; w <= firstString.length; w++) {
            part = firstString.slice(u, w);
            if (secondString.indexOf(part) !== -1) {
                commonstring[part] = true;
        }
        }
    }
    const commonEl = Object.keys(commonstring);
    return commonEl;
};
console.log("Common Letters are: " + findingCommonString(firstString, secondString));
