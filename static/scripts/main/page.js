(function() {
    var $ = window.$;
    var TweenLite = window.TweenLite;

    var startAnimation = function() {
        window.animation.init();

    };
    $('#cssload-pgloading').hide();
    if (window.objects.ready) {
        startAnimation();
    } else {
        $(window).on('objects.loaded', startAnimation);
    }

    $(window).on('animation.started', function() {
        //to scroll to full screen
        $('html, body').animate({
            scrollTop: $('#stage').offset().top
        }, 500);
    });

    var $container = $('div.container'),
        $triggerBttn = $('#trigger-overlay'),
        $overlay = $('div.overlay'),
        $closeBttn = $('.overlay button.overlay-close');

    function toggleOverlay() {
        if ($overlay.hasClass('open')) {
            $overlay.removeClass('open');
            $container.removeClass('overlay-open');
        } else {
            $overlay.addClass('open');
            $container.addClass('overlay-open');
        }
    }

    $triggerBttn.on('click', toggleOverlay);
    $closeBttn.on('click', toggleOverlay);

    // contact form
    $('.story-form').submit(function(ev) {
        ev.preventDefault();

        var $form = $(this);

        $.ajax({
            type: "post",
            url: "http://blog.aiesec.org.eg/contact/",
            // url: "http://localhost:8000/contact/",
            data: $(this).serialize(),
            success: function(response, status){
                console.log(response)
                swal({title:response['text'], type:response['type'], text:"You can always can contact us on <a href='mailto:egypt@aiesec.net'>egypt@aiesec.net</a>", html:true});
            }
        })
    });

})();
