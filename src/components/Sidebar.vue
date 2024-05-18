<script>
import router from '../router/index.js'

export default {
    methods: {
        handleNavbar(string) {
            router.push(`/admin/${string}`)
        },
        handleLogout() {
            router.push('/')
        }
    }
}
</script>

<template>
    <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" id="sidebar-menu">
        <div class="position-sticky pt-3">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active fw-bold" @click.prevent="handleNavbar('dashboard')" id="nav-dashboard">
                        Dashboard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click.prevent="handleNavbar('history')" id="nav-product">
                        History</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click.prevent="handleNavbar('categories')" id="nav-category">
                        Categories</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click.prevent="handleNavbar('student')" id="nav-category">
                        Students</a>
                </li>
            </ul>
            <ul class="nav flex-column mb-2">

                <li class="nav-item">
                    <a class="nav-link" @click.prevent="handleLogout()" id="nav-logout">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-power" viewBox="0 0 16 16">
                            <path d="M7.5 1v7h1V1z" />
                            <path
                                d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
                        </svg>
                        Logout</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
.sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    padding: 48px 0 0;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

.sidebar .nav-link {
    font-weight: 500;
    color: #333;
}

.sidebar .nav-link.active {
    color: #111;
}

.sidebar-heading {
    font-size: 0.75rem;
}
</style>