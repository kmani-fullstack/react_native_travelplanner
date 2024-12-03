import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const currentYear = new Date().getFullYear();

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Ionicons name="person" size={30} color={'orange'} />
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <AntDesign name="search1" size={30} color={'orange'} />
            <AntDesign name="plus" size={30} color={'orange'} />
          </View>
        </View>

        <View style={{padding: 10}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>My Trips</Text>
          <Text
            style={{
              marginTop: 6,
              fontSize: 19,
              fontWeight: '600',
              color: 'orange',
            }}>
            {currentYear}
          </Text>
        </View>

        <View>
          <Image
            style={{
              width: '96%',
              height: 220,
              resizeMode: 'cover',
              alignSelf: 'center',
              borderRadius: 20,
            }}
            source={{
              uri: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>
            Organize your next trip!
          </Text>
          <Text
            style={{
              marginTop: 15,
              color: 'gray',
              width: 250,
              textAlign: 'center',
              fontSize: 17,
            }}>
            Create your next trip and plan the activities of your itinerary
          </Text>
        </View>

        <Pressable
          onPress={() => navigation.navigate('Create')}
          style={{
            marginTop: 30,
            backgroundColor: '#383838',
            padding: 14,
            width: 200,
            borderRadius: 25,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Create a Trip
          </Text>
        </Pressable>

        <View style={{alignItems: 'center', marginTop: 20}}>
          <Image
            style={{width: 150, height: 150, resizeMode: 'center'}}
            source={{
              uri: 'https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
