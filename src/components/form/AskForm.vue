<template>
  <div class="absolute bg-black/40 top-0 left-0 w-full h-screen">
    <div
      class="
        mx-auto
        mt-20
        w-5/6
        md:w-3/4
        bg-white
        rounded-lg
        shadow shadow-grey-300
        p-4
      "
    >
      <h3 class="text-center text-2xl mt-3 mb-5">Get {{ this.type }} Advice</h3>
      <p class="font-bold mb-3">Ask your question below:</p>
      <div>
        <textarea
          v-model="form.question"
          name=""
          id=""
          cols="30"
          rows="10"
          class="
            bg-slate-100
            w-full
            border border-bottom-2
            rounded-lg
            focus:outline focus:outline-sky-500
            p-4
          "
        ></textarea>
        <Transition>
          <small v-if="!form.question && errorMessage" class="text-red-500">
            {{ errorMessage }}
          </small>
        </Transition>
      </div>
      <div class="flex justify-between sm:justify-end mt-3">
        <div class="sm:mr-3">
          <button
            @click.prevent="resetForm"
            class="px-2 py-2 rounded-lg bg-slate-400 text-white w-24"
          >
            Cancel
          </button>
        </div>
        <div>
          <button
            @click.prevent="ask"
            class="px-2 py-2 rounded-lg bg-sky-500 text-white w-24"
          >
            Ask
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AskForm",
  props: {
    type: {
      type: String,
      default: "food",
    },
    link: {
      type: String,
      default: "#",
    },
  },
  data: () => ({
    form: {
      question: "",
    },
    errorMessage: "",
  }),
  computed: {
    url() {
      return this.type ==='food'
        ? process.env.VUE_APP_NUTRITION_URL
        : process.env.VUE_APP_FITNESS_URL
    }
  },
  methods: {
    async ask() {
      this.$emit("loading", true);

      if (!this.form.question) {
        this.$emit("loading", false);
        this.errorMessage = "Please provide a question.";
        return;
      }
      if (this.url && this.form.question) {
        const headers = {
          'Authorization': null,
          'Content-Type': 'application/json'
        }
        const { data } = await axios.post(this.url, {
          prompt: this.form.question,
          key: process.env.VUE_APP_GCP_API
        }, headers);
        if (!data) {
          console.error("Error retrieving answer...");
          this.errorMessage =
            "Oops! There was an error. Try rephrasing your question";
        }
        this.$emit("storeAnswer", {
          payload: {
            question: this.question,
            answer: data.answer,
          },
        });
        return;
      }
      if (this.form.question) {
        setTimeout(() => {
          this.$emit("storeAnswer", {
            payload: {
              question: this.question,
              answer: "example response",
            },
          });
        }, 1500);
      }
    },
    resetForm() {
      this.$emit("resetForm");
    },
  },
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.35s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
