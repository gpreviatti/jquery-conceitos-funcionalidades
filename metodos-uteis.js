$(function () {
    // Cortar espaços em branco com jquery
    $('h2').html().trim()

    // Tipo de variavel
    var idade = 7
    $.type(idade)

    // Compara se um valor é de um tipo
    if ($.isNumeric(idade)) {
        console.log('é numerico')
    } else {
        console.log('não é numerico')
    }

    // Verificando se elementos existem
    if ($('li').length > 0) {
        console.log('Existe')
    } else {
        console.log('Não existe')
    }

    // Verificando se classe existe
    if ($('li').hasClass('liClass')) {
        console.log('tem a classe')
    } else {
        console.log('nao tem a classe')
    }

    // Ativando/Desativando elemento de um formulario pode ser utilizado da mesma forma
    // com check box com .attr('checked', 'checked')
    // DESATIVANDO
    $('#input').attr('disable', 'disabled')
    // ATIVANDO
    $('#input').removeAttr('disable')

    // Pegando o item selecionado de um sleect
    console.log($('#idade').val())

    // loop para cada elemento de uma lista
    $('li').each(function () { 
        alert($(this).html())
    })
});