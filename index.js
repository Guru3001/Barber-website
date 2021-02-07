var menubtn = document.getElementById("menu-btn")
        var nav = document.getElementById("nav")
        var menu = document.getElementById("menu")

        nav.style.right = "-250px";
        menubtn.onclick = function() {
            if(nav.style.right == "-250px"){
                nav.style.right = "0";
                menu.src = "close.png";
            }
            else {
                nav.style.right = "-250px";
                menu.src = "menu.png";
            }
        }

        var scroll = new SmoothScroll('a[href*="#"]', {
	    speed: 1000,
	    speedAsDuration: true
    });