import { Stack } from "expo-router"

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen   
                name="index"
                options={{ headerShown: false }}
            />
             <Stack.Screen   
                name="login"
                options={{ title: "Login" }}
            />
             <Stack.Screen   
                name="singup"
                options={{ title: "Cadastrar" }}
            />
            <Stack.Screen   
                name="(tabs)"
                options={{ headerShown: false }}
            />
        </Stack>
    )
}