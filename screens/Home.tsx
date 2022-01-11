import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import TaskList from '../components/task-list/default';
import {ADD_TASK, CHECK_TASK, LOAD_TASKS, UNCHECK_TASK} from '../redux/actions';

interface HomeProps extends PropsFromRedux {
  toDo: any;
  done: any;
}

const Home = (props: HomeProps): JSX.Element => {
  const {toDo, loadTasks, addTask, setCheckedTask, setUnCheckedTask} = props;
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    getTasks();
  });

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const getTasks = () => {
    loadTasks();
  };

  const handleSubmit = () => {
    addTask(value);
    setValue('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <FlatList
        refreshing={false}
        onRefresh={getTasks}
        data={toDo}
        renderItem={item => (
          <TaskList
            {...item}
            checkTask={setCheckedTask}
            unCheckTask={setUnCheckedTask}
          />
        )}
      />
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

interface RootState {
  tasks: any;
}

const mapStateToProps = (state: RootState) => {
  const {
    tasks: {toDo},
  } = state;
  return {toDo};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadTasks: () => dispatch(LOAD_TASKS()),
    addTask: (value: string) => dispatch(ADD_TASK(value)),
    setCheckedTask: (id: number) => dispatch(CHECK_TASK(id)),
    setUnCheckedTask: (id: number) => dispatch(UNCHECK_TASK(id)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Home);
