<template>
  <section v-if="loggedInUser" class="dashboard">
    <div class="dashboard-image-container" v-if="this.loggedInUser">
      <img :src="this.loggedInUser.profilePhoto.regular" alt="dash-avatar" class="dash-avatar" />
    </div>
    <div v-if="loggedInUser" class="dashboard-socials-info">
      <h1>{{this.fullName}}</h1>
      <ul class="clean-list" v-for="(social, idx) in loggedInUser.socials" :key="idx">
        <li>
          <span>{{social.type}} followers:</span>
          {{social.menFollowers + social.womenFollowers}}
        </li>
      </ul>
      <div class="dash-stats">
        <ul class="clean-list tags">
          <li class="influencer-tag" v-for="(tag, idx) in loggedInUser.tags" :key="idx">{{tag}}</li>
        </ul>
      </div>
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
  components: {}
};
</script>

