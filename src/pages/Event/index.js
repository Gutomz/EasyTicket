import React, { useEffect, useState }from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Container, ScrollContainer, ClickableIcon, Image, Title, Subtitle, H2, H3, Infos, Footer, NumericContainer, Clickable, Number, Price, Buy } from './styles';

export default function Event({ navigation, route }) {

  const [imageLink, setImageLink] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [iconName, setIconName] = useState('hearto');
  const [showPrice, setShowPrice] = useState(0);

  const { eventID, buy } = route.params;

  useEffect(()=>{
    async function loadEvent(){
      //load event from backend
      let item = DATA.find(item => item.id === eventID);

      setImageLink(item.imageLink);
      setTitle(item.title);
      setSubtitle(item.date + " às " + item.time);
      setLocation(item.locale);
      setAddress(item.address);
      setDescription(item.description);
      setPrice(item.price);
      setShowPrice(item.price*quantity);

    }

    loadEvent();
  }, []);

  function iconClick(){
    //comunication with backend to set liked or not

    setIconName(iconName === 'heart' ? 'hearto' : 'heart');
  }

  function quantityChange(value){
    setShowPrice(price*(quantity+value));
    setQuantity(quantity+value);
  }

  return (
    <Container  enabled>
      <ScrollContainer>
        <Image source={ imageLink !== '' ? {uri: imageLink} : null}/>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Infos>
          <H2>Localização</H2>
          <H3>{location} - {address}</H3>
          <H2>Descrição</H2>
          <H3>{description ? description : "Nenhuma Descrição"}</H3>
        </Infos>
        <ClickableIcon onPress={iconClick}>
          <AntDesign name={iconName} size={28} color="#ff40c9"/>
        </ClickableIcon>
      </ScrollContainer>
      

      { buy ? 
        <Footer>
          <NumericContainer>
            <Clickable onPress={() => {(quantity > 1) ? quantityChange(-1) : null}}>
              <AntDesign name={'minus'} size={26} color="black"/>
            </Clickable>
            <Number>{quantity}</Number>
            <Clickable onPress={() => {(quantity < 999) ? quantityChange(+1) : null}} >
              <AntDesign name={'plus'} size={26} color="black"/>
            </Clickable>
          </NumericContainer>
          <Price>R$ {(showPrice).toFixed(2)}</Price>
          <Clickable onPress={() => navigation.navigate('Checkout', { eventID, quantity, showPrice })}>
            <Buy>COMPRAR</Buy>
          </Clickable>

        </Footer>
      : null}
    </Container>
  );
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Event 1',
    date: '27/04/20',
    time: '16:00',
    locale: 'Campinas',
    address: 'Casa de Eventos Campinas',
    description: 'Uma abobcaobocvaboobobaobvoabvobaoivbioabvoabov aobn voabnovbaobvoabnvoabnovoaibovhaovchaohcoahcoahsocihasiohcoiashcohasoichaosihcoiashocihasoihcoiashcoiahcoihasoichaoishcoiahochabhcaghcvuagbuvgauçagcvuagvuckagçukksgcuksagcuaguigcuga gusgc uasg uigu gpa cuiag cuiga uga uia gfuiag uif gaiug uiag uig aiug uiag udigauifg ausiguaig fua ug cauig aupiguiasgcfuigasiu cfdsg fuidsg fupgsad ufvpgas vuigsdapfuigds puif pasg fup gsadfuisd gfuip gfuip gasdufgasipfauipgfuiag gdiwgbd ugwuigauifdag iufuia gfaug fuag ufigauicgaui gfuagf lagfu agl fgaui gau gfuagfu ia glfga uiguaig fialgufigauilfuiagfualg fuag fugauilfgaulgauu g ilgfuiag fuag uailg uagauig algufagug lafga ugaulig aulig aulga fuaguiagliaufguafi gafliug aiuga afug afuigauiag aufgu g gaufgafulgaugluafgafu gaualg alua aul au aualaug aul',
    price: 50,
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Event 2',
    date: '15/04/20',
    time: '17:00',
    locale: 'São Paulo',
    address: 'Casa de Eventos São Paulo',
    description: '',
    price: 10,
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Event 3',
    date: '24/04/20',
    time: '14:00',
    locale: 'Campinas',
    description: '',
    price: 25,
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
  {
    id: '58694a0f-3da1-471f-bcz-145571e29d72',
    title: 'Event 4',
    date: '27/07/20',
    time: '19:00',
    locale: 'Campinas',
    address: 'Casa de Eventos Campinas',
    description: '',
    price: 25.50,
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
  {
    id: '58694a0f-3da1-471f-vs96-145571e29d72',
    title: 'Event 5',
    date: '06/08/20',
    time: '08:00',
    locale: 'Campinas',
    address: 'Casa de Eventos Campinas',
    description: '',
    price: 100,
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
  {
    id: '58694a0f-3da1-4as1f-bd96-145571e29d72',
    title: 'Event 6',
    date: '05/05/20',
    time: '17:00',
    locale: 'São Paulo',
    address: 'Casa de Eventos São Paulo',
    description: '',
    price: 35,
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
  {
    id: '58dsf-3da1-471f-bcz-145571e29d72',
    title: 'Event 7',
    date: '10/04/20',
    time: '09:00',
    locale: 'Campinas',
    address: 'Casa de Eventos Campinas',
    description: '',
    price: 20,
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
  {
    id: '58694as0f-3da1-471f-vs96-145571e29d72',
    title: 'Event 8',
    date: '22/05/20',
    time: '22:00',
    locale: 'Campinas',
    address: 'Casa de Eventos Campinas',
    description: '',
    price: 20,
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
  {
    id: '58da0f-3da1-471f-vs96-145571e29d72',
    title: 'Event 9',
    date: '03/10/20',
    time: '20:00',
    locale: 'São Paulo',
    address: 'Casa de Eventos São Paulo',
    description: '',
    price: 40,
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
];
