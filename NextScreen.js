import React from 'react';
import { View, Text, Button } from 'react-native';

const NextScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Clique no botão abaixo para voltar a Tela Inicial</Text>
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default NextScreen;