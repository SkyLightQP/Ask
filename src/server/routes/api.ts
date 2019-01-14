import firebase from '../firebase';
import {express, logger} from '../app';
import config from '../config';

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

router.get('/:id', (req, res) => {
    const { id } = req.params;

    logger.info(`GET /question/${id}`);
    firebase.getQuestion(id)
        .then(result => {
            res.send(result);
        });
});

export default {
    router
};