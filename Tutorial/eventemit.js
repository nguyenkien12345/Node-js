// Hàm on và emit luôn luôn đi với nhau (có người nói phải có người nghe)

// Import modules "events" and "util"
var eventsMD = require('events');
var utilMD = require('util');

// Create Function Express
var Person = function(name, age){
    this.name = name;
    this.age = age;
}

utilMD.inherits(Person, eventsMD.EventEmitter);

var ntk = new Person('Nguyễn Trung Kiên',21);
var lqh = new Person('Lê Quốc Hào',21);
var nhq = new Person('Nguyễn Hồng Quân',21);

var persons = [ntk,lqh,nhq];

persons.forEach(function(people){
    // Lắng nghe sự kiện có name là talk (tự đặt tên) thông qua on
    people.on('talk', function(msg){
        console.log(people.name + " Yêu " + msg  + ". Năm nay " + people.age);
    })
})


// Gửi dữ liệu lên sự kiện có name là talk (tự đặt tên) thông qua emit
ntk.emit("talk","Ngô Nguyễn Phong My");
lqh.emit("talk","Lâm Thảo Nhi");
nhq.emit("talk","Võ Hồng Nhiên");
