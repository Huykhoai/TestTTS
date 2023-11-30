import { Avatar, Layout, Text } from "@ui-kitten/components"
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import { Alert, StyleSheet } from "react-native";

const Profile=({navigation})=>{
    const handleLogout = () => {
        Alert.alert(
          'Thông báo',
          'Bạn muốn đăng xuất!',
          [
            {
              text: 'OK',
              onPress: () => {
                navigation.navigate('Home'); 
              },
            },
            {
                text:'Cancel'
            }
          ],
          { cancelable: false }
        );
      };
    return(
        <Layout style={styles.mainContainer}>
            <Avatar source={require('../../assets/bg_image_login.png')} style={styles.imageMain}/>
            <Layout style={styles.overlay}>
                <Text category="h1" style={styles.texttitle}>Thực Tập Sinh Mobile</Text>
                <Avatar size="giant" style={styles.image}
                         source={require('../../assets/avatar.jpg')}/>
            <Text style={styles.textname}>Họ tên: Nguyễn Quang Huy</Text> 
            <Text style={styles.textname}>Email: huycodon117@gmail.com</Text> 
            <Text style={styles.textname}>Địa chỉ: Hà Đông, Hà Nội</Text>
            <TouchableWithoutFeedback style={styles.button} onPress={()=>handleLogout()}>
                <Text style={styles.textbtn}>Đăng Xuất</Text>
                </TouchableWithoutFeedback>
            </Layout>
        </Layout>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    overlay: {
      position: 'absolute',
      top: '20%',
      width: '100%', 
      height: '100%',
      backgroundColor: 'white',
      borderRadius: 50,
       //ĐỘ mờ view
      
    },
    imageMain:{
        borderRadius:10,
        width:'100%',
        height:'100%'
    },
    image:{
        marginTop:20,
          alignSelf:'center',
          width:130,
          height:130,
          borderRadius:10
    },
    texttitle:{
        marginTop:5,
      alignSelf:"center",
      fontSize:20  
    },
    textname:{
        alignSelf:'center',
        fontSize:20,
    },
    button:{
        width:80,
        height:40,
        backgroundColor:'#CC5500',
        borderRadius:10,
        justifyContent:'center',
        alignSelf:'center',
        marginTop:30
    },
    textbtn:{
      alignSelf:'center',
       color:'white' 
    }
  });
export default Profile;