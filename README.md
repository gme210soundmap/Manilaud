# MANILAud: Metro Manila Soundscapes

An interactive map that aims to help understand how people interpret sounds around them and the noise in their local area through soundscapes; to also help shape local noise policies and plans. Aside from this, it also wants to enable users to explore different areas in Metro Manila and somehow get the feeling of being there in that particular place despite the lockdowns and isolation caused by the COVID-19 pandemic, through the semantic descriptions of the uploader, the soundscape attached to the location, and a photo related to the location.

Perceived Level of Annoyance (Perceived Noise Level of a Location)
-
#### Help us get the Perceived Level of Annoyance over particular locations or soundscapes by providing your 'Level of Interest' on each soundscape on the map after listening to them. To help us, please <a href="https://forms.gle/izPaGWMCVn3ScE5X7" target="_blank">go to this link</a>.  To understand more about it, please read below:

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

- <a href="https://public.tableau.com/views/PercievedLevelofAnnoyanceofSoundscapes/Dashboard1?:language=en&:display_count=no&:showVizHome=no&:showShareOptions=false" target="_blank">PLA Plots of Submitted Soundscapes per Metro Manila City/Municipality</a>
![preview screenshot](/assets/PLAPlot.png)

- <a href="https://public.tableau.com/views/PercievedLevelofAnnoyanceofSoundscapes/Dashboard2?%3Alanguage=en&%3Adisplay_count=no&%3AshowVizHome=no&%3AshowShareOptions=false#3" target="_blank">Metro Manila PLA Map</a> 

### Project by:
- <a href="https://facebook.com/andisomething" target="_blank">Andi Tabinas</a>
- <a href="https://www.facebook.com/kaquisado/" target="_blank">Kenneth Quisado</a>
- <a href="https://www.facebook.com/jewel.templonuevo/" target="_blank">Jewel Templonuevo</a>

### Map by:
<a href="https://public.tableau.com/profile/spatially4u#!/" target="_blank">Andi Tabinas</a>

### Project Adviser:
<a href="http://dge.upd.edu.ph/dge/" target="_blank">Prof. Edgardo Macatulad, UP Diliman DGE</a>

#### We would like to thank NTUT's Sounds of Taipei and Think About Sound for their amazing project which inspired us to do this.


Libraries used
-

* <a href="https://leafletjs.com" target="_blank">leaflet.js v1.4</a>
* <a href="https://www.mapbox.com/mapbox-studio/" target="_blank">Mapbox Studio</a>
* <a href="https://jquery.com" target="_blank">jquery.js v3.2.1</a>

Contribute your sound
-

<a href="https://forms.gle/qd69PJvNmUwfgnFx6" target="_blank">Upload form</a>

[![preview screenshot](/assets/guide.png)](https://)  
 <a href="https://gme210soundmap.github.io/Manilaud/assets/guide1.png" target="blank">Uploading Guide</a> 

Database structure `places.json`
-

`id`: The exact filename of the sound and photo in <a href="https://en.wikipedia.org/wiki/Camel_case " target="_blank">CamelCase</a>. The filenames for both the sound and photo for one soundscape/location should exactly be the same. (E.g. **SunkenGarden.mp3** and **SunkenGarden.jpg**)  
sound file needs to be at *./assets/sounds*  
photo file needs to be at *./assets/photos* in *jpg (600 x 400px)

`label`: The description of the audio which will be displayed on the photo and the valence and interest as rated by the uploader and users, respectively. (E.g. **"UP Sunken Garden - Since less people are here than usual, the quiet rustling of leaves may be heard in between the sounds of passing vehicles. | Valence: 5; Interest: 4; PLA: None at all."**)

`url / locationshare`: The url to the location on the map. This url will appear when the user zooms in to the location in the map and drops the locationshare pin on it then clicking "get url". When contributing a sound, a contributor will be asked to provide this url.
[![locationshare](/assets/locationshare.png)](https://gme210soundmap.github.io/Manilaud/?time=night) 

`x`:   Latitude coordinate in decimal number

`y`:   Longitude coordinate in decimal number

`type`: The location types will be general:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `location`: the particular soundscape 

`time`: Was the sound recorded during the `day` or during the `night`? These soundscapes will be reflected on the map mode depending on when these sounds were recorded.
[![day](/assets/toggle-day.svg)](https://) [![day](/assets/toggle-night.svg)](https://)  

`author`: Who recorded the sound?   
[fist name] or [nickname]


--

## Based on the Project and Github Repository: <a href="https://github.com/donatuswolf/Sounds-of-Taipei" target="_blank">Sounds of Taipei</a> and <a href="http://www.thinkaboutsound.co.uk/" target="_blank">Think About Sound Map</a>
