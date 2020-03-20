import Vue from "vue";
// import moment from 'moment';

Vue.filter("date", timestamp => {
  var a = new Date(timestamp * 1000);
  var months = [
    "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = month + " " + date + " " + year;
  return time;
});

Vue.filter("currency", num => {
  return num.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0});
});
