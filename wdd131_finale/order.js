
    const theForm = document.querySelector('#checkoutForm');
    const paymentSelect = document.querySelector('#paymentMethod');
    const cashContainer = document.querySelector('#cashReceiptContainer');
    const checkContainer = document.querySelector('#checkReceiptContainer');
    const venmoContainer = document.querySelector('#venmoUsernameContainer');
    const venmoInput = document.querySelector('#venmoUsername');
 
function togglePaymentDetails(e) {
    
    // Show the container based on the selected payment method, and add the required attribute back.
        let value = e.target.value; 
        venmoContainer.classList.add('hide');
        cashContainer.classList.add('hide');
        checkContainer.classList.add('hide');
        venmoInput.required = false;
      
        // hide and show selected payment type
        if (value == 'cash') {
          cashContainer.classList.remove('hide');
        } else if (value == 'check') {
          checkContainer.classList.remove('hide');
        } else if (value == 'venmo') {
          venmoContainer.classList.remove('hide');
          venmoInput.required=true;
        } 

        // Update ARIA expanded attribute
        // aria-expanded belongs to the element that toggles visibility, not the hidden content itself.
        if (value === 'cash' || value === 'check' || value === 'venmo') {
          paymentSelect.setAttribute("aria-expanded", "true");
        } else {
          paymentSelect.setAttribute("aria-expanded", "false");
        }
  }

// attach a submit event handler to the form
paymentSelect.addEventListener('change', togglePaymentDetails);

//validations and errors

function displayError(msg) {
	// display error message
	const errorEl = document.querySelector('.errors');
    if (errorEl) errorEl.textContent = msg;
}

function submitHandler(event) {
	event.preventDefault();
  let errorMsg = '';
	displayError('');
    if (paymentSelect.value === 'cash') {
        // Success: show a confirmation message
        const formContainer = document.getElementById('checkoutForm');
        formContainer.innerHTML = '<h2>Thank you for your purchase.</h2>';
    } else if (paymentSelect.value === 'check') {
        // Success: show a confirmation message
        const formContainer = document.getElementById('checkoutForm');
        formContainer.innerHTML = '<h2>Thank you for your purchase.</h2>';
    } else if (paymentSelect.value === 'venmo') {
        // Success: show a confirmation message
        const formContainer = document.getElementById('checkoutForm');
        formContainer.innerHTML = '<h2>Thank you for your purchase.</h2>';
    } else {
        errorMsg = 'Please select a valid payment method.';
        displayError(errorMsg);
    }
}
  
document.querySelector('#checkoutForm').addEventListener('submit', submitHandler) 