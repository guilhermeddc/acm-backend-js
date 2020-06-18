import Service from '../models/Service';

class ServiceController {
  async index(req, res, next) {
    try {
      const services = await Service.findAll({
        attributes: ['id', 'name'],
      });

      return res.json(services);
    } catch (error) {
      next(error);
    }
  }
}

export default new ServiceController();
