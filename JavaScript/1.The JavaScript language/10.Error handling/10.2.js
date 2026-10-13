/*
class ValidatoError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidatorError"
    }
}

function validateUser(user) {
    if (!user.age) {
        throw new ValidatoError("No field : age")
    }
    if (!user.name) {
        throw new ValidatoError("No field : name")
    }
}

try {
    let user = {
        name: "Martin"
    }
    validateUser(user)

} catch (error) {
    if (error instanceof ValidatoError) {
        console.log(error.message)
    } else {
        throw error;
    }

}
*/

/*
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateUser(user) {
    if (!user.email) {
        throw new ValidationError("Missing email");
    }
}

try {
    validateUser({});
} catch (err) {
    if (err instanceof ValidationError) {
        console.log(err.name);
        console.log(err.message);
    }
}
*/

/*
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("No property: " + property);
        this.name = "PropertyRequiredError";
        this.property = property;
    }
}

function readUser(json) {
    const user = JSON.parse(json);

    if (!user.name) {
        throw new PropertyRequiredError("name");
    }

    if (!user.age) {
        throw new PropertyRequiredError("age");
    }

    return user;
}

try {
    const user = readUser('{"age": 25}');
} catch (err) {
    if (err instanceof PropertyRequiredError) {
        console.log("Missing property:", err.property);
        console.log("Error:", err.message);
    } else {
        throw err;
    }
}
*/


// class MyError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = this.constructor.name;
//   }
// }

class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}


const err = new FormatError("Formatting error");

console.log(err.message); // Formatting error
console.log(err.name); // FormatError

console.log(err instanceof FormatError); // true
console.log(err instanceof SyntaxError); // true