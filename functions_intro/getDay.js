function getDay (date) {
  var d = Date(date);
  var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Saturday','Sunday'] ;
  console.log(weekDays[date.getDay()])  ;
  return weekDays[date.getDay()]
}

getDay('2016-09-17') ;
