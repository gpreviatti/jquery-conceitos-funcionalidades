$(function () {
    // Adicionando classe que possui estilo css    
    $('button').addClass('estilo')

    // Removendo classe que possui estilo css    
    $('button').removeClass('estilo')

    // Validando se elemento possui class
    if ($('button').hasClass('estilo')) {
        console.log("Tem Sim")
    } else {
        console.log("Tem ñ")
    }

    // Altera css de um elemento com jquery
    $('h1').css('color', 'blue').css('font-size', '50px')
    // ***** Caso tenha muitos estilos é mais facil adicionar
    // diretamente uma classe ******

    // Salvando dados na memoria do so com jquery
    $('h1').data('idade',90)

});