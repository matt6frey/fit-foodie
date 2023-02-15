<template>
  <div>
    <container>
      <template #title>
        <h3 class="text-2xl mb-5">Dashboard</h3>
      </template>
      <template #content>
        <div>
          <p>Let's get started! {{ welcome }}</p>
        </div>
        <div class="flex justify-between sm:justify-end mt-10">
          <div class="sm:mr-3">
            <button
              @click.prevent="() => ask('Fitness')"
              class="px-2 py-2 rounded-lg bg-sky-500 text-white"
            >
              Get Fitness Advice
            </button>
          </div>
          <div>
            <button
              @click.prevent="() => ask('Nutrition')"
              class="px-2 py-2 rounded-lg bg-green-500 text-white"
            >
              Get Food & Nutrition Advice
            </button>
          </div>
        </div>
      </template>
    </container>

    <!-- Ask Form Modal -->
    <Transition>
      <ask-form
        :type="type"
        v-if="showAskForm"
        @storeAnswer="storeAnswer"
        @resetForm="resetForm"
        @loading="loading"
      />
    </Transition>

    <!-- Loading -->
    <Transition>
      <div
        class="
          absolute
          bg-black/60
          top-0
          left-0
          w-full
          h-screen
          flex
          justify-center
          place-items-center
        "
        v-if="showLoading"
      >
        <p class="animate-pulse text-white text-2xl text-shadow-md">
          <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
          Loading
        </p>
      </div>
    </Transition>
  </div>
</template>

<script>
import Container from "@/components/Container.vue";
import AskForm from "@/components/form/AskForm.vue";

export default {
  name: "Dashboard",
  components: {
    Container,
    AskForm,
  },
  data: () => ({
    welcomeMessageDefault:
      "You haven't asked any questions regarding fitness or nutrition. How can we help you today?",
    welcomeMessageContent:
      "Check out your previous questions below, or ask for more advice to help you improve and reach your goals! How can we help you today?",
    questions: {
      fitness: [],
      nutrition: [],
    },
    type: "",
    showAskForm: false,
    showLoading: false,
  }),
  methods: {
    ask(type) {
      this.type = type;
      this.showAskForm = true;
    },
    storeAnswer(payload) {
      this.questions[this.type.toLowerCase()].push({
        question: payload.question,
        answer: payload.answer,
      });
      this.resetForm();
      this.loading(false);
    },
    loading(value) {
      this.showLoading = value;
    },
    resetForm() {
      (this.type = ""), (this.showAskForm = false);
    },
  },
  computed: {
    welcome() {
      if (!this.questions.fitness.length || !this.questions.nutrition.length) {
        return this.welcomeMessageDefault;
      }
      return this.welcomeMessageContent;
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
