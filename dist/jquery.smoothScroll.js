(function ($) {
// smoothScroll - works in conjunction with bootstrap scrollspy
    $.fn.smoothScroll = function (options) {
        var settings = $.extend({
            duration: 800, addHash: false
        }, options);
        return this.each(function () {
            var target = $(this).data('target');
            var $this = $(this);
            $(target).on('click', 'a', function () {
                if (this.hash !== "") {
                    event.preventDefault();
                    var hash = this.hash, newScroll = $(hash).offset().top;
                    if($this.is('body')) {
                        $this = $('body, html');
                        
                    }  else {
                        newScroll = $this.scrollTop() + $(hash).position().top;
                    }
                    // Using jQuery's animate() method to add smooth page scroll
                    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                    $this.animate({
                        scrollTop: newScroll
                    }, settings.duration, function () {
                        if (settings.addHash) { window.location.hash = hash; }
                    });
                } // End if
            });
        });
    };
}(jQuery));