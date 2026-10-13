const cache = new Map();

let image = {
    name: "avatar.png"
};

cache.set("avatar", new WeakRef(image));


const weakImage = cache.get("avatar");

const images = weakImage?.deref();

if (images) {
    console.log("Có thể sử dụng ảnh");
} else {
    console.log("Ảnh đã bị GC thu hồi");
}