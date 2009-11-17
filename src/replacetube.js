function generateFLV(fmt) {
   video_id = yt.getConfig('SWF_ARGS').video_id
   vid_hash = yt.getConfig('SWF_ARGS').t
   
   url = "http://www.youtube.com/get_video?fmt=" + fmt + "&video_id=" + video_id + "&t=" + vid_hash;
   return url;
}

var newElm = document.createElement("a");
newElm.href = "javascript:replaceYoutube(18);";
newElm.innerText = "SD Video";

document.getElementById("watch-actions-area").appendChild(newElm);

newElm = document.createElement("a");
newElm.href = "javascript:replaceYoutube(22);";
newElm.innerText = "HD Video";

document.getElementById("watch-actions-area").appendChild(newElm);

function replaceYoutube(fmt) {
   vidHtml = "<video src='" + generateFLV(fmt) + "' controls width='80%' height='80%'>Video Element</video>";
   document.getElementById("watch-player-div").innerHTML = vidHtml;
}

// if our script's class contains autostart..
if(document.getElementById('tubevideo_injected').className == "autoreplace") {
   replaceYoutube(18);
}
