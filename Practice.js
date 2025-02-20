// const users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Ali" },
//     { id: 3, name: "Sarah" }
//   ];
  
//   const senderId = 2; 
  
//   const sender = users.find(user => user.id === senderId);
  
//   console.log(sender);

//   const users = [
//     {
//         id: 1,
//         name:"Zeshan Ahmad",
//         connections: 0,
//         fallowers: 0
//     },
//     {
//         id: 2,
//         name:"Zeshan Saleem",
//         connections: 0,
//         fallowers: 0
//     },
//     {
//         id: 3,
//         name:"Zeshan Ahmad khiljee",
//         connections: 0,
//         followers: 0
//     },
//   ];

//   const senderID = 2;

//   const sender = users.find(user => user.id === senderID);
//   console.log(sender);


const users = [
   {id: 1, name: "Zeshan", connections: 0, followers: 0, requests: [] },
   {id: 2, name: "Allyan", connections: 0, followers: 0, requests: []},
   {id: 3, name: "Mobeen", connections: 0, followers: 0, requests: []},
   {id: 4, name: "Irfan", connections: 0, followers: 0, requests: []}
];

function forsendRequest(senderid, receverid){
   const sender = users.find(user => user.id === senderid);
   const receiver = users.find(user => user.id === receverid);
   console.log(sender);
   console.log(receiver);

   if(!sender || !receiver){
      console.log("users not exist");
      return; 
   }
   receiver.requests.push(senderid);
   console.log(`${sender.name} send a connection to ${receiver.name}`);
}

forsendRequest(1,3);
console.log(users);

// function forreceivedRequest(receiverid, senderid){
//     const receiver = users.find(user => user.id === receiverid);
    
// }