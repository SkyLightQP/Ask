<template>
    <div class="container" id="admin">
        <a class="button is-danger is-small" @click="logout()">로그아웃</a>
        <hr/>
        <ReplyCard
                v-for="reply in replies"
                v-if="!reply.answeredAt"
                :key="reply.createdAt"
                :data="reply"
        />
    </div>
</template>

<script>

    import axios from 'axios';
    import ReplyCard from "./ReplyCard";

    export default {
        name: "ReplyPage",
        components: {ReplyCard},
        data() {
            return {
                replies: []
            }
        },
        mounted() {
            axios.get('./question')
                .then((result) => {
                    this.replies = result.data
                });
        },
        methods: {
            logout(){
                this.$store.commit('setUserData', null);
                axios.get('./logout')
            }
        }
    }
</script>

<style lang="scss" scoped>
    #admin {
        margin-top: 20px;
    }
</style>