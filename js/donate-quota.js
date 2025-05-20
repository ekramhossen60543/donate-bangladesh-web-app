// get all field transaction history
document
  .getElementById("myForm-3")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const inputNumber = getInputFieldValueById("input-donate-quota");
    const accountBalance = getTextValueById("account-balance");
    const donateBalance = getTextValueById("donate-quota-balance");
    const donateReason = document.getElementById(
      "donate-reason-quota"
    ).innerText;

    // get date
    const date = new Date().toLocaleString("Dhaka");

    // number validation
    if (!isNaN(inputNumber)) {
      if (inputNumber <= accountBalance) {
        const donateNewBalance = donateBalance + inputNumber;
        document.getElementById("donate-quota-balance").innerText =
          donateNewBalance;
        // subtract account balance
        const remainingAccountBalance = accountBalance - inputNumber;
        document.getElementById("account-balance").innerText =
          remainingAccountBalance;
        // added history process
        const entry = { inputNumber, date, donateReason };
        let history = JSON.parse(localStorage.getItem("formHistory")) || [];
        history.push(entry); // added new entry
        localStorage.setItem("formHistory", JSON.stringify(history));

        // clean input field
        document.getElementById("input-donate-quota").value = "";
        // show modal
        document.getElementById("my_modal_3").showModal();
      } else {
        document.getElementById("not_enough_amount_modal").showModal();
      }
    } else {
      document.getElementById("invalid_amount_modal").showModal();
    }
  });
