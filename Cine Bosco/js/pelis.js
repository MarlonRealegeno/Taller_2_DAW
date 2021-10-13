var nombres = {"movies":[
    {
        "imagen":"img/peli1.jpg",
        "nombre":"Resident Evil-",
        "duracion":"180 min",
        "clasificacion":"Accion, Terror",
        "butaca":"Plastico",
        "horario":"10:00 - 13:00 - 14:00"
    },
    {
        "imagen":"img/peli2.jpg",
        "nombre":"Venom-",
        "duracion":"90 min",
        "clasificacion":"Accion",
        "butaca":"Tela",
        "horario":"10:00 - 13:00 - 14:00"
    },
    {
        "imagen":"img/peli3.jpg",
        "nombre":"Spider-Man-",
        "duracion":"100 min",
        "clasificacion":"Ciencia Ficcion",
        "butaca":"Tela",
        "horario":"10:00 - 13:00 - 14:00"
    },
    {
        "imagen":"img/peli4.jpg",
        "nombre":"Halloween Kills-",
        "duracion":"120 min",
        "clasificacion":"Terror",
        "butaca":"Cuero",
        "horario":"10:00 - 13:00 - 14:00"
    },
    {
        "imagen":"img/peli5.jpg",
        "nombre":"Cliford-",
        "duracion":"60 min",
        "clasificacion":"Infantil",
        "butaca":"Plastico",
        "horario":"10:00 - 13:00 - 14:00"
    },
    {
        "imagen":"img/peli6.jpg",
        "nombre":"El ultimo duelo-",
        "duracion":"100 min",
        "clasificacion":"Suspenso",
        "butaca":"Metal",
        "horario":"10:00 - 13:00 - 14:00"
    },
    {
        "imagen":"img/peli7.jpg",
        "nombre":"Pulp Fiction-",
        "duracion":"120 min",
        "clasificacion":"Accion",
        "butaca":"Tela",
        "horario":"10:00 - 13:00 - 14:00"
    },
    {
        "imagen":"img/peli8.jpg",
        "nombre":"Black Widow-",
        "duracion":"120 min",
        "clasificacion":"Acción",
        "butaca":"Metal",
        "horario":"10:00 - 13:00 - 14:00"
    }
]};

var div = document.getElementById("info");
div.innerHTML = volcarDatos(nombres.movies);

function volcarDatos(datos){
    var total = datos.length;
    data = "<ul class=\"grid\">\n";
    for(var i = 0; i<total ; i++){
        data += "<li class = \"box\">\n";
        data += "<div class=\"box-shadow\"></div>\n";
        data += "<div class =\"box-gradient\">\n";
        data += "<img src=\"" + datos[i].imagen + "\" alt=\"Pelicula" + datos[i].nombre +" "+datos[i].duracion+"\" class=\"avatar\" />\n";
        data += "<h4>\nNombre: "+datos[i].nombre + " "+datos[i].duracion+"\n</h4>\n";
        data += "<p>\nclasificacion: "+datos[i].clasificacion +"\n<br>\n";
        data += "Tipo butaca: " + datos[i].butaca + "\n</p>\n";
        data += "Horarios: " + datos[i].horario + "\n</p>\n";
        data += "</div>\n";
        data += "</li>\n";
        data += "<br>\n";
    }
    data += "</ul>\n";
    return data;
}