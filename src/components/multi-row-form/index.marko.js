// Compiled using marko@4.16.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/chitty-web$1.0.0/src/components/multi-row-form/index.marko",
    marko_component = require("./component"),
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_loadTemplate = require("marko/dist/runtime/helper-loadTemplate"),
    item_row_template = marko_loadTemplate(require.resolve("./components/item-row")),
    marko_loadTag = marko_helpers.t,
    item_row_tag = marko_loadTag(item_row_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<li class=\"col-100 tablet-100 desktop-100 item-content item-input\"><div class=\"data-table data-table-init data-table-collapsible card\"><div class=\"card-content\"><form><table><thead><tr><th class=\"checkbox-cell\"><label class=\"checkbox\"><input type=\"checkbox\"><i class=\"icon-checkbox\"></i></label></th>");

  var for__10 = 0;

  marko_forEach(input.fields, function(field) {
    var keyscope__11 = "[" + ((for__10++) + "]");

    out.w("<th class=\"label-cell\">" +
      marko_escapeXml(field.name) +
      "</th>");
  });

  out.w("</tr></thead><tbody>");

  marko_forEach(state.rows_data, function(row, index) {
    item_row_tag({
        fields: input.fields,
        form_data: row.form_data,
        rowNo: index
      }, out, __component, index, [
      [
        "toggle_check",
        "row_toggle_select",
        false
      ],
      [
        "row_data_update",
        "row_data_update",
        false
      ]
    ]);
  });

  out.w("</tbody></table></form></div><div class=\" card-footer\"><div class=\"data-table-links\"><a class=\"link\">Add</a><a class=\"link\">Remove</a></div></div></div></li>");
}

marko_template._ = marko_renderer(render, {
    _l_: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/chitty-web$1.0.0/src/components/multi-row-form/index.marko",
    component: "./",
    tags: [
      "./components/item-row"
    ]
  };
