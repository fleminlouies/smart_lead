<template>
  <TitleBar :title="`All Campaigns` + `(${campaigns.length})`">
    <div class="flex ml-auto gap-2 py-2">
      <SearchBar v-model:modelValue="searchText" place-holder="Search Campaigns" @change="handleSearchChange" />
      <Button class="text-xs p-1">+ Add Campaign</Button>
    </div>
  </TitleBar>
  <div class="bg-primarySurface p-6">
    <DataTable v-model:selection="selectedProduct" :value="campaigns" table-style="min-width: 50rem" class="bg-white shadow-sm">
      <Column selection-mode="multiple" header-style="width: 3rem"></Column>
      <Column field="label" header="Campaign Details">
        <template #body="{ data }">
          <div class="flex items-center">
            <ProgressBar :progress="data.clicked" :status="data.status" class="h-[40px] w-[40px] m-2">
              <img v-if="data.status === 'error'" :src="require(`@/assets/bblock.svg`)" class="h-[15px] cursor-pointer" />
              <img v-if="data.status === 'warning'" :src="require(`@/assets/pause.svg`)" class="h-[15px] cursor-pointer" />
              <img v-if="data.status === 'edit'" :src="require(`@/assets/drafted.svg`)" class="h-[15px] cursor-pointer" />
            </ProgressBar>
            <div class="flex flex-col">
              <div class="flex items-center text-sm text-primary font-semibold">
                {{ data.label }}
                <img :src="require(`@/assets/tabIcon.svg`)" class="ml-2 h-[15px]" />
              </div>
              <div class="flex items-center gap-2 text-[10px] text-gray-600 mt-1">
                <div>Sent on {{ data.sentDate }}</div>
                <div>| {{ data.sequence }} Sequences</div>
              </div>
            </div>
          </div>
        </template>
      </Column>
      <Column header="Report">
        <template #body="slotProps">
          <div>
            <div class="text-md text-primary font-medium">{{ slotProps.data.sent }}</div>
            <div class="flex gap-1 items-center text-[10px] mt-1">Sent</div>
          </div>
        </template>
      </Column>
      <Column field="clicked">
        <template #body="slotProps">
          <div>
            <div class="flex items-end">
              <span class="text-md text-warning font-medium">{{ slotProps.data.clicked }}</span>
              <span class="text-[8px] mb-1 text-gray-500">{{ slotProps.data.clickedRatio }}%</span>
            </div>
            <div class="flex gap-1 items-center text-[10px] mt-1">
              Clicked
              <img v-if="slotProps.data.error" :src="require(`@/assets/error.svg`)" alt="error" />
            </div>
          </div>
        </template>
      </Column>
      <Column field="opened">
        <template #body="slotProps">
          <div>
            <div class="flex items-end">
              <span class="text-md text-[#BF51C1] font-medium">{{ slotProps.data.opened }}</span>
              <span class="text-[8px] mb-1 text-gray-500">{{ slotProps.data.openedRatio }}%</span>
            </div>
            <div class="flex gap-1 items-center text-[10px] mt-1">
              Opened
              <img v-if="slotProps.data.error" :src="require(`@/assets/error.svg`)" alt="error" />
            </div>
          </div>
        </template>
      </Column>
      <Column field="replied">
        <template #body="slotProps">
          <div>
            <div class="flex items-end">
              <span class="text-md text-[#51C1C1] font-medium">{{ slotProps.data.replied }}</span>
              <span class="text-[8px] mb-1 text-gray-500">{{ slotProps.data.repliedRatio }}%</span>
            </div>
            <div class="flex gap-1 items-center text-[10px] mt-1">
              Replied
              <img v-if="slotProps.data.error" :src="require(`@/assets/error.svg`)" alt="error" />
            </div>
          </div>
        </template>
      </Column>
      <Column field="positive">
        <template #body="slotProps">
          <div>
            <div class="flex items-end">
              <span class="text-md text-[#2CDB28] font-medium">{{ slotProps.data.positive }}</span>
              <span class="text-[8px] mb-1 text-gray-500">{{ slotProps.data.positiveRatio }}%</span>
            </div>
            <div class="flex gap-1 items-center text-[10px] mt-1">
              Positive Reply
              <img :src="require(`@/assets/ellipseFull.svg`)" alt="info" />
            </div>
          </div>
        </template>
      </Column>
      <Column field="sent">
        <template #body>
          <img :src="require(`@/assets/actions.svg`)" alt="info" class="max-h-[35px]" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
  import { reactive, toRefs, onMounted } from "vue";
  import TitleBar from "@/components/TitleBar.vue";
  import SearchBar from "@/components/SearchBar.vue";
  import ProgressBar from "@/components/ProgressBar.vue";
  import { emailCampaigns } from "@/service/emailCampaigns";

  export default {
    components: {
      TitleBar,
      SearchBar,
      ProgressBar
    },
    setup() {
      const state = reactive({
        searchText: "",
        campaigns: [],
        selectedProduct: []
      });

      const loadCampaigns = () => {
        emailCampaigns.gatCampagins(state.searchText).then((data) => {
          state.campaigns = data;
        });
      };

      onMounted(loadCampaigns);

      const handleSearchChange = () => {
        loadCampaigns();
      };

      return {
        ...toRefs(state),
        handleSearchChange
      };
    }
  };
</script>
