<template>
  <v-card style="margin-left: 300px; margin-top: 100px">
    <v-card-title>
      Histórico de URLs
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
<script>
import axios from 'axios';
import UrlServices from '../config/UrlServices'
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Id",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Data", value: "created_at" },
        { text: "URL", value: "link" },
        { text: " ", value: " " },
      ],
      desserts: []
    };
  },
  async created() {

    // axios
    // .get('http://localhost:8000/api/url')
    // .then((resolve)=>{
    //   console.log(resolve.data)
    // })
    var result = await UrlServices.get()

    for(var i=0; i<result.data.length; i++){
       this.desserts.push(result.data[i])
    }

  },
};
</script>