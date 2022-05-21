<script setup>
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <h3>Vue Exercises</h3>
    <div class="wrapper">
      <router-link to="/">Go back to Exercise List</router-link>
    </div>
  </header>

  <main>
   <router-view />
  </main>
</template>

<style>
#app {
  width: 100%;
  /* margin: 0 auto;
  padding: 2rem; */

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
    margin: 0px;
  }

  header {
    width: 100%;
    background-color: #000000ed;
    display: inline-flex;
  }

  header h3 {
    color: white;
    flex-grow: 2;
    text-align: center;
    font-size: 43px;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    padding: 20px;
  }

  .logo {
    margin: 0 2rem 0 0;
    padding: 20px;
  }

  main {
    padding: 15px;
  }
}
</style>
