import Client from '../models/Client';
import City from '../models/City';
import Genre from '../models/Genre';
import Ethnicity from '../models/Ethnicity';

class ClientController {
  async index(req, res, next) {
    const { city } = req.query;

    try {
      const clients = await Client.findAll({
        attributes: [
          'id',
          'name',
          'slug',
          'image',
          'image_url',
          'age',
          'phone',
          'cash',
        ],
        include: [
          {
            model: City,
            as: 'city',
            attributes: ['id', 'name', 'slug'],
          },
          {
            model: Genre,
            as: 'genre',
            attributes: ['id', 'name'],
          },
          {
            model: Ethnicity,
            as: 'ethnicity',
            attributes: ['id', 'name'],
          },
        ],
        where: { active: true, city_id: city },
      });

      return res.json(clients);
    } catch (error) {
      next(error);
    }
  }

  async show(req, res, next) {
    try {
      const { id } = req.params;

      const client = await Client.findByPk(id, {
        attributes: [
          'id',
          'name',
          'slug',
          'image',
          'image_url',
          'age',
          'phone',
          'cash',
        ],
        include: [
          {
            model: City,
            as: 'city',
            attributes: ['id', 'name', 'slug'],
          },
          {
            model: Genre,
            as: 'genre',
            attributes: ['id', 'name'],
          },
          {
            model: Ethnicity,
            as: 'ethnicity',
            attributes: ['id', 'name'],
          },
        ],
      });

      return res.json(client);
    } catch (error) {
      next(error);
    }
  }

  async store(req, res, next) {
    try {
      const {
        slug,
        name,
        age,
        phone,
        description,
        cash,
        genre_id,
        city_id,
        ethnicity_id,
      } = req.body;

      const client = await Client.create({
        slug,
        name,
        image: req.file.filename,
        age,
        phone,
        description,
        cash,
        user_id: req.userId,
        genre_id,
        city_id,
        ethnicity_id,
      });

      return res.json(client);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }

  async remove(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

export default new ClientController();
