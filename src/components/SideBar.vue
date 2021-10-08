<template>
  <v-card  height="1000" width="256">
    <v-navigation-drawer fixed v-model="drawer" color="gray" permanent style="margin-top:65px">
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="..\assets\robo.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-title>Unimine</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
          @click="menu(item)"
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "URLs", icon: "mdi-link" },
      ],
      mini: true,
      dashboard: false,
    };
  },
  methods: {
    menu(event) {
      if (event.title === "Dashboard") {
        this.$router.push("dashboard");
      } else if (event.title === "URLs") {
        this.$router.push("url");
      }
    },
  },
};
</script>

<style>
  .menu{
    position: fixed;
  }
</style>