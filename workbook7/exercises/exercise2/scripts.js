function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const tableBody = document.querySelector('#usersTable tbody');
            for (const user of users) {
                const row = document.createElement('tr');
                
                const idCell = document.createElement('td');
                idCell.innerText = user.id;
                row.appendChild(idCell);

                const nameCell = document.createElement('td');
                nameCell.innerText = user.name;
                row.appendChild(nameCell);

                const usernameCell = document.createElement('td');
                usernameCell.innerText = user.username;
                row.appendChild(usernameCell);

                const emailCell = document.createElement('td');
                emailCell.innerText = user.email;
                row.appendChild(emailCell);

                const phoneCell = document.createElement('td');
                phoneCell.innerText = user.phone;
                row.appendChild(phoneCell);

                const websiteCell = document.createElement('td');
                websiteCell.innerText = user.website;
                row.appendChild(websiteCell);

                tableBody.appendChild(row);
            }
        });
}

window.onload = fetchUsers;
