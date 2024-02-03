function moveButton() {
    var button = document.getElementById("movingButton");

    // Calculate random positions
    var randomX = Math.floor(Math.random() * (window.innerWidth));
    var randomY = Math.floor(Math.random() * (window.innerHeight));

    // Apply new positions - sorry if u can see this lol
    // some absolutely beautful code ikr
    if (randomX > window.innerWidth/2){
      if (randomY > window.innerHeight/2){
        button.style.transform = `translate(${-randomX/2}px, ${-randomY/2}px`;
      } else {
        button.style.transform = `translate(${-randomX/2}px, ${randomY/2}px`;
      }
    } else {
      if (randomY > window.innerHeight/2){
        button.style.transform = `translate(${randomX/2}px, ${-randomY/2}px`;
      } else {
        button.style.transform = `translate(${randomX/2}px, ${randomY/2}px`;
      }
    }
  }

  function resetStyle() {          
    var button = document.getElementById("movingButton");
    setTimeout(function() {
      button.style.backgroundColor = "#f542d1";
      button.style.borderColor = "#fff";
      button.style.color = "#fff";
    }, 300);
  }

moveButton()
resetStyle()