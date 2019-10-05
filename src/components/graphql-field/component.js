module.exports = class {

    onInput(input, out) {
        try {
            input.field = ({ ui: JSON.parse(input.field.description || ""), ...input.field });
        } catch (e) {
            input.field = { ui: {}, ...input.field };
        }
    }
    data() {
        let v = {};
        v['name'] = this.input.field.name;
        v['type'] = this.input.field.type.name;

        v['value'] = (['Int', 'Float'].includes(this.input.field.type.name)) ? Number(this.getEl('field').value) : this.getEl('field').value;
        return v;
    }
    changed() {
        this.emit('change', this.data());
    }
    keyup() {
        this.emit('keyup', this.data());
    }
}