//Initialise Variables
var counterPressedButtonsPjan = 0, codePjan = 0, unassignedNumbersPjan = 4, vaultOpenPjan = false;
var correctCodeCounter = 0, incorrectCodeCounter = 0;
var monitorPjan = document.getElementById('monitor'),
    codeButtonsPjan = document.getElementsByClassName('codeButton'),
    submitBtnPjan = document.getElementById('submitBtn'),
    vaultAudioPjan = document.getElementById('vaultAudio'),
    vaultPjan = document.getElementById('vault'),
    vaultContentPjan = document.getElementById('vaultContent')
    countersPjan = document.getElementById('counters');

//Standard numbers with values
function PressButtonPjan(btn) {
  AudioPjan("ButtonBeep.wav");
  var selectedNumberPjan = btn.value;
  if (counterPressedButtonsPjan == 0) {
    codePjan = selectedNumberPjan;
  }
  else {
    codePjan += selectedNumberPjan;
  }
  counterPressedButtonsPjan++;
  unassignedNumbersPjan--;
  monitor.innerHTML = "INSERT CODE:" + codePjan;
  for (var i = 0; i < unassignedNumbersPjan; i++) {
    monitor.innerHTML += " _";
  }
  if (counterPressedButtonsPjan == 4) {
    for (var i = 0; i < codeButtonsPjan.length; i++) {
      codeButtonsPjan[i].disabled = true;
    }
    submitBtnPjan.disabled = false;
  }
  console.log("The Current Code is:" + codePjan);
}

//The Submit button
function SubmitPjan() {
  submitBtnPjan.disabled = true;

  //If a code is correct this will be executed
  if (codePjan == "123*") {
    monitor.innerHTML = "ACCESS GRANTED - CODE IS CORRECT";
    correctCodeCounter++;
    monitor.style.color = "green";
    AudioPjan("Correct.wav");
    setTimeout(function() {BlinkMonitor("black");}, 500);
    setTimeout(function() {BlinkMonitor("green");}, 1000);
    setTimeout(function() {BlinkMonitor("black");}, 1500);
    setTimeout(function() {BlinkMonitor("green");}, 2000);
    vaultPjan.className = "vaultOpened";
    vaultOpenPjan = true;
    setTimeout("vaultContentPjan.hidden = false;",3000);
    codeButtonsPjan[11].disabled = false;
  }

  //If a code is incorrect this will be executed
  else {
    monitor.innerHTML = "ACCESS DENIED - CODE IS INCORRECT";
    incorrectCodeCounter++;
    AudioPjan("Incorrect.wav");
    monitor.style.color = "red";
    setTimeout(function() {BlinkMonitor("black");}, 500);
    setTimeout(function() {BlinkMonitor("red");}, 1000);
    setTimeout(function() {BlinkMonitor("black");}, 1500);
    setTimeout(function() {BlinkMonitor("red");}, 2000);
    setTimeout(function() {ResetPjan()}, 5000);
  }
  //Update the counters given on the screen
  counters.innerHTML = "Correct Codes: " + correctCodeCounter + "<br/> Incorrect Codes: " + incorrectCodeCounter;
}

//Method for easy audio control
function AudioPjan(src) {
  vaultAudioPjan.src = "Media/Sound/" + src;
  vaultAudioPjan.play();
}

//Method to change to color of the monitor text to the given color
function BlinkMonitor(color) {
  monitor.style.color = color;
}

//Function to Reset the given variables and elements to their original state
function ResetPjan() {
  counterPressedButtonsPjan = 0, codePjan = 0, unassignedNumbersPjan = 4;
  for (var i = 0; i < codeButtonsPjan.length; i++) {
    codeButtonsPjan[i].disabled = false;
  }
  submitBtnPjan.disabled = true;
  monitorPjan.style.color = "#3b00ff";
  monitorPjan.innerHTML = "INSERT CODE: _ _ _ _";
  if (vaultOpenPjan == true) {
    vaultPjan.className = "vaultClosed";
    setTimeout("vaultPjan.className = ''", 4000)
    vaultOpenPjan = false;
  }
}

//Testing Line displayed in the console to see if javascript is fully functional
console.log("IF JAVASCRIPT WORKS THEN THIS MESSAGE WILL BE DISPLAYED");
