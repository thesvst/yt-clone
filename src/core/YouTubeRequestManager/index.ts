import axios from 'axios';

class YouTubeRequestManager {
  static getEndpointWithAPIKey = (endpoint) => `${endpoint}&key=${process.env.API_KEY}`;

  static fetch = async (endpoint, opts) => {
    const endpointWithKey = YouTubeRequestManager.getEndpointWithAPIKey(endpoint);

    const data = await axios(endpointWithKey, {
      ...opts,
      headers: {
        ...(opts?.headers || {}),
      },
    });

    return data;
  };
}

export default YouTubeRequestManager;
