import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SelectStudent from '@/views/SelectStudent.vue'
import StudentDashboard from '../views/StudentDashboard.vue'
import StudentRent from '../views/StudentRent.vue'
import AdminDashboard from '../views/AdminDashboard.vue'
import HistoryRent from '../views/HistoryRent.vue'
import Categories from '../views/Categories.vue'
import StudentList from '../views/StudentList.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/student',
      name: 'Student',
      component: SelectStudent
    },
    {
      path: '/student/dashboard',
      name: 'Dashboard',
      component: StudentDashboard
    },
    {
      path: '/student/rent',
      name: 'Rent',
      component: StudentRent
    },
    {
      path: '/admin/dashboard',
      name: 'AdminDashboard',
      component: AdminDashboard
    },
    {
      path: '/admin/history',
      name: 'History',
      component: HistoryRent
    },
    {
      path: '/admin/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/admin/student',
      name: 'Studentlist',
      component: StudentList
    }
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes: routes
  })

export default router
