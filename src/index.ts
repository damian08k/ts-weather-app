// const API_KEY = '5c579f4983c7f22a4656485d7aa40d87';

import UserCityByLocation from './ts/UserCityByLocation';

class APP {
    private userCityByLocation: UserCityByLocation;

    static appInstance: APP;

    private constructor() {
        this.userCityByLocation = new UserCityByLocation();
        this.userCityByLocation.getCityByLocation();
    }

    static getInstance() {
        if (APP.appInstance) {
            return this.appInstance;
        }

        this.appInstance = new APP();
        return this.appInstance;
    }
}

const app = APP.getInstance();
