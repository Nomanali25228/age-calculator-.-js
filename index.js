function calculate() {
    let year;
    let month;
    let day;

    let curantday = parseInt(cd.value.slice(8, 10), 10)
    let curantmonth = parseInt(cd.value.slice(5, 7), 10)
    let curantyear = parseInt(cd.value.slice(0, 4), 10)
    console.log(curantday, curantmonth, curantyear);

    let birthday = parseInt(dob.value.slice(8, 10), 10)
    let birthmonth = parseInt(dob.value.slice(5, 7), 10)
    let birthyear = parseInt(dob.value.slice(0, 4), 10)
    console.log(curantday, curantmonth, curantyear);

    if (curantday >= birthday) {
        day = curantday - birthday
    } else {
        day = curantday + new Date(curantyear, curantmonth).getDate - birthday;
        curantmonth--;
    }

    if (curantmonth >= birthmonth) {
        month = curantmonth - birthmonth
    } else {
        month = curantmonth + 12 - birthmonth;
        curantyear--
    }
    
    year = curantyear - birthyear;

    if (year < 0) {
        agetext.innerHTML = "kya mazak kar rahe ho bhai sahi date dalo"
    } else {
        agetext.innerHTML = year + "years , " + month + "months , " + day + "days"
    }



}