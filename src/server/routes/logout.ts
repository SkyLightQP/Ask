import firebase from 'firebase/app';
import 'firebase/auth';
import { express, logger } from '../app';

const router = express.Router();

router.get('/', (req, res) => {
    firebase.auth().signOut().then(() => {
        res.redirect('/');
    }).catch((error) => {
        logger.error('로그아웃 과정에서 오류가 발생하였습니다.\n', error);
    });
});

export default {
    router
};