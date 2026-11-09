const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  console.log('Authorization header:', token); // Log the Authorization header

  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({ msg: 'Access denied. No token provided.' });
  }

  try {
    const actualToken = token.split(' ')[1];
    const decoded = jwt.verify(actualToken, 'your_jwt_secret');
    req.user = decoded;
    console.log('Decoded token:', decoded); // Log the decoded token
    next();
  } catch (err) {
    console.error('Token validation error:', err); // Log the token validation error
    return res.status(401).json({ msg: 'Token is not valid' });
  }
};



module.exports = verifyToken;
