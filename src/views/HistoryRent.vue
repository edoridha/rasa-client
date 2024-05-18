<script>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import { mapActions, mapState } from 'pinia';
import { useMainStore } from '../stores/mainStore.js'

export default {
    components: { Header, Sidebar },
    computed: {
        ...mapState(useMainStore, ['histories', 'totalPage'])
    },
    methods: {
        ...mapActions(useMainStore, ['fetchHistory']),
        formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString();
        },
        movePage(page) {
            this.fetchHistory(page)
        },
    },
    created() {
        this.fetchHistory(1)
    }
}
</script>

<template>
    <Header></Header>
    <section class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="dashboard-section">
        <Sidebar />

        <table class="table table-striped m-3">
            <thead>
                <th class="align-middle text-center" scope="col">Name</th>
                <th class="align-middle text-center" scope="col">NIM</th>
                <th class="align-middle text-center" scope="col">Title</th>
                <th class="align-middle text-center" scope="col">Author</th>
                <th class="align-middle text-center" scope="col">Rent Date</th>
                <th class="align-middle text-center" scope="col">Return Date</th>
            </thead>

            <tbody>
                <tr v-for="history in histories" :key="history.id">
                    <td class="align-middle text-center">{{ history.Student.name }}</td>
                    <td class="align-middle text-center">{{ history.Student.studentid }}</td>
                    <td class="align-middle text-center">{{ history.Book.title }}</td>
                    <td class="align-middle text-center">{{ history.Book.author }}</td>
                    <td class="align-middle text-center">{{ formatDate(history.rentDate) }}</td>
                    <td class="align-middle text-center">{{ formatDate(history.returnDate) }}</td>
                </tr>
            </tbody>
        </table>
        <div class="container d-flex justify-content-center">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li v-for="pageNumber in totalPage" :key="pageNumber" class="page-item">
                        <a class="page-link" @click.prevent="movePage(pageNumber)">{{ pageNumber }}</a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>


</template>