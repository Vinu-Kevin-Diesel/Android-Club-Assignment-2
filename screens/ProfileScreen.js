import React from 'react';
import {
    Text,
    Button,
    View,
    StyleSheet
  } from 'react-native';

  const ProfileScreen = ({navigation}) => {
    return(
      <View style={styles.container}>
  
        <Button
        color='#1F04EE'
        title="Go to Details "
        onPress={() => navigation.navigate("Details")}
      />
      <Button
      color='#1F04EE'
        title="Go to Home screen"
        onPress={() => navigation.navigate("Home")}
      />
      </View>
    );
    };

    export default ProfileScreen;

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#4F4FE4',
            flex:1, 
            alignItems: 'center', 
            justifyContent: 'center' 
        },
    });