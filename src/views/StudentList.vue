<script>
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header.vue'
import FormStudent from '../components/FormStudent.vue'
import { useMainStore } from '../stores/mainStore.js'
import { mapActions, mapState } from 'pinia';

export default {
    components: { Sidebar, Header, FormStudent },
    computed: {
        ...mapState(useMainStore, ['students'])
    },
    methods: {
        ...mapActions(useMainStore, ['fetchStudent', 'changeStatus']),
        handleStatus(id) {
            this.changeStatus(id)
        },
    },
    created() {
        this.fetchStudent('admin')
    }

}
</script>

<template>
    <Header></Header>
    <section class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="dashboard-section">
        <Sidebar />
        <div>
            <button data-bs-toggle="modal" data-bs-target="#formStudent" class="btn btn-outline-primary m-1">Add
                Student</button>
            <FormStudent />
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th class="align-middle text-center" scope="col">No</th>
                    <th class="align-middle text-center" scope="col">Name</th>
                    <th class="align-middle text-center" scope="col">NIM</th>
                    <th class="align-middle text-center" scope="col">Status</th>
                    <th class="align-middle text-center" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(student, index) in students" :key="student.id">
                    <td class="align-middle text-center">{{ index + 1 }}</td>
                    <td class="align-middle text-center">{{ student.name }}</td>
                    <td class="align-middle text-center">{{ student.studentid }}</td>
                    <td class="align-middle text-center">{{ student.status ? 'Active' : 'Inactive' }}</td>
                    <td class="align-middle text-center">
                        <button @click.prevent="handleStatus(student.id)">Change Status</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>


</template>