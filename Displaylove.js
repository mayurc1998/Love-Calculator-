import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Displaylove = ()=>{
    console.log(prop)

   if(prop.data=="Loading")
   {
           return <Text>wait it is loading </Text>
   }
   if(prop.data.message){
      return <Text>Something Went Wrong</Text>
   }
   
   
   
   else{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{prop.data.percentage}</Text>
            <Text style={styles.text}>{prop.data.result}</Text>
        </View>
    )
}
}
export default Displaylove;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',

    },
    text:{
        fontSize:30,
        textAliign:"center"
    }
  });