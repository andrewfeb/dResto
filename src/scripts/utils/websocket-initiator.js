import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const webSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this.onMessageHandler;
  },

  onMessageHandler(message) {
    const restaurant = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `${restaurant.name} is opening!`,
      options: {
        body: restaurant.description,
        image: `${CONFIG.BASE_IMAGE_URL('small', restaurant.pictureId)}`,
      },
    });
  },
};

export default webSocketInitiator;
