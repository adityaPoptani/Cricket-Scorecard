const allEvents = document.querySelectorAll(".events"); //array which stores all types of events

var eventHistory = " "; //string to display the event history

var runs = 0;
var wickets = 0;

//creating arrays to store user-clicks which will later be used to implement the Undo Button
var runsArray = [];
var wicketsArray = [];
var ballsArray = [];
var oversArray = [];
var eventHistoryArray = [];

for(const event of allEvents){ //an event out of the array allEvents

  event.addEventListener("click", function(){


      var whatButton = this.innerHTML; //which button is clicked?

      runs = parseInt(document.querySelector(".runs").innerHTML);
      wickets = parseInt(document.querySelector(".wickets").innerHTML);


      //Updating runs and wickets using switch-statement
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

      //everytime the loop runs, latest runs and wickets are stored in the respective arrays
      runsArray.push(runs);
      wicketsArray.push(wickets);

      console.log(runsArray);


      //updating the Event History
      eventHistory += whatButton + " ";
      document.querySelector(".eventHistory").innerHTML = eventHistory
      eventHistoryArray.push(eventHistory)



      //Updating Overs
      var overNumber = parseInt(document.querySelector(".overNumber").innerHTML);
      var ballNumber = parseInt(document.querySelector(".ballNumber").innerHTML);

      if(whatButton === "wd" || whatButton === "nb"){
        ballsArray.push(ballNumber);
        oversArray.push(overNumber);
      } else{

        ballNumber += 1;

        if(ballNumber % 6 === 0){
          ballNumber = 0;
          overNumber += 1;
          eventHistory += " ┃ ";
          document.querySelector(".eventHistory").innerHTML = eventHistory
          eventHistoryArray.push(eventHistory)
        }


        // console.log(eventHistoryArray);


        ballsArray.push(ballNumber);
        oversArray.push(overNumber);

        console.log(ballsArray);

        document.querySelector(".ballNumber").innerHTML = ballNumber.toString();
        document.querySelector(".overNumber").innerHTML = overNumber.toString();

      }
  })

}

// Implementing the Undo Button
document.querySelector(".undoButton").addEventListener("click", function(){

runsArray.pop(); //pop the last element out when the undo button is pressed
var a = runsArray.length - 1; //storing the NOW last element

//displaying the NOW last element
if(a >= 0){
  runs = parseInt(runsArray[a])
  document.querySelector(".runs").innerHTML = runs.toString();
} else {
  runs = 0;
  document.querySelector(".runs").innerHTML = runs.toString();
}

wicketsArray.pop();
var b = wicketsArray.length - 1;

if(b >= 0){
  wickets = parseInt(wicketsArray[b])
  document.querySelector(".wickets").innerHTML = wickets.toString();
} else {
  wickets = 0;
  document.querySelector(".wickets").innerHTML = wickets.toString();
}

ballsArray.pop();
var c = ballsArray.length - 1;

if(c >= 0){
  ballNumber = parseInt(ballsArray[c])
  document.querySelector(".ballNumber").innerHTML = ballNumber.toString();
} else{
  ballNumber = 0;
  document.querySelector(".ballNumber").innerHTML = ballNumber.toString();
}

oversArray.pop();
var d = oversArray.length - 1;

if(d >= 0){
  overNumber = parseInt(oversArray[d])
  document.querySelector(".overNumber").innerHTML = overNumber.toString();
} else{
  overNumber = 0;
  document.querySelector(".overNumber").innerHTML = overNumber.toString();
}

eventHistoryArray.pop();
var e = eventHistoryArray.length - 1;

if(e >= 0){
  eventHistory = eventHistoryArray[e];
  document.querySelector(".eventHistory").innerHTML = eventHistory.toString();
} else{
  eventHistory = " ";
  document.querySelector(".eventHistory").innerHTML = eventHistory.toString();
}


})


document.querySelector(".resetButton").addEventListener("click", function(){

alert("Are you sure to refresh the page?")
location.reload();

})
