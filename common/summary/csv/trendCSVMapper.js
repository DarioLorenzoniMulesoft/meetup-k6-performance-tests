import buildCSV from "./CSVBuilder.js";

/**
 * extract every trend's data to a csv
 */
const trendCSVMapper = (data) => {
    let arrayResult = [
        ["metric", "average", "minimum", "median", "maximum", "p(90)", "p(95)"]
    ];
    for (const metric in data.metrics) {
        if (Object.hasOwnProperty.call(data.metrics, metric)) {
            const element = data.metrics[metric];
            if (element.type === "trend") {
                arrayResult.push([
                    metric,
                    element.values.avg.toFixed(2),
                    element.values.min.toFixed(2),
                    element.values.med.toFixed(2),
                    element.values.max.toFixed(2),
                    element.values["p(90)"].toFixed(2),
                    element.values["p(95)"].toFixed(2)
                ])
            }
        }
    }
    return buildCSV(arrayResult);
}

export default trendCSVMapper;