// 修改文章表中， 文章等级和序号的sql
var e1 = [277, 46, 189, 154, 193, 190, 285, 206, 223, 269, 62, 13, 67, 256, 162, 161, 77, 216, 59, 53, 191, 37, 231];
var e1order = [10, 13, 3, 4, 8, 18, 23, 2, 21, 7, 20, 19, 14, 15, 16, 11, 12, 9, 1, 17, 22, 5, 24]

var e2 = [95, 49, 158, 247, 93, 171, 296, 54, 265, 173, 11, 117, 251, 232, 120, 70, 118, 282, 99, 167, 229, 187, 234, 179]
var e2order = [21, 22, 23, 24, 15, 14, 13, 13, 12, 1, 3, 5, 2, 8, 9, 6, 7, 19, 10, 11, 17, 18, 20, 4]

var e3 = [196, 69, 270, 129, 127, 150, 94, 230, 47, 208, 294, 178, 287, 305, 26, 8, 16, 235, 300, 84, 172, 61, 199, 83, 90]
var e3order = [5, 7, 20, 21, 22, 23, 24, 2, 10, 17, 13, 14, 15, 16, 17, 18, 9, 18, 4, 8, 19, 6, 1, 3, 18]

var i1 = [180, 50, 109, 177, 290, 133, 156, 271, 82, 307, 132, 103, 273, 134, 114, 107, 308, 284, 226, 253, 25, 153, 224]
var i1order = [1, 2, 3, 4, 7, 8, 6, 10, 14, 16, 18, 21, 22, 23, 24, 9, 20, 17, 12, 15, 13, 7, 5]

var i2 = [242, 233, 163, 33, 30, 165, 121, 115, 7, 91, 4, 213, 164, 24, 51, 249, 306, 169, 106, 195, 228, 68, 136, 6, 64, 209, 22, 262, 219]
var i2order = [1, 2, 3, 4, 17, 5, 25, 6, 21, 22, 14, 7, 8, 19, 20, 16, 23, 15, 9, 10, 11, 12, 25, 26, 27, 28, 13, 19, 18]

var i3 = [45, 102, 80, 297, 210, 201, 63, 252, 31, 12, 87, 198, 281, 200, 19, 159, 140, 185, 147, 186, 183, 146, 143, 205, 56]
var i3order = [19, 18, 20, 7, 16, 11, 9, 12, 22, 23, 24, 4, 1, 5, 6, 2, 17, 3, 8, 10, 15, 25, 13, 21, 14]

let id = 0;
let order = 1;


let articleIds = i3;
let articleOrder = i3order;
let grade = 6;

if (articleIds.length !== articleOrder.length) {
  console.log("数据长度不相等");
  return;
}

for (let i = 0; i < articleIds.length; i++) {
  id = articleIds[i];
  order = articleOrder[i];
  console.log(`db.article_copy.findOneAndUpdate({id:${id}},{$set:{grade:${grade},order:${order}}});`);
}
