var runs = 0;
var wickets = 0;

runs = parseInt(document.querySelector(".runs").innerHTML);
wickets = parseInt(document.querySelector(".wickets").innerHTML);

switch(whatButton){
  case "1":
    runs += 1;
    document.querySelector(".runs").innerHTML = runs.toString();
    break;

  case "2":
    runs += 2;
    document.querySelector(".runs").innerHTML = runs.toString();
    break;

  case "3":
    runs += 3;
    document.querySelector(".runs").innerHTML = runs.toString();
    break;

  case "4":
    runs += 4;
    document.querySelector(".runs").innerHTML = runs.toString();
    break;

  case "5":
    runs += 5;
    document.querySelector(".runs").innerHTML = runs.toString();
    break;

  case "6":
    runs += 6;
    document.querySelector(".runs").innerHTML = runs.toString();
    break;

  case "wd":
    runs += 1;
    document.querySelector(".runs").innerHTML = runs.toString();
    break;

  case "nb":
    runs += 1;
    document.querySelector(".runs").innerHTML = runs.toString();
    break;

  case "W":
    wickets += 1;
    document.querySelector(".wickets").innerHTML = wickets.toString();
    break;

  case "•":
    runs += 0;
    document.querySelector(".runs").innerHTML = runs.toString();
    break;

}
