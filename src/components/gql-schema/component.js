module.exports = class {

    onCreate(input, out) {
        this.state = {
            status: null,
            error: null,
            fields: []
        }
    }
    onMount() {
        this.refresh(this.input);
    }
    onInput(input, out) {
        // this.input = input;
        // this.state.url = input.url;
        // this.refresh();
        // console.log(this.input);
        // setTimeout(() => {
        //     console.log(this.input);
        // }, 1000);
        this.refresh(input);
    }
    refresh(input) {
        this.fetch_data(input).then((list) => {
            this.state.fields = list;
            this.state.status = 'success'
        }).catch((e) => {
            this.state.status = 'error';
            this.state.error = e.toString();
        })
    }
    fetch_data(input) {
        let query = (input && input.query) || `{__type(name:"Mutation") {name description kind fields {description deprecationReason name args { name description defaultValue type { name description } }  } } }`;
        let operation_name = input && input.operation;
        return input.url && (typeof window !== 'undefined') ? fetch(input.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({ query: query })
        }).then(r => r.json()).then(json => {
            let data = json.data[Object.keys(json.data)[0]];
             let mutation = data.fields.filter(f=>f.name === operation_name)[0];
             return mutation.args;

        }) : Promise.resolve([]);
    }
}