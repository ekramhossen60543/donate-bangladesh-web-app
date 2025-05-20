// if clicked then open the blog page
document.getElementById("btn-blog").addEventListener("click", function () {
  window.location.href = "blog.html";
});

// if clicked then open the history page and active btn
document.getElementById("btn-history").addEventListener("click", function () {
  // if clicked change btn bg --> active
  const btnHistory = document.getElementById("btn-history");
  btnHistory.classList.add("active-btn");
  btnHistory.classList.remove("default-btn");
  // if clicked change btn bg --> de-active
  const btnDonate = document.getElementById("btn-donate");
  btnDonate.classList.remove("active-btn");
  btnDonate.classList.add("default-btn");

  // if clicked then opened the History page
  // window.location.href = "history.html";
});
