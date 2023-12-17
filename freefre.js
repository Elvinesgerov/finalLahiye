let input = document.querySelector(".ucinput")
let input1 = document.querySelector(".ucinput1")
let input2 = document.querySelector(".ucinput2")
let input3 = document.querySelector(".ucinput3")
let input4 = document.querySelector(".ucinput4")
let input5 = document.querySelector(".ucinput5")
let ucbtn = document.querySelector(".ucbtn")
let ucbtn1 = document.querySelector(".ucbtn1")
let ucbtn2 = document.querySelector(".ucbtn2")
let ucbtn3 = document.querySelector(".ucbtn3")
let ucbtn4 = document.querySelector(".ucbtn4")
let ucbtn5 = document.querySelector(".ucbtn5")
let ucvalyuta = document.querySelector(".ucvalyuta")
let ucvalyuta1 = document.querySelector(".ucvalyuta1")
let ucvalyuta2 = document.querySelector(".ucvalyuta2")
let ucvalyuta3 = document.querySelector(".ucvalyuta3")
let ucvalyuta4 = document.querySelector(".ucvalyuta4")
let ucvalyuta5 = document.querySelector(".ucvalyuta5")
let ucselect = document.querySelector(".ucselect")
let ucselect1 = document.querySelector(".ucselect1")
let ucselect2 = document.querySelector(".ucselect2")
let ucselect3 = document.querySelector(".ucselect3")
let ucselect4 = document.querySelector(".ucselect4")
let ucselect5= document.querySelector(".ucselect5")
let ucprize = document.querySelector(".ucprize")
let ucprize1 = document.querySelector(".ucprize1")
let ucprize2 = document.querySelector(".ucprize2")
let ucprize3 = document.querySelector(".ucprize3")
let ucprize4 = document.querySelector(".ucprize4")
let ucprize5 = document.querySelector(".ucprize5")
let uctd = document.querySelector(".uctd") 
let uctd1 = document.querySelector(".uctd1") 
let uctd2 = document.querySelector(".uctd2") 
let uctd3 = document.querySelector(".uctd3") 
let uctd4 = document.querySelector(".uctd4") 
let uctd5 = document.querySelector(".uctd5") 
let ucnumber = document.querySelector(".ucnumber")
let ucnumber1 = document.querySelector(".ucnumber1")
let ucnumber2 = document.querySelector(".ucnumber2")
let ucnumber3 = document.querySelector(".ucnumber3")
let ucnumber4 = document.querySelector(".ucnumber4")
let ucnumber5 = document.querySelector(".ucnumber5")
let amount = document.querySelector(".amount")
let amount1 = document.querySelector(".amount1")
let amount2 = document.querySelector(".amount2")
let amount3 = document.querySelector(".amount3")
let amount4 = document.querySelector(".amount4")
let amount5 = document.querySelector(".amount5")
let hiddenuc = document.querySelector(".hiddenuc")
let hiddenuc1 = document.querySelector(".hiddenuc1")
let hiddenuc2 = document.querySelector(".hiddenuc2")
let hiddenuc3 = document.querySelector(".hiddenuc3")
let hiddenuc4 = document.querySelector(".hiddenuc4")
let hiddenuc5 = document.querySelector(".hiddenuc5")
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
let hiddenlink = document.querySelectorAll(".hiddenlink")
let backrules = document.querySelector(".backrules")
let uc = document.querySelectorAll(".uc60")
let category = document.querySelector(".category")
let games = document.querySelector(".games")
let texthidden = document.querySelector(".texthidden")
let oxs = document.querySelector(".ri-corner-right-up-fill")

let arry = ["pubg mobile", "free fire", "tiktok", "e futbol", "point blank", "call of duty mobile", "netflix", "roblox", "spotify", "valorant"]
let flag = true
let flag1 = true
let flag2 = true
let flag3 = true


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
        backrules.style.backgroundColor = "#232323"
        uc.forEach(item=>{
            item.style.backgroundColor = "#313131"
            item.style.color = "white"
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
        services1.forEach(item =>{
            item.style.backgroundColor = "#f5f5f5"
        })
        theend.style.color = "black"
        foot.style.backgroundColor = "#f5f5f5"
        foot.style.color = "black"
        backrules.style.backgroundColor = "#f5f5f5"
        uc.forEach(item=>{
            item.style.backgroundColor = "white"
            item.style.color = "black"
        })
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


ucbtn.addEventListener("click", ()=>{
    if (ucselect.value == "Rubl" && input.value >0){
        uctd.innerHTML = "100"
        ucvalyuta.innerHTML = "Rubl"
        ucprize.innerHTML = "96.82"
        ucnumber.innerHTML = input.value
        amount.innerHTML = Math.floor(input.value * 96.82)
        hiddenuc1.style.display = "none"
        hiddenuc2.style.display = "none"
        hiddenuc3.style.display = "none"
        hiddenuc4.style.display = "none"
        hiddenuc5.style.display = "none"
        hiddenuc.style.display = "block"
        uctd.style.marginLeft = "25px"
        ucvalyuta.style.marginLeft = "58px"

        let enter = document.querySelector(".ucentertd")

        enter.addEventListener("click", ()=>{
            alert("Lutfen Qeydiydan kecin")
        })

    } else if (ucselect.value == "Usd"  && input.value >0){
        uctd.innerHTML = "100"
        ucvalyuta.innerHTML = "Usd"
        ucprize.innerHTML = "1.0765"
        ucnumber.innerHTML = input.value
        amount.innerHTML = Math.floor(input.value * 1.0765)
        hiddenuc1.style.display = "none"
        hiddenuc2.style.display = "none"
        hiddenuc3.style.display = "none"
        hiddenuc4.style.display = "none"
        hiddenuc5.style.display = "none"
        hiddenuc.style.display = "block"
        uctd.style.marginLeft = "25px"
        ucvalyuta.style.marginLeft = "58px"

        let enter = document.querySelector(".ucentertd")

        enter.addEventListener("click", ()=>{
            alert("Lutfen Qeydiydan kecin")
        })
    } else if (ucselect.value == "Azn" && input.value >0){
        uctd.innerHTML = "100"
        ucvalyuta.innerHTML = "Azn"
        ucprize.innerHTML = "1.83"
        ucnumber.innerHTML = input.value
        amount.innerHTML = Math.floor(input.value * 1.83)
        hiddenuc1.style.display = "none"
        hiddenuc2.style.display = "none"
        hiddenuc3.style.display = "none"
        hiddenuc4.style.display = "none"
        hiddenuc5.style.display = "none"
        hiddenuc.style.display = "block"
        uctd.style.marginLeft = "25px"
        ucvalyuta.style.marginLeft = "58px"

        let enter = document.querySelector(".ucentertd")

        enter.addEventListener("click", ()=>{
            alert("Lutfen Qeydiydan kecin")
        })
    }
})

ucbtn1.addEventListener("click", ()=>{
    if (ucselect1.value == "Rubl" && input1.value >0){
        uctd1.innerHTML = "210"
        ucvalyuta1.innerHTML = "Rubl"
        ucprize1.innerHTML = "279.89"
        ucnumber1.innerHTML = input1.value
        amount1.innerHTML = Math.floor(input1.value * 279.89)
        hiddenuc1.style.display = "block"
        hiddenuc2.style.display = "none"
        hiddenuc3.style.display = "none"
        hiddenuc4.style.display = "none"
        hiddenuc5.style.display = "none"
        hiddenuc.style.display = "none"
        uctd1.style.marginLeft = "27px"
        ucvalyuta1.style.marginLeft = "57px"

        let enter = document.querySelectorAll(".ucentertd")

        enter.forEach(item =>{
            item.addEventListener("click", ()=>{
                alert("Lutfen Qeydiydan kecin")
            })
        })
    } else if (ucselect1.value == "Usd" && input1.value >0){
        uctd1.innerHTML = "210"
        ucvalyuta1.innerHTML = "Usd"
        ucprize1.innerHTML = "3.11"
        ucnumber1.innerHTML = input1.value
        amount1.innerHTML = Math.floor(input1.value * 3.11)
        hiddenuc1.style.display = "block"
        hiddenuc2.style.display = "none"
        hiddenuc3.style.display = "none"
        hiddenuc4.style.display = "none"
        hiddenuc5.style.display = "none"
        hiddenuc.style.display = "none"
        uctd1.style.marginLeft = "27px"
        ucvalyuta1.style.marginLeft = "57px"

        let enter = document.querySelectorAll(".ucentertd")

        enter.forEach(item =>{
            item.addEventListener("click", ()=>{
                alert("Lutfen Qeydiydan kecin")
            })
        })
    } else if (ucselect1.value == "Azn" && input1.value >0){
        uctd1.innerHTML = "210"
        ucvalyuta1.innerHTML = "Azn"
        ucprize1.innerHTML = "5.29"
        ucnumber1.innerHTML = input1.value
        amount1.innerHTML = Math.floor(input1.value * 5.29)
        hiddenuc1.style.display = "block"
        hiddenuc2.style.display = "none"
        hiddenuc3.style.display = "none"
        hiddenuc4.style.display = "none"
        hiddenuc5.style.display = "none"
        hiddenuc.style.display = "none"
        uctd1.style.marginLeft = "27px"
        ucvalyuta1.style.marginLeft = "57px"

        let enter = document.querySelectorAll(".ucentertd")

        enter.forEach(item =>{
            item.addEventListener("click", ()=>{
                alert("Lutfen Qeydiydan kecin")
            })
        })
    }
})


ucbtn2.addEventListener("click", ()=>{
    if (ucselect2.value == "Rubl" && input2.value >0){
        uctd2.innerHTML = "535"
        ucvalyuta2.innerHTML = "Rubl"
        ucprize2.innerHTML = "422.75"
        ucnumber2.innerHTML = input2.value
        amount2.innerHTML = Math.floor(input2.value * 422.75)
        hiddenuc1.style.display = "none"
        hiddenuc2.style.display = "block"
        hiddenuc3.style.display = "none"
        hiddenuc4.style.display = "none"
        hiddenuc5.style.display = "none"
        hiddenuc.style.display = "none"
        uctd2.style.marginLeft = "27px"
        ucvalyuta2.style.marginLeft = "57px"

        let enter = document.querySelectorAll(".ucentertd")

        enter.forEach(item =>{
            item.addEventListener("click", ()=>{
                alert("Lutfen Qeydiydan kecin")
            })
        })
    } else if (ucselect2.value == "Usd" && input2.value >0){
        uctd2.innerHTML = "535"
        ucvalyuta2.innerHTML = "Usd"
        ucprize2.innerHTML = "4.77"
        ucnumber2.innerHTML = input2.value
        amount2.innerHTML = Math.floor(input2.value * 4.77)
        hiddenuc1.style.display = "none"
        hiddenuc2.style.display = "block"
        hiddenuc3.style.display = "none"
        hiddenuc4.style.display = "none"
        hiddenuc5.style.display = "none"
        hiddenuc.style.display = "none"
        uctd2.style.marginLeft = "27px"
        ucvalyuta2.style.marginLeft = "57px"

        let enter = document.querySelectorAll(".ucentertd")

        enter.forEach(item =>{
            item.addEventListener("click", ()=>{
                alert("Lutfen Qeydiydan kecin")
            })
        })
    } else if (ucselect2.value == "Azn" && input2.value >0){
        uctd2.innerHTML = "535"
        ucvalyuta2.innerHTML = "Azn"
        ucprize2.innerHTML = "7.99"
        ucnumber2.innerHTML = input2.value
        amount2.innerHTML = Math.floor(input2.value * 7.99)
        hiddenuc1.style.display = "none"
        hiddenuc2.style.display = "block"
        hiddenuc3.style.display = "none"
        hiddenuc4.style.display = "none"
        hiddenuc5.style.display = "none"
        hiddenuc.style.display = "none"
        uctd2.style.marginLeft = "27px"
        ucvalyuta2.style.marginLeft = "57px"

        let enter = document.querySelectorAll(".ucentertd")

        enter.forEach(item =>{
            item.addEventListener("click", ()=>{
                alert("Lutfen Qeydiydan kecin")
            })
        })
    }
})


ucbtn3.addEventListener("click", ()=>{
    if (ucselect3.value == "Rubl" && input3.value >0){
        uctd3.innerHTML = "1080"
        ucvalyuta3.innerHTML = "Rubl"
        ucprize3.innerHTML = "883.06"
        ucnumber3.innerHTML = input3.value
        amount3.innerHTML = Math.floor(input3.value * 883.06)
        hiddenuc1.style.display = "none"
        hiddenuc2.style.display = "none"
        hiddenuc3.style.display = "block"
        hiddenuc4.style.display = "none"
        hiddenuc5.style.display = "none"
        hiddenuc.style.display = "none"
        uctd3.style.marginLeft = "27px"
        ucvalyuta3.style.marginLeft = "48px"

        let enter = document.querySelectorAll(".ucentertd")

        enter.forEach(item =>{
            item.addEventListener("click", ()=>{
                alert("Lutfen Qeydiydan kecin")
            })
        })
    } else if (ucselect3.value == "Usd" && input3.value >0){
        uctd3.innerHTML = "1080"
        ucvalyuta2.innerHTML = "Usd"
        ucprize2.innerHTML = "883.06"
        ucnumber2.innerHTML = input3.value
        amount2.innerHTML = Math.floor(input3.value * 883.6)
        hiddenuc1.style.display = "none"
        hiddenuc2.style.display = "none"
        hiddenuc3.style.display = "block"
        hiddenuc4.style.display = "none"
        hiddenuc5.style.display = "none"
        hiddenuc.style.display = "none"
        uctd3.style.marginLeft = "27px"
        ucvalyuta3.style.marginLeft = "48px"

        let enter = document.querySelectorAll(".ucentertd")

        enter.forEach(item =>{
            item.addEventListener("click", ()=>{
                alert("Lutfen Qeydiydan kecin")
            })
        })
    } else if (ucselect3.value == "Azn" && input3.value >0){
        uctd3.innerHTML = "1080"
        ucvalyuta3.innerHTML = "Azn"
        ucprize3.innerHTML = "16.69"
        ucnumber3.innerHTML = input3.value
        amount3.innerHTML = Math.floor(input3.value * 16.69)
        hiddenuc1.style.display = "none"
        hiddenuc2.style.display = "none"
        hiddenuc3.style.display = "block"
        hiddenuc4.style.display = "none"
        hiddenuc5.style.display = "none"
        hiddenuc.style.display = "none"
        uctd3.style.marginLeft = "27px"
        ucvalyuta3.style.marginLeft = "48px"

        let enter = document.querySelectorAll(".ucentertd")

        enter.forEach(item =>{
            item.addEventListener("click", ()=>{
                alert("Lutfen Qeydiydan kecin")
            })
        })
    }
})


ucbtn4.addEventListener("click", ()=>{
    if (ucselect4.value == "Rubl" && input4.value >0){
        uctd4.innerHTML = "2200"
        ucvalyuta4.innerHTML = "Rubl"
        ucprize4.innerHTML = "2071.60"
        ucnumber4.innerHTML = input4.value
        amount4.innerHTML = Math.floor(input4.value * 2071.60)
        hiddenuc1.style.display = "none"
        hiddenuc2.style.display = "none"
        hiddenuc3.style.display = "none"
        hiddenuc4.style.display = "block"
        hiddenuc5.style.display = "none"
        hiddenuc.style.display = "none"
        uctd4.style.marginLeft = "27px"
        ucvalyuta4.style.marginLeft = "48px"

        let enter = document.querySelectorAll(".ucentertd")

        enter.forEach(item =>{
            item.addEventListener("click", ()=>{
                alert("Lutfen Qeydiydan kecin")
            })
        })
    } else if (ucselect4.value == "Usd" && input4.value >0){
        uctd4.innerHTML = "2200"
        ucvalyuta4.innerHTML = "Usd"
        ucprize4.innerHTML = "2071.60"
        ucnumber4.innerHTML = input4.value
        amount4.innerHTML = Math.floor(input4.value * 2071.60)
        hiddenuc1.style.display = "none"
        hiddenuc2.style.display = "none"
        hiddenuc3.style.display = "none"
        hiddenuc4.style.display = "block"
        hiddenuc5.style.display = "none"
        hiddenuc.style.display = "none"
        uctd4.style.marginLeft = "27px"
        ucvalyuta4.style.marginLeft = "48px"

        let enter = document.querySelectorAll(".ucentertd")

        enter.forEach(item =>{
            item.addEventListener("click", ()=>{
                alert("Lutfen Qeydiydan kecin")
            })
        })
    } else if (ucselect4.value == "Azn" && input4.value >0){
        uctd4.innerHTML = "2200"
        ucvalyuta4.innerHTML = "Azn"
        ucprize4.innerHTML = "39.21"
        ucnumber4.innerHTML = input4.value
        amount4.innerHTML = Math.floor(input4.value * 39.21)
        hiddenuc1.style.display = "none"
        hiddenuc2.style.display = "none"
        hiddenuc3.style.display = "none"
        hiddenuc4.style.display = "block"
        hiddenuc5.style.display = "none"
        hiddenuc.style.display = "none"
        uctd4.style.marginLeft = "27px"
        ucvalyuta4.style.marginLeft = "48px"

        let enter = document.querySelectorAll(".ucentertd")

        enter.forEach(item =>{
            item.addEventListener("click", ()=>{
                alert("Lutfen Qeydiydan kecin")
            })
        })
    }
})


ucbtn5.addEventListener("click", ()=>{
    if (ucselect5.value == "Rubl" && input5.value >0){
        uctd5.innerHTML = "2750"
        ucvalyuta5.innerHTML = "Rubl"
        ucprize5.innerHTML = "4166.13"
        ucnumber5.innerHTML = input5.value
        amount5.innerHTML = Math.floor(input5.value * 4166.13)
        hiddenuc1.style.display = "none"
        hiddenuc2.style.display = "none"
        hiddenuc3.style.display = "none"
        hiddenuc4.style.display = "none"
        hiddenuc5.style.display = "block"
        hiddenuc.style.display = "none"
        uctd5.style.marginLeft = "27px"
        ucvalyuta5.style.marginLeft = "48px"

        let enter = document.querySelectorAll(".ucentertd")

        enter.forEach(item =>{
            item.addEventListener("click", ()=>{
                alert("Lutfen Qeydiydan kecin")
            })
        })
    } else if (ucselect5.value == "Usd" && input5.value >0){
        uctd5.innerHTML = "2750"
        ucvalyuta5.innerHTML = "Usd"
        ucprize5.innerHTML = "46.31"
        ucnumber5.innerHTML = input5.value
        amount5.innerHTML = Math.floor(input5.value * 46.31)
        hiddenuc1.style.display = "none"
        hiddenuc2.style.display = "none"
        hiddenuc3.style.display = "none"
        hiddenuc4.style.display = "none"
        hiddenuc5.style.display = "block"
        hiddenuc.style.display = "none"
        uctd5.style.marginLeft = "27px"
        ucvalyuta5.style.marginLeft = "48px"

        let enter = document.querySelectorAll(".ucentertd")

        enter.forEach(item =>{
            item.addEventListener("click", ()=>{
                alert("Lutfen Qeydiydan kecin")
            })
        })
    } else if (ucselect5.value == "Azn" && input5.value >0){
        uctd5.innerHTML = "2750"
        ucvalyuta5.innerHTML = "Azn"
        ucprize5.innerHTML = "78.74"
        ucnumber5.innerHTML = input4.value
        amount5.innerHTML = Math.floor(input5.value * 78.74)
        hiddenuc1.style.display = "none"
        hiddenuc2.style.display = "none"
        hiddenuc3.style.display = "none"
        hiddenuc4.style.display = "none"
        hiddenuc5.style.display = "block"
        hiddenuc.style.display = "none"
        uctd5.style.marginLeft = "27px"
        ucvalyuta5.style.marginLeft = "48px"

        let enter = document.querySelectorAll(".ucentertd")

        enter.forEach(item =>{
            item.addEventListener("click", ()=>{
                alert("Lutfen Qeydiydan kecin")
            })
        })
    }
})