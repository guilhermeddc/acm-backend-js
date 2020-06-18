import ClientPayment from '../models/ClientPayment';
import Client from '../models/Client';
import Payment from '../models/Payment';

class ClientPaymentController {
  async index(req, res, next) {
    try {
      const clientPayments = await ClientPayment.findAll({
        attributes: ['client_id', 'payment_id'],
        include: [{ model: Payment, as: 'payment', attributes: ['name'] }],
      });

      return res.json(clientPayments);
    } catch (error) {
      next(error);
    }
  }

  async show(req, res, next) {
    try {
      const { id } = req.params;

      const clientPayments = await ClientPayment.findByPk(id, {
        attributes: ['client_id', 'payment_id'],
        include: [{ model: Payment, as: 'payment', attributes: ['name'] }],
      });

      return res.json(clientPayments);
    } catch (error) {
      next(error);
    }
  }

  async store(req, res, next) {
    try {
      const PaymentExists = await Payment.findByPk(req.body.payment_id);

      if (!PaymentExists) {
        return res.status(401).json({ message: 'Payment not exists' });
      }

      const clientExists = await Client.findByPk(req.body.client_id);

      if (!clientExists) {
        return res.status(401).json({ message: 'Client not exists' });
      }

      const clientPayment = await ClientPayment.create({
        client_id: req.body.client_id,
        payment_id: req.body.payment_id,
      });

      return res.json(clientPayment);
    } catch (error) {
      next(error);
    }
  }
}

export default new ClientPaymentController();
