import fileTypeSrc from "./FileTypeSrc";
import colorTheme from "./Theme";
import { Chrome } from "vue-color";

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
    themes: Object.keys(colorTheme),
    selectedLang: "javascript",
    selectedTheme: "default",
    colorSetting: {},
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
          hex: this.colorSetting.preCodeBgcolor.hex,
          prop: "backgroundColor"
        },
        {
          name: ".entry-content pre.code",
          hex: this.colorSetting.preCodeColor.hex,
          prop: "color"
        },
        {
          name: ".synComment",
          hex: this.colorSetting.synCommentColor.hex,
          prop: "color"
        },
        {
          name: ".synConstant",
          hex: this.colorSetting.synConstantColor.hex,
          prop: "color"
        },
        {
          name: ".synIdentifier",
          hex: this.colorSetting.synIdentifierColor.hex,
          prop: "color"
        },
        {
          name: ".synPreProc",
          hex: this.colorSetting.synPreProcColor.hex,
          prop: "color"
        },
        {
          name: ".synSpecial",
          hex: this.colorSetting.synSpecialColor.hex,
          prop: "color"
        },
        {
          name: ".synStatement",
          hex: this.colorSetting.synStatementColor.hex,
          prop: "color"
        },
        {
          name: ".synType",
          hex: this.colorSetting.synTypeColor.hex,
          prop: "color"
        }
      ];
    },
    cssForHighlight: function() {
      return `.entry-content pre.code {
    background-color: ${this.colorSetting.preCodeBgcolor.hex};
    color: ${this.colorSetting.preCodeColor.hex};
}
.synComment { color: ${this.colorSetting.synCommentColor.hex}; }
.synConstant { color: ${this.colorSetting.synConstantColor.hex}; }
.synIdentifier { color: ${this.colorSetting.synIdentifierColor.hex}; }
.synPreProc { color: ${this.colorSetting.synPreProcColor.hex}; }
.synSpecial { color: ${this.colorSetting.synSpecialColor.hex}; }
.synStatement { color: ${this.colorSetting.synStatementColor.hex}; }
.synType { color: ${this.colorSetting.synTypeColor.hex}; }`;
    }
  },
  watch: {
    selectedTheme: {
      handler: function(val, oldVal) {
        const newSetting = colorTheme[val];
        if (!newSetting) {
          newSetting = colorTheme["default"];
        }
        this.colorSetting = Object.assign({}, newSetting);
      },
      immediate: true
    },
    "colorSetting.preCodeBgcolor.hex": {
      handler: function(val, oldVal) {
        updateCss(".entry-content", "backgroundColor", val);
      },
      immediate: true
    },
    "colorSetting.preCodeColor.hex": {
      handler: function(val, oldVal) {
        updateCss("pre.code", "color", val);
      },
      immediate: true
    },
    "colorSetting.synCommentColor.hex": {
      handler: function(val, oldVal) {
        updateCss(".synComment", "color", val);
      },
      immediate: true
    },
    "colorSetting.synConstantColor.hex": {
      handler: function(val, oldVal) {
        updateCss(".synConstant", "color", val);
      },
      immediate: true
    },
    "colorSetting.synIdentifierColor.hex": {
      handler: function(val, oldVal) {
        updateCss(".synIdentifier", "color", val);
      },
      immediate: true
    },
    "colorSetting.synPreProcColor.hex": {
      handler: function(val, oldVal) {
        updateCss(".synPreProc", "color", val);
      },
      immediate: true
    },
    "colorSetting.synSpecialColor.hex": {
      handler: function(val, oldVal) {
        updateCss(".synSpecial", "color", val);
      },
      immediate: true
    },
    "colorSetting.synStatementColor.hex": {
      handler: function(val, oldVal) {
        updateCss(".synStatement", "color", val);
      },
      immediate: true
    },
    "colorSetting.synTypeColor.hex": {
      handler: function(val, oldVal) {
        updateCss(".synType", "color", val);
      },
      immediate: true
    }
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const elems = document.querySelectorAll(".modal");
  const instances = M.Modal.init(elems, {});
});
