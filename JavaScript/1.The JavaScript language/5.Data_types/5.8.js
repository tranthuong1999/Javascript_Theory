/*
let user = { name: "John" };

const users = [user];

user = null;
console.log(users)

console.log(users[0].name); // "John"
*/


/*
const user = { name: "An" };

const weakMap = new WeakMap();

weakMap.set(user, "Developer");
console.log(weakMap)

console.log(weakMap.get(user)); // "Developer"
console.log(weakMap.has(user)); // true
*/



/*
const user = { name: "An" };
const weakMap = new WeakMap();

weakMap.set(user, "Developer");

console.log(weakMap.get(user));    // "Developer"
console.log(weakMap.has(user));    // true

weakMap.set(user, "Frontend");     // Cập nhật value
console.log(weakMap.get(user));    // "Frontend"

weakMap.delete(user);
console.log(weakMap.has(user));    // false
*/


const visitedUsers = new WeakSet();

const user1 = { name: "An" };
const user2 = { name: "Bình" };

visitedUsers.add(user1);
visitedUsers.add(user2);

console.log(visitedUsers)
console.log(visitedUsers.has(user1)); // true
console.log(visitedUsers.has(user2)); // true