import {useNavigation} from '@react-navigation/native';
import {useRef, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Button,
  ImageBackground,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DateRangePicker from '../components/DateRangePicker';
import {format, formatDate} from 'date-fns';

const CreateTrip = () => {
  const navigation = useNavigation();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [tripName, setTripName] = useState('');

  const onDateChange = (date, type) => {
    console.log(date);
    console.log(type);

    if (type === 'END_DATE') {
      setEndDate(date);
    } else if (type === 'START_DATE') {
      setStartDate(date);
      setEndDate(date);
    }
  };

  const handleSubmit = () => {
    console.log(tripName);
  };
  const formatDate = date => {
    if (date) {
      return format(date, 'dd MMMM yyyy');
    }
    return '';
  };

  const images = [
    {
      id: 1,
      image:
        'https://images.pexels.com/photos/3538721/pexels-photo-3538721.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d',
    },
  ];

  const [image, setImage] = useState(images[0].image);

  return (
    <SafeAreaView>
      <ImageBackground
        source={{uri: image}}
        style={{height: '100%', width: '100%'}}>
        <View style={{margin: 15}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Pressable onPress={() => navigation.goBack()}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: 600,
                }}>
                Cancel
              </Text>
            </Pressable>
            <Pressable
              style={{backgroundColor: 'white', borderRadius: 25, padding: 10}}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'orange',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Create
              </Text>
            </Pressable>
          </View>
          <View style={{marginTop: 25}}>
            <DateRangePicker
              startDate={startDate}
              endDate={endDate}
              onChange={onDateChange}>
              <AntDesign name="calendar" size={30} color="white" />
            </DateRangePicker>
            {/* Display the selected date */}
            {/* {startDate && (
            <Text style={{marginTop: 20}}>
              Start Date: {startDate.toString()}
            </Text>
          )}
          {endDate && (
            <Text style={{marginTop: 20}}>End Date: {endDate.toString()}</Text>
          )} */}
          </View>

          <View style={{marginTop: 15}}>
            <View style={{marginBottom: 12}}>
              <TextInput
                value={tripName}
                onChangeText={setTripName}
                style={{fontSize: 25, fontWeight: 'bold', color: '#c1c9d6'}}
                placeholderTextColor={'#c1c9d6'}
                placeholder="Trip name"
              />
            </View>

            <View style={{backgroundColor: '#c1c9d6', borderRadius: 20}}>
              <View
                style={{
                  padding: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 7,
                }}>
                <AntDesign name="calendar" size={30} />
                <Text style={{fontSize: 16, color: '#350505'}}>Itinerary</Text>
              </View>

              <View style={{borderColor: '#e0e0e0', borderWidth: 1}} />

              <View style={{padding: 15}}>
                <Pressable
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text style={{fontWeight: 'bold'}}>
                      {startDate ? format(startDate, 'EEEE') : 'Starts'}
                    </Text>
                    <Text style={{marginTop: 6, fontSize: 15}}>
                      {startDate ? formatDate(startDate) : 'Set Dates'}
                    </Text>
                  </View>

                  <AntDesign name="arrowright" size={20} color={'black'} />

                  <View>
                    <Text style={{fontWeight: 'bold'}}>
                      {endDate ? format(endDate, 'EEEE') : 'Ends'}
                    </Text>
                    <Text style={{marginTop: 6, fontSize: 15}}>
                      {endDate ? formatDate(endDate) : 'Set Dates'}
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default CreateTrip;
const styles = StyleSheet.create({});
