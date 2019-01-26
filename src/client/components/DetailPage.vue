<template>
    <section>
        <div class="card" v-if="data">
            <div class="card-content">
                <p class="title is-5"><i class="fas fa-question"></i> {{ data.comment }}</p>
                <p class="subtitle is-6"><i class="fas fa-arrow-right"></i> {{ data.answer }}</p>
                <div id="more">
                    <span id="created-time" class="has-text-grey-light">등록 날짜: {{ data.createdAt }}</span>
                    <span id="answered-time" class="has-text-grey-light">답변 날짜: {{ data.answeredAt }}</span>
                    <br>
                    <a @click="copy()"><i class="fas fa-copy"></i> 주소 복사</a>
                </div>
            </div>
        </div>
        <div v-else>
            <p>존재하지 않는 답변입니다!</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: "DetailPage",
        props: {
            data: {
                required: true,
                type: Object
            }
        },
        methods: {
            copy() {
                let temp = document.createElement('textarea');

                document.body.appendChild(temp);
                temp.value = `https://ask.skylightqp.kr${this.$route.fullPath}`;
                temp.select();
                document.execCommand('copy');
                document.body.removeChild(temp);

                alert('복사되었습니다!')
            }
        }
    }
</script>

<style scoped lang="scss">
    #more {
        text-align: right;
        font-size: 12px;
    }
</style>