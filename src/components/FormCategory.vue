<script>
import { useMainStore } from '../stores/mainStore.js'
import { mapActions} from 'pinia';

export default {
    data(){
        return {
            name: ''
        }
    },
    methods: {
        ...mapActions(useMainStore, ['createSection']),
        handleForm(){
            this.createSection(this.name)
        }
    }
}
</script>

<template>
    <div class="modal modal- fade" id="formCategory" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create Category</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="handleForm">
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Category name</label>
                            <input v-model="name"  type="text" class="form-control" required>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        <button type="sumbit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>