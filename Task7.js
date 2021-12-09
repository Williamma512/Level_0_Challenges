function convercelsiustoF(celsius) {
    var CelsiusToFehrenheit = celsius * 9 / 5 + 32;
    return(celsius + ' \xB0C is ' + CelsiusToFehrenheit + ' \xB0F.');
}

function convertfehrenheitToC(fehrenheit) {
    var fehrenheitToCelcius = (fehrenheit -32) * 5 / 9;
    return(fehrenheit + ' \xB0F is ' + fehrenheitToCelcius + ' \xB0C.');
}
convercelsiustoF(35);
convertfehrenheitToC(85);
