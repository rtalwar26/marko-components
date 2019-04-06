module.exports = class {

    data() {
        let comps = this.getComponents('fields');
        return comps.map(c => c.data());
    }
}