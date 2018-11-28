$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!

  var $step1 = $('#step1').text();
  var arr = $step1.split(' ');

  var temp = '';
  for (var i = 0; i < arr.length; i++) {
    temp = temp + `<span>${arr[i]}</span>`;
  }
  // var spanTemplate = function (word) {
  //   return `<span>${word}</span>`
  // }
  var result = `<p>${temp}</p>`
  $('#step1').html(result);

  //-----

  var $step1 = $('#step1').text();
  var arr = $step1.split(' ');
  
  var temp = '';
  for (var i = 0; i < arr.length; i++) {
    temp = temp + '<span>'+ arr[i] +'</span>';
  }
  temp = '<p>'+ temp +'</p>';

  $('#step1').append(temp);

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
  var step2 = document.getElementById('step2');

});