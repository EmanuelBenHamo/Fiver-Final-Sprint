<template>
  <section class="offer-preview-container">
    <!-- <h1>Offer Preview</h1> -->
    <div class="offers-preview">
      <div class="offer-status-container">
        <label class="offer-status" v-bind:class="{ selected: pending }">
          Pending
          <input name="state" type="radio" value="pending" />
        </label>
        <label class="offer-status" v-bind:class="{ selected: inProgress}">
          In progress
          <input name="state" type="radio" value="In progress" />
        </label>
        <label class="offer-status" v-bind:class="{ selected: completed }">
          Completed
          <input name="state" type="radio" value="completed" />
        </label>
      </div>
    </div>
  </section>
</template>

<script>
import { eventBus } from "../services/event.bus.service.js";
export default {
  props: ["offer"],
  data() {
    return {
      inProgress: false,
      pending: false,
      completed: false
    };
  },
  created() {
    this.setStatus(this.offer.status);
  },
  methods: {
    // statusChange(status) {
    //   eventBus.$emit("offerStatusChange", {
    //     status: status,
    //     id: this.offer._id
    //   });
    //   this.setStatus(status);
    // },
    setStatus(status) {
      if (status === "in progress") {
        this.inProgress = !this.inProgress;
        this.pending = false;
        this.completed = false;
      } else if (status == "pending") {
        this.pending = !this.pending;
        this.completed = false;
        this.inProgress = false;
      } else if (status === "completed") {
        this.completed = !this.completed;
        this.pending = false;
        this.inProgress = false;
      }
    }
  }
};
</script>