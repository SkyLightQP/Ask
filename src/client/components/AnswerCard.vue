<template>
    <div id="ask">
        <nuxt-link :to="'/answer/' + data.id">
            <div class="card">
                <div class="card-content">
                    <p class="title is-5"><i class="fas fa-question"></i> {{ data.comment }}</p>
                    <p class="subtitle is-6"><i class="fas fa-arrow-right"></i> {{ data.answer }}</p>

                    <div id="time">
                        <span id="created-time" class="has-text-grey-light">등록 날짜: {{ data.createdAt }}</span>
                        <span id="answered-time" class="has-text-grey-light">답변 날짜: {{ data.answeredAt }}</span>
                    </div>
                </div>
            </div>
        </nuxt-link>
        <br>
    </div>
</template>

<script>
    export default {
        name: "AnswerCard",
        props: {
            data: {
                required: true,
                type: Object
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~bulma";

    #time {
        text-align: right;
        font-size: 12px;
    }

    .card:hover {
        box-shadow: 0 0 3px $info;
    }
</style>