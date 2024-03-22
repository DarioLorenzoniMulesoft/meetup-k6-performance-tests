import buildCSV from "./CSVBuilder.js";

/**
 * extract every gauge's data to a csv
 */
const gaugeCSVMapper = (data) => {
    let arrayResult = [
        ["metric", "value", "minimum", "maximum"]
    ];
    for (const metric in data.metrics) {
        if (Object.hasOwnProperty.call(data.metrics, metric)) {
            const element = data.metrics[metric];
            if (element.type === "gauge") {
                arrayResult.push([
                    metric,
                    element.values.value.toFixed(2),
                    element.values.min.toFixed(2),
                    element.values.max.toFixed(2),
                ])
            }
        }
    }
    return buildCSV(arrayResult);
}

export default gaugeCSVMapper;