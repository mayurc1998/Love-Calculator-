import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput,Appbar,Button} from 'react-native-paper';
import Displaylove from './components/Displaylove';
class App extends React.Component{
 state ={
   fname:'',
   sname:'',
   data:"Loading"
 }
submitit(){
    fetch("https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}",{
      headers:{"X-RapidAPI-Host":"love-calculator.p.rapidapi.com",
          "X-RapidAPI-Key":"0fd5684f34msh6e1aea70625d50fp1eb617jsne653b393f2fa"}
    }).then(data=>data.json())
    .then(data2=>{
        this.setState({
          result:data2
        })
    })

}
render()
{
  return (
    <View style={styles.container}>
  <Appbar.Header>
        <Appbar.Content
          title="Title"
          style={{alignItems:"center"}}
        />
      </Appbar.Header>
  
    <TextInput
    label='person1(male)'
    value={this.state.fname}
    onChangeText={text => this.setState({text})}
    
    />
    <TextInput
    label='person2(female)'
    value={this.state.fname}
    onChangeText={text => this.setState({text})}
    
    />
    <Button
    icon="mood"
    mode="contained"
    style={{margin:10}}
    onPress={this.submitit.bind(this)}>
      Calculate
    </Button>
    <Displaylove data={this.state.result}/>
  </View>
  );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
