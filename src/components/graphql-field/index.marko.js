// Compiled using marko@4.16.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/chitty-web$1.0.0/src/components/graphql-field/index.marko",
    marko_component = require("./component"),
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_attr = marko_helpers.a,
    marko_classAttr = marko_helpers.ca;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div" +
    marko_classAttr("" + input.class) +
    ">");

  const typeMap = {'String':'text','Int':'number'};

  out.w("<input" +
    marko_attr("type", "" + (typeMap[input.field.type.name] || "text")) +
    marko_attr("name", "" + input.field.name) +
    marko_attr("placeholder", "" + (input.field.ui.placeholder || "")) +
    marko_attr("value", "" + (input.field.defaultValue || "")) +
    "><span class=\"input-clear-button\"></span></div>");
}

marko_template._ = marko_renderer(render, {
    _l_: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/chitty-web$1.0.0/src/components/graphql-field/index.marko",
    component: "./"
  };
