

let userLookup = (id, table) => {

    if (id == 1) {
        return table
    }

    for (let i = 0; i < table.users.length; i++) {
        if (table.users[i].id === id) {
            return table.users[i]
        }
    }

}

let timeOfDay = () => {
    console.log("HI")
    let data = [
        [0, 4, "good night"],
        [5, 11, "good morning"],          //Store messages in an array
        [12, 17, "good afternoon"],
        [18, 24, "good night"]
    ]
    let hr = new Date().getHours();

    for (var i = 0; i < data.length; i++) {
        if (hr >= data[i][0] && hr <= data[i][1]) {
            console.log(data[i][2])
            return data[i][2];
        }
    }
}

export { userLookup, timeOfDay }