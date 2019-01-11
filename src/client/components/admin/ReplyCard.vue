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
    import {mapState} from 'vuex';

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
        computed: mapState(['userData']),
        methods: {
            async update() {
                await axios.put(`./question/${this.data.id}/${this.reply}`, {}, {headers: {'X-AskQ-Auth': this.userData}})
                    .then(() => {
                        this.reply = '';
                        alert("답변을 등록하였습니다.");
                    })
                    .catch((error) => console.log(error));
            },
            async remove() {
                await axios.delete(`./question/${this.data.id}`, {headers: {'X-AskQ-Auth': this.userData}})
                    .then(() => {
                        alert("질문을 삭제하였습니다.");
                    })
                    .catch((error) => console.log(error));
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