<template>
  <div class="home z-depth-1">
    <h1>Witam!</h1>
    <p>
      Ta aplikacja wyświetla tabelę pracowników firmy, działów i poziomów
      wynagrodzeń. Możliwość sortowania i dodawania nowych pracowników do tabeli
    </p>
    <router-link to="/workersList" class="link waves-effect waves-light btn"
      >Przejdź do listy pracowników</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
<style lang="scss" scope>
.home {
  h1 {
    font-size: 34px;
    padding-top: 80px;
  }
  p {
    font-size: 18px;
    margin: 50px 100px;
  }
}
.link {
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 10px;
}
</style>