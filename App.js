import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NextScreen from './screens/NextScreen';


const Stack = createStackNavigator();

const App = () => {
  const horizontalTransition = {
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
          backgroundColor: '#ff8210',
        },
      };
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ff8200',
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'Arial',
          },
          headerStyleInterpolator: HeaderStyleInterpolators.forFade,
          ...horizontalTransition,
        }}
      >
        <Stack.Screen
          name="Tela Inicial"
          component={HomeScreen}
          options={{
            title: 'Tela Inicial',
          }}
        />
        <Stack.Screen
          name="Next"
          component={NextScreen}
          options={{
            title: 'Next',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

    
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fffffff',
  },

  image: {
    width: 300,
    height: 500,
    borderWidth: '3px solid black',
    borderColor: 'black',
    borderRadius: 15,
    margin: 20,
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  H1: {
    color: 'black',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '900',
  }
});