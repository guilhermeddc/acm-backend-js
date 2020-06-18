import Payment from '../models/Payment';

class PaymentController {
  async index(req, res, next) {
    try {
      const payments = await Payment.findAll({
        attributes: ['id', 'name'],
      });

      return res.json(payments);
    } catch (error) {
      next(error);
    }
  }
}

export default new PaymentController();
