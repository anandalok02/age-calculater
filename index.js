function calculator() {
    let year;
    let month;
    let day;
    let ageText = document.getElementById('ageText')

    let currentDay = parseInt(cd.value.slice(8, 10), 10);
    let currentMonth = parseInt(cd.value.slice(5, 7), 10);
    let currentYear = parseInt(cd.value.slice(0, 4), 10);
    console.log('current date :- ', currentYear, currentMonth, currentDay);

    let birthDay = parseInt(dob.value.slice(8, 10), 10);
    let birthMonth = parseInt(dob.value.slice(5, 7), 10);
    let birthYear = parseInt(dob.value.slice(0, 4), 10);
    console.log('dob:-', birthYear, birthMonth, birthDay);
    
    datediff = currentDay - birthDay
    // console.log("date diff ",datediff)
    monthdiff = currentMonth - birthMonth
    // console.log("month diff ",monthdiff)
    yeardiff = currentYear - birthYear
    // console.log("year diff ", yeardiff)
    
    
    
    
    if (yeardiff < 0) {
        ageText.innerHTML = "Ye to cazz ho gya"
    } else {
        if (datediff < 0) {
            datediff = - (datediff)
        }
        else {
            datediff = datediff
        }
        if (monthdiff < 0) {
            monthdiff = - monthdiff
        }
        else {
            monthdiff = monthdiff
        }
        ageText.innerHTML = yeardiff + " years " + monthdiff + " months "  +datediff + " days "
    }
    
    


    // if (currentDay >= birthDay) {
    //     day = currentDay - birthDay
    // }

    // else {
    //     day = currentDay + new Data(currentYear, currentMonth).getData() - birthDay
    //     currentMonth--;
        
    // }

    // if (currentMonth >= birthMonth) {
    //     month = currentMonth - birthMonth;
    // }
    // else {
    //     month = currentMonth + 12 - birthMonth;
    //     currentYear--;
    // }
    // year = currentYear - birthYear;
    // console.warn("year ", year)
    // if (year < 0) {
    //     ageText.innerHTML = "YE TO CAZZ HAI";

    // }
    // else {
    //     ageText.innerHTML = year + "years ," + month + "months" + day + "days ";
    // }
    
}

