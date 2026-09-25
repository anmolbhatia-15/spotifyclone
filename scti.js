let songIndex=0;
let audionel=new Audio('song/1.mp3')
let masterPlay=document.getElementById("masterPlay")
let myProgressbar=document.getElementById("myProgressbar")
let gif=document.getElementById("gif")
let songname=document.getElementsByClassName('songname')
let mastersong=document.getElementById("mastersongname")

let songs=[
    {songsName:'let me love you',filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songsName:'godplan',filePath:"song/2.mp3",coverPath:"covers/2.jpg"},
    {songsName:'perfect',filePath:"song/3.mp3",coverPath:"covers/3.jpg"},
    {songsName:'superman',filePath:"song/4.mp3",coverPath:"covers/4.jpg"},
    {songsName:'believer',filePath:"song/5.mp3",coverPath:"covers/5.jpg"},
]
// audionel.play()

masterPlay.addEventListener('click',()=>{
    if(audionel.paused || audionel.currentTime<=0){
        audionel.play()
      masterPlay.classList.remove("fa-regular", "fa-circle-play");
        masterPlay.classList.add("fa-solid", "fa-pause");
        gif.style.opacity=1
    }else{
        audionel.pause()
        masterPlay.classList.remove("fa-solid", "fa-pause")
        masterPlay.classList.add("fa-regular", "fa-circle-play")
          gif.style.opacity=0
    }
})
audionel.addEventListener('timeupdate',()=>{

progress=parseInt((audionel.currentTime/audionel.duration)*100);

myProgressbar.value=progress


})
myProgressbar.addEventListener('change',()=>{
    audionel.currentTime=myProgressbar.value * audionel.duration /100
})
const makeallplay=()=>{
    Array.from(document.getElementsByClassName("songitem")).forEach((element)=>{
        element.classList.remove("fa-solid", "fa-pause")
        element.classList.add("fa-regular", "fa-circle-play")
    })
}

Array.from(document.getElementsByClassName("songitem")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeallplay()
          mastersong.innerText=songs[songIndex].songsName
        songIndex=parseInt(e.target.id)
        e.target.classList.remove("fa-regular", "fa-circle-play")
        e.target.classList.add("fa-solid", "fa-pause")
        audionel.src=`song/${songIndex+1}.mp3`;
        audionel.currentTime=0
        audionel.play()
         masterPlay.classList.add("fa-solid", "fa-pause")
         masterPlay.classList.remove,("fa-regular", "fa-circle-play")
         gif.style.opacity=1
        e.target.classList.remove("fa-regular", "fa-circle-play")
        e.target.classList.add("fa-solid", "fa-pause")
        })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }else{
        songIndex+=1
    }
       audionel.src=`song/${songIndex+1}.mp3`;
        audionel.currentTime=0
          mastersong.innerText=songs[songIndex].songsName
        audionel.play()
     masterPlay.classList.remove("fa-solid", "fa-pause")
         masterPlay.classList.add("fa-regular", "fa-circle-play")
         gif.style.opacity=1
        e.target.classList.remove("fa-regular", "fa-circle-play")
        e.target.classList.add("fa-solid", "fa-pause")
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }else{
        songIndex -=1
    }
       audionel.src=`song/${songIndex+1}.mp3`;
        audionel.currentTime=0
        mastersong.innerText=songs[songIndex].songsName
        audionel.play()
       masterPlay.classList.remove("fa-solid", "fa-pause")
         masterPlay.classList.add("fa-regular", "fa-circle-play")
        gif.style.opacity=1
        e.target.classList.remove("fa-regular", "fa-circle-play")
        e.target.classList.add("fa-solid", "fa-pause")
})