import React, { Component } from 'react';
import { 
    StyleSheet, 
    TextInput, 
    Text, 
    Button, 
    View 
  } from 'react-native';
import SearchBookDetail from './SearchBookDetail';

const ViewIsbn = ({ changeMode }) => {
    const handleSearch = async (event) => {
        event.preventDefault();

        const dataBookDetail = await getBookDetail();
        changeMode('', dataBookDetail);
    };
    return (
    <View style={styles.container}>
    <Text>ISBN:</Text>
    <TextInput 
        value={this.state.isbn} 
        onChangeText={(value) => this.setState({isbn: value})} />
    <Button 
        title="本の詳細を検索" 
        onPress={this.handleSearch} />
    </View>
        
    );
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
}
});

export default App;