

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


export { userLookup }