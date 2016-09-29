function isFromGauteng (regNumber) {
    if (regNumber.endsWith("GP")) {
      console.log("True");
      return true;
    }
    else {
      console.log("False");
      return false;
    }
}

isFromGauteng("CA 438294 GP");
