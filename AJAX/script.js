$(document).ready(() => {
    $('#carregar').on('click', () => {
        $('#resultado').text('Carregando...');

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos/1',
            method: 'GET',
            dataType: 'json',
            success: (data) => {
                $('#resultado').html('Tarefa carregada com sucesso!');
            },
            error: () => {
                $('#resultado').text('Erro ao carregar a tarefa!');
            }
        });
    });
});