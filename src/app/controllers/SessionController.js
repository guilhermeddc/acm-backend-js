import jwt from 'jsonwebtoken';

import User from '../models/User';

import authConfig from '../../config/auth';
class SessionController {
  async store(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }

      if (!(await user.checkPasword(password))) {
        return res.status(401).json({ error: 'Password does not match' });
      }

      const { id, name, role } = user;

      return res.json({
        user: {
          id,
          name,
          email,
          role,
        },
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    } catch (error) {
      return res.status(400).json({ error: 'System internal error' });
    }
  }
}

export default new SessionController();
