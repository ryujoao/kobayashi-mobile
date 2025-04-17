import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function CadastroPage() {
  return (
    <View>
      <View style={styles.header}>
      <Text style={styles.titulo}>Crie sua conta</Text>
      </View>
      <View>
        <Text style={styles.label} >CPF:</Text>
        <TextInput style={styles.placeholder} placeholder="Seu CPF"></TextInput>
      </View>
      <View>
        <Text style={styles.label}>Nome:</Text>
        <TextInput style={styles.placeholder} placeholder="Seu nome"></TextInput>
      </View>
      <View>
        <Text style={styles.label}>E-mail:</Text>
        <TextInput style={styles.placeholder} placeholder="Seu e-mail"></TextInput>
      </View>
      <View>
        <Text style={styles.label}>Senha:</Text>
        <TextInput style={styles.placeholder} placeholder="Sua senha" secureTextEntry></TextInput>
      </View>
      <View>
        <Text style={styles.label}>Data de Nascimento:</Text>
        <TextInput style={styles.placeholder} placeholder="Sua data de nascimento"></TextInput>
      </View>
      <View>
        <Text style={styles.label}>Endereço:</Text>
        <TextInput style={styles.placeholder} placeholder="Seu endereço"></TextInput>
      </View>
      <Link href={"/home/page"} asChild>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoText}>Cadastrar-se</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
