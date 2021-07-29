import { Mixpanel } from 'mixpanel-react-native';
import { mixpanelToken } from '../config';

const DEV_APPLE_IDS = ['000450.264accfa2cf143d98f8074afcf1f359b.1529', '000880.400657b0dbbd41b6b3d55dc1a125f3f6.0700'];

class MixpanelManager {
  async init() {
    this.mixpanel = await Mixpanel.init(mixpanelToken);
  }
  track = (event, props) => {
    this.mixpanel.track(event, props);
    this.mixpanel.flush();
  };
  identify = (id) => {
    this.mixpanel.identify(id);
  };
  time = (event) => {
    this.mixpanel.timeEvent(event);
  };
  addUserDetails = ({ email, name, appleId }) => {
    this.mixpanel.identify(appleId);
    const developer = DEV_APPLE_IDS.includes(appleId);

    this.mixpanel.getPeople().set({ $email: email, $name: name, developer: developer });
  };
}
const mixpanelManager = new MixpanelManager();
mixpanelManager.init();
export default mixpanelManager;
