var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("header").style.top = "0";
            document.querySelector("#mySidepanel").style.top = "0";
        } else {
            document.getElementById("header").style.top = "-50px";
            document.querySelector("#mySidepanel").style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
        }


// =====================================
function openNav(){
    document.getElementById("panel").style.display = "block";

};
function closeNav(){
    document.getElementById("panel").style.display = "none";
    
}
// click hide item menu
const panel = document.querySelector("#panel");
const menuItems = document.querySelectorAll(".box-menu-list li");
for(let i = 0; i< menuItems.length; i++){
    let menuItem = menuItems[i];
    menuItem.onclick = function(){
        setTimeout(()=>{panel.style.display="none"},500);
    }
}

