import database from '../database/index.js';
import { v4 as uuidv4 } from 'uuid'

export const login = (req, res) => {
  const { username, password } = req.body;
  const { users } = database.data;

  const foundUser = users.find(x => x.username === username);
  if (!foundUser) {
    // Nerastas Vartotojas
    res.status(404).json({
      message: 'User with this username does not exist'
    });
    return;
  }

  if (foundUser.password === password) {
    const user = { ...foundUser };
    delete user.password;
    // Viskas gerai
    res.status(200).json({
      user: user,
      token: uuidv4()
    });
    return;
  }

  // Neteisingas slaptažodis
  res.status(400).json({
    message: 'Invalid password'
  });
};

export const register = (req, res) => {
  const { email, username, name, surname, password, repeatPassword, city } = req.body
  const { users } = database.data

  const usernameCheck = users.find(x => x.username === username)

  if (usernameCheck) {
    res.status(400).json({
      message: "Username is already taken"
    });
    return
  }

  if (password !== repeatPassword) {
    res.status(400).json({
      message: "Passwords don't match"
    });
    return;
  }
  const emailCheck = users.find(x => x.email === email)

  if (emailCheck) {
    res.status(400).json({
      message: "User with this email already exist"
    });
    return
  }

  const user = {
    id: uuidv4(),
    username,
    name,
    surname,
    email,
    password,
    location: city,
    role: "USER",
    cart:{
      products: []
    }
  }

  database.data.users.push(user)
  database.write()

  delete user.password

  res.status(200).json({
    user,
    token: uuidv4()
  });
};

export const getUsers = (req, res) => {
  const { users } = JSON.parse(JSON.stringify(database.data))

  const formatedUsers = users.map(user => {
    delete user.password
    return user
  })

  res.status(200).json(
    formatedUsers
  );
}

export const deleteUser = (req, res) => {
  const { users } = database.data
  const checkRole = users.find(x => x.id === req.body.id)

  if (checkRole.role === "ADMIN"){
    res.status(400).json({
      message: 'Cannot delete administrator'
    });
    return
  }

  database.data.users = users.filter(x => x.id !== req.body.id)
  database.write()

  res.status(200).json({
    message: "User was deleted"
  })
}