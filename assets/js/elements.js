const navHTML = `
<div class="nav-label">navigation</div>

<a class="nav-link" href="/about.html" onmouseover="mechanical.playclip()" onclick="flashlight.playclip()">about</a>

<a class="nav-link" href="/blog.html" onmouseover="mechanical.playclip()" onclick="flashlight.playclip()">blog</a>

<a class="nav-link" href="/shrines.html" onmouseover="mechanical.playclip()" onclick="flashlight.playclip()">shrines</a>

<a class="nav-link" href="/tracking.html" onmouseover="mechanical.playclip()" onclick="flashlight.playclip()">tracking</a>

<a class="nav-link" href="/research.html" onmouseover="mechanical.playclip()" onclick="flashlight.playclip()">research</a>
`

const headerHTML = `
<a class="site-title" href="/home.html" onmouseover="mechanical.playclip()" onclick="flashlight.playclip()">cobweb.crawler</a>

<div class="header-status">
    <span class="status-dot"></span>
    <span>online ꉂ(˵˃ ᗜ ˂˵)</span>
</div>
`

const asideHTML = `
<div class="aside-label">side notes</div>

<div class="aside-card">
    <select data-set-theme id="themeSwitcher" onmouseover="mechanical.playclip()" onclick="flashlight.playclip()">
        <option value="" onmouseover="mechanical.playclip()" onclick="flashlight.playclip()">System</option>
        <option value="light" onmouseover="mechanical.playclip()" onclick="flashlight.playclip()">Light</option>
    </select>
</div>


<div class="aside-card">
<span class="aside-card-label">settings</span>
    <p>
        planed: toggle font, toggle sounds
    </p>
</div>

<div class="aside-card">
<span class="aside-card-label">quick links</span>

<a href="/assets/testing/code-test.html" onmouseover="mechanical.playclip()" onclick="flashlight.playclip()">Code-Test.HTML</a>

<a href="/posts/template.html" onmouseover="mechanical.playclip()" onclick="flashlight.playclip()">Blog Post Cheatsheet</a>

<a href="/not_found.html" onmouseover="mechanical.playclip()" onclick="flashlight.playclip()">Current WIP Page</a>

</div>

<br>

<div id="tab">

<div class="nb"><div class="sp"></div>
    <p>start /research/custom-keyboards.html</p>
</div>

<div class="nb"><div class="sp"></div>
    <p>
        content
    </p>
</div>

</div>
`

const footerHTML = `
<a class="link" href="/index.html" onmouseover="mechanical.playclip()" onclick="flashlight.playclip()">index.html</a>
<span>cobweb.crawler © 2026</span>
<a class="link" href="#top" onmouseover="mechanical.playclip()" onclick="flashlight.playclip()">top</a>
`


document.querySelector(".site-nav").innerHTML = navHTML;
document.querySelector(".site-header").innerHTML = headerHTML;
document.querySelector(".site-aside").innerHTML = asideHTML;
document.querySelector(".site-footer").innerHTML = footerHTML;

initializeSearch?.();

/*
document.querySelector("nav").innerHTML = navHTML;
document.getElementById("nav-id").innerHTML = navHTML;
document.querySelector(".nav-class").innerHTML = navHTML;
*/

