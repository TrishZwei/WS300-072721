    'use strict';
    document.querySelector('.button-list').addEventListener('click', function(event){
      //console.log(event); 
      //shows us all the properties/objects of the event object
      //alert(event.target); //tells us what element got clicked

      if(event.target.classList == 'button'){
        //if it has the class of button do the following:
        let allData = event.target.dataset; 
            //console.log(allData);

        //we're going to call an element without storing it in variable because it already is stored in a variable... just not one made by us.

        //es6 interpolation: takes value and inserts it in the variable space
        message.textContent = `${allData.actionType} ${allData.missilePayload} ${allData.missileType}! ${allData.missileSound}`;

       // let soundPath = allData.soundPath

         document.querySelector('#image img').setAttribute('src', allData.path)
         let mp3 = new Audio(allData.soundPath);
         mp3.play(); 
      }
    })
