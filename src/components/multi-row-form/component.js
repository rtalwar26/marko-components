module.exports = class {
  new_row() {
    return {
      form_data: {
        checked: false,
        email: "",

      }
    }
  }
  onInput(input) {
    input.fields = input.fields.split(',').map(field => ({ name: field.split(':')[0], type: field.split(':')[1] }));
    this.state.rows_data = input.row_data && Array.isArray(input.row_data) ? input.row_data.map(r => ({ form_data: r })) : [this.new_row()];
  }
  onUpdate() {
    // window.app && window.app.dataTable && window.app.dataTable.create({ el: this.getEl('data-table') })
  }
  onCreate(input) {
    this.state = {
      rows_data: []
    }
  }

  add_row() {

    this.state.rows_data.push(this.new_row());
    this.setStateDirty('rows_data');
  }
  remove_row() {
    let un_selected_rows = this.state.rows_data.filter(r => !r.form_data.checked);
    this.state.rows_data = un_selected_rows;
  }

  data() {
    return this.state.rows_data.map(r => {
      let form_data = r.form_data;
      let result = {};
      for (let key in form_data) {
        result[key] = form_data[key];
      }
      delete result['CHECKED'];
      return result;
    })
  }

  validateInputs() {
    let form = this.getEl('table-form');
    window.app.input.validateInputs(form)
  }

  row_data_update(data, rowNo) {
    this.state.rows_data[rowNo].form_data = data;
  }
}
