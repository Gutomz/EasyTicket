module.exports = function (){

  this.users = [];
  this.events = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Event 1',
      date: '27/04/20',
      time: '16:00',
      locale: 'Campinas',
      address: 'Casa de Eventos Campinas',
      description: 'Uma abobcaobocvaboobobaobvoabvobaoivbioabvoabov aobn voabnovbaobvoabnvoabnovoaibovhaovchaohcoahcoahsocihasiohcoiashcohasoichaosihcoiashocihasoihcoiashcoiahcoihasoichaoishcoiahochabhcaghcvuagbuvgauçagcvuagvuckagçukksgcuksagcuaguigcuga gusgc uasg uigu gpa cuiag cuiga uga uia gfuiag uif gaiug uiag uig aiug uiag udigauifg ausiguaig fua ug cauig aupiguiasgcfuigasiu cfdsg fuidsg fupgsad ufvpgas vuigsdapfuigds puif pasg fup gsadfuisd gfuip gfuip gasdufgasipfauipgfuiag gdiwgbd ugwuigauifdag iufuia gfaug fuag ufigauicgaui gfuagf lagfu agl fgaui gau gfuagfu ia glfga uiguaig fialgufigauilfuiagfualg fuag fugauilfgaulgauu g ilgfuiag fuag uailg uagauig algufagug lafga ugaulig aulig aulga fuaguiagliaufguafi gafliug aiuga afug afuigauiag aufgu g gaufgafulgaugluafgafu gaualg alua aul au aualaug aul',
      price: 20,
      imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Event 2',
      date: '15/04/20',
      time: '17:00',
      locale: 'Campinas',
      address: 'Casa de Eventos Campinas',
      description: '',
      price: 20,
      imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Event 3',
      date: '24/04/20',
      time: '14:00',
      locale: 'Campinas',
      description: '',
      price: 20,
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
      price: 20,
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
      price: 20,
      imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
    },
    {
      id: '58694a0f-3da1-4as1f-bd96-145571e29d72',
      title: 'Event 6',
      date: '05/05/20',
      time: '17:00',
      locale: 'Campinas',
      address: 'Casa de Eventos Campinas',
      description: '',
      price: 20,
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
      locale: 'Campinas',
      address: 'Casa de Eventos Campinas',
      description: '',
      price: 20,
      imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
    },
  ];
  this.tickets = [];

  this.addUser = function (data){
    const { name, email, rg, locale, password} = data;

    let id = this.users.length;

    if(this.users.find(item => item.email === email)) return null;

    let newUser = {
      id,
      name,
      email,
      rg,
      locale,
      password,
      likedEvents: [],
      tickets: [],
    }

    this.users.push(newUser);

    return newUser;
  }

  this.addEvent = function (data){
    const { imageLink, title, date, time, price, locale, address, description } = data;

    let id = this.events.length;

    let newEvent = {
      id,
      title,
      date,
      time,
      locale,
      address,
      price,
      description,
      imageLink,
    }

    this.events.push(newEvent);

    return newEvent;
  }

  this.addTickets = function (data){
    const { eventID, userName, userDocument, buyDate, buyTime, userID } = data;

    let id = this.tickets.length;

    let newTicket = {
      id,
      eventID,
      userName,
      userDocument,
      buyDate,
      buyTime
    }

    this.tickets.push(newTicket);
    this.users.find(item => item.id === userID).tickets.push(id);

    return newTicket;

  }

  this.setLikeEvent = function (data){
    const { userID, eventID, isLike } = data;

    let user = this.users.find( item => item.id === userID );

    if(isLike) user.likedEvents.push(eventID);
    else user.likedEvents.splice(eventID, 1);

    return user.likedEvents;
  }

  this.getEventsByLocale = function (data){
    const { locale } = data;

    let eventList = this.events.filter(item => item.locale === locale);

    return eventList;
  }

  this.getEventsByLike = function (data){
    const { userID } = data;
    let user = this.users.find(item => item.id === userID);
    let eventList = this.events.filter(item => user.likedEvents.includes(item.id));

    return eventList;
  }

  this.login = function (data){
    const { email, password } = data;

    let user = this.users.find(item => item.email === email);

    if(!user) return { logged: false }

    if(user.password !== password) return { logged : false }

    return { logged : true, userID: user.id }
  }

}