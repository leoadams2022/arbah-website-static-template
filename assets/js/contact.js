function initContactUsForm() {
  // Select the form by its ID
  const form = document.getElementById('contact-us-form');

  // Get all input fields inside the form
  const inputs = form.querySelectorAll('input, textarea'); // Includes both input and textarea elements

  // Loop over each input field
  inputs.forEach((input) => {
    // Add an event listener for the 'input' event
    input.addEventListener('input', (e) => {
      if (e.target.value.trim() !== '') {
        // If input has a value, add the data-te-input-state-active attribute
        e.target.setAttribute('data-te-input-state-active', '');
      } else {
        // If input is empty, remove the attribute
        e.target.removeAttribute('data-te-input-state-active');
      }
    });

    // Handle state on page load (e.g., prefilled values)
    if (input.value.trim() !== '') {
      input.setAttribute('data-te-input-state-active', '');
    } else {
      input.removeAttribute('data-te-input-state-active');
    }
  });
}

initContactUsForm();
