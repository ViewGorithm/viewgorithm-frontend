<template>
  <div class="mt-12">
    <h3 class="text-xl font-oswald py-4 mb-6">The programming language to implement this algorithm.</h3>
    <form class="max-w-sm mx-auto">
      <select v-model="selectedLang"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="" disabled selected>Select a Programming Language</option>
        <option value="python">Python</option>
        <option value="c">C</option>
        <option value="csharp">C#</option>
        <option value="java">Java</option>
      </select>
    </form>
    <pre class="language-{{selectedLang}}" v-if="selectedLang!=''">
      <code>
          {{ codeSnippets[selectedLang] || '' }}
      </code>
    </pre>
  </div>
</template>

<script>
import "vue-code-highlight/themes/prism-tomorrow.css";
import "vue-code-highlight/themes/window.css";
import { ref } from 'vue'
import { component as VueCodeHighlight } from 'vue-code-highlight';

export default {
  setup() {
    const selectedLang = ref('')
    const codeSnippets = {
      python: "print('Hello, Python!')",
      c: "#include <stdio.h>\n\nint main() {\n    printf(\"Hello, C!\");\n    return 0;\n}",
      csharp: "using System;\n\npublic class Program {\n    public static void Main() {\n        Console.WriteLine(\"Hello, C#!\");\n    }\n}",
      java: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}"
    }

    return {
      selectedLang,
      codeSnippets,
      VueCodeHighlight
    }
  }
}
</script>

<style lang="scss" scoped></style>