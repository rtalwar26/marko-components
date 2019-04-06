module.exports = class {

    onCreate(input, out) {
        this.state = {
            status: null,
            error: null,
            data: [],
            url: input.url || ""
        }
    }
    onMount() {
        this.refresh(this.input);
    }
    onInput(input) {
        this.refresh(input)
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
        return input.url ? fetch(input.url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'

            },
        }).then(r => r.json()) : Promise.resolve([]);
    }
}