import City from '../models/City';
import State from '../models/State';

class CityController {
  async index(req, res, next) {
    try {
      const cities = await City.findAll({
        attributes: ['id', 'name', 'slug'],
        include: [
          { model: State, as: 'state', attributes: ['id', 'name', 'uf'] },
        ],
      });

      return res.json(cities);
    } catch (error) {
      next(error);
    }
  }

  async store(req, res, next) {
    try {
      const { name, slug, state } = req.body;

      const city = await City.create({ name, slug, state });

      return res.json(city);
    } catch (error) {
      next(error);
    }
  }
}

export default new CityController();
