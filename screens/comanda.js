import { StyleSheet, Text, View } from "react-native";
import Button from "../components/button";
import Input from "../components/input";

export default function Comanda({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Olá,</Text>
        <Text>Patrick</Text>
      </View>

      <View>
        <Input />
        <Button  onPress={() => navigation.navigate("Produtos")}>Confirmar</Button>
      </View>

      <Text>Digite o código da Comanda para iniciar um pedido</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFBFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
