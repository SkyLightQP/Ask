<template>
    <section>
        <div class="container" id="admin" v-if="canAccess">
            <ReplyCard
                    v-for="reply in replies"
                    v-if="!reply.answeredAt"
                    :key="reply.createdAt"
                    :data="reply"
            />
        </div>
        <div id="admin-deny" v-else>
            <p>접근 거부</p>
            <p>Warning! 시공 속으로!</p>
        </div>
    </section>
</template>

<script>
    import ReplyCard from "../components/admin/ReplyCard";
    import axios from 'axios';

    export default {
        name: "admin",
        components: {ReplyCard},
        data() {
            return {
                canAccess: true,
                replies: []
            }
        },
        mounted() {
            axios.get('http://localhost:3000/question')
                .then((result) => {
                    this.replies = result.data
                });
        }
    }
</script>

<style lang="scss" scoped>
    #admin {
        margin-top: 20px;
    }
</style>