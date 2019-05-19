$(function () {
    // requisições auxiliares ajax
    $('#acao').on('click', function () {
        // para $.post da mesma maneira
        $.get('pagina-teste-ajax.html', function(data) {
            $('.div').html(data)
        })
    });

    // serializa informações de um formulario
    $('.formulario-serializacao').submit(function (e) { 
        e.preventDefault()
        // Pega todos os campos do form e serealiza
        var data = $(this).serialize()
        console.log(data)
    });

    // Ajax indo para um endpoint simples
    $('#formSoma').submit(function (e) { 
        e.preventDefault()
        var txt = $(this).serialize()
        console.log(txt)
        $.ajax({
            type: "get",
            url: "ajax.php",
            data: txt,
            dataType: "text",
            success: function (response) {
                $('#resultado').remove();
                $('#formSoma').after('<p id="resultado"> Resultado: ' + response + '</p>');
            }
        });
    });

    // Ajax indo para um endpoint como jason
    $('#formJson').submit(function (e) { 
        e.preventDefault()
        $.ajax({
            type: "get",
            url: "ajaxJson.php",
            data: $('#formJson').serialize(),
            dataType: "json",
            success: function (response) {
                $('#pwd').remove();
                $('#name').remove();
                $('#formJson').after('<p id="name"> Nome: ' + response.name + '</p>');
                $('#formJson').after('<p id="pwd"> Senha: ' + response.pwd + '</p>');
            }
        });
    });
});