async function fetchUserData() {
    const apiUrl =  'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

     try {
        const response = await fetch(apiUrl);
        const users = await response.json();
        dataContainer.innerHTML = "";
    
        const userList = document.createElement("ul");
        users.forEach((user) => {
        const userListItem = document.createElement("li");
        userListItem.textContent = user.name;
        userList.appendChild(userListItem);
    });
        dataContainer.appendChild(userList);
    } catch (error) {
        dataContainer.innerHTML = "";
        dataContainer.textContent = "Failed to load user data.";
    }
};
document.addEventListener("DOMContentLoaded", fetchUserData);
