function convertingTime(number) {
    let hour = Math.floor(number / 60);
    let minutes = number % 60;
        if (hour < 1) {
                hour = "";
        } else if (hour == 1) {
            hour = hour + " hour, ";
        } else  {
            hour = hour + " hours, ";
        }
       if (minutes < 1) {
           minutes = " ";
       }
       else if (minutes == 1) {
           minutes = minutes + " minute";
       }
       else {
           minutes = minutes + " minutes"
       }
       let time = hour + minutes;
     console.log(time)
    }
        convertingTime(61)
