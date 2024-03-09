<template>
  <div class="bg-white border-2 border-t-0 border-l-0 h-screen relative">
    <div v-for="(menu, idx) in menus" :key="idx">
      <router-link :to="menu.url" class="flex items-center gap-3 p-2 border-l-[3px] cursor-pointer" :class="{ 'bg-primarySurfaceDark ': activeMenu(menu.url), 'border-l-[3px] border-primary': activeMenu(menu.url) }">
        <div :class="{ 'bg-primary': activeMenu(menu.url), 'bg-[#E1E3EF]': !activeMenu(menu.url), 'p-1 rounded-sm': true }" class="w-[22px] h-[22px]">
          <img :src="require(`@/assets/${menu.icon}.svg`)" :alt="menu.icon" :class="{ 'white-icon': activeMenu(menu.url), 'gray-icon': !activeMenu(menu.url) }" class="h-full w-full" />
        </div>
        <label class="text-xs">{{ menu.label }}</label>
      </router-link>
    </div>
    <div class="absolute bottom-[60px]">
      <div class="border-2 border-t-0 max-w-[40px] ml-[50%] mb-3" />
      <div v-for="(link, idx) in links" :key="idx">
        <div class="flex items-center gap-2">
          <div class="flex items-center gap-3 p-2 border-l-[3px] border-white">
            <img :src="require(`@/assets/${link.icon}.svg`)" :alt="link.icon" />
          </div>
          <label class="text-xs">{{ link.label }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { useRoute } from "vue-router";

  export default {
    setup() {
      const route = useRoute();

      const activeMenu = (url) => {
        return route.path === url;
      };

      const menus = [
        {
          label: "All Leads",
          icon: "leads",
          url: "/all-leads"
        },
        {
          label: "Master Inbox",
          icon: "inbox",
          url: "/master-inbox"
        },
        {
          label: "Email Campaigns",
          icon: "emailc",
          url: "/email-campaigns"
        }
      ];

      const links = [
        {
          label: "Join Slack Community",
          icon: "slack"
        },
        {
          label: "Smartlead Tutorials",
          icon: "video"
        }
      ];

      return {
        menus,
        links,
        activeMenu
      };
    }
  };
</script>

<style scoped>
  .white-icon {
    filter: brightness(0) saturate(100%) hue-rotate(0deg) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
  }
  .gray-icon {
    color: #a9abc1;
  }
</style>
