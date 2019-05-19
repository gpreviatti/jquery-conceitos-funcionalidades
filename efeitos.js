$(function () {

    // Toggle (Aparecer e desaparecer ao clicar)
    $('#btnToggle').on('click', function () {
        $('.div').toggle('slow')    
    });
    
    // FADE (ANIMAÇÂO DE DESAPARECER/APARECER)
    // FadeTo você pode definir o nivel 
    // de opacidade do elemento setado
    $('#btnFade').on('click', function () {
        $('.div').fadeToggle('slow');
    });

    //EFEITOS DE SLIDE DOWN/UP
    $('#btnSlideUp').on('click', function () {
        $('.div').slideUp();
    });

    $('#btnSlideDown').on('click', function () {
        $('.div').slideDown();
    });

    $('#btnSlideToggle').on('click', function () {
        $('.div').slideToggle('slow');
    });

    // ANIMATE
    // Atribui esses componentes do css ao clicar no botão
    // em um valocidade de 1000ms definida pelo segundo 
    // parametro do método
    $('#btnAnimate').on('click', function () {
        $('.div').animate({
            'margin-left':200,
            'margin-top':200,
            'width': 300,
            'border-radius': 360
        }, 1000)
    });

    // Para a animação em andamento do elemento
    $('#btnStopAnimate').on('click', function () {
        $('.div').animate().stop()
    });

    // Soma a animação toda vez que for apertada
    $('#btnSumAnimate').click('click', function () {
        $('.div').animate({
            'margin-left':"+=60",
        }, 500)
    });

    // Controla a posição pelas teclas do teclado
    $('body').keyup(function (e) { 
        // Left
        if (e.keyCode == 39) {
            $('.div').animate({
                'margin-left':"+=60",
            }, 10)
        }
        // Right
        if (e.keyCode == 37) {
            $('.div').animate({
                'margin-left':"-=60",
            }, 10)
        }
        // Up
        if (e.keyCode == 38) {
            $('.div').animate({
                'margin-top':"-=60",
            }, 10)
        }
        // Down
        if (e.keyCode == 40) {
            $('.div').animate({
                'margin-top':"+=60",
            }, 10)
        }

    });
    
    
    
});