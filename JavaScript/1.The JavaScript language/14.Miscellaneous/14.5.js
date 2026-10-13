const user = {
    id: 900719925474099312345n
};

// Chuyển thành string trước khi trả JSON
const response = {
    id: user.id.toString()
};

JSON.stringify(response); // Hoạt động