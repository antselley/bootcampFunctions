function getDay (date) {
  var d = new Date(date);
  var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Saturday'] ;
  return weekDays[d.getDay()]
}


function sameWeekday (date1, date2) {
  console.log(getDay(date1) === getDay(date2));
  return getDay(date1) === getDay(date2);
}

sameWeekday('2016-09-12','2016-09-05');
