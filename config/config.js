/**
 * returns a configuration object with different values depending on the environment variable K6ENV.
 * @returns configuration for the scripts
 */
const getConfig = () => {
    return Object.assign({}, 
        JSON.parse(open(`./config/config-${__ENV.K6ENV != null ? __ENV.K6ENV : "uat"}.json`)), 
        JSON.parse(open("./config/config-global.json"))
    );
}

export default getConfig;