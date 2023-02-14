const config = require('../../config.json');

export default function useConfig() {
    // TODO: augment with ENV info for better deployments
    return config;
}
