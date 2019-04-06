// Compiled using marko@4.16.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/chitty-web$1.0.0/src/routes/mobile/components/gql-query/index.marko",
    marko_component = require("./component"),
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_dynamicTag = marko_helpers.d;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div>");

  if (state.status == "success") {
    marko_dynamicTag(out, input.then.renderBody, {
        data: state.data
      }, null, null, __component, "1");
  }

  if (state.status == "error") {
    marko_dynamicTag(out, input.catch.renderBody, {
        error: state.error
      }, null, null, __component, "2");
  }

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    _l_: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/chitty-web$1.0.0/src/routes/mobile/components/gql-query/index.marko",
    component: "./"
  };
