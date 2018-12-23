import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import config from './config';

import { express, logger } from './app';

import moment from 'moment';

const router = express.Router();

firebase.initializeApp(config);
const db = firebase.firestore();

const sendQuestion = (comment: String) => {
    const date = moment().format('YYYYMMDD');
    db.collection('questions')
        .add({
            createdAt: date,
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

router.post('/:comment', (req, res) => {
    const {
        createdAt,
        comment
    } = req.params;

    sendQuestion(comment);
    res.sendStatus(200).end();
});

export default {
    firebase,
    router
};