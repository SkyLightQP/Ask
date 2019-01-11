<template>
    <section>
        <div v-if="userData">
            <ReplyPage/>
        </div>
        <div class="container" v-else>
            <br>
            <div id="login" class="box">
                <label class="label">관리자 로그인</label>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="email" placeholder="Email" v-model="email">
                        <span class="icon is-small is-left">
                    <i class="fas fa-id-badge"></i>
                </span>
                    </p>
                </div>

                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="Password" v-model="password">
                        <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                </span>
                    </p>
                </div>

                <div class="field is-grouped is-grouped-right">
                    <p class="control">
                        <button class="button is-light" @click="signIn()">Login</button>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import ReplyPage from "../components/admin/ReplyPage";
    import axios from 'axios';
    import { mapState } from 'vuex'

    export default {
        name: "admin",
        components: {ReplyPage},
        data() {
            return {
                email: '',
                password: ''
            }
        },
        computed: mapState(['userData']),
        methods: {
            signIn() {
                console.log("B: " + this.userData);
                if(this.email && this.password) {
                    axios.post(`./login/${this.email}/${this.password}`)
                        .then((res) => {
                            if (res.data.done) {
                                this.$store.commit('setUserData', res.data.uid);
                                return;
                            }

                            switch (res.data.errorCode) {
                                case 'auth/invalid-email':
                                    alert('잘못된 이메일입니다.');
                                    break;
                                case 'auth/user-not-found':
                                    alert('계정을 찾을 수 없습니다.');
                                    break;
                                case 'auth/wrong-password':
                                    alert('비밀번호가 틀렸습니다.');
                                    break;
                            }
                        })
                }
                else alert('입력칸이 비어있습니다.');
            }
        }
    }
</script>

<style lang="scss" scoped>
    #login {
        width: 300px;
        margin: auto;
    }
</style>