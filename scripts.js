window.onload = function () {

    var radiusMin = 10;
    var radiusMax = 20;

    var color = {
        general: '#3a7bbf',
        location: '#e3de7f',
        event: '#4fa879'
    }

    //// day/night theme ////////

    var timeState = urlParam('time');
    
    if (timeState == null) {
        timeState = 'day';
    };


    function urlParam(name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results == null) {
            return null;
        } else {
            return decodeURI(results[1]) || 0;
        }
    }

    var timeTheme = {
        day: {
            mapUrl: 'https://api.mapbox.com/styles/v1/anditabinas/ckfmm1qyi2ld219ocj905c5ox/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5kaXRhYmluYXMiLCJhIjoiY2plejI3aHp3MDV3MjMzcW9ydXl2bHNmZiJ9.9h6j7BbkM-PUtK0zaZ1iUg',
            sidebarColor: '#FFFFFF',
            fontColor: '#646978',
        },
        night: {
            mapUrl: 'https://api.mapbox.com/styles/v1/anditabinas/ckfmquksu008j19pc7o25dv7m/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5kaXRhYmluYXMiLCJhIjoiY2plejI3aHp3MDV3MjMzcW9ydXl2bHNmZiJ9.9h6j7BbkM-PUtK0zaZ1iUg',
            sidebarColor: '#19191A',
            fontColor: '#FFFFFF',
        }

    }

    function toggleTheme() {
        var otherState
        if (timeState === 'day') {
            otherState = 'night'
        } else {
            otherState = 'day'
        };
        
        $('.sidebar').css('background', timeTheme[timeState].sidebarColor);
        $('.howto').css('color', timeTheme[timeState].fontColor);
        $('.legend li').css('color', timeTheme[timeState].fontColor);
        $('.legend li h3').css('color', timeTheme[timeState].fontColor);
        $('.credits a').css('color', timeTheme[timeState].fontColor);
        $('.more').css('color', timeTheme[timeState].fontColor);
        $('#toggleTime').css('color', timeTheme[timeState].fontColor);
        

        $('.logo').css('background-image', 'url(assets/logo-' + [timeState] + '.png');
        $('.logo').css('background-repeat', 'no-repeat');
        $('.logo').css('background-position', 'center center');

        $('.creditsright').css('background-image', 'url(assets/toggle-' + [timeState] + '.svg');
        $('.creditsright').css('background-repeat', 'no-repeat');
        $('.creditsright').css('background-position', 'center center');

        $('#toggleTime').attr('href', '?time=' + [otherState]);
    }

    toggleTheme();

    //// load map ////////

    var lat = 13.748111;
    var lng = 121.298916;
    var zoom = 6;

    var mymap = L.map('mapid').setView([lat, lng], zoom);
    L.tileLayer(timeTheme[timeState].mapUrl).addTo(mymap);

    //// load dataset from json ////////

    var places = $.getJSON('places.json', function (json) {
        // console.log(json); // show the JSON file content into console
        for (var i = 0; i < json.length; i++) {
            if (json[i].time === timeState) {                   // filter day/night
                drawPlace(json[i]);                             // load one circle
            }
        }

        //// create circles ////////

        function drawPlace(data) {
            var circle = L.circleMarker([data.x, data.y], {
                // color: data.type,
                color: color[data.type], // color cirlces with type-colors
                // fillColor: '#f03',
                fillOpacity: 1,
                radius: radiusMin // default size of cirlces
            }).addTo(mymap);

            //// mouseover ////////

            // circle.on('mouseover', function () {
            //     playSound(data.id, data.vol);
            //     // this.setRadius(radiusMax)
            //     this.setRadius(map(data.db, 0, 1, radiusMin, radiusMax)); // size of cirlces when hovered

            //     $('#photo').css('background-image', 'url(assets/photos/' + data.id + '.jpg)'); // load photo
            //     $('#label').html(data.label); // add text
            //     $('#photo').removeClass('hidden'); // show photo
            //     $('#photobg').removeClass('hidden');
            // });

            //// click ////////
            circle.on('click', function () {
                playSound(data.id, data.vol);
                // this.setRadius(radiusMax)
                this.setRadius(map(data.db, 0, 1, radiusMin, radiusMax)); // size of cirlces when hovered

                $('#photo').css('background-image', 'url(assets/photos/' + data.id + '.jpg)'); // load photo
                $('#label').html(data.label); // add text
                $('#photo').removeClass('hidden'); // show photo
                $('#photobg').removeClass('hidden');
            });

            //// doubleclick ////////

            // circle.on('dblclick', function () {
            //     if (data.googlemaps != '') {
            //         window.open(data.googlemaps, '_blank'); // create link
            //     }
            // });

            function playSound(name, volume) {
                var audio = new Audio('assets/sounds/' + name + '.mp3'); // load audio
                audio.volume = volume; // set to custom volume from dataset
                audio.loop = true;
                audio.play();

                //// mouseout ////////

                circle.on('mouseout', function () {
                    audio.pause();
                    circle.setRadius(radiusMin)
                    $('#photo').addClass('hidden'); // hide photo
                    $('#photobg').addClass('hidden');
                });
            }
        }
    });

    function map(x, in_min, in_max, out_min, out_max) {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
}
