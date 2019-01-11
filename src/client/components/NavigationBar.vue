<template>
    <nav class="navbar is-light" role="navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                Ask<i>!</i>
            </a>

            <a role="button" class="navbar-burger burger" :class="{ 'is-active': isActive }" aria-label="menu" aria-expanded="false" v-on:click="setActive()">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu" :class="{ 'is-active': isActive }">
            <div class="navbar-start">
            </div>

            <div class="navbar-end">
                <nuxt-link class="navbar-item" to="/admin">
                    <i class="fas fa-toolbox"></i>
                </nuxt-link>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavigationBar",
        data() {
            return {
                isActive: false
            }
        },
        methods: {
            setActive() {
                this.isActive = !this.isActive
            }
        }
    }
</script>