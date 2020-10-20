<template>
  <div>
    <a class="btn" v-on:click="showHide">+</a>
    <div class="newWorkers">
      <div>
        <form @submit.prevent="newUser">
          <div class="inputRow">
            <div>
              <label for="firstName">Pełne imię i nazwisko</label>
              <input
                placeholder="Imię"
                id="firstName"
                v-model="name"
                type="text"
              />
            </div>
            <div>
              <input
                id="lastName"
                placeholder="Nazwisko"
                v-model="lastName"
                type="text"
              />
            </div>
          </div>
          <div class="inputRow">
            <div>
              <label for="deportament">Dzial i wynagrodzenie</label>
              <input
                placeholder="Dzial"
                id="deportament"
                v-model="deportament"
                type="text"
              />
            </div>
            <div class="salary">
              <input
                placeholder="Wynagrodzenie"
                type="number"
                id="wynagrodzenie"
                v-model="salary"
              />
              <span>PLN</span>
            </div>
          </div>
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Dodać
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import M from "materialize-css";

export default {
  name: "createWorker",
  data() {
    return {
      name: "",
      lastName: "",
      deportament: "",
      salary: 0
    };
  },
  methods: {
    ...mapActions(["addWorkers"]),
    showHide() {
      let creatorBlock = document.querySelector(".newWorkers");
      creatorBlock.classList.toggle("show");
    },
    newUser() {
      const newWorker = {
        dzial: this.deportament,
        imie: this.name,
        nazwisko: this.lastName,
        wynagrodzenieKwota: this.salary,
        wynagrodzenieWaluta: "PLN"
      };
      if (newWorker.imie) {
        this.addWorkers(newWorker);
        M.toast({ html: "Dodano nowego pracownika" });
      } else {
        M.toast({ html: "Nie udało się dodać pracownika" });
      }
      (this.name = ""),
        (this.lastName = ""),
        (this.deportament = ""),
        (this.salary = 0);
      this.showHide();
    }
  }
};
</script>
<style lang='scss' scoped>
.newWorkers {
  background: #e3f2fd;
  opacity: 0;
  visibility: hidden;
  transition: 0.2s opacity, 0.2s visibility, 0.5s margin-bottom;
  margin-bottom: -235px;
  padding-bottom: 20px;
}
.inputRow {
  display: flex;
  align-items: flex-end;
  div {
    margin: 20px;
  }
  .salary {
    display: flex;
    align-items: center;
  }
}
.btn {
  margin-left: 700px;
}
.show {
  height: 100%;
  transition: 1.5s opacity, 1.5s visibility, 0.3s margin-bottom;
  opacity: 1;
  visibility: visible;
  margin-bottom: 0;
}
</style>