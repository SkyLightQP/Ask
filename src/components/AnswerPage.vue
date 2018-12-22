<template>
    <div id="answer">
        <div class="card">
            <div class="card-content">
                <p class="title is-4"><i class="fas fa-question"></i> 질문</p>
                <p class="subtitle is-"><i class="fas fa-arrow-right"></i> 답변</p>

                <div id="time">
                    <span id="created-time" class="has-text-grey-light">등록 시간: 2018-01-01</span>
                    <span id="answered-time" class="has-text-grey-light">답변 시간: 2018-01-01</span>
                </div>
            </div>
        </div>
        <br>

        <div class="card">
            <div class="card-content">
                <p class="title is-4"><i class="fas fa-question"></i> 질문</p>
                <p class="subtitle is-"><i class="fas fa-circle-notch fa-spin"></i> 답변을 기다리는 중...</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AnswerPage"
    }
</script>

<style>
    #time {
        text-align: right;
        font-size: 12px;
    }
</style>