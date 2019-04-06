// Compiled using marko@4.16.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/chitty-web$1.0.0/src/components/a-rel/component-browser",
    marko_component = require("./component"),
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_dynamicTag = marko_helpers.d,
    marko_classAttr = marko_helpers.ca,
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<a" +
    marko_classAttr("" + input.class) +
    marko_attr("href", "" + input.href) +
    ">");

  if (typeof input.content === "string") {
    out.w(marko_escapeXml(input.content));
  } else {
    marko_dynamicTag(out, input.content, {}, null, null, __component, "1");
  }

  out.w("</a>");
}

marko_template._ = marko_renderer(render, {
    ah_: true,
    _l_: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/chitty-web$1.0.0/src/components/a-rel/component-browser",
    component: "./component-browser",
    deps: [
      "marko/dist/components"
    ]
  };
