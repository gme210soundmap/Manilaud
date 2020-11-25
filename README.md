# MANILAud

An interactive map that aims to help understand how people interpret sounds around them and the noise in their local area through soundscapes; to also help shape local noise policies and plans. Aside from this, it also wants to enable users to explore different areas in Metro Manila and somehow get the feeling of being there in that particular place despite the lockdowns and isolation caused by the COVID-19 pandemic, through the semantic descriptions of the uploader, the soundscape attached to the location, and a photo related to the location.

--
* This is a crowdsourcing soundmap where users can send sound recordings related to a location; or a soundscape of that particular place. The focus of the map is in Metro Manila, so possible soundscapes could be sound recordings from areas such as the MRT/LRT, near bridges and landmarks, parks, etc.

* When submitting the soundscape, the user would have to include their perceived level of valence or the affective quality referring to the intrinsic attractiveness/goodness (positive valence) or averseness/badness (negative valence) of the said soundscape. This could be on a scale of -5 to 5.

* Then, once a soundcape is uploaded on the map, users/map visitors may also determine their level of interest on the sound using the same scale of -5 to 5.

* By plotting the valence and interest levels, the level of perceived annoyance or the perceived noise level of users on the soundscape may then be projected.
    * Low Valence, Low Interest: High Annoyance
    * High Valence, Low Interest: Slight/Moderate Annoyance
    * Low Valence, High Interest: Slight/Moderate Annoyance
    * High Valence, High Interest: None at all (Annoyance)

[![preview screenshot](/assets/PLA.png)](https://)  
 <a href="https://gme210soundmap.github.io/Manilaud/?time=day" target="_blank">Go to the map/website.</a> 

By plotting these attributes, we could help understand how people interpret sounds around them and the noise in their local area. This could help shape local noise policies and plans.

Aside from this, a soundscape map may also enable users to explore different areas and somehow get the feeling of being there in that particular place despite the lockdowns and isolation caused by the pandemic, through the semantic descriptions of the uploader, the soundscape attached to the location, and a photo related to the location.

### Project by:
⋅⋅*<a href="https://facebook.com/andisomething" target="_blank">Andi Tabinas</a>
⋅⋅*<a href="https://facebook.com/kennethquisado" target="_blank">Kenneth Quisado</a>
⋅⋅*<a href="https://facebook.com/jeweltemplonuevo" target="_blank">Jewel Templonuevo</a>

### Map by:
<a href="https://facebook.com/andisomething" target="_blank">Andi Tabinas</a>

## We would like to thank NTUT's Sounds of Taipei and Think About Sound for their amazing project which inspired us to do this.


Libraries used
-

* <a href="https://leafletjs.com" target="_blank">leaflet.js v1.4</a>
* <a href="https://www.mapbox.com/mapbox-studio/" target="_blank">Mapbox Studio</a>
* <a href="https://jquery.com" target="_blank">jquery.js v3.2.1</a>

Contribute your sound
-

<a href="https://forms.gle/CxhxLbpsrDeddRCq5" target="_blank">Upload form</a>

Database structure `places.json`
-

`id`: exact name of the sound and photo file – name in <a href="https://en.wikipedia.org/wiki/Camel_case " target="_blank">camelCase</a>  
sound file needs to be at *./assets/sounds*  
photo file needs to be at *./assets/photos* in *jpg (600 x 400px)

`label`: the description of the audio which will be displayed on the photo and the valence and interest as rated by the uploader and users, respectively

`locationshare`: the url to the location on the map, which opens when doubleclicking a dot. This url will appear when the user zooms in to the location in the map and drops the locationshare pin on it then clicking "get url". When contributing a sound, a contributor will be asked to provide this url.
[![locationshare](/assets/locationshare.png)](https://gme210soundmap.github.io/Manilaud/?time=night) 

`vol`:  how lound the song should be played on a scale from 0 (no sound) to 1 (maximum)

`db`:   how loud the song is on a scale from 0 to 1   
        that creates the size of the circle when hovered

`x`:   Latitude coordinate in decimal number

`y`:   Longitude coordinate in decimal number

`type`: The location types will be general:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `location`: the particular soundscape 

`time`: was the sound recorded by `day` or by `night`? These soundscapes will be reflected on the map mode depending on when these sounds were recorded.
[![day](/assets/toggle-day.svg)](https://) [![day](/assets/toggle-night.svg)](https://)  

`author`: Who recorded the sound   
[fist name] [last name]


--

## Based on the Project and Github Repository: <a href="https://github.com/donatuswolf/Sounds-of-Taipei" target="_blank">Sounds of Taipei</a> and <a href="http://www.thinkaboutsound.co.uk/" target="_blank">Think About Sound Map</a>
