window.onload = function () {
  var today = Date();
  document.getElementById('today').innerHTML = today;

  var select = document.getElementById("projects");
  for(var i = 10; i >= 1; i--){
    var option = document.createElement("option");
    option.text = option.value = i;
    select.add(option, 0);
  }
};

