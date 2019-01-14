<template>
    <div id="answer">
        <AnswerCard
                v-for="answer in answers"
                :key="answer.answer"
                v-if="answer.answeredAt"
                :data="answer"
        />
    </div>
</template>

<script>
    import AnswerCard from "./AnswerCard";
    import axios from 'axios';

    export default {
        name: "AnswerPage",
        components: {AnswerCard},
        data() {
            return {
                answers: []
            }
        },
        mounted() {
            axios.get('./question')
                .then((result) => {
                    this.answers = result.data
                });
        }
    }
</script>