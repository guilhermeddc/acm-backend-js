import User from '../models/User';

class UserController {
  async store(req, res, next) {
    try {
      const userExists = await User.findOne({
        where: { email: req.body.email },
      });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }

      const { id, name, email, role } = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      return res.json({ id, name, email, role });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }

    if (oldPassword && !(await user.checkPasword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not metch' });
    }

    const { id, name, role } = await user.update(req.body);

    return res.json({ id, name, email, role });
  }
}

export default new UserController();
