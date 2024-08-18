var navbarItems = `
    <div class="title">
        <div class="header">
            <h3>Alex Williams</h3>
            <h2>Portfolio Website</h2>
        </div>
        <div class="topnav">
            <a href="index.html" class="nav" id="nav1">About</a>
            <div class="dropdown">
                <button class="dropbtn">Released Games</button>
                <div class="dropdown-content">
                    <a href="DuckLife9.html">Duck Life 9 (Wix-Games - Unity)</a>
                </div>
            </div>
             <div class="dropdown">
                <button class="dropbtn">Game Jams</button>
                <div class="dropdown-content">
                    <a href="Wanderer.html">Wander (Unity)</a>
                    <a href="CubeMayhem.html">Cube Mayhem (UE4)</a>
                    <a href="ForgetfulInsomnia.html">Forgetful Insomnia (Unity)</a>
                    <a href="LastLineLives.html">Last Line Lives (UE4)</a>
                </div>
            </div>
            <a href="animationShowreel.html"  class="nav" id="nav4">Animation Showreel</a>
            <a href="photoshop.html" class="nav" id="nav5"> Photoshop</a>
             <div class="dropdown">
                <button class="dropbtn">Experimental / Tutorial Projects</button>
                <div class="dropdown-content">
                    <a href="UnrealWorkshop.html">Unreal Workshop</a>
                    <a href="Pinball.html">Pinball</a>
                </div>
            </div>
        </div>
    </div>  
    `
document.getElementById("navbar-container").innerHTML = navbarItems;


const navItems = document.querySelectorAll('.nav');
for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function () {
        Array.from(navItems, navItem => {
            removeCurrent(navItem);
        });

        setCurrent(navItems[i]);


        sessionStorage.setItem('current', navItems[i].id);
    });
}

const currentItem = document.getElementById(sessionStorage.getItem('current'));

if (currentItem == null) {
    setCurrent(document.getElementById("nav1"));
} else {
    setCurrent(currentItem);
}

function setCurrent(currentItem) {
    currentItem.classList.add('current');
    currentItem.classList.add('disableClick')
}

function removeCurrent(currentItem) {
    currentItem.classList.remove('current');
    currentItem.classList.remove('disableClick')
}

