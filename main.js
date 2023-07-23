// let song_image = document.getElementById("cover_photo");
// let song_title = document.getElementById("title");
// let song_singer = document.getElementById("singer");
// let song_play = document.getElementById("play");
// let song_prev = document.getElementById("prev");
// let song_next = document.getElementById("next");
// let progressBar = document.getElementById("progressBar");

// // Controller for the progress bar
// // Existing code for initializing elements and songs list
// // ...  
// let songs_list = [
//     {
//         name : 'Lover',
//         Image : 'images/lover_image.jpg',
//         Song : 'music/Lover.mp3',
//         Singer : 'Diljit'
//     },
//     {
//         name : 'Love Story',
//         Image : 'images/taylor_swift_love_story.jpg',
//         Song : 'music/Taylor-Swift-Love-Story.mp3',
//         Singer : 'Taylor Swift'
//     },
//     {
//         name : 'Red',
//         Image : 'images/Taylor_Swift_Red.png',
//         Song : 'music/Taylor-Swift-Red.mp3',
//         Singer : 'Taylor Swift'
//     },
//     {
//         name : 'Wildest Dreams',
//         Image : 'images/wildest_dreams_taylor.jfif',
//         Song : 'music/Taylor-Swift-Wildest-Dreams.mp3',
//         Singer : 'Taylor Swift'
//     }
// ]

// let i = 0;
// let flag = false;

// var audio = new Audio(songs_list[i].Song);
// song_image.src = songs_list[i].Image;
// song_title.innerHTML = songs_list[i].name;
// song_singer.innerHTML = songs_list[i].Singer;

// function updateProgressBar() {
//     const progress = (audio.currentTime / audio.duration) * 100;
//     progressBar.style.width = progress + '%';
// }

// song_play.addEventListener("click", function() {
//     if (flag === false) {
//         audio.play();
//         flag = true;
//         console.log(flag);
//     } else {
//         audio.pause();
//         flag = false;
//         console.log(flag);
//     }
// });

// song_next.addEventListener("click", function() {
//     audio.pause();
//     flag = false;
//     i = i + 1;
//     if (i >= songs_list.length) {
//         i = 0;
//     }
//     console.log(i);
//     song_image.src = songs_list[i].Image;
//     song_singer.innerHTML = songs_list[i].Singer;
//     song_title.innerHTML = songs_list[i].name;
//     audio = new Audio(songs_list[i].Song);
//     if (flag === false) {
//         audio.play();
//         flag = true;
//         console.log(flag);
//     }
// });

// song_prev.addEventListener("click", function() {
//     audio.pause();
//     flag = false;
//     i = i - 1;
//     if (i < 0) {
//         i = songs_list.length - 1;
//         console.log(i);
//     }
//     song_image.src = songs_list[i].Image;
//     song_singer.innerHTML = songs_list[i].Singer;
//     song_title.innerHTML = songs_list[i].name;
//     audio = new Audio(songs_list[i].Song);
//     if (flag === false) {
//         audio.play();
//         flag = true;
//         console.log(flag);
//     }
// });

// // Call the updateProgressBar function on timeupdate event
// audio.addEventListener('timeupdate', updateProgressBar);

// // size of the play button should be changed

// // if the song gets played then the play button should change to pause button
// song_play.addEventListener("click", function(){
//     if(flag ===false){
//         document.getElementById("play").innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>'
//     }
//     else{
//     document.getElementById("play").innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'
//     }
// })

// // Function to update the progress bar and controller position
// function updateProgressBar() {
//     const progress = (audio.currentTime / audio.duration) * 100;
//     progressBar.style.width = progress + '%';
//     progressBarController.style.left = progress + '%';
//   }
  
//   // Function to handle seeking to a specific position in the song
//   function seekToPosition(event) {
//     const progressBarRect = progressBarContainer.getBoundingClientRect();
//     const clickPosition = event.clientX - progressBarRect.left;
//     const progressPercentage = (clickPosition / progressBarRect.width) * 100;
//     const seekTime = (audio.duration * progressPercentage) / 100;
//     audio.currentTime = seekTime;
//   }
  
//   // Event listener for updating progress bar and controller on timeupdate
//   audio.addEventListener('timeupdate', updateProgressBar);
  
//   // Event listener for seeking to a position when clicking on the progress bar
//   progressBarContainer.addEventListener('click', seekToPosition);
  
//   // Event listener for dragging the controller to seek to a position
//   let isDragging = false;
//   let initialX = 0;
  
//   progressBarController.addEventListener('mousedown', (event) => {
//     isDragging = true;
//     initialX = event.clientX - progressBarController.offsetLeft;
//   });
  
//   document.addEventListener('mousemove', (event) => {
//     if (isDragging) {
//       const progressBarRect = progressBarContainer.getBoundingClientRect();
//       const moveX = event.clientX - progressBarRect.left;
//       const progressPercentage = (moveX / progressBarRect.width) * 100;
//       const seekTime = (audio.duration * progressPercentage) / 100;
//       audio.currentTime = seekTime;
//     }
//   });
  
//   document.addEventListener('mouseup', () => {
//     isDragging = false;
//   });







// Global variables for elements
let song_image = document.getElementById("cover_photo");
let song_title = document.getElementById("title");
let song_singer = document.getElementById("singer");
let song_play = document.getElementById("play");
let song_prev = document.getElementById("prev");
let song_next = document.getElementById("next");
let progressBar = document.getElementById("progressBar");
let progressBarController = document.getElementById("progressBarController");

// Song list
let songs_list = [
  {
    name: 'Lover',
    Image: 'images/lover_image.jpg',
    Song: 'music/Lover.mp3',
    Singer: 'Diljit'
  },
  {
    name: 'Love Story',
    Image: 'images/taylor_swift_love_story.jpg',
    Song: 'music/Taylor-Swift-Love-Story.mp3',
    Singer: 'Taylor Swift'
  },
  {
    name : 'Red',
    Image : 'images/Taylor_Swift_Red.png',
    Song : 'music/Taylor-Swift-Red.mp3',
    Singer : 'Taylor Swift'
  },
  {
    name : 'Wildest Dreams',
    Image : 'images/wildest_dreams_taylor.jfif',
    Song : 'music/Taylor-Swift-Wildest-Dreams.mp3',
    Singer : 'Taylor Swift'
  }
];

// Global variables for managing song index and play state
let currentSongIndex = 0;
let isPlaying = false;
let audio = new Audio(songs_list[currentSongIndex].Song);

// Function to update the song details
function updateSongDetails() {
  song_image.src = songs_list[currentSongIndex].Image;
  song_title.innerHTML = songs_list[currentSongIndex].name;
  song_singer.innerHTML = songs_list[currentSongIndex].Singer;
}

// Function to toggle play and pause
function togglePlay() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
  updatePlayButtonIcon();
}

// Function to update the play button icon
function updatePlayButtonIcon() {
  const playIcon = isPlaying ? '<i class="fa fa-pause" aria-hidden="true"></i>' : '<i class="fa fa-play" aria-hidden="true"></i>';
  song_play.innerHTML = playIcon;
}

// Function to play the next song
function playNextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs_list.length;
  audio.src = songs_list[currentSongIndex].Song;
  updateSongDetails();
  if (isPlaying) {
    audio.play();
  }
}

// Function to play the previous song
function playPrevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs_list.length) % songs_list.length;
  audio.src = songs_list[currentSongIndex].Song;
  updateSongDetails();
  if (isPlaying) {
    audio.play();
  }
}

// Function to update the progress bar and controller position
function updateProgressBar() {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = progress + '%';
  progressBarController.style.left = progress + '%';
}

// Function to handle seeking to a specific position in the song
function seekToPosition(event) {
  const progressBarRect = progressBar.getBoundingClientRect();
  const clickPosition = event.clientX - progressBarRect.left;
  const progressPercentage = (clickPosition / progressBarRect.width) * 100;
  const seekTime = (audio.duration * progressPercentage) / 100;
  audio.currentTime = seekTime;
}

// Function to update the rotation of the song image
function updateRotation() {
    const rotationAngle = (audio.currentTime / audio.duration) * 360;
    song_image.style.transform = `rotate(${rotationAngle}deg)`;
  }

  function togglePlay() {
    if (isPlaying) {
      audio.pause();
      song_image.classList.remove("playing"); // Pause the rotation animation
    } else {
      audio.play();
      song_image.classList.add("playing"); // Start the rotation animation
    }
    isPlaying = !isPlaying;
    updatePlayButtonIcon();
  }
// Event listeners
song_play.addEventListener("click", togglePlay);
song_next.addEventListener("click", playNextSong);
song_prev.addEventListener("click", playPrevSong);
audio.addEventListener('timeupdate', updateProgressBar);
progressBarContainer.addEventListener('click', seekToPosition);
audio.addEventListener('timeupdate', updateRotation);


// Initial song details update
updateSongDetails();
updatePlayButtonIcon();

  