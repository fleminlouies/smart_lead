<template>
  <div class="bg-primaryDark px-2 py-2 flex items-center sticky top-0 z-100">
    <img src="../assets/smartlead-logo.svg" alt="Smartlead logo" class="h-[25px]" />
    <template v-if="user">
      <div class="ml-auto flex items-center gap-6">
        <div class="flex items-center bg-[#FFFFFF33] rounded-full px-2 py-1 gap-2">
          <img src="../assets/stars.svg" alt="Smartlead logo" class="h-[22px]" />
          <p class="text-xs text-[#FFFFFF]">Trail expires in 12 days</p>
        </div>
        <img src="../assets/Union.svg" alt="Smartlead logo" class="h-[22px]" />
        <img src="../assets/gifts.svg" alt="Smartlead logo" class="h-[22px]" />
        <div class="flex">
          <Avatar
            v-tooltip="user"
            image="https://s3-alpha-sig.figma.com/img/d48e/0f1f/6380fec1035b1a2c33f92502f87eda80?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pJU~Cf1SXMnjtLPe3le~-uOVoINM6iQfxYqFgpVLiD4DuwiJAkWlg4dMz82IU8ablyClsSLgdKg7BV98~RAdbk22HTGV89k1xp2heao3nm4qX6mnKKXX1kxGwyiLi083T1FMUG7puytMGeZaFHLD~4KQYoVqy~WueJlD8HT-gkbVGaWlyyKoOqpXUBdryDV3KYjct7GqX5JH8mUo5nG1J86Fco-xUG8BVejvwQhBZtAZrpipWsqUio0uPPAzr7ehp9w8serezbT8WN-sPjua7t~iaWyezAlycUACFNgBDfnBuhO7oGD~o~NTu41znxmyU0J2pYQP6Y97VnHHZqlEJQ__"
            class="mr-2"
            aria-controls="overlay_menu"
            shape="circle"
            @click="toggle"
             />
          <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import { ref, computed } from "vue";
  import { useStore } from "vuex";

  export default {
    setup() {
      const store = useStore();
      const menu = ref();

      const user = computed(() => {
        return store.getters["auth/getUser"];
      });

      const items = ref([
        {
          label: user,
          items: [
            {
              label: "Log out",
              command: () => store.dispatch("auth/logout")
            }
          ]
        }
      ]);

      const toggle = (event) => {
        menu.value.toggle(event);
      };

      return {
        menu,
        items,
        user,
        toggle
      };
    }
  };
</script>
