'use strict';

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];
function searchCourses() {
    // When does the PROG200 course start?
    let prog200StartDate = findCourseStartDate("PROG200");
    console.log('PROG200 starts on: ' + prog200StartDate);

    // What is the title of the PROJ500 course?
    let proj500Title = findCourseTitle("PROJ500");
    console.log('The title of PROJ500 is: ' + proj500Title);

    // What are the titles of the courses that cost $50 or less?
    let lowCostCourses = findLowCostCourseTitles();
    console.log('Courses that cost $50 or less: ' + lowCostCourses.join(', '));

    // What classes meet in "Classroom 1"?
    let classroom1Courses = findCoursesByLocation("Classroom 1");
    console.log('Classes meeting in Classroom 1: ' + classroom1Courses.join(', '));
}

function findCourseStartDate(courseId) {
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].CourseId == courseId) {
            return courses[i].StartDate;
        }
    }
    return 'Course not found';
}

function findCourseTitle(courseId) {
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].CourseId == courseId) {
            return courses[i].Title;
        }
    }
    return 'Course not found';
}

function findLowCostCourseTitles() {
    let titles = [];
    for (let i = 0; i < courses.length; i++) {
        if (Number(courses[i].Fee) <= 50.00) {
            titles.push(courses[i].Title);
        }
    }
    return titles;
}

function findCoursesByLocation(location) {
    let titles = [];
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].Location == location) {
            titles.push(courses[i].Title);
        }
    }
    return titles;
}

searchCourses();
