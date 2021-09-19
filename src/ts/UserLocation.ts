import SuccessCoords from './types/SuccessCoords';

const defaultCoords: SuccessCoords = [40.73061, -73.935242];

const options = {
    enableHighAccuracy: true,
    timeout: 1000,
    maximumAge: 0,
};

class UserLocation {
    public success(position: GeolocationPosition): SuccessCoords {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        return [latitude, longitude];
    }

    public error(error: GeolocationPositionError): void {
        throw new Error(`Error ${error.code}: ${error.message}`);
    }
}

const userLocation = new UserLocation();

const userLocationCoords = new Promise<SuccessCoords>(result => {
    navigator.geolocation.getCurrentPosition(
        position => {
            const userCoords: SuccessCoords = userLocation.success(position);
            result(userCoords);
        },
        () => result(defaultCoords),
        options
    );
});

export default userLocationCoords;
