/* 
when the start button is clicked and all  boxes are ticked,
it saves consent in sessionStorage. 
The form itself moves to the next page (see index.html),
and the "required" attribute on the checkboxes stops that if any box is unticked.

The button's click handler still runs even when the browser blocks the form,
which is why the code checks the boxes itself before saving consent.
*/


$(document).ready(function ()

{

    $('#startBtn').click(function ()

    {

        if ($('#consent1').is(':checked'))

        {

            sessionStorage.setItem('consent', 'yes');

        }

    });

});


   /*
   old script.js (the toggleButton and fetchTitle click handlers, and the .is(':visible') check).
   
   jQuery docs, ":checked Selector": api.jquery.com/checked-selector
   (the .is(':checked') pairing is also shown on sentry.io, "How do I check whether a checkbox is checked in jQuery?")
   
   W3Schools, "JavaScript Web Storage API": w3schools.com/js/js_api_web_storage.asp  (sessionStorage.setItem) 
   */
