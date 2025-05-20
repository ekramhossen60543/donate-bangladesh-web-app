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

// if btn blog clicked then open blog page
document.getElementById("btn-blog").addEventListener("click", function () {
  window.location.href = "blog.html";
});

// get transaction history
const history = JSON.parse(localStorage.getItem("formHistory")) || [];
let htmlOutPut = ``;

history.forEach((entry) => {
  htmlOutPut += `
        <div class="card border-1 border-gray-200 rounded-lg bg-base-100 w-full font-bold p-5">

            <h2 class="text-xl">
              <span>${entry.inputNumber}</span> ${entry.donateReason}
            </h2>
            <p class="font-light text-gray-600 text-base">
              Date : ${entry.date} ;
            </p>
        </div>`;
});

// set history item
document.getElementById("history-cards").innerHTML = htmlOutPut;

// Transaction History Delete Program
document
  .getElementById("btn-history-delete")
  .addEventListener("click", function () {
    localStorage.clear();
    location.reload();
  });
