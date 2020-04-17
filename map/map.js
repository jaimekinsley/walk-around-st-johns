// bring in the array of activities
import activities from '../data/data.js';

// get the ul where activities are displayed
const activitiesUl = document.getElementById('activities');

for (let i = 0; i < activities.length; i++) {
    const activity = activities[i].title;
    const li = document.createElement('li');
    li.textContent = activity;

    activitiesUl.appendChild(li);
}
