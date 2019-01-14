<template>
    <div class="container">
        <DetailPage id="detail" :data="answer"></DetailPage>
    </div>
</template>

<script>
    import axios from 'axios';
    import DetailPage from "../../components/DetailPage";

    export default {
        name: "answer_id",
        components: {DetailPage},
        data() {
            return {
                answer: {}
            }
        },
        mounted() {
            axios.get(`/question/${this.$route.params.id}`)
                .then((result) => {
                    this.answer = result.data
                });
        }
    }
</script>

<style scoped lang="scss">
    #detail {
        margin-top: 20px;
    }
</style>