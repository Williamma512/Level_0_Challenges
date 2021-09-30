function convertingTime(number) {
    var Hour = Math.floor(number / 60);
    var minutes = number % 60;
    return Hour + " Hour" + "," + minutes + " minutes";
}
console.log(convertingTime(71) );
console.log(convertingTime(133));
