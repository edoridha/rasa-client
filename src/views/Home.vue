<script>
import router from '../router/index'

export default{
    methods: {
        movePage(path){
            router.push(path)
        }
    }
}
</script>

<template>
    <div class="container">
        <button class="btn bg-secondary" @click.prevent="movePage('/admin/dashboard')" >Admin</button>
        <button class="btn bg-secondary" @click.prevent="movePage('/student')" >Student</button>
    </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
}

.btn {
  margin: 0 10px; 
}
</style>