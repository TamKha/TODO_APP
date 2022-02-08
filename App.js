import react from 'react';
import Todo from './src/Todo';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator(); // Created a constant variable

export default function App() {
  return (
    <NavigationContainer> {/** Returning navigation container with nav bar with two components */}
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarLabelStyle: { fontSize: 15, fontWeight: "bold", color:'#97D9D9' },
          tabBarItemStyle: { width: 100},
          tabBarStyle: { backgroundColor: "#59AAAA", borderColor:'#97D9D9', borderWidth:2},
        }}
      >
        <Tab.Screen name="Tasks" component={Todo} />
        <Tab.Screen name="Shopping" component={Todo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


