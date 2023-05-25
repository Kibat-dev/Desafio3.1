import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Clique no botão abaixo para ir para outra página</Text>
      <Button
        title="Próxima Página"
        onPress={() => navigation.navigate('Next')}
      />
    </View>
  );
};

export default HomeScreen;