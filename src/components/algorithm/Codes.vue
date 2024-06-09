<template>
  <div class="mt-12">
    <h3 class="text-xl font-oswald py-4 mb-6">
      The programming language to implement this algorithm.
    </h3>
    <form class="max-w-sm mx-auto">
      <select
        v-model="selectedLang"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="" disabled selected>Select a Programming Language</option>
        <option value="python_code">Python</option>
        <option value="c_code">C</option>
        <option value="c_sharp_code">C#</option>
        <option value="java_code">Java</option>
      </select>
    </form>
    <pre class="language-{{selectedLang}}" v-if="selectedLang != ''">
      <code>
          {{ codes[selectedLang] || '' }}
      </code>
    </pre>
  </div>
</template>

<script setup>
import 'vue-code-highlight/themes/prism-tomorrow.css'
import 'vue-code-highlight/themes/window.css'
import { ref } from 'vue'

const props = defineProps({
  codes: {
    type: Object,
    required: true
  }
})

const selectedLang = ref('')
const codeSnippets = ref({})
</script>

<style lang="scss" scoped></style>