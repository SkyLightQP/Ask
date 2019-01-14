<template>
    <nav class="navbar is-light" role="navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                Ask<i>!</i>
            </a>
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