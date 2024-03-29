import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ArticleScreen from '../screens/ArticleScreen';
import ClipScreen from '../screens/ClipScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Article" component={ArticleScreen} />
        </Stack.Navigator>
    );
};

const ClipStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Clip" component={ClipScreen} />
            <Stack.Screen name="Article" component={ArticleScreen} />
        </Stack.Navigator>
    );
};

const screenOption = ({ route }) => ({
    tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
            iconName = 'home';
        } else if (route.name === 'Clip') {
            iconName = 'bookmark';
        }

        // You can return any component that you like here!
        return <FontAwesome name={iconName} size={size} color={color} />;
    },
});

export default AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={screenOption}>
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Clip" component={ClipStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
