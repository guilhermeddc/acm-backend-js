import ClientAnswer from '../models/ClientAnswer';
import Client from '../models/Client';
import Answer from '../models/Answer';

class ClientAnswerController {
  async index(req, res, next) {
    try {
      const clientAnswers = await ClientAnswer.findAll({
        attributes: ['client_id', 'answer_id'],
        include: [{ model: Answer, as: 'answer', attributes: ['name'] }],
      });

      return res.json(clientAnswers);
    } catch (error) {
      next(error);
    }
  }

  async show(req, res, next) {
    try {
      const { id } = req.params;

      const clientAnswers = await ClientAnswer.findByPk(id, {
        attributes: ['client_id', 'answer_id'],
        include: [{ model: Answer, as: 'answer', attributes: ['name'] }],
      });

      return res.json(clientAnswers);
    } catch (error) {
      next(error);
    }
  }

  async store(req, res, next) {
    try {
      const answerExists = await Answer.findByPk(req.body.answer_id);

      if (!answerExists) {
        return res.status(401).json({ message: 'Answer not exists' });
      }

      const clientExists = await Client.findByPk(req.body.client_id);

      if (!clientExists) {
        return res.status(401).json({ message: 'Client not exists' });
      }

      const clientAnswer = await ClientAnswer.create({
        client_id: req.body.client_id,
        answer_id: req.body.answer_id,
      });

      return res.json(clientAnswer);
    } catch (error) {
      next(error);
    }
  }
}

export default new ClientAnswerController();
