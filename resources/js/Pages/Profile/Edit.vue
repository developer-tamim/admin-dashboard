<script setup>
import "../../assets/vendor/js/helpers.js";
import "../../assets/js/config.js";
import "../../assets/vendor/js/menu.js";
import "../../assets/vendor/libs/jquery/jquery.js";
import "../../assets/vendor/libs/popper/popper.js";
import "../../assets/vendor/js/bootstrap.js";
import "../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js";
import "../../assets/vendor/libs/apex-charts/apexcharts.js";
import "../../assets/js/main.js";
// import '../assets/js/dashboards-analytics.js';
import "https://buttons.github.io/buttons.js";

import DeleteUserForm from "./Partials/DeleteUserForm.vue";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm.vue";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm.vue";
import { Head } from "@inertiajs/vue3";

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});
</script>

<template>
    <Layout>
        <div class="container-xxl flex-grow-1 container-p-y">
            <h2 class="text-xl font-semibold leading-tight text-gray-800">
                Profile
            </h2>

            <div class="py-6">
                <div class="mx-auto max-w-9xl space-y-6 sm:px-6 lg:px-8">
                    <div class="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdateProfileInformationForm
                            :must-verify-email="mustVerifyEmail"
                            :status="status"
                            class="max-w-xl"
                        />
                    </div>

                    <div class="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdatePasswordForm class="max-w-xl" />
                    </div>

                    <div class="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <DeleteUserForm class="max-w-xl" />
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from "../../Components/Layout/Layout.vue";

export default {
    components: {
        Layout,
    },
};
</script>
<style>
@import "../../assets/vendor/css/core.css";
@import "../../assets/vendor/css/theme-default.css";
@import "../../assets/css/demo.css";
@import "../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
@import "../../assets/vendor/libs/apex-charts/apex-charts.css";
</style>
