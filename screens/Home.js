import React, { useState, useEffect } from 'react';
import {
    ActivityIndicator,
    StatusBar,
    Text,
    View,
} from 'react-native';
import Axios from 'axios';
import AlphabetFlatList from '@yoonzm/react-native-alphabet-flat-list';
import { Image } from 'react-native-elements';

function UserCard({ item, Index }) {

    return (

        <View >
           
            <View
                key={Index}
                style={{
                    //margin: 4,
                    backgroundColor: 'white',
                    marginRight: 40,
                    //paddingHorizontal: 10,
                    paddingVertical: 4,
                    borderRadius: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 40,
                    width:315,
                    
                }}
            >
               
                <View style={{ flex: 1, paddingHorizontal: 10,flexDirection:'row',marginTop:65,height:50 }}>
                    <Text style={{ fontSize: 16, color: 'black' }}
                        onPress={() => {
                            alert(`+${item.name.first}`)
                        }}>
                        {`${item.name.first}`}
                    </Text>
                    <Text style={{ fontSize: 16, color: 'gray',marginLeft:20 }}
                        onPress={() => {
                            alert( `+${item.cell}`)
                        }}>
                                  {`+${item.cell}`}
                    </Text>
                   
                   
                </View>
                <Text style={{ color: 'darkgoldenrod',alignSelf:'flex-end',
                height:30 }}
                onPress={()=>{
                    alert('Do you want to Invite')
                }}>INVITE</Text>

            </View>
            <Text style={{ color: 'black' }}>________________________________________</Text>
           
        </View>
    );
}
export default function AlphabetScrollScreen({ navigation }) {
    StatusBar.setBarStyle('dark-content');
    const [users, setUsers] = useState(null);
    useEffect(() => {
        Axios.get('https://randomuser.me/api/?results=50').then(({ data }) => {
            const alphabeticUsers = {
                A: [],
                B: [],
                C: [],
                D: [],
                E: [],
                F: [],
                G: [],
                H: [],
                I: [],
                J: [],
                K: [],
                l: [],
                M: [],
                N: [],
                O: [],
                P: [],
                Q: [],
                R: [],
                S: [],
                T: [],
                U: [],
                V: [],
                W: [],
                X: [],
                Y: [],
                Z: [],
            };
            data.results.map((user) => {
                let fchar = user.name.first[0];
                if (fchar in alphabeticUsers) {
                    alphabeticUsers[fchar] = [...alphabeticUsers[fchar], user];
                }
            });
           // console.log(data)
            setUsers(alphabeticUsers);
        });
    }, []);

    if (users === null) {
        return (
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size='large' />
            </View>
        );
    }

    return (
        <View style={{ flex: 1,backgroundColor:'white'}}>
            <View style={{ flexDirection: 'row', backgroundColor: 'white', height: 65,
             justifyContent: 'space-around',
              }}>
                <Image source={require('../Assets/Images/arrow.png')}
                    style={{ height: 30, width: 30, margin: 15 }}
                    onPress={() => {
                        alert('Do you want to exit')
                    }}/>
                <Image source={require('../Assets/Images/Group.png')}
                    style={{ height: 33, width: 130,margin:15 }} />
                <Image source={require('../Assets/Images/bag.png')}
                    style={{ height: 30, width: 30, margin: 15 }} />              
            </View>
            <View>
                <Text style={{ color: 'darkgoldenrod',}}>______________________________________________________</Text>
            </View>
            <View  style={{ flexDirection: 'row',justifyContent:'space-around',height:50}} >
                <Text style={{color:'black',fontWeight:'bold'}}>786 contacts</Text>
                <Text style={{ color: 'black',fontSize:25 }}>CONTACTS</Text>
                <Image source={require('../Assets/Images/users.png')}
                    style={{ height: 30, width: 30, }} /> 
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../Assets/Images/girle.png')}
                    style={{ height: 50, width: 50,borderRadius:40 }} />
                    <Text style={{ color: 'black',margin:15,fontSize:20 }}
                        onPress={() => {
                            alert('Edin Adam')
                        }}>Edin Adam</Text></View>
                <Text style={{ color: 'darkgoldenrod', fontSize: 40 }}
                 onPress={()=>{
                    alert('Add another User') }}>+</Text>
                
            </View>
            <Text style={{ color: 'darkgoldenrod',alignSelf:'center' }}>_________________________________________________</Text>
            <AlphabetFlatList data={users} itemHeight={60} renderItem={UserCard}
                style={{ backgroundColor: 'white' }} />
        </View>
    );
}