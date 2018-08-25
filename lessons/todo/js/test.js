
var playList = [{}, {}]
parent = document.querySelect('#container')

for (var i = 0; i < playList.length; i++) {
    var track = playList[i];

    var div = document.createElement('div');

    div.innterText = (i + 1) + track.author + track.song

    parent.appendChild(div)
}


var array = ["первый", "второй", "третий"]

array[0]//первый
array[1]//второй
array[2]//третий
array[3]//undefined

var obj = {
    key1: 'value1',
    key2: 'value2'
}

obj.key1 // value1
obj.key2 // value2
obj.key3 // error