import ClassRoom from './0-classroom';
// Compare this snippet from 3-main.js:

export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
