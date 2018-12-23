<template>
    <section>
        <NavigationBar/>
        <nuxt/>
        <Footer/>
    </section>
</template>

<script>
    import NavigationBar from "../components/NavigationBar";
    import Footer from "./Footer";
    export default {
        name: "default",
        components: {Footer, NavigationBar}
    }
</script>