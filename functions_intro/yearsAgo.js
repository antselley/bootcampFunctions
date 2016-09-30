function yearsAgo (year) {
    var today = new Date();
    var thisYear = today.getFullYear();
    return thisYear - year ;
}

yearsAgo(2000);
