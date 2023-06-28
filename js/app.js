


  $(document).ready(function() {
    
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
        }).done(function() {
          $(this).find("input").val("");
          $(this).find("textarea").val("");
            
          $('form').trigger('reset');
        });
        
        return false;
    });
});

// Get a reference to the form element
var form = document.getElementById("myForm");

// Add a submit event listener to the form
form.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Display success alert message
  alert("Form submitted successfully!");
});


