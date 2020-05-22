$(document).ready(function () {
  $("contact").validate({
    debug: true,
    errorClass: "alert alert-danger",
    errorLabelContainer: "#output-area",
    errorElement: "div",
    // rules here define what is good or bad input
    // Each rule starts with the form input element's NAME attribute
    rules: {
      name: {
        required: true
      },
      email: {
        email: true,
        required: true
      },
      message: {
        required: true,
        maxLength: 2000
      }
    },
    // error message to the end user when rules above don't pass
    messages: {
      name: {
        required: "Please enter your name."
      },
      email: {
        required: "Please enter your email.",
        email: "Ivalid Email"
      },
      message: {
        required: "Please enter a message.",
        maxLength: "Message is too long"
      }
    },
    submitHandler: function (form) {
      $("#contact").ajaxSubmit({
        type: "POST",
        url: $("#contact").attr("action"),
        success: function (ajaxOutput) {
          $("#output-area").css("display", "")
          $("#output-area").html(ajaxOutput)

          // reset the form if it was successful
          if($(".alert-success").length >= 1)
            $("#contact")[0].reset();
        }
      })
    }
  })
})