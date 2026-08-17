const navHTML = `
<div class="nav-label">navigation</div>

<a class="nav-link" href="/about.html" onmouseover="mechanical.playclip()" onclick="flashlight.playclip()">about</a>

<a class="nav-link" href="/blog.html" onmouseover="mechanical.playclip()" onclick="flashlight.playclip()">blog</a>

<a class="nav-link" href="/shrines.html" onmouseover="mechanical.playclip()" onclick="flashlight.playclip()">shrines</a>

<a class="nav-link" href="/tracking.html" onmouseover="mechanical.playclip()" onclick="flashlight.playclip()">tracking</a>

<a class="nav-link" href="/research.html" onmouseover="mechanical.playclip()" onclick="flashlight.playclip()">research</a>

<a class="nav-link" href="/commonplace.html" onmouseover="mechanical.playclip()" onclick="flashlight.playclip()">commonplace</a>
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

    <div class="toggle">
        <input onmouseover="mechanical.playclip()" onclick="flashlight.playclip()" type="checkbox" class="checkbox font" id="fontToggle"/>
        <label class="label" for="fontToggle">Toggle Font</label>
    </div>

    <div class="toggle">
        <input onmouseover="mechanical.playclip()" onclick="flashlight.playclip()" type="checkbox" class="sounds" id="mute-checkbox" check/>
        <label for="mute-checkbox">Toggle Sounds</label>
    </div>

</div>

<a class="nav-link" href="/about.html" onmouseover="mechanical.playclip()" onclick="flashlight.playclip()">view the sitely</a>

<div class="aside-card">
<span class="aside-card-label">quick links</span>

    <a href="/assets/testing/code-test.html" onmouseover="mechanical.playclip()" onclick="flashlight.playclip()">Code-Test.HTML</a>

    <a href="/posts/template.html" onmouseover="mechanical.playclip()" onclick="flashlight.playclip()">Blog Post Cheatsheet</a>

    <a href="/not_found.html" onmouseover="mechanical.playclip()" onclick="flashlight.playclip()">Current WIP Page</a>

</div>

    <div class="centered muted">
        <pre>♰────────────────♰</pre>
    </div>

<div class="aside-card">
<span class="aside-card-label">to-do / planned</span>
    <div class="aside-card-body">
        <ul class="list small">
            <li>
                <input onmouseover="mechanical.playclip()" onclick="flashlight.playclip()" type="checkbox" class="checkbox" checked/>
                <label class="label">sitely.html</label>
            </li>
            <li>
                <input onmouseover="mechanical.playclip()" onclick="flashlight.playclip()" type="checkbox" class="checkbox"/>
                <label class="label">reviews.html + review-template.html</label>
            </li>
            <li>
                <input onmouseover="mechanical.playclip()" onclick="flashlight.playclip()" type="checkbox" class="checkbox"/>
                <label class="label">resources.html</label>
            </li>
            <li>
                <input onmouseover="mechanical.playclip()" onclick="flashlight.playclip()" type="checkbox" class="checkbox"/>
                <label class="label">credits.html</label>
            </li>
            <li>
                <input onmouseover="mechanical.playclip()" onclick="flashlight.playclip()" type="checkbox" class="checkbox"/>
                <label class="label">collections.html + collection-template.html</label>
            </li>
            <li>
                <input onmouseover="mechanical.playclip()" onclick="flashlight.playclip()" type="checkbox" class="checkbox"/>
                <label class="label">cheatsheet.html</label>
            </li>
        </ul>
    </div>
</div>

<div class="aside-card">
<span class="aside-card-label">sticky note</span>
    <div class="aside-card-body">
        <p>possible pages: commonplace, collections, credits, resources, dream journal? (maybe just make it a tag in blogs), coding cheatsheet (vsc shortcuts, etc), </p>
    </div>
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

