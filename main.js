let startTime, endTime;
let imageSize ="";
let image = new Image();

let kboutput = document.getElementById("kbs");
let mboutput = document.getElementById("mbs");
let imageLink = "http://source.unsplash.com/random?topics=nature";

image.onload = async function() {
    endTime = new Date().getTime();

    await fetch(imageLink).then((Response)=>{
        imageSize = Response.headers.get("content-length");
        calculateSpeed();
    })
}

function calculateSpeed() {
    let timeDuration = (endTime - startTime) / 1000;

    let loadedBits = imageSize * 8;
    let speedInBps = (loadedBits / timeDuration).toFixed(2);
    let speedInKbps = (speedInBps / 1024).toFixed(2);
    let speedInMbps = (speedInKbps / 1024).toFixed(2);

    kboutput.innerHTML = `<span style="font-weight:bold">${speedInKbps}</span>`
    mboutput.innerHTML = `<span style="font-weight:bold">${speedInMbps}</span>`
}

const init = async () => {
    startTime = new Date().getTime();
    image.src = imageLink;
}

window.onload = () => init();