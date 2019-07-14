function myfunction() {

    var DateOfBirth = prompt("Enter your date of birth");
    
    if(DateOfBirth < 1 || DateOfBirth > 31){
        alert("invalid date");
    }
    var MonthOfBirth = prompt("Enter your month of birth");
    if(MonthOfBirth < 2 || MonthOfBirth > 12){
        alert("invalid month");
    }
    var YearOfBirth = prompt("Enter your year of birth");
    var gender = prompt("Enter gender (Male or Female):");
    var maleName = [" Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    // console.log(maleName)
    var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var DayOfCentury = parseInt(DateOfBirth.slice(0, 2));
    var DayofBirth = parseInt(YearOfBirth.slice(2, 4));
    var Dayoftheweek = parseInt((((DayOfCentury / 4) - 2 * DayOfCentury - 1) + ((5 * YearOfBirth / 4)) + ((26 * (YearOfBirth + 1) / 10))) % 7);
    // console.log(Dayoftheweek)

if(gender === "Male"){
    var Mname = maleName[Dayoftheweek-1];
    var Day = Days[Dayoftheweek - 1];
    alert("If you were born on"  + Day +  "your name is " + Mname);

} else if(gender === "Female") {
   
        var Fname = femaleName[Dayoftheweek - 1];
        var Day = Days[Dayoftheweek - 1];
        alert("If you were born on"  + Day +  "your name is " + Fname);
    }
}
myfunction();