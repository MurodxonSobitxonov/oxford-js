let obj = {
  ism: "Aziz" ,
  yoshi: 2011
}

let arr = [true, "Hello", 22]

let jsonObj = json.stringdify(obj)
let jsonObj2 = json.stringdify(obj)

let jsonArr = json.stringdify(arr)

console.log(jsonObj);
console.log(jsonObj2);

//stringify(jsonga o'girish kerak bo'lgan datan ,
// [Jsondan tanlab olingan key], yoki null,
//json bizga chiroyli: korinishi uchun format)

//data methodes
//console.log(vaqt.getFullYear()); //getfulyears - hozurgi toliq yil
//console.log(vaqt.getMonth()); //getmonth - hozurgi oy 0 dan boshlanadi
//console.log(vaqt.getDate()); //getdate - hozurgi kun
//console.log(vaqt.getDay()); //getday - hozurgi hafta kuni 0 dan boshlanadi
//console.log(vaqt.getHours()); //gethours - hozurgi soat
//console.log(vaqt.getMinutes()); //getminutes - hozurgi minut
//console.log(vaqt.getSeconds()); //getseconds - hozurgi sekund
//console.log(vaqt.getMilliseconds()); //getmilliseconds - hozurgi millisekund
//console.log(vaqt.getTime()); //gettime - 1970 yildan hozirgi vaqtgacha bo'lgan sekundlarni chiqaradi
//console.log(vaqt.getTimezoneOffset()); //gettimezoneoffset - hozurgi vaqt va GMT vaqt farqini minutlarda chiqaradi
//console.log(vaqt.getUTCMonth()); //getutcmonth - hozurgi oy gmt ga qarab chiqaradi
//console.log(vaqt.getUTCDate()); //getutcdate - hozurgi kun gmt ga qarab chiqaradi
//console.log(vaqt.getUTCDay()); //getutcday - hozurgi hafta kuni gmt ga qarab chiqaradi
//console.log(vaqt.getUTCHours()); //getutchours - hozurgi soat gmt ga qarab chiqaradi
//console.log(vaqt.getUTCMinutes()); //getutcminutes - hozurgi minut gmt ga qarab chiqaradi
//console.log(vaqt.getUTCSeconds()); //getutcseconds - hozurgi sekund gmt ga qarab chiqaradi
//console.log(vaqt.getUTCMilliseconds()); //getutcmilliseconds - hozurgi millisekund gmt ga qarab chiqaradi

//data formastes
console.log(vaqt.toISOString());
console.log(vaqt.toUTCString());
console.log(vaqt.toDateString());
console.log(vaqt.toTimeString());
console.log(vaqt.toLocaleString());
console.log(vaqt.toLocaleDateString());
