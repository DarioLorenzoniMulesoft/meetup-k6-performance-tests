import buildCSV from "./CSVBuilder.js";

/**
 * extract every rate's data to a csv
 */
const rateCSVMapper = (data) => {
    let arrayResult = [
        ["metric", "fails", "rate", "passes"]
    ];
    for (const metric in data.metrics) {
        if (Object.hasOwnProperty.call(data.metrics, metric)) {
            const element = data.metrics[metric];
            if (element.type === "rate") {
                arrayResult.push([
                    metric,
                    element.values.fails,
                    element.values.rate.toFixed(2),
                    element.values.passes,
                ])
            }
        }
    }
    return buildCSV(arrayResult);
}

export default rateCSVMapper;