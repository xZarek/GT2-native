import { AsyncStorage } from 'react-native';

export async function getCurrentUser() {
    return new Promise((resolve, reject) => {
        try {
            AsyncStorage.getItem('@FireAlarm:USER').then(res => resolve(JSON.parse(res)));
        } catch (error) {
            console.log('Nepodařilo se načíst uživatele!\n', error); // eslint-disable-line no-console
            reject(error);
        }
    });
}