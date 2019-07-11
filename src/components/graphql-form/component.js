const { schema_query, mutation_query } = require("./gql_queries");
module.exports = {
    onCreate(input, out) {
    },
    fetch_schema(url, type, subtype) {
        let comps = [type, subtype];
        return comps.length < 2 ? Promise.resolve({}) : fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: schema_query(comps[0]) })
        }).then(r => r.json()).then(json => json.data.__type.fields.filter((f) => f.name === comps[1])[0].args);
    },
    onInput(input, out) {
        // this.setState('url',input.url);
    },
    onMount() {
        this.input.url && this.input.type && this.input.subtype && this.renderForm();
    },
    renderForm() {
        this.fetch_schema(this.input.url, this.input.type, this.input.subtype).then((r) => {
            r = r.map(f => (Object.assign({ ui: JSON.parse(f.description || "") }, f)));
            this.input.fields = r;
            this.forceUpdate();
        }).catch((e) => {
            this.emit('form_error', e);
        });
    },
    renderGQLForm(new_input) {
        this.input = Object.assign({}, this.input, new_input);
        this.renderForm();
    },
    submit() {
        let form = this.getEl('gql-create-form');
        let form_data = window.app.form.convertToData(form);
        form_data = this.input.fields.reduce((acc, f) => {
            acc[f.name] = f.type.name === 'Int' ? Number(form_data[f.name]) : form_data[f.name];
            return acc;
        }, {});
        let build_gql_query = { query: mutation_query(this.input.subtype, this.input.fields), variables: form_data };
        fetch(this.input.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(build_gql_query)
        }).then(r => r.json()).then(json => json.data[this.input.subtype]).then(data => this.emit('form_success', data)).catch(err => this.emit('form_error', err));
    }
};
