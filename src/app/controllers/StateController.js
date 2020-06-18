import State from '../models/State';

class StateController {
  async index(req, res, next) {
    try {
      const states = await State.findAll({ attributes: ['id', 'name', 'uf'] });

      return res.json(states);
    } catch (error) {
      next(error);
    }
  }

  async store(req, res, next) {
    try {
      const { name, uf } = req.body;

      const state = await State.create({ name, uf });

      return res.json(state);
    } catch (error) {
      next(error);
    }
  }
}

export default new StateController();
