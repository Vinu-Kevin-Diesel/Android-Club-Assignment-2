import React from 'react';
import {
    Text,
    Button,
    View,
    StyleSheet
  } from 'react-native';

  const HomeScreen = ({navigation}) => {
    return(
      <View style={styles.container}>
        <Button
        color='#D60E1E'
          title="Go to Details screen"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    );
    };

    export default HomeScreen;

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#DE4F50',
            flex:1, 
            alignItems: 'center', 
            justifyContent: 'center' 
        },
    });