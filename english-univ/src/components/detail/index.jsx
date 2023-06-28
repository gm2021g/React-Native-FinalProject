import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

const Detail = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.detail}>{text}</Text>
    </View>
  );
};

export default Detail;
