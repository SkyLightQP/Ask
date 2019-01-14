import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import config from './config';
import {logger} from './app';
import moment from 'moment';

const settings = {timestampsInSnapshots: true};

firebase.initializeApp(config);
const db = firebase.firestore();
db.settings(settings);


const addQuestion = (comment) => {
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
        .orderBy('createdAt', 'desc')
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

export default {
    firebase,
    db,
    getQuestions,
    addQuestion
};