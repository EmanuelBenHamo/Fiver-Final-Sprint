<template>
  <section class="dashboard">
    <div v-if=this.loggedInUser>
      <img :src="this.userImg" alt="dash-avatar" class="dash-avatar" />
      <h2>{{this.fullName}}</h2>
      <p>Date Of Birth: {{dateOfBirth | date}}</p>
      <ul class="social-info clean-list" v-for="(social, idx) in loggedInUser.socials" :key="idx">
        <li>
          <span :class="`fa fa-${social.type}`"></span>
          {{social.type}}
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      loggedInUser: null
    };
  },
  created() {
    this.loggedInUser = this.$store.getters.loggedInUser;
  },
  computed: {
    fullName() {
      return this.loggedInUser.firstName + " " + this.loggedInUser.lastName;
    },
    dateOfBirth() {
      return this.loggedInUser.dateOfBirth;
    },
    userImg() {
      return this.loggedInUser.photos[3].url;
    },
    socials() {
      return this.loggedInUser.socials;
    },
    email() {
      return this.loggedInUser.email;
    },
    gender() {
      return this.loggedInUser.gender;
    }
  }
};
</script>

