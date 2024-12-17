console.log("welcome to spotify");
let songindex=0;
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');

let gif=document.getElementById('gif');

let songitems=Array.from(document.getElementsByClassName('songitem'));
 
let audioelement=new Audio('song/what makes you beautiful.mp4');
// audioelement.play();


let songs=[
    {songname:"Night Changes", filePath:"song/night changes.mp3",coverPath:"cover/night changes.png"},

    {songname:"What makes You Beautiful", filePath:"song/what makes you beautiful.mp4",coverPath:"cover/what makes you beautiful.png"},

    {songname:"Dusk till Dawn", filePath:"song/dusk till dawn.mp4",coverPath:"cover/dusk till dawn.png"},

    {songname:"One of the girls", filePath:"song/one of the girls.mp4",coverPath:"cover/one of the girls.png"},

    {songname:"Love Me Like You Do", filePath:"song/love me like you do.mp4",coverPath:"cover/love me like you do.png"},
]

songitems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innertext=songs[i].songname;
    console.log(songs[i].songname);

})

masterplay.addEventListener('click',()=>{
    if (audioelement.paused|| audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-regular', 'fa-circle-play');
        masterplay.classList.add('fa-solid', 'fa-circle-pause');
        gif.style.opacity=1;
        

        console.log(masterplay.classList);
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-solid', 'fa-circle-pause');

        masterplay.classList.add('fa-regular', 'fa-circle-play');
        gif.style.opacity=0;
       
    }

})

audioelement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');

    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    console.log(progress);
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=(myprogressbar.value*audioelement.duration)/100;
})

const makeallplays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-circle-pause'); // Remove "pause" icon
        element.classList.add('fa-circle-play');    // Add "play" icon
    });
};

// Add event listeners to each song item play button
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeallplays(); 
        

        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        
        audioelement.src=songs[songindex].filePath;
        mastersongname.innerText=songs[songindex].songname;

        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-regular', 'fa-circle-play');
        masterplay.classList.add('fa-solid', 'fa-circle-pause');
        gif.style.opacity=1;
    });
});

// document.getElementById('next').addEventListener('click',()=>{
//     if(songindex>=4){
//         songindex=0;
//     }
//     else{
//         songindex+=1;
//     }
//     audioelement.src=songs[songindex].filePath;

//     mastersongname.innerText=songs[songindex].songname;

//     audioelement.currentTime=0;
//     audioelement.play();
//     gif.style.opacity=1;
//     masterplay.classList.remove('fa-regular', 'fa-circle-play');
//     masterplay.classList.add('fa-solid', 'fa-circle-pause');
// })


document.getElementById('next').addEventListener('click', () => {
    console.log("Next button clicked");
    console.log("Current song index:", songindex);

    if (songindex >= songs.length - 1) { // Updated to use dynamic array length
        songindex = 0;
    } else {
        songindex += 1;
    }

    console.log("Updated song index:", songindex);

    // Update the audio source
    audioelement.src = songs[songindex].filePath;
    console.log("Audio source updated to:", audioelement.src);

    // Update the song name
    mastersongname.innerText = songs[songindex].songname;
    console.log("Song name updated to:", mastersongname.innerText);

    // Play the song and show the GIF
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;

    // Update the play button state
    masterplay.classList.remove('fa-regular', 'fa-circle-play');
    masterplay.classList.add('fa-solid', 'fa-circle-pause');
});


// document.getElementById('previous').addEventListener('click',()=>{
//     if(songindex<0){
//         songindex=0;
//     }
//     else{
//         songindex-=1;
//     }
//     audioelement.src=songs[songindex].filePath;

//     mastersongname.innerText=songs[songindex].songname;
//     audioelement.currentTime=0;
//     audioelement.play();
//     gif.style.opacity=1;
//     masterplay.classList.remove('fa-regular', 'fa-circle-play');
//     masterplay.classList.add('fa-solid', 'fa-circle-pause');
// })


document.getElementById('previous').addEventListener('click', () => {
    console.log("Previous button clicked");
    console.log("Current song index before update:", songindex);

    if (songindex <= 0) {
        songindex = 0;
    } else {
        songindex -= 1;
    }

    console.log("Updated song index:", songindex);

    // Update other elements
    audioelement.src = songs[songindex].filePath;
    console.log("Updated audio source:", audioelement.src);

    mastersongname.innerText = songs[songindex].songname;
    console.log("Updated master song name:", mastersongname.innerText);

    audioelement.currentTime = 0;
    audioelement.play();

    gif.style.opacity = 1;
    masterplay.classList.remove('fa-regular', 'fa-circle-play');
    masterplay.classList.add('fa-solid', 'fa-circle-pause');
});




