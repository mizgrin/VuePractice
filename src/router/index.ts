
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import CounterAppVue from '@/views/CounterApp.vue'
import ReactionTimerVue from '@/views/ReactionTimer.vue'
import TaskTracker from '../views/TaskTracker.vue'
import NotesListVue from '@/views/NotesList.vue'
import NotesVue from '@/views/Notes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/testpage',
      name:'test',
      component:()=>import('../views/TestPage.vue')
    },
    {
      path:'/reactiontimer',
      name:'reactiontimer',
      component:ReactionTimerVue,
    },
    {
      path:'/tasktracker',
      name:'tasktracker',
      component:TaskTracker
    },
    // {
    //   path:'/counter',
    //   name:'counter',
    //   component:CounterAppVue
    // },
    {
      path:'/notes',
      name:'notes',
      component:NotesVue
    }
  ]
})

export default router
