var counterPressedButtonsPjan = 0, codePjan = 0, unassignedNumbersPjan = 4;
var monitorPjan = document.getElementById('monitor'), codeButtonsPjan = document.getElementsByClassName('codeButton');

function PressButtonPjan(btn) {
  var selectedNumberPjan = btn.value;

  if (counterPressedButtonsPjan == 0) {
    codePjan = selectedNumberPjan;
  }
  else {
    codePjan += selectedNumberPjan;
  }

  counterPressedButtonsPjan++;
  unassignedNumbersPjan -= counterPressedButtonsPjan;
  monitor.innerHTML = "INSERT CODE:" + codePjan;
  for (var i = 0; i < unassignedNumbersPjan; i++) {
    monitor.innerHTML += " _";
  }

  if (counterPressedButtonsPjan == 4) {
    for (var i = 0; i < codeButtonsPjan.length; i++) {
      codeButtonsPjan[i].disabled = true;
    }
    document.getElementById('submitBtn').disabled = false;
  }
  console.log(codePjan);
}
