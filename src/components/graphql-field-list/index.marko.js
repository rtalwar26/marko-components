// Compiled using marko@4.16.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/chitty-web$1.0.0/src/components/graphql-field-list/index.marko",
    marko_component = require("./component"),
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_loadTemplate = require("marko/dist/runtime/helper-loadTemplate"),
    graphql_field_template = marko_loadTemplate(require.resolve("../graphql-field")),
    marko_loadTag = marko_helpers.t,
    graphql_field_tag = marko_loadTag(graphql_field_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<ul class=\"row\">");

  var for__1 = 0;

  marko_forEach(input.fields, function(field) {
    var keyscope__2 = "[" + ((for__1++) + "]");

    out.w("<li class=\"col-100 tablet-auto item-content item-input\"><div class=\"item-media\"><i class=\"icon demo-list-icon\"></i></div><div class=\"item-inner\"><div class=\"item-title item-floating-label\">" +
      marko_escapeXml(field.name) +
      "</div>");

    graphql_field_tag({
        class: "item-input-wrap padding-top",
        field: field
      }, out, __component, "fields[]");

    out.w("</div></li>");
  });

  out.w("</ul>");
}

marko_template._ = marko_renderer(render, {
    _l_: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/chitty-web$1.0.0/src/components/graphql-field-list/index.marko",
    component: "./",
    tags: [
      "../graphql-field"
    ]
  };
