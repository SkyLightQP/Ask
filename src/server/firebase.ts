import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import config from './config';

import app from './app';

const router = app.express.Router();
const logger = app.logger;

firebase.initializeApp(config);
const db = firebase.firestore();

const sendQuestion = (createdAt: String, comment: String) => {
    db.collection('questions')
        .add({
            createdAt: createdAt,
            comment: comment,
            answer: ""
        })
        .then(function (docRef) {
            console.log('Document written with ID: ', docRef.id);
        })
        .catch(function (error) {
            console.error('Error adding document: ', error);
        });
    logger.info('테스트');
};

router.post('/:createdAt/:comment', (req, res) => {
    const {
        createdAt,
        comment
    } = req.params;

    sendQuestion(createdAt, comment);
    res.sendStatus(200).end();
});

export default {
    firebase,
    router
};