
//LISTA DE VARIAVES EM GRUPOS

let btn = document.querySelectorAll("button")

let btnChat = document.querySelectorAll(".btn-chat")

let chatPopUp = document.querySelectorAll(".btn-chat-popup")
let iChat = document.querySelectorAll("#i-chat")
let iLike = document.querySelectorAll("#i-like")
let spanLike = document.querySelectorAll(".span-like")
let userPost = document.querySelectorAll(".user-post")
let btnSalvar = document.querySelectorAll(".btn-salvar")
let spanSalvo = document.querySelectorAll("#id-salvar")
let iMorepopUp = document.querySelectorAll("#i-more-popup-ps-id")
let iMore = document.querySelectorAll("#i-more")
let banner = document.querySelector(".banner")
let iBanner = document.querySelector("#i-banner-close")
let contador = 12

console.log(banner)
//variaves UNICAS btn 
let btnLikePrimeiro = btn[0]
let btnLikeSegundo = btn[3]
let btnLikeTerceiro = btn[6]


//variaves UNICAS spanLIKES
let spanLikePrimeiro = spanLike[0]
let spanLikeSegundo = spanLike[1]
let spanLikeTerceiro = spanLike[2]

//variaves UNICAS iLIKES
let iLikePrimeiro = iLike[0]
let iLikeSegundo = iLike[1]
let iLikeTerceiro = iLike[2]


//variaves UNICAS chat

let btnChatPrimeiro = btnChat[0]
let btnChatSegundo = btnChat[1]
let btnChatTerceiro = btnChat[2]


//variaves UNICAS chat poupopup
let chatPopUpPrimeiro = chatPopUp[0]
let chatPopUpSegundo = chatPopUp[1]
let chatPopUpTerceiro = chatPopUp[2]

//variaves UNICAS i chat
let iChatPrimeiro = iChat[0]
let iChatSegundo = iChat[1]
let iChatTerceiro = iChat[2]
//variaves UNICAS i USER POST
let userPostPrimeiro = userPost[0]
let userPostSegundo = userPost[1]

//variaves UNICAS  btn salvar

let btnSalvarPrimeiro = btnSalvar[0]
let btnSalvarSegundo = btnSalvar[1]
let btnSalvarTerceiro =btnSalvar[2]


//variaves UNICAS i span salvar
let spanSalvoPrimeiro = spanSalvo[0]
let spanSalvoSegundo = spanSalvo[1]
let spanSalvoTerceiro = spanSalvo[2]

//variaves UNICAS i more popup

let iMorepopUpPrimeiro = iMorepopUp[0]
let iMorepopUpSegundo = iMorepopUp[1]
let iMorepopUpTerceiro = iMorepopUp[2]

//variaves UNICAS i more 
let iMorePrimeiro = iMore[0]
let iMoreSegundo = iMore[1]
let iMoreTerceiro = iMore[2]


//variaves UNICAS i more 






function fnome() {
iBanner.addEventListener("click", function() {
    banner.remove()
    
})

    //btn likies
    btnLikePrimeiro.addEventListener("click", () => {

        contador++
        spanLikePrimeiro.textContent = contador
        spanLikePrimeiro.style.color = "blue"
        spanLikePrimeiro.style.fontWeight = "bold"
        btnLikePrimeiro.style.opacity = "0.7"
        iLikePrimeiro.style.fontWeight = "bold"
        iLikePrimeiro.style.color = "blue"

        if (spanLikePrimeiro.textContent >= 13) {

            return spanLikePrimeiro.textContent = "13 Gostou"

        }



    })

    btnLikeSegundo.addEventListener("click", () => {

        contador++
        spanLikeSegundo.textContent = contador
        spanLikeSegundo.style.color = "blue"
        spanLikeSegundo.style.fontWeight = "bold"
        btnLikeSegundo.style.opacity = "0.7"
        iLikeSegundo.style.fontWeight = "bold"
        iLikeSegundo.style.color = "blue"

        if (spanLikeSegundo.textContent >= 13) {

            return spanLikeSegundo.textContent = "13 Gostou"

        }



    })

    btnLikeTerceiro.addEventListener("click", () => {

        contador++
        spanLikeTerceiro.textContent = contador
        spanLikeTerceiro.style.color = "blue"
        spanLikeTerceiro.style.fontWeight = "bold"
        btnLikeTerceiro.style.opacity = "0.7"
        iLikeTerceiro.style.fontWeight = "bold"
        iLikeTerceiro.style.color = "blue"

        if (spanLikeTerceiro.textContent >= 13) {

            return spanLikeTerceiro.textContent = "13 Gostou"

        }



    })
    //btnchat primeiro
    btnChatPrimeiro.addEventListener("click", () => {
        chatPopUpPrimeiro.removeAttribute("id")
        iChatPrimeiro.style.color = "blue"

        console.log("clicou chat")

    })

    btnChatPrimeiro.addEventListener("dblclick", () => {
        chatPopUpPrimeiro.setAttribute("id", "hidden")
        iChatPrimeiro.style.color = "black"

    })

    //btnchat segundo
    btnChatSegundo.addEventListener("click", () => {
        chatPopUpSegundo.removeAttribute("id")
        iChatSegundo.style.color = "blue"

        console.log("clicou chat")

    })

    btnChatSegundo.addEventListener("dblclick", () => {
        chatPopUpSegundo.setAttribute("id", "hidden")
        iChatSegundo.style.color = "black"

    })

    //btnchat tercero
    btnChatTerceiro.addEventListener("click", () => {
        chatPopUpTerceiro.removeAttribute("id")
        iChatTerceiro.style.color = "blue"

        console.log("clicou chat")

    })

    btnChatTerceiro.addEventListener("dblclick", () => {
        chatPopUpTerceiro.setAttribute("id", "hidden")
        iChatTerceiro.style.color = "black"

    })


    setTimeout(() => {
        userPostPrimeiro.removeAttribute("id")

    }, 1500);

    setTimeout(() => {

        userPostSegundo.removeAttribute("id")
    }, 2000);

// btn salvar
    btnSalvarPrimeiro.addEventListener("click", () => {
        spanSalvoPrimeiro.removeAttribute("id")

    });

    btnSalvarSegundo.addEventListener("click", () => {
        spanSalvoSegundo.removeAttribute("id")

    });

    btnSalvarTerceiro.addEventListener("click", () => {
        spanSalvoTerceiro.removeAttribute("id")

    });

// imore popup primeiro

iMorePrimeiro.addEventListener("click", () => {
    iMorepopUpPrimeiro.removeAttribute("id")

})

iMorePrimeiro.addEventListener("dblclick", () => {
    iMorepopUpPrimeiro.setAttribute("id","i-more-popup-ps-id")

})

// imore popup segundo
iMoreSegundo.addEventListener("click", () => {
    iMorepopUpSegundo.removeAttribute("id")

})

iMoreSegundo.addEventListener("dblclick", () => {
    iMorepopUpSegundo.setAttribute("id","i-more-popup-ps-id")

})


iMoreTerceiro.addEventListener("click", () => {
    iMorepopUpTerceiro.removeAttribute("id")

})

iMoreTerceiro.addEventListener("dblclick", () => {
    iMorepopUpTerceiro.setAttribute("id","i-more-popup-ps-id")

})
}
fnome()




