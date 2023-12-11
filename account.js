let mood = document.querySelector(".mood")
let began = document.querySelector(".began")
let a = document.querySelectorAll("a")
let backmood = document.querySelector(".backmood")
let month = document.querySelector(".ri-moon-fill")
let note = document.querySelector(".note")
let header = document.querySelector(".header")
let searce = document.querySelector(".searce")
let playerbtn = document.querySelector(".playerbtn")
let balancebtn = document.querySelector(".balancebtn")
let main = document.querySelector(".main")
let body = document.querySelector("body")
let bankaccount = document.querySelector(".bankaccount")
let hiddensearceUl = document.querySelector(".hiddensearce ul");
let hiddensearce = document.querySelector(".hiddensearce")
let category = document.querySelector(".category")
let games = document.querySelector(".games")
let hiddenlink = document.querySelectorAll(".hiddenlink")
let texthidden = document.querySelector(".texthidden")
let oxs = document.querySelector(".ri-corner-right-up-fill")
let arry = ["pubg mobile", "free fire", "tiktok", "e futbol", "point blank", "call of duty mobile", "netflix", "roblox", "spotify", "valorant"]
let flag = true
let flag1 = true
let flag2 = true
let searceFilter

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

category.addEventListener("click", () => {
    if (flag1 == true) {
        games.style.display = "block"
        flag1 = false
    } else {
        games.style.display = "none"
        flag1 = true
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
        body.style.backgroundColor = "#232323"
        bankaccount.style.backgroundColor = "#313131"
        bankaccount.style.color = "white"
        hiddenlink.forEach(item => {
            item.style.color = "black"
        })
        flag = false
    } else{
        began.style.backgroundColor = "#f5f5f5"
        a.forEach(item =>{
            item.style.color = "black"
        })
        backmood.style.backgroundColor = "white"
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
        body.style.backgroundColor = "white"
        bankaccount.style.backgroundColor = "#f5f5f5"
        bankaccount.style.color = "black"
        flag = true
    }
})