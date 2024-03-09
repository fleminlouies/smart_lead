<template>
  <NavBar />
  <div class="flex justify-center items-center h-screen bg-primarySurface">
    <div class="p-6 bg-white max-w-md w-full rounded-md shadow-md dark:bg-gray-800 mx-2">
      <form class="py-6 px-6" @submit.prevent="login">
        <div class="flex flex-col gap-4">
          <div class="text-center mb-4">
            <h1 class="font-bold text-xl">Welcome to Smartlead.ai</h1>
            <p class="text-xs my-1">Log in to your account</p>
          </div>
          <FormField label="Email" :error="errors.email">
            <InputText v-model="state.email"></InputText>
          </FormField>
          <FormField label="Password" :error="errors.password">
            <template #label>
              <div class="text-primary text-xs font-medium ml-auto">Forgot Password?</div>
            </template>

            <Password v-model="state.password" :input-props="{ type: state.passToggle ? 'password' : 'text' }" toggle-mask :feedback="false">
              <template #showicon>
                <div class="absolute top-1/2 right-3 -mt-2 text-xs font-medium text-gray-400 z-50 cursor-pointer" @click="toggle">
                  {{ state.passToggle ? "Show" : "Hide" }}
                </div>
              </template>
            </Password>
          </FormField>

          <Button type="submit" class="text-white">Sign in</Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { reactive } from "vue";
  import * as Yup from "yup";
  import useYupValidation from "@/composables/useYupValidation";
  import NavBar from "@/components/NavBar.vue";
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";

  export default {
    components: {
      NavBar
    },
    setup() {
      const store = useStore();
      const router = useRouter();

      const state = reactive({
        email: "",
        password: "",
        passToggle: true
      });

      const { errors, validate } = useYupValidation(
        Yup.object().shape({
          email: Yup.string().email("Please enter a valid email").required("Email is required"),
          password: Yup.string().required("Password is required")
        })
      );

      const toggle = () => {
        state.passToggle = !state.passToggle;
      };
      const login = () => {
        validate(state).then(() => {
          if (Object.keys(errors.value).length === 0) {
            const user = state.email;
            store.dispatch("auth/loginUser", user);
            router.push("/email-campaigns");
          }
        });
      };

      return {
        state,
        errors,
        toggle,
        login
      };
    }
  };
</script>
