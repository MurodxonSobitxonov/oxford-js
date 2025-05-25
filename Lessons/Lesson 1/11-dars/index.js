let Murodxon = {
    id: 1,
    firstName: "Murodxon",
    lastName: "Sobitxonov",
    age: 13,
    getlastName() {
        console.log(this.firstName, this.lastName);
    },

}

let Tohirjon = Murodxon;
Murodxon = null;
Tohirjon.getlastName();