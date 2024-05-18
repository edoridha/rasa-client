<script>
import router from '../router/index.js'

export default {
    props : ["student"],
    methods: {
        movePage() {
            localStorage.setItem("student", this.student.id)
            router.push('/student/dashboard')
        }
    }
}
</script>

<template>
    <div class="card m-2"  >
        <div class="card-header">
            {{ student.name }}
        </div>
        <div class="card-body">
            <p class="card-text">NIM: {{ student.studentid }}</p>
            <button class="btn btn-primary" @click.prevent="movePage">Choose</button>
        </div>
    </div>
</template>