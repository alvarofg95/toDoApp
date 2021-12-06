import React, {useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import {CheckBox} from 'react-native-elements';

type TaskProps = {
  item: {
    text: string;
  };
};

const checkIcon = require('../../assets/checked.png');
const unCheckedIcon = require('../../assets/unchecked.png');

const TaskList: React.FC<TaskProps> = ({item}) => {
  const [checked, setChecked] = useState(false);
  console.log({item, checked});

  const handleChange = () => {
    console.log('handle');
    setChecked(!checked);
  };

  let containerStyle = {...styles.container};
  if (checked) {
    containerStyle = {
      ...containerStyle,
      ...styles.checked,
    };
  }

  console.log({checked, containerStyle});
  const {text} = item;
  return (
    <CheckBox
      checkedIcon={<Image style={styles.check} source={checkIcon} />}
      uncheckedIcon={<Image style={styles.check} source={unCheckedIcon} />}
      checked={checked}
      title={text}
      containerStyle={containerStyle}
      textStyle={checked ? styles.checkedText : {}}
      onPress={handleChange}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: '95%',
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    opacity: 1,
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
    backgroundColor: 'red',
  },
});

export default TaskList;
