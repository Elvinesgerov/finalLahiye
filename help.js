let playerbtn = document.querySelector(".playerbtn")
let texthidden = document.querySelector(".texthidden")
let oxs = document.querySelector(".ri-corner-right-up-fill")
let category = document.querySelector(".category")
let games = document.querySelector(".games")
let searce = document.querySelector(".searce")
let hiddensearceUl = document.querySelector(".hiddensearce ul");
let hiddensearce = document.querySelector(".hiddensearce")
let mood = document.querySelector(".mood")
let began = document.querySelector(".began")
let a = document.querySelectorAll("a")
let backmood = document.querySelector(".backmood")
let month = document.querySelector(".ri-moon-fill")
let note = document.querySelector(".note")
let header = document.querySelector(".header")
let balancebtn = document.querySelector(".balancebtn")
let main = document.querySelector(".main")
let body = document.querySelector("body")
let hiddenlink = document.querySelectorAll(".hiddenlink")
let question = document.querySelector(".question")
let questionboxs = document.querySelector(".questionboxs")
let problems = document.querySelector(".problems")
let problems1 = document.querySelector(".problems1")
let problems2 = document.querySelector(".problems2")
let services1 = document.querySelectorAll(".services1")
let foot = document.querySelector(".foot")
let theend = document.querySelector(".theend")
let answer = document.querySelector(".answer")
let answer1 = document.querySelector(".answer1")
let answer2 = document.querySelector(".answer2")
let inputfoot = document.querySelector(".inputfoot")
let abunemesaage = document.querySelector(".abunemesaage");
let footbtn = document.querySelector(".footbtn")
let list = document.querySelector (".ri-menu-5-fill")
let hiddenlist = document.querySelector(".hiddenlist")
let arry = ["pubg mobile", "free fire", "tiktok", "e futbol", "point blank", "call of duty mobile", "netflix", "roblox", "spotify", "valorant"]
let searceFilter
let flag = true
let flag1 = true
let flag2 = true
let flag3 = true
let flag4 = true
let flag5 = true
let flag6 = true
let flag7 = true

list.addEventListener("click", ()=>{
    if(flag7 == true){
        hiddenlist.style.display = "block"
        flag7 = false
    }else {
        hiddenlist.style.display = "none"
        flag7 = true
    }
})

footbtn.addEventListener("click", () => {
    if (inputfoot.value != "" && inputfoot.value != " " && flag6 == true){
        abunemesaage.style.display = "block"
        inputfoot.value = ""
        flag6 = false
    } else {
        abunemesaage.style.display = "none"
        flag6 = true
    }
})

problems.addEventListener("click", ()=>{
    if(flag3 == true){
        answer.style.display = "block"
        answer1.style.display = "none"
        answer2.style.display = "none"
        flag3 = false
    } else {
        answer.style.display = "none"
        answer1.style.display = "none"
        answer2.style.display = "none"
        flag3 = true
    }
})

problems1.addEventListener("click", ()=>{
    if(flag4 == true){
        answer.style.display = "none"
        answer1.style.display = "block"
        answer2.style.display = "none"
        flag4 = false
    } else {
        answer.style.display = "none"
        answer1.style.display = "none"
        answer2.style.display = "none"
        flag4 = true
    }
})

problems2.addEventListener("click", ()=>{
    if(flag5 == true){
        answer.style.display = "none"
        answer1.style.display = "none"
        answer2.style.display = "block"
        flag5 = false
    } else {
        answer.style.display = "none"
        answer1.style.display = "none"
        answer2.style.display = "none"
        flag5 = true
    }
})


mood.addEventListener("click", () => {
    if (flag == true) {
        began.style.backgroundColor = "#313131"
        a.forEach(item => {
            item.style.color = "white"
        })
        backmood.style.backgroundColor = "#313131"
        month.style.color = "white"
        list.style.color = "white"
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
        hiddenlink.forEach(item => {
            item.style.color = "black"
        })
        question.style.backgroundColor = "#313131"
        question.style.color = "white"
        questionboxs.style.backgroundColor = "#232323"
        problems.style.backgroundColor = "#232323"
        problems1.style.backgroundColor = "#232323"
        problems2.style.backgroundColor = "#232323"

        services1.forEach(item => {
            item.style.backgroundColor = "#313131"
        })
        foot.style.backgroundColor = "#232323"
        foot.style.color = "white"
        theend.style.backgroundColor = "#232323"
        theend.style.color = "white"
        flag = false
    } else {
        began.style.backgroundColor = "#f5f5f5"
        a.forEach(item => {
            item.style.color = "black"
        })
        backmood.style.backgroundColor = "white"
        month.style.color = "black"
        note.style.backgroundColor = "black"
        list.style.color = "black"
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
        hiddenlink.forEach(item => {
            item.style.color = "black"
        })
        question.style.backgroundColor = "#f5f5f5"
        question.style.color = "black"
        questionboxs.style.backgroundColor = "white"
        problems.style.backgroundColor = "white"
        problems1.style.backgroundColor = "white"
        problems2.style.backgroundColor = "white"
        services1.forEach(item => {
            item.style.backgroundColor = "#f5f5f5"
        })
        foot.style.backgroundColor = "#f5f5f5"
        foot.style.color = "black"
        theend.style.backgroundColor = "white"
        theend.style.color = "black"
        flag = true
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