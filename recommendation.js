// recommendation.js
class FriendRecommendation {
    constructor(graph) {
        this.graph = graph;
    }

    // Find mutual friends (triangles) to recommend
    recommendFriends(user) {
        let recommendations = [];
        let friends = this.graph.getNeighbors(user);
        
        // Find mutual friends
        for (let friend of friends) {
            let mutualFriends = this.graph.getNeighbors(friend);
            for (let mutualFriend of mutualFriends) {
                if (mutualFriend !== user && !friends.includes(mutualFriend)) {
                    recommendations.push(mutualFriend);
                }
            }
        }

        return recommendations;
    }

    // Display recommendations
    displayRecommendations(user) {
        const recommendations = this.recommendFriends(user);
        console.log(`Friend suggestions for ${user}:`);
        recommendations.forEach(friend => {
            console.log(friend);
        });
    }
}
