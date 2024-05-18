<script>
import { mapActions, mapState } from 'pinia';
import { useMainStore } from '../stores/mainStore.js'
import StudentCard from '../components/StudentCard.vue'

export default {
    components: { StudentCard },
    methods: {
        ...mapActions(useMainStore, ["fetchStudent"])
    },
    computed: {
        ...mapState(useMainStore, ["students"])
    },
    created() {
        this.fetchStudent('student')
    }
}

</script>

<template>
    <h1>Student List</h1>
    <div class="container ">
        <StudentCard v-for="el in students" :key="el.id" :student="el" />
    </div>
</template>