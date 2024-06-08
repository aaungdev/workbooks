"use strict";

document.getElementById('addCourseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let courseName = document.getElementById('courseName').value;
    fetch('http://localhost:8081/api/courses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: courseName })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});

document.getElementById('deleteCourse').addEventListener('click', function() {
    let courseId = prompt('Enter the course ID to delete:');
    fetch(`http://localhost:8081/api/courses/${courseId}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});
