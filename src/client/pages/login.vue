<template>
    <div class="container">
        <br>
        <div id="login" class="box">
            <label class="label">관리자 로그인</label>
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Id">
                    <span class="icon is-small is-left">
                    <i class="fas fa-id-badge"></i>
                </span>
                </p>
            </div>

            <div class="field">
                <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password">
                    <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                </span>
                </p>
            </div>

            <div class="field is-grouped is-grouped-right">
                <p class="control">
                    <button class="button is-light">Login</button>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style lang="scss" scoped>
    #login {
        width: 300px;
        margin: auto;
    }
</style>