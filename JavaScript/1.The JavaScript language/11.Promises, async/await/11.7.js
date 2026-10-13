async function test() {
    try {
        await Promise.reject("Error");
        console.log("A");
    } catch (err) {
        console.log("B:", err);
    }

    console.log("C");
}

test();