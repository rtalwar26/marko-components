// Compiled using marko@4.16.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/chitty-web$1.0.0/src/components/multi-row-form/components/item-row/index.marko",
    marko_component = require("./component"),
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_attr = marko_helpers.a,
    marko_forEach = marko_helpers.f;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<tr><td class=\"checkbox-cell\"><label class=\"checkbox\"><input type=\"checkbox\"" +
    marko_attr("checked", input.form_data.checked) +
    marko_attr("data-row-no", "" + input.rowNo) +
    "><i class=\"icon-checkbox\"></i></label></td>");

  var for__4 = 0;

  marko_forEach(input.fields, function(field) {
    var keyscope__5 = "[" + ((for__4++) + "]");

    out.w("<td class=\"label-cell item-input\"><div class=\"item-inner\"><div class=\"item-input-wrap\"><input" +
      marko_attr("value", "" + (input.form_data[field.name] || "")) +
      marko_attr("type", "" + field.type) +
      marko_attr("placeholder", "" + field.name) +
      marko_attr("name", "" + field.name) +
      " required validate><span class=\"input-clear-button\"></span></div></div></td>");
  });

  out.w("</tr>");
}

marko_template._ = marko_renderer(render, {
    _l_: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/chitty-web$1.0.0/src/components/multi-row-form/components/item-row/index.marko",
    component: "./"
  };
