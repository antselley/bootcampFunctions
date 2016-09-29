function getDay (date) {
  var d = new Date(date);
  var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Saturday'] ;
  console.log(weekDays[d.getDay()])  ;
  return weekDays[d.getDay()]
}

getDay('2016-09-04') ;
