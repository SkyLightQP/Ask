import firebase from 'firebase/app';
import 'firebase/auth';
import {express} from '../app';

const router = express.Router();

router.post('/:id/:password', (req, res) => {
    const {id, password} = req.params;

    let done = false;
    let errorCode = null;

    firebase.auth().signInWithEmailAndPassword(id, password)
        .then((result) => {
            if (result) {
                done = true;
                res.send(`{ "done": ${done}, "errorCode": "${errorCode}", "uid": "${result.user.uid}" }`);
            }
        })
        .catch((error) => {
            errorCode = error.code;
            res.send(`{ "done": ${done}, "errorCode": "${errorCode}", "uid": null }`);
        });
})

export default {
    router
};