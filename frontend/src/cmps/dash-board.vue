<template>
  <section v-if="loggedInUser" class="dashboard">
    <div class="dashboard-image-container" v-if="this.loggedInUser">
      <img :src="this.loggedInUser.photos[0].url" alt="dash-avatar" class="dash-avatar" />
    </div>
    <div class="dash-stats">
      <p>{{this.fullName}}</p>
      <!-- <p>menFollowers:{{this.loggedInUser.menFollowers}}</p>
      <p>menFollowers{{this.loggedInUser.womenFollowers}}</p>-->
    </div>
    <div v-if="loggedInUser" class="dashboard-socials-info">
      <ul class="social-info clean-list" v-for="(social, idx) in loggedInUser.socials" :key="idx">
        <li><span :class="`fa fa-${social.type}`"></span>men:{{social.menFollowers}}</li>
        <li><span :class="`fa fa-${social.type}`"></span>women{{social.womenFollowers}}</li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: "dash-board",
  data() {
    return {
      loggedInUser: null
    };
  },
  created() {
    this.getLoggetInUser();
  },
  computed: {
    fullName() {
      return this.loggedInUser.firstName + " " + this.loggedInUser.lastName;
    },
    dateOfBirth() {
      return this.loggedInUser.dateOfBirth;
    },
    // userImg() {
    //   return this.loggedInUser.photos[3].url;
    // },
    socials() {
      return this.loggedInUser.socials;
    },
    // menFollowers(){},
    // womenFollowers(){},
    // menFollowers(){},
    // dateOfBirth(){},
    email() {
      return this.loggedInUser.email;
    },
    gender() {
      return this.loggedInUser.gender;
    }
  },
  methods: {
    async getLoggetInUser() {
      this.loggedInUser = this.$store.getters.loggedInUser;
      if (!this.loggedInUser) {
        this.loggedInUser = await this.$store.dispatch("getLoggedInUser");
      }
    }
  },
  components: {
  }
};
</script>

