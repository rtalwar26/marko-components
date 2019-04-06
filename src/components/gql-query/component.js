module.exports = class {

    onCreate(input, out) {
        this.state = {
            status: null,
            error: null,
            data: []
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
            this.state.data = list;
            this.state.status = 'success'
        }).catch((e) => {
            this.state.status = 'error';
            this.state.error = e.toString();
        })
    }
    fetch_data(input) {
        let query = input && input.query;
        return input.url && (typeof window !== 'undefined') ? fetch(input.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({ query: query })
        }).then(r => r.json()).then(json => json.data[Object.keys(json.data)[0]]) : Promise.resolve([]);
    }
}