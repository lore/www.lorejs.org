// back to top button - docs
$(function () {

  // Header signup form
  $('.signup-form-header form.form-inline').submit(function(e) {
    e.preventDefault();

    var $input = $('.signup-form-header .form-inline input');
    var $form = $('.signup-form-header .form-inline');
    var $thankYouMessage = $('.signup-form-header .thank-you-message');

    var email = $input.val();

    // todo: verify email address

    $.ajax({
      type: "POST",
      url: 'https://hooks.zapier.com/hooks/catch/1353534/ukg3d3/',
      json: true,
      data: {
        email: email
      },
      success: function() {
        $form.css('display', 'none');
        $thankYouMessage.css('display', 'block');
      }
    });
  });

  // Ribbon signup form
  $('.signup-form-ribbon form.form-inline').submit(function(e) {
    e.preventDefault();

    var $input = $('.signup-form-ribbon .form-inline input');
    var $form = $('.signup-form-ribbon .form-inline');
    var $thankYouMessage = $('.signup-form-ribbon .thank-you-message');

    var email = $input.val();

    // todo: verify email address

    $.ajax({
      type: "POST",
      url: 'https://hooks.zapier.com/hooks/catch/1353534/ukg3d3/',
      json: true,
      data: {
        email: email
      },
      success: function() {
        $form.css('display', 'none');
        $thankYouMessage.css('display', 'block');
      }
    });
  });
});
