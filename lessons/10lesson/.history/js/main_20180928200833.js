'use strict';

(function($) {
    $('img[data-src]').each(function() {
        var $this = $(this);
        var newSrc = $this.attr('data-src');
        $this.attr('src', newSrc).addClass('fade-up');
    });


    $('.timer-up').each(function() {
        var $this = $(this);
        var countTo = $this.attr('data-count-to');
        
        $this.prop('CountTo', $this.text()).animate({
            CountTo: countTo
        },
        {
            duration: 3000,
            easing: 'linear',
            step: function(now) {
                $this.text(Math.ceil(now));
            }
        });

    });

    $.validator.setDefaults({
        errorPlacement: function(error, element) {
            error.appendTo('.form-eror');
        }
    });

    $('.submit-button').click(function(e){
        e.preventDefault();

        var form = $(this).closest('form');
        
        if ($(form).valid()) {
            var str = $(form).serialize();
            console.log(str);

            $.ajax({
                type: "POST",
                url: "../json/cooments.json",
                data: str,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(data){alert(data);},
                failure: function(errMsg) {
                    alert(errMsg);
                }
            });
        } else {
            $(form).validate();
        }
        
    })

})(jQuery);