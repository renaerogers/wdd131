
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

paymentSelect.addEventListener('change', togglePaymentDetails);

function estimatedCost() {
    const itemSelect = document.querySelector('#itemSelection');
    const quantitySelect = document.querySelector('#quantity');
    const costDisplay = document.querySelector('.grid-cost p');
    
    let pricePerItem = 0;
    
    if (itemSelect.value === 'halfLoaf') {
        pricePerItem = 8.00;
    } else if (itemSelect.value === 'loaf') {
        pricePerItem = 12.00;
    } else if (itemSelect.value === 'focaccia') {
        pricePerItem = 16.00;
    }
    
    const quantity = parseInt(quantitySelect.value);
    
    if (pricePerItem > 0 && !isNaN(quantity)) {
        const total = pricePerItem * quantity;
        costDisplay.textContent = `Estimated Cost: $${total.toFixed(2)}`;
    } else {
        costDisplay.textContent = `Estimated Cost: $0.00`;
    }
}

document.querySelector('#itemSelection').addEventListener('change', estimatedCost);
document.querySelector('#quantity').addEventListener('change', estimatedCost);

//validations and errors
function displayError(msg) {
	// display error message
	const errorEl = document.querySelector('.errors');
    if (errorEl) errorEl.textContent = msg;
}

// function submitHandler(event) {
// 	event.preventDefault();
//   let errorMsg = '';
// 	displayError('');
//     if (paymentSelect.value !== '') {
//         // Show confirmation message
//         theForm.innerHTML = '<h2>Thank you for your purchase!</h2><p>We will contact you through your email to confirm your order and provide updates on the expected delivery date.</p>';
//     } else {
//         errorMsg = 'Please select a valid payment method.';
//         displayError(errorMsg);
//     }
// }

const scriptURL = 'https://script.google.com/macros/s/AKfycbz_awI_fVtp_FyRBAroJM_6nC31MFTC-X5jG2xP8lkIqk_UXX8HeR57ObTrXbLG9To0/exec'; // <-- Paste your URL here

function submitHandler(event) {
    event.preventDefault();
    displayError('');
    
    // Show a loading state on the button
    const submitBtn = theForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    // Grab all form data automatically
    const formData = new FormData(theForm);

    fetch(scriptURL, { 
        method: 'POST', 
        body: formData
    })
    .then(response => {
        // Success: Show the thank you message
        theForm.innerHTML = `
            <div style="text-align: center; padding: 20px; color: #303448;">
                <h2>Order Sent!</h2>
                <p>Thank you, ${formData.get('fullName')} for your order! We will contact you through your email to confirm your order and provide updates on the expected delivery date.</p>
            </div>
        `;
    })
    .catch(error => {
        // Error: Re-enable button and show error
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
        displayError('There was an error submitting your order. Please try again.');
        console.error('Error!', error.message);
    });
}
  
theForm.addEventListener('submit', submitHandler);

