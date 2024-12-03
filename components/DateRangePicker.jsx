import {useState} from 'react';
import {View, Text, Modal, Button, TouchableOpacity} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

const DateRangePicker = ({startDate, endDate, onChange, children}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <TouchableOpacity onPress={() => setIsModalVisible(true)}>
      {children}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)} // To handle the back press on Android
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View
            style={{backgroundColor: 'white', padding: 20, borderRadius: 10}}>
            <CalendarPicker
              allowRangeSelection={true}
              onDateChange={(date, type) => onChange(date, type)}
            />
            {/* Button to close the modal */}
            <Button title="Close" onPress={() => setIsModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};
export default DateRangePicker;
