var countRegNumber = function(string) {
  string_split = string.split(",");
  console.log(string_split);
  console.log("The number of registration numbers is " + string_split.length)
}

countRegNumber("CA 182736,CY 523519,CJ 812328");
