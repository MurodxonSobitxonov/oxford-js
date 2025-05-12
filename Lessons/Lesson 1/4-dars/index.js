let age = prompt();

if (age >= 3 && age <= 6) {
    console.log("siz boqchada o'qiysiz");
}
else if (age >= 7 && age <= 18) {
    console.log("siz maktabda o'qiysiz");
}

else if (age >= 19 && age <= 30) {
    console.log("siz universitetda o'qiysiz");
}

else if (age >= 31 && age <= 60) {
    console.log("siz Ishlaysiz");
}
else if (age >= 61) {
    console.log("siz Nafadasiz");
}

else {
    console.log("siz xato yosh talladingiz ");
}