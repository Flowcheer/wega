let counterDisplayElem = document.querySelector('.counter-display');
    let count = 0
    count = getCookie("wegas")
    function updateDisplay(){
        counterDisplayElem.innerHTML = `You wega ${getCookie("wegas")}`;
        document.title = `wega - ${count}`
        
    };
    $("#wega").css("animation", "")
    function wega(){
        var image = document.getElementById("wega");
        var images = Array("wegas/wega0.webp","wegas/wega1.png", "wegas/OIG.png", "wegas/leegee.png","wegas/wegashoe.png", "wegas/wga.png","wegas/wega3.png","wegas/wega4.png")
        var pickedimage = images[Math.floor(Math.random() * images.length)]
        image.src = pickedimage
        let screams = Array("screams/wega.mp3", "screams/scream1.wav","screams/scream2.wav","screams/scream3.wav","screams/scream4.wav","screams/scream5.wav","screams/scream6.wav","screams/scream7.wav")
        let scream = screams[Math.floor(Math.random() * screams.length)]
        let weaudio = new Audio(scream)
        if(pickedimage == "wegas/leegee.png"){ weaudio = new Audio("screams/leegee.mp3")}
        count++;
        setCookie("wegas",count)
        weaudio.play()
        updateDisplay();
        $("#wega").css("animation","shake 0.5s linear infinite")
    }
    setInterval(wega, 10000)
    function setCookie(cname, cvalue) {
        document.cookie = cname + "=" + cvalue + ";" + ";path=/";
    }
    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }    