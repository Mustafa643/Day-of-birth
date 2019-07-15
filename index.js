function myfunction() {
     
    var DateOfBirth = document.getElementById("Date").value;
   
    
    
    var MonthOfBirth = document.getElementById("Month").value;
    
    
    var YearOfBirth = document.getElementById("Year").value;
    
    var gender1 = document.getElementById("gender1").value;
    var gender2 = document.getElementById("gender2").value;

    var maleName = [" Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    
    var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    var DayOfCentury = parseInt(DateOfBirth.toString().slice(0, 2));

    var DayofBirth = parseInt(YearOfBirth.value.slice(2, 4));

    var Dayoftheweek = parseInt(((DayOfCentury / 4) - 2 * DayOfCentury - 1) + ((5 * DayofBirth / 4)) + ((26 * (MonthOfBirth + 1) / 10)) + DateOfBirth) % 7;
    
    var Mname = maleName[Dayoftheweek-1];
    var Day = Days[Dayoftheweek - 1];

    var Fname = femaleName[Dayoftheweek - 1];
    var Day = Days[Dayoftheweek - 1];

if(gender1.checked == true){
    
    document.getElementById("outputs").innerHTML=("If you were born on "     + Day +    " your name is " + Mname);

} else if(gender2.checked == true) {
   
        
        document.getElementById("outputs").innerHTML=("If you were born on "     + Day +    " your name is " + Fname);
    }
    myfunction();
}