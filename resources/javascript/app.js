// SETUP VARIABLES
// ==========================================================
var topics = ["Michael Jordan", "Magic Johnson", "Larry Bird", "Karl Malone"];


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

    

      $("#add-topic").on("click", function() {
         event.preventDefault();
       var zipCode = $("#topic-input").val().trim();
var queryURL = "https://www.zipcodeapi.com/rest/NMVpX2SUKH6rMgaYB2I5ch1beYZKg0q3NmtKpmE93LAP1LNCOvI0NKb2JbMZbd3Y/info.json/" + zipCode + "/degrees"
    
       

      
    
      

      
  

      $.ajax({
          url: queryURL,
          method: "GET"

        })
        .done(function(response) {
          console.log(response);
          var results = response.data;
     
        });
        });
  
  

        jQuery(document).ready(function($) {
          var CLIENT_ID="xm8heD7R05xs6YXRbzZTy";
          var CLIENT_SECRET="pWPUgTjlf4eVCWBg5tCr7fYyOaWmJnfDdDcYU5wv"
          city = "cypress";
          state= "ca";
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
