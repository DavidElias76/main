import { Router} from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({ title: 'Get all the subscriptions'}))

subscriptionRouter.get('/:id', (req, res) => res.send({ title: 'Fetch a subscriptions with specific id'}))

subscriptionRouter.post('/', (req, res) => res.send({ title: 'Create a new subscription'}))

subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'Update a subscription with the specific id'}))

subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'delete a subscriptions'}))

subscriptionRouter.get('/user/:id', (req, res) => res.send({ title: 'Get all the user subscriptions'}))

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: 'Cancel a subscription with the specific id'}))

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({ title: 'Get upcoming renewals'}))


export default subscriptionRouter;