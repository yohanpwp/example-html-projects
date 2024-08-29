

function changeVideo(src,name) {
    let video = document.getElementById("myVideo");
    video.src = src;
    let videoName = document.getElementById("myName");
    videoName.innerHTML = name;
    
}

