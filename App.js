import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';
import ImagesPath from './constant/ImagesPath';
import AlphabetScrollScreen from './screens/Home';
import SettingsScreen from './screens/Settings';
import User from './screens/User';
import Search from './screens/Search';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false
      }}>
        <Tab.Screen name="Home" component={AlphabetScrollScreen} 
        options={{tabBarLabel: '' ,
          tabBarIcon:({focused})=>{
            return(
              <Image source={ImagesPath.Search}
              style={styles.Search}/>
            )
          }
        }}/>
        <Tab.Screen name="Settings" component={SettingsScreen} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => {
              return (
                <Image source={ImagesPath.Menu}
                  style={styles.menu} />
              )
            }
          }}/> 
        <Tab.Screen name="Search" component={Search}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => {
              return (
                <Image source={ImagesPath.heart}
                  style={styles.heart} />
              )
            }
          }} />
        <Tab.Screen name="User" component={User} 
          options={{ tabBarLabel: '' ,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
               
                source={ImagesPath.User}
                  style={styles.user} />
              )
            },
            
          }}
          />
       
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  Search:{
    width:25,
    height:25,
    color:'black',  
  },
  menu:{
    width: 45,
    height: 45,
    color: 'black',
    marginTop:10
  },
  heart: {
    width: 26,
    height: 26,
  },
  user: {
    width: 30,
    height: 30,
    color: 'black',
  },
})






