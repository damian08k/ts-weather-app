interface IWeather {
    setCityName(cityName: string): void;
    setWeatherDescription(weatherDescription: string): void;
    setWeatherImage(imageURL: string, weatherDescription: string): void;
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

    private init(): void {
        this.appCityName = document.querySelector('[data-city]') as HTMLHeadingElement;
        this.appWeatherDescription = document.querySelector(
            '[data-weather-description]'
        ) as HTMLParagraphElement;
        this.appTemperatureValue = document.querySelector('[data-temperature]') as HTMLSpanElement;
        this.appWeatherImage = document.querySelector('[data-weather-image]') as HTMLImageElement;
    }

    public setCityName(cityName: string): void {
        this.appCityName.textContent = cityName;
    }
    public setWeatherDescription(weatherDescription: string): void {
        this.appWeatherDescription.textContent = weatherDescription;
    }
    public setWeatherImage(imageURL: string, weatherDescription: string): void {
        this.appWeatherImage.src = imageURL;
        this.appWeatherImage.alt = weatherDescription;
        this.appWeatherImage.style.display = 'block';
    }
    public setTemperature(temperature: number): void {
        this.appTemperatureValue.textContent = temperature.toString();
    }
}

export default Weather;
