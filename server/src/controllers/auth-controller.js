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
    delete foundUser.password;
    // Viskas gerai
    res.status(200).json({
      user: foundUser,
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
  const {email,username,surname,password, repeatPassword} = req.body
  const {users} = database.data

  const usernameCheck = users.find(x => x.username === username)

  if (usernameCheck){
    res.status(400).json({
      message: "Username is already taken"
    });
    return
  }

  if(password !== repeatPassword){
    res.status(400).json({
      message: "slaptazodziai nesutampa"
    });
    return;
  } 
  const emailCheck = users.find(x => x.email === email)

  if (emailCheck){
    res.status(400).json({
      message: "vartotojas su tokiu pastu jau egzistuoja"
    });
    return
  } 

  const user = {
    id: uuidv4(),
    name,
    surname,
    email,
    password,
    role: "USER"
  }

  database.data.users.push(user)
  database.write()


  res.status(200).json({
    user,
    token: uuidv4()
  } );
}

export const checkEmail = (req, res) => {
  res.status(200).json({ message: 'Užaugęs būsiu pašto patikrinimas' });
}