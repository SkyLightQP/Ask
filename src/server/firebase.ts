import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import config from './config';
import {express, logger} from './app';
import moment from 'moment';

const router = express.Router();

const settings = {timestampsInSnapshots: true};

firebase.initializeApp(config);
const db = firebase.firestore();
db.settings(settings);

const addQuestion = (comment: String) => {
    const date = moment().format('YYYYMMDD');
    db.collection('questions')
        .add({
            createdAt: date,
            answeredAt: "",
            comment: comment,
            answer: ""
        })
        .then((docRef) => {
            logger.info(`DB에 새로운 내용이 기록되었습니다. ID: ${docRef.id}`);
        })
        .catch((error) => {
            logger.error('내용을 기록하는 도중에 오류가 발생하였습니다.\n', error);
        });
};

const getQuestions = async () => {
    return await db.collection('questions')
        .get()
        .then(snapshot => {
            let data = [];
            snapshot.forEach(doc => {
                let array = {
                    id: doc.id,
                    createdAt: doc.data().createdAt,
                    answeredAt: doc.data().answeredAt,
                    comment: doc.data().comment,
                    answer: doc.data().answer
                };
                data.push(array);
            });
            return data;
        })
        .catch(error => {
            logger.error('내용을 가져오는 도중에 오류가 발생하였습니다.\n', error);
        });
};

const updateQuestion = (id: String, reply: String) => {
    const date = moment().format('YYYYMMDD');
    db.collection('questions').doc(id.toString())
        .update({
            answeredAt: date,
            answer: reply
        })
        .then(() => {
            logger.info(`DB에 답변을 등록하였습니다. ID: ${id}`);
        })
        .catch((error) => {
            logger.error('내용을 변경하는 도중에 오류가 발생하였습니다.\n', error);
        });
};

router.post('/:comment', (req, res) => {
    const {comment} = req.params;

    logger.info(`POST /question/${comment}`);
    addQuestion(comment);
    res.sendStatus(200).end();
});

router.get('/', (req, res) => {
    logger.info('GET /question');
    getQuestions()
        .then(result => {
            res.send(result);
        });
});

router.put('/:id/:reply', (req, res) => {
    const {id, reply} = req.params;

    logger.info(`PUT /question/${id}/${reply}`);
    updateQuestion(id, reply);
    res.sendStatus(200).end();
});

export default {
    firebase,
    router,
    db
};