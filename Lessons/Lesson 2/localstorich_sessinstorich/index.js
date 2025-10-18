// localStorage
// localStorage.setItem("til", "uz")
// localStorage.setItem("mavzu", "yorqin")

// console.log(localStorage.getItem("til"));

// localStorage.removeItem("til")

// localStorage.clear()

// console.log(localStorage.key(1));

// console.log(localStorage.length);

// sessionStorage
// sessionStorage.setItem("til", "uz")


// setItem - localStorage yoki sessionStorage ga qiymat qo'shish uchun
// getItem - localStorage yoki sessionStorage dan qiymat olish
// removeItem - localStorage yoki sessionStorage dan 1ta element o'chirish
// clear - localStorage yoki sessionStorage ni tozalash
// length - localStorage yoki sessionStorage dagi qiymatlarni soni (uzunligi)
// key - localStorage yoki sessionStorage dan index boyicha key larni olish


const toggleBtn = document.getElementById("theme_toggle")

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark")
}

toggleBtn.addEventListener("click", () => {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark")
        localStorage.setItem("theme", "light")
    } else {
        document.body.classList.add("dark")
        localStorage.setItem("theme", "dark")
    }

    // document.body.classList.toggle("dark")
    // document.body.classList.remove("demo")
})


const userBtn = document.getElementById("user_btn")

userBtn.addEventListener("click", () => {
    let students = [
        {
            ism: "Lutfullo",
            yosh: 15,
            moshina: "Malibu 2"
        },
        {
            ism: "Asadbek",
            yosh: 16,
            moshina: "BMW"
        },
        {
            ism: "Orifjon",
            yosh: 14,
            moshina: "Malibu 2"
        },
        {
            ism: "Muhibjon",
            yosh: 16,
            moshina: "Mers"
        },
        {
            ism: "Azizbek",
            yosh: 15,
            moshina: "BMW"
        },
        {
            ism: "Dildora",
            yosh: 17,
            moshina: "Mers"
        },
        {
            ism: "Murodxon",
            yosh: 14,
            moshina: "Mers"
        },
        {
            ism: "Ayyomjon",
            yosh: 17,
            moshina: "Nissan"
        },
    ]

    let jsonStudents = JSON.stringify(students, null, 2)


    localStorage.setItem("students", jsonStudents)

})


let result = JSON.parse(localStorage.getItem("students"))

console.log(result);
