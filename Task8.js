function convertingTime(number) {
    var pluralHour = "Hours";
    var singularHour = "Hour";
    var pluralminutes = "minutes";
    var singularminutes = "minute";
    var number;
    var Hour = Math.floor(number / 60);
    var minutes = number % 60;
        if (number >120 || number >1) {
        console.log(Hour + " " +  pluralHour + "," + minutes + " " + pluralminutes) ;
        
    }
        else
        console.log(Hour + " " +  singularHour + "," + minutes + " " + singularminutes) ;
    
    }

        convertingTime(1)
        convertingTime(121)
