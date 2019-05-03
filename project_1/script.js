var play = document.getElementById('play')
var pause = document.getElementById('pause')
var mute = document.getElementById('mute')
var unmute = document.getElementById('unmute')
var audio = document.getElementById('aud')
var slider = document.getElementById('sld')

play.addEventListener('click', function(){
audio.play()
console.log(slider.value)

})
pause.addEventListener('click', function(){
	audio.pause()
})
mute.addEventListener('click', function(){
	audio.muted = true;
})
unmute.addEventListener('click', function(){
	audio.muted = false;
})

slider.addEventListener('input', function(){
audio.volume = slider.value/100
console.log(slider.value)
})




