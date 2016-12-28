import React from 'react';
import { View, Text } from 'react-native';

const ItemView = (props) => {
  return (
    <View>
      <Text>{props.item.itemDetails}</Text>
    </View>
  );
};

export default ItemView;
