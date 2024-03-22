import buildCSV from "./CSVBuilder.js";

/**
 * extract every counter's data to a csv
 */
const counterCSVMapper = (data) => {
    let arrayResult = [
        ["metric", "count", "rate"]
    ];
    for (const metric in data.metrics) {
        if (Object.hasOwnProperty.call(data.metrics, metric)) {
            const element = data.metrics[metric];
            if (element.type === "counter") {
                arrayResult.push([
                    metric,
                    element.values.count,
                    element.values.rate.toFixed(2),
                ])
            }
        }
    }
    return buildCSV(arrayResult);
}

export default counterCSVMapper;