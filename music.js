var currentAudio = null;

// function to play a sound
function playSound(soundFile,element)
{
    //pause previously playing audio and reset animation
    if(currentAudio)
    {
        currentAudio.pause(); //pause the audio playback
        currentAudio.currentTime = 0;
        currentAudio = null;// clear the currentaudio variable
    }
// play new audio
var audio = new Audio(soundFile); // create a new audio object with the 
audio.play(); //start playback of audio
currentAudio = audio;// update currentaudio variable to store the new audio

}
