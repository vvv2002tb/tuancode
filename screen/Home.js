import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Button, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Home = ({route}) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
    
  const navigation = useNavigation();
  
  
  useEffect(() => {
    // Replace this with the actual API endpoint URL
    const apiUrl = 'http://kiemtra.stecom.vn:8888/api/ung-vien/LVM12345/get-all';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    const filteredData = data.filter((item) =>
      item.tenUngVien.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(filteredData);
  };


  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.fontnav}>Danh sách sinh viên</Text>
        <Icon name="add" size={30} color="black" onPress={() => navigation.navigate('AddScreen')}/>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhập tên để tìm kiếm"
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
        <Button
          title="Tìm kiếm"
          onPress={handleSearch}
        />
      </View>
      <FlatList
        data={searchText ? searchResults : data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.candidateContainer}>
            <Text style={styles.candidateName} onPress={() => navigation.navigate('StudentDetailScreen')}>Họ và tên: {item.tenUngVien}</Text>
            <Text style={styles.candidateName} onPress={() => navigation.navigate('StudentDetailScreen')}>Mssv: {item.maUngVien}</Text>
            <Text style={styles.candidateEmail} onPress={() => navigation.navigate('StudentDetailScreen')}>Email: {item.email}</Text>
          </View>
        )}
      />

    
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 270,
    borderWidth: 1,
    padding: 10,
  },
  candidateContainer: {
    marginBottom: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
  },
  candidateName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  candidateEmail: {
    fontSize: 16,
    color: 'blue',
  },
  candidateExperience: {
    fontSize: 16,
  },
  fontnav: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home;
