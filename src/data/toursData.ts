export interface ToursData {
  caroussel: {
    srcOne: string;
    srcTwo: string;
    srcThree: string;
  };
  id: number;
  region: string;
  duration: string;
  price: number | string;
  season: string[];
  name: string;
  overview: string;
  itinerary: {
    descOne: string;
    descTwo?: string;
    descThree?: string;
    descFour?: string;
  };
}

export type ChildProps = {
  children?: React.ReactNode;
};
const toursData: ToursData[] = [
  {
    caroussel: {
      srcOne:
        "https://images.pexels.com/photos/4916521/pexels-photo-4916521.jpeg?auto=compress&cs=tinysrgb&w=600",
      srcTwo:
        "https://images.pexels.com/photos/8991577/pexels-photo-8991577.jpeg?auto=compress&cs=tinysrgb&w=600",
      srcThree:
        "https://images.unsplash.com/photo-1592363259529-9ed5afd76e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFuYW51cml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    id: 1,
    region: "Juta",
    duration: "full day - 9 hours",
    price: 130,
    season: ["winter", "summer", "spring", "autumn"],
    name: "Private tour to Juta",
    overview:
      "Escape civilization, feel like you're the part of nature. Enjoy the scenery of mystical Juta. You have a great chance to discover the beautiful silence of green rocky gorge, the mystical scenery of waterfall, and Juta village which is situated on the main elevation of the Caucasus Mountains.",
    itinerary: {
      descOne:
        "Today we will have an exciting trip along The Georgian Military Road to enjoy the spectacular panoramic views Georgian landscapes. Our first stop will be at Zhinvali Reservoir - picturesque water reservoir with Ananuri Fortress - medieval defensive fortress built by the Dukes of Aragvi and its earliest parts date from the 13th century. The fortress is on the UNESCO Tentative list.",
      descTwo:
        "Continue to Gudauri Arch of Friendship - the monument is a circular balcony hanging off of a 600 meter cliff with amazing views of Caucasus Mountains. Not everyone is brave enough to step on the very edge of the balcony, but the memories are sure worth it! Our final destination will be Juta - one of the highest settlements (2200 m) in the municipality of Kazbegi, and is located 24 km from Stepantsminda (8 km of paved road, and the remainder is a dirt road).",
      descThree:
        "In Juta we will have an easy route hiking tour for about 3 hours, while our hiking tour we will visit Chaukhebi waterfall and small natural green color lake.",
      descFour:
        "In the evening we will return back to Tbilisi, guests can be dropped back to accommodation or any other preferable place.",
    },
  },
  {
    caroussel: {
      srcOne:
        "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/1c/91/76.jpg",
      srcTwo:
        "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/10/07/d4/fe.jpg",
      srcThree:
        "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/1c/91/54.jpg",
    },
    id: 2,
    region: "Bakuriani",
    duration: "full day - 12 hours",
    price: 160,
    season: ["winter"],
    name: "Bakuriani Ski Resort Tour: Winter Activities",
    overview:
      "Explore Bakuriani and Borjomi on this full-day guided tour, visit Borjomi Central Park and Bakuriani Ski Resort, enjoy a delicious lunch of Georgian food in Borjomi - enjoy free time for winter activities at the resort",
    itinerary: {
      descOne:
        "Stop At: Bakuriani, Bakuriani, Samtskhe-Javakheti Region. Bakuriani is one of the best ski resorts in Georgia. The resort is a paradise for skiers and snowboarders. It is also a superb venue for children to engage in winter sports and activities.",
      descTwo:
        "The winter sports area is situated between 1,740 and 2,702 meters. Bakuriani is the perfect place to have an unforgettable time with family and friends.",
      descThree:
        "  The resort is ideal for recreational purposes, sports, and nature lovers. Different ski routes cater to all levels of skiers and ensure maximum pleasure.",
      descFour:
        "Stop At: Borjomi, Borjomi, Samtskhe-Javakheti Region. We have late lunch in a pleasant atmosphere to try many different traditional Georgian dishes.",
    },
  },
  {
    caroussel: {
      srcOne:
        "https://st3.depositphotos.com/14847044/17840/i/600/depositphotos_178403658-stock-photo-village.jpg",
      srcTwo:
        "https://st.depositphotos.com/1000475/4343/i/450/depositphotos_43434387-stock-photo-mount-kazbek.jpg",
      srcThree:
        "https://st4.depositphotos.com/16115532/28111/i/450/depositphotos_281118320-stock-photo-russian-georgian-friendship-monument-georgia.jpg",
    },
    id: 3,
    region: "Kazbegi",
    duration: "full day - 8 hours",
    price: 110,
    season: ["winter", "summer", "spring", "autumn"],
    name: "Private tour to Kazbegi",
    overview:
      "Explore Georgia's Great Caucasus Range on this private full-day Kazbegi tour from Tbilisi. Visit the 16th-century Ananuri Fortress with a private guide, and enjoy fine views over the Aragvi River from the turreted stone walls",
    itinerary: {
      descOne:
        "10 am starting the tour. Trip on Georgian Military road to Kazbegi. During this trip you will enjoy beautiful mountain views and fresh air.",
      descTwo:
        "First stop at Zhinvali reservoir - hydroelectric dam on the Aragvi River with amazing views near Ananuri fortress - architectural complex of the late feudal times in Georgia. Built on the right bank of Aragvi River in 16th-17th cc, it was the main seat of Aragvi Eristavi - Dukes dynasty since 13th century.",
      descThree:
        "Second stop near the monument of friendship built in 1983 after signing the treaty of Georgievsk in Gudauri, opening beautiful views from the mountains. Passing by Gudauri ski resort - 2196 meters above the sea. Visiting Gergety Trinity Church in Kazbegi by Jeeps in Stepantsminda. The elevation is 2170 meters.",
      descFour: "Tour will be finished around 19:00",
    },
  },
  {
    caroussel: {
      srcOne:
        "https://st.depositphotos.com/1004221/1956/i/450/depositphotos_19569489-stock-photo-signagi-in-kakheti-region-georgia.jpg",
      srcTwo:
        "https://st2.depositphotos.com/1002200/8829/i/600/depositphotos_88293394-stock-photo-sunset-over-vines-in-kakheti.jpg",
      srcThree:
        "https://st.depositphotos.com/1017213/2667/i/600/depositphotos_26672291-stock-photo-the-beautiful-view-of-signaghi.jpg",
    },
    id: 4,
    region: "Kakheti",
    duration: "full day - 7 hours",
    price: 80,
    season: ["winter", "summer", "spring", "autumn"],
    name: "Private tour to Kakheti",
    overview:
      "If you're a wine lover, Georgia's Kakheti wine region is waiting for you. Discover spectacular natural landscapes, cozy Sighnaghi city and excellent wines on this day trip from Tbilisi.",
    itinerary: {
      descOne:
        "10:00 starting the day trip to wine region - Kakheti. Visiting Shuamta monasteries on the way. Old Shuamta Monastery located in a hollow between forest-covered mountains. The three nave basilica dates back to the 5th century, two other cross-domed churches are of the 7th century. New Shuamta Monastery of the mid 16th century, followed by a beautiful legend of the construction by the King's daughter.",
      descTwo:
        "Continue drive towards Alaverdi monastery - 55m high monastery built in 11th century by Kvirike III, some parts of the landmarks belongs to 6th century. After Alaverdi we will visit Nekresi - one of the biggest monastery complex in Kakheti where king Thrdat built a church in.",
      descThree:
        "Our final destination will be Sighnaghi - the city endowed with significant historic and cultural heritage sites. Its charming cobblestone streets and alleys, restored original nouveau woodwork, and detailed facades give the town a romantic mystique. The town sits atop a bluff overlooking the Alazani Valley, which is one of Georgia's most famous wine-producing regions. Stunning view of the Alazani Valley make Sighnaghi one of Georgia's most attractive small towns.",
      descFour:
        "Evening return back to Tbilisi. After the tour guests will be dropped back to accommodation or any other preferable place.",
    },
  },
  {
    caroussel: {
      srcOne:
        "https://st2.depositphotos.com/2115371/12473/i/450/depositphotos_124739678-stock-photo-the-heart-of-borjomi.jpg",
      srcTwo:
        "https://st2.depositphotos.com/2115371/12474/i/600/depositphotos_124740494-stock-photo-the-cableway-in-caucasus-mountains.jpg",
      srcThree:
        "https://st2.depositphotos.com/1329636/9767/i/600/depositphotos_97679926-stock-photo-mobius-loop-bridge-in-borjom.jpg",
    },
    id: 5,
    region: "Borjomi",
    duration: "full day - 7 hours",
    price: 80,
    season: ["winter", "summer", "spring", "autumn"],
    name: "Private tour to Borjomi",
    overview:
      "Explore famous mineral spring of Borjomi, Try world known mineral water from springs, Have a walk through fairy Borjomi Central park.",
    itinerary: {
      descOne:
        "10:00 starting the tour. Departure to Borjomi. Borjomi is a resort town noted for mineral water industry, the Romanov summer palace in Likani, and the World Wide Fund for Nature-site Borjomi-Kharagauli National Park.",
      descTwo:
        "Visiting Borjomi central park with Borjomi mineral water which is particularly well known; the bottling of mineral water is a major source of income for the area. Visiting hot springs in Borjomi park.",
      descThree:
        "Green Monastery, officially known as Chitakhevi St. George Monastery, is an IX century friary located in the village of the same name, in the Borjomi municipality. According to historians and archeologists, it was built by Christopher and Tevdore, students of St. Grigol Khandtstheli, a very influential figure in Georgian history.",
      descFour:
        "Tour will be finished around 17:00. Evening return back to Tbilisi.",
    },
  },
  {
    caroussel: {
      srcOne:
        "https://imgcdn.bokun.tools/699ca65b-5479-416d-a275-7db3293a6240.jpg",
      srcTwo:
        "https://imgcdn.bokun.tools/dde1e583-443b-4d30-9086-d2e4e6ef839b.jpg",
      srcThree:
        "https://imgcdn.bokun.tools/f999d6e3-e034-4c69-bffd-b3ad24898a9f.jpg",
    },
    id: 6,
    region: "Tusheti",
    duration: "4 days",
    price: 380,
    season: ["summer"],
    name: "Private tour to Tusheti",
    overview:
      "Going from Tbilisi to Tusheti is authentic, incredible, picturesque, which has one of the most beautiful roads in the world. Tusheti is a protected area, on this tour you will visit truly pristine nature. Complete safety and true adventure in adventures.Tusheti is the best place to hike in Georgia, the Caucasus Mountains, the old architecture of castles and houses and that is not all you can see in this region. It is impossible to travel to Tusheti without a jeep. Reach Abano Pass in Tusheti with a good 4X4 jeep.",
    itinerary: {
      descOne:
        "Day 1. Tbilisi-Gombori pass-Telavi city-Abano pass (2926m ASL)-Tower village of Omalo (center of the region)- Short walk around the area (visiting keselo, fortification).",
      descTwo:
        "Day 2. Walking or driving half way around PiriqiTa valley, visiting medieval centuries tower villages :Dartlo, Kvalo, parsma. Driving back to Omalo.",
      descThree:
        "Day 3. Walking ((or driving half way)to Gometsari Valley visiting medieval centuries tower villages: Bochorma, Dochu, Begela, Jvarboseli.",
      descFour:
        "Day 4. Omalo- Driving back to low-land: abano pass, Napareuli village- Sighnagi, medieval centuries village, on the hill of small Caucasus (wine tasting)- driving to Tbilisi",
    },
  },
  {
    caroussel: {
      srcOne:
        "https://www.toursbylocals.com/images/guides/57/57015/2022358095820767.jpg",
      srcTwo:
        "https://www.toursbylocals.com/images/guides/57/57015/2022358095817309.jpg",
      srcThree:
        "https://www.toursbylocals.com/images/guides/57/57015/2022358095815520.jpg",
    },
    id: 7,
    region: "Kakheti",
    duration: "full day",
    price: 380,
    season: ["winter", "summer", "spring", "autumn"],
    name: "Wine tasting tour to Kakheti",
    overview:
      "Going from Tbilisi to Tusheti is authentic, incredible, picturesque, which has one of the most beautiful roads in the world. Tusheti is a protected area, on this tour you will visit truly pristine nature. Complete safety and true adventure in adventures.Tusheti is the best place to hike in Georgia, the Caucasus Mountains, the old architecture of castles and houses and that is not all you can see in this region. It is impossible to travel to Tusheti without a jeep. Reach Abano Pass in Tusheti with a good 4X4 jeep.",
    itinerary: {
      descOne:
        "Stop At: Badiauri, Badiauri, Kakheti Region. Badiauri Bakery is a place where you are welcome to taste delicious Georgian bread, cheese, and Chacha. Try to make traditional Georgian bread by yourself and be amazed by a unique way of baking. Stop At: Bodbe Monastery of St. Nino, Signagi Georgia. After Badiauri, we go to Bodbe Nunnery. On the way to Bodbe, we stop at the viewpoint of Sighnaghi and take amazing pictures. Bodbe Nunnery of St. Nino is located in Kakheti, 2 kilometers away from Sighnaghi. According to the legend, it is built on the burial place of Saint Nino. A saint for Georgians who converted their religion into Christianity. Georgian kings were paying great attention to the Bodbe Monastery. It has been repaired and restored many times.",
      descTwo:
        "Stop At: Sighnaghi, Sighnaghi, Kakheti Region. Signagi is a town in Kakheti, 75 km east of Tbilisi. However, Georgia's smallest towns serve as a popular tourist destination due to their location at the heart of Georgia's wine-growing region, its picturesque landscapes, pastel houses with wooden fretwork balconies, and narrow cobblestone streets. The Great Wall of Georgia has stunning views for taking pictures, and the city is surrounded by it. In Sighnaghi, we have lunch with the beautiful view of Alazani valley. Before we start our delicious lunch, we have a cooking masterclass of Khachapuri, and next try many delicious Georgian dishes. Making your own Khachapuri, drinking some good wine, and looking at Alazani valley from the top is a great experience that is a must to do while being in Georgia.",

      descThree:
        "Stop At: Tunnel Winery Khareba's, Meurneoba District Kakheti, Kvareli 383320 Georgia. Winery Khareba is the largest of Georgia's wine cellars. There are perfect storage conditions for wine, 7,7 km of tunnels, and galleries maintain a constant temperature of 12-14 degrees 0C. You have a walking tour with a local guide where you'll find out more information and details about wine and taste it. The complex has an excellent museum in the tunnel which you see during the tour.",
      descFour:
        "Stop At: Kindzmarauli Corporation Wine House. Corporation Kindzmarauli's history dates back to 1533 and is connected with constructing the historical Kvareli fortress in the region. The fortress's wine cellar produced wine and molasses exclusively for the royal families for much of its history and now has opened to the broader local and international market.",
    },
  },
  {
    caroussel: {
      srcOne:
        "https://www.budget-georgia.com/uploads/9/7/8/9/97897892/img-20170625-124002_orig.jpg",
      srcTwo:
        "https://www.budget-georgia.com/uploads/9/7/8/9/97897892/mirveti-waterdall_1_orig.jpg",
      srcThree:
        "https://www.budget-georgia.com/uploads/9/7/8/9/97897892/girl-at-mirveti-waterfall_1_orig.jpg",
    },
    id: 8,
    region: "Adjara",
    duration: "half day - 3 hours",
    price: 50,
    season: ["summer", "spring", "autumn"],
    name: "Batumi Tour: Mountains of Adjara",
    overview:
      "Enjoy with cold breath of Adjara mountains. Rivers, Makhuntseti and Mirveti waterfalls are the  great ideas for hot summer days. Follow us and enjoy with Adjara.",
    itinerary: {
      descOne:
        "Tour starts at 14:00 form Europe square in Batumi. We're heading to Makhuntseti where we try to escape from heat of Batumi. ",
      descTwo:
        "The first stop is water reservoir of river Adjaristskali. Then we are heading to Makhuntsety waterfall that is one of the highest waterfalls in Georgia.",

      descThree:
        "Afterwards we go down to King Tamar's bridge that was built in 14th century, where guests are able to jump from bridge and swim in freezing mountain river. ",
      descFour:
        "The next stop is Mirveti waterfall to achieve it we have to cross hanged bridge and walk through village.  We return back to Batumi by 17:00 and tour finishes at Europe square.",
    },
  },
];

export default toursData;
