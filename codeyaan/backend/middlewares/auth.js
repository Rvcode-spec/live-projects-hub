const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { JWT_SECRET } = process.env;

module.exports = {
  authenticate: async (req, resp, next) => {
    try {
      const auth = req.headers.authorization;
      if (!auth || !auth.startsWith('Bearer ')) {
        return resp.status(401).json({ message: 'No token' });
      }

      const token = auth.split(' ')[1];
      const payload = jwt.verify(token, JWT_SECRET);

      // ✅ Adjust this line
      const userId = payload.sub || payload.id || payload._id;
      const user = await User.findById(userId).lean();

      if (!user) {
        return resp.status(401).json({ message: 'User not found' });
      }

      req.user = user; // ✅ attach user
      next();
    } catch (err) {
      console.error('Auth error:', err);
      return resp.status(401).json({ message: 'Invalid token' });
    }
  },
};
