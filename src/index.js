import fileTypeSrc from "./FileTypeSrc";
import { Chrome } from "vue-color";

function isValidHex(s) {
  return true;
  return /^#(?=[0-9A-F]*$)(?:.{3}|.{6})$/i.test(s);
}

function updateCss(targetClass, prop, val) {
  [].slice.call(document.styleSheets[0].cssRules).some(cssRule => {
    if (cssRule.selectorText === targetClass) {
      cssRule.style[prop] = val;
      return true;
    }
    return false;
  });
}

const app = new Vue({
  components: {
    "color-picker": Chrome
  },
  el: "#app",
  data: {
    langs: Object.keys(fileTypeSrc),
    selectedLang: "javascript",
    preCodeBgcolor: { hex: "#282a36" },
    preCodeColor: { hex: "#ffffff" },
    synCommentColor: { hex: "#bfbfbf" },
    synConstantColor: { hex: "#c5ff9a" },
    synIdentifierColor: { hex: "#ff7171" },
    synPreProcColor: { hex: "#a0f9ff" },
    synSpecialColor: { hex: "#ff79c6" },
    synStatementColor: { hex: "#a0f9ff" },
    synTypeColor: { hex: "#ff79c6" },
    visibleColorPicker: 1
  },
  methods: {
    copyCSS: function() {
      document.getElementById("cssForHighlight").select();
      document.execCommand("copy");
    }
  },
  computed: {
    srcHtml: function() {
      return fileTypeSrc[this.selectedLang];
    },
    colorSettings: function() {
      return [
        {
          name: ".entry-content pre.code",
          hex: this.preCodeBgcolor.hex,
          prop: "backgroundColor"
        },
        {
          name: ".entry-content pre.code",
          hex: this.preCodeColor.hex,
          prop: "color"
        },
        {
          name: ".synComment",
          hex: this.synCommentColor.hex,
          prop: "color"
        },
        {
          name: ".synConstant",
          hex: this.synConstantColor.hex,
          prop: "color"
        },
        {
          name: ".synIdentifier",
          hex: this.synIdentifierColor.hex,
          prop: "color"
        },
        {
          name: ".synPreProc",
          hex: this.synPreProcColor.hex,
          prop: "color"
        },
        {
          name: ".synSpecial",
          hex: this.synSpecialColor.hex,
          prop: "color"
        },
        {
          name: ".synStatement",
          hex: this.synStatementColor.hex,
          prop: "color"
        },
        {
          name: ".synType",
          hex: this.synTypeColor.hex,
          prop: "color"
        }
      ];
    },
    cssForHighlight: function() {
      return `.entry-content pre.code {
    background-color: ${this.preCodeBgcolor.hex};
    color: ${this.preCodeColor.hex};
}
.synComment { color: ${this.synCommentColor.hex}; }
.synConstant { color: ${this.synConstantColor.hex}; }
.synIdentifier { color: ${this.synIdentifierColor.hex}; }
.synPreProc { color: ${this.synPreProcColor.hex}; }
.synSpecial { color: ${this.synSpecialColor.hex}; }
.synStatement { color: ${this.synStatementColor.hex}; }
.synType { color: ${this.synTypeColor.hex}; }`;
    }
  },
  watch: {
    "preCodeBgcolor.hex": {
      handler: function(val, oldVal) {
        if (isValidHex(val)) {
          updateCss(".entry-content", "backgroundColor", val);
        }
      },
      immediate: true
    },
    "preCodeColor.hex": {
      handler: function(val, oldVal) {
        if (isValidHex(val)) {
          updateCss("pre.code", "color", val);
        }
      },
      immediate: true
    },
    "synCommentColor.hex": {
      handler: function(val, oldVal) {
        if (isValidHex(val)) {
          updateCss(".synComment", "color", val);
        }
      },
      immediate: true
    },
    "synConstantColor.hex": {
      handler: function(val, oldVal) {
        if (isValidHex(val)) {
          updateCss(".synConstant", "color", val);
        }
      },
      immediate: true
    },
    "synIdentifierColor.hex": {
      handler: function(val, oldVal) {
        if (isValidHex(val)) {
          updateCss(".synIdentifier", "color", val);
        }
      },
      immediate: true
    },
    "synPreProcColor.hex": {
      handler: function(val, oldVal) {
        if (isValidHex(val)) {
          updateCss(".synPreProc", "color", val);
        }
      },
      immediate: true
    },
    "synSpecialColor.hex": {
      handler: function(val, oldVal) {
        if (isValidHex(val)) {
          updateCss(".synSpecial", "color", val);
        }
      },
      immediate: true
    },
    "synStatementColor.hex": {
      handler: function(val, oldVal) {
        if (isValidHex(val)) {
          updateCss(".synStatement", "color", val);
        }
      },
      immediate: true
    },
    "synTypeColor.hex": {
      handler: function(val, oldVal) {
        if (isValidHex(val)) {
          updateCss(".synType", "color", val);
        }
      },
      immediate: true
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      // Code that will run only after the
      // entire view has been rendered
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems, {});
});
