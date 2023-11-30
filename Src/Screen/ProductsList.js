import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Layout, Text,List} from '@ui-kitten/components';
import { API_WORK } from '../helper/db';
import { useIsFocused } from '@react-navigation/native';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';

 
const ProductList =({navigation})=>{
   const [list,setList] = useState([]);
   const isFocus = useIsFocused();
   const getData=()=>{
    fetch(API_WORK)
    .then((res)=> res.json())
    .then((data)=> setList(data))
    .catch((err)=> console.log(err))
   }
   useEffect(()=>{
    getData();
   }, [isFocus])
    const renderItem=({item})=>(
         <Layout style={styles.container}>
            <Text style={styles.textId}>ID: {item.id}</Text>
            <Text>Tiêu đề: {item.tieude}</Text>
            <Text>Mô tả: {item.mota}</Text>
            <Text>thời hạn: {item.thoihan}</Text>
         </Layout>
    )
  return (
    <ScrollView>
       <Layout>
      <Text category='h1'
      status='control'> Danh Sách To Do</Text>
      <TouchableWithoutFeedback 
      style={styles.button}
      status='control'
       size='giant'
       onPress={()=> navigation.navigate("Addproduct")}>
        <Text style={styles.textbtn}>Thêm mới</Text></TouchableWithoutFeedback>
         <List
        data={list}
        renderItem={renderItem}
        numColumns={1}
        keyExtractor={(item)=> `${item.id}`}/>
     </Layout>
    </ScrollView>
    
       
    
  )
}
const styles = StyleSheet.create({
    container: {
      borderWidth:1,
      borderRadius:20,
      backgroundColor:'#00FFFF',
      padding:5 
    },
    textId: {
      color:'#FF0000',
      fontWeight:'bold'
    },
    button:{
      width:80,
      height:40,
      backgroundColor:'#CC5500',
      borderRadius:10,
      justifyContent:'center',
      alignSelf:'flex-end',
      margin:10
  },
  textbtn:{
    alignSelf:'center',
     color:'white' 
  }
  });
  export default ProductList;