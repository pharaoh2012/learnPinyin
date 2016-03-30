    function setActive(btn, id) {
        var active = document.querySelector("#" + id + " .active");
        if (active) active.className = "";
        btn.className = "active";
    }

    document.getElementById("pySelect").addEventListener("click", function(event) {
        if (event.target.tagName != "BUTTON") return;
        var py = event.target.innerText;
        setActive(event.target, "pySelect");
        document.getElementById("pyShow").innerText = py;
        var pyinfo = pyInfos[py];
        var mp3path = "http://xh.5156edu.com/xhzdmp3abc/" + pyinfo.mp3 + ".mp3";
        document.getElementById("pymp3").pause();
        document.getElementById("pymp3").src = mp3path;

    }, false);

    function show(pys) {
        console.info(pys);
        var html = [];
        for (var i = 0; i < pys.length; i++) {
            html.push("<button>", pys[i], "</button>")
        }
        if(html.length) {
            document.getElementById("pySelect").innerHTML = html.join("");
        } else {
            document.getElementById("pySelect").innerHTML = "没有对应的拼音。";
        }
        
    }
    document.getElementById("pyShow").onclick = function() {
        var mp3 = document.getElementById("pymp3");
        mp3.pause();
        mp3.play();
    };