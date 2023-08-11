//lấy đối tượng video
var vid = document.getElementById("vid");
vid.addEventListener('loadedmetadata', function() {
    const videoDuration = vid.duration;
    //lây vị tri chuột và so sánh với screen width
    document.addEventListener('mousemove', function(event) {
        var mouseX = event.clientX; // Tọa độ X của chuột
        var screenWidth = document.querySelector("#wrapper").clientWidth;
        var ratio = mouseX / (1.1*screenWidth);
        vid.currentTime = videoDuration*ratio ;
    });
})

//đổi chiều máy bay
var oldTimeX = 0;
var newTimeX = 0;
var wrapper = document.getElementById("wrapper");
setInterval(()=>{
    
    document.addEventListener("mousemove", (event)=>{
        newTimeX = event.clientX;
    });
    console.log(oldTimeX + " " + newTimeX)
    if(oldTimeX < newTimeX){
        wrapper.style.cursor = `url("./assetForSmooth/plane.png"), auto`;
    }else{
        wrapper.style.cursor = `url("./assetForSmooth/plane2.png"), auto`;
    }
    oldTimeX = newTimeX;
}, 200);

//âm thanh
document.querySelector(".tower").addEventListener('mouseenter', ()=>{
    var audio = document.querySelector("audio");
    audio.play();

})