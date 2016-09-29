function isFromPaarl (regNumber) {
    start = regNumber.substring(0,2);
    if (start === "CJ") {
      console.log("True");
      return true;
    }
    else {
      console.log("False");
      return false;
    }
}

isFromPaarl("CY 43829476");
isFromPaarl("CD 43829476");
isFromPaarl("CJ 43829476");
