<template>
    <div id="ask">
        <div class="field">
            <div class="control">
                <textarea
                        class="textarea"
                        placeholder="질문할 내용을 적어주세요!"
                        v-model="message"
                ></textarea>
            </div>
        </div>

        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <p class="help is-dark">0 / 500</p>
            </div>
            <div class="control">
                <button class="button is-info" @click="send()">보내기</button>
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
                await axios.post(`http://localhost:3000/question/${this.message}`);
                this.message = '';
            }
        }
    }
</script>

<style lang="scss">
    #ask {
        margin-top: 20px;
    }
</style>