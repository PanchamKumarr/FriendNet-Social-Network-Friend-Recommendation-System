FriendNet: Social Network Friend Recommendation System
FriendNet is a Social Network Friend Recommendation System that leverages Graph Algorithms to recommend friends based on mutual connections. The project uses JavaScript for graph operations and algorithms, with HTML and CSS for the user interface.

Features:
Breadth-First Search (BFS) and Depth-First Search (DFS) for graph traversal.
Friend Recommendation System based on mutual connections.
Dijkstra's Algorithm implemented for calculating the shortest path between users.
Interactive web interface to input users and display recommendations.
Technologies Used:
JavaScript: For implementing the graph algorithms and friend recommendation logic.
HTML: For the structure of the webpage.
CSS: For styling the page and creating a simple, responsive user interface.
Getting Started:
Prerequisites:
To run this project locally, you only need a modern web browser (like Chrome, Firefox, etc.) to view the HTML file.

Running the Project:
Clone this repository to your local machine:

bash
Copy code
git clone https://github.comPanchamKumarr/FriendNet-Social-Network-Friend-Recommendation-System.git
Open the index.html file in any browser to start interacting with the application.

How it Works:
Graph Representation:

The social network is modeled as a graph where users are nodes, and friendships are edges.
A user can have multiple friends (neighbors in the graph).
Friend Recommendation:

The system recommends friends based on mutual friends.
If two users have common friends, they are recommended to each other.
The recommendation algorithm looks for triangles in the graph (i.e., users who are friends of friends).
Graph Algorithms:

BFS and DFS are implemented for graph traversal.
Dijkstra's Algorithm can be used to find the shortest path between two users, though it is primarily used for pathfinding in the project.
Example:
If Alice is friends with Bob and Charlie, and Bob and Charlie are also friends, the system will recommend Charlie to Alice and vice versa.
Future Enhancements:
Implementing D3.js or Cytoscape.js to visualize the graph and interactions in a more dynamic and interactive way.
Adding weights to edges to represent the strength of friendships, which could improve the recommendation system.
Expanding the algorithm to consider more advanced features, such as interests or group memberships.
File Structure:
/friendnet-social-network
    /index.html            # Main HTML file
    /style.css             # CSS file for styling the webpage
    /graph.js              # JavaScript file for implementing graph algorithms
    /recommendation.js     # JavaScript file for friend recommendation logic
    /app.js                # JavaScript file for handling interactions and displaying recommendations
    /README.md             # Project documentation

Contributing:
Feel free to fork the project, make improvements, or suggest new features. If you'd like to contribute, follow the usual Git workflow—fork, create a branch, and submit a pull request.

License:
This project is open-source and available under the MIT License.
