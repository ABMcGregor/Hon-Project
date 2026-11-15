/* Consent page script.
   Coding style (var, getElementById, braces on their own lines, the "if (element)" check)
   is from your old script.js [A]. Source key at the bottom of this file.
   No jQuery is used, because the new page doesn't load it. */


// Find the elements on the page (getElementById pattern: your loadDoc function [A]).
var consent1 = document.getElementById("consent1");
var consent2 = document.getElementById("consent2");
var consent3 = document.getElementById("consent3");
var startBtn = document.getElementById("startBtn");
var consentForm = document.getElementById("consentForm");


// True only if all three boxes are ticked (the "checked" property: W3Schools Input Checkbox object [B]).
function allTicked()
{
    return consent1.checked && consent2.checked && consent3.checked;
}


// Enable the start button only when all boxes are ticked (button "disabled" property: W3Schools [C]).
function updateButton()
{
    if (allTicked())
    {
        startBtn.disabled = false;
    }

    else
    {
        startBtn.disabled = true;
    }
}


// Only run this on a page that has the consent form
// (same idea as the "if (scrollingNameElement)" check in your startScrolling function [A]).
if (consentForm)
{
    // Re-check the button whenever a box is ticked or unticked (addEventListener: W3Schools EventListener [D]).
    consent1.addEventListener("change", updateButton);
    consent2.addEventListener("change", updateButton);
    consent3.addEventListener("change", updateButton);

    // Set the button's state when the page loads, in case the browser kept boxes ticked after a refresh.
    updateButton();


    // When the form is submitted: stop the normal submit (preventDefault: W3Schools [E]),
    // save consent for this browser tab (sessionStorage: W3Schools Web Storage [F]),
    // then go to the next page (location.href redirect: W3Schools Redirect Webpage [G]).
    consentForm.addEventListener("submit", function (event)
    {
        event.preventDefault();

        if (allTicked())
        {
            sessionStorage.setItem("consent", "yes");

            window.location.href = "scenario.html";
        }
    });
}


/* SOURCE KEY
   [A] Your old script.js (loadDoc, startScrolling).
   [B] W3Schools, "Input Checkbox object": w3schools.com/jsref/dom_obj_checkbox.asp
   [C] W3Schools, "Button disabled property": w3schools.com/jsref/prop_pushbutton_disabled.asp
   [D] W3Schools, "JavaScript HTML DOM EventListener": w3schools.com/js/js_htmldom_eventlistener.asp
   [E] W3Schools, "preventDefault() Event Method": w3schools.com/jsref/event_preventdefault.asp
   [F] W3Schools, "JavaScript Web Storage API": w3schools.com/js/js_api_web_storage.asp
   [G] W3Schools, "How TO - Redirect to Another Webpage": w3schools.com/howto/howto_js_redirect_webpage.asp */
