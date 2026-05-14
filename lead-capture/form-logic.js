/**
 * ASB Lead Capture Form Logic
 * Handles validation, accessibility error reporting, and submission simulation.
 */

$(document).ready(function() {
    const leadForm = $('#leadForm');
    const successState = $('#successState');
    const submitBtn = $('#submitBtn');
    const btnText = $('.btn-text');
    const loader = $('.loader');

    leadForm.on('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            simulateSubmission();
        }
    });

    /**
     * Basic Validation Logic
     */
    function validateForm() {
        let isValid = true;
        
        const name = $('#fullName');
        const email = $('#email');
        const phone = $('#phone');

        // Reset errors
        $('.error-msg').hide();
        $('input').removeClass('invalid');

        // Name Validation
        if (name.val().trim().length < 2) {
            showError(name, '#nameError');
            isValid = false;
        }

        // Email Validation (Regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.val())) {
            showError(email, '#emailError');
            isValid = false;
        }

        // Phone Validation (Basic NZ Format)
        const phoneRegex = /^[0-9\s]{7,15}$/;
        if (!phoneRegex.test(phone.val().replace(/\s/g, ''))) {
            showError(phone, '#phoneError');
            isValid = false;
        }

        return isValid;
    }

    function showError(input, errorId) {
        input.addClass('invalid');
        $(errorId).fadeIn();
        // Accessibility: Focus the first invalid field
        if ($('.invalid').length === 1) {
            input.focus();
        }
    }

    /**
     * Simulate an API call to a Lead Management System (e.g. Adobe Campaign)
     */
    function simulateSubmission() {
        // UI Feedback
        submitBtn.prop('disabled', true);
        btnText.fadeOut(200, function() {
            loader.fadeIn();
        });

        const customerName = $('#fullName').val().split(' ')[0];

        // Artificial delay for realism
        setTimeout(function() {
            leadForm.fadeOut(300, function() {
                $('#userName').text(customerName);
                successState.fadeIn();
                
                // Analytics: Track Lead Conversion
                console.log('Lead Capture: Success tracked for ' + customerName);
                // if(window.adobeDataLayer) window.adobeDataLayer.push({"event": "lead-conversion"});
            });
        }, 1500);
    }

    // Real-time validation on blur for better UX
    $('input').on('blur', function() {
        if ($(this).val().trim() !== "") {
            $(this).removeClass('invalid');
            $(this).siblings('.error-msg').fadeOut();
        }
    });
});
