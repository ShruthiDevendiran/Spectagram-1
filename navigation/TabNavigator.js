import React,{Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreatePost from '../screens/CreatePost';
import Feed from '../screens/Feed';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

export default class TabNavigator extends Component{
    render(){
        return(
          <Tab.Navigator screenOptions ={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if(route.name === "CreatePost"){
                 iconName = focused ? 'create': 'create-outline'
              }

              else if(route.name === "Feed"){
                iconName = focused ? 'book':'book-outline'
              }

              return <Ionicons name={iconName} size={size} color={color}/>
            }
          })}
          tabBarOptions={{
            activeTintColor: red,
            inactiveTintColor:grey,
          }}
          >
            <Tab.Screen name="Create Post" component={{CreatePost}} options={{headershown:false}}/>
            <Tab.Screen name="Feed" component={{Feed}} options={{headerShown:false}}/>
          </Tab.Navigator>
        )
    }
}