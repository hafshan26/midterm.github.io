/* 
    JavaScript 6h Edition
    Midterm 1

    Functions
    Author: Audrey Bernier Larose
    Date: 2-25-2021

    Filename: script.js
*/
"use strict"

/* removing default values for gender and year select lists */
function removeSelectDefaults() 
{

    // Remove default value for gender select list
  const genderSelect = document.getElementById("gender");
  genderSelect.selectedIndex = -1;

  // Remove default value for year select list
  const yearSelect = document.getElementById("year");
  yearSelect.selectedIndex = -1;

}

/* Copying values from billing to shipping fields */
function copyBillingAddress() 
{
  const sameAsBilling = document.getElementById("same-as-billing");
  const billingAddress = document.getElementById("billing-address");
  const shippingAddress = document.getElementById("shipping-address");
  
  // add event listener to the checkbox
  sameAsBilling.addEventListener("change", function() {
    if (sameAsBilling.checked) {
      shippingAddress.value = billingAddress.value;
    } else {
      shippingAddress.value = "";
    }
  });

}



/* Validates addresses fieldsets */
function validateAddresses(fieldsetId) 
{
    const requiredFields = document.querySelectorAll('[required]');
    requiredFields.forEach(field => {
      field.addEventListener('input', function() {
        if (field.validity.valueMissing) {
          field.setCustomValidity('Please fill out this field.');
        } else {
          field.setCustomValidity('');
        }
      });
    });
    
 }
 
/* Validating form */
function validateForm()
{    
    validateAddresses("billingAddress");
    validateAddresses("shippingAddress");

    if(document.getElementsByTagName("form")[0].checkValidity())
    {
        document.getElementById("errorMessage").style.display = "none";
    } else{
        document.getElementById("errorMessage").style.display = "block";
    }  
}

/* Resets the page */
function resetPage()
{
    location.reload();
}

/* Adds event listeners */
function createEventListeners()
{    
    document.getElementById("submitBtn").addEventListener("click", validateForm);
    document.getElementById("sameAddr").addEventListener("click", copyBillingAddress);
    document.getElementById("resetBtn").addEventListener("click", resetPage);    
}

/* Runs initial form configuration functions */
function setUpPage()
{
    removeSelectDefaults();
    createEventListeners();
}

 /* Runs setup function when page finishes loading */
window.addEventListener("load", setUpPage)
