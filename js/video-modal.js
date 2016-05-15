$(function () {

  // BOOTSTRAP 3.0 - Open YouTube Video Dynamicaly in Modal Window
  // Modal Window for dynamically opening videos
  $('a[href^="http://www.youtube.com"]').on('click', function(e){
    e.preventDefault();

    console.log("clicked video");

    // var videoId = $(e.target).data().v;
    var videoId = $(e.currentTarget).data().v;

    var vidWidth = 560; // default
    var vidHeight = 315; // default

    var iFrameCode = '<iframe class="embed-responsive-item" scrolling="no" allowtransparency="true" allowfullscreen="true" src="http://www.youtube.com/embed/'+  videoId +'?rel=0&wmode=transparent&showinfo=0&autoplay=1" frameborder="0"></iframe>';

    $('#myModal .modal-body .embed-responsive-16by9').html(iFrameCode);

    // $('#myModal').on('shown.bs.modal', function () {
    //   $('.modal-dialog').css({
    //     'padding-top': function() {
    //       var windowHeight = $(window).height();
    //       var modalHeight = $('.modal-dialog').height();
    //       return (windowHeight - modalHeight)/2 - 15;
    //     },
    //     // 'visibility': 'visible'
    //     opacity: 1,
    //     transition: 'opacity .15s linear'
    //   });
    //
    //   $('.modal.fade .modal-dialog').css({
    //     // '-webkit-transform': 'translate3d(0, 200px, 0)',
    //     'transform': 'translate3d(0, 0, 0)'
    //   });
    // });

    // Open Modal
    $('#myModal').modal();



    // // Store the query string variables and values
    // // Uses "jQuery Query Parser" plugin, to allow for various URL formats (could have extra parameters)
    // var queryString = $(this).attr('href').slice( $(this).attr('href').indexOf('?') + 1);
    // var queryVars = $.parseQuery( queryString );
    //
    // // if GET variable "v" exists. This is the Youtube Video ID
    // if ('v' in queryVars) {
    //   // Prevent opening of external page
    //   e.preventDefault();
    //
    //   // Variables for iFrame code. Width and height from data attributes, else use default.
    //   var vidWidth = 560; // default
    //   var vidHeight = 315; // default
    //   if ( $(this).attr('data-width') ) { vidWidth = parseInt($(this).attr('data-width')); }
    //   if ( $(this).attr('data-height') ) { vidHeight =  parseInt($(this).attr('data-height')); }
    //   var iFrameCode = '<iframe width="' + vidWidth + '" height="'+ vidHeight +'" scrolling="no" allowtransparency="true" allowfullscreen="true" src="http://www.youtube.com/embed/'+  queryVars['v'] +'?rel=0&wmode=transparent&showinfo=0" frameborder="0"></iframe>';
    //
    //   // Replace Modal HTML with iFrame Embed
    //   $('#mediaModal .modal-body').html(iFrameCode);
    //
    //   // Set new width of modal window, based on dynamic video content
    //   $('#mediaModal').on('show.bs.modal', function () {
    //     // Add video width to left and right padding, to get new width of modal window
    //     var modalBody = $(this).find('.modal-body');
    //     var modalDialog = $(this).find('.modal-dialog');
    //     var newModalWidth = vidWidth + parseInt(modalBody.css("padding-left")) + parseInt(modalBody.css("padding-right"));
    //     newModalWidth += parseInt(modalDialog.css("padding-left")) + parseInt(modalDialog.css("padding-right"));
    //     newModalWidth += 'px';
    //     // Set width of modal (Bootstrap 3.0)
    //     $(this).find('.modal-dialog').css('width', newModalWidth);
    //   });
    //
    //   // Open Modal
    //   $('#mediaModal').modal();
    // }
  });

  // Clear modal contents on close.
  // There was mention of videos that kept playing in the background.
  $('#myModal').on('hidden.bs.modal', function () {
    $('#myModal .modal-body .embed-responsive-16by9').html('');

    // $('.modal-dialog').css({
    //   opacity: 0
    // });
  });

});
