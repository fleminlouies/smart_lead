<template>
  <div>
    <NavBar />
    <div class="flex fixed w-full h-full">
      <SideBar class="w-[240px]" />
      <main class="w-full overflow-scroll">
        <router-view></router-view>
      </main>
    </div>

    <footer>
      <!-- Your footer content here -->
    </footer>
  </div>
</template>

<script>
  import NavBar from "@/components/NavBar.vue";
  import SideBar from "@/components/SideBar.vue";
  export default {
    components: {
      NavBar,
      SideBar
    }
  };
</script>

<style>
  /* Your layout styles here */
</style>
