module.exports = class {

    onInput(input, out) {
        input.field = ({ ui: JSON.parse(input.field.description || ""), ...input.field });
    }
    data() {
        let v = {};
        v['name'] = this.input.field.name;
        v['type'] = this.input.field.type.name;

        v['value'] = (this.input.field.type.name === 'Int') ? Number(this.getEl('field').value) : this.getEl('field').value;
        return v;
    }
}