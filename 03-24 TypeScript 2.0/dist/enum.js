"use strict";
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["March"] = 2] = "March";
    Month[Month["April"] = 3] = "April";
    Month[Month["May"] = 4] = "May";
    Month[Month["June"] = 12] = "June";
    Month[Month["July"] = 13] = "July";
    Month[Month["August"] = 14] = "August";
    Month[Month["September"] = 15] = "September";
    Month[Month["October"] = 16] = "October";
    Month[Month["Nov"] = 17] = "Nov";
    Month[Month["Dec"] = 18] = "Dec";
})(Month || (Month = {}));
// console.log(Month.Jan);
console.log(Month[2]);
