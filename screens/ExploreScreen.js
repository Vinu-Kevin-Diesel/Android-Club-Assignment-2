import React from 'react';
import {
    Text,
    Button,
    View,
    StyleSheet
  } from 'react-native';

  const ExploreScreen = ({navigation}) => {
    return(
      <View style={styles.container}>
  
        <Button
        color='#F900F1'
        title="Go to Details screen"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
      color='#F900F1'
        title="Go to Home screen"
        onPress={() => navigation.navigate("Home")}
      />
      </View>
    );
    };

    export default ExploreScreen;

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#F47BF3',
            flex:1, 
            alignItems: 'center', 
            justifyContent: 'center' 
        },
    });