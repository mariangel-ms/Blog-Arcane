document.addEventListener('play', function(e){
    // Obtenemos todos los elementos de audio
    const audios = document.getElementsByTagName('audio');
    
    for(let i = 0, len = audios.length; i < len; i++){
        // Si el audio que está sonando no es el que disparó el evento, lo pausamos
        if(audios[i] != e.target){
            audios[i].pause();
            // Opcional: reiniciar el tiempo a cero
            // audios[i].currentTime = 0; 
        }
    }
}, true);