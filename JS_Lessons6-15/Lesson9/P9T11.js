function MP3 (volume) {
    this.__volumeLevel = 0;
    if (this.__volume(volume)) {
        this.__volumeLevel = volume;
    }
}

MP3.prototype.getVolume = function() {
    return this.__volumeLevel;
}

MP3.prototype.setVolume = function(volume) {
    if (this.__volume(volume)) {
        this.__volumeLevel = volume;
    }
}

MP3.prototype.__volume = function(volume) {
    if (volume > 100 || volume < 0 || typeof(volume) !== "number") {
        return false;
    } else {
        return true;
    }
}

MP3.prototype.volumeLevel = function(volume) {
    if(volume === undefined) {
        return this.__volumeLevel;
    } else {
        if (this.__volume(volume)) {
            this.__volumeLevel = volume;
        }
    }
}

var mp3 = new MP3(72);
console.log(mp3.getVolume());

mp3.setVolume(-65);
console.log(mp3.getVolume());

mp3.setVolume(465);
console.log(mp3.getVolume());

mp3.setVolume("idiot");
console.log(mp3.getVolume());

mp3.volumeLevel(13);
console.log(mp3.volumeLevel());