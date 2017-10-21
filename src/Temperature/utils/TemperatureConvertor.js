
export const toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) / 1.8;
};

export const toFahrenheit = (celsius) => {
    return (celsius * 1.8) + 32;
};