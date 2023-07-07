function playSound(e) {
    //Selects the audio tag that has data-key = e.keycode
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    
    //Selects the class of key the has data-key = e.keycode
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    
    //Stops the function from running when a key with no associated audio file is pressed.
    if(!audio) {
      return; 
    }

    audio.currentTime = 0; //Rewind sound to start on multiple press on same key
    audio.play();

    key.classList.add('playing');
  }

  function removeTransition(e) {
    //Ignores all transitions that are not a propertyName of 'transform'
    if(e.propertyName !== 'transform') {
      return ;
    }
    
    this.classList.remove('playing'); //'this' is equal to whatever the add event listner was called against in this case its equal to key. 
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  window.addEventListener('keydown', playSound);