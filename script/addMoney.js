document.getElementById("add-money-btn").addEventListener("click", function () {
  // 1 - bank account get
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Pick a Bank") {
    alert("Please Pick a Bank");
    return;
  }

  // 2 - get bank account number
  const accno = getValueFromInput('add-money-number');

if(accno.length !== 11){
    alert('invalid account number')
    return;
}

// 3 - get amount
    const amount = getValueFromInput('add-money-amount');
    const newBalance = getBalance() + Number(amount);
      // 5-get the pin and varify
  const pin = getValueFromInput("add-money-pin");

  if (pin === "1234") {
    // 5-1 true:: show an alert > set Balance
    alert(`Add Money successfully to 
        ${bankAccount} at ${new Date()}`);
    setBalance(newBalance);
        // a-1. get history container
        const history = document.getElementById('history-container');
        // a-2. creat new dive
        const newHistory = document.createElement('div');
        // a-3. add innerHTML to the new div
        newHistory.innerHTML = `
        <div class="transaction-card bg-base-300">
            <p>Add Money successfully from
        ${bankAccount}, to acc-no ${accno} at ${new Date()}</p>
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
