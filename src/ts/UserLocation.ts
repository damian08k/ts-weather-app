interface SuccessCoords {
    [index: number]: number;
}

const options = {
    enableHighAccuracy: true,
    timeout: 1000,
    maximumAge: 0,
};

class UserLocation {
    public success(position: GeolocationPosition): SuccessCoords {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude, longitude);

        return [latitude, longitude];
    }

    public error(error: GeolocationPositionError): void {
        throw new Error(`Error ${error.code}: ${error.message}`);
    }
}

const userLocation = new UserLocation();

const userLocationCoords = new Promise(result => {
    navigator.geolocation.getCurrentPosition(
        position => {
            const userCoords: SuccessCoords = userLocation.success(position);
            result(userCoords);
        },
        () => result('default'),
        options
    );
});

export default userLocationCoords;
