function generator() {
    
    for(let index = 0; index < 24; index++) {
        var x = Math.floor((Math.random()*24)+1);
        document.getElementById('divImage').innerHTML=`
        <img src="img/meme${x}.jpeg"   style="width:450px;" / >`;
    }
}

function onlyOnePlaying() {

    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (!isChrome){
        $('#iframeAudio').remove()
    }
    else {
        $('#playAudio').remove()
    }
}