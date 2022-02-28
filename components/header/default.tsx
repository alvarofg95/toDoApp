import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

type HeaderProps = {
  height: string;
};

const Header: React.FC<HeaderProps> = ({height}) => {
  return (
    <View style={{...styles.container, height}}>
      <Image
        source={require('../../assets/portapapeles.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00ceb4',
  },
  image: {
    marginTop: 15,
    marginRight: 'auto',
    marginLeft: 'auto',
    height: 100,
    width: 100,
  },
});

export default Header;
