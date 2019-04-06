// Compiled using marko@4.16.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/chitty-web$1.0.0/src/components/graphql-form/index.marko",
    marko_component = require("./component"),
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTemplate = require("marko/dist/runtime/helper-loadTemplate"),
    graphql_field_list_template = marko_loadTemplate(require.resolve("../graphql-field-list")),
    marko_loadTag = marko_helpers.t,
    graphql_field_list_tag = marko_loadTag(graphql_field_list_template),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div" +
    marko_attr("id", "" + input.id) +
    " class=\"card-content  card-content-padding\"><div class=\"block-title\">" +
    marko_escapeXml(input.title || "New Item") +
    "</div><div class=\"list no-hairlines-md\"><form class=\"list no-hairlines-md\">");

  graphql_field_list_tag({
      fields: input.fields
    }, out, __component, "3");

  out.w("</form><div class=\"block block-strong row\"><div class=\"col\"><a class=\"button\" href=\"#\">Submit</a></div></div></div></div>");
}

marko_template._ = marko_renderer(render, {
    _l_: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/chitty-web$1.0.0/src/components/graphql-form/index.marko",
    component: "./",
    tags: [
      "../graphql-field-list"
    ]
  };
