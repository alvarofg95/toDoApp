import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import TaskList from '../components/task-list/default';
import {ADD_TASK} from '../redux/actions';

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

const Home: React.FC = ({toDo}) => {
  console.log({toDo})
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleSubmit = () =>{
    dispatch(ADD_TASK(value));
  };

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={item => <TaskList {...item} />} />
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          style={styles.input}
          onChangeText={handleChange}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
          <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1F',
    height: '100%',
  },
  inputContainer: {
    margin: 10,
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 10,
    padding: 10,
    fontSize: 15,
  },
  icon: {
    marginTop: -2,
    fontSize: 35,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  addButton: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

const mapStateToProps = ({toDo, done}) => {
  return {toDo, done};
};

export default connect(mapStateToProps)(Home);
