<template>
  <div class="main z-depth-1">
    <h1>Lista pracownikow</h1>
    <Loader v-if="workerInfo.loading" />
    <div v-else>
      <WorksTable v-bind:workerInfo="workerInfo" />
      <SalaryInfo v-bind:workerInfo="workerInfo" />
    </div>
    <div class="linkToHome">
      <router-link to="/" class="waves-effect waves-light btn"
        >Wroc do glownej</router-link
      >
    </div>
  </div>
</template>
<script>
import WorksTable from "@/components/WorksTable";
import SalaryInfo from "@/components/SalaryInfo";
import Loader from "@/components/Loader";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "workersList",
  created() {
    this.getWorkers();
  },
  beforeUpdate() {
    this.getDeportaments;
  },
  methods: {
    ...mapActions(["getWorkers"])
  },
  components: {
    WorksTable,
    SalaryInfo,
    Loader
  },
  computed: {
    ...mapGetters(["workerInfo", "getDeportaments"])
  }
};
</script>
<style scoped lang="scss">
.main {
  h1 {
    font-size: 34px;
    padding-top: 20px;
  }
}
.linkToHome {
  margin: 50px 0;
  padding: 10px;
  font-weight: bold;
}
</style>
