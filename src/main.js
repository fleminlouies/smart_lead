import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import PrimeVue from "primevue/config"
import Lara from "./preset/index"
import "./css/base.css"
import "./css/tailwindcss.css"

import Button from "primevue/button"
import InputText from "primevue/inputtext"
import Password from "primevue/password"
import FormField from "./components/FormField"
import Avatar from "primevue/avatar"
import Menu from "primevue/menu"
import Tooltip from "primevue/tooltip"
import DataTable from "primevue/datatable"
import Column from "primevue/column"

const app = createApp(App)

app.component("Button", Button)
app.component("InputText", InputText)
app.component("Password", Password)
app.component("Avatar", Avatar)
app.component("Menu", Menu)
app.component("DataTable", DataTable)
app.component("Column", Column)
app.component("FormField", FormField)
app.directive("tooltip", Tooltip)
app.use(PrimeVue, {
  unstyled: true,
  pt: Lara
})
app.use(store)
app.use(router)
app.mount("#app")
