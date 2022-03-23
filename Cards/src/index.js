import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Button, TextInput} from "react-native-paper";
import TextItem from '../components/text-item/text-item';
import {Component} from "react";
import Cards from '../components/cards/cards';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import Menu from '../components/menu/menu';


export default function App(){

  const [name, setName] = useState();
  const obj = [
    {title: "Math", question: "2 + 2", answer: "4", id: 1},
    {title: "Math", question: "16 x 2", answer: "32", id: 2},

  ]

  const save = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("Demon", jsonValue)
    } catch (err) {
      alert(err);
    }
  }


  const load = async () => {
    try {
      let name = await AsyncStorage.getItem("Demon");

      if (name !== null) {
        setName(name);
      }

    } catch (err) {
      alert(err);
    }
  }


  const remove = async () => {
    try {
      console.log(name);
      await AsyncStorage.removeItem("Demon");
      console.log(name);

    } catch (err) {
      alert(err);
    } finally {
      setName("");
    }
  }

  useEffect(() => {
    load();
  }, [])

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>{name}</Text>
        <Button onPress={() => remove()}>I`m remove button</Button>
        <TextInput onChangeText={text => setName(text)}/>
        <Button onPress={() => save(obj)} >I`m Read Button save</Button>

        <Menu/>    

      </View>
    </ScrollView>
  );


}
    

      // const storeData = async (value) => {
      //   try {
      //     await AsyncStorage.setItem('Demon', value)
      //   } catch (e) {
      //     // saving error
      //   }
      // }

    

    
      // const getData = async () => {
      //   try {
      //     const value = await AsyncStorage.getItem('Demon')
      //     if(value !== null) {
      //       console.log(value, "I`m get value");
      //     }
      //   } catch(e) {
      //     // error reading value
      //   }
      // }
    

  


  






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

