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
let body = document.querySelector("body")
let neww = document.querySelector(".new")
let services1 = document.querySelectorAll(".services1")
let connettionboxs = document.querySelector(".connectionboxs")
let adress = document.querySelector(".address")
let email = document.querySelector(".email")
let mobile = document.querySelector(".mobile")
let theend = document.querySelector(".theend")
let foot = document.querySelector(".foot")
let hiddenlink = document.querySelectorAll(".hiddenlink")
let category = document.querySelector(".category")
let games = document.querySelector(".games")
let texthidden = document.querySelector(".texthidden")
let oxs = document.querySelector(".ri-corner-right-up-fill")
let connectionbtn = document.querySelector(".connectionbtn")
let hidden3 = document.querySelector(".hidden3")
let inputname = document.querySelector(".inputname")
let inputSurname = document.querySelector(".inputSurname")
let inputemail = document.querySelector(".inputemail")
let inputnumber = document.querySelector(".inputnumber")
let textarea = document.querySelector("textarea")

let arry = ["pubg mobile", "free fire", "tiktok", "e futbol", "point blank", "call of duty mobile", "netflix", "roblox", "spotify", "valorant"]
let searceFilter
let flag = true
let flag1 = true
let flag2 = true
let flag3 = true

connectionbtn.addEventListener("click", ()=>{
    if(inputname.value != "" && inputname.value != " " && inputSurname.value != "" && inputSurname.value != " " && inputemail.value != "" && inputemail.value != " " && inputnumber.value != ""  && inputnumber.value != " " && textarea.value != "" && textarea.value != " "){
        hidden3.innerHTML = "Mellumatlariniz ugurla email hesablarimiza gonderildi!"
        inputname.value = ""
        inputSurname.value = ""
        inputemail.value = ""
        inputnumber.value = ""
        textarea.value = ""
    } else if (inputname.value == "" || inputname.value == " "){
        hidden3.innerHTML = "Ad vacibdir!"
    } else if (inputSurname.value == "" || inputSurname.value == " "){
        hidden3.innerHTML = "Soyad vacibdir!"
    } else if (inputemail.value == "" || inputemail.value == " "){
        hidden3.innerHTML = "Email vacibdir!"
    } else if (inputnumber.value == ""  || inputnumber.value == " "){
        hidden3.innerHTML = "Telefon nomreniz vacibdir!"
    } else if (textarea.value == "" || textarea.value == " "){
        hidden3.innerHTML = "Serh vacibdir!"
    } else {
        hidden3.innerHTML = "Deyerleri duzgun daxil edin!"
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
        began.style.backgroundColor = "#313131"
        a.forEach(item =>{
            item.style.color = "white"
        })
        backmood.style.backgroundColor = "#313131"
        adress.style.backgroundColor = "#313131"
        email.style.backgroundColor = "#313131"
        mobile.style.backgroundColor = "#313131"
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
        body.style.color = "white"
        connettionboxs.style.backgroundColor = "#232323"
        services1.forEach(item =>{
            item.style.backgroundColor = "#313131"
        })
        
        theend.style.color = "white"
        foot.style.backgroundColor = "#232323"
        foot.style.color = "white"
        hiddenlink.forEach(item => {
            item.style.color = "black"
        })
        flag = false
    } else {
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
        neww.style.backgroundColor = "white"
        body.style.backgroundColor = "white"
        connettionboxs.style.backgroundColor = "white"
        services1.forEach(item =>{
            item.style.backgroundColor = "#f5f5f5"
        })
        theend.style.color = "black"
        foot.style.backgroundColor = "#f5f5f5"
        foot.style.color = "black"
        body.style.color = "black"
        adress.style.backgroundColor = "#f5f5f5"
        email.style.backgroundColor = "#f5f5f5"
        mobile.style.backgroundColor = "#f5f5f5"
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