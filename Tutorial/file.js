var file = require('fs');
//--------------------------------------------------------------------------------------------------------------------------------------------
// console.log("Bắt đầu");

// //Đọc file SYNC
// var readFileSYNC = file.readFileSync('test.txt','utf8');
// console.log("Thực hiện: " + "\n" + readFileSYNC);

// //Đọc file ASYNC
// var readFileASYNC = file.readFile('test.txt','utf8',function(err,data){
//     if(true){
//         console.log(data);
//     }
//     else{
//         console('Lỗi rồi bạn ơi');
//     }
// });

// console.log("Kết thúc");
//--------------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------------------------------
// //Ghi file
// file.writeFileSync('testCT.txt',readFileSYNC);

// //Xoá file 
// file.unlinkSync('testCT.txt');
//--------------------------------------------------------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------------------------------------------------------
// //Tạo folder
// file.mkdirSync('folderTest');
// //Xoá folder
// file.rmdirSync('folderTest');

// file.mkdir('public',function(){
//     file.readFile('test.txt','utf8',function(err,data){
//         if (true){
//             file.writeFileSync('./public/result.txt',data)
//         }
//         else{
//             console.log('Lỗi rồi bạn ơi');
//         }
//     })
// })
//--------------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------------------------------
// //Buffers và Stream

// //Đọc dữ liệu bằng Readable 
var doc_luong_du_lieu = file.createReadStream(__dirname + '/test.txt', {encoding: 'utf8'});

// doc_luong_du_lieu.on('data', function(chunk){
//     console.log('Đọc luồng: ');
//     console.log(chunk)
// })

//Ghi dữ liệu bằng Writable
var ghi_luong_du_lieu = file.createWriteStream(__dirname + '/write.txt'); 
doc_luong_du_lieu.on('data', function(chunk){
    console.log('Ghi luồng: ');
    ghi_luong_du_lieu.write(chunk);
})
//--------------------------------------------------------------------------------------------------------------------------------------------
