document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("fetchUsers");
    const userList = document.getElementById("userList");

    button.addEventListener("click", async function () {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) throw new Error("Network response was not ok");
            
            const users = await response.json();
            userList.innerHTML = "";  // Clear existing list

            users.forEach(user => {
                const listItem = document.createElement("li");
                listItem.textContent = `${user.name} - ${user.email}`;
                userList.appendChild(listItem);
            });
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    });
});