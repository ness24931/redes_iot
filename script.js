function showTopologia() {
    document.getElementById('titulo_variable').style.display = 'none';
    document.getElementById('main-container').style.backgroundImage = "url(./Imagenes/topologia.jpg)";
}

function inicio() {
    document.getElementById('titulo_variable').style.display = 'none';
    document.getElementById('main-container').style.backgroundImage = "url(./Imagenes/foto_mall.jpg)";
}

function showVariable(variable) {
    // document.getElementById('main-container')
    switch (variable) {
        case 1:
            document.getElementById('titulo_variable').style.display = 'block';
            document.getElementById('titulo_variable').innerText = 'Detector de Cliente';
            document.getElementById('main-container').style.backgroundImage = "url(./Imagenes/variable1.gif)";
            break;
        case 2:
            document.getElementById('titulo_variable').style.display = 'block';
            document.getElementById('titulo_variable').innerText = 'Identificador de tipo de negocio';
            break;
        case 3:
            document.getElementById('titulo_variable').style.display = 'block';
            document.getElementById('titulo_variable').innerText = 'Detector de Cliente';
            break;
        case 4:
            document.getElementById('titulo_variable').style.display = 'block';
            document.getElementById('titulo_variable').innerText = 'Detector de Cliente';
            break;
        case 5:
            document.getElementById('titulo_variable').style.display = 'block';
            document.getElementById('titulo_variable').innerText = 'Detector de Cliente';
            break;

        default:
            break;
    }

}