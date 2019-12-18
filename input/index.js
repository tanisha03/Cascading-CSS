var a = document.getElementById("name-enter");
a.onkeyup = function() {
  document.getElementById("name-display").value = a.value;
};
$(":input").inputmask();

$("#phone").inputmask({ mask: "(999) 999-9999" });
