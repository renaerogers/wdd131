
    const theForm = document.querySelector('#checkoutForm');
    const creditInput = document.querySelector('#creditCardNumberContainer input');
    let paymentSelect = 'creditCard';
//validations and errors

function displayError(msg) {
	// display error message
	document.querySelector('.errors').textContent = msg
}

function isCardNumberValid(number) {
	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
	return number === '1234123412341234' 
}

function submitHandler(event) {
	event.preventDefault();
  let errorMsg = '';
	displayError('');

  let cardNumber = document.querySelector('#creditCardNumber');
  const cardNum = cardNumber.value.trim();
  if (paymentSelect.value === 'creditCard') {
    // Check if it's numeric and valid in one go
    
      if (!/^\d{16}$/.test(cardNum)) { 
        // checks if it's exactly 16 digits and nothing else !/^4\d{15}$/ checks, making sure it starts with a 4 or !/^01\d{14}$/ checks to make sure the first two digits are 01 
        // !/^[1-4]\d{15}$/ checks to make sure the the first digit is between 1 and 4 and the rest are digits and there are exactly 16 digits total
        // !/^([4-7]5|[1-3]0)\d{14}$/ makes sure the first two digits are between 1-3 and 0 or 4-7 and 5 and the rest are digits and there are exactly 16 digits total
      errorMsg += 'Card number must be 16 digits\n';
      } else if (!isCardNumberValid(cardNum)) {
        errorMsg += 'Card number is not valid\n';
      }
    //check date
    const expYear = Number(document.querySelector('#year').value);   
    const expMonth = Number(document.querySelector('#month').value);
    const currentDate = new Date()

    if (2000 + expYear < currentDate.getFullYear() || (2000 + expYear === currentDate.getFullYear() && expMonth <= (currentDate.getMonth()))
    ) {
        errorMsg += 'Card is expired\n';
    }
    
    const cvc = document.querySelector('#cvcCvv').value.trim();
    if (!/^\d{3}$/.test(cvc)) {
        errorMsg += 'CVC/CVV must be 3 digits\n';
    }
  }

    if (errorMsg !== '') {
		// there was an error. stop the form and display the errors.
		displayError(errorMsg)
		return;
    }
    // Success: show a confirmation message
    const formContainer = document.getElementById('checkoutForm');
    formContainer.innerHTML = '<h2>Thank you for your purchase.</h2>';
}
  
document.querySelector('#checkoutForm').addEventListener('submit', submitHandler) 