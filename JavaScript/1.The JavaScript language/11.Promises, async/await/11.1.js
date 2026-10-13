/*
function sayHello() {
    console.log("Hello!");
}

function processUser(callback) {
    console.log("Processing user...");

    callback();
}

processUser(sayHello);
*/

/*
function ask(question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}

function showOk() {
    alert("You agreed.");
}

function showCancel() {
    alert("You canceled the execution.");
}

ask("Do you agree?", showOk, showCancel);
*/


// loadScript("", function () {

//     step1();

//     loadScript("./script2.js", function () {

//     })
// })

/*
function getUsers(callback) {

    setTimeout(() => {
        console.log("get user")
        callback();
    }, 1000)
}

function getPosts(callback) {
    setTimeout(() => {
        console.log("get post")
        callback();
    }, 1000)
}

function showData() {
    console.log("show data")
}

getUsers(() => {
    getPosts(() => {
        showData();
    });

})
*/
/*
function getUser(cb) {
    const error = new Error("User not found");

    cb(error, null);
}

getUser(function (error, result) {
    if (error) {
        console.log("error", error.message);
        return;
    }

    console.log("result", result);
})
*/

/*
function getUser(callback) {
    setTimeout(() => {
        const user = {
            id: 2,
            name: "Martin"
        };
        if (user.id === 1) {
            callback(null, user)
            return;
        }
        callback(new Error("User not found"));
    }, 1000);
}

getUser(function (error, user) {
    if (error) {
        console.log(error.message)
        return error;
    }
    console.log(user.name);
});
*/

/*
Xây dựng luồng xử lý gồm 3 hàm:
1. getUser(callback) → trả về { id: 1, name: "Martin" }.
2. getPosts(userId, callback) → trả về danh sách bài viết của user.
3. showPosts(posts) → in danh sách bài viết ra console.
*/

/*
1. Đề bài
Viết 3 hàm:
- getUser(callback): sau 1 giây trả về { id: 1, name: "Martin" }.
- getPosts(userId, callback): sau 1 giây trả về danh sách bài viết nếu userId === 1; ngược lại trả về lỗi "Posts not found".
- showPosts(posts): in danh sách bài viết.
*/
function getUser(callback) {
    setTimeout(() => {
        const user = { id: 1, name: "Martin" };
        callback(null, user);
    }, 1000)
}

function getPosts(userId, callback) {
    setTimeout(() => {
        if (userId != 1) {
            const error = new Error("Posts not found")
            callback(error)
            return;
        }
        const posts = [
            { id: 1, title: "Learn JavaScript", userId },
            { id: 2, title: "Learn React", userId }
        ];
        callback(null, posts);
    }, 1000)
}

function showPost(posts) {
    console.log("Posts:");

    posts.forEach(post => {
        console.log(`- ${post.title}`);
    });
}

getUser(function (error, user) {
    if (error) {
        console.log(error.message)
        return;
    }
    console.log(user.name);
    getPosts(user.id, function (error, posts) {
        if (error) {
            console.log(error.message)
            return;
        }
        showPost(posts)
    })
});