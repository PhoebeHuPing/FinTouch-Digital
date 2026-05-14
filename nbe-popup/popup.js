/**
 * ASB NBE Pop-up Component (jQuery)
 * Handles the display logic, analytics triggers, and dismissal states.
 */

$(document).ready(function() {
    const NBE_DELAY = 2000; // Show after 2 seconds for demo
    const nbeOverlay = $('#nbe-overlay');
    const nbeId = nbeOverlay.data('nbe-id');

    // 1. Check if the user has already dismissed this specific offer
    // In a real banking app, this might be tied to a CRM profile via API
    if (localStorage.getItem('nbe_dismissed_' + nbeId)) {
        console.log('NBE: Offer already dismissed by user.');
        return;
    }

    // 2. Trigger the Pop-up
    setTimeout(function() {
        showNBE();
    }, NBE_DELAY);

    function showNBE() {
        nbeOverlay.fadeIn(400);
        console.log('NBE: Impression tracked for ' + nbeId);
        
        // Push event to DataLayer (Adobe Analytics/GTM)
        // window.adobeDataLayer = window.adobeDataLayer || [];
        // window.adobeDataLayer.push({ "event": "nbe-impression", "nbe-id": nbeId });
    }

    // 3. Handle Close/Dismissal
    $('.nbe-close, .nbe-dismiss').on('click', function() {
        hideNBE();
        // Persist dismissal to avoid annoying the customer
        localStorage.setItem('nbe_dismissed_' + nbeId, 'true');
        console.log('NBE: Dismissal tracked for ' + nbeId);
    });

    function hideNBE() {
        nbeOverlay.fadeOut(300);
    }

    // 4. Handle CTA Action
    $('#nbe-cta').on('click', function() {
        console.log('NBE: CTA clicked for ' + nbeId);
        // Track conversion and redirect
        // window.location.href = "/credit-cards/visa-light";
        alert('Navigating to Visa Light application page...');
        hideNBE();
    });

    // 5. Close on background click (Optional/User Experience)
    nbeOverlay.on('click', function(e) {
        if ($(e.target).is('.nbe-overlay')) {
            hideNBE();
        }
    });

    // Prevent modal clicks from closing the overlay
    $('.nbe-modal').on('click', function(e) {
        e.stopPropagation();
    });
});
