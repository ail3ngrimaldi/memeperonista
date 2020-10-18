// let button = document.querySelector('.button');
// let title = document.querySelector('.title');
// let content = document.querySelector('.lorem-container');

// button.addEventListener('click', function(){ 
   // var newMeme = [];


// example array with img =====> var myPix = new Array("images/lion.jpg", "images/tiger.jpg", "images/bear.jpg");
//     let meme = new Meme ("meme1.jpg",); //[ meme1 ,'El Justicialismo necesita apóstoles y para ser apóstol hay que estar dispuesto a ser héroe, y solamente los fanáticos de amor por una causa son capaces de morir por un ideal','El Justicialismo ha dejado de ser la causa de un hombre para ser la causa del pueblo, y por ella sí valdría la pena darlo todo, incluso la vida','Gobernar es fácil, lo difícil es conducir','La verdadera democracia es aquella donde el gobierno hace lo que el pueblo quiere y defiende un solo interés: el del pueblo','Yo llevo en mis oídos la más maravillosa música, que, para mí, es la palabra del pueblo argentino','Quien me quiera seguir, que me siga y quien me quiera acompañar, que me acompañe','Para conducir a un pueblo la primera condición es que uno haya salido del pueblo, que sienta y piense como el pueblo. Quien se dedica a la conducción debe ser profundamente humanista: el conductor siempre trabaja para los demás, jámas para él','No hay peor cosa que un bruto con inquietudes','Todos debemos ser artífices del destino común, pero ninguno instrumento de la ambición de nadie','La única verdad es la realidad']
//     for (var i = 0; i < 10; i++) {
//         var randomMeme = meme[Math.floor(Math.random() * meme.length)];
//         newMeme.push(randomMeme);

//         content.style.backgroundColor = '#84a9ac';
//         content.innerText = newMeme.join(' ')
       
//     }
// });

function generator() {
    
    for(let index = 0; index < 21; index++) {
        var x = Math.floor((Math.random()*21)+1);
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