import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView} from 'react-native';
import * as firebase from 'firebase' ;
export default class LoginScreen extends React.Component{
  constructor(){
    super();
    this.state={
      emailId:'',
      password:''
    }
  }
  
login=async(email,password)=>{
  if(email&&password){
    try{
      const response =await firebase.auth().signInWithEmailAndPassword(email,password)
      if(response){
        this.props.navigation.navigate('TabNavigator')
      }
    }
    catch(error){
      switch(error.code){
        case 'auth/user-not-found':
        alert("User doesn't exists.")
        this.setState=({
      emailId:'',
      password:''
    })
        break
        case 'auth/invalid-email':
        alert("Incorrect Email.")
        this.setState=({
      emailId:'',
      password:''
    })
        break
      }
    }
  }
  else{
    alert("Enter correct email and password combo.")
  }
}

  render(){
    return(
      <KeyboardAvoidingView style={styles.keyBoard}>
      <View>
      <Image
              source={require('../assets/1.png')}
              style={{ width: 800, height: 400 }}
            />
      <Text style={styles.text}>Bed Time Stories</Text>
      </View>
      <View>
      <TextInput style={styles.loginBox} placeholder="abc@example.com" keyboardType='email-address'
      onChangeText={(text)=>{
        this.setState({
          emailId:text,
        })
      }}>

      </TextInput>
      <TextInput style={styles.loginBox} secureTextEntry = {true} placeholder="enter Password" onChangeText={     (text)=>{ this.setState({ password: text }) }} />
      </View>
      <View>
      <TouchableOpacity style={styles.button} onPress={()=>(this.login(this.state.emailId,this.state.password))}>
      <Text style={{textAlign:'center'}}>Login</Text>
      </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    )
  }
}
const styles=StyleSheet.create({
  loginBox:{
  width:300,
  height:40,
  borderWidth:1.5,
  fontSize:20,
  margin:10,
  paddingLeft:10,
  },
  keyBoard:{
    alignItems:'center',
    marginTop:20,
  },
  text:{
    textAlign:'center',
    fontSize:30,
  },
  button:{
    height:30,
    width:90,
    borderWidth:1,
    marginTop:20,
    paddingTop:5,
    borderRadius:7
  }
})