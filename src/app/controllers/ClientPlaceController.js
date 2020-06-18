import ClientPlace from '../models/ClientPlace';
import Client from '../models/Client';
import Place from '../models/Place';

class ClientPlaceController {
  async index(req, res, next) {
    try {
      const clientPlaces = await ClientPlace.findAll({
        attributes: ['client_id', 'place_id'],
        include: [{ model: Place, as: 'place', attributes: ['name'] }],
      });

      return res.json(clientPlaces);
    } catch (error) {
      next(error);
    }
  }

  async show(req, res, next) {
    try {
      const { id } = req.params;

      const clientPlaces = await ClientPlace.findByPk(id, {
        attributes: ['client_id', 'place_id'],
        include: [{ model: Place, as: 'place', attributes: ['name'] }],
      });

      return res.json(clientPlaces);
    } catch (error) {
      next(error);
    }
  }

  async store(req, res, next) {
    try {
      const placeExists = await Place.findByPk(req.body.place_id);

      if (!placeExists) {
        return res.status(401).json({ message: 'Place not exists' });
      }

      const clientExists = await Client.findByPk(req.body.client_id);

      if (!clientExists) {
        return res.status(401).json({ message: 'Client not exists' });
      }

      const clientPlace = await ClientPlace.create({
        client_id: req.body.client_id,
        place_id: req.body.place_id,
      });

      return res.json(clientPlace);
    } catch (error) {
      next(error);
    }
  }
}

export default new ClientPlaceController();
