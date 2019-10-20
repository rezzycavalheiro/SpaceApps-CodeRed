ons.disableAutoStyling();
    var map;
    document.addEventListener("deviceready", function() {
      var div = document.getElementById("map_canvas");
      document.getElementById("teste").style.marginLeft = "80%";

      // Create a Google Maps native view under the map_canvas div.
      map = plugin.google.maps.Map.getMap(div);

      map.one(plugin.google.maps.event.MAP_READY, onMapInit);

    }, false);

    function onMapInit(){
        navigator.geolocation.getCurrentPosition(function (localizacao) {
            map.animateCamera({
                target: { lat: localizacao.coords.latitude, lng: localizacao.coords.longitude },
                zoom: 17
                //tilt: 60,
                //bearing: 140,
                //duration: 5000
            });

            var marcador = map.addMarker({
                position: { lat: localizacao.coords.latitude, lng: localizacao.coords.longitude },
                title: "Você está aqui",
                snippet: "E eu não estou brincando",
                //icon: image,
                animation: plugin.google.maps.Animation.BOUNCE
            });

            marcador.showInfoWindow();
        }, console.error);

        $.get("http://192.168.137.1:8080/teste/getHello", function(result){

        }).done(function(response){
            var image = "https://media.eadbox.com/system/uploads/medium/file/5dab61d12aef050033caef09/fire.png";
            var data = [];
            response.map(linha => {
                console.log("iterando dados... " + new Date().toLocaleString('pt-BR'));
                var obj = {
                    position: { lat: linha.latitude, lng: linha.longitude },
                    title: "Possível foco de incêndio",
                    //title: "FRP: " + linha.frp,
                    //snippet: "Confiança: " + linha.confianca + "%",
                    icon: image
                };
                data.push(obj);
                // console.log("mapeando... " + new Date().toLocaleString('pt-BR'));
                // map.addMarker({
                //     position: { lat: linha.latitude, lng: linha.longitude },
                //     title: "FRP: " + linha.frp,
                //     snippet: "Confiança: " + linha.confianca + "%",
                //     icon: image
                //     //animation: plugin.google.maps.Animation.BOUNCE
                // });
            })
            var baseArray = new plugin.google.maps.BaseArrayClass(data);
            baseArray.map(function (locationData) {
                console.log("adicionando marker... " + new Date().toLocaleString('pt-BR'));
                var marker = map.addMarker(locationData);
                marker.on(plugin.google.maps.event.MARKER_CLICK, function() {
                    //event.preventDefault();
                    event.stopPropagation();
                });
                marker.off(plugin.google.maps.event.MARKER_CLICK, function() {
                    //event.preventDefault();
                    event.stopPropagation();
                });
            });
        }).fail(function(response){
            console.log("deu ruim :(");
        })

    }