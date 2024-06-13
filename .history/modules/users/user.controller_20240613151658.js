
// const connection =  dbConnection()

// const signUp = (req , res)=>{
//         connection.query('insert into users set ?' , req.body)
//         res.status(201).json({message:'success'})
// }

// const signIn = (req , res)=>{

//     connection.execute(`select id, email , password from users where  email = '${req.body.email}'`, (err , data)=>{
//         if(data.length !=0) {
//            const match = bcrypt.compareSync(req.body.password , data[0].password)
//            if(match){
//             res.json({message:'Login......Token' , userId:data[0].id})
//            }
//            else  res.status(401).json({message:'Incorrect Password'})

//         }
//         else  res.status(409).json({message:'Email not exist'})
//     })


// }




// const signUp = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const hash = await bcrypt.hash(password, 10);

//     const user = await userModel.create({ name, email, password:hash });
//     res.status(201).json({ message: 'Success', user });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// const signIn = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await userModel.findOne({ where: { email } });

//     if (user && await bcrypt.compare(password, user.password)) {
//         const token = jwt.sign({ userId: user.id }, SECRET_KEY);
//         res.json({ token });
//       } else {
//         res.status(400).json({ error: 'Invalid credentials' });
//       }

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


import userModel from '../../database/models/users.models.js';
import User from '../../database/models/users.models.js';
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
    const user = await User.create({ name, email, password: hash });

    res.status(201).json({ message: 'Success', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (user && await bcrypt.compare(password, user.password)) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(400).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { signUp, signIn };









