let footbtn = document.querySelector(".footbtn")
let inputfoot = document.querySelector(".inputfoot")
let abunemesaage = document.querySelector(".abunemesaage");
let searce = document.querySelector(".searce")
let hiddensearceUl = document.querySelector(".hiddensearce ul");
let hiddensearce = document.querySelector(".hiddensearce")
let backmood = document.querySelector(".backmood")
let mood = document.querySelector(".mood")
let began = document.querySelector(".began")
let a = document.querySelectorAll("a")
let month = document.querySelector(".ri-moon-fill")
let note = document.querySelector(".note")
let header = document.querySelector(".header")
let playerbtn = document.querySelector(".playerbtn")
let balancebtn = document.querySelector(".balancebtn")
let main = document.querySelector(".main")
let neww = document.querySelector(".new")
let body = document.querySelector("body")
let services1 = document.querySelectorAll(".services1")
let theend = document.querySelector(".theend")
let foot = document.querySelector(".foot")
let sell = document.querySelector(".sell")
let hiddenlink = document.querySelectorAll(".hiddenlink")
let mobilefoto = document.querySelector(".mobilefoto")
let freefoto = document.querySelector(".freefoto")
let tictocfoto = document.querySelector(".tictocfoto")
let valorant = document.querySelector(".valorant")
let efutboll = document.querySelector(".efutboll")
let pointblank = document.querySelector(".pointblank")
let callduty = document.querySelector(".callduty")
let netflix = document.querySelector(".netflix")
let netflix1 = document.querySelector(".netflix1")
let spotify = document.querySelector(".spotify")
let category = document.querySelector(".category")
let games = document.querySelector(".games")
let texthidden = document.querySelector(".texthidden")
let oxs = document.querySelector(".ri-corner-right-up-fill")
let list = document.querySelector (".ri-menu-5-fill")
let hiddenlist = document.querySelector(".hiddenlist")

let arry = ["pubg mobile", "free fire", "tiktok", "e futbol", "point blank", "call of duty mobile", "netflix", "roblox", "spotify", "valorant"]
let searceFilter
let flag = true
let flag1 = true
let flag2 = true
let flag3 = true
let flag5 = true

list.addEventListener("click", ()=>{
    if(flag5 == true){
        hiddenlist.style.display = "block"
        flag5 = false
    }else {
        hiddenlist.style.display = "none"
        flag5 = true
    }
})

footbtn.addEventListener("click", () => {
    if (inputfoot.value != "" && inputfoot.value != " " && flag3 == true){
        abunemesaage.style.display = "block"
        inputfoot.value = ""
        flag3 = false
    } else {
        abunemesaage.style.display = "none"
        flag3 = true
    }
})


searce.addEventListener("keyup", () => {
    searceFilter = arry.filter(e => {
        return e.toLowerCase().includes(searce.value)
    });
    [...hiddensearceUl.children].map(item => item.remove())
    searceFilter.map(item => {
        let li = document.createElement("li");
        li.innerHTML = `<a class="hiddenlink" href="">${item}</a>`
        hiddensearceUl.appendChild(li)
    })

    let temizlenmisdeyer = searce.value.trim()
    
    if (temizlenmisdeyer.length == 0) {
        hiddensearce.style.display = "none"
    }

     else {
        hiddensearce.style.display = "block"
    }
})


mood.addEventListener("click", ()=>{
    if(flag == true){
        mobilefoto.style.backgroundColor = "#313131"
        list.style.color = "white"
        freefoto.style.backgroundColor = "#313131"
        tictocfoto.style.backgroundColor = "#313131"
        valorant.style.backgroundColor = "#313131"
        efutboll.style.backgroundColor = "#313131"
        pointblank.style.backgroundColor = "#313131"
        callduty.style.backgroundColor = "#313131"
        netflix.style.backgroundColor = "#313131"
        netflix1.style.backgroundColor = "#313131"
        spotify.style.backgroundColor = "#313131"
        began.style.backgroundColor = "#313131"
        a.forEach(item =>{
            item.style.color = "white"
        })
        backmood.style.backgroundColor = "#313131"
        month.style.color = "white"
        note.style.backgroundColor = "white"
        note.style.color = "black"
        header.style.backgroundColor = "#232323"
        searce.style.backgroundColor = "#232323"
        searce.style.color = "white"
        playerbtn.style.backgroundColor = "#232323"
        playerbtn.style.color = "white"
        balancebtn.style.backgroundColor = "#232323"
        balancebtn.style.color = "white"
        main.style.backgroundColor = "#232323"
        neww.style.backgroundColor = "#232323"
        body.style.backgroundColor = "#232323"
        services1.forEach(item =>{
            item.style.backgroundColor = "#313131"
        })
        
        theend.style.color = "white"
        foot.style.backgroundColor = "#232323"
        foot.style.color = "white"
        hiddenlink.forEach(item => {
            item.style.color = "black"
        })
        sell.style.backgroundColor = "#232323"
        
        flag = false
    } else {
        began.style.backgroundColor = "#f5f5f5"
        a.forEach(item =>{
            item.style.color = "black"
        })
        mobilefoto.style.backgroundColor = "white"
        list.style.color = "black"
        freefoto.style.backgroundColor = "white"
        tictocfoto.style.backgroundColor = "white"
        valorant.style.backgroundColor = "white"
        efutboll.style.backgroundColor = "white"
        pointblank.style.backgroundColor = "white"
        callduty.style.backgroundColor = "white"
        netflix.style.backgroundColor = "white"
        netflix1.style.backgroundColor = "white"
        spotify.style.backgroundColor = "white"
        backmood.style.backgroundColor = "white"
        sell.style.backgroundColor = "#f5f5f5"
        month.style.color = "black"
        note.style.backgroundColor = "black"
        note.style.color = "white"
        header.style.backgroundColor = "white"
        searce.style.backgroundColor = "white"
        searce.style.color = "black"
        playerbtn.style.backgroundColor = "white"
        playerbtn.style.color = "black"
        balancebtn.style.backgroundColor = "white"
        balancebtn.style.color = "black"
        main.style.backgroundColor = "white"
        neww.style.backgroundColor = "white"
        body.style.backgroundColor = "white"
        services1.forEach(item =>{
            item.style.backgroundColor = "#f5f5f5"
        })
        theend.style.color = "black"
        foot.style.backgroundColor = "#f5f5f5"
        foot.style.color = "black"
        flag = true
    }
})

category.addEventListener("click", () => {
    if (flag1 == true) {
        games.style.display = "block"
        flag1 = false
    } else {
        games.style.display = "none"
        flag1 = true
    }
})

playerbtn.addEventListener("click", () => {
    if (flag2 == true) {
        texthidden.style.display = "block"
        oxs.style.display = "block"
        flag2 = false
    } else {
        texthidden.style.display = "none"
        oxs.style.display = "none"
        flag2 = true
    }
})