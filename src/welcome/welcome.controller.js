class WelcomeController {

    constructor($state) {
        this.state = $state;
    }

    start() {
        this.state.go('compile')
    }

}

export default WelcomeController;