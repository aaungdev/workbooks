'use strict';

window.onload = function() {
    const categories = [
        "Adventures",
        "Arts & Crafts",
        "Local Sports",
        "Museums",
        "Wine Tastings",
        "Other"
    ];

    const activities = [
        {
            category: "Adventures",
            id: "A101",
            name: "Valley Hot Air Balloons",
            description: "Enjoy a lovely hot air balloon ride over the valley at sunrise. Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
            location: "121 S. Main Street",
            price: 265.00
        },
        {
            category: "Arts & Crafts",
            id: "A102",
            name: "Downtown Art Walk",
            description: "Explore the local art scene with a guided tour of the best galleries in town.",
            location: "Downtown",
            price: 20.00
        },
        {
            category: "Museums",
            id: "A103",
            name: "History Museum Tour",
            description: "Dive into the rich history of our town with a comprehensive museum tour.",
            location: "Museum Ave",
            price: 15.00
        },
        {
            category: "Wine Tastings",
            id: "A104",
            name: "Winery Tour",
            description: "Sample exquisite wines and learn about the winemaking process at our local winery.",
            location: "Vineyard Lane",
            price: 50.00
        }
    ];

    const categorySelect = document.getElementById('categorySelect');
    const activitiesTableBody = document.getElementById('activitiesTable').getElementsByTagName('tbody')[0];

    function loadCategories() {
        for (const category of categories) {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categorySelect.appendChild(option);
        }
    }

    function loadActivities(category) {
        activitiesTableBody.innerHTML = '';
        
        if (category == "") {
            const row = activitiesTableBody.insertRow();
            const cell = row.insertCell(0);
            cell.colSpan = 4;
            cell.innerText = 'Please select a category.';
            return;
        }

        const filteredActivities = activities.filter(activity => activity.category == category);

        if (filteredActivities.length == 0) {
            const row = activitiesTableBody.insertRow();
            const cell = row.insertCell(0);
            cell.colSpan = 4;
            cell.innerText = 'No activities available for this category.';
            return;
        }

        for (const activity of filteredActivities) {
            const row = activitiesTableBody.insertRow();

            const nameCell = row.insertCell(0);
            nameCell.innerText = activity.name;

            const descriptionCell = row.insertCell(1);
            descriptionCell.innerText = activity.description;

            const locationCell = row.insertCell(2);
            locationCell.innerText = activity.location;

            const priceCell = row.insertCell(3);
            priceCell.innerText = "$" + activity.price.toFixed(2);
        }
    }

    categorySelect.onchange = function() {
        loadActivities(this.value);
    };

    loadCategories();
};
