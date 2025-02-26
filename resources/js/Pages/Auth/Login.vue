<script setup>
import { ref } from 'vue';
import { useForm, usePage } from '@inertiajs/vue3';
//import { route } from 'ziggy-js';

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
        onError: (errors) => {
            // Handle validation errors if any
            console.error(errors);
        },
    });
};
</script>

<template>
  <div class="container-xxl">
    <div class="authentication-wrapper authentication-basic container-p-y">
      <div class="authentication-inner">
        <div class="card">
          <div class="card-body">
            <div class="app-brand justify-content-center">
              <a href="/" class="app-brand-link gap-2">
                <!-- <span class="app-brand-logo demo">
                  <img src="/assets/img/logo.png" alt="Logo" width="25" />
                </span> -->
                <span class="app-brand-text demo text-body fw-bolder">Sneat</span>
              </a>
            </div>
            <h4 class="mb-2">Welcome to Sneat! 👋</h4>
            <p class="mb-4">Please sign in to your account and start the adventure</p>

            <form @submit.prevent="submit" class="mb-3">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model="form.email" type="email" id="email" class="form-control" placeholder="Enter your email" required autofocus />
                <div v-if="form.errors.email" class="text-danger">{{ form.errors.email }}</div>
              </div>
              <div class="mb-3 form-password-toggle">
                <div class="d-flex justify-content-between">
                  <label class="form-label" for="password">Password</label>
                  <a href="/forgot-password"><small>Forgot Password?</small></a>
                </div>
                <div class="input-group input-group-merge">
                  <input v-model="form.password" type="password" id="password" class="form-control" placeholder="••••••••" required />
                  <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                </div>
                <div v-if="form.errors.password" class="text-danger">{{ form.errors.password }}</div>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input v-model="form.remember" type="checkbox" id="remember-me" class="form-check-input" />
                  <label class="form-check-label" for="remember-me">Remember Me</label>
                </div>
              </div>
              <div class="mb-3">
                <button type="submit" class="btn btn-primary d-grid w-100">Sign in</button>
              </div>
            </form>
            <p class="text-center">
              <span>New on our platform?</span>
              <a href="/register"><span>Create an account</span></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../assets/vendor/libs/jquery/jquery.js';
import '../../assets/vendor/libs/popper/popper.js';
import '../../assets/vendor/js/bootstrap.js';
import '../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js';
import '../../assets/vendor/js/menu.js';
// import '../../assets/js/main.js';
import '../../assets/vendor/libs/jquery/jquery.js';
</script>

<style>
@import '../../assets/vendor/css/core.css';
@import '../../assets/vendor/css/theme-default.css';
@import '../../assets/css/demo.css';
@import '../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css';
@import '../../assets/vendor/css/pages/page-auth.css';
</style>
