import React, { useState } from "react";
import { Layout, Button, Text, Input} from "@ui-kitten/components";
import { API_WORK } from "../helper/db";
import { StyleSheet } from "react-native";

const Addproduct=({navigation})=>{

    const [tieude, setTieude] = useState('');
    const [mota, setMota] = useState('');
    const [thoihan, setThoihan] = useState('');

    const onSave=()=>{
        const newProduct={
            tieude:tieude,
            mota:mota,
            thoihan:thoihan
        }
        fetch(API_WORK, {
            method:"POST",
            body:JSON.stringify(newProduct),
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then((nav)=> navigation.navigate("Productlist"))
        .catch((err)=> console.log(err));
        setTieude("");
        setMota("");
        setThoihan("");
    }
    return(
        <Layout style={styles.container}>
            <Text category="h3" style={styles.title}> Thêm TO DO</Text>
            <Input
            placeholder="Nhập tiêu đề"
            value={tieude}
            onChangeText={(text)=> setTieude(text)}
            style={styles.input}/>
             <Input
            placeholder="Nhập mô tả"
            value={mota}
            onChangeText={(text)=> setMota(text)}
            style={styles.input}/>
               <Input
            placeholder="Nhập thời hạn"
            value={thoihan}
            onChangeText={(text)=> setThoihan(text)}
            style={styles.input}/>
            <Button onPress={onSave}>Submit</Button>
        </Layout>
    )
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      marginBottom: 20,
    },
    input: {
      marginBottom: 10,
    },
  });
export default Addproduct;
