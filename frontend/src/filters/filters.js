import Vue from "vue";
// import moment from 'moment';

Vue.filter("date", timestamp => {
  var a = new Date(timestamp * 1000);
  var months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = month + " " + date + " " + year;
  return time;
});

Vue.filter("currency", num => {
  return num.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 });
});

Vue.filter("followersCount", followersCount => {
  let count = Math.floor(followersCount / 1000);
  if (count < 1000) {
    return `${count}k`;
  } else {
    count /= 1000;
    if (count > 1) {
      count = Number.parseFloat(count).toFixed(1);
    } else {
      count = Math.floor(count);
    }
    return `${count}m`;
  }
})

Vue.filter("number", number => {
  return new Intl.NumberFormat('en-IN').format(number);
})
