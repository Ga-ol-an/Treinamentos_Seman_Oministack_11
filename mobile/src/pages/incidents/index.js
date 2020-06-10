import React, { useState, useEffect } from 'react';

/* O expo já vem com os ícones prontos, dessa forma, é só importar  */
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';//é como se fosse o useHistory()
//serve pra mudaro link
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

//pra importar a logo voce nao rpecisa de colcoar aqueles @ e tal
//ele já esclhe o tamanho melhor.
//o tamanho é dfierente devido a densidade de pixels entre os telefones
import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToDetail(incident) {
    //esse segundo valor vai como se fosse pra um header da outra pagina
    navigation.navigate('Detail', { incident });
    //vai fazer aqueles efeitos de poder mandar pra lado e tals
  }

  //essa funcao fara a rolagem infinita
  async function loadIncidents() {
    //se o loading for true, voce nao vai pedir pra carregar mais
    if (loading) {
      return;
    }
    //se o total já está carregado e o numero de total for igual, voce ja carregou tudo
    if (total > 0 && incidents.length === total) {
      return;
    }

    //se veio ate aqui é porque tem mais casos
    setLoading(true);
    //agora eu mudo a pagina que estou
    const response = await api.get('incidents', {
      params: { page }
    });
    //esse objeto abaixo vai anexar dois veotres dentro de um
    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    //isso vai fazer pular a pagina
    setPage(page + 1);
   //e seto oading falso 
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);
 
  return (
    //lembra que vc deve importar o estilo pra cada view separadamente, pois nao ha
    //herança
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          {/* esse text em volta serve pra deixar negrito */}
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>


      {/* Sempre usar flatlist pra fazer as listangens. É melhor que ficar fazendo o view */}
      <FlatList
        data={incidents}//esse é o vetor de dados que vai montar a lsita
        style={styles.incidentList}//estilizacao do flatlist
        keyExtractor={incident => String(incident.id)}
        //igual a funcao map, a taglist precisa de uma key, que sera a keyStractor.
        //como ele deve ser unico, ele deve ser o id.

        // showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}//pra carregar mais incidents
        onEndReachedThreshold={0.2}//voce nao precisa chegar no final da lista pra carregar mais
        //(rolagem ifninita)
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pt-BR', { 
                style: 'currency', 
                currency: 'BRL' 
              }).format(incident.value)}
            </Text>

                {/* a tag abaixo deixa qualquer coisa clicavel, e depois de
                 clicado ele fica um pouco mais escuro */}
            <TouchableOpacity 
              style={styles.detailsButton} 
              onPress={() => navigateToDetail(incident)}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              {/* a maneira de se importar icones aqui é diferente, esse Feather foi importado la em cima,
              agora será colocado apenas o nome dele */}
              <Feather name="arrow-right" size={16} color="#E02041" />            
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
