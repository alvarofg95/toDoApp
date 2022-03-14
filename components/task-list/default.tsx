import React, {useState, useContext} from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import {CheckBox} from 'react-native-elements';
import ThemeContext from '../context/default';

type TaskProps = {
  item: {
    text: string;
    id: number;
    done: boolean;
  };
  checkTask: any;
  unCheckTask: any;
  onDeleteTask: any;
};

const checkIcon = require('../../assets/checked.png');
const unCheckedIcon = require('../../assets/unchecked.png');

const TaskList: React.FC<TaskProps> = ({
  item,
  checkTask,
  unCheckTask,
  onDeleteTask,
}) => {
  const {isDarkTheme} = useContext(ThemeContext);
  const [showBin, setShowBin] = useState(false);
  const checked = item.done;
  const handleChange = () => {
    if (checked) {
      unCheckTask(item.id);
    } else {
      checkTask(item.id);
    }
    if (showBin) {
      handleLongPressed();
    }
  };

  const handleLongPressed = () => {
    setShowBin(!showBin);
  };

  const handleDelete = () => {
    onDeleteTask(item.id);
  };

  let containerStyle = {...styles.container};
  if (isDarkTheme) {
    containerStyle = {
      ...containerStyle,
      ...styles.darkBackground,
    };
  }
  if (checked) {
    containerStyle = {
      ...containerStyle,
      ...styles.checked,
    };
    if (isDarkTheme) {
      containerStyle = {
        ...containerStyle,
        ...styles.checkedDark,
      };
    }
  }
  if (showBin) {
    containerStyle.width = '86%';
  }

  const {text} = item;
  return (
    <View style={styles.buttonContainer}>
      <CheckBox
        checkedIcon={<Image style={styles.check} source={checkIcon} />}
        uncheckedIcon={<Image style={styles.check} source={unCheckedIcon} />}
        checked={checked}
        title={text}
        containerStyle={containerStyle}
        textStyle={checked ? styles.checkedText : {}}
        onPress={handleChange}
        onLongPress={handleLongPressed}
      />
      {showBin && (
        <TouchableOpacity onPress={handleDelete} style={styles.deleteContainer}>
          <Image
            style={styles.delete}
            height={20}
            width={20}
            source={require('../../assets/close.png')}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  deleteContainer: {
    justifyContent: 'center',
  },
  delete: {
    marginRight: 15,
  },
  container: {
    borderRadius: 10,
    width: '95%',
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    opacity: 1,
  },
  darkBackground: {
    backgroundColor: '#9d9c9c',
    borderColor: '#9d9c9c',
  },
  text: {
    color: '#000',
    fontSize: 15,
  },
  check: {
    height: 25,
    width: 25,
  },
  checkedText: {
    textDecorationLine: 'line-through',
  },
  checked: {
    backgroundColor: '#9d9c9c',
    borderColor: '#9d9c9c',
  },
  checkedDark: {
    backgroundColor: '#3c3636',
    borderColor: '#3c3636',
  },
});

export default TaskList;
