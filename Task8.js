var pluralHour = "Hours";
var singularHour = "Hour";
var pluralminutes = "minutes";
var singularminutes = "minute";
var number;
function convertingTime(number) {
    var Hour = Math.floor(number / 60);
    var minutes = number % 60;
    if (number >120 || number >1) {
        return (Hour + " " +  pluralHour + "," + minutes + " " + pluralminutes)
    }
    else
    return (Hour + " " +  singularHour + "," + minutes + " " + singularminutes)
    }

console.log(convertingTime(1)) ;
console.log(convertingTime(133));
