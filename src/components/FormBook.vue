<script>
import { useMainStore } from '../stores/mainStore.js'
import { mapActions, mapState } from 'pinia';

export default {
    data() {
        return {
            formData: {
                title: '',
                author: '',
                stock: '',
                sectionId: ''
            }
        }
    },
    computed: {
        ...mapState(useMainStore, ["sections"])
    },
    methods: {
        ...mapActions(useMainStore, ["fetchSection", "createBook"]),
        handleForm() {
            this.createBook(this.formData)
        }
    },
    created() {
        this.fetchSection()
    }
}
</script>

<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Add New Book</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="handleForm">
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Title</label>
                            <input v-model="formData.title" type="text" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Author</label>
                            <input v-model="formData.author" type="text" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Stock</label>
                            <input v-model="formData.stock" type="number" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Section</label>
                            <select v-model="formData.sectionId" class="form-select" aria-label="Default select example">
                                <option disabled value="">Select Section</option>
                                <option v-for="section in sections" :key="section.id" :value="section.id">{{
                                    section.name }}</option>
                            </select>

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>