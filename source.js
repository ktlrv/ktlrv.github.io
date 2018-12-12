$(document).ready(function() {
  var audioElement = document.createElement('audio'); //crate audio element

  function level() {
    var rad1 = document.getElementById("easy").checked;
    var rad2 = document.getElementById("medium").checked;
    var rad3 = document.getElementById("hard").checked;
    if (rad1 === true) {
      lvl = 10
    } else if (rad2 === true) {
      lvl = 100
    } else if (rad3 === true) {
      lvl = 1000
    } else {
      lvl = 10
    };
    return (lvl);
  };

  function language() {
    if (document.getElementById('lang').checked) {
      lang = "ru-RU"
    } else {
      lang = "en-EN"
    }
    return (lang);
  };

  function generatemul(lang) {
    if (lang === "ru-RU") {
      sign = " умножить на "
    } else {
      sign = " multiply by "
    }
    rad = level()
    x = Math.floor(Math.random() * rad);
    y = Math.floor(Math.random() * rad);
    n1 = x.toString();
    n2 = y.toString();
    n3 = n1 + sign + n2;
    var data = {
      lang: lang,
      text: n3.toString(),
      answer: x * y
    };
    return (data)
  };

  function generatesum(lang) {
    if (lang === "ru-RU") {
      sign = " плюс "
    } else {
      sign = " plus "
    }
    rad = level()
    x = Math.floor(Math.random() * rad);
    y = Math.floor(Math.random() * rad);
    n1 = x.toString();
    n2 = y.toString();
    n3 = n1 + sign + n2;
    var data = {
      lang: lang,
      text: n3.toString(),
      answer: x + y
    };
    return (data)
  };

  function generatesub(lang) {
    if (lang === "ru-RU") {
      sign = " минус "
    } else {
      sign = " minus "
    }
    rad = level()
    x = Math.floor(Math.random() * rad);
    y = Math.floor(Math.random() * rad);
    while ((x - y) < 0) {
      x = Math.floor(Math.random() * rad);
      y = Math.floor(Math.random() * rad);
    }
    n1 = x.toString();
    n2 = y.toString();
    n3 = n1 + sign + n2;
    var data = {
      lang: lang,
      text: n3.toString(),
      answer: x - y
    };
    return (data)
  };

  function generatediv(lang) {
    if (lang === "ru-RU") {
      sign = " делить на "
    } else {
      sign = " divide by "
    }
    rad = level()
    x = Math.floor(Math.random() * (rad * 10));
    y = Math.floor(Math.random() * rad);
    while ((x % y) != 0) {
      x = Math.floor(Math.random() * (rad * 10));
      while (y < 2) {
        y = Math.floor(Math.random() * rad);
      }
    };
    n1 = x.toString();
    n2 = y.toString();
    n3 = n1 + sign + n2;
    var data = {
      lang: lang,
      text: n3.toString(),
      answer: x / y
    };
    return (data)
  };

  function generateper(lang) {
    if (lang === "ru-RU") {
      sign = " процентов от "
    } else {
      sign = " percent of "
    }
    n1 = Math.floor(Math.random() * 100);
    n2 = Math.floor(Math.random() * 100);
    while (((n1 * n2 / 100) % 1 > 0) || ((n1 === 0) || (n2 === 0)) === true) {
      n1 = Math.floor(Math.random() * 100);
      n2 = Math.floor(Math.random() * 100);
      n3 = n1 + sign + n2;
    };
    var data = {
      lang: lang,
      text: n3.toString(),
      answer: n1 * (n2 / 100)
    };
    return (data)
    document.getElementById("demo1").innerHTML = p1;
    document.getElementById("demo2").innerHTML = p2;
    document.getElementById("demo3").innerHTML = p1 * (p2 / 100);
  };

  function get_voice(data) {
    var text = data.text;
    var lang = data.lang;
    var link = "https://tts.voicetech.yandex.net/generate?text=" + text + "&format=mp3&lang=" + lang + "&speaker=zahar&emotion=good&key=069b6659-984b-4c5f-880e-aaedcfd84102"
    audioElement.setAttribute('src', link);
    audioElement.setAttribute('autoplay', 'autoplay');
    // $.get();
    audioElement.addEventListener("load", function() {
      audioElement.play();
    }, true);
  }

  function mode() {
    var rad1 = document.getElementById("sum").checked;
    var rad2 = document.getElementById("sub").checked;
    var rad3 = document.getElementById("mult").checked;
    var rad4 = document.getElementById("div").checked;
    var rad5 = document.getElementById("per").checked;
    var rad6 = document.getElementById("mix").checked;
    if (rad1 === true) {
      return (1);
    } else if (rad2 === true) {
      return (2);
    } else if (rad3 === true) {
      return (3);
    } else if (rad4 === true) {
      return (4);
    } else if (rad5 === true) {
      return (5);
    } else if (rad6 === true) {
      return (6);
    } else {
      return (1);
    };
  };

  function type() {
    if (document.getElementById('audio').checked) {
      return (1);
    } else {
      return (2);
    };
  };

  function main() {
    var lang_main = language();
    console.log(lang_main);
    var mode_main = mode();
    console.log(mode_main);
    switch (mode_main) {
      case 1:
        data_main = generatesum(lang_main)
        break;
      case 2:
        data_main = generatesub(lang_main)
        break;
      case 3:
        data_main = generatemul(lang_main)
        break;
      case 4:
        data_main = generatediv(lang_main)
        break;
      case 5:
        data_main = generateper(lang_main)
        break;
      case 6:
        var myArray = [generatesum(lang_main), generatesub(lang_main), generatemul(lang_main), generatediv(lang_main),generateper(lang_main)]
        data_main = myArray[(Math.random() * myArray.length) | 0]
        break;
    }
    console.log(data_main);
    type_main = type()
    switch (type_main) {
      case 1:
        $("#btn_play").css('visibility', '');
        var voice_main = get_voice(data_main);
        document.getElementById("excercise").innerHTML = "Excercise";
        $("#excercise").css('visibility', 'hidden')
        break;
      case 2:
        $("#btn_play").css('visibility', 'hidden');
        $("#excercise").css('visibility', '')
        document.getElementById("excercise").innerHTML = data_main.text;
        break;
    }
    answer_global = data_main.answer;
  };
  main();

  function check(data) {
    var answer = answer_global;
    var ans = document.getElementById("answer_field").value;
    ans = parseInt(ans);
    if (ans === answer) {
      $("#answer_field").css("border-color", "#21ba45");
      $('#answer_field').val('');
      main();
    } else {
      $('#answer_field').val('');
      console.log(answer, answer_global);
      $("#answer_field").css("border-color", "#db2828");
    };
  }

  $('#btn_play').click(function() { //play button
    audioElement.play();
  });
  $('#btn_check').click(function() { //check the answer
    check();
  });
  $("input[name='level']").click(function() {
    main();
  });
  $("input[name='mode']").click(function() {
    main();
  });
  $("input[name='lang']").click(function() {
    main();
  });
  $("input[name='type']").click(function() {
    main();
  });
  $('#answer_field').on('keydown', function(e) {
    if (e.which == 13) {
      check();
    }
  });
});
