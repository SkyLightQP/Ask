<template>
    <div id="ask">
        <div class="field">
            <div class="control">
                <textarea
                        class="textarea"
                        placeholder="질문할 내용을 적어주세요!"
                        v-model="message"
                        @keyup.shift.enter="send()"
                ></textarea>
            </div>
        </div>

        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <p id="count" class="help is-dark">{{ message.length }} / 500</p>
            </div>
            <div class="control">
                <button class="button is-info" @click="send()" :disabled="checkLength()">보내기</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "AskPage",
        data() {
            return {
                message: ''
            }
        },
        methods: {
            async send() {
                await axios.post(`./question/${this.message}`)
                    .then(() => {
                        this.message = '';
                        alert("질문을 등록하였습니다.");
                    })
                    .catch((error) => console.log(error));
            },
            checkLength() {
                return this.message.length > 500;
            }
        }
    }
</script>

<style lang="scss" scoped>
    #ask {
        margin-top: 20px;
    }
</style>