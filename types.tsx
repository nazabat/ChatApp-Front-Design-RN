export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type CameraParamList = {
  CameraScreen: undefined;
};

export type ChatParamList = {
  ChatScreen: undefined;
};

export type StatusParamList = {
  StatusScreen: undefined;
};

export type CallsParamList = {
  CallsScreen: undefined;
};

export type User = {
  id : String,
  name: String,
  imageUri:String,
  status: String,
}

export type Message = {
  id : String,
  content: String,
  createdAt:String,
  user: String,
}
 export type ChatRoom = {
  id:String,
  users: User[],
  lastMessage:Message;
 }