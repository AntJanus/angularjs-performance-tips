class FakeData {

    constructor($timeout) {
        this.timeout = $timeout;
    }

    /**
     * return an array of fake data
     *
     * @param length
     * @returns {Array}
     */
    getFakeData(length) {
        let data = [];
        while(length--) {
            data.push(faker.helpers.createCard());
        }
        return data;
    }

    /**
     * returns a promise that resolved to
     * an array of fake data
     *
     * @param length
     * @returns {*}
     */
    getFakeDataAsync(length) {
        return this.timeout( () => this.getFakeData(length), 500);
    }
}

export default FakeData