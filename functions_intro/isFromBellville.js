function isFromBellville (regNumber) {
    start = regNumber.substring(0,2);
    if (start === "CY") {
      console.log("True");
      return true;
    }
    else {
      console.log("False");
      return false;
    }
}

isFromBellville("CY 43829476");
isFromBellville("CD 43829476");
