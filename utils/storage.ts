import AsyncStorage from '@react-native-async-storage/async-storage';
import {TaskType} from '../redux/actionTypes';

const deleteTask = async (taskId: string, list: TaskType[]) => {
  try {
    const updatedTaskList = list.filter(task => task.id !== taskId);
    await AsyncStorage.setItem(
      '@todoAppKey123',
      JSON.stringify(updatedTaskList),
    );
    return {success: true};
  } catch (e) {
    return {success: false};
  }
};

const checkTask = async (taskId: string, list: TaskType[]) => {
  try {
    const taskIndex = list.findIndex(task => task.id === taskId);
    if (taskIndex > -1) {
      list[taskIndex].done = list[taskIndex].done ? false : true;
      await AsyncStorage.setItem('@todoAppKey123', JSON.stringify(list));
    }
    return {success: true};
  } catch (e) {
    return {success: false};
  }
};

const setData = async (value: string, list: TaskType[]) => {
  try {
    list.push({text: value, id: `${Date.now()}`});
    await AsyncStorage.setItem('@todoAppKey123', JSON.stringify(list));
    return {success: true};
  } catch (e) {
    return {success: false};
  }
};

const exampleTask = [
  {id: '1', text: 'Hacer deporte'},
  {id: '2', text: 'Leer'},
  {id: '3', text: 'Pasear'},
  {id: '4', text: 'Escuchar un Podcast'},
];

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@todoAppKey123');
    return {
      success: true,
      value: jsonValue ? JSON.parse(jsonValue) : exampleTask,
    };
  } catch (e) {
    return {success: false};
  }
};

export default {
  getData,
  setData,
  checkTask,
  deleteTask,
};
