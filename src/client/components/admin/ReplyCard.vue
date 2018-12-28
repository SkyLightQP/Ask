<template>
    <div id="reply">
        <div class="card">
            <div class="card-content">
                <p class="title is-5"><i class="fas fa-question"></i> {{ data.comment }}</p>
                <p class="subtitle is-6"><i class="fas fa-reply"></i> '{{ data.id }}'의 답변을 적어주세요.</p>
                <div class="control subtitle is-6">
                        <textarea
                                class="textarea"
                                placeholder="답변"
                                v-model="reply"
                        ></textarea>
                </div>

                <div id="sub">
                    <div id="button">
                        <button class="button is-danger" @click="remove()">질문 삭제</button>
                        <button class="button is-info" @click="update()">등록하기</button>
                    </div>
                    <span id="created-time" class="has-text-grey-light">등록 시간: {{ data.createdAt }}</span>
                </div>
            </div>
        </div>
        <br>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "ReplyCard",
        data() {
            return {
                reply: ''
            }
        },
        props: {
            data: {
                required: true,
                type: Object
            }
        },
        methods: {
            async update() {
                await axios.put(`http://localhost:3000/question/${this.data.id}/${this.reply}`);
                this.reply = '';
                alert("답변을 등록하였습니다.");
            },
            async remove() {
                await axios.delete(`http://localhost:3000/question/${this.data.id}`);
                alert("질문을 삭제하였습니다.");
            }
        }
    }
</script>

<style lang="scss" scoped>
    #sub {
        text-align: right;
        font-size: 12px;

        #button {
            margin-bottom: 5px;
        }
    }
</style>