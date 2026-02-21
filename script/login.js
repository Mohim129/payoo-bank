document.getElementById("login-btn").addEventListener("click", function(){
    // 1. get the mobile number input
    const numberInput = document.getElementById('input-number');
    const contactNumber = numberInput.value;
    console.log(contactNumber)
    // 2. get the pin input
    const numberPin = document.getElementById("input-pin");
    const pin = numberPin.value;
    console.log(pin);
    // 3. match the pin & mobile number
    if(contactNumber=='01234567890' && pin == '1234' ){
        // 3-1. true:::>> alert> homepage
        alert('login successful')
        // window.location.replace('./home.html')
        window.location.assign('./home.html')
    }
    else{
      // 3-2. false:::>> alert> return
      alert("Incorrect password or pin, try again");
      return;
    }



});
