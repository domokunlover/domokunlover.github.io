document.querySelector('.copyButton').onclick = () => navigator.clipboard.writeText(`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>PageTitle</title>

  <link rel="stylesheet" href="/style.css">
  <link rel="stylesheet" href="/assets/css/pages.css">
  <link rel="stylesheet" href="/assets/css/LINK">


  <link rel="shortcut icon" href="/assets/favicons/FAVICON" type="image/x-icon">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
  <script src="https://static.tumblr.com/lspzyz3/xloqk6cgp/jquery.style-my-tooltips.js"></script>
</head>

<body>

<div id="loadingScreen">Loading</div>
<noscript>
    <style>
        #loadingScreen {display: none;}
        body {overflow-y: auto;}
    </style>
</noscript>

  <div class="site-shell">

    <header class="site-header">
      <div class="site-title">
        <a href="/home.html" onmouseover="mechclick.playclip()">INCIDENT <span class="red">1954</span></a>
        <small id="shin_quotes"></small>
      </div>

      <nav class="main-nav"></nav>
    </header>

    <main class="grid">

        
    </main>

    <footer class="site-footer">
      <a href="https://neocities.org/site/incident-1954" target="_blank" onmouseover="mechclick.playclip()">NEOCITIES PROFILE</a>
      <span>JULY 15, 2023 - FOREVER</span>
      <a href="/home.html" onmouseover="mechclick.playclip()">← HOME.HTML</a>
    </footer>

  </div>

<div class="eyes"></div>

<script src="/script.js"></script>
<script src="/assets/scripts/elements.js"></script>
<script src="/assets/scripts/eye-tracking.js"></script>
</body>
</html>`)
  .then(d=>alert('Copied HTML.'))
  .catch(e=>alert('There was an error: '+e.message))