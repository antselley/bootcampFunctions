function isTuesdayWithIf() {
  var day = new Date();
  var dayOfWeek = day.getDay();
  if (dayOfWeek === 2) {
    return true;
  }
  else {
    return false;
  }
}

function isTuesday (string) {
  return string.startsWith("Tu");
}

isTuesday("Tuesday");
