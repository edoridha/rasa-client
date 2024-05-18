<script>
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header.vue'
import FormBook from '../components/FormBook.vue'
import { useMainStore } from '../stores/mainStore.js'
import { mapActions, mapState } from 'pinia';

export default {
    data() {
        return {
            filter: null,
            search: null
        }
    },
    components: { Sidebar, Header, FormBook },
    methods: {
        ...mapActions(useMainStore, ["fetchBook", "increaseStock", "fetchSection"]),
        movePage(page) {
            this.fetchBook(page, this.page)
        },
        searchBook() {
            this.fetchBook(1, this.filter, this.search)
        },
        handleStock(id) {
            this.increaseStock(id)
        }
    },
    computed: {
        ...mapState(useMainStore, ["books", "totalPage", "sections"])
    },
    created() {
        this.fetchBook(1, null, null)
    }
}
</script>

<template>
    <Header></Header>
    <section class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="dashboard-section">
        <Sidebar />

        <form @submit.prevent="searchBook" class="d-flex m-3" role="search">
            <input v-model="search" class="form-control me-2" type="search" placeholder="Search Title"
                aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>

        <table class="table table-striped m-2">
            <thead>
                <tr>
                    <th class="align-middle text-center" scope="col">Title</th>
                    <th class="align-middle text-center" scope="col">Author</th>
                    <th class="align-middle text-center" scope="col">Stock</th>
                    <th class="align-middle text-center" scope="col">Action
                        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                            class="btn btn-outline-success">Add Book</button>
                            <FormBook/>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in books" :key="book.id">
                    <td class="align-middle text-center">{{ book.title }}</td>
                    <td class="align-middle text-center">{{ book.author }}</td>
                    <td class="align-middle text-center">{{ book.stock }}</td>
                    <td class="align-middle text-center">
                        <button @click.prevent="handleStock(book.id)" class="btn btn-outline-info">Increase
                            Stock</button>
                    </td>
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