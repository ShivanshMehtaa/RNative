import { StyleSheet, Text, View, Button } from "react-native";

const UserData = () => {
  return (
    <View>
      <Text style={styles.text}>
        Information - 19yrs, Shivansh
      </Text>
      <Text style={styles.text}>Email - test@gmail.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: "red",
      fontSize: 20,
    },
    button: {
      color: "yellow",
      borderRadius: 30,
      border: "2pxsolid red",
    },
  });


export default UserData ;
