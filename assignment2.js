// 1. Array of user objects
const users = [
    { id: 1, name: "John", connections: 0, followers: 0, requests: [] },
    { id: 2, name: "Ali", connections: 0, followers: 0, requests: [] },
    { id: 3, name: "Sarah", connections: 0, followers: 0, requests: [] }
];

// 2. Function to send a connection or follow request
function sendRequest(senderId, receiverId, type = "connect") {
    const sender = users.find(user => user.id === senderId);
    const receiver = users.find(user => user.id === receiverId);

    if (!sender || !receiver) {
        console.log("User does not exist!");
        return;
    }

    if (type !== "connect" && type !== "follow") {
        console.log("Invalid request type!");
        return;
    }


    receiver.requests.push({ senderId, type });
    console.log(`${sender.name} sent a ${type} request to ${receiver.name}`);

}

sendRequest(1, 2, "connect"); 
sendRequest(2, 3, "follow");





// Function to accept a connection or follow request
function acceptRequest(receiverId, senderId) {
    const receiver = users.find(user => user.id === receiverId);
    const sender = users.find(user => user.id === senderId);

    if (!receiver || !sender) {
        console.log("User does not exist!");
        return;
    }

    // Extract only sender IDs from requests
    const requestSenderIds = receiver.requests.map(req => req.senderId);

    // Check if senderId exists in requests
    if (!requestSenderIds.includes(senderId)) {
        console.log(`${receiver.name} has no request from ${sender.name}!`);
        return;
    }

    // Get request type
    const requestType = receiver.requests.find(req => req.senderId === senderId).type;

    // Remove request after accepting
    receiver.requests = receiver.requests.filter(req => req.senderId !== senderId);

    // Handle connection or follow request
    if (requestType === "connect") {
        receiver.connections++;
        sender.connections++;
        console.log(`Connection established between ${receiver.name} and ${sender.name}!`);
    } else if (requestType === "follow") {
        receiver.followers++;
        sender.followers++;
        console.log(`${sender.name} is now following ${receiver.name}!`);
    }
}


acceptRequest(2, 1);
acceptRequest(3, 2);