import ClientService from '../models/ClientService';
import Client from '../models/Client';
import Service from '../models/Service';

class ClientServiceController {
  async index(req, res, next) {
    try {
      const clientServices = await ClientService.findAll({
        attributes: ['client_id', 'service_id'],
        include: [{ model: Service, as: 'service', attributes: ['name'] }],
      });

      return res.json(clientServices);
    } catch (error) {
      next(error);
    }
  }

  async show(req, res, next) {
    try {
      const { id } = req.params;

      const clientServices = await ClientService.findByPk(id, {
        attributes: ['client_id', 'service_id'],
        include: [{ model: Service, as: 'service', attributes: ['name'] }],
      });

      return res.json(clientServices);
    } catch (error) {
      next(error);
    }
  }

  async store(req, res, next) {
    try {
      const serviceExists = await Service.findByPk(req.body.service_id);

      if (!serviceExists) {
        return res.status(401).json({ message: 'Service not exists' });
      }

      const clientExists = await Client.findByPk(req.body.client_id);

      if (!clientExists) {
        return res.status(401).json({ message: 'Client not exists' });
      }

      const clientService = await ClientService.create({
        client_id: req.body.client_id,
        service_id: req.body.service_id,
      });

      return res.json(clientService);
    } catch (error) {
      next(error);
    }
  }
}

export default new ClientServiceController();
