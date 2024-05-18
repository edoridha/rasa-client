<script>
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header.vue'
import FormCategory from '../components/FormCategory.vue'
import { useMainStore } from '../stores/mainStore.js'
import { mapActions, mapState } from 'pinia';

export default {
    components: { Sidebar, Header, FormCategory },
    computed: {
        ...mapState(useMainStore, ["sections"])
    },
    methods: {
        ...mapActions(useMainStore, ["fetchSection"])
    },
    created() {
        this.fetchSection()
    }
}
</script>

<template>
    <Header></Header>
    <section class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="dashboard-section">
        <Sidebar />
        <div class="card m-2" style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li v-for="section in sections" :key="section.id" class="list-group-item">{{ section.name }}</li>
            </ul>
        </div>
        <div>
            <button type="button" data-bs-toggle="modal" data-bs-target="#formCategory" class="btn btn-outline-success">
                AddCategory
            </button>
            <FormCategory />
        </div>
    </section>
</template>
