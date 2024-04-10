const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (user) => {
  return jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
  });
};
const { registerValidation, loginValidation } = require('./validation');
exports.registerUser = async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const userExists = await User.findOne({ username: req.body.username });
  if (userExists) {
      return res.status(400).send('Username already taken.');
  }

  
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  
  const user = new User({
      username: req.body.username,
      password: hashedPassword
  });

    try {
        const savedUser = await user.save();
      
        const refreshToken = user.createRefreshToken();

       
        const { password, ...dataWithoutPassword } = savedUser.toJSON();

        res.status(201).json({
            user: dataWithoutPassword,
            token: generateToken(user),
            refreshToken 
        });

        user.refreshToken = refreshToken; 
        await user.save(); 

    } catch (err) {
        res.status(400).send(err);
    }
};

exports.loginUser = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
      return res.status(400).send('Username is not found.');
  }

  
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
      return res.status(400).send('Invalid password');
  }

 
  const token = generateToken(user);
  const refreshToken = user.createRefreshToken();

  res.status(200).json({
      token,
      refreshToken 
  });

  await user.save(); 
};

exports.refreshToken = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
      return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
      const verified = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
      const user = await User.findById(verified._id);
      if (!user || user.refreshToken !== refreshToken) {
          throw new Error('Invalid refresh token');
      }

      const newAccessToken = generateToken(user);
      const newRefreshToken = user.createRefreshToken();
          
      await user.save(); 

      res.status(200).json({
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
      });

  } catch (error) {
      res.status(400).json({ error: 'Invalid token' });
  }
};