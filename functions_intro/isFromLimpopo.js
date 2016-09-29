function isFromLimpopo (regNumber) {
    if (regNumber.endsWith("L")) {
      console.log("True");
      return true;
    }
    else {
      console.log("False");
      return false;
    }
}

isFromLimpopo("CA 438294 L");
