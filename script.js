window.onload = function() {

    var cH = $('#crosshair-h'),
        cV = $('#crosshair-v')
    cO = $('#coordinates');;

    $(document).on('mousemove', function(e) {
        cH.css('top', e.pageY);
        cV.css('left', e.pageX);
        cO.css('left', e.pageX);
        cO.css('top', e.pageY);
        document.getElementById("coordinates").innerHTML = "59°26′14" + String(e.pageY) + "″N<br>" + "24°44′43" + String(e.pageX) + "″E";
    });

    // var images = new Array('img/bg1.jpg', 'img/bg2.jpg','img/bg3.jpg','img/bg4.jpg','img/bg5.jpg');
    // var item = images[Math.floor(Math.random() * images.length)];
    // document.getElementById("right_slideshow").style.backgroundImage = "url(" + item + ")";

    data = [{
            "ru": [
                { "hero": "Находим объекты на снимках дистанционного зондирования земли" },
                { "download": "Скачать плагин Qgis" },
                { "documentation": "Документация" },
                { "contact": "Написать нам:" },
                { "saleskit": "Скачать <br> Презентацию" }
            ]
        },
        {
            "en": [
                { "hero": "We find objects on the remote sensing images" },
                { "download": "Download Qgis plugin" },
                { "documentation": "Documentation" },
                { "contact": "Contact us:" },
                { "saleskit": "Download <br> Presentation" }
            ]
        }
    ];

    var userLang = navigator.language || navigator.userLanguage;
    if (userLang == "ru-RU") {
        var num = 0;
        var lang = "ru";

    } else {
        var lang = "en";
        var num = 1;
    }
    document.getElementById("hero_text").innerHTML = data[num][lang][0]["hero"];
    document.getElementById("btn_dwn").innerHTML = data[num][lang][1]["download"];
    document.getElementById("btn_doc").innerHTML = data[num][lang][2]["documentation"];
    document.getElementById("mail_us").innerHTML = data[num][lang][3]["contact"];
    document.getElementById("download_saleskit").innerHTML = data[num][lang][4]["saleskit"];

}