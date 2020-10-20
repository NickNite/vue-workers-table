<template>
  <div class="salaryInfo">
    <div v-for="dep of workerInfo.workerDepartment" :key="dep">
      <p>Wynagrodzenie w dziale {{ dep }}</p>
      <span>{{ getSalaryInDeportament(dep) }}&#8194;PLN</span>
    </div>
    <div>
      <p>Wynagrodzenie calkowite</p>
      <span
        ><b>{{ totalSalary }}&#8194;PLN</b></span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "salaryInfo",
  props: ["workerInfo"],
  data: () => ({
    totalSalary: 0
  }),
  created() {
    this.totalSalary = this.getTotalSalary();
  },
  beforeUpdate() {
    this.totalSalary = this.getTotalSalary();
  },
  methods: {
    getSalaryInDeportament(item) {
      let salarySort = 0;
      for (let sal of this.workerInfo.workers) {
        if (sal.dzial === item) {
          salarySort = salarySort + parseInt(sal.wynagrodzenieKwota);
        }
      }
      return salarySort;
    },
    getTotalSalary() {
      let totalSalary = 0;
      for (let sal of this.workerInfo.workers) {
        totalSalary = totalSalary + parseInt(sal.wynagrodzenieKwota);
      }
      return totalSalary;
    }
  }
};
</script>
<style scoped>
.salaryInfo {
  max-width: 900px;
  margin: 20px auto;
  border-top: 1px solid #f48fb1;
  border-bottom: 1px solid #f48fb1;
  padding: 10px;
}
.salaryInfo div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fce4ec;
}
.salaryInfo div p {
  font-weight: bold;
  margin-left: 50px;
}
.salaryInfo div span {
  margin-right: 50px;
}
</style>