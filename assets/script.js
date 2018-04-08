
window.onload = function() {
   
  
  $('.grid').packery({
    // options
    itemSelector: '.grid-item',
    gutter: 10
  });

  
};


var x = $(this).val("nc");
 var queryURL = "https://developer.nps.gov/api/v1/parks?=stateCode=" + x + "&api_key=7wQNlZMqMhlH0js2AdSZsiMoge4n3Z0ud2rZVlfW"
$.ajax({
            url: queryURL,
            method: "GET"
          
          }).done(function(response) {
            var results = response.data;
            console.log(results);
            $("#resultsField").empty();
            for (var i = 0; i < results.length; i++) {
            var displayDiv = $("<div class='col-md-4'>"); }
          });