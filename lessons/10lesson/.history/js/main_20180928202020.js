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
                success: function(data){
                    alert(data);},
                failure: function(e) {
                    $('.form-eror').text(e.errorMsg)
                }
            });

            $.ajax({
                type: 'get',
                data: '../index.html'
                dataType: 'html',
                success : function(html) {
                   console.log(html)
                },
                error: function() {
                    alert("Error");
                }
            });
        } else {
            $(form).validate();
        }
        
    })

})(jQuery);