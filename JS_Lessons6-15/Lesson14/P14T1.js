var TV = {
        currentChannel:1,
        nextChannel: function()
        {
            TV.currentChannel++;
        },
        previousChannel: function()
        {
            TV.currentChannel--;
        },
        setChannel: function(num)
        {
            TV.currentChannel = num;
        }
    };

TV.setChannel(12);
console.log(TV.currentChannel);
TV.nextChannel();
console.log(TV.currentChannel);
TV.previousChannel();
console.log(TV.currentChannel);




var mp3 = {
    songID: 350,
    numOfSongs: 350,
    volumeLevel: 0,
    turnNextSong: function ()
    {
        if (mp3.songID === mp3.numOfSongs)
        {
            mp3.songID = 1;
        }
        else
        {
            ++mp3.songID;
        }
    },
    turnPrevSong: function ()
    {
        if (mp3.songID === 1)
        {
            mp3.songID = mp3.numOfSongs;
        }
        else
        {
            --mp3.songID;
        }
    },
    setMoreVolume: function ()
    {
        if (mp3.volumeLevel == 7)
        {
            mp3.volumeLevel = 7;
        }
        else
        {
            ++mp3.volumeLevel;
        }
    },
    setLessVolume: function ()
    {
        if (mp3.volumeLevel == 0)
        {
            mp3.volumeLevel = 0;
        }
        else
        {
            --mp3.volumeLevel;
        }
    }
}

console.log(mp3.volumeLevel);
mp3.setLessVolume();
console.log(mp3.volumeLevel);
console.log(mp3.songID);
mp3.turnNextSong();
console.log(mp3.songID);





class MP3 {
    constructor(name, songID, numOfSongs, volumeLevel)
    {
        this.__name = name;
        this.songID =  songID;
        this.__numOfSongs =  numOfSongs;
        this.volumeLevel =  volumeLevel;
    }
    getSongID()
    {
        return this.songID;
    }
    getVolumeLevel()
    {
        return this.volumeLevel;
    }
    setSongID(ID)
    {
        this.songID = ID;
    }
    setVolumeLevel(vol)
    {
        this.volumeLevel = vol;
    }
    turnNextSong()
    {
        if (this.songID === this.numOfSongs)
        {
            this.songID = 1;
        }
        else
        {
            ++this.songID;
        }
    }
    turnPrevSong()
    {
        if (this.songID === 1)
        {
            this.songID = this.numOfSongs;
        }
        else
        {
            --this.songID;
        }
    }
    setMoreVolume()
    {
        if (this.volumeLevel == 7)
        {
            this.volumeLevel = 7;
        }
        else
        {
            ++this.volumeLevel;
        }
    }
    setLessVolume()
    {
        if (this.volumeLevel == 0)
        {
            this.volumeLevel = 0;
        }
        else
        {
            --this.volumeLevel;
        }
    }
}

let mp3 = new MP3('mp3N1', 1, 350, 5)
console.log(mp3.getVolumeLevel());//5
mp3.setLessVolume();
console.log(mp3.getVolumeLevel());//4
console.log(mp3.getSongID());//1
mp3.turnNextSong();
console.log(mp3.getSongID());//2



class Figure
{
    constructor(centerX, centerY)
    {
        this.__centerX = centerX;
        this.__centerY = centerY;
    }
    getCenterX()
    {
        return this.__centerX;
    }
    setCenterX(cx)
    {
        this.__centerX = cx;
    }
    getCenterY()
    {
        return this.__centerY;
    }
    setCenterY(cy)
    {
        this.__centerY = cy;
    }
    info()
    {
        console.log('Coords of center: '+this.__centerX+" ; "+this.__centerY)
    }
}

class Rect extends Figure
{
    constructor(cx, cy, diag)
    {
        super(cx, cy);
        this.__diag = diag;
    }
    getDiag()
    {
        return this.__diag;
    }
    setDiag(diag)
    {
        this.__diag = diag;
    }
    info()
    {
        super.info();
        console.log('The length of diagonal is '+this.__diag);
    }
}

class Circle extends Figure
{
    constructor(cx, cy, radius)
    {
        super(cx, cy);
        this.__radius = radius;
    }
    getDiag()
    {
        return this.__radius;
    }
    setDiag(diag)
    {
        this.__radius = radius;
    }
    info()
    {
        super.info();
        console.log('The length of radius is '+this.__radius);
    }

}

var fig = new Figure(6, -3);
fig.info();// 6; -3
var rect = new Rect(-5, 2, 15);
rect.info();// 5 ; -2 , 15
var circle = new Circle(7, -4, 10);
circle.info();// 7 ; -4, 10





class Square
{
    constructor(side)
    {
        this._side = 0;
        if(typeof(side) == "number" && side >0)
        {
            this._side = side;
        }
    }
    getSide()
    {
        return this._side;
    }

    setSide(side)
    {
        this._side = side;
    }
    perimeter()
    {
        return this._side*4;
    }
}

var sqr = new Square(5);
console.log(sqr.getSide());//5
console.log(sqr.perimeter());//20
sqr.setSide(6);
console.log(sqr.getSide());//6
console.log(sqr.perimeter());//24




class Cube1 extends Square
{
    constructor(side)
    {
        super(side);
    }
    perimeter()
    {
        return this._side*12;
    }
}

var cube1 = new Cube1(3);
console.log(cube1.getSide());//3
console.log(cube1.perimeter());//36
cube1.setSide(6);
console.log(cube1.getSide());//6
console.log(cube1.perimeter());//72

//Наследник с расширеным методом
//(используется результат метода родителя)
//для подсчета периметра
class Cube2 extends Square
{
    constructor(side)
    {
        super(side);
    }
    perimeter()
    {
        var sqrPer = super.perimeter();
        return sqrPer*3;
    }
}


var cube2 = new Cube2(4);
console.log(cube2.getSide());//4
console.log(cube2.perimeter());//48
cube2.setSide(7);
console.log(cube2.getSide());//7
console.log(cube2.perimeter());//84




class Circle {
    constructor(centerX, centerY, radius) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
    }
    length()
    {
        return this.radius * Math.PI * 2;
    }
    static lenForRad(r) {
        return r * Math.PI * 2;
    }
    static create(cx, cy, r) {
        const c = new Circle(cx, cy, r);
        return c;
    }
    copy() {
        return Circle.create(this.centerX, this.centerY, this.radius);
    }
    isPointIn(x, y) {
        return Math.sqrt((x - this.centerX) ** 2 + (y - this.centerY) ** 2) < this.radius;
    }
    toString() {
        return JSON.stringify(this);
    }
}


const circle1 = new Circle(2, -1, 4);
const circle2 = circle1.copy();
const circle3 = Circle.create(1, 1, 3);
console.log(circle3.isPointIn(4, 1));//false
console.log(Circle.lenForRad(circle1.radius));//25.13
console.log(circle3.toString());
