import Place from '../models/Place';

class PlaceController {
  async index(req, res, next) {
    try {
      const places = await Place.findAll({
        attributes: ['id', 'name'],
      });

      return res.json(places);
    } catch (error) {
      next(error);
    }
  }
}

export default new PlaceController();
