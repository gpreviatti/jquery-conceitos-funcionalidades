$(document).ready(function () {

    // Evento de click
    $('#btn').click(function () { 
        if ($(this).hasClass('azul')) {
            $(this).removeClass('azul')
        } else {
            $('#btn').addClass('azul')
        }
        
    });

    // Toogle, alternancia de uma classe 
    // (tira e coloca)
    $('#btnToggle').click(function (e) { 
        $('#btnToggle').toggleClass('azul');
    });

    // Mouse over *passar o mouse
    $('#btnOver').mouseover(function () { 
        $(this).addClass('azul')
        $('#mouse').remove();
        $(this).after('<p id="mouse">Mouse over</p>');
    });

    // Mouse out *tirar o mouse
    $('#btnOver').mouseout(function () { 
        $(this).removeClass('azul')
        $('#mouse').remove();
        $(this).after('<p id="mouse">Mouse out</p>');
    });

    // Hover, mouse over e out compactado
    $('#hoverId').hover(function () {
            // over
            $(this).addClass('azul')
            $('#mouse').remove();
            $(this).after('<p id="mouse">Mouse over</p>');
            
        }, function () {
            // out
            $(this).removeClass('azul')
            $('#mouse').remove();
            $(this).after('<p id="mouse">Mouse out</p>');
        }
    );

    // evento de bind é igual ao click ou on
    $('#bindId').bind('click', function () {
        console.log('clicou')
    });

    $('#bindId').on('click', function () {
        console.log('clicou')
    });

    //Removendo evento de um elemento
    //$('#bindId').unbind('click');
    // ou
    //$('#bindId').off('click');

    // Acionando eventos a partir do jq
    // Poderia selecionar todos os checkbox
    // de uma lista por exemplo
    $('#bindId').trigger('click');

    // Função de scroll do brower
    $('div').bind('scroll', function () {
        console.log("scroll")
        $(this).css('background-color', 'black')
    });
    
    $('#form').bind('submit', function (e) {
        // evita que o formulario seja submetido
        e.preventDefault()
        console.log('Formulario enviado')
    });

    // quando o componente é focado
    $('#email, #name').focus(function (e) { 
        e.preventDefault();
        $(this).css('background-color', 'gray')
    });

    // Quando o componenete é desfocado
    $('#email, #name').blur(function (e) { 
        e.preventDefault();
        $(this).css('background-color', 'white')
    });

    // evento de mudança da caixa de seleção
    $('#idade').change(function (e) { 
        e.preventDefault();
        $('#item').remove();
        $('#idade').after('<p id="item"> item: '+ $(this).val() + '</p>');
    });

    // Pegando o numero que representa o valor da tecla 
    $('#nameKey').keyup(function (e) { 
        $('#key').remove();
        $('#nameKey').after('<p id="key"> tecla: '+ e.keyCode + '</p>');
    });

    // Efeito gerado quando o mouse é apertado na regiao
    // do componente, mouse up é o efeito quando o mouse 
    // o click do mouse é desfeito
    $('#btnMouse').mousedown(function () { 
        $('#msg').remove();
        $(this).after('<p id="msg"> Mouse apertado</p>');
    });

    // Evento gerado quand o mouse é movido dentro do componente
    $('#btnMouse').mousemove(function (e) { 
        console.log('Moveu o mouse')
    });

    // Evento de dois clicks
    $('#btnMouse').on('dblclick', function () {
        $('#msg').remove();
        $(this).after('<p id="msg"> Deu dois clicks</p>');
    });
    
});