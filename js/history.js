// if clicked then change color and click donation btn then open the donation page
document.getElementById("btn-donation").addEventListener("click", function () {
  // change bg color --> donate btn
  const btnDonate = document.getElementById("btn-donation");
  btnDonate.classList.remove("default-btn");
  btnDonate.classList.add("active-btn");

  // change bg color --> history
  const btnHistory = document.getElementById("btn-history");
  btnHistory.classList.remove("active-btn");
  btnHistory.classList.add("default-btn");

  // if clicked opened the donation page
  window.location.href = "index.html";
});
