<template>
    <nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
      <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
          <i class="bx bx-menu bx-sm"></i>
        </a>
      </div>
      <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
        <div class="navbar-nav align-items-center">
          <div class="nav-item d-flex align-items-center">
            <i class="bx bx-search fs-4 lh-0"></i>
            <input type="text" class="form-control border-0 shadow-none" placeholder="Search..." aria-label="Search...">
          </div>
        </div>
        <ul class="navbar-nav flex-row align-items-center ms-auto">
          <!-- User Dropdown -->
          <li class="nav-item navbar-dropdown dropdown-user dropdown">
            <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
              <div class="avatar avatar-online">
                <img src="../../assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle">
              </div>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <!-- Dropdown Items -->
              <li>
                <a class="dropdown-item" :href="route('profile.edit')">
                  <div class="d-flex">
                    <div class="flex-shrink-0 me-3">
                      <div class="avatar avatar-online">
                        <img src="../../assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" />
                      </div>
                    </div>
                    <!-- <div class="flex-grow-1">
                      <span class="fw-semibold d-block">John Doe</span>
                      <small class="text-muted">Admin</small>
                    </div> -->
                    <div class="flex-grow-1">
                        <span class="fw-semibold d-block">{{ user.name }}</span>
                        <small class="text-muted">{{ user.email }}</small>
                      </div>
                  </div>
                </a>
              </li>
              <li>
                <div class="dropdown-divider"></div>
              </li>
              <li>
                <a class="dropdown-item" :href="route('profile.edit')">
                  <i class="bx bx-user me-2"></i>
                  <span class="align-middle">My Profile</span>
                </a>
              </li>
              <!-- <li>
                <a class="dropdown-item" href="#">
                  <i class="bx bx-cog me-2"></i>
                  <span class="align-middle">Settings</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <span class="d-flex align-items-center align-middle">
                    <i class="flex-shrink-0 bx bx-credit-card me-2"></i>
                    <span class="flex-grow-1 align-middle">Billing</span>
                    <span class="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                  </span>
                </a>
              </li> -->
              <!-- <li>
                <div class="dropdown-divider"></div>
              </li> -->
              <li>
                <a class="dropdown-item" href="javascript:void(0);" @click="logout">
                    <i class="bx bx-power-off me-2"></i>
                    <span class="align-middle">Log Out</span>
                  </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </template>

  <script>
  import { useForm } from '@inertiajs/vue3';

  export default {
    name: 'Navbar',
    props: {
    user: {
      type: Object,
      required: true,
    },
  },
    setup() {
      const form = useForm({});

      const logout = () => {
        form.post(route('logout'));
      };

      return { logout };
    }
  };
  </script>

