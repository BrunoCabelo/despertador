var hora, minuto, segundo, time, dia, hora_atual, verificador, iniciado, weekDay;
var audio = document.querySelector('audio');

function add_zero_left(n) {
    if (n < 10) {
        return "0" + n.toString();
    } else {
        return n.toString();
    }
}
iniciado = false
verificador = false

$('#enviar').click(function() {
    if (verificador == false) {
        var hora_alarme = $('#hora_alarme').val();
        if (hora_alarme != "") {
            verificador = true;
            $('#enviar').html('Desativar alarme');
        } else {
            if (iniciado == true) {
                $('#enviar').html('Desligar alarme');
                audio.pause();
                verificador = false;
            } else {
                $('#enviar').html('Definir alarme');
                verificador = false;
            }
        }
    }
});

/* document.getElementById('enviar').onclick = function() {
    if (verificador == false) {
        var hora_alarme = document.getElementById('hora_alarme').value;
        if (hora_alarme != "") {
            verificador = true;
            document.getElementById('enviar').innerHTML = "Desativar alarme";
        }
    } else {
        if (iniciado == true) {
            document.getElementById('enviar').innerHTML = "Desligar alarme";
            audio.pause();
            verificador = false;
        } else {
            document.getElementById('enviar').innerHTML = "Definir alarme";
            verificador = false;
        }
    }

} */

window.setInterval(function() {
    time = new Date();
    hora = time.getHours();
    minuto = time.getMinutes();
    segundo = time.getSeconds();
    dia = time.getDay();

    hora_atual = add_zero_left(hora) + ":" + add_zero_left(minuto);

    document.getElementById('HTML').innerHTML = add_zero_left(hora) + ":" + add_zero_left(minuto) + ":" + add_zero_left(segundo);

    weekDay = document.getElementById('day').innerHTML;
    switch (dia) {
        case 0:
            weekDay = "Domingo";
            break;
        case 1:
            weekDay = "Segunda-feira";
            break;
        case 2:
            weekDay = "Terça-feira";
            break;
        case 3:
            weekDay = "Quarta-feira";
            break;
        case 4:
            weekDay = "Quinta-feira";
            break;
        case 5:
            weekDay = "Sexta-feira";
            break;
        case 6:
            weekDay = "Sabado";
            break;
        default:
            weekDay = "Dia desconhecido";
    }

    if (verificador == true) {

        if (hora_atual === hora_alarme.value) {
            audio.play();
            document.getElementById('enviar').innerHTML = "Desligar alarme";
            iniciado = true;
        }
    }


}, 1000)




/* document.getElementById('play').onclick = function() {
    var audio = document.querySelector('audio');
    audio.play();
} */