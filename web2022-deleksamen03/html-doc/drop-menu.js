const menu = document.getElementById("page-menu")
// var windoWidth = window.matchMedia("min-width: 800px")


// function MyFunction (windoWidth){
//         if (windoWidth.matches){
//         menu.style.display = "flex"
//     }
//     else{
//         menu.style.display = "block"
//     }

// }
const showMenu = () => {
    if(menu.style.display == "block"){
        menu.style.display = "none"
        
    }

    else{
        menu.style.display = "block"
    }
}

MyFunction(windoWidth)
