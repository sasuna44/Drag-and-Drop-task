const videoList = [
    "video1",
    "video2",
    "video3",
    "video4",
    "video5"
];
const vedioListDiv = document.querySelector(".vedio-list");
videoList.forEach(video => {
    const videoItem = document.createElement("button");
    videoItem.textContent = video;
    videoItem.addEventListener("click", () => {
        const vedioPlayerDiv = document.querySelector(".vedio-player");
        vedioPlayerDiv.innerHTML = `<video src="Video/${video}.mp4" >
                         <track src="Video/${video}.vtt" kind="subtitles" srclang="en" label="English">
                         </video>`;
        const videoPlayer = document.querySelector("video");
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
    });
    vedioListDiv.appendChild(videoItem);
})
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        const videoPlayer = document.querySelector("video");
        videoPlayer.playbackRate += 0.5;
    }
})
document.addEventListener("click", () => {
    const videoPlayer = document.querySelector("video");
    if (videoPlayer.paused) {
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }
})