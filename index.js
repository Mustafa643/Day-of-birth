function myfunction() {
    // d    
    var DateOfBirth = document.getElementById("Date").value;
    console.log(DateOfBirth);
    
    // // if(DateOfBirth < 1 || DateOfBirth > 31){
    // //     alert("invalid date");
    // }
    var MonthOfBirth = document.getElementById("Month").value;
    console.log(MonthOfBirth)
    // if(MonthOfBirth < 1 || MonthOfBirth > 12){
    //     alert("invalid month");
    // }
    var YearOfBirth = document.getElementById("Year").value;
    console.log(YearOfBirth)
    var gender = document.getElementById("gender").value;
    var maleName = [" Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    // console.log(maleName)
    var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    var DayOfCentury = parseInt(DateOfBirth.toString().slice(0, 2));

    var DayofBirth = parseInt(YearOfBirth.toString().slice(2, 4));

    var Dayoftheweek = parseInt((((DayOfCentury / 4) - 2 * DayOfCentury - 1) + ((5 * YearOfBirth / 4)) + ((26 * (YearOfBirth + 1) / 10))) % 7);
    // console.log(Dayoftheweek)

if(gender === "Male"){
    var Mname = maleName[Dayoftheweek-1];
    var Day = Days[Dayoftheweek - 1];
    document.getElementById("outputs").innerHTML=("If you were born on "     + Day +    " your name is " + Mname);

} else if(gender === "Female") {
   
        var Fname = femaleName[Dayoftheweek - 1];
        var Day = Days[Dayoftheweek - 1];
        document.getElementById("outputs").innerHTML=("If you were born on "     + Day +    " your name is " + Fname);
    }
    myfunction();
}