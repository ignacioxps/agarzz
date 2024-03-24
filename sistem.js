function split22() {
    $("body").trigger($.Event("keydown", {
        keyCode: 32
    }));
    $("body").trigger($.Event("keyup", {
        keyCode: 32
    }));
}

// Función Sopaceclick
function Sopaceclick() {

        split22();

}

// Función para manejar el evento 'auxclick'
function handleAuxClick(event) {
    if (event.button === 1) {
        // Si el checkbox está marcado, llama a la función Sopaceclick
        const checkboxElement = document.getElementById('spaceCheckbox');
        if (checkboxElement.checked) {
            Sopaceclick();
        }
    }
}

// Agrega el listener de eventos 'auxclick'
document.addEventListener('auxclick', handleAuxClick);

const settingsDiv = document.getElementById('yesno_settings');

// Crea un nuevo checkbox para "Space click"
const spaceCheckbox = document.createElement('label');
spaceCheckbox.innerHTML = '<input id="spaceCheckbox" type="checkbox">Space click';
settingsDiv.appendChild(spaceCheckbox);

// Función para manejar el evento de cambio en el checkbox
function handleCheckboxChange() {
    // Guarda el estado del checkbox en localStorage
    localStorage.setItem('spaceCheckboxChecked', this.checked);
}

// Obtiene el elemento del checkbox
const checkboxElement = document.getElementById('spaceCheckbox');

// Obtiene el estado del checkbox guardado en localStorage, si existe
const isChecked = localStorage.getItem('spaceCheckboxChecked') === 'true';
checkboxElement.checked = isChecked;

// Agrega un listener de eventos para escuchar cambios en el estado del checkbox
checkboxElement.addEventListener('change', handleCheckboxChange);

// Si el checkbox está marcado, llama a la función Sopaceclick
if (isChecked) {
    Sopaceclick();
}

       $(document).ready(function() {
      var helloDialogElement = document.getElementById('helloDialog');

      // Crear el botón
      var nuevoBotonvz = document.createElement('button');
      nuevoBotonvz.textContent = 'Cuenta';
      nuevoBotonvz.id = 'Loginxhsp';
      helloDialogElement.appendChild(nuevoBotonvz);


      $("#Loginxhsp").on("click", function() {

          $("#idUserDesktop").toggle();

          event.preventDefault();
      });


      $("#idUserDesktop").hide();


      var nuevoBotonv = document.createElement('button');
      nuevoBotonv.textContent = 'Restablecer';
      nuevoBotonv.id = 'Restablecer';

      helloDialogElement.appendChild(nuevoBotonv);
      nuevoBotonv.addEventListener('click', function() {
          var screenWidth = window.screen.width;
          var screenHeight = window.screen.height;
          var popupWidth = 600;
          var popupHeight = 600;
          var left = (screenWidth - popupWidth) / 2;
          var top = (screenHeight - popupHeight) / 2;
          window.open('https://agarz.com/es/resetpass', '_blank', 'width=' + popupWidth + ', height=' + popupHeight + ', left=' + left + ', top=' + top);
      });

      var nuevoBotonvzc = document.createElement('button');
      nuevoBotonvzc.textContent = 'Registrarse';
      nuevoBotonvzc.id = 'Registerss';

      nuevoBotonvzc.addEventListener('click', function() {
          var screenWidth = window.screen.width;
          var screenHeight = window.screen.height;
          var popupWidth = 600;
          var popupHeight = 600;
          var left = (screenWidth - popupWidth) / 2;
          var top = (screenHeight - popupHeight) / 2;
          window.open('https://agarz.com/es/register', '_blank', 'width=' + popupWidth + ', height=' + popupHeight + ', left=' + left + ', top=' + top);
      });

      helloDialogElement.appendChild(nuevoBotonvzc);



      function addGlobalStyle(css) {
          var head = document.getElementsByTagName('head')[0];
          if (head) {
              var style = document.createElement('style');
              style.type = 'text/css';
              style.innerHTML = css;
              head.appendChild(style);
          }
      }
      addGlobalStyle(`

 .skin-popup.active {
visibility: visible;
    box-shadow: 0 0 0 95px #ffffff47;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    left: -234px;
    background: transparent!important;
    top: 38px;
    animation: rotar 1s linear;
    transform: rotate(420deg);
}
.image-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

   .skin-popup img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        position: absolute;
        top: -17%;
        left: 61%;
        margin-top: -64px;
        margin-left: -64px;
        transform-origin: 50% 198%;
        filter: brightness(1.3);
        display: block;
        background: transparent;
        border: none;
        box-shadow: 0 0 0 5px #00000000;
          transform: rotate(350deg);
    }

@keyframes rotar {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(420deg);
    }
}

.skin-popup img:nth-child(1) {
    transform: rotate(0deg);
}

.skin-popup img:nth-child(2) {
    transform: rotate(25deg);
}

.skin-popup img:nth-child(3) {
    transform: rotate(50deg);
}

.skin-popup img:nth-child(4) {
    transform: rotate(75deg);
}

.skin-popup img:nth-child(5) {
    transform: rotate(100deg);
}

.skin-popup img:nth-child(6) {
    transform: rotate(125deg);
}

.skin-popup img:nth-child(7) {
    transform: rotate(150deg);
}

.skin-popup img:nth-child(8) {
    transform: rotate(175deg);
}

.skin-popup img:nth-child(9) {
    transform: rotate(200deg);
}

.skin-popup img:nth-child(10) {
    transform: rotate(225deg);
}

.skin-popup img:nth-child(11) {
    transform: rotate(250deg);
}

.skin-popup img:nth-child(12) {
    transform: rotate(275deg);
}

.skin-popup img:nth-child(13) {
    transform: rotate(300deg);
}

.skin-popup img:nth-child(14) {
    transform: rotate(325deg);
}

.skin-popup img:nth-child(15) {
    transform: rotate(350deg);
}

`);

      var div = document.createElement('div');
      div.textContent = 'by ignacio';
      div.classList.add('credtos');
      var helloDialog = document.getElementById('helloDialog');
      helloDialog.appendChild(div);

      document.addEventListener('DOMContentLoaded', function() {
          var container = document.querySelector('.skin-popup.active');
          var images = document.querySelectorAll('.skin-popup img');
          console.log('Rueda girada');
          var currentIndex = 0;

          container.addEventListener('wheel', function(event) {
              // Oculta la imagen actual
              images[currentIndex].style.display = 'none';

              // Actualiza el índice de la imagen actual
              currentIndex = (currentIndex + (event.deltaY > 0 ? 1 : -1) + images.length) % images.length;

              // Muestra la nueva imagen actual
              images[currentIndex].style.display = 'block';

              // Evita que se realice el desplazamiento de la página por defecto
              event.preventDefault();
          });
      });

      var nuevoDiv = document.createElement("div");

      var alphaSetings = document.createElement("button");
      var alphaMenu = document.createElement("button");
      alphaMenu.id = "alphaMenu";
      alphaMenu.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/894619576829091913/1192473644224483399/image_1_1.png?ex=660eb81f&is=65fc431f&hm=d2428bd2c397cf5cdcb9b79a865e8875bcf8e83f0235008a1a99e189c8978904&')";
      alphaMenu.style.width = "30px";
      alphaMenu.style.height = "30px";
      alphaMenu.style.border = "none";
      alphaMenu.style.backgroundColor = "#0000";
      alphaMenu.style.backgroundSize = "cover";
      var idSolMenu = document.getElementById("idSolMenu");
      idSolMenu.style.opacity = "0";
      idSolMenu.style.transform = "translateY(-10px)";
      idSolMenu.style.pointerEvents = "none";
      idSolMenu.style.transition = "opacity 0.3s ease-out, transform 0.3s ease-out, pointer-events 0.3s";

      alphaMenu.appendChild(idSolMenu);

      alphaMenu.addEventListener("mouseenter", function() {
          idSolMenu.style.opacity = "1";
          idSolMenu.style.transform = "translateY(0)";
          idSolMenu.style.pointerEvents = "auto";
      });

      alphaMenu.addEventListener("mouseleave", function() {
          idSolMenu.style.opacity = "0";
          idSolMenu.style.transform = "translateY(-10px)";
          idSolMenu.style.pointerEvents = "none";
      });

      alphaSetings.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/894619576829091913/1192315696852504576/image.png?ex=660e2506&is=65fbb006&hm=c4ff0c7f84dd669d757e1ddb85f55731aa2c20975bfa1cb53d8640dc51459949&')";
      alphaSetings.style.backgroundSize = "cover";
      alphaSetings.style.backgroundColor = "#0000";
      alphaSetings.style.width = "30px";
      alphaSetings.style.height = "30px";
      alphaSetings.style.border = "none";
      alphaSetings.id = "alphaSetings";
      nuevoDiv.appendChild(alphaSetings);
      nuevoDiv.appendChild(alphaMenu);
      helloDialog.appendChild(nuevoDiv);

      var yesnoSettingsDiv = document.getElementById("yesno_settings");

      // Inicializar yesnoSettingsDiv con estilos de transición
      yesnoSettingsDiv.style.opacity = "0";
      yesnoSettingsDiv.style.transform = "translateY(-10px)";
      yesnoSettingsDiv.style.pointerEvents = "none";
      yesnoSettingsDiv.style.transition = "opacity 0.3s ease-out, transform 0.3s ease-out, pointer-events 0.3s";

      alphaSetings.appendChild(yesnoSettingsDiv);

      alphaSetings.addEventListener("mouseenter", function() {
          yesnoSettingsDiv.style.opacity = "1";
          yesnoSettingsDiv.style.transform = "translateY(0)";
          yesnoSettingsDiv.style.pointerEvents = "auto";
      });

      alphaSetings.addEventListener("mouseleave", function() {
          yesnoSettingsDiv.style.opacity = "0";
          yesnoSettingsDiv.style.transform = "translateY(-10px)";
          yesnoSettingsDiv.style.pointerEvents = "none";
      });


      /////////////////////////////////////////////////////////////////
      /////////////////
      var cajaIdSolMenu = document.getElementById("idSolMenu");
      var contenido = cajaIdSolMenu.innerHTML;
      var contenidoModificado = contenido.replace(/,/g, '');
      cajaIdSolMenu.innerHTML = contenidoModificado;
      var cajaIdSolMenu2 = document.getElementById("idSolMenu");
      var elementosBr = cajaIdSolMenu2.getElementsByTagName("br");
      if (elementosBr.length >= 4) {
          var tercerBr = elementosBr[3];
          tercerBr.parentNode.removeChild(tercerBr);
      }
      /********************************/ ////////////////////////////////////////




      function onKeyDown(event) {
          if (event.keyCode == 40 && !$('input:focus').length) abajo();
          if (event.keyCode == 37 && !$('input:focus').length) izquierda();
          if (event.keyCode == 38 && !$('input:focus').length) arriba();
          if (event.keyCode == 39 && !$('input:focus').length) derecha();
      }

      function arriba() {
          const X = window.innerWidth / 2,
              Y = window.innerHeight / 25;
          $("canvas").trigger($.Event("mousemove", {
              clientX: X,
              clientY: Y
          }));
      }

      function izquierda() {
          const X = window.innerWidth / 25,
              Y = window.innerHeight / 2;
          $("canvas").trigger($.Event("mousemove", {
              clientX: X,
              clientY: Y
          }));
      }

      function abajo() {
          const X = window.innerWidth / 2,
              Y = window.innerHeight / 0;
          $("canvas").trigger($.Event("mousemove", {
              clientX: X,
              clientY: Y
          }));
      }

      function derecha() {
          const X = window.innerWidth / 0,
              Y = window.innerHeight / 2;
          $("canvas").trigger($.Event("mousemove", {
              clientX: X,
              clientY: Y
          }));
      }

      $(document).keydown(onKeyDown);
      // //////////////////////////////////////////////////////////COLORES////////////////////////////////////////////////////////////////////////////////



      $("#generalErrorDialog, .myDialog").css({
          background: "#0000008a",
          "border-color": "rgb(6 0 255)",
          padding: "25px",
          border: "2px solid rgb(6 0 255)",
          "box-shadow": "0 0 #0000FF, 0 0 0.4em rgb(6 0 255)",
          color: "#ffffff",
          "border-radius": "40px",
          "text-shadow": "rgb(255 255 255) 0 0 1px"
      });
      $("#idSkinDefault, #idNameDefault, #finalLeaderboardDialog").css({
          color: "#0000ff",
          "background-color": "rgb(0 0 0 / 51%)",
          "border-color": "#0000ff",
          "border-radius": "45px",
          "font-family": "Courier New",
          "text-shadow": "#0000ff 0 0 1px",
          "box-shadow": "0 0 #0000ff, 0 0 0.4em #0000ff"
      });

      $("#idTwitch").css({
          top: "65px",
          background: "#0000",
          color: "#ffffff",
          width: "440px",
          left: "400px"
      });

      $("#isimFavori").css({
          "width": "60px",
      });
      $("#gamemode").css({
          "width": "100px",
      });
      $("#gamemode").css({
          "width": "100px",
      });
      $("#myTeam").css({

          "margin-top": "0px",
          width: "100px",
          float: "left"
      });

      $("#txtSkin").css({
          width: "170px",
          float: "left"
      });

      $("#chat_textbox").css({
          "text-shadow": "rgb(255 255 255) 0 0 1px",
          "background-color": "#0000",
          color: "#ffffff",
          "user-select": "none"
      });
      $("#chatInputContainer").css({

          "user-select": "none"
      });

      var yesnoSettingsContainer = document.getElementById("yesno_settings");
      var labels = yesnoSettingsContainer.getElementsByTagName("label");

      var originalCheckboxStates = Array.from(labels).map(function(label) {
          return label.querySelector('input[type="checkbox"]').checked;
      });
      for (var i = 0; i < labels.length; i++) {
          var labelText = labels[i].textContent.trim();

          if (i === 7) {
              var checkbox = labels[i].querySelector('input[type="checkbox"]');
              var userSpan = document.createElement("span");
              userSpan.textContent = "Zoom";

              labels[i].innerHTML = "";
              labels[i].appendChild(checkbox);
              labels[i].appendChild(userSpan);
          }
          if (i === 8) {
              var checkbox2 = labels[i].querySelector('input[type="checkbox"]');
              var userSpan2 = document.createElement("span");
              userSpan2.textContent = "Informacion";

              labels[i].innerHTML = "";
              labels[i].appendChild(checkbox2);
              labels[i].appendChild(userSpan2);
          }
          if (i === 2) {
              var checkbox3 = labels[i].querySelector('input[type="checkbox"]');
              var userSpan3 = document.createElement("span");
              userSpan3.textContent = "GL raya";

              labels[i].innerHTML = "";
              labels[i].appendChild(checkbox3);
              labels[i].appendChild(userSpan3);
          }
          if (i === 13) {
              var newcheckbox = labels[i].querySelector('input[type="checkbox"]');
              var newSpan = document.createElement("span");
              newSpan.textContent = "Codigo chat";

              labels[i].innerHTML = "";
              labels[i].appendChild(newcheckbox);
              labels[i].appendChild(newSpan);
          }
      }
      var alphaContainer = document.createElement('div');
      alphaContainer.id = 'Alpha';
      var helloDialog2 = document.getElementById('helloDialog');

      if (helloDialog2) {
          helloDialog2.parentNode.insertBefore(alphaContainer, helloDialog2);
          alphaContainer.appendChild(helloDialog2);
      } else {
          console.error('Elemento helloDialog no encontrado en la página.');
      }
      Array.from(labels).forEach(function(label, index) {
          var checkbox = label.querySelector('input[type="checkbox"]');
          var isChecked = originalCheckboxStates[index];

          checkbox.checked = isChecked;

          label.classList.add("switch-label");
          checkbox.classList.add("switch-checkbox");

          var sliderSpan = document.createElement("span");
          sliderSpan.classList.add("slider");

          var sliderHandleSpan = document.createElement("span");
          sliderHandleSpan.classList.add("slider-handle");

          sliderSpan.appendChild(sliderHandleSpan);
          label.insertBefore(sliderSpan, checkbox);

          label.addEventListener('click', function() {
              checkbox.checked = !checkbox.checked;
              sliderHandleSpan.style.transform = checkbox.checked ? 'translateX(100%)' : 'translateX(0)';
          });
          sliderHandleSpan.style.transform = isChecked ? 'translateX(100%)' : 'translateX(0)';
      });


      var customStyles = `
.switch-label {
    position: relative;
    display: inline-block;
    padding-left: 30px;
    margin-bottom: 8px;
    cursor: pointer;
    user-select: none;
}

.switch-checkbox {
    display: none;
}

.slider {
position: relative;
    display: inline-block;
    width: 30px;
    height: 16px;
    background-color: #5b5b5b63;
    border-radius: 34px;
    overflow: hidden;
    left: -5px;
    top: 3px;

}

.slider-handle {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    background-color: blue;
    border-radius: 50%;
    transition: transform 0.3s;
    transform: translateX(100); /* Nueva línea para establecer la posición inicial de la bolita */
}

.switch-checkbox:checked + .slider .slider-handle {
  transform: translateX(100%);
}

.switch-checkbox:checked + .slider {
    background-color: #2196F3;
}
`;

      function eliminarEnlace() {
          var elementosIdUserDesktop = document.querySelectorAll('#idUserDesktop');

          elementosIdUserDesktop.forEach(function(elementoIdUserDesktop) {
              for (var i = 0; i < elementoIdUserDesktop.childNodes.length; i++) {
                  var nodoHijo = elementoIdUserDesktop.childNodes[i];

                  if (
                      nodoHijo.tagName === 'A' &&
                      (nodoHijo.href.includes('//agarz.com/es/resetpass') || nodoHijo.href.includes('//agarz.com/es/register'))
                  ) {
                      elementoIdUserDesktop.removeChild(nodoHijo);
                      break;
                  }
              }
          });
      }

      function eliminarPrimerBr() {
          var elementosIdUserDesktop = document.querySelectorAll('#idUserDesktop');

          elementosIdUserDesktop.forEach(function(elementoIdUserDesktop) {
              var primerBrEncontrado = false;

              for (var i = 0; i < elementoIdUserDesktop.childNodes.length; i++) {
                  var nodoHijo = elementoIdUserDesktop.childNodes[i];

                  if (nodoHijo.tagName === 'BR' && !primerBrEncontrado) {
                      elementoIdUserDesktop.removeChild(nodoHijo);
                      primerBrEncontrado = true;
                      break;
                  }
              }
          });
      }

      function eliminarCorchetes() {
          var elementosIdUserDesktop = document.querySelectorAll('#idUserDesktop');

          elementosIdUserDesktop.forEach(function(elementoIdUserDesktop) {
              for (var i = 0; i < elementoIdUserDesktop.childNodes.length; i++) {
                  var nodoHijo = elementoIdUserDesktop.childNodes[i];
                  if (nodoHijo.nodeType === 3) {
                      nodoHijo.nodeValue = nodoHijo.nodeValue.replace(/\[/g, '').replace(/\]/g, '');
                  }
              }
          });
      }

      window.onload = function() {
          eliminarEnlace();
          eliminarPrimerBr();
          eliminarCorchetes();



      };

      var observer = new MutationObserver(function() {
          eliminarEnlace();
          eliminarPrimerBr();
          eliminarCorchetes();


      });

      observer.observe(document.body, {
          childList: true,
          subtree: true
      });


 



      // Agregar estilos al documento
      var styleElement2 = document.createElement("style");
      styleElement2.innerHTML = customStyles;
      document.head.appendChild(styleElement2);
      addGlobalStyle('#idUserDesktop > a:nth-child(4){top:75px}');
      addGlobalStyle('.isim-link{background: black;}');
      addGlobalStyle('#idUserDesktop > table{top:10px;position: relative;}');
      addGlobalStyle('#idUserDesktop > a{text-decoration:none;top: 50px;border: none!important; color: #000!important;padding: 2px;position: relative;left: 33px;border-radius: 23px;background: white;box-shadow: 0 0px 8px rgb(255 255 255), 0 0px 5px rgb(255 255 255);width: 232px; display: block;text-align: center;}');
      addGlobalStyle('#idUserDesktop > a:hover{text-decoration:none;box-shadow: 0 4px 8px #0000ff, 0 0px 5px #0000ff;background-color: #0000ff; color: white!important;}');
      addGlobalStyle('#idUserDesktop > b{top: 182px;position: absolute;}');
      addGlobalStyle('#email{border: none!important;color: #000;border: none;background-color: #000000a3!important;width: 230px;color: #ffffff!important;padding: 0px 25px;border: none;height: 25px;clip-path: polygon(0 0, 95% 0, 100% 100%, 5% 100%);}');
      addGlobalStyle('#email:hover{border: none!important;color: white;background-color:blue!important}');
      addGlobalStyle('#password:hover{border: none!important;color: white;background-color:blue!important}');
      addGlobalStyle('#password{left: 13px;position: relative;border: none!important;width: 230px;color: #000;border: none;background-color: #000000a3!important;color: #ffffff!important;padding: 0px 25px;border: none;height: 25px;clip-path: polygon(0 0, 95% 0, 100% 100%, 5% 100%);}');
      addGlobalStyle('#loginButton{border: none!important;color: #000;padding: 2px;position: relative;top: 23px; width: 230px;left: -25px; border-radius: 23px; background: white;box-shadow: 0 0px 8px rgb(255 255 255), 0 0px 5px rgb(255 255 255);}');
      addGlobalStyle('#loginButton:hover{box-shadow: 0 4px 8px #0000ff, 0 0px 5px #0000ff;background-color: #0000ff; color: white!important;}');

      addGlobalStyle('#loginForm{position: relative;top: -53px;}');
      addGlobalStyle('#idUserDesktop{background-color: #0000!important; position: absolute;transform: translate(-50%, -50%) scale(0.8);z-index: 233;border: 3px solid rgba(0, 0, 0, 0);border-radius: 30px; padding: 20px;font-size: 18px;background-color: rgb(0 0 0 / 82%);transition: opacity 0.3s ease-out 0s, transform 0.3s ease-out 0s;}');
      addGlobalStyle('#idTwitch > a{display: block;text-decoration: none;background: #000000b8;border-radius: 23px;width: 125px; text-align: center;top: 15px;position: absolute; padding: 1px 0px;}');
      addGlobalStyle('#idTwitch > a:hover{box-shadow: 0 0px 8px rgb(255 255 255), 0 0px 5px rgb(255 255 255);background: #ffffff;color:black!important}');
      addGlobalStyle('#Loginxhsp{display: inline-block;padding: 3px 0px;font-size: 16px;color: white; text-align: center; text-decoration: none;cursor: pointer;border: none; border-radius: 25px; background: #000000b8; position: absolute;top: 80px;left: 553px;width: 125px;font-size: 13px;}');
      addGlobalStyle('#Loginxhsp:hover{box-shadow: 0 0px 8px rgb(255 255 255), 0 0px 5px rgb(255 255 255);background: #ffffff;color:black}');

      addGlobalStyle('#Registerss{display: inline-block;padding: 3px 0px;font-size: 16px;color: white;text-align: center; text-decoration: none;cursor: pointer;border: none; border-radius: 25px; background: #000000b8; position: absolute;top: 140px;left: 553px;width: 125px;font-size: 13px;}');
      addGlobalStyle('#Registerss:hover{box-shadow: 0 0px 8px rgb(255 255 255), 0 0px 5px rgb(255 255 255);background: #ffffff;color:black}');

      addGlobalStyle('#Restablecer{display: inline-block;padding: 3px 0px;font-size: 16px;color: white; text-align: center; text-decoration: none;cursor: pointer;border: none; border-radius: 25px; background: #000000b8; position: absolute;top: 110px;left: 553px;width:125px;font-size: 13px;}');
      addGlobalStyle('#Restablecer:hover{box-shadow: 0 0px 8px rgb(255 255 255), 0 0px 5px rgb(255 255 255);background: #ffffff;color:black}');
      addGlobalStyle('#Info > span{position: absolute;top: -10px;background: #000000b8; width: 125px; text-align: center; border-radius: 30px; padding: 1px 0px;}');
      addGlobalStyle('#Info > span:hover{box-shadow: 0 0px 8px rgb(255 255 255), 0 0px 5px rgb(255 255 255);background: #ffffff;color:black!important}');

      addGlobalStyle('#Info {position: absolute;display:flex; top: 150px; z-index: -6; left: 405px;}');
      addGlobalStyle('#helloDialog > div:nth-child(8){z-index: 25; position: relative;top: 10%;}');

      addGlobalStyle('#myDiv { width: 190px;height: auto; top: 111px;left: 405px;position: absolute;}');
      //play btn//
      addGlobalStyle('#playBtn:hover::before { box-shadow: 0 4px 8px #0000ff, 0 0px 5px #0000ff;background-color: #0000ff; color: white; border-color: #0000ff; text-shadow: text-shadow: rgb(255 255 255) 0px 0px 1px; }');
      addGlobalStyle('#playBtn::before {top: 5px;left: 4px;box-shadow:0 4px 8px rgb(255 255 255), 0 0px 5px rgb(255 255 255);content: "";width: 100px;float: left;height: 25px;display: block;position: absolute; bottom: -3px;border: none;background-color:#ffffff;border: inherit;transform: perspective(15px) rotateX(-15deg);z-index: -1;z-index: -1;}');
      addGlobalStyle('#playBtn {top: 65%;;left:133px;outline: none;position:absolute;color:white; background-color:#0000; border-color: #ffffff;border:none; width: 110px; float: left; height: 30px; text-align: center;}');
      addGlobalStyle('#playBtn > img{position: relative; top: -1px;height: 23px;width: 25px;}');
      //play btn//
      var playBtn = document.getElementById("playBtn");


      playBtn.innerHTML = '<img src="https://i.ibb.co/tM7yCwj/imagen-2024-01-06-123444122.png" alt="Play Button">';


      addGlobalStyle('#FastFF{position: absolute;    left: 270px; top: -30px; clip-path: polygon(0 0, 80% 0, 100% 100%, 20% 100%); width: 100px!important;background-color: #000000cf;color: #ffffff;text-shadow: 0px 0px 1px rgb(255 255 255); padding: 0px 25px;border: none;height: 25px;width: 73px!important;}');
      addGlobalStyle('#FastFF:hover{background-color: blue;border:none;outline: none}');

      //spectateBtn //
      addGlobalStyle('#spectateBtn:hover::before { box-shadow: 0 0px 8px #0000ff, 0 0px 5px #0000ff;background-color: #0000ff; color: white; border-color: #0000ff; text-shadow: text-shadow: rgb(255 255 255) 0px 0px 1px; }');
      addGlobalStyle('#spectateBtn::before {box-shadow: 0 0px 8px rgb(255 255 255), 0 0px 5px rgb(255 255 255);content: "";width: 100px;float: left;height: 25px;display: block;position: absolute; bottom: -3px;border: none;background-color:#ffffff;border: inherit;transform: skew(-45deg);;z-index: -1;}');
      addGlobalStyle('#spectateBtn { top: 65%;left: 236px;outline: none;position:absolute;color:white; background-color:#0000; border-color: #ffffff;border:none; width: 120px; float: left; height: 25px; text-align: center;}');
      addGlobalStyle('#spectateBtn > img{position: relative;top: -2px; width: 33px;}');

      //spectateBtn //
      var spectateBtn = document.getElementById("spectateBtn");
      spectateBtn.innerHTML = '<img src="https://i.ibb.co/br5k4My/imagen-2024-01-06-123527182-removebg-preview-2-1.png" alt="Play Button">';
      //replayBtn//

      addGlobalStyle('#replayBtn:hover::before { box-shadow: 0 0px 8px #0000ff, 0 0px 5px #0000ff;background-color: #0000ff; color: white; border-color: #0000ff; text-shadow: text-shadow: rgb(255 255 255) 0px 0px 1px; }');
      addGlobalStyle('#replayBtn::before {box-shadow: 0 0px 8px rgb(255 255 255), 0 0px 5px rgb(255 255 255);content: "";width: 100px;float: left;height: 25px;display: block;position: absolute; bottom: -3px;border: none;background-color:#ffffff;border: inherit;transform: skew(45deg);;z-index: -1;}');
      addGlobalStyle('#replayBtn {left: 4%; top: 65%;border:none;position:absolute;outline: none;color:white; background-color: #0000; border-color: #ffffff; width: 120px; float: right; height: 25px; text-align: center;  }');
      addGlobalStyle('#replayBtn > img{position: relative;top: -1px; width: 23px;}');

      var replayBtn = document.getElementById("replayBtn");
      replayBtn.innerHTML = '<img src="https://i.ibb.co/ZNtnCCy/repetir-1.png" alt="replayBtn">';




      var nuevoInput = document.createElement('input');
      nuevoInput.type = 'text';
      nuevoInput.id = 'FastFF';
      nuevoInput.placeholder = 'FFA';
      document.querySelector('#helloDialog > div:nth-child(9)').appendChild(nuevoInput);

      var timeoutId;

      nuevoInput.addEventListener('input', function() {
          // Limpiar temporizador existente
          clearTimeout(timeoutId);

          // Configurar un nuevo temporizador para esperar medio segundo
          timeoutId = setTimeout(function() {
              var textoIngresado = nuevoInput.value.trim().toLowerCase();
              var indice = obtenerIndicePorTexto(textoIngresado);

              if (indice !== null) {
                  var mySelect = document.getElementById('gamemode');
                  var modoActual = mySelect.selectedIndex;

                  // Modificar la lógica para seleccionar la opción por el valor del atributo "value" o "id"
                  var optionToSelect = null;

                  // Buscar en todas las opciones del select
                  for (var i = 0; i < mySelect.options.length; i++) {
                      var option = mySelect.options[i];

                      if (option.id.toLowerCase() === indice || option.value.toLowerCase() === indice) {
                          optionToSelect = option;
                          break;
                      }
                  }

                  if (optionToSelect) {
                      mySelect.selectedIndex = optionToSelect.index;
                      mySelect.onchange();

                      setTimeout(function() {
                          $("#playBtn").trigger("click");
                      }, 500);

                      console.log("Índice seleccionado:", optionToSelect.id, "Valor:", optionToSelect.value);
                  }
              }
          }, 700);
      });

      function obtenerIndicePorTexto(texto) {
          var numero = parseInt(texto);

          if (!isNaN(numero) && numero >= 1 && numero <= 77) {
              return 'ffa' + numero;
          }

          switch (texto) {
              case 'cffa3':
                  return 'cffa3';
              case 'cffa1':
                  return 'cffa1';
              case 'cffa2':
                  return 'cffa2';
              case 'vscffa':
                  return 'tffa1';
              case 'vsffa':
                  return 'vsffa';
              case 'vsgsz':
                  return 'gsz1';
              case 'ekip1':
                  return 'ks_ffa1';
              case 'gsz1':
                  return 'gsz1';
              default:
                  return null;
          }
      }




      addGlobalStyle('#idUserDesktop > a:nth-child(1) {top: 20px; }');
      addGlobalStyle('#helloDialog > div.credtos{   text-shadow: 0 0 5px blue, 0 0 0px white, 0 0 2px white, 0 0 6px #1900ff, 0 0 5px #0022ff, 0 0 3px white, 0 0 1px #0008ff;color: white; top: 185px;position: absolute;left: 155px;user-select: none;}');
      addGlobalStyle('#myDiv > a{place-content: center;background: #000000b8;border-radius: 23px;width: 125px; position: absolute; padding: 1px 0px; }');
      addGlobalStyle('#myDiv > a:hover{box-shadow: 0 0px 8px rgb(255 255 255), 0 0px 5px rgb(255 255 255); background: #ffffff; color: black!important;}');
      $("#idUserDesktop a[href='https://agarz.com/es/resetpass']").remove();
      addGlobalStyle('#modal > div {color: black; }');
      addGlobalStyle('#text{display:none!important; }');
      addGlobalStyle('#helloDialog > div:nth-child(9){z-index: 4;position: relative;top: 55px; height: 3px;}');
      addGlobalStyle('#idUserContainer { background: #0000; }');
      addGlobalStyle('#helloDialog > div.skin-popup.active > a{text-shadow: none;color: transparent!important;background: transparent!important;width: 150px!important;height: 150px; border-radius: 50%;position: relative;top: 10px;left: -4px; border: none; }');
      addGlobalStyle('#skinFavori {box-shadow: rgb(0 32 255) 0px 0px 25px, rgb(255 255 255) 0px 0px 12px;filter: brightness(1.2);background-size: cover!important;background-image:url(https://i.ibb.co/7rpV6kw/imagen-2024-01-04-163936184.png);width: 150px!important;height: 150px;border: none; border-radius: 50%; background: transparent; color: transparent;}');
      addGlobalStyle('#contenido-div {background: white;z-index: 26;height: 150px; border-radius: 50%;position: relative;top: -128px ;left: -240px; width: 150px}');
      addGlobalStyle('#Alpha { position: fixed; top: 50%;left: 50%;transform: translate(-50%, -50%); width: 60%;height: 180px;z-index: -1;border-radius: 23px;}');
      addGlobalStyle('#contenido-div img {position: relative;z-index: -5; border-radius: 50%; max-width: 100%; display: block; margin: 0 auto; filter: brightness(1.2); transition: opacity 0.3s ease-in-out; }');
      addGlobalStyle('#yesno_settings {border-radius: 30px;margin: 6px; opacity: 0;transform: translateY(-10px); pointer-events: none; transition: opacity 0.3s ease-out 0s, transform 0.3s ease-out 0s, pointer-events 0.3s ease 0s;display: flex;flex-wrap: wrap; text-align: initial;padding: 3px 0px; max-height: 200px; /* ajusta la altura máxima según sea necesario */overflow-y: auto; /* añade desplazamiento vertical si se supera la altura máxima */}');
      addGlobalStyle('#yesno_settings label {text-shadow: 0 0 5px blue, 0 0 0px white, 0 0 2px white, 0 0 6px #1900ff, 0 0 5px #0022ff, 0 0 3px white, 0 0 1px #0008ff;flex: 1 0 48%;}');
      addGlobalStyle('#alphaMenu {z-index: -2;position: relative;left: -95px;top: -75px;}');
      addGlobalStyle('#alphaSetings {z-index: 23;position: relative;left: -65px;top: 15px; }');
      addGlobalStyle('#idSolMenu {background-color: #00000099!important;width: 210px;left: -2px; top: -215px; border-radius: 30px;}')
      addGlobalStyle('#cajaConContenido { position: fixed;top: 0;left: 0;width: 100vw;height: 100vh;overflow: hidden;}');
      addGlobalStyle('#yesno_settings{width: 440px; height: 190px; background-color:#000000c7}');
      addGlobalStyle('#helloDialog { user-select: none;background-color: transparent;border-radius:23px;height:280px;     width: 388px;}');
      addGlobalStyle('#idUserDesktop, #idUserContainer, #idTwitch,  { color:white;background-color: transparent !important; }');
      addGlobalStyle('br { color: #0000ff; background: #0000; }');
      addGlobalStyle('.isim-popup.active { background-color: transparent;border:#0000; }');
      addGlobalStyle('#divReportErr { color: #000000; background: #0000; }');
      addGlobalStyle('head { color: black; background-color: #0000ff; }');
      addGlobalStyle('p { color: #0000ff; display: block; text-decoration: none; }');
      addGlobalStyle('#chat_textbox { color: #0000;    width: 250px; }');
      addGlobalStyle('span { color: white; }')
          addGlobalStyle(' #idSolMenu > a { text-shadow: 0 0 5px blue, 0 0 0px white, 0 0 2px white, 0 0 6px #1900ff, 0 0 5px #0022ff, 0 0 3px white, 0 0 1px #0008ff !important; }');
      addGlobalStyle('span:hover { color: #00ffff; }')
      addGlobalStyle('head { color: #0000ff; background: #0000; }');
      addGlobalStyle('.user_logout("8c1cc0d1bc5951450a030b7b20496e4d { color: #0000ff; }');
      addGlobalStyle('#helloDialog > div:nth-child(10) {position: relative;top: 44px;width: 355px;height: 13px; }');
      addGlobalStyle('#idUserDesktop {width: 360px!important;height: 250px!important; display: none;position: relative;left: 810px; top: 5px;color: #ffffff;background: #ffffff61; text-shadow: rgb(255 255 255) 0px 0px 1px;width: 280px;height: 240px;padding: 23px; border-radius: 23px; }');
      addGlobalStyle('.isim-kapat { background: #0000ff; }');
      addGlobalStyle('label { text-shadow:0 0 5px blue, 0 0 0px white, 0 0 2px white, 0 0 6px #1900ff, 0 0 5px #0022ff, 0 0 3px white, 0 0 1px #0008ff !important;color: #ffffff; background: #0000; text-decoration: none; text-shadow: 0px 0px 1px rgb(255, 255, 255); }');
      addGlobalStyle('label:hover { color: #00ffff; background: #0000; text-shadow: 2px 2px 10px #000000; }');
      addGlobalStyle('#generalErrorDialog_ok { background-color: #0000; border-color: #0000ff; box-shadow: 0px 0px #0000ff, 0em 0 0.4em #0000ff; border-radius: 40px; padding: revert; }');
      addGlobalStyle('#generalErrorDialog_ok:hover { background-color: #0000ff; color: white; border-color: #0000ff; text-shadow: 0px 0px 1px rgb(255, 255, 255); }');

      addGlobalStyle('#finalLeaderboardDialog_ok { background-color: #0000; border-color: #0000ff; border-radius: 40px; padding: revert; color: white; }');
      addGlobalStyle('#finalLeaderboardDialog_ok:hover { background-color: #0000ff; color: #ffffff; border-color: #0000ff; }');
      addGlobalStyle('#nick:hover { background-color: #0000ff; color: white; border-color: #0000ff; text-shadow: 0px 0px 1px rgb(255, 255, 255); }');
      addGlobalStyle('#nick {position: relative;top: 15px;clip-path: polygon(0 0, 90% 0, 100% 100%, 10% 100%);width: 170px!important;background-color: #000000cf;color: #ffffff;text-shadow: 0px 0px 1px rgb(255 255 255);padding: 0px 25px;border: none;height: 25px; }');
      addGlobalStyle('#txtSkin:hover { background-color: #0000ff; color: white; border-color: #0000ff; text-shadow: 0px 0px 1px rgb(255, 255, 255); }');
      addGlobalStyle('#txtSkin{position: relative;left: 18px;top: 13px;clip-path: polygon(0 0, 90% 0, 100% 100%, 10% 100%);width: 170px!important;background-color: #000000cf;color: #ffffff;text-shadow: 0px 0px 1px rgb(255 255 255);padding: 0px 25px;border: none;height: 25px; }');
      addGlobalStyle('#myTeam:hover { background-color: #0000ff; color: white; text-shadow: 0px 0px 1px rgb(255, 255, 255); }');
      addGlobalStyle('#myTeam {    left: 8px;position: relative;top:13px;clip-path: polygon(0 0, 85% 0, 100% 100%, 15% 100%);width: 100px!important;background-color: #000000cf;color: #ffffff;text-shadow: 0px 0px 1px rgb(255 255 255);padding: 0px 25px;border: none;height: 25px; }');
      addGlobalStyle('#isimFavori:hover { background-color: #0000ff; color: #0000; border-color: #0000ff; text-shadow: 0px 0px 1px rgb(255, 255, 255); }');
      addGlobalStyle('#isimFavori {padding: 2px 13px;font-size: 13px !important;left: -17px;position: relative;top: 15px;clip-path: polygon(0 0, 80% 0, 100% 100%, 20% 100%);width:73px!important;background-color: #000000cf;color: #ffffff;text-shadow: 0px 0px 1px rgb(255 255 255);border: none;height: 25px; }');
      addGlobalStyle('a.loginElement { color: #ffffff; }');
      addGlobalStyle('body {zoom:91.5%;font-family: monospace;color: white;}');
      addGlobalStyle('a[href*=resetpass] { color: #ffffff; }');
      addGlobalStyle('#cajaConContenido{ background: #00000099 }');

      addGlobalStyle('a:hover { color: #00ffff!important; background: #0000; text-shadow: 2px 2px 10px #000000; }');
      addGlobalStyle('a { color: #ffffff!important; background: #0000; text-decoration: none; text-shadow: rgb(255 255 255) 0px 0px 1px; }');
      addGlobalStyle('#gamemode:hover { background-color: black ;color: white; border-color: white; text-shadow: text-shadow: rgb(255 255 255) 0px 0px 1px; }');
      addGlobalStyle('#gamemode {padding: 2px 13px;font-size: 13px !important;left: -10px;position: relative;top: 15px;clip-path: polygon(0 0, 85% 0, 100% 100%, 15% 100%);width: 100px!important;background-color: #000000cf;color: #ffffff;text-shadow: 0px 0px 1px rgb(255 255 255);border: none;height: 25px; }');
      addGlobalStyle('#botonobservar1{ background-color:#0000;color:white;border-color:#0000; }');
      addGlobalStyle('#botonobservar1:hover{ background-color:#0000;color:#00ffff;border-color:#0000; }');
      addGlobalStyle('#botonobservar2{ background-color:#0000;color:white;border-color:#0000; }');
      addGlobalStyle('#botonobservar2:hover{ background-color:#0000;color:#00ffff;border-color:#0000; }');
      addGlobalStyle('#botonobservar3{ background-color:#0000;color:white;border-color:#0000; }');
      addGlobalStyle('#botonobservar3:hover{ background-color:#0000;color:#00ffff;border-color:#0000; }');
      addGlobalStyle('#botonobservar4{ background-color:#0000;color:white;border-color:#0000; }');
      addGlobalStyle('#enterPriceYes{ padding: 1px 8px;border-radius: 45px;background-color:#0000;border-color:#0000;box-shadow:0px 0px #0000ff, 0em 0 0.6em #0000ff');
      addGlobalStyle('#enterPriceYes:hover{ background-color:#0000ff;color:white;border-color:#0000ff;text-shadow:text-shadow:rgb(255 255 255) 0px 0px 1px');
      addGlobalStyle('#enterPriceNo{  padding: 1px 8px;border-radius: 45px;background-color:#0000;border-color:#0000;box-shadow:0px 0px #0000ff, 0em 0 0.6em #0000ff');
      addGlobalStyle('#enterPriceNo:hover{ background-color:#0000ff;color:white;border-color:#0000ff;text-shadow:text-shadow:rgb(255 255 255) 0px 0px 1px');
      addGlobalStyle('#settings{  text-align: center;');
      addGlobalStyle('#panel:hover {box-shadow: 0 0px 8px rgb(255 255 255), 0 0px 5px rgb(255 255 255);background: #ffffff;color:black!important}');
      addGlobalStyle('#panel {top: -610px;outline: none;border:none;background: linear-gradient(to right, rgb(0, 71, 255), rgb(10, 0, 92));border-radius: 45px; color: #ffffff; text-shadow: rgb(255 255 255) 0px 0px 1px; }');
      addGlobalStyle('#ssss:hover { background-color: blue ;color: white; border-color: white; text-shadow: text-shadow: rgb(255 255 255) 0px 0px 1px; }');
      addGlobalStyle('#ssss {box-shadow: 0px 0px black, 0em 0 0.1em black; border-bottom: black 3px solid; border-bottom: black 3px solid; border-top: black 3px solid; border-right: black 3px solid; border-left: black 3px solid; background-color:#00000099; border-color: #ffffff; box-shadow: 0px 0px white, 0em 0 0.1em black; border-radius: 45px; color: #ffffff; text-shadow: rgb(255 255 255) 0px 0px 1px; }');
      addGlobalStyle('#settings > label{top: -5px; position: relative;');
      addGlobalStyle('#cerrarCaja:hover { background-color: blue ;color: white; border-color: white; text-shadow: text-shadow: rgb(255 255 255) 0px 0px 1px; }');
      addGlobalStyle('#cerrarCaja {box-shadow: 0px 0px black, 0em 0 0.1em black; border-bottom: black 3px solid; border-bottom: black 3px solid; border-top: black 3px solid; border-right: black 3px solid; border-left: black 3px solid; background-color:#00000099; border-color: #ffffff; box-shadow: 0px 0px white, 0em 0 0.1em black; border-radius: 45px; color: #ffffff; text-shadow: rgb(255 255 255) 0px 0px 1px; }');

      window.addEventListener('load', function() {
          var finalLeaderboardDialog = document.getElementById('finalLeaderboardDialog');
          if (finalLeaderboardDialog) {
              document.addEventListener('keydown', function(event) {
                  if (event.key === 'Escape' || event.key === 'Esc') {
                      finalLeaderboardDialog.style.display = 'none';
                  }
              });
          }
      });



      function activarFiltroInversion(contenedor, imagen) {
          contenedor.addEventListener('mouseover', function() {
              imagen.style.filter = 'invert(100%)';
          });

          contenedor.addEventListener('mouseout', function() {
              imagen.style.filter = 'invert(0%)';
          });
      }

      var playBtnContenedor = document.querySelector('#playBtn');
      var playBtnImagen = document.querySelector('#playBtn > img');
      activarFiltroInversion(playBtnContenedor, playBtnImagen);

      var spectateBtnContenedor = document.querySelector('#spectateBtn');
      var spectateBtnImagen = document.querySelector('#spectateBtn > img');
      activarFiltroInversion(spectateBtnContenedor, spectateBtnImagen);

      var replayBtnContenedor = document.querySelector('#replayBtn');
      var replayBtnImagen = document.querySelector('#replayBtn > img');
      activarFiltroInversion(replayBtnContenedor, replayBtnImagen);

      const gamemodeList = document.getElementById("gamemode");
      gamemodeList.addEventListener("click", function() {
          gamemodeList.style.backgroundColor = "black";
          gamemodeList.style.color = "white";
          gamemodeList.style.border = "2px solid navy";
      });

      gamemodeList.addEventListener("blur", function() {
          gamemodeList.style.backgroundColor = "";
          gamemodeList.style.color = "";
          gamemodeList.style.border = "";
      });
      var YeniRenkKodu = 'black';
      var Yapılmasıgereken = CanvasRenderingContext2D.prototype.fillRect;

      CanvasRenderingContext2D.prototype.fillRect = function() {
          var x = arguments[0];
          var y = arguments[1];
          var w = arguments[2];
          var h = arguments[3];

          if (x == 0 && y == 0 && w == this.canvas.width && h == this.canvas.height) {
              this.fillStyle = YeniRenkKodu;
          }

          return Yapılmasıgereken.apply(this, arguments);
      };

      /////////////////////////////////////FUNCIONES DEL JUEGO/////////////////////////////////////



      let presionandoH = !1,
          intervalID;
      document.addEventListener("keydown", function(e) {
          72 == e.keyCode && 0 == $("input:focus").size() && (presionandoH ? (presionandoH = !1, clearInterval(intervalID)) : (presionandoH = !0, presionarBotonInfinitasVeces()))
      });
      var elemento = document.getElementById("idTwitch");
      elemento && (elemento.innerHTML = '<a href="/tr/sikayet_yaz" target="_blank"> Apoyo</a>');

      function presionarBotonInfinitasVeces() {
          let e = document.querySelector("#playBtn");
          e && (e.click(), intervalID = setInterval(function() {
              presionandoH ? e.click() : clearInterval(intervalID)
          }, 100))
      }
      window.addEventListener("keydown", keydown);
      var imlost = 25,
          macrosRunning = !1,
          macroTimeouts = [];

      function keydown(e) {
          71 == e.keyCode && 0 == $("input:focus").size() && reaparecer(), 67 == e.keyCode && 0 == $("input:focus").size() && (macrosRunning ? stopMacros() : startMacros()), 66 == e.keyCode && 0 == $("input:focus").size() && sabit(), 78 == e.keyCode && 0 == $("input:focus").size() && (dikey(), split()), 77 == e.keyCode && 0 == $("input:focus").size() && (yanlama(), split()), 88 == e.keyCode && 0 == $("input:focus").size() && beyto(), 70 == e.keyCode && 0 == $("input:focus").size() && (beytociftspace(), setTimeout(beytociftspace, 5.0634212 * imlost))
      }

      function startMacros() {
          macrosRunning = !0, presionarTeclasInfinitasVeces(), macroZ(), macroX()
      }

      function stopMacros() {
          macrosRunning = !1;
          for (var e = 0; e < macroTimeouts.length; e++) clearTimeout(macroTimeouts[e]);
          macroTimeouts = [], $("body").trigger($.Event("keyup", {
              keyCode: 83
          })), $("body").trigger($.Event("keyup", {
              keyCode: 65
          })), $("body").trigger($.Event("keyup", {
              keyCode: 90
          })), $("body").trigger($.Event("keyup", {
              keyCode: 88
          }))
      }

      function presionarTeclasInfinitasVeces() {
          intervalID = setInterval(function() {
              if (presionandoH) {
                  let e = new KeyboardEvent("keydown", {
                      keyCode: 65
                  });
                  document.dispatchEvent(e);
                  let n = new KeyboardEvent("keyup", {
                      keyCode: 65
                  });
                  document.dispatchEvent(n);
                  let o = new KeyboardEvent("keydown", {
                      keyCode: 83
                  });
                  document.dispatchEvent(o);
                  let t = new KeyboardEvent("keyup", {
                      keyCode: 83
                  });
                  document.dispatchEvent(t)
              } else clearInterval(intervalID)
          }, 100)
      }

      function macroZ() {
          macrosRunning && $("body").trigger($.Event("keydown", {
              keyCode: 90
          }))
      }

      function macroX() {
          macrosRunning && $("body").trigger($.Event("keydown", {
              keyCode: 88
          }))
      }

      function reaparecer() {
          var e = document.getElementById("gamemode");
          if (e.options.length > 1) {
              var n = e.selectedIndex,
                  o = n % e.options.length;
              o === n && (o %= e.options.length), e.selectedIndex = o, e.onchange(), setTimeout(() => {
                  e.selectedIndex = n, e.onchange(), $("#playBtn").trigger("click")
              }, 700)
          }
      }

      function sabit() {
          let e = window.innerWidth / 2,
              n = window.innerHeight / 2,
              o = document.querySelectorAll("canvas");
          o.forEach(o => {
              o.dispatchEvent(new MouseEvent("mousemove", {
                  clientX: e,
                  clientY: n
              }))
          })
      }

      function yanlama() {
          X = window.innerWidth / 0, Y = window.innerHeight / 25, $("canvas").trigger($.Event("mousemove", {
              clientX: X,
              clientY: Y
          }))
      }

      function dikey() {
          X = window.innerWidth / 25, Y = window.innerHeight / 0, $("canvas").trigger($.Event("mousemove", {
              clientX: X,
              clientY: Y
          }))
      }

      function split() {
          $("body").trigger($.Event("keydown", {
              keyCode: 32
          })), $("body").trigger($.Event("keyup", {
              keyCode: 32
          }))
      }

      function beyto() {
          $("body").trigger($.Event("keydown", {
              keyCode: 65
          })), $("body").trigger($.Event("keyup", {
              keyCode: 65
          }))
      }

      function beytociftspace() {
          $("body").trigger($.Event("keydown", {
              keyCode: 32
          })), $("body").trigger($.Event("keyup", {
              keyCode: 32
          }))
      }
      let espacioPresionado = !1,
          intervalIDEspacio;

      function presionarEspacio() {
          espacioPresionado || (espacioPresionado = !0, intervalIDEspacio = setInterval(function() {
              $("body").trigger($.Event("keydown", {
                  keyCode: 32
              })), $("body").trigger($.Event("keyup", {
                  keyCode: 32
              }))
          }, 1))
      }

      function liberarEspacio() {
          espacioPresionado && (espacioPresionado = !1, clearInterval(intervalIDEspacio))
      }
      document.addEventListener("keydown", function(e) {
          81 != e.keyCode || $("input:focus").size() || (presionarEspacio(), e.preventDefault())
      }), document.addEventListener("keyup", function(e) {
          81 == e.keyCode && (liberarEspacio(), e.preventDefault())
      });



      $(document).ready(() => {
          var txtSkin = $("#txtSkin");
          var skinFavori = $("#skinFavori");
          var urlPorDefecto = "https://i.ibb.co/7rpV6kw/imagen-2024-01-04-163936184.png";
          var urlNoDeseado = "https://cdn.agarz.com/.png";
          var currentImage = null;

          function cargarImagen(url, callback) {
              if (currentImage) {
                  // Cancelar la carga de la imagen anterior
                  currentImage.onload = currentImage.onerror = null;
              }

              var img = new Image();
              currentImage = img;

              img.onload = function() {
                  console.log('Imagen cargada:', url);
                  callback(true);
              };
              img.onerror = function() {
                  console.log('Error al cargar la imagen:', url);
                  callback(false);
              };
              img.src = url;
          }

          function obtenerNumeroDeURL() {
              // Obtener el número desde el elemento HTML
              var numeroElemento = $("#idUserDesktop > a:nth-child(3)").attr("href");

              // Verificar si el valor es nulo o indefinido
              if (numeroElemento) {
                  // Extraer el número de la cadena
                  var numero = numeroElemento.match(/\/(\d+)$/);
                  return numero ? numero[1] : null;
              } else {
                  // Manejar el caso en el que el valor es nulo o indefinido
                  console.error("El valor de numeroElemento es nulo o indefinido.");
                  return null;
              }
          }

          function construirUrlImagen2(numero, nombre) {
              // Construir el URL con el número y el nombre
              return "https://cdn.agarz.com/uid" + numero + "_" + nombre + ".png";
          }

          function actualizarBackground(nombre) {
              console.log('Actualizando fondo con nombre:', nombre);

              if (!nombre || nombre === urlNoDeseado) {
                  console.log('Nombre vacío o enlace no deseado. Estableciendo fondo por defecto.');
                  skinFavori.css("background-image", "url(" + urlPorDefecto + ")");
                  return;
              }
              var numero = obtenerNumeroDeURL();
              var urlImagen1 = "https://cdn.agarz.com/" + nombre + ".png";
              var urlImagen2 = "https://cdn.agarz.com/uid" + numero + "_" + nombre + ".png";

              cargarImagen(urlImagen1, function(cargada1) {
                  if (cargada1) {
                      console.log('Imagen 1 cargada con éxito.');
                      skinFavori.css("background-image", "url(" + urlImagen1 + ")");
                  } else {
                      console.log('Imagen 1 no cargada. Intentando con la segunda imagen.');
                      cargarImagen(urlImagen2, function(cargada2) {
                          if (cargada2) {
                              console.log('Imagen 2 cargada con éxito.');
                              skinFavori.css("background-image", "url(" + urlImagen2 + ")");
                          } else {
                              console.log('Imagen 2 no cargada. Estableciendo fondo por defecto.');
                              skinFavori.css("background-image", "url(" + urlPorDefecto + ")");
                          }
                      });
                  }
              });
          }


          function manejarCambioTexto() {
              var nombre = txtSkin.val().trim(); // Trim para eliminar espacios en blanco al inicio y al final
              var valorAnterior = txtSkin.data("valorAnterior");

              if (nombre !== valorAnterior) {
                  actualizarBackground(nombre);
                  txtSkin.data("valorAnterior", nombre);
              }
          }

          txtSkin.on("input", function() {
              setTimeout(function() {
                  manejarCambioTexto();
              }, 800); // Puedes ajustar este valor según tus necesidades
          });

          var nombreInicial = txtSkin.val().trim(); // Trim para el valor inicial también
          txtSkin.data("valorAnterior", nombreInicial);
      });




      $(document).ready(function() {
          var nuevoDiv = $('<div>').attr('id', 'contenido-div');
          $('#helloDialog').append(nuevoDiv);
          var skinFavori = $('#skinFavori');
          if (skinFavori.length) {
              $('#contenido-div').append(skinFavori);
          }

      });


      $(() => {
          var ekleCanvas = $("#chat_textbox");
          var panel = document.createElement("button");
          panel.innerText = "PALETA DE COLORES";
          panel.setAttribute("id", "panel");
          ekleCanvas.after(panel);

          $("#panel").css({
              position: "absolute",
              "font-size": "14px",
              bottom: "500px",
              left: "5px",
              "border-radius": "40px",
              color: "rgb(255, 255, 255)",
              cursor: "pointer",
              width: "180px",
              height: "22px"
          });


          if (event.key === "Escape") {
              // Ocultar la caja con la clase 'cajaConContenido'
              $(".cajaConContenido").css("display", "none");
          }

          var paletaCreada = false;

          $("#panel").click(() => {
              if (!paletaCreada) {
                  crearCajaConContenido();
                  paletaCreada = true;
              }

              toggleCajaConContenido();
          });

          function crearCajaConContenido() {
              var caja = document.createElement("div");
              caja.setAttribute("id", "cajaConContenido");
              document.body.appendChild(caja);

              var fondoImagen = document.createElement("div");
              fondoImagen.setAttribute("id", "fondoImagen");
              caja.appendChild(fondoImagen);

              agregarPaletaDeColores(caja);

              $(caja).css({
                  "display": "none",
                  "position": "absolute",
                  "top": "50%",
                  "left": "50%",
                  "transform": "translate(-50%, -50%) scale(0.8)",
                  "width": "400px",
                  "max-height": "600px",
                  "overflow-y": "auto",
                  "color": "#000 !important",
                  "border": "3px solid #0000",
                  "border-radius": "10px",
                  "padding": "20px",
                  "background-color": "#000000a3",
                  "box-shadow": "0 0 10px rgba(0, 0, 0, 0.3)",
                  "transition": "opacity 0.3s ease-out, transform 0.3s ease-out",
              });

              $("body").append(caja);

              $("#cerrarCaja").click(() => {
                  cerrarCajaConContenido();
              });
          }

          function toggleCajaConContenido() {
              if ($("#cajaConContenido").is(":visible")) {
                  cerrarCajaConContenido();
              } else {
                  abrirCajaConContenido();
              }
          }

          function abrirCajaConContenido() {
              $("#cajaConContenido").show();

              setTimeout(() => {
                  $("#cajaConContenido").css({
                      "opacity": "1",
                      "transform": "translate(-50%, -50%) scale(1)",
                  });
              }, 50);
          }

          function cerrarCajaConContenido() {
              $("#cajaConContenido").css({
                  "opacity": "0",
                  "transform": "translate(-50%, -50%) scale(0.8)",
              });

              setTimeout(() => {
                  $("#cajaConContenido").hide();
              }, 300);
          }

          function agregarPaletaDeColores(caja) {
              var variables = [
                  "Color del borde", "Color codigo cuenta", "Color de gold", "Color del premio", "Color del record",
                  "Color del tiempo", "Color del borde del jugador", "Color del clan", "Color del clan en mapa",
                  "Tabla de los jugadores", "Color borde virus", "Color de la raya del mouse",
                  "Chat del clan", "Fondo del chat", "colordelultimoganador",
                  "colordetodoslosjugadores", "mensajeglobaldewins", "posicion",
                  "colordelasala", "colorfondosala", "colorskor", "colordeltimedelprize", "Color del Mapa"
              ];
              variables.forEach((variable) => {
                  var contenedorVariable = document.createElement("div");
                  contenedorVariable.style.marginBottom = "15px";

                  var nombreVariable = document.createElement("span");
                  nombreVariable.innerText = variable + ": ";
                  nombreVariable.style.marginRight = "10px";
                  contenedorVariable.appendChild(nombreVariable);

                  var selectorColor = document.createElement("input");
                  selectorColor.setAttribute("type", "color");
                  selectorColor.value = currentColors[variable];

                  selectorColor.addEventListener("input", function() {
                      asignarColor(variable, selectorColor.value);
                  });

                  contenedorVariable.appendChild(selectorColor);
                  caja.appendChild(contenedorVariable);
              });

          }
          var colorborder2 = ColorManager.Dark.Border = 'blue';
          var colorborder3 = ColorManager.Light.Border = 'blue';
          var colorgold2 = ColorManager.Dark.Gold = '#6f00ff';
          var colorgold3 = ColorManager.Light.Gold = '#6f00ff';
          var colorprize2 = ColorManager.Dark.Prize = '#6f00ff';
          var colorprize3 = ColorManager.Light.Prize = '#6f00ff';
          var clanlista2 = ColorManager.Dark.Name_SameClanOnList = '#04ffc4';
          var clanlista3 = ColorManager.Light.Name_SameClanOnList = '#04ffc4';
          var clanmapa2 = ColorManager.Dark.Name_SameClanOnMap = '#04ffc4';
          var clanmapa3 = ColorManager.Light.Name_SameClanOnMap = '#04ffc4';
          var colordetablafondoplayers2 = ColorManager.Current.Leaderboard_Background = '#0000';
          var colordetablafondoplayers3 = ColorManager.Light.Leaderboard_Background = '#0000';
          var color_chatacc2 = ColorManager.Dark.Chat_AccNo = '#FFFFFF';
          var color_chatacc3 = ColorManager.Light.Chat_AccNo = '#FFFFFF';
          var chatdeclancolor2 = ColorManager.Dark.ChatC = '#04ffc4';
          var chatdeclancolor3 = ColorManager.Light.ChatC = '#04ffc4';
          var fondodelchat2 = ColorManager.Dark.Chat_BG = '#0000';
          var fondodelchat3 = ColorManager.Light.Chat_BG = '#0000';
          var colordelultimoganador2 = ColorManager.Dark.Leaderboard_LastWinner = '#aeff00';
          var colordelultimoganador3 = ColorManager.Light.Leaderboard_LastWinner = '#aeff00';
          var colordetodoslosjugadores2 = ColorManager.Dark.Name_Default = '#FFFFFF';
          var colordetodoslosjugadores3 = ColorManager.Light.Name_Default = '#FFFFFF';
          var mensajeglobaldewins2 = ColorManager.Dark.TopMessage = '#34FFƛ3';
          var mensajeglobaldewins3 = ColorManager.Light.TopMessage = '#34FFƛ3';
          var posicion2 = ColorManager.Dark.Position = '#FFFFFF';
          var posicion3 = ColorManager.Light.Position = '#FFFFFF';
          var colordelasala2 = ColorManager.Dark.RoomInfo = '#FFFFFF';
          var colordelasala3 = ColorManager.Light.RoomInfo = '#FFFFFF';
          var colorfondosala2 = ColorManager.Dark.TimerAndRecord_BG = '#0000';
          var colorfondosala3 = ColorManager.Light.TimerAndRecord_BG = '#0000';
          var colorskor2 = ColorManager.Dark.Score = '#FFFFFF';
          var colorskor3 = ColorManager.Light.Score = '#FFFFFF';
          var colordeltimedelprize2 = ColorManager.Dark.GoldToPrize = '#00e1ff';
          var colordeltimedelprize3 = ColorManager.Light.GoldToPrize = '#00e1ff';
          var colormapa2 = ColorManager.Dark.Map_BG = "#0000";
          var colormapa3 = ColorManager.Light.Map_BG = "#0000";
          var currentColors = {

              "Color del borde": (ColorManager.Current.Border = "#0000FF"),
              "Color codigo cuenta": (ColorManager.Current.UserID = "#FFFFFF"),
              "Color de gold": (ColorManager.Current.Gold = '#6f00ff'),
              "Color del premio": (ColorManager.Current.Prize = '#6f00ff'),
              "Color del record": (ColorManager.Current.TimerAndRecord_Record = '#0000ff'),
              "Color del tiempo": (ColorManager.Current.TimerAndRecord_Timer = '#FFFFFF'),
              "Color del borde del jugador": (ColorManager.Current.CellBorder = '#0000FF'),
              "Color del clan": (ColorManager.Current.Name_SameClanOnList = '#04ffc4'),
              "Color del clan en mapa": (ColorManager.Current.Name_SameClanOnMap = '#04ffc4'),
              "Tabla de los jugadores": (ColorManager.Current.Leaderboard_Background = '#0000'),
              "Color borde virus": (ColorManager.Current.Virus_Line = '#00FF00'),
              "Color de la raya del mouse": (ColorManager.Current.LockMouse = '#0000FF'),
              "Chat del clan": (ColorManager.Current.ChatC = '#04ffc4'),
              "Fondo del chat": (ColorManager.Current.Chat_BG = '#0000'),
              "colordelultimoganador": (ColorManager.Current.Leaderboard_LastWinner = '#aeff00'),
              "colordetodoslosjugadores": (ColorManager.Current.Name_Default = '#FFFFFF'),
              "mensajeglobaldewins": (ColorManager.Current.TopMessage = '#0000FF'),
              "posicion": (ColorManager.Current.Position = '#FFFFFF'),
              "colordelasala": (ColorManager.Current.RoomInfo = '#FFFFFF'),
              "colorfondosala": (ColorManager.Current.TimerAndRecord_BG = '#0000'),
              "colorskor": (ColorManager.Current.Score = '#FFFFFF'),
              "colordeltimedelprize": (ColorManager.Current.GoldToPrize = '#00e1ff'),
              "Color del Mapa": (ColorManager.Current.Map_BG = '#0000')
          };


          $(document).keydown((e) => {
              if (e.which === 27) {
                  cerrarCajaConContenido();
              }
          });

          function asignarColor(variable, color) {
              switch (variable) {
                  case "Color del borde":
                      ColorManager.Current.Border = color;
                      break;
                  case "Color codigo cuenta":
                      ColorManager.Current.UserID = color;
                      break;
                  case "Color de gold":
                      ColorManager.Current.Gold = color;
                      break;
                  case "Color del premio":
                      ColorManager.Current.Prize = color;
                      break;
                  case "Color del record":
                      ColorManager.Current.TimerAndRecord_Record = color;
                      break;
                  case "Color del tiempo":
                      ColorManager.Current.TimerAndRecord_Timer = color;
                      break;
                  case "Color del borde del jugador":
                      ColorManager.Current.CellBorder = color;
                      break;
                  case "Color del clan":
                      ColorManager.Current.Name_SameClanOnList = color;
                      break;
                  case "Color del clan en mapa":
                      ColorManager.Current.Name_SameClanOnMap = color;
                      break;
                  case "Tabla de los jugadores":
                      ColorManager.Current.Leaderboard_Background = color;
                      break;
                  case "Color borde virus":
                      ColorManager.Current.Virus_Line = color;
                      break;
                  case "Color de la raya del mouse":
                      ColorManager.Current.LockMouse = color;
                      break;
                  case "Chat del clan":
                      ColorManager.Current.ChatC = color;
                      break;
                  case "Fondo del chat":
                      ColorManager.Current.Chat_BG = color;
                      break;
                  case "colordelultimoganador":
                      ColorManager.Current.Leaderboard_LastWinner = color;
                      break;
                  case "colordetodoslosjugadores":
                      ColorManager.Current.Name_Default = color;
                      break;
                  case "mensajeglobaldewins":
                      ColorManager.Current.TopMessage = color;
                      break;
                  case "posicion":
                      ColorManager.Current.Position = color;
                      break;
                  case "colordelasala":
                      ColorManager.Current.RoomInfo = color;
                      break;
                  case "colorfondosala":
                      ColorManager.Current.TimerAndRecord_BG = color;
                      break;
                  case "colorskor":
                      ColorManager.Current.Score = color;
                      break;
                  case "colordeltimedelprize":
                      ColorManager.Current.GoldToPrize = color;
                      break;
                  case "Color del Mapa":
                      ColorManager.Current.Map_BG = color;
                      break;
                  default:
                      console.warn("Variable no reconocida:", variable);
                      return;
              }
          }
      });



      ////////////////////////////////////////////////////////



      console.log('called');
      var interval;
      var switchy = false;
      $(document).on('keydown', function(e) {
          console.log('keydown e.keyCode="' + e.keyCode + '"');
          if (e.keyCode == 88) {
              console.log('keydown 88, switchy ' + switchy);
              if (switchy) {
                  return;
              }
              switchy = true;
              interval = setInterval(function() {
                  console.log('firing');
                  $("body").trigger($.Event("keydown", {
                      keyCode: 83
                  }));
                  $("body").trigger($.Event("keyup", {
                      keyCode: 83
                  }));
                  $("body").trigger($.Event("keydown", {
                      keyCode: 65
                  }));
                  $("body").trigger($.Event("keyup", {
                      keyCode: 65
                  }));
              }, -450000);
          }
      })

      $(document).on('keyup', function(e) {
          console.log('keyup e.keyCode="' + e.keyCode + '"');
          if (e.keyCode == 88) {
              console.log('stop firing');
              switchy = false;
              clearInterval(interval);
              return;
          }
      })
      var a = document.getElementsByTagName("img");
      var b = /imgs\/flag-(tr|en|es|de|ru1)\.png/;
      for (var c = a.length - 1; c >= 0; c--) {
          var d = a[c].src;
          if (b.test(d)) {
              a[c].remove();
          }
      }
      var helloDialogx = document.getElementById("helloDialog");
      var newDiv = document.createElement("div");
      newDiv.id = "myDiv";
      newDiv.style.display = "flex";
      newDiv.innerHTML = `
    <a href="https://agarz.com/es/howtoplay" target="_blank" style="display: flex; align-items: center; text-decoration: none; color: black;">
        Como jugar
    </a>
`;
      helloDialogx.appendChild(newDiv);

      var newDiv2 = document.createElement("div");
      newDiv2.id = "Info";
      newDiv2.innerHTML = '<span>Informaci\xf3n</span>';
      newDiv2.style.cursor = "pointer";
      newDiv2.addEventListener("click", toggleCuadroDialogo);
      helloDialogx.appendChild(newDiv2);

      var modalAbierto = false;

      function toggleCuadroDialogo() {
          if (modalAbierto) {
              cerrarCuadroDialogo();
          } else {
              var e = $("<div>").attr("id", "modal").css({
                  display: "none",
                  position: "absolute",
                  top: "75%",
                  left: "50%",
                  transform: "translate(-50%, -50%) scale(0.8)",
                  width: "450px",
                  "z-index": "233",
                  "max-height": "600px",
                  "overflow-y": "auto",
                  color: "black !important",
                  border: "3px solid #0000",
                  "border-radius": "30px",
                  padding: "20px",
                  "font-size": "18px",
                  "background-color": "rgb(255 255 255 / 82%)",
                  "box-shadow": "0 0 10px rgba(0, 0, 0, 0.3)",
                  transition: "opacity 0.3s ease-out, transform 0.3s ease-out"
              });

              e.html(`
            <div>
                1. Reaparicion [G]<br>
                2. Space doble [F]<br>
                3. Space infinitos [Q]<br>
                4. Funcion para torneos y rekor [H]<br>
                5. Nueva Interfaz de Skines Favoritas[en prueba]<br>
                6. Spaces para arriba y abajo [N]<br>
                7. Spaces para derecha y izquierda [M]<br>
                8. Mouse al centro quieto [B]<br>
                9. Flechas de direccion [←][→][↑][↓]<br>
                10. Mostrador de skines<br>
                11. Paleta de Colores<br>
                12. FFA rapida<br>
            </div>
        `);

              $("body").append(e);
              e.fadeIn();
              modalAbierto = true;
              e.on("click", function(e) {
                  e.target === this && cerrarCuadroDialogo();
              });
              $(document).on("keydown", function(e) {
                  "Escape" === e.key && cerrarCuadroDialogo();
              });
          }
      }

      function cerrarCuadroDialogo() {
          $("#modal").fadeOut(function() {
              $(this).remove();
          });
          modalAbierto = false;
          $(document).off("keydown");
      }

      $(newDiv).on('click', function() {
          var screenWidth = window.screen.width;
          var screenHeight = window.screen.height;
          var popupWidth = 600;
          var popupHeight = 600;
          var left = (screenWidth - popupWidth) / 2;
          var top = (screenHeight - popupHeight) / 2;
          window.open('https://agarz.com/es/howtoplay', '_blank', 'width=' + popupWidth + ', height=' + popupHeight + ', left=' + left + ', top=' + top);
      });


      var skinPopup = document.querySelector('.skin-popup');
      var hell2oDialog = document.getElementById('helloDialog');
      hell2oDialog.appendChild(skinPopup);




      $("#idUserDesktop > a:nth-child(7)").hide();
      $("#idUserDesktop > a:nth-child(9)").remove();
      $("#idDiscord").hide();
      $("#idYayin").hide();
      $("#idFacebookPage").hide();
      $("#idUyari").hide();
      $("#idGooglePlay").hide();
      $("#instructions").hide();
      $("#idBottomInfo").hide();
      $("#imgBanner").remove();
      $("#yesno_settings > label:nth-child(16)").remove();
      $("#yesno_settings > label:nth-child(15)").remove();
      $("#showMessageOverlays").remove()
      $("#soundContainer > input[type=button]").hide();
      $(".btn-info").remove();
      $("#soundContainer > label").remove();
  });
