import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const CursosView = () => import('@/views/CursosView.vue')
const CursoView = () => import('@/views/CursoView.vue')
const AulaView = () => import('@/views/AulaView.vue')
const ContatoView = () => import('@/views/ContatoView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cursos',
      name: 'cursos',
      props: true,
      component: CursosView
    },
    {
      path: '/cursos/:curso',
      name: 'curso',
      component: CursoView,
      props: true,
      children: [
        {
          path: ':aula',
          name: 'aula',
          component: AulaView,
          props: true
        }
      ]
    },
    {
      path: '/contato',
      name: 'contato',
      component: ContatoView
    }
  ]
})

export default router
