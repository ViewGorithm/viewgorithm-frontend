<template>
  <div>
    <select v-model="selectedLang">
      <option value="">언어 선택</option>
      <option value="python">Python</option>
      <option value="c">C</option>
      <option value="csharp">C#</option>
      <option value="java">Java</option>
    </select>
    <pre>{{ codeSnippets[selectedLang] || '' }}</pre>
  </div>
</template>

<script>
import { ref } from 'vue'

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
      codeSnippets
    }
  }
}
</script>