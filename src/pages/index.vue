<template>
    <div class="container">
        <AskPage/>
        <hr/>
        <AnswerPage/>
    </div>
</template>

<script>
    import AskPage from "../components/AskPage";
    import AnswerPage from "../components/AnswerPage";
    export default {
        name: "index",
        components: {AnswerPage, AskPage}
    }
</script>

