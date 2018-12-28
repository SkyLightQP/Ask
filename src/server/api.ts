import firebase from './firebase';
import {express, logger} from './app';

const router = express.Router();

router.post('/:comment', (req, res) => {
    const {comment} = req.params;

    logger.info(`POST /question/${comment}`);
    firebase.addQuestion(comment);
    res.sendStatus(200).end();
});

router.get('/', (req, res) => {
    logger.info('GET /question');
    firebase.getQuestions()
        .then(result => {
            res.send(result);
        });
});

router.put('/:id/:reply', (req, res) => {
    const {id, reply} = req.params;

    logger.info(`PUT /question/${id}/${reply}`);
    firebase.updateQuestion(id, reply);
    res.sendStatus(200).end();
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    logger.info(`DELETE /question/${id}`);
    firebase.deleteQuestion(id);
    res.sendStatus(200).end();
});

export default {
    router
};