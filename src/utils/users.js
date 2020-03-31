const users = [];

// addUser
const addUser = ({ id, username, room }) => {
  // Clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Validate data
  if (!username || !room) {
    return {
      error: 'Username and room are required'
    };
  }

  // Check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  if (existingUser) {
    return {
      error: 'Username already exists'
    };
  }

  // Store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room.toLowerCase());
};

addUser({
  id: 22,
  username: 'Liam',
  room: 'Toronto'
});

addUser({
  id: 42,
  username: 'Mike',
  room: 'Toronto'
});

addUser({
  id: 44,
  username: 'Mollie',
  room: 'Philly'
});

// console.log(getUser(44));
console.log(getUsersInRoom('Toronto'));

// console.log(users);

// const removedUser = removeUser(22);
// console.log(removedUser);

// console.log(users);
