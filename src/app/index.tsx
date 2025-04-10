import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen(){
    return(
        <View>
            <View>
                <Text>E-mail</Text>
                <TextInput placeholder="Seu e-mail"></TextInput>
            </View>
            <View>
                <Text>Senha</Text>
                <TextInput placeholder="Sua senha" secureTextEntry></TextInput>
            </View>
            <Link href={"/home/page"} asChild>
                <TouchableOpacity>
                    <Text>Enviar</Text>
                </TouchableOpacity>
            </Link>
            <Link href={"/cadastro/page"}><Text>Crie sua conta</Text></Link>
        </View>
    )
}