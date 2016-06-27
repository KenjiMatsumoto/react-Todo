var moment = require('moment');

console.log(moment().format());


var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1466939699;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YY @ h:mm a'));

console.log('current moment2', currentMoment.format('MMM Do, YYYY @ h:mm A'));
