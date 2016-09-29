function isFromCapeTown (regNumber) {
    start = regNumber.substring(0,2);
    if (start === "CA") {
      console.log("True");
      return true;
    }
    else {
      console.log("False");
      return false;
    }
}

isFromCapeTown("CA 43829476");
