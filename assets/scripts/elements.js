const navHTML = `
<a href="/home.html" onmouseover="mechclick.playclip()">HOME</a>
<a href="/about.html" onmouseover="mechclick.playclip()">ABOUT</a>
`

const eyesHTML = `
<div class="eye">
    <div class="pupil" style="transform: translate(9.83777px, 1.79395px);">
        <div class="pupil-inner"></div>
    </div>
</div>
`


document.querySelector(".main-nav").innerHTML = navHTML
document.querySelector(".eyes").innerHTML = eyesHTML;

initializeSearch?.();