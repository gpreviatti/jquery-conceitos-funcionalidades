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
    $('li').html('<button>Meu Botão</button>')

    // Adicionar somente texto sem html
    $('.url').text("Link de url")

    // Pegando o valor
    console.log($('li').html())

    // Adicionando um classe em um elemento 
    $('li').addClass('estilo')

    //Alterando e adicionar valores em inputs com a propriedade val
    $('#nome').val("Giovanni")
    console.log($('#nome').val())

    // Inserir atributo antes/após um elemento
    $('input').before('<p>Before</p>')
    $('li').prepend('<li>Before</li>')
    
    $('input').after('<p>After</p>')
    $('li').append('<li>Mais um botão</li>');

    // Remove um elemento
    $('li').remove()

    // Transaformando um elemento em jquery
    var div = document.getElementById('div');
    // Dessa forma as propriedades do jquery não funcionariam
    // pois essa é a sintaxe direta do javascript, para isso
    // você deve utilizar a sintaxe a seguir
    $('div')

    // Pegando um elemento pelo index 
    // * começa sempre do zero
    $('li').eq(1)

    
});