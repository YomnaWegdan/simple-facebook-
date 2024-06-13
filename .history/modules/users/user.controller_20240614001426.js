

import userModel from '../../database/models/users.models.js';
import bcrypt from 'bcrypt';


const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if email already exists
    const existingUser = await userModel.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hash = await bcrypt.hash(password, 10);

    // Create the user
    const user = await userModel.create({ name, email, password: hash });

    res.status(201).json({ message: 'Success', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ where: { email } });

    if (user && await bcrypt.compare(password, user.password)) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(400).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export { signUp, signIn , logout};









