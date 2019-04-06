module.exports = class {


  toggle_check(event, ele) {
    let form_data = {
      ...this.input.form_data
    };
    form_data['checked'] = ele.checked;
    this.input.form_data = form_data;

    this.emitRowDataUpdate(form_data);
  }
  input_change(event, ele) {
    let form_data = {
      ...this.input.form_data
    };
    form_data[ele.name] = ele.value;
    this.input.form_data = form_data;
    this.emitRowDataUpdate(form_data);
  }

  emitRowDataUpdate(form_data) {
    this.emit('row_data_update', form_data, this.getEl('checkbox').getAttribute('data-row-no'));

  }


}
