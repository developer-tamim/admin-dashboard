<template>
    <Layout :user="user">
        <h1>test product list</h1>
    </Layout>

</template>

<script>
import Layout from "../../Components/Layout/Layout.vue";

export default {
    components: {
        Layout,
    },
    props: {
        user: {
            type: Object,
            required: true,
        },
        mustVerifyEmail: {
      type: Boolean,
    },
    status: {
      type: String,
    },
    },
};
</script>

