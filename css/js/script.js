let button = document.querySelector(".button")
let bacraodcolor = document.querySelector("body")
let sosial = document.querySelector(".sosilaMedia")
let navbar = document.querySelector(".navBar")
let firstbox = document.querySelector(".firstbox")
let number = document.querySelector(".number")
let second = document.querySelector(".second")
let number1 = document.querySelector(".number1")
let third = document.querySelector(".third")
let number2 = document.querySelector(".number2")
let fourth = document.querySelector(".fourth")
let number3 = document.querySelector(".number3")
let Overview = document.querySelector(".Overview")
let page = document.querySelector(".page")
let PageViewsNum = document.querySelector(".PageViewsNum", "h1")
let page1 = document.querySelector(".page1")
let page11 = document.querySelector(".page11", "h1")
let page2 = document.querySelector(".page2")
let page22 = document.querySelector(".page22", "h1")
let page3 = document.querySelector(".page3")
let page33 = document.querySelector(".page33", "h1")
let page4 = document.querySelector(".page4")
let page44 = document.querySelector(".page44", "h1")
let page5 = document.querySelector(".page5")
let page55 = document.querySelector(".page55", "h1")
let page6 = document.querySelector(".page6")
let page66 = document.querySelector(".page66", "h1")
let page7 = document.querySelector(".page7")
let page77 = document.querySelector(".page77", "h1")
let footer = document.querySelector(".footer", "p")

function ButtonClikc() {
    if (button.classList.contains("button")) {
        button.classList.toggle("active-button");
    }
    if (button.classList.contains("active-button")) {
        bacraodcolor.style.background = "hsl(230, 17%, 7%)";
        sosial.style.color = "white"
        navbar.style.color = "white"
        firstbox.style.background = "hsl(230, 17%, 14%)"
        number.style.color = "white"
        second.style.background = "hsl(230, 17%, 14%)"
        number1.style.color = "white"
        third.style.background = "hsl(230, 17%, 14%)"
        number2.style.color = "white"
        fourth.style.background = "hsl(230, 17%, 14%)"
        number3.style.color = "white"
        Overview.style.color = "white"
        page.style.background = "hsl(230, 17%, 14%)"
        PageViewsNum.style.color = "white"
        page1.style.background = "hsl(230, 17%, 14%)"
        page11.style.color = "white"
        page2.style.background = "hsl(230, 17%, 14%)"
        page22.style.color = "white"
        page3.style.background = "hsl(230, 17%, 14%)"
        page33.style.color = "white"
        page4.style.background = "hsl(230, 17%, 14%)"
        page44.style.color = "white"
        page5.style.background = "hsl(230, 17%, 14%)"
        page55.style.color = "white"
        page6.style.background = "hsl(230, 17%, 14%)"
        page66.style.color = "white"
        page7.style.background = "hsl(230, 17%, 14%)"
        page77.style.color = "white"
        footer.style.color = "white"
    }
    else {
        bacraodcolor.style.background = "white";
        sosial.style.color = "black"
        navbar.style.color = "black"
        firstbox.style.background = "hsl(227, 47%, 96%)"
        number.style.color = "black"
        second.style.background = "hsl(227, 47%, 96%)"
        number1.style.color = "black"
        third.style.background = "hsl(227, 47%, 96%)"
        number2.style.color = "black"
        fourth.style.background = "hsl(227, 47%, 96%)"
        number3.style.color = "black"
        Overview.style.color = "black"
        page.style.background = "hsl(227, 47%, 96%)"
        PageViewsNum.style.color = "black"
        page1.style.background = "hsl(227, 47%, 96%)"
        page11.style.color = "black"
        page2.style.background = "hsl(227, 47%, 96%)"
        page22.style.color = "black"
        page3.style.background = "hsl(227, 47%, 96%)"
        page33.style.color = "black"
        page4.style.background = "hsl(227, 47%, 96%)"
        page44.style.color = "black"
        page5.style.background = "hsl(227, 47%, 96%)"
        page55.style.color = "black"
        page6.style.background = "hsl(227, 47%, 96%)"
        page66.style.color = "black"
        page7.style.background = "hsl(227, 47%, 96%)"
        page77.style.color = "black"
        footer.style.color = "black"
    }
}