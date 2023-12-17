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
let bankaccount = document.querySelectorAll(".bankaccount")
let hiddensearceUl = document.querySelector(".hiddensearce ul");
let hiddensearce = document.querySelector(".hiddensearce")
let category = document.querySelector(".category")
let games = document.querySelector(".games")
let hiddenlink = document.querySelectorAll(".hiddenlink")
let texthidden = document.querySelector(".texthidden")
let oxs = document.querySelector(".ri-corner-right-up-fill")
let services1 = document.querySelectorAll(".services1")
let foot = document.querySelector(".foot")
let theend = document.querySelector(".theend")
let footbtn = document.querySelector(".footbtn")
let inputfoot = document.querySelector(".inputfoot")
let abunemesaage = document.querySelector(".abunemesaage");
let accountbtn = document.querySelector(".accountbtn")
let accountbtn1 = document.querySelector(".accountbtn1")
let hiddenbirbank = document.querySelector(".hiddenbirbank")
let hiddenbirbank1 = document.querySelector(".hiddenbirbank1")
let filetext = document.querySelector(".filetext")
let filetext1 = document.querySelector(".filetext1")
let filetext2 = document.querySelector(".filetext2")
let filetext3 = document.querySelector(".filetext3")
let formfile = document.querySelector(".formfile")
let formfile1 = document.querySelector(".formfile1")
let filebutton = document.querySelector(".filebutton")
let filebutton1 = document.querySelector(".filebutton1")
let hiddencard = document.querySelector(".hiddencard")
let hiddencard1 = document.querySelector(".hiddencard1")
let cardnumber = document.querySelector(".cardnumber")
let cardnumber1 = document.querySelector(".cardnumber1")
let cardnumber2 = document.querySelector(".cardnumber2")
let cardnumber3 = document.querySelector(".cardnumber3")
let cardbutton = document.querySelector(".cardbutton")
let cardbutton1 = document.querySelector(".cardbutton1")


let arry = ["pubg mobile", "free fire", "tiktok", "e futbol", "point blank", "call of duty mobile", "netflix", "roblox", "spotify", "valorant"]
let flag = true
let flag1 = true
let flag2 = true
let flag3 = true
let searceFilter


accountbtn.addEventListener("click", ()=>{
    hiddenbirbank.style.display = "block"
    hiddenbirbank1.style.display = "none"

    filebutton.addEventListener("click", ()=>{
        if(formfile.value != ""){
            filetext.style.display = "block"
            hiddencard.style.marginTop = "-249px"
            filetext1.style.display = "none"
            formfile.value = ""
        }else{
            alert("Lutfen dosya secin")
        }
    })

    cardbutton.addEventListener("click", ()=>{
        let trim = cardnumber1.value.trim()
        let a = trim.split("")
        let b = a[2]
        if(cardnumber.value != "" && cardnumber.value != " " && cardnumber.value.length > 15  && trim.length == 5 && b == "/"){
            filetext1.style.display = "block"
            filetext.style.display = "none"
            hiddencard.style.marginTop = "-185px"
            cardnumber.value = ""
            cardnumber1.value = ""
        } else if (cardnumber.value == "" || cardnumber.value == " "){
            alert("Lutfen 'Card Nomrenizi' daxil edin")
        } else if (cardnumber.value.length < 16){
            alert("Lutfen 'Card Bilgileriniz' tam daxil edin")
        } else if (trim.length != 5 || b != "/"){
            alert("Lutfen 'Son Isdifade Tarixini'duzgun daxil edin")
        } else if (cardnumber1.value == "" && cardnumber1.value == " "){
            alert("Lutfen 'Son Isdufade Tarixinizi'daxil edin")
        }
         else {
            alert("Lutfen deyerleri duzgun daxil edin")
        }
    })
})




accountbtn1.addEventListener("click", ()=>{
    hiddenbirbank1.style.display = "block"
    hiddenbirbank.style.display = "none"

    filebutton1.addEventListener("click", ()=>{
        if(formfile1.value != ""){
            filetext2.style.display = "block"
            hiddencard1.style.marginTop = "-249px"
            filetext3.style.display = "none"
            formfile1.value = ""
        }else{
            alert("Lutfen dosya secin")
        }
    })

    cardbutton1.addEventListener("click", ()=>{
        let trim1 = cardnumber3.value.trim()
        let a = trim1.split("")
        let b = a[2]
        if(cardnumber2.value != "" && cardnumber2.value != " " && cardnumber2.value.length > 15  && trim1.length == 5 && b == "/"){
            filetext3.style.display = "block"
            filetext2.style.display = "none"
            cardnumber2.value = ""
            cardnumber3.value = ""
        } else if (cardnumber2.value == "" || cardnumber2.value == " "){
            alert("Lutfen 'Card Nomrenizi' daxil edin")
        } else if (cardnumber2.value.length < 16){
            alert("Lutfen 'Card Bilgileriniz' tam daxil edin")
        } else if (trim1.length != 5 || b != "/"){
            alert("Lutfen 'Son Isdifade Tarixini'duzgun daxil edin")
        } else {
            alert("Lutfen deyerleri duzgun daxil edin")
        }
    })
})



footbtn.addEventListener("click", () => {
    if (inputfoot.value != "" && inputfoot.value != " " && flag3 == true){
        abunemesaage.style.display = "block"
        inputfoot.value = ""
        console.log(formfile.value);
        flag3 = false
    } else {
        abunemesaage.style.display = "none"
        flag3 = true
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


mood.addEventListener("click", ()=>{
    if(flag == true){
        began.style.backgroundColor = "#313131"
        a.forEach(item =>{
            item.style.color = "white"
        })
        backmood.style.backgroundColor = "#313131"
        bankaccount.forEach(item =>{
            item.style.backgroundColor = "#313131"
            item.style.color = "white"
        })
        hiddenbirbank.style.backgroundColor = "#313131"
        hiddenbirbank1.style.backgroundColor = "#313131"
        filetext.style.color = "white"
        filetext1.style.color = "white"
        filetext2.style.color = "white"
        filetext3.style.color = "white"
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
        flag = false
    } else{
        began.style.backgroundColor = "#f5f5f5"
        a.forEach(item =>{
            item.style.color = "black"
        })
        backmood.style.backgroundColor = "white"
        hiddenbirbank.style.backgroundColor = "#f5f5f5"
        hiddenbirbank1.style.backgroundColor = "#f5f5f5"
        filetext.style.color = "green"
        filetext1.style.color = "green"
        filetext2.style.color = "green"
        filetext3.style.color = "green"
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
        bankaccount.forEach(item =>{
            item.style.backgroundColor = "#f5f5f5"
            item.style.color = "black"
        })
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