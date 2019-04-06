// Compiled using marko@4.16.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/chitty-web$1.0.0/src/components/app-demo-window/index.marko",
    marko_component = require("./component"),
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/dist/runtime/helper-loadTemplate"),
    spinner_template = marko_loadTemplate(require.resolve("./components/spinner")),
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    spinner_tag = marko_loadTag(spinner_template),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"inner\">");

  if (state.show_spinner) {
    spinner_tag({}, out, __component, "1");
  }

  out.w("<iframe scrolling=\"on\"" +
    marko_attr("src", "" + input.url) +
    marko_attr("width", "" + state.width) +
    marko_attr("height", "" + state.height) +
    " frameborder=\"0\"></iframe></div>");
}

marko_template._ = marko_renderer(render, {
    _l_: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      "./style.css"
    ],
    id: "/chitty-web$1.0.0/src/components/app-demo-window/index.marko",
    component: "./",
    tags: [
      "./components/spinner"
    ]
  };
