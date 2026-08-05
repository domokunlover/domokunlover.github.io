var sites = [
    'http://www.google.com',
    'http://www.neocities.com',
    'http://www.twitter.com',
    'http://www.youtube.com'
];

function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    window.open(sites[i], '_blank');
}

/*
 onclick="randomSite();"
*/


const neighbors = [
    {
        name: "LizDotCom",
        url: "https://lizdotcom.neocities.org/",
        image: "/assets/neighbors/previews/lizdotcom.png"
    },
    {
        name: "Dumby",
        url: "https://dumby.neocities.org/",
        image: "/assets/neighbors/previews/dumby.png"
    },
    {
        name: "SweetheartMemory",
        url: "https://sweetheartmemory.neocities.org/",
        image: "/assets/neighbors/previews/sweetheartmemory.png"
    },
    {
        name: "404City",
        url: "https://404city.neocities.org/",
        image: "/assets/neighbors/previews/404city.png"
    },
    {
        name: "FunnyOrangeCat",
        url: "https://funnyorangecat.neocities.org/",
        image: "/assets/neighbors/previews/funnyorangecat.png"
    },
    {
        name: "philia995",
        url: "https://philia995.neocities.org/",
        image: "/assets/neighbors/previews/philia995.png"
    },
    {
        name: "SugarFantasies",
        url: "https://sugarfantasies.neocities.org/",
        image: "/assets/neighbors/previews/sugarfantasies.png"
    },
    {
        name: "Chimerathing",
        url: "https://chimerathing.neocities.org/",
        image: "/assets/neighbors/previews/chimerathing.png"
    },
    {
        name: "VentaBlack",
        url: "https://ventablack.neocities.org/",
        image: "/assets/neighbors/previews/ventablack.png"
    },
    {
        name: "KKB",
        url: "https://kkb.ooo/",
        image: "/assets/neighbors/previews/kkb.png"
    },
    {
        name: "KDKemp",
        url: "https://kdkemp.com/",
        image: "/assets/neighbors/previews/kdkemp.png"
    },
    {
        name: "IsobelsWeb",
        url: "https://isobelsweb.com/",
        image: "/assets/neighbors/previews/isobelsweb.png"
    },
    {
        name: "Brachypelmide",
        url: "https://brachypelmide.neocities.org/",
        image: "/assets/neighbors/previews/brachypelmide.png"
    },
    {
        name: "LucyIsDying",
        url: "https://lucysdying.neocities.org/",
        image: "/assets/neighbors/previews/lucyisdying.png"
    },
    {
        name: "BummerDotDom",
        url: "https://bummerdotcom.com/",
        image: "/assets/neighbors/previews/bummerdotcom.png"
    },
    {
        name: "Moekkis",
        url: "https://moekkis.neocities.org/",
        image: "/assets/neighbors/previews/moekkis.png"
    },
    {
        name: "AngelDolly",
        url: "https://angeldolly.com/",
        image: "/assets/neighbors/previews/angeldolly.png"
    },
    {
        name: "AetherWay",
        url: "https://aetherway.neocities.org",
        image: "/assets/neighbors/previews/aetherway.png"
    },
    {
        name: "Bizly",
        url: "https://bizly.neocities.org/",
        image: "/assets/neighbors/previews/bizly.png"
    },
    {
        name: "Nexos-Den",
        url: "https://nexos-den.neocities.org/",
        image: "/assets/neighbors/previews/nexos-den.png"
    },
    {
        name: "Netsqhere",
        url: "https://netsqhere.neocities.org/",
        image: "/assets/neighbors/previews/netsqhere.png"
    },
    {
        name: "Kockatriceking",
        url: "https://kockatriceking.neocities.org/",
        image: "/assets/neighbors/previews/kockatriceking.png"
    },
    {
        name: "2Cherrish",
        url: "https://2cherrish.neocities.org/",
        image: "/assets/neighbors/previews/2cherrish.png"
    },
    {
        name: "Caesar",
        url: "https://caesar.wtf/",
        image: "/assets/neighbors/previews/caesar.png"
    },
    {
        name: "Kyrn0v",
        url: "https://kyrn0v.neocities.org/",
        image: "/assets/neighbors/previews/kryn0v.png"
    },
    {
        name: "Wrygrinn",
        url: "https://wrygrinn.net/",
        image: "/assets/neighbors/previews/wygrinn.png"
    },
    {
        name: "Abberation",
        url: "https://abberation.neocities.org/",
        image: "/assets/neighbors/previews/abberation.png"
    },
    {
        name: "PhailSnail",
        url: "https://phailsnail.neocities.org/",
        image: "/assets/neighbors/previews/phailsnail.png"
    },
    {
        name: "PossiblyMatt",
        url: "https://possiblymatt.neocities.org/",
        image: "/assets/neighbors/previews/possiblymatt.png"
    },
    {
        name: "BugToast",
        url: "https://bugtoast.neocities.org/",
        image: "/assets/neighbors/previews/bugtoast.png"
    },
    {
        name: "GlitteryBri",
        url: "https://glitterybri.neocities.org/",
        image: "/assets/neighbors/previews/glitterybri.png"
    },
    {
        name: "SmokingHorse",
        url: "https://smokinghorse.neocities.org/",
        image: "/assets/neighbors/previews/smokinghorse.png"
    },
    {
        name: "MultiStuff",
        url: "https://multistuff.neocities.org/",
        image: "/assets/neighbors/previews/multistuff.png"
    },
    {
        name: "Ratzoid",
        url: "https://ratzoid.neocities.org/",
        image: "/assets/neighbors/previews/ratzoid.png"
    }
];

let current = 0;

const preview = document.getElementById("neighbor-preview");
const name = document.getElementById("neighbor-name");
const link = document.getElementById("neighbor-link");

function updateSite(){
    preview.src = neighbors[current].image;
    preview.alt = neighbors[current].name;

    name.textContent = neighbors[current].name;

    link.href = neighbors[current].url;
}

function nextSite(){
    current = (current + 1) % neighbors.length;
    updateSite();
}

function previousSite(){
    current--;

    if(current < 0){
        current = neighbors.length - 1;
    }

    updateSite();
}

updateSite();