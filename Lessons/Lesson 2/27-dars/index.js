// let sana = new Date();

// let hozirgisoat = sana.getHours();
// console.log(hozirgisoat);

// let hozirgiDaqiqa = sana.getMinutes();
// console.log(hozirgiDaqiqa);

// let hozirgiYil = sana.getFullYear();
// console.log(hozirgiYil);

// let hozirgiSana = sana.getDay();
// console.log(hozirgiSana);

// let bugungiSana = sana.getDate();
// console.log(bugungiSana);

// let Oy = sana.getMonth();
// console.log(Oy);

// console.log(sana);

// let toliqVaqt = sana.getTime();
// console.log(toliqVaqt);

// let hozirgiSekund = sana.getSeconds();
// console.log(hozirgiSekund);

// console.log(sana.toDateString());
// console.log(sana.toTimeString());
// console.log(sana.toISOString());
// console.log(sana.toLocaleDateString());
// console.log(sana.toLocaleTimeString());

// console.log(sana.toLocaleDateString().replaceAll("/", ":"));



// let user = {
//   ism: "ali",
//   yosh: 20
// }

// let jsonUser = JSON.stringify(user)

// console.log(jsonUser);

// let perseUser = JSON.parse(jsonUser)

// console.log(perseUser);

let user = { name: "Aziz", yosh: 40 }

let abj = new Map()
abj.set(22, "yigirma ikki")
abj.set(user, 20)



console.log(abj.get(22));
console.log(abj.get(user));

console.log(obj.size);

console.log(obj.has(22));

obj.delete(22)

obj.clear()

//set - Map ga ma'umot qoshish
//get - map dan key bo'yicha ma'umot olish
//size - Map dagi malumotlarini soni
//has - Map dagi key bo'yicha malumot bor yoki yo'qligini aniqlash uchun
//delete - Map 1 tadan ma'umotni o'chirish uchun
//clear - Map ni tozalash uchun


