class User {
    constructor(id, name) {
        this.name = name;
        this.id = id;
    }
    userID() {
        return this.id;
    }
    userName() {
        return this.name;
    }
}

function searchDB() {
    console.log("Credit Card Number on file for John Smith is 11111111");
    let guestUser = new User( 1, "John Smith");
    let id = guestUser.userID();
    let name = guestUser.userName();
    console.log("Guest ID is " + id);
    console.log("Guest Name is " + name);
    if (id == 1) {
        var creditNum = 11111111;
        var inputNum = 11111111;
        if (creditNum == inputNum) {
            alert("payment has been processed!")
            location.assign("index.html");
        }
        
    } else {
        console.log("no match on file");
    }   
}