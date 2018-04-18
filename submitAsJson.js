/* Submit HTML form as function
    Created by Keith Hackbarth 2018
    Based off idea by David Tomaschik
    https://systemoverlord.com/2016/08/24/posting-json-with-an-html-form.html

    Example usage:
    $("form").submit(function(event) {
        event.preventDefault();
        submitAsJSON(this);
    });
*/


/* Function takes a jquery form
and converts it to a JSON dictionary */
function convertFormToJSON(form){
    var array = $(form).serializeArray();
    var json = {};

    $.each(array, function() {
        json[this.name] = this.value || '';
    });

    return json;
}

/* Adds a new form to the body of a page with the JSON data encoded into it */
function submitAsJSON(form) {
    var JSONString = JSON.stringify(convertFormToJSON(form)),
        HackyJSONString =  JSONString.slice(0, -1) + ', "trash": "';

    var hackyForm = "<form method='POST'  enctype='text/plain' action='" + $(form).attr('action') + "'>" +
        "<input name='" + HackyJSONString + "' value='\"}'>" +
    "</form>"
    $(hackyForm).appendTo('body').submit();
}
