 document.querySelector('.button-list').addEventListener('click', function(e){
     //console.log(e.target.classList == 'button');
     if(e.target.classList == 'button'){
        type = e.target.getAttribute('data-missile-type');
        payload = e.target.getAttribute('data-missile-payload');
        sound = e.target.getAttribute('data-missile-sound');
        action = e.target.getAttribute('data-action-type');
        path = e.target.getAttribute('data-path');
        soundPath = e.target.getAttribute('data-sound-path');

        message.textContent = action + " " + payload + " " + type + "! " + sound;
        document.querySelector('#image img').setAttribute('src', path);
        var mp3 = new Audio(soundPath);
        mp3.play();
     }




    })