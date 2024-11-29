<template>
  <div id="app">
    <!-- You can add a header or navigation bar here -->
    <header>
      <h1>Contact Book</h1>
      <nav>
        <router-link to="/">Home</router-link> | 
        <router-link to="/add">Add New Contact</router-link>
      </nav>
    </header>

    <!-- This is where the routed views will be displayed -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
/* Basic global styles for layout */
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 20px;
}

header {
  background-color: #4CAF50;
  padding: 10px;
  color: white;
}

nav {
  margin: 10px 0;
}

nav a {
  text-decoration: none;
  color: white;
  margin: 0 10px;
}

nav a:hover {
  text-decoration: underline;
}

h1 {
  font-size: 2em;
}
</style>
