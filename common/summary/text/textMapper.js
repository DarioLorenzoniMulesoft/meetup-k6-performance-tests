import { textSummary as summary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

/**
 * wrapper for k6-summary function
 */
const textSummary = (data) => {
	return summary(data, { indent: ' ', enableColors: true})
}

export default textSummary;