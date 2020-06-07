
function MP3 (num) {

    this.currentTrack = num;

 	this.nextTrack = function () {
        if (this.currentTrack === 500) {
            this.currentTrack = 0;
        }
        console.log(++this.currentTrack, 'track is playing now');
 	};

 	this.previousTrack = function () {
        if (this.currentTrack === 1){
            this.currentTrack = 501;
        }
        console.log(--this.currentTrack, 'track is playing now');
 	};

	this.randomTrack = function () {
        var rand = 1 + Math.random()*(500 + 1 - 1);
        this.currentTrack = Math.floor(rand);
        console.log(this.currentTrack, 'track is playing now');
 	};
 }

var mp3 = new MP3(87);
console.log(mp3);
console.log(mp3.previousTrack);
console.log(mp3.randomTrack);
var mp3_1 = new MP3(36);
console.log(mp3_1.nextTrack);