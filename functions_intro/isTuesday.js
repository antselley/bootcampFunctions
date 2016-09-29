function isTuesdayWithIf() {
  var day = new Date();
  var dayOfWeek = day.getDay();
  if (dayOfWeek === 2) {
    console.log("True");
  }
  else {
    console.log("False");
  }
}

function isTuesday (string) {
  console.log(string.startsWith("Tu"));
}

isTuesday("Tuesday");
