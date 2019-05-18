// Esse método faz com que as funções do jquery
// seja carregadas apenas quando o documento 
// tiver completamente carregado
$(document).ready(function () {
    console.log("ok")
});

// Versão short do document ready
$(function () {
    
});

// Pode ser utilizado com funções também
function tudoPronto() { 
    var test = "Hello World"
    console.log(test)
}
$(tudoPronto);

// ready short
$(function () {
    
    // Capturar elemento pelo id
    $('#id')

    // Capturar elemento pela classe
    $('.nome_classe')

    // Captura elemento que esteja dentro de uma classe
    $('.classe-pai li.botao')
    // ou
    $('.classe-pai > li.botao')

    // Verificando se um elemento existe
    // Tem que ser comparado dessa forma pois o jquery
    // Sempre retorna um array, idenpendente da consulta
    if ($('.botao').length > 0) {
        console.log('existe')
    }

    // Passando consultas para variaveis
    var item = $('.botao')
    console.log(item)

    // Alterando o valor de um atributo 
    $('.url').attr('href', 'https://www.google.com')

    // Pegando o valor do atributo
    console.log($('.url').attr('href'))

    // Alterando o valor que está dentro de uma tag html 
    // <p> Texto dentro da tag </p>
    $('li').html('<button>Meu Botão</button>');

    // Pegando o valor
    console.log($('li').html());

    // Adicionando um classe em um elemento 
    $('li').addClass('estilo')


});