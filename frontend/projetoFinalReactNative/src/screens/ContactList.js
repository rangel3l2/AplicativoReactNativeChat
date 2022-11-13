import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, {useEffect, useState} from 'react';
import * as Contacts from 'expo-contacts';
import Contact from '../components/Contact/Contact'


const ContactList = () => {
  const [data, setData] = useState({})
   useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Birthday, Contacts.Fields.Emails, Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers, Contacts.Fields.ID], 
        });

        if (data.length > 0) {
          const contact = data;
          setData(contact)
          
        }
      }
    })();
  }, []);
  console.log(data)
  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };
  const renderItem = ({item, index}) => {
    return <Contact contact={item} />;
  };

  return (
    
    //   <FlatList
    //   data={data}
    //   renderItem={renderItem}
    //   keyExtractor={}
    //   style={styles.container}
    // />
    <></>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ContactList