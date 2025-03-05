window.addEventListener("scroll", function() {
    const listItems = document.querySelectorAll("ul li");
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    
    // Change first list item in the first 8vh
    if (scrollPosition < viewportHeight * 0.08) {
        listItems[0].classList.add("purple-text");
    } else {
        listItems[0].classList.remove("purple-text");
    }

    // Change the other list items every 85vh
    for (let i = 1; i < listItems.length; i++) {
        let itemStart = viewportHeight * (0.08 + i * 0.55);
        let itemEnd = viewportHeight * (0.08 + (i + 1) * 0.55);

        if (scrollPosition >= itemStart && scrollPosition < itemEnd) {
            listItems[i].classList.add("purple-text");
        } else {
            listItems[i].classList.remove("purple-text");
        }
    }
});

let x= document.getElementById("sidelist");
let y = document.getElementById("container1");
let z = document.getElementById("container2");
let a = document.getElementById("container3");
let b = document.getElementById("container4");
let c = document.getElementById("container5");
let d = document.getElementById("container6");
let e = document.getElementById("container7");
function sidelist(){
    x.style.display="flex";
    y.style.display="none";
    z.style.display="none";
    a.style.display="none";
    b.style.display="none";
    c.style.display="none";
    d.style.display="none";

}

function back(){
    x.style.display="none";
    y.style.display="flex";
    z.style.display="flex";
    a.style.display="flex";
    b.style.display="flex";
    c.style.display="flex";
    d.style.display="flex";
}

function start(){
    document.getElementById("li1").style.color="purple";
    document.getElementById("li2").style.color="white";
    document.getElementById("li3").style.color="white";
    document.getElementById("li4").style.color="white";
    document.getElementById("li5").style.color="white";
    x.style.display="none";
    y.style.display="flex";
    z.style.display="none";
    a.style.display="none";
    b.style.display="none";
    c.style.display="none";
    d.style.display="none";
}
function about(){
    document.getElementById("li2").style.color="purple";
    document.getElementById("li1").style.color="white";
    document.getElementById("li3").style.color="white";
    document.getElementById("li4").style.color="white";
    document.getElementById("li5").style.color="white";
    x.style.display="none";
    y.style.display="none";
    z.style.display="flex";
    a.style.display="none";
    b.style.display="none";
    c.style.display="none";
    d.style.display="none";
}
function project(){
    document.getElementById("li3").style.color="purple";
    document.getElementById("li2").style.color="white";
    document.getElementById("li1").style.color="white";
    document.getElementById("li4").style.color="white";
    document.getElementById("li5").style.color="white";
    x.style.display="none";
    y.style.display="none";
    z.style.display="none";
    a.style.display="flex";
    b.style.display="none";
    c.style.display="none";
    d.style.display="none";
}
function skill(){
    document.getElementById("li4").style.color="purple";
    document.getElementById("li2").style.color="white";
    document.getElementById("li3").style.color="white";
    document.getElementById("li1").style.color="white";
    document.getElementById("li5").style.color="white";
    x.style.display="none";
    y.style.display="none";
    z.style.display="none";
    a.style.display="none";
    b.style.display="flex";
    c.style.display="none";
    d.style.display="none";
}
function contact(){
    document.getElementById("li5").style.color="purple";
    document.getElementById("li2").style.color="white";
    document.getElementById("li3").style.color="white";
    document.getElementById("li4").style.color="white";
    document.getElementById("li1").style.color="white";
    x.style.display="none";
    y.style.display="none";
    z.style.display="none";
    a.style.display="none";
    b.style.display="none";
    c.style.display="none";
    d.style.display="flex";
}
