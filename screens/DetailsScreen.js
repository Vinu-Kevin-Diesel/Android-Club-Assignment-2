import React from 'react';
import {
    Text,
    Button,
    View,
    StyleSheet
  } from 'react-native';

  const DetailsScreen = ({navigation}) => {
    return(
      <View style={styles.container}>
      <Button
      color='#70E20E'
      title="Go to Home screen"
      onPress={() => navigation.navigate("Home")}
      />
      <Button
       color='#70E20E'
        title="Go to Profile screen"
        onPress={() => navigation.navigate("Profile")}
      />
      </View>
    );
    };

    export default DetailsScreen;

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#75ED84',
            flex:1, 
            alignItems: 'center', 
            justifyContent: 'center' 
        },
    });