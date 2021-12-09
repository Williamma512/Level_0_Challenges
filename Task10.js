function commonChar (firstString, secondString) {
    let common=[];
    let count = 0;
    const obj = secondString.split("");
    for (const str of secondString) {
        if(idx >= 0) {
    common.push(obj.find(s => s === str));
    count ++;
    obj.splice(idx, 1);_
}
    }
    return common;
}

console.log(getSameCount("House", "Computers")