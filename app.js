$(document).ready(function() {
    // Listen for form submission
    $("#movie-rating").on("submit", (event) => {
      // Prevent default form behavior
      event.preventDefault();
  
      // Get the values of the title and rating inputs
      let title = $("#title").val();
      let rating = $("#rating").val();
  
      // Append the title and rating to the results div
      $("#results").append(`<p>${title} - ${rating}</p>`);
      // Add a remove button to the new result
      $("#results").append(`<button class="remove-result">Remove</button>`);

      //reset the input fields to blank
      $('#title').val('');
      $('#rating').val('');
    });
  
    // Listen for clicks on remove buttons
    $(document).on("click", ".remove-result", (event) => {
      // Remove the associated title and rating
      $(event.target).prev().remove(); // remove the <p> element
      $(event.target).remove(); // remove the remove button
    });
  });
  