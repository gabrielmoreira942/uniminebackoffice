<template>
  <div style="margin-left: 300px; margin-top: 100px">
    <apexchart
      width="500"
      :type="type"
      :options="options"
      :series="series"
    ></apexchart>
    <v-col cols="3">
      <v-select
        :items="items"
        v-model="value"
        label="Gráficos"
        @change="graphics(value)"
        prepend-icon="mdi-chart-areaspline"
        clearable
      ></v-select>
    </v-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {},
      series: [],
      type: "",
      items: ["Gráfico de Linha", "Gráfico de Donut", "Gráfico de Pizza"],
      value: ["Gráfico de Linha", "Gráfico de Donut", "Gráfico de Pizza"],
    };
  },
  methods: {
    graphics(change) {
      switch (change) {
        case "Gráfico de Linha":
          this.type = "line";
          this.series = [
            {
              name: "line",
              data: [30, 40, 45, 50, 49, 60, 70, 91],
            },
          ];
          this.options = {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          };
          break;
        case "Gráfico de Donut":
          this.type = "donut";
          this.series = [44, 55, 13, 43, 22];
          this.options = {
            labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
          };
          break;
        case "Gráfico de Pizza":
          this.type = "pie";
          this.series = [44, 55, 13, 43, 22];
          this.options = {
            labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
          };
          break;
      }
    },
  },
  created() {
    this.type = "line";
    this.series = [
      {
        name: "line",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ];
    this.options = {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    };
  },
};
</script>