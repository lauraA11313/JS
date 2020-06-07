function MP3(num) {
    this.currentTrack = num;
}

MP3.prototype.nextTrack = function () {
    if (this.currentTrack === 500){
        this.currentTrack = 0;
    }
    console.log(++this.currentTrack, 'track is playing now');
};

MP3.prototype.previousTrack = function () {
    if (this.currentTrack === 1){
        this.currentTrack = 501;
    }
    console.log(--this.currentTrack, 'track is playing now');
};

MP3.prototype.randomTrack = function () {
    var rand = 1 + Math.random()*(500 + 1 - 1);
    this.currentTrack = Math.floor(rand);
    console.log(this.currentTrack, 'track is playing now');
};

var mp3_01 = new MP3(25);
var mp3_02 = new MP3(13);

mp3_01.nextTrack();
console.log(mp3_01);

mp3_02.previousTrack();
console.log(mp3_02.currentTrack);