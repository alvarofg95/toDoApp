import React, {useContext, useEffect, useState} from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import ThemeContext from '../components/context/default';
import Header from '../components/header/default';
import TaskList from '../components/task-list/default';
import {
  createTaskRequest,
  deleteTaskRequest,
  fetchTasksRequest,
  selectTaskRequest,
} from '../redux/actions';

interface HomeProps extends PropsFromRedux {
  toDo: any;
}

const Home = (props: HomeProps): JSX.Element => {
  const {
    toDo,
    loadTasks,
    addTask,
    setCheckedTask,
    setUnCheckedTask,
    onDeleteTask,
  } = props;

  const {isDarkTheme} = useContext(ThemeContext);

  const [value, setValue] = useState<string>('');

  useEffect(() => {
    const getTasks = () => {
      loadTasks();
    };
    return getTasks();
  }, [loadTasks]);

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const getTasks = () => {
    loadTasks();
  };

  const handleSubmit = () => {
    if (value) {
      addTask(value);
      setValue('');
    }
    Keyboard.dismiss();
  };

  const EmptyList = () => (
    <Text style={styles.emptyList}>¡Anímate a crear una tarea!</Text>
  );

  let inputContainerStyle = {
    ...styles.inputContainer,
  };
  let inputStyle = {
    ...styles.input,
  };
  let addButtonStyle = {
    ...styles.addButton,
  };
  if (isDarkTheme) {
    inputContainerStyle = {
      ...inputContainerStyle,
    };
    inputStyle = {
      ...inputStyle,
      ...styles.darkBackground,
    };
    addButtonStyle = {
      ...addButtonStyle,
      ...styles.darkBackground,
    };
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#00ceb4" />
      <Header height="20%" />
      <View style={styles.list}>
        <FlatList
          refreshing={false}
          onRefresh={getTasks}
          data={toDo}
          ListEmptyComponent={<EmptyList />}
          renderItem={item => (
            <TaskList
              {...item}
              checkTask={setCheckedTask}
              unCheckTask={setUnCheckedTask}
              onDeleteTask={onDeleteTask}
            />
          )}
        />
        <View style={inputContainerStyle}>
          <TextInput
            value={value}
            style={inputStyle}
            onChangeText={handleChange}
          />
          <TouchableOpacity style={addButtonStyle} onPress={handleSubmit}>
            <Text style={styles.icon}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyList: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 50,
  },
  container: {
    backgroundColor: '#00ceb4',
    height: '100%',
  },
  list: {
    backgroundColor: '#1A1A1F',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '80%',
  },
  darkBackground: {
    backgroundColor: '#3c3636',
  },
  inputContainer: {
    margin: 10,
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#1A1A1F',
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
    loadTasks: () => dispatch(fetchTasksRequest()),
    addTask: (value: string) => dispatch(createTaskRequest(value)),
    setCheckedTask: (id: string) => dispatch(selectTaskRequest(id)),
    setUnCheckedTask: (id: string) => dispatch(selectTaskRequest(id)),
    onDeleteTask: (id: string) => dispatch(deleteTaskRequest(id)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Home);
