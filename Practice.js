// const users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Ali" },
//     { id: 3, name: "Sarah" }
//   ];
  
//   const senderId = 2; 
  
//   const sender = users.find(user => user.id === senderId);
  
//   console.log(sender);

  const users = [
    {
        id: 1,
        name:"Zeshan Ahmad",
        connections: 0,
        fallowers: 0
    },
    {
        id: 2,
        name:"Zeshan Saleem",
        connections: 0,
        fallowers: 0
    },
    {
        id: 3,
        name:"Zeshan Ahmad khiljee",
        connections: 0,
        fallowers: 0
    },
  ];

  const senderID = 2;

  const sender = users.find(user => user.id === senderID);
  console.log(sender);
  