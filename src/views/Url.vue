<template>
  <div style="margin-left: 300px; margin-top: 100px">
    <v-toolbar flat>
      <v-toolbar-title>Historico de URLs</v-toolbar-title>
    </v-toolbar>
     <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey red--text lighten-2">
          Atenção!
        </v-card-title>
        <v-card-text class="mt-2">
          <strong><h3> Tem certeza que deseja excluir essa URL?</h3></strong>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            text
            @click="dialog = false"
          >
            NÃO
          </v-btn>
        

          <v-btn
            color="green"
            text
            @click="dialog = false"
          >
            SIM
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <a 
          @click="deleteUrl(item.id)">
          <v-icon>mdi-delete</v-icon>
        </a>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import axios from "axios";
import UrlServices from "../config/UrlServices";
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
        { text: "URL", value: "urlCurta" },
        { text: "", value: "icon" },
        { text: "", value: "actions" },
      ],
      desserts: [],
      dialog: false,
    };
  },
  async created() {
    // axios
    // .get('http://localhost:8000/api/url')
    // .then((resolve)=>{
    //   console.log(resolve.data)
    // })
    var result = await UrlServices.get();
    for (var i = 0; i < result.data.length; i++) {
      var encurtar = {
        urlCurta: `http://unimine.com.br/${result.data[i].hash}`,
        created_at: result.data[i].created_at,
        id: result.data[i].id,
      };
      this.desserts.push(encurtar);
    }
  },

  methods: {

    async deleteUrl(id) {
        this.dialog = true
        await UrlServices.delete(id);
        const deletedElement = this.desserts.find((item) => item.id === id);
        this.desserts.splice(this.desserts.indexOf(deletedElement), 1);
    },
  },
    
};
</script>