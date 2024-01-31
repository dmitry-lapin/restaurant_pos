// teamThunk.js
import { ref, onValue } from "firebase/database";
import { database } from '../../../firebase_config';

export const fetchTeamData = async () => {
    const teamRef = ref(database, 'team');
    return new Promise((resolve, reject) => {
      onValue(teamRef, (snapshot) => {
        const users = snapshot.val();
        resolve(users);
      }, (error) => {
        reject(error);
      });
    });
  };