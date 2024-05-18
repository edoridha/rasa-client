<script>
import Navbar from '../components/Navbar.vue'
import { useMainStore } from '../stores/mainStore.js'
import { mapActions, mapState } from 'pinia';


export default {
    components: { Navbar },
    methods: {
        ...mapActions(useMainStore, ["fetchRent", "doneRent"]),
        formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString();
        },
        async handleRent(id) {
            try {
                await this.doneRent(id);
            } catch (error) {
                console.error('Error handling rent:', error);
            }
        }
    },
    computed: {
        ...mapState(useMainStore, ["rent"])
    },
    created() {
        this.fetchRent()
    }
}
</script>

<template>
    <Navbar />
    <div class="container align-middle text-center">

        <h1 class="m-5 align-middle text-center">Book Rent</h1>

        <div class="container align-middle text-center">
            <table class="table table-striped m-5">
                <thead>
                    <tr>
                        <th class="bg-secondary align-middle text-center" scope="col">Title</th>
                        <th class="bg-secondary align-middle text-center" scope="col">Rent Date</th>
                        <th class="bg-secondary align-middle text-center" scope="col">Return Date</th>
                        <th class="bg-secondary align-middle text-center" scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="el in rent" :key="el.id">
                        <td>
                            <table class="table table-striped">
                                <tr v-for="book in el.RentBooks" :key="book.id">
                                    <td scope="col">{{ book.Book.title }}</td>
                                </tr>
                            </table>
                        </td>
                        <td class="align-middle text-center">{{ formatDate(el.rentDate) }}</td>
                        <td class="align-middle text-center">{{ formatDate(el.returnDate) }}</td>
                        <td class="align-middle text-center">
                            <button class="btn bg-primary" @click.prevent="doneRent(el.id)">Return</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>