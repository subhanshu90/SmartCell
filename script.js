var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle() {
    if(MenuItems.style.maxHeight == "2px") {
        MenuItems.style.maxHeight = "180px";
    } 
    else {
        MenuItems.style.maxHeight = "3px";
    }
}
