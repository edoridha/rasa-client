<script>
import Navbar from '../components/Navbar.vue'
import { mapActions, mapState } from 'pinia';
import { useMainStore } from '../stores/mainStore.js'
import router from '../router/index.js'

export default {
    data() {
        return {
            bookid: [],
            filter: null,
            search: null
        }
    },
    components: { Navbar },
    methods: {
        ...mapActions(useMainStore, ["fetchBook", "fetchSection", "rentBook"]),
        addBook(id) {
            this.bookid.push(id)
        },
        movePage(page) {
            this.fetchBook(page, this.filter, null)
        },
        filterBook(id) {
            this.filter = id
            this.fetchBook(1, id)
        },
        async postRent() {
            await this.rentBook(this.bookid)
            router.push('/student/rent')
        },
        searchBook() {
            this.fetchBook(1, this.filter, this.search)
        }
    },
    computed: {
        ...mapState(useMainStore, ["books", "totalPage", "sections"])
    },
    created() {
        this.fetchBook(1, this.filter)
        this.fetchSection()
    }
}
</script>

<template>
    <Navbar />
    <div>
        <div class="container m-5 d-flex justify-content-center">
            <button class="m-2" @click.prevent="filterBook(null)">All</button>
            <div v-for="el in sections" :key="el.id">
                <button class="m-2" @click.prevent="filterBook(el.id)">{{ el.name }}</button>
            </div>
        </div>

        <form @submit.prevent="searchBook" class="d-flex m-3" role="search">
            <input v-model="search" class="form-control me-2" type="search" placeholder="Search Title"
                aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>

        <div class="container m-5" v-if="bookid.length > 0">
            <h2>Rent List</h2>
            <div v-for="book in books" :key="book.id">
                <div v-if="bookid.includes(book.id)" class="card m-1">
                    <h5 class="card-header">{{ book.title }}</h5>
                </div>
            </div>
            <button class="btn bg-primary" @click.prevent="postRent()">Rent Now</button>
        </div>

        <div class="container">
            <table class="table table-striped m-5">
                <thead>
                    <tr>
                        <th class="bg-secondary" scope="col">Title</th>
                        <th class="bg-secondary" scope="col">Author</th>
                        <th class="bg-secondary" scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="book in books" :key="book.id">
                        <td>{{ book.title }}</td>
                        <td>{{ book.author }}</td>
                        <td>
                            <button @click.prevent="addBook(book.id)" class="btn bg-primary shadow">Rent</button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
        <div class="container d-flex justify-content-center">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li v-for="pageNumber in totalPage" :key="pageNumber" class="page-item">
                        <a class="page-link" @click.prevent="movePage(pageNumber)">{{ pageNumber }}</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>


</template>