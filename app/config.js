import Config from 'react-native-config';

const CONFIG_DEV = {
  API_BASE: 'http://localhost:7074',
};
const CONFIG_PROD = {
  API_BASE: 'https://api.demigod.ai',
};

const ENV = Config.ENVIRONMENT;
const CONF = ENV === 'production' ? CONFIG_PROD : CONFIG_DEV;

export const apiBase = CONF.API_BASE;
