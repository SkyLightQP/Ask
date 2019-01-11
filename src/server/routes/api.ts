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

router.put('/:id/:reply', (req, res) => {
    const {id, reply} = req.params;
    const admin = req.headers['x-askq-auth'];

    if(admin !== undefined && admin === config.adminUid) {
        logger.info(`PUT /question/${id}/${reply}`);
        firebase.updateQuestion(id, reply);
        res.sendStatus(200).end();
        return;
    }

    res.sendStatus(401).end();
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const admin = req.headers['x-askq-auth'];

    if(admin !== undefined && admin === config.adminUid) {
        logger.info(`DELETE /question/${id}`);
        firebase.deleteQuestion(id);
        res.sendStatus(200).end();
        return;
    }

    res.sendStatus(401).end();
});

export default {
    router
};