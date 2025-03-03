<template>
    <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
            <Sidebar />
            <div class="layout-page">
                <Navbar :user="user" />
                <div class="content-wrapper">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "../Layout/Sidebar.vue";
import Navbar from "../Layout/Navbar.vue";

export default {
    components: {
        Sidebar,
        Navbar,
    },
    props: {
        user: {
            type: Object,
            required: true,
        },
    }
};
</script>
