import User from '../models/User';

class UserController {
  async store(req, res) {
    const checkEmail = await User.findOne({ where: { email: req.body.email } });

    if (checkEmail) {
      return res.status(400).json({ error: 'Duplicated e-mail.' });
    }

    const user = await User.create(req.body);

    return res.json(user);
  }
}

export default new UserController();
