import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

/* Voce pode usar a documentacao pra fazer tudo

docs.expo.io documentação do expo

no caso do react native, voce usa o react navigaition, depois vai la na pagina dele e instala
 */
/* Existem muitas maneiras diferentes de se navegar em app */

const AppStack = createStackNavigator();

import Incidents from "./pages/Incidents";
import Detail from "./pages/Detail";

export default function Routes() {
    return (
        <NavigationContainer>{/* é tipo o browser router */}
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                      {/* Esse header shown vai fazer parar de aparecer o cabeçalho automatico */}
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
