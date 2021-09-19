import Weather from './Weather';

interface IForecastClass {
    getForecast(cityName: string): Promise<void>;
    setForecast(temperatureValue: number, weatherDescription: string): void;
}

interface ITemperatureResponse {
    [key: string]: string;
}

interface IWeatherResponse {
    [key: string]: string | number;
}

class Forecast implements IForecastClass {
    private readonly API_KEY = '5c579f4983c7f22a4656485d7aa40d87';
    private weather: Weather;

    constructor() {
        this.weather = new Weather();
    }

    public async getForecast(cityName: string): Promise<void> {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.API_KEY}`
            );

            const data = await response.json();
            const temperatureInfo: ITemperatureResponse = data.main;
            const weatherInfo: IWeatherResponse = data.weather[0];

            const temperatureValue = Math.floor(
                this.changeTempFromKelvinToCelsius(parseInt(temperatureInfo.temp))
            );
            const weatherDescription = weatherInfo.description as string;

            this.setForecast(temperatureValue, weatherDescription);
        } catch (error) {
            console.error(error);
        }
    }

    public setForecast(temperatureValue: number, weatherDescription: string): void {
        this.weather.setTemperature(temperatureValue);
        this.weather.setWeatherDescription(weatherDescription);
    }

    private changeTempFromKelvinToCelsius(temperatureInKelvin: number): number {
        const temperatureInCelcius = temperatureInKelvin - 273.15;
        return temperatureInCelcius;
    }
}

export default Forecast;
