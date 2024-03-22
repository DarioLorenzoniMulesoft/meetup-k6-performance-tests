
/**
 * build a csv string from a two-dimensional array of strings
 * @param {array<array<string>>} data - array to convert to a CSV
 * @returns CSV string
 */
const buildCSV = (data) => {
    let result = "";
    data.forEach(row => {
        row.forEach(cell => {
            result += cell + ",";
        });
        result += "\n";
    });
    return result;
}

export default buildCSV;