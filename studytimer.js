var dropbox = document.querySelectorAll(".settime");
var dropcont = document.querySelectorAll(".setme");
var arrow = document.querySelectorAll(".arrow");
var start = document.querySelector(".start");
var nn;
var seconds = 59;
var leadsec
var minutes = 0;
var leadmin;
var timelimit = "none";
var timelist = [60,50,40,30,20];
var breaklist = [15,12,10,8,5];
var sesslist = [5,4,3,2,1];
var breakt;
var timenow;
var sess;
var swap = 0;
var changet = 0

function timethis(){
    var backg = document.querySelector(".background");
    var timehere = document.querySelector(".time");
    var startvalcrt = document.querySelectorAll(".startval");
    var backdone = document.querySelector(".backdone");
    var number;

    if(parseInt(startvalcrt[2].innerText) == 0){
        clearInterval(timer);
        backdone.style.transition = "2s"
        backdone.style.top = "0px";
    }
    if(seconds<10){
        leadsec = "0"+seconds
    }
    else{
        leadsec = seconds
    }
    if(minutes<=10){
        leadmin = "0"+(minutes-1)
    }
    else{
        leadmin = minutes-1
    }
    timehere.innerText = `${leadmin}:${leadsec}`
    if(swap == 0){
        if(seconds == 0){
            minutes--;
            seconds = 59
        }
        else{
            seconds--;
        }
    }
    if(parseInt(startvalcrt[2].innerText)){
        if(minutes == 0){
            let audio = new Audio("beep-warning-6387.mp3");
            clearInterval(timer);
            if (changet == 0){
                for(n = 0; n<dropcont2.length; n++){
                    if(chcbox[1].innerText == dropcont2[n].innerText){
                        minutes = breaklist[n-5];
                        minindic = breaklist[n-5];
                    }
                }
                timer = setInterval(timethis,1000)
                changet = 1;
                backg.style.backgroundColor = "rgb(196, 98, 79)";
                audio.play();
                number = parseInt(startvalcrt[2].innerText);
                startvalcrt[2].innerText = number-1;
            }
            else{
                for(n = 0; n<dropcont2.length; n++){
                    if(chcbox[0].innerText == dropcont2[n].innerText){
                        minutes = timelist[n];
                        minindic2 = timelist[n];
                    }
                }
                timer = setInterval(timethis,1000)
                changet = 0
                backg.style.backgroundColor = "rgb(249, 197, 151)";
                audio.play();
            } 
        }
    }
    else{
        timehere.innerText = `00:00`
        clearInterval(timer);

    }
}

for(n = 0; n<arrow.length; n++){
    arrow[n].addEventListener("click",function(e){
    
        e.target.classList.toggle("arrow2")


        e.target.parentElement.lastElementChild.classList.toggle("setme2");

        for(n of e.target.parentElement.lastElementChild.children){
            n.classList.toggle("settime2");
            n.addEventListener("click",function(e){
                e.target.parentElement.previousElementSibling.innerHTML = this.innerHTML
                e.target.parentElement.classList.remove("setme2");
                e.target.parentElement.classList.add("setme");
                e.target.parentElement.parentElement.firstElementChild.removeAttribute("class")
                e.target.parentElement.parentElement.firstElementChild.setAttribute("class","arrow")
            })
        }
    })
}

start.addEventListener("click",function(e){
    pause = 0;
    var time = document.querySelector(".time");
    chcbox = document.querySelectorAll(".chcbox");
    var deleteitm = document.querySelectorAll(".choice1");
    var cont2 = document.querySelector(".cont2");
    var contbut = document.querySelector(".contbut");
    dropcont2 = document.querySelectorAll(".settime");
    var listadd = [];

    if(chcbox[0].innerText == "choose" || chcbox[1].innerText == "choose" || chcbox[2].innerText == "choose"){
    }
    else{
        time.innerText = chcbox[0].innerText
        for(n = 0; n<deleteitm.length; n++){
            listadd.push(chcbox[n].innerText)
            deleteitm[n].remove();
        }

        for(n = 0; n<3; n++){
            var startval = document.createElement("div");
            cont2.append(startval);
        }

        for(n = 0; n<cont2.children.length;n++){
            cont2.children[n].classList.add("startval");
            cont2.children[n].innerText = listadd[n]
            contbut.style.marginBottom = "0px";
        }

        var aftercont = document.createElement("div");
        var image1 = document.createElement("img");
        this.parentElement.append(aftercont);
        aftercont.classList.add("aftcont");
        aftercont.append(image1);
        image1.src = "puse.png"
        image1.classList.add("controln");
        this.remove();

        timer = setInterval(timethis,1000)

        for(n = 0; n<dropcont2.length; n++){
            if(chcbox[0].innerText == dropcont2[n].innerText){
                minutes = timelist[n]
            }
        }

        aftercont.firstElementChild.addEventListener("click",function(e){
            if(pause == 0){
                this.src = "play-g9cf4542fe_1280.png";
                clearInterval(timer);
                pause = 1;
            }
            else{
                this.src = "puse.png";
                timer = setInterval(timethis,1000);
                pause = 0;
            }
        })
    }

})





