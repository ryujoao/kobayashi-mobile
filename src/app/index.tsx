import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export default function LoginScreen(){
    return(
        <View>
            <View style={styles.header}>
                <Text style={styles.titulo}>Seja bem-vindo!</Text>
            </View>
            <View>
                <Text style={styles.label}>E-mail</Text>
                <TextInput style={styles.placeholder} placeholder="Seu e-mail"></TextInput>
            </View>
            <View>
                <Text style={styles.label}>Senha</Text>
                <TextInput style={styles.placeholder} placeholder="Sua senha" secureTextEntry></TextInput>
            </View>
            <Link href={"/cadastro/page"} asChild>
            <TouchableOpacity style={styles.criar}>
            <Text style={styles.criarText}>Não tem uma conta? Cadastre-se</Text>
            </TouchableOpacity>
            </Link>
            <Link href={"/home/page"} asChild>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.botaoText}>Entrar</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}