import { useState } from "react";
import searchIcon from "../assets/search.svg"; // Assuming this is your search icon
import { Link } from "react-router-dom";

const states = [
  "Abuja",
  "Abia",
  "Adamawa",
  "Akwa-Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross-River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

const markets = {
  Abia: [
    { name: "Ariaria International Market (Aba)", img: "/path/to/ariaria.jpg" },
    { name: "Umuahia Main Market (Umuahia)", img: "/path/to/umuahia-main.jpg" },
    { name: "Ubakala Market (Ubakala)", img: "/path/to/ubakala.jpg" },
    {
      name: "Aba International Market (Aba)",
      img: "/path/to/aba-international.jpg",
    },
    { name: "Ohia Market (Ohia)", img: "/path/to/ohia.jpg" },
    { name: "Osisioma Market (Osisioma)", img: "/path/to/osisioma.jpg" },
    { name: "Omoba Market (Omoba)", img: "/path/to/omoba.jpg" },
    {
      name: "Isiala Oboro Market (Isiala Oboro)",
      img: "/path/to/isiala-oboro.jpg",
    },
    { name: "Umuike Market (Umuike)", img: "/path/to/umuike.jpg" },
    { name: "Akwa Ibom Market (Aba)", img: "/path/to/akwa-ibom.jpg" },
    { name: "Eziukwu Market (Aba)", img: "/path/to/eziukwu.jpg" },
    { name: "Ogbuka Market (Umuahia)", img: "/path/to/ogbuka.jpg" },
    { name: "Olokoro Market (Olokoro)", img: "/path/to/olokoro.jpg" },
    { name: "Ikwuano Market (Ikwuano)", img: "/path/to/ikwuano.jpg" },
    { name: "Okeikpe Market (Okeikpe)", img: "/path/to/okeikpe.jpg" },
    { name: "Uzuakoli Market (Uzuakoli)", img: "/path/to/uzuakoli.jpg" },
    { name: "Alaoji Market (Alaoji)", img: "/path/to/alaoji.jpg" },
    { name: "Obikabia Market (Obikabia)", img: "/path/to/obikabia.jpg" },
    { name: "Umuocham Market (Umuocham)", img: "/path/to/umuocham.jpg" },
    { name: "Nkwoegwu Market (Nkwoegwu)", img: "/path/to/nkwoegwu.jpg" },
    { name: "Umuosu Market (Umuosu)", img: "/path/to/umuosu.jpg" },
    { name: "Oriendu Market (Oriendu)", img: "/path/to/oriendu.jpg" },
    { name: "Ndiegoro Market (Ndiegoro)", img: "/path/to/ndiegoro.jpg" },
  ],

  "Akwa-Ibom": [
    { name: "Abak Main Market", img: "/path/to/abak.jpg" },
    { name: "Akwa Ibom Plaza", img: "/path/to/akwa-ibom-plaza.jpg" },
    { name: "Eket Fish Market", img: "/path/to/eket-fish.jpg" },
    { name: "Eket Main Market", img: "/path/to/eket-main.jpg" },
    { name: "Ewet Housing Estate Market", img: "/path/to/ewet-housing.jpg" },
    {
      name: "Ikot Ekpene Fabric Market",
      img: "/path/to/ikot-ekpene-fabric.jpg",
    },
    {
      name: "Ikot Ekpene Main Market (Mbut Obio)",
      img: "/path/to/ikot-ekpene-main.jpg",
    },
    { name: "Itam Market", img: "/path/to/itam.jpg" },
    { name: "Oron Fish Market", img: "/path/to/oron-fish.jpg" },
    { name: "Oron Main Market", img: "/path/to/oron-main.jpg" },
    {
      name: "Uyo Main Market (Uyo Central Market)",
      img: "/path/to/uyo-main.jpg",
    },
    { name: "Urua Ekpa Market", img: "/path/to/urua-ekpa.jpg" },
    { name: "Urua Nsit Market", img: "/path/to/urua-nsit.jpg" },
    { name: "Urua Akpan Ete Market", img: "/path/to/urua-akpan-ete.jpg" },
    { name: "Urua Abak Market", img: "/path/to/urua-abak.jpg" },
    { name: "Ikot Ibritam Market", img: "/path/to/ikot-ibritam.jpg" },
    { name: "Ikot Abasi Main Market", img: "/path/to/ikot-abasi-main.jpg" },
    { name: "Urua Ikot Abasi Market", img: "/path/to/urua-ikot-abasi.jpg" },
    { name: "Etim Ekpo Market", img: "/path/to/etim-ekpo.jpg" },
    { name: "Ikono Main Market", img: "/path/to/ikono-main.jpg" },
    { name: "Urua Ikono Market", img: "/path/to/urua-ikono.jpg" },
    { name: "Nto Edino Market", img: "/path/to/nto-edino.jpg" },
    { name: "Etinan Main Market", img: "/path/to/etinan-main.jpg" },
    { name: "Urua Etinan Market", img: "/path/to/urua-etinan.jpg" },
    { name: "Ikot Akpan Market", img: "/path/to/ikot-akpan.jpg" },
  ],

  Anambra: [
    { name: "Afor Aguleri Market", img: "/path/to/afor-aguleri.jpg" },
    { name: "Afor Igwe Market", img: "/path/to/afor-igwe.jpg" },
    { name: "Amaenyi Market", img: "/path/to/amaenyi.jpg" },
    { name: "Bridgehead Market", img: "/path/to/bridgehead.jpg" },
    { name: "Eke Amaobi Market", img: "/path/to/eke-amaobi.jpg" },
    { name: "Eke Awka Market", img: "/path/to/eke-awka.jpg" },
    { name: "Eke Ekwulobia Market", img: "/path/to/eke-ekwulobia.jpg" },
    { name: "Eke Market (Aguleri)", img: "/path/to/eke-aguleri.jpg" },
    { name: "Electronics Market", img: "/path/to/electronics-market.jpg" },
    { name: "Nkwo Ekwulobia Market", img: "/path/to/nkwo-ekwulobia.jpg" },
    { name: "Nkwo Nnewi Market", img: "/path/to/nkwo-nnewi.jpg" },
    { name: "Nkwo Ogbe Market", img: "/path/to/nkwo-ogbe.jpg" },
    { name: "Nkwelle Market", img: "/path/to/nkwelle.jpg" },
    { name: "Nnewi Spare Parts Market", img: "/path/to/nnewi-spare-parts.jpg" },
    { name: "Ochanja Market", img: "/path/to/ochanja.jpg" },
    { name: "Onitsha Main Market", img: "/path/to/onitsha-main.jpg" },
    { name: "Relief Market", img: "/path/to/relief.jpg" },
    { name: "Uru Market", img: "/path/to/uru.jpg" },
  ],
  Bauchi: [
    { name: "Alkaleri Central Market", img: "/path/to/alkaleri-central.jpg" },
    { name: "Badara Market", img: "/path/to/badara.jpg" },
    { name: "Bagel Market", img: "/path/to/bagel.jpg" },
    { name: "Bakin Kura Market", img: "/path/to/bakin-kura.jpg" },
    { name: "Bogoro Market", img: "/path/to/bogoro.jpg" },
    { name: "Central Market Bauchi", img: "/path/to/central-bauchi.jpg" },
    { name: "Dagu Market", img: "/path/to/dagu.jpg" },
    { name: "Dass Central Market", img: "/path/to/dass-central.jpg" },
    { name: "Darazo Market", img: "/path/to/darazo.jpg" },
    { name: "Ganjuwa Market", img: "/path/to/ganjuwa.jpg" },
    { name: "Goron Dutse Market", img: "/path/to/goron-dutse.jpg" },
    { name: "Hawul Market", img: "/path/to/hawul.jpg" },
    { name: "Jama’a Market", img: "/path/to/jamaa.jpg" },
    { name: "Kafin Baka Market", img: "/path/to/kafin-baka.jpg" },
    { name: "Kafin Madaki Market", img: "/path/to/kafin-madaki.jpg" },
    { name: "Kafin Zaki Market", img: "/path/to/kafin-zaki.jpg" },
    { name: "Kari Market", img: "/path/to/kari.jpg" },
    { name: "Kirfi Market", img: "/path/to/kirfi.jpg" },
    { name: "Kiyawa Market", img: "/path/to/kiyawa.jpg" },
    { name: "Lere Market", img: "/path/to/lere.jpg" },
    { name: "Lusa Market", img: "/path/to/lusa.jpg" },
    { name: "Magama Gumau Market", img: "/path/to/magama-gumau.jpg" },
    { name: "Misau Main Market", img: "/path/to/misau-main.jpg" },
    { name: "Muda Lawal Market", img: "/path/to/muda-lawal.jpg" },
    { name: "Ningi Main Market", img: "/path/to/ningi-main.jpg" },
    { name: "Railway Market", img: "/path/to/railway.jpg" },
    { name: "Sabon Kaura Market", img: "/path/to/sabon-kaura.jpg" },
    { name: "Sade Market", img: "/path/to/sade.jpg" },
    { name: "Soro Market", img: "/path/to/soro.jpg" },
    {
      name: "Tafawa Balewa Main Market",
      img: "/path/to/tafawa-balewa-main.jpg",
    },
    { name: "Tafawa Balewa Market", img: "/path/to/tafawa-balewa.jpg" },
    { name: "Toro Market", img: "/path/to/toro.jpg" },
    { name: "Warji Market", img: "/path/to/warji.jpg" },
    { name: "Wanka Market", img: "/path/to/wanka.jpg" },
    { name: "Wunti Market", img: "/path/to/wunti.jpg" },
    { name: "Yelwa Market", img: "/path/to/yelwa.jpg" },
    { name: "Yuli Market", img: "/path/to/yuli.jpg" },
    { name: "Zindi Market", img: "/path/to/zindi.jpg" },
  ],

  Bayelsa: [
    { name: "Akassa Fish Market", img: "/path/to/akassa-fish.jpg" },
    { name: "Aleibiri Market", img: "/path/to/aleibiri.jpg" },
    { name: "Amabulou Market", img: "/path/to/amabulou.jpg" },
    { name: "Amassoma Market", img: "/path/to/amassoma.jpg" },
    { name: "Anyama-Ogbia Market", img: "/path/to/anyama-ogbia.jpg" },
    { name: "Brass Market", img: "/path/to/brass.jpg" },
    { name: "Darazo Market", img: "/path/to/darazo.jpg" },
    { name: "Egwema Local Market", img: "/path/to/egwema-local.jpg" },
    { name: "Ekeremor Main Market", img: "/path/to/ekeremor-main.jpg" },
    { name: "Ekeki Market", img: "/path/to/ekeki.jpg" },
    { name: "Kolo Market", img: "/path/to/kolo.jpg" },
    { name: "Koluama Market", img: "/path/to/koluama.jpg" },
    { name: "Lobia Market", img: "/path/to/lobia.jpg" },
    { name: "Nembe-Bassey Market", img: "/path/to/nembe-bassey.jpg" },
    { name: "Nembe Main Market", img: "/path/to/nembe-main.jpg" },
    { name: "Ogboinbiri Market", img: "/path/to/ogboinbiri.jpg" },
    { name: "Odioma Market", img: "/path/to/odioma.jpg" },
    { name: "Odi-Gbene Market", img: "/path/to/odi-gbene.jpg" },
    { name: "Ogbia Town Market", img: "/path/to/ogbia-town.jpg" },
    { name: "Oporoma Market", img: "/path/to/oporoma.jpg" },
    { name: "Opolo Market", img: "/path/to/opolo.jpg" },
    { name: "Ofoni Market", img: "/path/to/ofoni.jpg" },
    { name: "Opu-Nembe Market", img: "/path/to/opu-nembe.jpg" },
    { name: "Peretoru Local Market", img: "/path/to/peretoru-local.jpg" },
    { name: "Sagbama Market", img: "/path/to/sagbama.jpg" },
    { name: "Tombia Market", img: "/path/to/tombia.jpg" },
    { name: "Toru-Orua Market", img: "/path/to/toru-orua.jpg" },
    { name: "Twon Brass Market", img: "/path/to/twon-brass.jpg" },
    { name: "Yelwa Market", img: "/path/to/yelwa.jpg" },
  ],

  Benue: [
    { name: "Akaajime Market", img: "/path/to/akaajime.jpg" },
    { name: "Enugu Road Market", img: "/path/to/enugu-road.jpg" },
    { name: "Gboko Main Market", img: "/path/to/gboko-main.jpg" },
    { name: "Gboko North Market", img: "/path/to/gboko-north.jpg" },
    { name: "Gboko South Market", img: "/path/to/gboko-south.jpg" },
    { name: "GRA Market", img: "/path/to/gra.jpg" },
    { name: "Katsina-Ala Market", img: "/path/to/katsina-ala.jpg" },
    { name: "Makurdi Main Market", img: "/path/to/makurdi-main.jpg" },
    { name: "Makurdi Modern Market", img: "/path/to/makurdi-modern.jpg" },
    { name: "Mbalagh Market", img: "/path/to/mbalagh.jpg" },
    { name: "Naka Road Market", img: "/path/to/naka-road.jpg" },
    { name: "North Bank Market", img: "/path/to/north-bank.jpg" },
    { name: "Ugbokolo Market", img: "/path/to/ugbokolo.jpg" },
    { name: "Wurukum Market", img: "/path/to/wurukum.jpg" },
  ],

  Borno: [
    { name: "Baga Market", img: "/path/to/baga.jpg" },
    { name: "Bama Central Market", img: "/path/to/bama-central.jpg" },
    { name: "Bama Fish Market", img: "/path/to/bama-fish.jpg" },
    { name: "Bama Main Market", img: "/path/to/bama-main.jpg" },
    { name: "Bama Sunday Market", img: "/path/to/bama-sunday.jpg" },
    { name: "Biu Central Market", img: "/path/to/biu-central.jpg" },
    { name: "Biu Friday Market", img: "/path/to/biu-friday.jpg" },
    { name: "Biu Main Market", img: "/path/to/biu-main.jpg" },
    { name: "Biu Motor Park Market", img: "/path/to/biu-motor-park.jpg" },
    { name: "Customs Market", img: "/path/to/customs.jpg" },
    { name: "Gamboru Market", img: "/path/to/gamboru.jpg" },
    { name: "Kadamari Market", img: "/path/to/kadamari.jpg" },
    { name: "Kwanan Gashu'a Market", img: "/path/to/kwanan-gashua.jpg" },
    { name: "Kwaya Kusar Market", img: "/path/to/kwaya-kusar.jpg" },
    {
      name: "Maiduguri Main Market (Bama Road Market)",
      img: "/path/to/maiduguri-main.jpg",
    },
    { name: "Ngamdu Market", img: "/path/to/ngamdu.jpg" },
    { name: "Old Maiduguri Market", img: "/path/to/old-maiduguri.jpg" },
    { name: "Wulgo Market", img: "/path/to/wulgo.jpg" },
  ],

  CrossRiver: [
    { name: "Akamkpa Main Market", img: "/path/to/akamkpa-main.jpg" },
    { name: "Akamkpa Timber Market", img: "/path/to/akamkpa-timber.jpg" },
    { name: "Akpabuyo Main Market", img: "/path/to/akpabuyo-main.jpg" },
    { name: "Bendeghe Ekiem Market", img: "/path/to/bendeghe-ekiem.jpg" },
    { name: "Bekwarra Market", img: "/path/to/bekwarra.jpg" },
    { name: "Biase Main Market", img: "/path/to/biase-main.jpg" },
    { name: "Biase Town Market", img: "/path/to/biase-town.jpg" },
    { name: "Boki Agricultural Market", img: "/path/to/boki-agricultural.jpg" },
    { name: "Boki Main Market", img: "/path/to/boki-main.jpg" },
    { name: "Danare Market", img: "/path/to/danare.jpg" },
    { name: "Ediba Market", img: "/path/to/ediba.jpg" },
    { name: "Etomi Market", img: "/path/to/etomi.jpg" },
    { name: "Igede Market", img: "/path/to/igede.jpg" },
    { name: "Igede Weekly Market", img: "/path/to/igede-weekly.jpg" },
    { name: "Ikom Cattle Market", img: "/path/to/ikom-cattle.jpg" },
    { name: "Ikom Main Market", img: "/path/to/ikom-main.jpg" },
    { name: "Iso-bendghe Market", img: "/path/to/iso-bendghe.jpg" },
    { name: "Itigidi Market", img: "/path/to/itigidi.jpg" },
    { name: "Marian Market", img: "/path/to/marian.jpg" },
    { name: "Obanliku Market", img: "/path/to/obanliku.jpg" },
    { name: "Obudu Cattle Market", img: "/path/to/obudu-cattle.jpg" },
    { name: "Obudu Main Market", img: "/path/to/obudu-main.jpg" },
    { name: "Obubra Main Market", img: "/path/to/obubra-main.jpg" },
    { name: "Obubra Town Market", img: "/path/to/obubra-town.jpg" },
    { name: "Odukpani Market", img: "/path/to/odukpani.jpg" },
    { name: "Odukpani Timber Market", img: "/path/to/odukpani-timber.jpg" },
    { name: "Ogoja Cattle Market", img: "/path/to/ogoja-cattle.jpg" },
    { name: "Ogoja Main Market", img: "/path/to/ogoja-main.jpg" },
    { name: "Ofutop Market", img: "/path/to/ofutop.jpg" },
    { name: "Ugep Cattle Market", img: "/path/to/ugep-cattle.jpg" },
    { name: "Ugep Main Market", img: "/path/to/ugep-main.jpg" },
    { name: "Ukpe Market", img: "/path/to/ukpe.jpg" },
    { name: "Ukelle Market", img: "/path/to/ukelle.jpg" },
    { name: "Worji Market", img: "/path/to/worji.jpg" },
    { name: "Yala Market", img: "/path/to/yala.jpg" },
  ],

  Lagos: [
    { name: "Agbalata Market Badagry", img: "/path/to/agbalata.jpg" },
    {
      name: "Alaba International Market",
      img: "/path/to/alaba-international.jpg",
    },
    { name: "Ajah Market", img: "/path/to/ajah-market.jpg" },
    { name: "Aratumi Market", img: "/path/to/aratumi-market.jpg" },
    { name: "Balogun Market, Lagos Island", img: "/path/to/balogun.jpg" },
    { name: "Bar Beach Market", img: "/path/to/bar-beach-market.jpg" },
    { name: "Computer Village", img: "/path/to/computer-village.jpg" },
    {
      name: "Èbúté Èrò Market, Lagos Island",
      img: "/path/to/ebutero-market.jpg",
    },
    { name: "Epe Fish Market", img: "/path/to/epe-fish-market.jpg" },
    { name: "Iyana-Iba Market", img: "/path/to/iyana-iba-market.jpg" },
    { name: "Ikotun Market", img: "/path/to/ikotun-market.jpg" },
    { name: "Idumota Market", img: "/path/to/idumota-market.jpg" },
    { name: "Ita Faji Market", img: "/path/to/ita-faji-market.jpg" },
    {
      name: "Isale Eko Market, Lagos Island",
      img: "/path/to/isale-eko-market.jpg",
    },
    {
      name: "Jankarra Market, Lagos Island",
      img: "/path/to/jankarra-market.jpg",
    },
    { name: "Ladipo Market", img: "/path/to/ladipo-market.jpg" },
    { name: "Lekki Market", img: "/path/to/lekki-market.jpg" },
    { name: "Agboju Market", img: "/path/to/agboju-market.jpg" },
    { name: "Daleko Market", img: "/path/to/daleko-market.jpg" },
    { name: "Morocco I and II markets", img: "/path/to/morocco-markets.jpg" },
    { name: "Mushin Market", img: "/path/to/mushin-market.jpg" },
    { name: "Oyingbo Market", img: "/path/to/oyingbo-market.jpg" },
    { name: "Mile 12 Market", img: "/path/to/mile12-market.jpg" },
    { name: "Oniru New Market", img: "/path/to/oniru-new-market.jpg" },
    { name: "Fespar Market", img: "/path/to/fespar-market.jpg" },
    { name: "Oshodi Market", img: "/path/to/oshodi-market.jpg" },
    {
      name: "Rauf Aregbesola Market",
      img: "/path/to/rauf-aregbesola-market.jpg",
    },
    { name: "Téjúoshó Market", img: "/path/to/tejushosho-market.jpg" },
    { name: "Sangotedo Market", img: "/path/to/sangotedo-market.jpg" },
    { name: "Ajuwe Market", img: "/path/to/ajuwe-market.jpg" },
    { name: "Jakande Market", img: "/path/to/jakande-market.jpg" },
    { name: "Akodo Market, Epe", img: "/path/to/akodo-market.jpg" },
    {
      name: "Boundary Seafood Market",
      img: "/path/to/boundary-seafood-market.jpg",
    },
    { name: "Apongbo Market", img: "/path/to/apongbo-market.jpg" },
    {
      name: "Liverpool Crayfish Market",
      img: "/path/to/liverpool-crayfish-market.jpg",
    },
    { name: "Arena Market", img: "/path/to/arena-market.jpg" },
    { name: "Cele Market", img: "/path/to/cele-market.jpg" },
    { name: "Ijesha Market, Ijeshatedo", img: "/path/to/ijesha-market.jpg" },
    { name: "State Market", img: "/path/to/state-market.jpg" },
    { name: "Agege Market", img: "/path/to/agege-market.jpg" },
  ],
};

const MarketPage = () => {
  const [selectedState, setSelectedState] = useState("Abia");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMarkets = markets[selectedState]?.filter((market) =>
    market.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-white drop-shadow-sm py-2 text-green">
        <div className="flex justify-between items-center mx-auto px-4 container">
          {/* Left Section with Markets and Malls */}
          <div className="flex items-center space-x-4">
            <Link to="/markets" className="font-bold text-lg">
              Markets
            </Link>
            <Link to="/malls" className="font-thin text-lg">
              Malls
            </Link>
          </div>

          {/* Center Section - Search Bar */}
          <div className="flex flex-grow justify-center">
            <div className="flex items-center border-green bg-white focus:ring-opacity-50 px-4 py-2 border rounded-full focus:ring-green w-full max-w-md text-gray-600">
              <input
                type="text"
                placeholder={`Search ${selectedState} markets...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-2 w-full text-sm outline-none"
              />
              <img src={searchIcon} alt="Search" className="w-5 h-5" />
            </div>
          </div>

          {/* Empty Right Side (Optional for now) */}
          <div className="flex items-center space-x-4"></div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar: List of States */}
        <aside className="bg-white shadow-lg p-4 w-[300px] h-full">
          <ul className="space-y-2">
            {states.map((state) => (
              <li
                key={state}
                onClick={() => setSelectedState(state)}
                className={`cursor-pointer p-2 ${
                  selectedState === state
                    ? "bg-green text-white"
                    : "text-gray-800"
                } hover:bg-green hover:opacity-75 hover:text-white rounded-lg focus:font-semibold`}
              >
                {state}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content: Markets */}
        <div className="bg-gray-100 p-6 w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-2xl">
              {selectedState} State Markets
            </h2>
          </div>

          {/* Market Cards Grid */}
          <div className="gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredMarkets.length > 0 ? (
              filteredMarkets.map((market, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md hover:shadow-lg rounded-lg transform transition duration-300 overflow-hidden hover:scale-105"
                >
                  <img
                    src={market.img}
                    alt={market.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{market.name}</h3>
                    <a
                      href="#"
                      className="block mt-2 text-green text-sm hover:underline"
                    >
                      View more
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p>No markets found for "{searchTerm}"</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPage;
