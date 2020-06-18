import Genre from '../models/Answer';

class GenreController {
  async index(req, res, next) {
    try {
      const genres = await Genre.findAll({
        attributes: ['id', 'name'],
      });

      return res.json(genres);
    } catch (error) {
      next(error);
    }
  }
}

export default new GenreController();
