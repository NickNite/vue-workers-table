<template>
  <div class="main">
    <div class="search">
      <input
        class="name"
        type="text"
        placeholder="Poszukaj osoby..."
        v-model="search"
        @input="searchOnTable"
      />
      <select v-model="filter">
        <option value="all">Wszysktie</option>
        <option
          :value="dep"
          v-for="dep of workerInfo.workerDepartment"
          :key="dep"
          >{{ dep }}</option
        >
      </select>
      <div class="salarySort">
        <input
          type="number"
          v-model.number="salaryFrom"
          placeholder="od PLN"
        />&#8212;
        <input type="number" v-model.number="salaryTo" placeholder="do PLN" />
      </div>
    </div>
    <table class="highlight centered">
      <thead>
        <tr>
          <th>Imie</th>
          <th>Nazwisko</th>
          <th>Dzial</th>
          <th>Wynagrodzenie</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="worker of filterTest"
          :key="worker.wynagrodzenieKwota + worker.imie"
        >
          <td>{{ worker.imie }}</td>
          <td>{{ worker.nazwisko }}</td>
          <td>{{ worker.dzial }}</td>
          <td>
            {{ worker.wynagrodzenieKwota + " " + worker.wynagrodzenieWaluta }}
          </td>
        </tr>
      </tbody>
    </table>
    <CreateWorker />
  </div>
</template>

<script>
import VueLodash from "vue-lodash";
import Vue from "vue";
import lodash from "lodash";
import CreateWorker from "./CreateWorker";
Vue.use(VueLodash, { name: "custom", lodash: lodash });

export default {
  name: "tableWorkers",
  props: ["workerInfo"],
  components: {
    CreateWorker
  },
  data: () => ({
    search: null,
    workerSearched: [],
    filter: "all",
    salaryFrom: "",
    salaryTo: ""
  }),
  methods: {
    searchOnTable() {
      this.workerSearched = this.searchByName(
        this.workerInfo.workers,
        this.search
      );
    },
    getSalary() {
      let newSall = [];
      for (let i of this.workerSearched) {
        newSall.push(Number(i.wynagrodzenieKwota));
      }
      return newSall;
    },
    searchByName(items, term) {
      if (term) {
        return items.filter(
          item =>
            this.toLower(item.imie).includes(this.toLower(term)) ||
            this.toLower(item.nazwisko).includes(this.toLower(term))
        );
      }
      return items;
    },
    toLower(text) {
      return text.toString().toLowerCase();
    }
  },
  created() {
    this.workerSearched = this.workerInfo.workers;
  },
  computed: {
    filterTest() {
      return this.workerSearched
        .filter(item => {
          if (!this.salaryFrom && !this.salaryTo) {
            return item;
          }
          if (!this.salaryFrom && this.salaryTo) {
            return Number(item.wynagrodzenieKwota) <= this.salaryTo;
          }
          if (this.salaryFrom && !this.salaryTo) {
            return Number(item.wynagrodzenieKwota) >= this.salaryFrom;
          } else {
            return (
              Number(item.wynagrodzenieKwota) >= this.salaryFrom &&
              Number(item.wynagrodzenieKwota) <= this.salaryTo
            );
          }
        })
        .filter(item => {
          if (this.filter === "all") {
            return item;
          }
          return item.dzial === this.filter;
        });
    }
  }
};
</script>
<style lang='scss' scoped>
table {
  max-width: 900px;
  margin: 20px auto;
}
.search {
  max-width: 900px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e8eaf6;
  ::placeholder {
    color: black;
  }
  .name {
    max-width: 300px;
    margin: 0 20px;
  }
  select {
    max-width: 200px;
    display: block;
    border-color: #e8eaf6;
  }
}
.salarySort {
  display: flex;
  align-items: center;
  input {
    max-width: 100px;
    margin: 0 10px;
  }
}
</style>