import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function CadastroPage() {
  return (
    <View>
      <View>
        <Text>CPF</Text>
        <TextInput placeholder="Seu CPF"></TextInput>
      </View>
      <View>
        <Text>Nome</Text>
        <TextInput placeholder="Seu nome"></TextInput>
      </View>
      <View>
        <Text>E-mail</Text>
        <TextInput placeholder="Seu e-mail"></TextInput>
      </View>
      <View>
        <Text>Senha</Text>
        <TextInput placeholder="Sua senha" secureTextEntry></TextInput>
      </View>
      <View>
        <Text>Data de Nascimento</Text>
        <TextInput placeholder="Sua data de nascimento"></TextInput>
      </View>
      <Link href={"/home/page"} asChild>
        <TouchableOpacity>
          <Text>Enviar</Text>
        </TouchableOpacity>
      </Link>
      
    </View>
  );
}
