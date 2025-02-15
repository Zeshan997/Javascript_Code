// 1. Array of user objects
const users = [
    { id: 1, name: "John", connections: 0, followers: 0, requests: [] },
    { id: 2, name: "Ali", connections: 0, followers: 0, requests: [] },
    { id: 3, name: "Sarah", connections: 0, followers: 0, requests: [] }
];

// 2. Function to send a connection request
function sendRequest(senderId, receiverId) {
    const sender = users.find(user => user.id === senderId);
    const receiver = users.find(user => user.id === receiverId);

    if (!sender || !receiver) {
        console.log("User does not exist!");
        return;
    }

    receiver.requests.push(senderId);
    console.log(`${sender.name} sent a connection request to ${receiver.name}`);
}

// Function to accept a connection request
function acceptRequest(receiverId, senderId) {
    const receiver = users.find(user => user.id === receiverId);
    const sender = users.find(user => user.id === senderId);

    if (!receiver || !sender) {
        console.log("User does not exist!");
        return;
    }

    if (!receiver.requests.includes(senderId)) {
        console.log(`${receiver.name} has no request from ${sender.name}!`);
        return;
    }

    receiver.requests = receiver.requests.filter(id => id !== senderId);
    receiver.connections++; 
    sender.connections++;
    receiver.followers++;
    sender.followers++;

    console.log(`Connection established between ${receiver.name} and ${sender.name}!`);
}

// function calls
sendRequest(1, 2);  
sendRequest(2, 3); 
acceptRequest(2, 1); 
acceptRequest(3, 2); 


console.log(users);
