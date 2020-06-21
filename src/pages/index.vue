<template>
  <div>
    <div
      class="hero text-center font-semibold flex flex-col justify-center w-full bg-b1"
    >
      <div>
        <h1 class="leading-tight">
          <transition name="fade">
            <p v-if="showPartOne" class="text-b2 text-yellow-600">
              {{ heroPartOneHeaders[heroPartOneHeadersIndex] }}
            </p>
          </transition>
          <p style="color: #ffffffdd;">social share images</p>
        </h1>
      </div>
    </div>
    <div class="container">
      <form
        id="preview-form"
        @click="formIsPristine = false"
        @submit.prevent=""
      >
        <div
          v-for="field in queryStringDataFields"
          :key="field.key"
          :class="`${(field.type === 'color' && 'w-1/2') || 'w-full'}`"
        >
          <label :for="field.key" class="block">
            <span>{{ field.text }}</span>
          </label>
          <VSwatches
            :id="field.key"
            v-if="field.type === 'color'"
            v-model="queryStringData[field.key]"
            show-border
            show-fallback
            fallback-input-type="color"
            @focus="formIsPristine = false"
          />
          <input
            class="form-text-input w-full"
            type="text"
            :id="field.key"
            v-model="queryStringData[field.key]"
            v-else
            @focus="formIsPristine = false"
          />
        </div>
      </form>
      <div class="preview-list flex flex-flow">
        <div>
          <h2>Messenger mobile</h2>
          <MessengerMobilePreview :imageData="queryStringData" />
        </div>
        <div>
          <h2>Whatsapp mobile</h2>
          <WhatsappMobilePreview :imageData="queryStringData" />
        </div>
        <div>
          <h2>Messenger desktop</h2>
          <MessengerDesktopPreview :imageData="queryStringData" />
        </div>
      </div>
      <div class="text-left" style="display: block;">
        <div
          class="border border-gray-600 rounded-lg bg-gray-400 px-2 py-1 mr-2 mt-2"
        >
          <input type="text" readonly :value="url" class="bg-gray-400 w-full" />
          <span class="hidden-url">
            {{ url }}
          </span>
        </div>
        <button
          class="border border-gray-600 rounded-lg bg-gray-300 text-lg px-2 py-1 mt-2"
        >
          COPY
        </button>
      </div>
      <div class="text-left" style="display: block;">
        <pre class="bg-gray-300 pl-2" style="overflow-x: auto;">{{
          metaTagsHtml
        }}</pre>
        <button
          class="border border-gray-600 rounded-lg bg-gray-300 text-lg px-2 py-1 mt-2"
        >
          COPY
        </button>
      </div>
    </div>
    <div class="container section">
      <h2>Why Sharizard?</h2>
      <p>
        We want to make it dead simple to create good social preview images.
        It's often a hassle to create and quality check these images for website
        owners. With Sharizard, you only paste a url to your site and you're
        ready to go viral.
      </p>
    </div>
  </div>
</template>
<script>
import VSwatches from "vue-swatches";
import "vue-swatches/dist/vue-swatches.css";

import { getQueryString, getHtmlMetaTags } from "@/utils";
import MessengerDesktopPreview from "@/components/MessengerDesktopPreview";
import WhatsappMobilePreview from "@/components/WhatsappMobilePreview";
import MessengerMobilePreview from "@/components/MessengerMobilePreview";

const rootUrl = "https://link.sharizard.com/v1/create";

const queryStringDataFields = {
  title: {
    text: "Title",
    key: "title",
  },
  subtitle: {
    text: "Subtitle",
    key: "subtitle",
  },
  color: {
    text: "Text color",
    key: "color",
    type: "color",
  },
  backgroundColor: {
    text: "Background color",
    key: "backgroundColor",
    type: "color",
  },
};

const heroPartOneHeaders = [
  "One line",
  "No hassle",
  "So easy",
  "Url only",
  "Right dimensions",
  "Unique",
  "Text only",
  "For every page",
];

const queryStringDataTemplates = [
  {
    title: "My stunning title",
    subtitle: "and a fine subtitle",
    color: "#111",
    backgroundColor: "#fff",
  },
  {
    title: "My stunning title",
    subtitle: "and a fine subtitle",
    color: "#ce5140",
    backgroundColor: "#0b4252",
  },
  {
    title: "My stunning title",
    subtitle: "and a fine subtitle",
    color: "#000",
    backgroundColor: "gold",
  },
  {
    title: "My stunning title",
    subtitle: "and a fine subtitle",
    color: "#fafafa",
    backgroundColor: "#ee8327",
  },
  {
    title: "My stunning title",
    subtitle: "and a fine subtitle",
    color: "#fafafa",
    backgroundColor: "#000",
  },
];

export default {
  components: {
    VSwatches,
    MessengerDesktopPreview,
    WhatsappMobilePreview,
    MessengerMobilePreview,
  },
  layout: "front-page",
  data() {
    return {
      showPartOne: true,
      formIsPristine: true,
      queryStringDataFields,
      heroPartOneHeaders,
      heroPartOneHeadersIndex: 0,
      queryStringDataTemplatesIndex: 0,
      queryStringData: queryStringDataTemplates[0],
    };
  },
  computed: {
    url() {
      return `${rootUrl}${getQueryString(this.queryStringData)}`;
    },
    metaTagsHtml() {
      return getHtmlMetaTags(this.url);
    },
  },
  methods: {
    transistHeaderPartOne() {
      this.heroPartOneHeadersIndex =
        (this.heroPartOneHeadersIndex + 1) % this.heroPartOneHeaders.length;
      this.showPartOne = false;
      this.$nextTick(() => {
        this.showPartOne = true;
      });
    },
    transistQueryDataTemplates() {
      this.queryStringDataTemplatesIndex =
        (this.queryStringDataTemplatesIndex + 1) %
        queryStringDataTemplates.length;
      this.queryStringData =
        queryStringDataTemplates[this.queryStringDataTemplatesIndex];
    },
  },
  mounted() {
    setInterval(() => {
      this.transistHeaderPartOne();
      if (this.formIsPristine === true) {
        this.transistQueryDataTemplates();
      }
    }, 5555);
  },
  async asyncData({ $content }) {
    const page = await $content("hello").fetch();
    console.log(page);
    return { page };
  },
};
</script>

<style scoped>
.form-text-input {
  @apply border rounded px-2 py-2 text-lg;
}
.container > * {
  @apply my-4 mx-auto flex flex-wrap justify-center;
}
#preview-form {
  @apply rounded-lg bg-white p-4 shadow-lg;
  max-width: 500px;
  justify-content: flex-start !important;
  margin-top: -50px;
}
@media screen and (min-width: 767px) {
  #preview-form {
    margin-top: -75px;
  }
}

.hero {
  height: 300px;
}
.hero h1 {
  font-size: 1.5rem;
}
@media screen and (min-width: 767px) {
  .hero {
    height: 400px;
  }
  .hero h1 {
    font-size: 2.5rem;
  }
}
.hidden-url {
  visibility: hidden;
  display: block;
  height: 0;
}
.preview-list h2 {
  @apply text-xl mb-1 py-1 px-2 bg-b1 text-t1;
  border-radius: 0.5rem;
}
.preview-list {
  width: 640px;
  justify-content: flex-start;
}
.preview-list > * {
  min-width: calc(50% - 1rem);
  @apply mb-4 mx-2;
}
</style>
