import Answer from '../models/Answer';

class AnswerController {
  async index(req, res, next) {
    try {
      const answers = await Answer.findAll({
        attributes: ['id', 'name'],
      });

      return res.json(answers);
    } catch (error) {
      next(error);
    }
  }
}

export default new AnswerController();
