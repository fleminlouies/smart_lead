module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-recommended"],
  rules: {
    "vue/html-self-closing": "off",
    "vue/multi-word-component-names": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/html-indent": "off",
    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": "off"
  }
}
