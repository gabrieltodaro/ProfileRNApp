import React, {useCallback} from 'react';
import {Linking, Text, useColorScheme, View, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Styles from './styles';
import OpenURLButton from '../../utils/OpenURLButton';

import type {PropsWithChildren} from 'react';
import LinkedinImage from "../../assets/linkedin-logo.svg";
import InstagramImage from "../../assets/instagram-logo.svg";
import TwitterImage from "../../assets/twitter-logo.svg";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const handleLinkedInPress = async () => {
  const url = "https://www.linkedin.com/in/gabrieltodaro/"
  const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    }
};

const handleInstagramPress = async () => {
  const url = "https://www.instagram.com/gabztodaro/"
  const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    }
};

const handleTwitterPress = async () => {
  const url = "https://twitter.com/gabztodaro"
  const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    }
};


function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={Styles.sectionContainer}>
      <Text
        style={[
          Styles.sectionTitle,
          {color: isDarkMode ? Colors.white : Colors.black},
        ]}>
        {title}
      </Text>
      <Text
        style={[
          Styles.sectionDescription,
          {color: isDarkMode ? Colors.light : Colors.dark},
        ]}>
        {children}
      </Text>
    </View>
  );
}

function Body(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
 

  return (
    <View>
      <Section title="Passado até aqui...">
        <Text>
          Sou um desenvolvedor iOS há quase 10 anos e estou aprendendo novas
          coisas atualmente.{'\n'}
          Moro em Campinas há 5 anos, sou casado e estou à beira de ser pai pela
          primeira vez. A ansiedade está a mil!{'\n'}
          Nascido e criado no interior de São Paulo, a tecnologia móvel é a
          minha paixão e um dos motivos por eu batalhar e conseguir mudar de
          vida.
        </Text>
      </Section>
      <Section title="Presente onde tudo acontece">
        <Text>
          Atualmente trabalho em uma empresa estadunidense chamada Podium.{'\n'}
          Esta empresa é focada em ajudar as pequenas e médias empresas com
          problemas impactantes de seu negócio, como manter contato com seus
          clientes, receber seus pagamentos e manter salvo as informações dos
          mesmos.
        </Text>
        <View style={Styles.bodyButton}>
          <OpenURLButton url={'https://podium.com'}>
            Conheça a Podium
          </OpenURLButton>
        </View>
      </Section>
      <Section title="Futuro">
        <Text>
          Também estou montando uma empresa para desenvolvimento de aplicativos
          e sites, chamada Gapps.Tech.{'\n'}A intenção é entregar soluções que
          ajudem as pessoas a desfrutarem melhor de sua vida, gastando menos
          tempo em computadores e afins... ou somente sendo mais produtivo no
          tempo que necessitar.
          <View style={Styles.bodyButton}>
            <OpenURLButton url={'https://gapps.tech'}>
              Conheça a Gapps.Tech
            </OpenURLButton>
          </View>
        </Text>
      </Section>
      <View style={Styles.logoContainer}>
      <TouchableOpacity onPress={handleLinkedInPress}>
          <LinkedinImage width="100" height="100"/> 
        </TouchableOpacity>

        <TouchableOpacity onPress={handleInstagramPress}>
          <InstagramImage width="100" height="100"/> 
        </TouchableOpacity>

        <TouchableOpacity onPress={handleTwitterPress}>
          <TwitterImage width="100" height="100"/> 
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Body;
