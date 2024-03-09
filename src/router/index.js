import { createRouter, createWebHistory } from "vue-router"
import LoginView from "../views/LoginView.vue"
import MainLayout from "../layouts/MainLayout.vue"
import AllLeads from "@/views/AllLeads.vue"
import MasterInbox from "@/views/MasterInbox.vue"
import EmailCampaigns from "@/views/EmailCampaigns.vue"
import store from "../store"

const routes = [
  { path: "/", redirect: "/email-campaigns" },
  {
    path: "/login",
    component: LoginView
  },
  {
    path: "/",
    component: MainLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "all-leads",
        component: AllLeads
      },
      {
        path: "master-inbox",
        component: MasterInbox
      },
      {
        path: "email-campaigns",
        component: EmailCampaigns
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (store.getters["auth/getUser"]) {
      next()
    } else {
      next("/login")
    }
  } else {
    next()
  }
})

export default router
