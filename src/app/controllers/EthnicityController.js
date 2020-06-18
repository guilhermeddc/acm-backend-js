import Ethnicity from '../models/Answer';

class EthnicityController {
  async index(req, res, next) {
    try {
      const ethbicities = await Ethnicity.findAll({
        attributes: ['id', 'name'],
      });

      return res.json(ethbicities);
    } catch (error) {
      next(error);
    }
  }
}

export default new EthnicityController();
