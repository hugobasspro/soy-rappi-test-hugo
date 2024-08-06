$(document).ready(function() {

  /**
   * Funciones de jQuery para efectos y accciones
   */

  var home = {

    videoSrc: "", // Variable para el video seleccionado
    videoTipo: "", // Variable para el tipo video seleccionado (youtube, vimeo) NOTA: Vimeo no está implementado aún

        /**
         * Ejecuta las funciones para inicializar la página
         */
        run: function(){
            this.videos_ini();
            this.scroll_reveal.ini();
            this.eventos();
        },

        /**
         * Eventos de jQuery
         */
        eventos: function(){
            $('#btnEnviar').on('click', function(e){
                home.sendContact();
            });
        },

        /**
         * Inicializa las funciones y eventos para el popup de videos
         */
        videos_ini: function(){

            $('.video-thumb').click(function() {
              home.videoSrc = $(this).data( "src" );
              home.videoTipo = $(this).data( "tipo" );
              console.log(home.videoSrc, home.videoTipo);
            });

            // when the modal is opened autoplay it
            $('#myModalVideo').on('shown.bs.modal', function (e) {
                // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
                $("#video").attr('src',home.videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" );

                console.log("VIDEO::::", $("#video").attr('src'));
            });

            // stop playing the youtube video when I close the modal
            $('#myModalVideo').on('hide.bs.modal', function (e) {
                // a poor man's stop video
                $("#video").attr('src',home.videoSrc);
            });
        },

        /**
         * Función que lanza efecto al scroll
         */
        scroll_reveal: {

            ini: function(){
                window.addEventListener("scroll", home.scroll_reveal.reveal);
            },

            reveal: function(){

                var reveals = document.querySelectorAll(".reveal");

                for (var i = 0; i < reveals.length; i++) {
                    var windowHeight = window.innerHeight;
                    var elementTop = reveals[i].getBoundingClientRect().top;
                    var elementVisible = 150;

                    if (elementTop < windowHeight - elementVisible) {
                        reveals[i].classList.add("active");

                        if (WURFL.is_mobile === false) {
                            //reveals[i].classList.add(reveals[i].dataset.effect);
                        }

                    }
                    else {
                        reveals[i].classList.remove("active");
                        if (WURFL.is_mobile === false) {
                            //reveals[i].classList.remove(reveals[i].dataset.effect);
                        }
                    }
                }
            },

        },

        /**
         * Función que envía la información
         */
        sendContact: function(){

            var nombre      = $("#inputNombre").val();
            var mail        = $("#inputMail").val();
            var telefono    = $("#inputTelefono").val();
            var mensaje     = $("#inputMensaje").val();
            var aceptar     = $("#inputAceptar").is(':checked') ? true : false;


            if(nombre==""){
                Swal.fire({
                    icon: 'warning',
                    title: 'Faltan datos',
                    text: 'Es necesario escribir un nombre',
                });

                  return;
            }

            if(mail==""){
                Swal.fire({
                    icon: 'warning',
                    title: 'Faltan datos',
                    text: 'Es necesario escribir un mail',
                });

                  return;
            }
            else if(!home.validateEmail(mail)){
                Swal.fire({
                    icon: 'warning',
                    title: 'Faltan datos',
                    text: 'Es necesario escribir un mail valido',
                });

                return;
            }

            if(telefono==""){
                Swal.fire({
                    icon: 'warning',
                    title: 'Faltan datos',
                    text: 'Es necesario escribir un teléfono',
                });

                  return;
            }

            if(!aceptar){
                Swal.fire({
                    icon: 'warning',
                    title: 'Acepta los terminos y condiciones',
                    text: 'Es necesario que aceptes los terminois y condiciones',
                });

                  return;
            }

            $("#overlay").fadeIn(300);　

            var url = "http://soyrappi.linkprojects.net/md-api/contacto.php";
            var method = 'post';

            formFieldsData = {
              nombre: nombre,
              mail: mail,
              telefono: telefono,
              mensaje: mensaje
            };

            // Envío los datos al API
            $.ajax({
                url: url,
                type: method,
                data: JSON.stringify(formFieldsData),
                headers: {
                    'srp-token': '8177265a26ec337f7e243ba02866a755',
                },
                cache: false,
                dataType: 'json',
                contentType: 'application/json',
                processData: false
            })
            .done(function() {
              $("#overlay").fadeOut(300);
              $('#contactForm')[0].reset();
              $('#contactoModal').modal('hide');
              console.log("ENVIANDO...");

              Swal.fire({
                icon: 'success',
                title: 'Listo',
                text: 'Gracias por ponerte en contacto con nosotros. Pronto nos comunicaremos contigo.',
              });

            })
            .fail((xhr, ajaxOptions, thrownError) => {

              $("#overlay").fadeOut(300);
              //$('#contactForm')[0].reset();
              $('#contactoModal').modal('hide');
              console.error("NO SE ENVIÓ EL MENSAJE...", );

              Swal.fire({
                icon: 'error',
                title: 'No se pudo enviar',
                text: 'Lo sentimos, no se pudo enviar el mensaje. Intenta más tarde.',
              });
            });
        },

        /**
         * Validación de mail
         */
        validateEmail: function(email){
            return email.match(
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        },

  };

  // Inicializo la función Home
  home.run();

});



