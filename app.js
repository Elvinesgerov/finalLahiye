
let mood = document.querySelector(".mood")
let began = document.querySelector(".began")
let ay = document.querySelector(".ri-moon-fill")
let backmood = document.querySelector(".backmood")
let a = document.querySelectorAll("a")
let note = document.querySelector(".note")
let header = document.querySelector(".header")
let searce = document.querySelector(".searce")
let playerbtn = document.querySelector(".playerbtn")
let balancebtn = document.querySelector(".balancebtn")
let main = document.querySelector(".main")
let div2 = document.querySelector(".div2")
let freehome = document.querySelector(".freehome")
let icon1 = document.querySelector(".icon1")
let icon2 = document.querySelector(".icon2")
let sell = document.querySelector('.sell')
let servicesboxs = document.querySelector(".servicesboxs")
let neww = document.querySelector(".new")
let services1 = document.querySelectorAll(".services1")
let foot = document.querySelector(".foot")
let theend = document.querySelector(".theend")
let aa = document.querySelector("a")
let playerbtnn = document.querySelector(".playerbtn")
let texthidden = document.querySelector(".texthidden")
let oxs = document.querySelector(".ri-corner-right-up-fill")
let category = document.querySelector(".category")
let games = document.querySelector(".games")
let freehomee = document.querySelector(".freehome")
let mobile = document.querySelector(".mobilefoto")
let free = document.querySelector(".freefrifoto")
let tiktok = document.querySelector(".tictocfoto")
let valorant = document.querySelector(".valorant")
let efutbol = document.querySelector(".efutboll")
let pointblank = document.querySelector(".pointblank")
let callduty = document.querySelector(".callduty")
let netflix = document.querySelectorAll(".netflix")
let spotify = document.querySelector(".spotify")
let netflix1 = document.querySelector(".netflix1")
let body = document.querySelector("body")
let hiddenlink = document.querySelectorAll(".hiddenlink")
let hiddensearceUl = document.querySelector(".hiddensearce ul");
let hiddensearce = document.querySelector(".hiddensearce")
let gorsel1 = document.querySelector(".gorsel1")
let gorsel2 = document.querySelector(".gorsel2");
let gorsel3 = document.querySelector(".gorsel3")
let inputfoot = document.querySelector(".inputfoot")
let abunemesaage = document.querySelector(".abunemesaage");
let footbtn = document.querySelector(".footbtn")
let list = document.querySelector (".ri-menu-5-fill")
let user = document.querySelector(".ri-user-line")
let balancebtn1 = document.querySelector (".balancebtn1")
let cards = document.querySelector(".cards")
let hiddenlist = document.querySelector(".hiddenlist")
let gamesfoto1 = document.querySelector(".gamesfoto1")
let hiddenbalance = document.querySelector(".hiddenbalance")
let hiddenhome = document.querySelectorAll(".hiddenclick")
let flag = true
let flag1 = true
let flag2 = true
let flag3 = true
let flag4 = true
let flag5 = true
let index = 0
let arry = ["pubg mobile", "free fire", "tiktok", "e futbol", "point blank", "call of duty mobile", "netflix", "roblox", "spotify", "valorant"]
let ary = ["pointblank.webp", "tiktok.webp", "spotifyfoto.jpg"];
let searceFilter

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



mood.addEventListener("click", () => {
    if (flag == true) {
        balancebtn1.style.backgroundColor = "#313131"
        balancebtn1.style.color = "white"
        began.style.backgroundColor = "#313131"
        cards.style.backgroundColor = "#232323"
        gamesfoto1.style.backgroundColor = "#232323"
        ay.style.color = "white"
        backmood.style.backgroundColor = "#232323"
        a.forEach(item => {
            item.style.color = "white"
        })
        note.style.backgroundColor = "White"
        hiddenhome.forEach(item=>{
            item.style.color = "black"
        })
        note.style.color = "#232323"
        header.style.backgroundColor = "#232323"
        searce.style.backgroundColor = "#232323"
        searce.style.color = "white"
        playerbtn.style.backgroundColor = "#232323"
        playerbtn.style.color = "white"
        balancebtn.style.backgroundColor = "#232323"
        balancebtn.style.color = "white"
        main.style.backgroundColor = "#232323"
        div2.style.backgroundColor = "#232323"
        freehome.style.color = "white"
        sell.style.backgroundColor = "#232323"
        neww.style.backgroundColor = "#232323"
        servicesboxs.style.backgroundColor = "#232323"
        body.style.backgroundColor = "#232323"

        hiddenlink.forEach(item => {
            item.style.color = "black"
        })
        services1.forEach(a => {
            a.style.backgroundColor = "#313131"
        })

        foot.style.backgroundColor = "#232323"
        foot.style.color = "white"
        theend.style.backgroundColor = "#232323"
        theend.style.color = "white"
        list.style.color = "white"
        user.style.color = "white"
        flag = false
    } else {
        list.style.color = "black"
        balancebtn1.style.backgroundColor = "white"
        hiddenhome.forEach(item=>{
            item.style.color = "black"
        })
        balancebtn1.style.color = "black"
        cards.style.backgroundColor = "white"
        gamesfoto1.style.backgroundColor = "white"
        user.style.color = "black"
        began.style.backgroundColor = "#f5f5f5"
        ay.style.color = "black"
        backmood.style.backgroundColor = "white"
        a.forEach(item => {
            item.style.color = "#551a8b"
        })
        body.style.backgroundColor = "white"
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
        div2.style.backgroundColor = "white"
        freehome.style.color = "white"
        sell.style.backgroundColor = "#f5f5f5"
        neww.style.backgroundColor = "white"
        servicesboxs.style.backgroundColor = "white"
        services1.forEach(a => {
            a.style.backgroundColor = "#f5f5f5"
        })
        foot.style.backgroundColor = "#f5f5f5"
        foot.style.color = "black"
        theend.style.backgroundColor = "white"
        theend.style.color = "black"
        flag = true
    }
})

playerbtnn.addEventListener("click", () => {
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

texthidden.addEventListener("click", ()=>{
    if(flag4 == true){
        texthidden.style.display = "none"
        oxs.style.display = "none"
        flag4 = false
    } else {
        texthidden.style.display = "block"
        flag4 = true
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

setInterval(function () {
    freehomee.src = ary[index];
    index = (index + 1) % ary.length;
}, 2000);

setInterval(function () {
    if (freehome.src.endsWith('tiktok.webp')) {
        gorsel1.style.backgroundColor = "orange"
        gorsel2.style.backgroundColor = "white"
        gorsel3.style.backgroundColor = "white"
    } else if (freehome.src.endsWith('pointblank.webp')) {
        gorsel3.style.backgroundColor = "orange"
        gorsel1.style.backgroundColor = "white"
        gorsel2.style.backgroundColor = "white"
    } else if (freehome.src.endsWith('spotifyfoto.jpg')) {
        gorsel2.style.backgroundColor = "orange"
        gorsel1.style.backgroundColor = "white"
        gorsel3.style.backgroundColor = "white"
    }

}, 2000);