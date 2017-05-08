// SETUP VARIABLES
// ==========================================================
// var topics = ["Michael Jordan", "Magic Johnson", "Larry Bird", "Karl Malone"];
var city= "";
var state = "";

// FUNCTIONS
// ==========================================================
// Function for displaying basketball players
      function renderButtons() {

        // Delete the content inside the topics-view div prior to adding new topics
        // (this is necessary otherwise you will have repeat buttons)
        $('#topics-view').empty();
        // Loop through the array of topics, then generate buttons for each topic in the array
        for (var i=0;i<topics.length; i++){
          var a= $("<button>");
          a.addClass("topic");
          a.attr("data-name", topics[i]);
          
          // console.log(a.attr("data-state"));
          a.text(topics[i]);
          $("#topics-view").append(a);
          
        }

      }

    

     $("#add-topic").on("click",function() {
      var zipcode = $("#topic-input").val().trim();
    var clientKey = "tge6cj9kpq8yg9eu";      
var queryURL = "https://www.zipwise.com/webservices/zipinfo.php?key="+clientKey+"&zip=" + zipcode + "&format=json";
      var CLIENT_ID="xm8heD7R05xs6YXRbzZTy";
          var CLIENT_SECRET="pWPUgTjlf4eVCWBg5tCr7fYyOaWmJnfDdDcYU5wv"
          
  

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          console.log(response);
          var results = response.results;
          console.log(results.cities[0].city);
          console.log(results.state);
          city = results.cities[0].city;
state = results.state;
$('#city').html("your city is: " + city);
$('#state').html("your State is: " + state);

});



      






});
  
  //<![CDATA[
  // $(function() {
  //   // IMPORTANT: Fill in your client key
  //   var clientKey = "js-tfLAhKUttAoJm4Krq3C7GilCOti2cInFY8gfTbJmL758bPzCTcKzu6ciAulMdIsb";
    
  //   var cache = {};
  //   var container = $("#example1");
  //   var errorDiv = container.find("div.text-error");
    
  //   /** Handle successful response */
  //   function handleResp(data)
  //   {
  //     // Check for error
  //     if (data.error_msg)
  //       errorDiv.text(data.error_msg);
  //     else if ("city" in data)
  //     {
  //       // Set city and state
  //       container.find("input[name='city']").val(data.city);
  //       container.find("input[name='state']").val(data.state);
  //     }
  //   }
    
  //   // Set up event handlers
  //   container.find("input[name='zipcode']").on("keyup change", function() {
  //     // Get zip code
  //     var zipcode = $(this).val().substring(0, 5);
  //     if (zipcode.length == 5 && /^[0-9]+$/.test(zipcode))
  //     {
  //       // Clear error
  //       errorDiv.empty();
        
  //       // Check cache
  //       if (zipcode in cache)
  //       {
  //         handleResp(cache[zipcode]);
  //       }
  //       else
  //       {
  //         // Build url
  //         var url = "https://www.zipcodeapi.com/rest/"+clientKey+"/info.json/" + zipcode + "/radians";
          
  //         // Make AJAX request
  //         $.ajax({
  //           "url": url,
  //           "dataType": "json"
  //         }).done(function(data) {
  //           handleResp(data);
  //           console.log(data);
  //           // Store in cache
  //           cache[zipcode] = data;
  //         }).fail(function(data) {
  //           if (data.responseText && (json = $.parseJSON(data.responseText)))
  //           {
  //             // Store in cache
  //             cache[zipcode] = json;
              
  //             // Check for error
  //             if (json.error_msg)
  //               errorDiv.text(json.error_msg);
  //           }
  //           else
  //             errorDiv.text('Request failed.');
  //         });
  //       }
  //     }
  //   }).trigger("change");
  // });
//]]>

        jQuery(document).ready(function($) {
          var CLIENT_ID="xm8heD7R05xs6YXRbzZTy";
          var CLIENT_SECRET="pWPUgTjlf4eVCWBg5tCr7fYyOaWmJnfDdDcYU5wv"
           var city = "cypress";
           var state= "ca";
      $.ajax({
         url: "https://api.aerisapi.com/observations/"+ city + "," + state + "?client_id="+ CLIENT_ID + "&client_secret=" + CLIENT_SECRET,
         dataType: "jsonp",
         success: function(json) {
            if (json.success == true) {
               var ob = json.response.ob;
               $('#js').html('The current weather in ' + city +' is ' + ob.weather.toLowerCase() + ' with a temperature of ' + ob.tempF + '°');
            }
            else {
               alert('An error occurred: ' + json.error.description);
            }
         }
      });
   });



         // $(document).on("click", ".giphy", function() {
          $(".giphy").on("click",function(){
            var state = $(this).attr("data-state");
          
if (state === 'still'){
        $(this).attr("src", $(this).attr("data-animate")); 
        $(this).attr("data-state","animate");
      }else{
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
});
        
        // $(document).on("click", ".new", function() {
  
      
 // });

    // });


// METHODS
// ==========================================================
 // This function handles events where the add topic button is clicked
      $("#add-topic").on("click", function(event) {
        // event.preventDefault() prevents submit button from trying to send a form.
        // Using a submit button instead of a regular button allows the user to hit
        // "Enter" instead of clicking the button if desired
        event.preventDefault();

        // Write code to grab the text the user types into the input field
        // Write code to add the new topic into the topics array
        var topic = $("#topic-input").val().trim();
        // The renderButtons function is called, rendering the list of topic buttons
        topics.push(topic);
        $("#topic-input").val("");
        renderButtons();
      });
      renderButtons();
