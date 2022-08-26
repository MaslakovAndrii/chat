import { createSlice     } from '@reduxjs/toolkit'


const roomSlice = createSlice({
     name: 'room',
     initialState: {
          rooms: {
               1: {
                    messages: [
                         { date: new Date('2022-08-20T08:01+03:00').getTime(), text: 'Слышалa ты в поиске работы или стажировки. Хочу посоветовать Reeinbit, свм у них прошел стажировку и уже работаю.', isMe: false },
                         { date: new Date('2022-08-20T08:02+03:00').getTime(), text: 'Спасибо, уже написал им.', isMe: true },
                         { date: new Date('2022-08-20T08:03+03:00').getTime(), text: 'Мне прислали тестовое задание и я его начал делать, надеюсь попаду на стажировку. Спасибо за совет.', isMe: true },
                    ],
               },
               2: {
                    messages: [
                         { date: new Date('2022-08-21T20:01+03:00').getTime(), text: 'Привет! Как дела?', isMe: false },
                         { date: new Date('2022-08-21T20:02+03:00').getTime(), text: 'Что делаешь?', isMe: false },
                         { date: new Date('2022-08-21T20:03+03:00').getTime(), text: 'Делаю тестовое задание для стажирровки в Reenbit', isMe: true },
                    ],
               },
               3: {
                    messages: [
                         { date: new Date('2022-08-23T22:01+03:00').getTime(), text: 'Как успехи с тестовым?', isMe: false },
                         { date: new Date('2022-08-23T22:02+03:00').getTime(), text: 'Сложно, но я стараюсь)', isMe: true },
                    ],
               },
               4: {
                    messages: [
                         { date: new Date('2022-08-24T12:01+03:00').getTime(), text: 'Привет, хочешь завтра пойти поиграть в футбол?', isMe: false },
                         { date: new Date('2022-08-24T12:02+03:00').getTime(), text: 'Привет)', isMe: true },
                         { date: new Date('2022-08-24T12:03+03:00').getTime(), text: 'Извини, но я очень занят на этой неделе. Нужно успеть сделать Кое-какую работу.', isMe: true },
                         { date: new Date('2022-08-24T12:04+03:00').getTime(), text: 'Хорошо, тогда в другой раз)', isMe: false },
                    ],
               }
          },
          currentRoom: null,
     },
     reducers: {
          addMessage(state, action) {
               const [roomId, message] = action.payload;
               const existingRoom = state.rooms[roomId];
               if (existingRoom) {
                    existingRoom.messages = [...existingRoom.messages, message]
               }
          },
          addAnswer(state, action) {
               const [roomId, message] = action.payload;
               const existingRoom = state.rooms[roomId];
               if (existingRoom) {
                    existingRoom.messages = [...existingRoom.messages, message]
               }
          },
          setRoom(state, action) {
               state.currentRoom = action.payload;
          }
     }
})

export const { addMessage, addAnswer, setRoom } = roomSlice.actions;
export default roomSlice.reducer;