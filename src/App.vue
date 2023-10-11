<template>
  <VueCalendarCustom ref="Calendar" :markDateMore="arr" :markDate="arr2" v-on:isToday="clickToday" agoDayHide="1530115221"
    v-on:choseDay="clickDay" v-on:changeMonth="changeDate"></VueCalendarCustom>
</template>

<script>
import VueCalendarCustom from '../node_modules/vue-calendar-custom/VueCalendarCustom.common';


export default {
  name: 'App',
  data() {
    return {
      // arr2: ['2018/6/23'],
      arr2: [],
      arr: [
        {
          date: "2018/8/1",
          className: "mark1"
        },
        {
          date: "2018/8/13",
          className: "mark2"
        }
      ]
    };
  },
  components: {
    VueCalendarCustom
  },
  methods: {

    demo() {
      this.$refs.Calendar.ChoseMonth("2018-12-13");
    }
  },
  created() {
    function format(date, index) {
      date = new Date(date);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${index}`;
    }
    setTimeout(() => {
      this.arr = [
        {
          date: format(new Date(), 3),
          className: "mark1"
        },
        {
          date: format(new Date(), 12),
          className: "mark2"
        }
      ];
      this.arr.push({
        date: format(new Date(), 15),
        className: "mark1"
      });
    }, 300);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
