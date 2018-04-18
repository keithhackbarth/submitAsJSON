# submitAsJSON
Submits a HTML form as JSON

Created by Keith Hackbarth 2018
Based off idea by David Tomaschik
https://systemoverlord.com/2016/08/24/posting-json-with-an-html-form.html

Example usage:
```javascript
  $("form").submit(function(event) {
      event.preventDefault();
      submitAsJSON(this);
  });
```

Output is is the same action as the original form but with JSON data instead of form-urlencoded.

*Worth noting that hack that enables this to function adds a dummy key value pair to JSON called trash*
