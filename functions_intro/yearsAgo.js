function yearsAgo (year) {
    var today = new Date();
    var thisYear = today.getFullYear();
    console.log(thisYear - year);
}

yearsAgo(2000);
