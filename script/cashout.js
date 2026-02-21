document.getElementById("cashout-btn").addEventListener("click", function () {
  // 1-get the agemt number & validate
  const cashoutNumber = getValueFromInput("cashout-number");

  if (cashoutNumber !== "12345678910") {
    alert("Invalid Number");
    return;
  }
  // 2-get the amount, validate, convert to number
  const cashoutAmount = getValueFromInput("cashout-amount");
  const currentBalance = getBalance();
  // 4-calculate new balance
  const newBalance = currentBalance - Number(cashoutAmount);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }
  // 5-get the pin and varify
  const pin = getValueFromInput("cashout-pin");

  if (pin === "1234") {
    // 5-1 true:: show an alert > set Balance
    alert("cashout successfull");
    setBalance(newBalance);

    // a-1. get history container
    const history = document.getElementById("history-container");
    // a-2. creat new dive
    const newHistory = document.createElement("div");
    // a-3. add innerHTML to the new div
    newHistory.innerHTML = `
        <div class="transaction-card bg-base-300">
            <p>Cashout ${cashoutAmount}$ successfully to ${cashoutNumber} at ${new Date()}</p>
        </div>
        `;

    // a-4. append new div to history container
    history.append(newHistory);
  } else {
    // 5-2 false:: show anerror alert > return
    alert("invalid pin");
    return;
  }
});

// document.getElementById('cashout-btn').addEventListener('click', function(){
//     // 1-get the agemt number & validate
//         const cashoutNumberInput = document.getElementById("cashout-number");
//         const cashoutNumber = cashoutNumberInput.value;
//         if( cashoutNumber !== "12345678910"){
//             alert('Invalid Number')
//             return
//         }
//     // 2-get the amount, validate, convert to number
//         const cashoutAmountInput = document.getElementById("cashout-amount");
//         const cashoutAmount = cashoutAmountInput.value;
//         console.log(cashoutAmount);
//     // 3-get the current balance, validate, convert to number
//         const balanceElement = document.getElementById("balance");
//         const balance = balanceElement.innerText
//         console.log(balance);
//     // 4-calculate new balance
//         const newBalance =  Number(balance) - Number(cashoutAmount)

//         if(newBalance<0){
//             alert('Invalid Amount')
//             return;
//         }

//         // console.log(newBalance);
//     // 5-get the pin and varify
//         const cashoutPinInput = document.getElementById("cashout-pin");
//         const pin= cashoutPinInput.value
//         if(pin === "1234"){
//           // 5-1 true:: show an alert > set Balance
//             alert('cashout successfull')
//             console.log(newBalance)
//             balanceElement.innerText = newBalance
//         }
//         else{
//           // 5-2 false:: show anerror alert > return
//           alert("invalid pin");
//           return;
//         }

// })
