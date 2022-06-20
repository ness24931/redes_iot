function showTopologia() {
    document.getElementById('titulo_variable').style.display = 'none';
    document.getElementById('main-container').style.backgroundImage = "url(./Imagenes/topologia.jpg)";
}

function inicio() {
    document.getElementById('titulo_variable').style.display = 'none';
    document.getElementById('main-container').style.backgroundImage = "url(./Imagenes/foto_mall.jpg)";
}

function showVariable(variable) {
    switch (variable) {
        case 1:
            document.getElementById('titulo_variable').style.display = 'block';
            document.getElementById('titulo_variable').innerText = 'Detector de Cliente';
            document.getElementById('main-container').style.backgroundImage = "url(./Imagenes/variable1.gif)";
            break;
        case 2:
            document.getElementById('titulo_variable').style.display = 'block';
            document.getElementById('titulo_variable').innerText = 'Identificador de tipo de negocio';
            document.getElementById('main-container').style.backgroundImage = "url(./Imagenes/variable2.gif)";
            break;
        case 3:
            document.getElementById('titulo_variable').style.display = 'block';
            document.getElementById('titulo_variable').innerText = 'Identificador de proveedor de servicios';
            document.getElementById('main-container').style.backgroundImage = "url(./Imagenes/variable3.gif)";
            break;
        case 4:
            document.getElementById('titulo_variable').style.display = 'block';
            document.getElementById('titulo_variable').innerText = 'Tipo de transporte';
            document.getElementById('main-container').style.backgroundImage = "url(./Imagenes/variable4.gif)";
            break;
        case 5:
            document.getElementById('titulo_variable').style.display = 'block';
            document.getElementById('titulo_variable').innerText = 'Identificador de producto';
            document.getElementById('main-container').style.backgroundImage = "url(./Imagenes/variable5.gif)";
            break;

        default:
            break;
    }

}