import { defineStore } from 'pinia'
import axios from 'axios'
import { createApp } from 'vue'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

const app = createApp({})
app.mount('#app')

const $toast = useToast()

const baseUrl = 'http://localhost:3000'

export const useMainStore = defineStore('store', {
  state: () => ({
    students: [],
    books: [],
    totalPage: 0,
    sections: [],
    rent: [],
    histories: []
  }),
  actions: {
    async fetchStudent(status) {
      try {
        const response = await axios({
          url: baseUrl + '/student',
          headers: {status}
        })
        this.students = response.data.data
      } catch (error) {
        console.log(error)
      }
    },
    async fetchBook(page, section, title) {
      try {
        let filter
        let search
        if (title) {
          search = title
        } else {
          search = ''
        }
        if (section) {
          filter = section
        } else {
          filter = ''
        }
        const response = await axios({
          url: baseUrl + `/book?filter=${filter}&page=${page}&title=${search}`
        })
        this.books = response.data.data
        this.totalPage = response.data.totalPage
      } catch (error) {
        console.log(error)
      }
    },

    async fetchSection() {
      try {
        const response = await axios({
          url: baseUrl + '/section'
        })

        this.section = response.data.data
      } catch (error) {
        console.log(error)
      }
    },
    async rentBook(books) {
      try {
        const object = {
          studentId: localStorage.getItem('student'),
          books
        }

        await axios({
          url: baseUrl + '/rent',
          method: 'post',
          data: object
        })
      } catch (error) {
        console.log(error)
      }
    },
    async fetchRent() {
      try {
        const response = await axios({
          url: baseUrl + '/rent',
          headers: {
            studentId: localStorage.getItem('student')
          }
        })

        this.rent = response.data.data
      } catch (error) {
        console.log(error)
      }
    },
    async doneRent(id) {
      try {
        await axios({
          url: `${baseUrl}/rent/${id}`,
          method: 'put'
        })
        this.router.push('/student/dashboard')
        $toast.success('Done Rent')
      } catch (error) {
        console.log(error)
      }
    },
    async increaseStock(id) {
      try {
        await axios({
          url: baseUrl + '/book/' + id,
          method: 'put'
        })
        $toast.success('Success increase stock')
        await this.fetchBook(1, null, null)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchHistory(page) {
      try {
        const response = await axios({
          url: baseUrl + '/history?page=' + page
        })
        this.histories = response.data.data
        this.totalPage = response.data.totalPage
      } catch (error) {
        console.log(error)
      }
    },
    async fetchSection() {
      try {
        const response = await axios({
          url: baseUrl + '/section'
        })
        this.sections = response.data.data
      } catch (error) {
        console.log(error)
      }
    },
    async createBook(data) {
      try {
        await axios({
          url: baseUrl + '/book',
          method: 'post',
          data
        })
        $toast.success('Book Created')
      } catch (error) {
        console.log(error);
      }
    },
    async createSection(name){
      try {
        await axios({
          url: baseUrl + '/section',
          method: 'post',
          data: {name}
        })
        $toast.success('Category Created')
        this.fetchSection()
      } catch (error) {
        console.log(error);
      }
    },
    async changeStatus(id){
      try {
        await axios({
          url: baseUrl + '/student/' + id,
          method: 'put',
        })
        $toast.success('Status Changed')
        this.fetchStudent()
      } catch (error) {
        console.log(error);
      }
    },
    async createStudent(data){
      try {
        await axios({
          url: baseUrl + '/student',
          method: 'post',
          data
        })
        $toast.success('Student Created')
        this.fetchStudent()
      } catch (error) {
        console.log(error);
      }
    }
  }
})
