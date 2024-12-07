import razor from "razorpay";
import express from "express";
import crypto from "crypto";
const razorRouter = express.Router()

const razorpayInstance = new razor({
    key_id: process.env.key_id,
    key_secret: process.env.key_secret
});


razorRouter.post('/createOrder',async(req,res)=>{
    try {
        const { amount, currency } = req.body; 
        const options = {
            amount: amount * 100, 
            currency: currency,
            receipt: crypto.randomBytes(10).toString('hex')
        };

        const order = await razorpayInstance.orders.create(options);
        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
});
razorRouter.post('/verifyPayment', (req, res) => {
    const { order_id, payment_id, signature } = req.body;

    const generatedSignature = crypto.createHmac('sha256', process.env.key_secret)
        .update(`${order_id}|${payment_id}`)
        .digest('hex');
        
    if (generatedSignature === signature) {
        res.send({ status: 'success' });
    } else {
        res.status(400).send({ status: 'failure' });
    }
});
export default razorRouter;