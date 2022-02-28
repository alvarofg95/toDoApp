import AsyncStorage from '@react-native-async-storage/async-storage';

const deleteTask = async (taskId, list) => {
  try {
    const updatedTaskList = list.filter(task => task.id !== taskId);
    console.log('>>> UPDATED_TASK_LIST', updatedTaskList)
    console.log('>>> TASK_ID', taskId)
    await AsyncStorage.setItem(
      '@todoAppKey123',
      JSON.stringify(updatedTaskList),
    );
    return {success: true};
  } catch (e) {
    return {success: false};
  }
};

const checkTask = async (taskId, list) => {
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

const setData = async (value, list) => {
  try {
    list.push({text: value, id: `${Date.now()}`});
    await AsyncStorage.setItem('@todoAppKey123', JSON.stringify(list));
    return {success: true};
  } catch (e) {
    return {success: false};
  }
};

const array = [
  {id: '1', text: 'Hacer deporte'},
  {id: '2', text: 'Leer'},
  {id: '3', text: 'Pasear'},
  {id: '4', text: 'Escuchar un Podcast'},
];

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@todoAppKey123');
    return {success: true, value: jsonValue ? JSON.parse(jsonValue) : array};
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
