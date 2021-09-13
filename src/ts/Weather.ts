interface IWeather {
    setCityName(cityName: string): void;
    setWeatherDescription(weatherDescription: string): void;
    setWeatherImage(weatherDescription: string): void;
    setTemperature(temperature: number): void;
}

class Weather implements IWeather {
    private appCityName: HTMLHeadingElement;
    private appWeatherDescription: HTMLParagraphElement;
    private appTemperatureValue: HTMLSpanElement;
    private appWeatherImage: HTMLImageElement;

    constructor() {
        this.init();
    }

    init(): void {
        this.appCityName = document.querySelector('[data-city]') as HTMLHeadingElement;
        this.appWeatherDescription = document.querySelector(
            '[data-weather-description]'
        ) as HTMLParagraphElement;
        this.appTemperatureValue = document.querySelector('[data-temperature]') as HTMLSpanElement;
        this.appWeatherImage = document.querySelector('[data-weather-image]') as HTMLImageElement;
    }

    setCityName(cityName: string): void {
        this.appCityName.textContent = cityName;
    }
    setWeatherDescription(weatherDescription: string): void {
        this.appWeatherDescription.textContent = weatherDescription;
    }
    setWeatherImage(weatherDescription: string): void {
        // Just for now, it will be changed later by switch/if and images
        this.appWeatherImage.textContent = weatherDescription;
    }
    setTemperature(temperature: number): void {
        this.appTemperatureValue.textContent = temperature.toString();
    }
}

export default Weather;
