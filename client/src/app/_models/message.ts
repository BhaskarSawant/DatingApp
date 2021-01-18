export interface Message {
    id: number;
    senderId: number;
    senderUsername: string;
    senderPhotoUrl: string;
    recipientId: number;
    recipentUsername: string;
    recipientPhotoUrl: string;
    content: string;
    dateTead?: Date;
    messageSent: Date;
  }