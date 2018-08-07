Number.prototype.padLeft = function() {
  if(this < 10) {
    return '0' + String(this);
  }
  else {
    return String(this);
  }
}

Date.prototype.format = function() {
  var yyyy = this.getFullYear();
  var month = (this.getMonth() + 1).padLeft();
  var dd = this.getDate().padLeft();
  var HH = this.getHours().padLeft();
  var mm = this.getMinutes().padLeft();
  var ss = this.getSeconds().padLeft();

  var format = [yyyy, month, dd].join('-');
  return format;
}

var map = {
  '2018-08-06': '21',
  '2018-08-07': '22',
  '2018-08-08': '23',
  '2018-08-09': '24',
  '2018-08-10': '25',

  '2018-08-13': '26',
  '2018-08-14': '27',

  '2018-08-16': '28',
  '2018-08-17': '29',

  '2018-08-20': '30',
  '2018-08-21': '31',
  '2018-08-22': '32',
  '2018-08-23': '33',
  '2018-08-24': '34',

  '2018-08-27': '35',
  '2018-08-28': '36',
  '2018-08-29': '37',
  '2018-08-30': '38',
  '2018-08-31': '39',

  '2018-09-03': '40',
  '2018-09-04': '41',
  '2018-09-05': '42',
  '2018-09-06': '43',
  '2018-09-07': '44'
};

var today = new Date();
today = today.format();
console.log(map[today]);