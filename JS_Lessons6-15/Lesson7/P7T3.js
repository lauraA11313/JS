var MP3 = function (num){
    return{
        currentTrack: num,

        c: function () {
 		    if (this.currentTrack === 500) {
 			    this.currentTrack = 0;
 		    }
 		    console.log(++this.currentTrack, 'track is playing now');
 	    },

        previousTrack: function () {
            if (this.currentTrack === 1){
                this.currentTrack = 501;
            }
            console.log(--this.currentTrack, 'track is playing now');
	    },

        randomTrack: function () {
            var rand = 1 + Math.random()*(500 + 1 - 1);
            this.currentTrack = Math.floor(rand);
            console.log(this.currentTrack, 'track is playing now');
        }
    }
 }

var mp3 = MP3(5);
mp3.nextTrack();
mp3.nextTrack();
mp3.previousTrack();
mp3.randomTrack();
mp3.nextTrack();