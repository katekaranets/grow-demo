import CLIMBERS from '../stubs/climbers.json';

class ClimbersService {
    constructor() {
        localStorage.setItem('climbers', JSON.stringify(CLIMBERS));
    }

    save (climbers) {
        localStorage.setItem('climbers', JSON.stringify(climbers));
    }

    load () {
        return JSON.parse(localStorage.getItem('climbers'));
    }
}

export default new ClimbersService();