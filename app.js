// app.js
const graph = new Graph();
const recommendationSystem = new FriendRecommendation(graph);

// Adding users and friendships
graph.addNode('Alice');
graph.addNode('Bob');
graph.addNode('Charlie');
graph.addNode('David');
graph.addNode('Eve');

graph.addEdge('Alice', 'Bob');
graph.addEdge('Alice', 'Charlie');
graph.addEdge('Bob', 'Charlie');
graph.addEdge('Charlie', 'David');
graph.addEdge('David', 'Eve');

// Get recommendations when the user clicks the button
function getRecommendations() {
    const user = document.getElementById('userInput').value;
    const recommendations = recommendationSystem.recommendFriends(user);
    
    const suggestionsElement = document.getElementById('friendSuggestions');
    suggestionsElement.innerHTML = '';

    if (recommendations.length > 0) {
        recommendations.forEach(friend => {
            const li = document.createElement('li');
            li.textContent = friend;
            suggestionsElement.appendChild(li);
        });
    } else {
        suggestionsElement.innerHTML = 'No recommendations available.';
    }
}
