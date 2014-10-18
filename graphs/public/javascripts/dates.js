document.write(Date());

window.onload = function () {
  var select = document.getElementById("year");
  for(var i = 2014; i >= 1950; i--){
    var option = document.createElement("option");
    option.text = option.value = i;
    select.add(option, 0);
  }
};
