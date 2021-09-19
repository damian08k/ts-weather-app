import Forecast from './Forecast';
import Weather from './Weather';

import userLocationCoords from './UserLocation';
import SuccessCoords from './types/SuccessCoords';

interface IAddressResponse {
    [key: string]: string;
}

class UserCityByLocation {
    private weather: Weather;
    private forecast: Forecast;

    constructor() {
        this.weather = new Weather();
        this.forecast = new Forecast();
    }

    public async getCityByLocation(): Promise<void> {
        const userCoords = await this.getCoords();
        const [latitude, longitude] = userCoords;

        const MAP_API = 'https://nominatim.openstreetmap.org/reverse?format=json';

        try {
            const response = await fetch(`${MAP_API}&lat=${latitude}&lon=${longitude}`);

            if (!response.ok) {
                throw new Error("I couldn't fetch data from that resource!");
            }

            const data = await response.json();
            const address: IAddressResponse = data.address;
            const cityName = this.checkDoesAdressHasProperty(address);

            this.weather.setCityName(cityName);

            await this.forecast.getForecast(cityName);
        } catch (error) {
            console.error(error);
        }
    }

    private async getCoords(): Promise<SuccessCoords> {
        const userCoords = await userLocationCoords;
        return userCoords;
    }

    private checkDoesAdressHasProperty(address: IAddressResponse): string {
        if (address.hasOwnProperty('village')) {
            return address.village;
        } else if (address.hasOwnProperty('town')) {
            return address.town;
        } else if (address.hasOwnProperty('city')) {
            return address.city;
        }

        return 'New York';
    }
}

export default UserCityByLocation;
