window.onload = function(){ 
    var loadScreen = document.getElementById("loadingScreen");
    loadScreen.style.opacity = "0";
    document.body.style.overflowY = "auto";
    setTimeout(function(){loadScreen.style.display = "none"}, 300);
}




/*
textselect[0] = "Texthere"
*/

var textselect = new Array ();
textselect[0] = "A god incarnate. A city doomed."
textselect[1] = "I did as I wanted to do, so, now you should do the same."
textselect[2] = "What is that light?"
textselect[3] = "There is no immediate danger of the creature coming on shore."
textselect[4] = "Astounding... my god, it's evolving."
textselect[5] = "Take this to the Prime Minister immediately and call it the Yaguchi plan!"
textselect[6] = "Gojira deserves to live! Gojira is a god!"
textselect[7] = "It'll leave a trail of destruction in it's wake."
textselect[8] = "Godzilla. The name truly suits it."

var r = Math.floor(8*Math.random())
document.getElementById("shin_quotes").innerHTML = "&quot;" + textselect[r] + "&quot;";



// Mouseover/ Click sound effect- by JavaScript Kit (www.javascriptkit.com)
// Visit JavaScript Kit at http://www.javascriptkit.com/ for full source code

//** Usage: Instantiate script by calling: var uniquevar=createsoundbite("soundfile1", "fallbackfile2", "fallebacksound3", etc)
//** Call: uniquevar.playclip() to play sound

var html5_audiotypes = {
  //define list of audio file extensions and their associated audio types. Add to it if your specified audio file isn't on this list:
  mp3: "audio/mpeg",
  mp4: "audio/mp4",
  ogg: "audio/ogg",
  wav: "audio/wav",
};

function createsoundbite(sound) {
  var html5audio = document.createElement("audio");
  if (html5audio.canPlayType) {
    //check support for HTML5 audio
    for (var i = 0; i < arguments.length; i++) {
      var sourceel = document.createElement("source");
      sourceel.setAttribute("src", arguments[i]);
      if (arguments[i].match(/\.(\w+)$/i))
        sourceel.setAttribute("type", html5_audiotypes[RegExp.$1]);
      html5audio.appendChild(sourceel);
    }
    html5audio.load();
    html5audio.playclip = function () {
      html5audio.pause();
      html5audio.currentTime = 0;
      html5audio.play();
    };
    return html5audio;
  } else {
    return {
      playclip: function () {
        throw new Error("Your browser doesn't support HTML5 audio.");
      },
    };
  }
}

//Initialize two sound clips with 1 fallback file each:

var gojiroar = createsoundbite("/assets/audio/godzilla-roar.mp3");
var mechclick = createsoundbite("/assets/audio/mechanical-click.wav")

gojiroar.volume = 0.5;
mechclick.volume = 0.9;

/*
onclick="gojiroar.playclip()"
onmouseover="mechclick.playclip()"
*/




(function($){
$(document).ready(function(){
$("[title]").style_my_tooltips({
tip_follows_cursor: true,
tip_delay_time:0,
tip_fade_speed:0,
attribute:"title"
});
});
})(jQuery);



const tabTitle = document.title;
if (tabTitle !== "TITLE") {
  document.title = tabTitle + "「 Incident-1954 」";
}