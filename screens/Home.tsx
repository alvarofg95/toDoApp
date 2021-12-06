import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import TaskList from '../components/task-list/default';

const data = [
  {
    id: 1,
    text: 'Texto 1',
  },
  {
    id: 2,
    text: 'Texto 2',
  },
  {
    id: 3,
    text: 'Texto 3',
  },
];

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={item => <TaskList {...item} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1F',
    height: '100%',
  },
});

export default Home;
