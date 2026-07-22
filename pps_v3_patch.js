/**
 * Paadal Petra Sthalams — v3 Patch (Complete Recovery Build)
 * Tamil names + Wiki URL fixes + language toggle + coords panel
 * + Apple/OSM/Google Maps + Copy + Tevaram audio + Naalvar hero
 */
(function() {
  'use strict';

  // ============================================================
  // A. TAMIL DEITY NAME ADDITIONS
  // ============================================================
  const NAME_TA_MORE = {
    "Vaithiyanathaswamy":"வைத்தியநாதஸ்வாமி","Alanduraiyar":"ஆலந்துறையார்",
    "Balavannanathar":"பாலவண்ணநாதர்","Pranava Vyagrapuriswarar":"பிரணவ வியாக்ரபுரீஸ்வரர்",
    "Padanjaliswarar":"படஞ்சலீஸ்வரர்","Soundaryeswarar":"சௌந்தர்யேஸ்வரர்",
    "Amirthakatheeswarar":"அமிர்தகதீஸ்வரர்","Paasupatheeswarar":"பாசுபதீஸ்வரர்",
    "Pasupatheeswarar":"பசுபதீஸ்வரர்","Pasupatheeswarar (Alanthurai Nathar)":"பசுபதீஸ்வரர்",
    "Agneeswarar":"அக்னீஸ்வரர்","Prananatheswarar":"பிராணநாதேஸ்வரர்",
    "Arunajadeswarar":"அருணஜடேஸ்வரர்","Baluganathar":"பாலகநாதர்",
    "Sathiyagireeswarar":"சத்யகிரீஸ்வரர்","Karkadeswarar":"கர்கடேஸ்வரர்",
    "Yoganandeeswarar":"யோகநந்தீஸ்வரர்","Koteeswarar":"கோடீஸ்வரர்",
    "Koteeswarar / Kailasanathar":"கோடீஸ்வரர் / கைலாசநாதர்",
    "Ezhutharinathar":"எழுத்தறிநாதர்","Satchinatheswarar":"சாட்சிநாதேஸ்வரர்",
    "Vijayanatheswarar":"விஜயநாதேஸ்வரர்","Vilvavaneshwarar":"வில்வவனேஸ்வரர்",
    "Dayanidheeswarar":"தயாநிதீஸ்வரர்","Abathsagayeswarar":"ஆபத்சகாயேஸ்வரர்",
    "Aiyarappar":"ஐயாறப்பர்","Neyyadiyappar":"நெய்யாடியப்பர்",
    "Vyagrapureeswarar":"வியாக்ரபுரீஸ்வரர்","Semmeninathar":"செம்மேனிநாதர்",
    "Sathiyavakeeswarar":"சத்யவாக்கீஸ்வரர்","Amravaneswarar":"ஆம்ரவனேஸ்வரர்",
    "Adhimouleeswarar":"ஆதிமௌலீஸ்வரர்","Jambukeswarar":"ஜம்புகேஸ்வரர்",
    "Gneelivaneswarar":"நீலிவனேஸ்வரர்","Matruravaradeeswarar":"மாற்றுராவராதீஸ்வரர்",
    "Maragathaleswarar":"மரகதலீஸ்வரர்","Shivalokathyagar":"சிவலோகத்யாகர்",
    "Thirumeniyazhagar":"திருமேனியழகர்","Mullai Vananathar":"முல்லைவனநாதர்",
    "Sundareswarar":"சுந்தரேஸ்வரர்","Saiyaveswarar":"சாயவனேஸ்வரர்",
    "Pallavaneswarar":"பல்லவனேஸ்வரர்","Swetharanyeswarar":"சுவேதாரண்யேஸ்வரர்",
    "Aranyeswarar":"ஆரண்யேஸ்வரர்","Velladainathar":"வெள்ளடைநாதர்",
    "Sattainathar / Brahmapureeswarar":"சட்டைநாதர் / பிரம்மபுரீஸ்வரர்",
    "Sapthapureeswarar":"சப்தபுரீஸ்வரர்","Vaitheeswaran (Vaidyanathaswamy)":"வைத்தீஸ்வரன்",
    "Kannayiramudaiyar":"கண்ணாயிரமுடையார்","Kadaimudinathar":"கடைமுடிநாதர்",
    "Mahalatchumeeswarar":"மகாலட்சுமீஸ்வரர்","Shivalokanathar":"சிவலோகநாதர்",
    "Somanathar":"சோமநாதர்","Apatsakayeswarar":"ஆபத்சகாயேஸ்வரர்",
    "Kalyana Sundareswarar":"கல்யாண சுந்தரேஸ்வரர்","Airavatheswarar":"ஐராவதேஸ்வரர்",
    "Uthvaganathar Swami":"உத்வாகநாதர்","Veerateswarar":"வீரட்டேஸ்வரர்",
    "Kutram Poruthanathar":"குற்றம் பொறுத்தநாதர்","Kunthaleeswarar":"குந்தலீஸ்வரர்",
    "Manikkavannar":"மாணிக்கவண்ணர்","Neelakandeswarar":"நீலகண்டேஸ்வரர்",
    "Kadambavaaneswarar":"கடம்பவனேஸ்வரர்","Rathinagireeswarar":"ரத்னகிரீஸ்வரர்",
    "Tharparanyeswarar":"தர்ப்பாரண்யேஸ்வரர்","Amirdhakalasamudayar":"அமிர்தகலசமுடையார்",
    "Atmanatheswarar":"ஆத்மநாதேஸ்வரர்","Adi Kumbeswarar":"ஆதி கும்பேஸ்வரர்",
    "Gokileswarar":"கோகிலேஸ்வரர்","Sakkaravaageswarar":"சக்கரவாகேஸ்வரர்",
    "Sarkunalingeswarar":"சர்குணலிங்கேஸ்வரர்","Saraparameswarar":"சாரபரமேஸ்வரர்",
    "Sitthanatheswarar":"சித்தநாதேஸ்வரர்","Sivagurunathar":"சிவகுருநாதர்",
    "Sivakozhuntheeswarar":"சிவகொழுந்தீஸ்வரர்","Sivanandheswarar":"சிவநந்தேஸ்வரர்",
    "Someeswarar":"சோமேஸ்வரர்","Sottuthurai Nathar":"சோற்றுத்துறை நாதர்",
    "Jnanaparameswarar":"ஞானபரமேஸ்வரர்","Thiruvalanjuzhinathar":"திருவலஞ்சுழிநாதர்",
    "Thenupeeswarar":"தேனுபீஸ்வரர்","Nageswarar":"நாகேஸ்வரர்",
    "Nageswaran":"நாகேஸ்வரன்","Panchavarneeswarar":"பஞ்சவர்ணீஸ்வரர்",
    "Padikasunathar":"படிகாசுநாதர்","Palaiyavaneswarar":"பழையவனேஸ்வரர்",
    "Paschakareeswarar":"பாஷாகரீஸ்வரர்","Brammasiragandeeswarar":"பிரம்மசிரகண்டீஸ்வரர்",
    "Pushpavaneswarar":"புஷ்பவனேஸ்வரர்","Mahalingeswarar":"மகாலிங்கேஸ்வரர்",
    "Vasishteeswarar":"வசிஷ்டேஸ்வரர்","Vedhapureeswarar":"வேதபுரீஸ்வரர்",
    "Erumbiswarar":"எறும்பீஸ்வரர்","Thayumanavar":"தாயுமானவர்",
    "Netungalanathar":"நெடுங்கலநாதர்","Panchavarneswarar":"பஞ்சவர்ணேஸ்வரர்",
    "Paraythurainathar":"பறைதுறைநாதர்","Ujjeevanathar":"உஜ்ஜீவநாதர்",
    "Agileswarar":"அகிலீஸ்வரர்","Abimuktheeswarar":"அபிமுக்தீஸ்வரர்",
    "Uthirapachupatheeswarar":"உத்தரபசுபதீஸ்வரர்","Airavateeswarar":"ஐராவதீஸ்வரர்",
    "Kannayiranathar":"கண்ணாயிரநாதர்","Karaveeranathar (Brammapureeswarar)":"கரவீரநாதர்",
    "Karpaganathar":"கற்பகநாதர்","Kediliyappar":"கேடிலியப்பர்",
    "Kaichinneswarar":"கைச்சினேஸ்வரர்","Koluntheeswarar":"கொழுந்தீஸ்வரர்",
    "Koneswarar":"கோனேஸ்வரர்","Sakalabhuvaneswarar":"சகலபுவனேஸ்வரர்",
    "Sathurangavallabhanathar":"சதுரங்கவல்லபநாதர்","Sargunanathar":"சர்குணநாதர்",
    "Sarguneswarar":"சர்குணேஸ்வரர்","Satchinathar":"சாட்சிநாதர்",
    "Sushmapureeswarar":"சுஷ்மபுரீஸ்வரர்","Seshapureeswarar":"சேஷபுரீஸ்வரர்",
    "Sornapureeswarar":"சொர்ணபுரீஸ்வரர்","Thyagarajar":"த்யாகராஜர்",
    "Dhoovay Nathar":"தூவாய் நாதர்","Devapureeswarar":"தேவபுரீஸ்வரர்",
    "Naduthariyappar":"நடுத்தறியப்பர்","Narthanapureeswarar":"நர்த்தனபுரீஸ்வரர்",
    "Naganathar":"நாகநாதர்","Neelnethinathar":"நீல்நெத்திநாதர்",
    "Nellivananathar":"நெல்லிவனநாதர்","Padanjali Manogarar":"படஞ்சலி மனோகரர்",
    "Padaleeswarar":"பாதாலீஸ்வரர்","Parijathavaneswarar":"பாரிஜாதவனேஸ்வரர்",
    "Brammapureeswarar":"பிரம்மபுரீஸ்வரர்","Ponvaithanathar":"பொன்வைத்தநாதர்",
    "Mahakalanathar":"மகாகாலநாதர்","Madhuvaneswarar":"மதுவனேஸ்வரர்",
    "Manthirapureeswarar":"மந்திரபுரீஸ்வரர்","Mugkoodal Thirunethranathar":"முக்கூடல் திருநேத்திரநாதர்",
    "Muktheeswarar":"முக்தீஸ்வரர்","Meghanathar":"மேகநாதர்",
    "Rathinapureeswarar":"ரத்னபுரீஸ்வரர்","Ramanathar":"ராமநாதர்",
    "Vandurai Nathar":"வண்டுறை நாதர்","Vardhamaneeswarar":"வர்த்தமானீஸ்வரர்",
    "Vanjinathar":"வஞ்சிநாதர்","Vilvaranyeswarar":"வில்வாரண்யேஸ்வரர்",
    "Veerattaneswarar":"வீரட்டானேஸ்வரர்","Velinatheswarar":"வேலிநாதேஸ்வரர்",
    "Vennikarumbeswarar":"வெண்ணிக்கரும்பீஸ்வரர்","Vellimalainathar":"வெள்ளிமலைநாதர்",
    "Jagatheeswarar":"ஜகதீஸ்வரர்","Aktheeswarar":"அகதீஸ்வரர்",
    "Ayavantheeswarar":"ஆயவந்தீஸ்வரர்","Ucchiravaneswarar":"உச்சிராவனேஸ்வரர்",
    "Uththavadeeswarar":"உத்தவாதீஸ்வரர்","Uma Maheswara Swamy":"உமா மஹேஸ்வரர்",
    "Gayaroganeshwarar (Kayarohaneswarar)":"காயரோகணேஸ்வரர்","Kodikkuzhagar":"கொடிக்குழகர்",
    "Komuktheeswarar":"கோமுக்தீஸ்வரர்","Sankaranyeswarar":"சங்கரண்யேஸ்வரர்",
    "Swarnapureeswarar":"சுவர்ணபுரீஸ்வரர்","Thanthondeeswarar":"தந்தோண்டீஸ்வரர்",
    "Thiruppayathu Nathar":"திருப்பயத்து நாதர்","Thirumarai Kadar (Vedaranyeswarar)":"திருமறைக்காடர்",
    "Navaneetheswarar":"நவநீதேஸ்வரர்","Nattrunaiyappar":"நற்றுணையப்பர்",
    "Brahmapureeswarar":"பிரம்மபுரீஸ்வரர்","Manaththunai Nathar":"மனத்துணை நாதர்",
    "Mayuranathar":"மயூரநாதர்","Valampurinathar":"வளம்புரிநாதர்",
    "Vaimoornathar":"வைமூர்நாதர்","Veeraateswarar":"வீராடேஸ்வரர்",
    "Vedapureeswarar":"வேதபுரீஸ்வரர்","Vaigalnathar":"வைகல்நாதர்",
    "Parvathiswarar":"பார்வதீஸ்வரர்","Yazhmoorinathar":"யாழ்மூரிநாதர்",
    "Punniyakodiyappar":"புண்ணியகோடியப்பர்","Kodunkundranathar":"கொடுங்குன்றநாதர்",
    "Thiruthalinathar":"திருத்தளிநாதர்","Kalayarkoil Someswarar":"கழையார்கோயில் சோமேஸ்வரர்",
    "Thiruvappudaiyar":"திருவாப்புடையார்","Kutralanathar":"குற்றாலநாதர்",
    "Nellaiappar":"நெல்லையப்பர்","Sathyakireeswarar":"சத்யகிரீஸ்வரர்",
    "Edaganathar":"இடகநாதர்","Ramanathaswamy":"ராமநாதசுவாமி",
    "Thiruvadanai":"திருவாடானை","Bhuminathar":"பூமிநாதர்",
    "Meenakshi Sundareswarar":"மீனாட்சி சுந்தரேஸ்வரர்","Thiruppunavasal":"திருப்புனவாயில்",
    "Avinasilingeshwarar":"அவினாசிலிங்கேஸ்வரர்","Thirumuruganathar":"திருமுருகநாதர்",
    "Sangameswarar (Kooduthurai)":"சங்கமேஸ்வரர்","Arthanareeswarar":"அர்த்தநாரீஸ்வரர்",
    "Kalyana Vikirtheeswarar":"கல்யாண விகர்த்தீஸ்வரர்","Kodumudinathar":"கொடுமுடிநாதர்",
    "Kalyana Pasupatheeswarar":"கல்யாண பசுபதீஸ்வரர்","Theerthapureeswarar":"தீர்த்தபுரீஸ்வரர்",
    "Pirilayakaleswarar":"பிரளயகாலேஸ்வரர்","Vallabheswarar":"வல்லபேஸ்வரர்",
    "Mangalapureeswarar":"மங்களபுரீஸ்வரர்","Sishtakurunatheswarar":"சிஷ்டகுருநாதேஸ்வரர்",
    "Vamanapureeswarar":"வாமனபுரீஸ்வரர்","Arunachaleswarar":"அருணாசலேஸ்வரர்",
    "Panchanatheeswarar":"பஞ்சநாதீஸ்வரர்","Bhakthajaneswarar":"பக்தஜனேஸ்வரர்",
    "Sornakatheeswarar":"சொர்ணகதீஸ்வரர்","Adhulyanatheswarar":"அதுல்யநாதேஸ்வரர்",
    "Marundeeswarar":"மருந்தீஸ்வரர்","Kripapureeswarar":"கிருபாபுரீஸ்வரர்",
    "Sivalokanathar":"சிவலோகநாதர்","Panangattiswarar":"பனங்காட்டீஸ்வரர்",
    "Abirameswarar":"அபிராமேஸ்வரர்","Ekambareswarar":"ஏகாம்பரேஸ்வரர்",
    "Thirumetraliswarar":"திருமேற்றளீஸ்வரர்","Onakantheswarar":"ஓணகாந்தேஸ்வரர்",
    "Kachi Anekadhangavadeswarar":"கச்சி அநேகதங்காவதேஸ்வரர்",
    "Sathyanatheswarar":"சத்யநாதேஸ்வரர்","Thirumakaraliswarar":"திருமாகறலீஸ்வரர்",
    "Deivanayakeswarar":"தெய்வநாயகேஸ்வரர்","Vedapureeswarar":"வேதபுரீஸ்வரர்",
    "Kachabeswarar / Marundeeswarar":"கச்சபேஸ்வரர் / மருந்தீஸ்வரர்",
    "Jnanapureeswarar":"ஞானபுரீஸ்வரர்","Vedakireeswarar":"வேதகிரீஸ்வரர்",
    "Aatcheeswarar":"ஆட்சீஸ்வரர்","Sri Kalahasteeswarar":"ஸ்ரீ காளஹஸ்தீஸ்வரர்",
    "Tiruvalleeswarar":"திருவல்லீஸ்வரர்","Masilamaneeswarar":"மசிலாமணீஸ்வரர்",
    "Kapaleeswarar":"கபாலீஸ்வரர்","Valeeswarar":"வாலீஸ்வரர்",
    "Thalapureeswarar":"தலபுரீஸ்வரர்","Thiripuranthagar":"திரிபுராந்தகர்",
    "Vadaranyeswarar":"வடாரண்யேஸ்வரர்","Vaseeswarar":"வாசீஸ்வரர்",
    "Oontheeswarar":"ஊந்தீஸ்வரர்","Sivanandeswarar":"சிவநந்தேஸ்வரர்",
    "Adhipureeswarar (Padampakkanathar)":"ஆதிபுரீஸ்வரர்","Chandramavulieswarar":"சந்திரமௌலீஸ்வரர்",
    "Aralieswarar":"அரளீஸ்வரர்","Mahaakaaleeswarar":"மகாகாளீஸ்வரர்",
    "Agastheeswarar":"அகஸ்தீஸ்வரர்","Vilvanatheswarar":"வில்வநாதேஸ்வரர்",
    "Manikandeswarar":"மணிகண்டேஸ்வரர்","Jalanatheeswarar":"ஜலநாதீஸ்வரர்",
    "Mahabaleshwar":"மகாபலேஸ்வரர்","Thiruvanchikulam Mahadeva":"திருவஞ்சிக்களம் மஹாதேவர்",
    "Mallikarjuna":"மல்லிகார்ஜுனர்","Pashupatinath":"பசுபதிநாதர்",
    "Kailasanathar (Indraneela Parvatham)":"கைலாசநாதர்","Kedareshwarar":"கேதாரேஸ்வரர்",
    "Kailayanathar":"கைலாயநாதர்","Koneswaram":"கோனேஸ்வரம்",
    "Thiruketheeswaram":"திருக்கேதீஸ்வரம்","Viruthagireeswarar (Pazhamalainathar)":"விருத்தகிரீஸ்வரர்",
    "Thirumarai Kadar (Vedaranyeswarar)":"திருமறைக்காடர்","Amirthakadeswarar":"அமிர்தகடேஸ்வரர்"
  };

  // ============================================================
  // B. WIKIPEDIA URL OVERRIDES (verified Jun 2026)
  // ============================================================
  const WIKI_OVERRIDES = {
    "Chidambaram Tillai Nataraja":"https://en.wikipedia.org/wiki/Nataraja_Temple,_Chidambaram",
    "Aiyarappar":"https://en.wikipedia.org/wiki/Aiyarappar_temple",
    "Sattainathar / Brahmapureeswarar":"https://en.wikipedia.org/wiki/Sattainathar_Temple,_Sirkazhi",
    "Jambukeswarar":"https://en.wikipedia.org/wiki/Jambukeswarar_Temple,_Thiruvanaikaval",
    "Swetharanyeswarar":"https://en.wikipedia.org/wiki/Swetharanyeswarar_Temple",
    "Vaitheeswaran (Vaidyanathaswamy)":"https://en.wikipedia.org/wiki/Vaitheeswaran_Koil_temple",
    "Mayuranathar":"https://en.wikipedia.org/wiki/Mayuranathaswami_Temple,_Mayiladuthurai",
    "Amirthakadeswarar":"https://en.wikipedia.org/wiki/Amritaghateswarar-Abirami_Temple",
    "Thirumarai Kadar (Vedaranyeswarar)":"https://en.wikipedia.org/wiki/Vedaranyeswarar_Temple,_Vedaranyam",
    "Nageswarar":"https://en.wikipedia.org/wiki/Naganathar_Temple,_Thirunageswaram",
    "Komuktheeswarar":"https://en.wikipedia.org/wiki/Gomatheeswarar_Temple,_Thiruvavaduthurai",
    "Uma Maheswara Swamy":"https://en.wikipedia.org/wiki/Uma_Maheswarar_Temple,_Konerirajapuram",
    "Vardhamaneeswarar":"https://en.wikipedia.org/wiki/Vardamaneeswarar_temple",
    "Arunachaleswarar":"https://en.wikipedia.org/wiki/Arunachalesvara_Temple",
    "Veerateswarar":"https://en.wikipedia.org/wiki/Veerateeswarar_temple,_Thirukovilur",
    "Bhakthajaneswarar":"https://en.wikipedia.org/wiki/Bhakthajaneswarar_Temple",
    "Kripapureeswarar":"https://en.wikipedia.org/wiki/Kripapureeswarar_Temple,_Thiruvennainallur",
    "Ekambareswarar":"https://en.wikipedia.org/wiki/Ekambareswarar_Temple_%28Kanchipuram%29",
    "Kapaleeswarar":"https://en.wikipedia.org/wiki/Kapaleeshwarar_Temple",
    "Marundeeswarar":"https://en.wikipedia.org/wiki/Marundeeswarar_Temple",
    "Vadaranyeswarar":"https://en.wikipedia.org/wiki/Sri_Vadaranyeswarar_Temple",
    "Jalanatheeswarar":"https://en.wikipedia.org/wiki/Jalanatheeswarar_Temple,_Thakkolam",
    "Sri Kalahasteeswarar":"https://en.wikipedia.org/wiki/Srikalahasteeswara_temple",
    "Adhipureeswarar (Padampakkanathar)":"https://en.wikipedia.org/wiki/Adhipureeswarar_Temple,_Thiruvottiyur",
    "Meenakshi Sundareswarar":"https://en.wikipedia.org/wiki/Meenakshi_Temple",
    "Ramanathaswamy":"https://en.wikipedia.org/wiki/Ramanathaswamy_Temple",
    "Nellaiappar":"https://en.wikipedia.org/wiki/Nellaiappar_Temple",
    "Kutralanathar":"https://en.wikipedia.org/wiki/Kutralanathar_Temple",
    "Sathyakireeswarar":"https://en.wikipedia.org/wiki/Thiruparankunram_Murugan_Temple",
    "Arthanareeswarar":"https://en.wikipedia.org/wiki/Arthanareeswarar_Temple,_Tiruchengode",
    "Avinasilingeshwarar":"https://en.wikipedia.org/wiki/Avinasilingeshwarar_Temple_%28Tiruppukkozhiyur%29",
    "Mahabaleshwar":"https://en.wikipedia.org/wiki/Mahabaleshwar_Temple,_Gokarna",
    "Mallikarjuna":"https://en.wikipedia.org/wiki/Mallikarjuna_Temple,_Srisailam",
    "Pashupatinath":"https://en.wikipedia.org/wiki/Pashupatinath_Temple",
    "Kedareshwarar":"https://en.wikipedia.org/wiki/Kedarnath_Temple",
    "Kailayanathar":"https://en.wikipedia.org/wiki/Mount_Kailash",
    "Koneswaram":"https://en.wikipedia.org/wiki/Koneswaram_Temple",
    "Thiruketheeswaram":"https://en.wikipedia.org/wiki/Ketheeswaram_temple",
    "Adi Kumbeswarar":"https://en.wikipedia.org/wiki/Adi_Kumbeswarar_Temple,_Kumbakonam",
    "Mahalingeswarar":"https://en.wikipedia.org/wiki/Mahalingeswarar_Temple,_Thiruvidaimarudur",
    "Brammasiragandeeswarar":"https://en.wikipedia.org/wiki/Brahma_Sirakandeeswarar_Temple,_Kandiyur",
    "Thyagarajar":"https://en.wikipedia.org/wiki/Thyagaraja_Temple,_Tiruvarur",
    "Vedakireeswarar":"https://en.wikipedia.org/wiki/Vedagiriswarar_Temple",
    "Veerattaneswarar":"https://en.wikipedia.org/wiki/Veerateeswarar_Temple,_Thiruvathigai",
    "Viruthagireeswarar (Pazhamalainathar)":"https://en.wikipedia.org/wiki/Virudhagiriswarar_temple",
    "Sangameswarar (Kooduthurai)":"https://en.wikipedia.org/wiki/Bhavani_Sangameswarar_Temple",
    "Kodumudinathar":"https://en.wikipedia.org/wiki/Kodumudi_Magudeswarar_temple",
    "Erumbiswarar":"https://en.wikipedia.org/wiki/Erumbeeswarar_Temple",
    "Thiruvanchikulam Mahadeva":"https://en.wikipedia.org/wiki/Thiruvanchikulam_Mahadeva_Temple",
    "Tiruvalleeswarar":"https://en.wikipedia.org/wiki/Tiruvallesvarar_Temple",
    "Vilvanatheswarar":"https://en.wikipedia.org/wiki/Vilvanatheswarar_Temple_(Tiruvalam)",
    "Thiruppunavasal":"https://en.wikipedia.org/wiki/Tiruppunavayil",
    "Edaganathar":"https://en.wikipedia.org/wiki/Edaganathar_temple",
    "Bhuminathar":"https://en.wikipedia.org/wiki/Bhuminatha_Swamy_Temple,_Tiruchuli",
    "Thirumetraliswarar":"https://en.wikipedia.org/wiki/Thirumetrali_Temple",
    "Kachi Anekadhangavadeswarar":"https://en.wikipedia.org/wiki/Kachi_Anekatangapadam_Temple",
    "Vedapureeswarar":"https://en.wikipedia.org/wiki/Vedapureeswarar_temple,_Thiruverkadu",
    "Kachabeswarar / Marundeeswarar":"https://en.wikipedia.org/wiki/Kachabeswarar_Temple,_Thirukachur",
    "Koneswarar":"https://en.wikipedia.org/wiki/Koneswarar_Temple,_Kudavasal",
    "Brahmapureeswarar":"https://en.wikipedia.org/wiki/Brahmapureeswarar_Temple,_Thirukkuvalai",
    "Thayumanavar":"https://en.wikipedia.org/wiki/Rockfort_Ucchi_Pillayar_Temple",
    "Yazhmoorinathar":"https://en.wikipedia.org/wiki/Yazhmurinathar_Temple"
  };

  // ============================================================
  // C. TAMIL WIKIPEDIA URL OVERRIDES
  // ============================================================
  const TAMIL_WIKI_OVERRIDES = {
    "Chidambaram Tillai Nataraja":"https://ta.wikipedia.org/wiki/சிதம்பரம்_நடராசர்_கோயில்",
    "Adi Kumbeswarar":"https://ta.wikipedia.org/wiki/கும்பேசுவரர்_கோயில்,_கும்பகோணம்",
    "Jambukeswarar":"https://ta.wikipedia.org/wiki/திருவானைக்காவல்_சம்புகேசுவரர்_கோயில்",
    "Aiyarappar":"https://ta.wikipedia.org/wiki/திருவையாறு_ஐயாறப்பர்_கோயில்",
    "Thyagarajar":"https://ta.wikipedia.org/wiki/திருவாரூர்_தியாகராஜர்_கோயில்",
    "Mayuranathar":"https://ta.wikipedia.org/wiki/மயூரநாதர்_கோயில்,_மயிலாடுதுறை",
    "Arunachaleswarar":"https://ta.wikipedia.org/wiki/திருவண்ணாமலை_அண்ணாமலையார்_கோயில்",
    "Ekambareswarar":"https://ta.wikipedia.org/wiki/காஞ்சி_ஏகாம்பரநாதர்_கோயில்",
    "Kapaleeswarar":"https://ta.wikipedia.org/wiki/கபாலீசுவரர்_கோவில்",
    "Meenakshi Sundareswarar":"https://ta.wikipedia.org/wiki/மீனாட்சி_அம்மன்_கோயில்",
    "Ramanathaswamy":"https://ta.wikipedia.org/wiki/இராமநாதசுவாமி_கோயில்",
    "Nellaiappar":"https://ta.wikipedia.org/wiki/நெல்லையப்பர்_கோயில்",
    "Pashupatinath":"https://ta.wikipedia.org/wiki/பசுபதிநாதர்_கோயில்",
    "Kedareshwarar":"https://ta.wikipedia.org/wiki/கேதார்நாத்_கோயில்",
    "Koneswaram":"https://ta.wikipedia.org/wiki/திருக்கோணேஸ்வரம்_கோயில்"
  };

  // ============================================================
  // D. CULTURAL NOTES
  // ============================================================
  const CULTURAL_NOTES = {
    "Vadaranyeswarar":"Pancha Sabha (Ratna Sabha) — site of Shiva's Urdhva Tandava; home of the legendary Tiruvalangadu Copper Plates of Rajendra Chola I (1018 CE)",
    "Aiyarappar":"Dakshina Kailasam — birthplace of Nandi; one of 7 Saptha Stana temples",
    "Pashupatinath":"UNESCO World Heritage Site (1979); 246 hectares with 518 mini-temples",
    "Swetharanyeswarar":"Called 'Adi Chidambaram' — Nataraja's cosmic dance performed HERE before Chidambaram",
    "Kedareshwarar":"Largely destroyed in 2013 floods; main shrine survived protected by 'Bhim Shila'; one of 12 Jyotirlingas",
    "Mallikarjuna":"Rare dual sacred site — both Jyotirlinga AND Shakti Peetha (Bhramaramba)",
    "Arunachaleswarar":"Pancha Bhoota (Fire/Agni); Karthigai Deepam lights a giant beacon atop the 2,668 ft Arunachala Hill",
    "Ekambareswarar":"Pancha Bhoota (Earth); houses the 3,500-year-old sacred mango tree with 4 branches for the 4 Vedas",
    "Amirthakadeswarar":"Ashta Veeratta site — where Shiva slew Yama as Kalasamharamurthy to save Markandeya",
    "Veerattaneswarar":"Ashta Veeratta (Tripura Samhara); where Appar converted from Jainism back to Saivism",
    "Veerateswarar":"Ashta Veeratta (Andhakasura Samhara); 64 Bhairavas manifested here; relieves Shukra's curse",
    "Avinasilingeshwarar":"'Dakshina Kashi'; site of Sundarar's miracle reviving a boy swallowed by a crocodile",
    "Sangameswarar (Kooduthurai)":"Triveni Sangamam of the South — confluence of Kaveri, Bhavani, and underground Amutha rivers",
    "Mahabaleshwar":"Houses the Atmalinga that Ganesha tricked Ravana into setting at Gokarna",
    "Kodumudinathar":"Mummoorthigal Sthalam (abode of all three of the Trimurti)",
    "Erumbiswarar":"Devas became ants (erumbu) to worship in secret from demon Tharukasura; Shiva became an ant-hill",
    "Mayuranathar":"Parvati cursed to be born as peahen worshipped here to lift the curse",
    "Thiruketheeswaram":"One of 5 ancient Ishwarams of Sri Lanka; razed by Portuguese 1575, rebuilt 1903"
  };

  // ============================================================
  // E. CURATED AUDIO
  // ============================================================
  const CURATED_AUDIO = {
    "Sattainathar / Brahmapureeswarar":"https://www.youtube.com/results?search_query=Sirkazhi+Brahmapureeswarar+Thevaram+Sambandar",
    "Chidambaram Tillai Nataraja":"https://www.youtube.com/results?search_query=Chidambaram+Thevaram+Thillai+Pathigam",
    "Jambukeswarar":"https://www.youtube.com/results?search_query=Thiruvanaikaval+Jambukeswarar+Thevaram",
    "Arunachaleswarar":"https://www.youtube.com/results?search_query=Thiruvannamalai+Thevaram+Annamalai",
    "Ekambareswarar":"https://www.youtube.com/results?search_query=Kanchipuram+Ekambareswarar+Thevaram",
    "Sri Kalahasteeswarar":"https://www.youtube.com/results?search_query=Kalahasti+Thevaram+Sambandar",
    "Thyagarajar":"https://www.youtube.com/results?search_query=Thiruvarur+Thyagaraja+Thevaram",
    "Aiyarappar":"https://www.youtube.com/results?search_query=Thiruvaiyaru+Aiyarappar+Thevaram",
    "Bhakthajaneswarar":"https://www.youtube.com/results?search_query=Thirunavalur+Sundarar+Thevaram",
    "Kripapureeswarar":"https://www.youtube.com/results?search_query=Pitha+Pirai+Sudi+Sundarar+Thevaram",
    "Ramanathaswamy":"https://www.youtube.com/results?search_query=Rameswaram+Thevaram+Sambandar",
    "Adi Kumbeswarar":"https://www.youtube.com/results?search_query=Kumbakonam+Adi+Kumbeswarar+Thevaram",
    "Meenakshi Sundareswarar":"https://www.youtube.com/results?search_query=Madurai+Aalavay+Thevaram+Sambandar",
    "Nellaiappar":"https://www.youtube.com/results?search_query=Tirunelveli+Nellaiappar+Thevaram",
    "Kapaleeswarar":"https://www.youtube.com/results?search_query=Mylapore+Kapaleeswarar+Thevaram",
    "Swetharanyeswarar":"https://www.youtube.com/results?search_query=Thiruvenkadu+Swetharanyeswarar+Thevaram",
    "Vaitheeswaran (Vaidyanathaswamy)":"https://www.youtube.com/results?search_query=Vaitheeswaran+Koil+Thevaram",
    "Mayuranathar":"https://www.youtube.com/results?search_query=Mayiladuthurai+Mayuranathar+Thevaram",
    "Mahalingeswarar":"https://www.youtube.com/results?search_query=Thiruvidaimarudur+Mahalingeswarar+Thevaram",
    "Veerattaneswarar":"https://www.youtube.com/results?search_query=Thiruvathigai+Veerattanam+Appar+Thevaram",
    "Veerateswarar":"https://www.youtube.com/results?search_query=Thirukovilur+Veerateeswarar+Thevaram",
    "Vadaranyeswarar":"https://www.youtube.com/results?search_query=Thiruvalangadu+Urdhva+Tandava+Thevaram",
    "Pashupatinath":"https://www.youtube.com/results?search_query=Pashupatinath+Thevaram+Sambandar",
    "Kedareshwarar":"https://www.youtube.com/results?search_query=Kedarnath+Thevaram",
    "Mallikarjuna":"https://www.youtube.com/results?search_query=Srisailam+Thevaram",
    "Thirumarai Kadar (Vedaranyeswarar)":"https://www.youtube.com/results?search_query=Vedaranyam+Thevaram"
  };

  // ============================================================
  // F. CSS INJECTION
  // ============================================================
  const styleEl = document.createElement("style");
  styleEl.textContent =
    ".lang-toggle{position:fixed;top:8px;right:8px;z-index:1100;padding:6px 12px;background:#FFF8E7;color:#A0522D;border:1.5px solid #D4AF37;border-radius:18px;font-weight:700;cursor:pointer;font-size:.85rem;box-shadow:0 2px 6px rgba(0,0,0,.2)}" +
    ".lang-toggle:hover{background:#D4AF37;color:#fff}" +
    ".coord-panel{margin-top:8px;padding:7px 9px;background:#FFF8E7;border:1px solid #e8dcc0;border-radius:5px}" +
    ".coord-row{display:flex;align-items:center;gap:6px;font-size:.74rem;margin-bottom:5px}" +
    ".coord-label{color:#7a6b5a;font-weight:600;text-transform:uppercase;font-size:.6rem;letter-spacing:.5px}" +
    ".coord-value{font-family:'SF Mono',Consolas,monospace;color:#2A1810;font-size:.78rem;font-weight:600;user-select:all}" +
    ".coord-actions{display:flex;gap:5px;flex-wrap:wrap}" +
    ".coord-btn,.audio-btn{display:inline-flex;align-items:center;gap:3px;padding:3px 8px;border:1.5px solid #D2691E;border-radius:4px;background:#fff;color:#A0522D;font-size:.68rem;font-weight:600;cursor:pointer;text-decoration:none;white-space:nowrap;transition:all .15s}" +
    ".coord-btn:hover{background:#D2691E;color:#fff}" +
    ".coord-btn-gmap{border-color:#4285F4;color:#4285F4}" +
    ".coord-btn-gmap:hover{background:#4285F4;color:#fff}" +
    ".coord-btn-apple{border-color:#000;color:#000}" +
    ".coord-btn-apple:hover{background:#000;color:#fff}" +
    ".coord-btn-osm{border-color:#7EBC6F;color:#4F7D3E}" +
    ".coord-btn-osm:hover{background:#7EBC6F;color:#fff}" +
    ".coord-btn.copied{background:#4CAF50;color:#fff;border-color:#4CAF50}" +
    ".audio-btn{border-color:#8B5A2B;color:#8B5A2B;background:linear-gradient(135deg,#fff8e7 0%,#fef0c7 100%)}" +
    ".audio-btn:hover{background:linear-gradient(135deg,#D2691E 0%,#A0522D 100%);color:#fff}";
  document.head.appendChild(styleEl);

  // ============================================================
  // G. APPLY DATA PATCHES
  // ============================================================
  function applyDataPatches() {
    if (typeof TEMPLES === "undefined") { setTimeout(applyDataPatches, 100); return; }
    let taApplied = 0, wikiFixed = 0;
    TEMPLES.forEach(function(t) {
      if (!t.name_ta && NAME_TA_MORE[t.name]) { t.name_ta = NAME_TA_MORE[t.name]; taApplied++; }
      // Use Special:Search?go=Go for ALL temples — eliminates 404s entirely.
// If the article exists, Wikipedia auto-redirects to it.
// If renamed, the redirect chain handles it.
// If missing, user sees relevant search results.
const searchQuery = t.name + " Temple " + t.town;
const safeFallback = "https://en.wikipedia.org/wiki/Special:Search?search=" + encodeURIComponent(searchQuery) + "&go=Go";

// Prefer curated direct URL if it exists, but fall back to safe search URL
const newWiki = WIKI_OVERRIDES[t.name] || safeFallback;
      t.wiki_en = newWiki;
      t.wiki_ta = TAMIL_WIKI_OVERRIDES[t.name] || newWiki;
      t.wiki = newWiki;
      if (newWiki !== t.wiki) wikiFixed++;
      if (CULTURAL_NOTES[t.name]) {
        t.notes = t.notes && t.notes.trim()
          ? "★ " + CULTURAL_NOTES[t.name] + " · " + t.notes
          : "★ " + CULTURAL_NOTES[t.name];
      }
    });
    console.log("[pps_v3_patch] Applied Tamil names to", taApplied, "temples; fixed", wikiFixed, "Wiki URLs");
    if (typeof window.render === "function") window.render();
  }

  // ============================================================
  // H. LANGUAGE TOGGLE
  // ============================================================
  function setupLangToggle() {
    const savedLang = localStorage.getItem("pps-lang") || "en";
    const btn = document.createElement("button");
    btn.className = "lang-toggle";
    btn.textContent = savedLang === "en" ? "தமிழ்" : "EN";
    btn.onclick = function() {
      const newLang = btn.textContent === "தமிழ்" ? "ta" : "en";
      localStorage.setItem("pps-lang", newLang);
      btn.textContent = newLang === "en" ? "தமிழ்" : "EN";
      TEMPLES.forEach(function(t) { t.wiki = newLang === "ta" ? (t.wiki_ta || t.wiki_en) : t.wiki_en; });
      const searchEl = document.getElementById("search");
      if (searchEl) searchEl.placeholder = newLang === "ta" ? "கோயில், ஊர், மாவட்டம் தேடுக..." : "Search temple, town, district...";
      const resetEl = document.getElementById("reset");
      if (resetEl) resetEl.textContent = newLang === "ta" ? "மீட்டமை" : "Reset";
      // Update the Tier label
      const tierLbl = document.querySelector('.label-mini');
      if (tierLbl) tierLbl.textContent = newLang === "ta" 
        ? "கல்வெட்டு ஆவணப்படுத்தும் நிலைகள்:"
        : "Tiers of Epigraphy / கல்வெட்டு:";
      if (typeof window.render === "function") window.render();
    };
    document.body.appendChild(btn);
  }

  // ============================================================
  // I. COORDS + AUDIO PANEL (cards only)
  // ============================================================
  function buildCoordPanel(t) {
    if (t.lat == null || t.lng == null) return "";
    const lat = parseFloat(t.lat).toFixed(4);
    const lng = parseFloat(t.lng).toFixed(4);
    const coords = lat + ", " + lng;
    const gmap = "https://www.google.com/maps?q=" + lat + "," + lng + "&z=17";
    const apple = "https://maps.apple.com/?ll=" + lat + "," + lng + "&z=17&q=" + encodeURIComponent(t.name);
    const osm = "https://www.openstreetmap.org/?mlat=" + lat + "&mlon=" + lng + "&zoom=17";
    const audioUrl = CURATED_AUDIO[t.name] || "https://www.youtube.com/results?search_query=" + encodeURIComponent(t.town + " " + t.name + " Thevaram pathigam");
    const audioLabel = CURATED_AUDIO[t.name] ? "🎵 Listen ★" : "🎵 Listen";

    return '<div class="coord-panel">' +
      '<div class="coord-row"><span class="coord-label">📍</span><span class="coord-value">' + coords + '</span></div>' +
      '<div class="coord-actions">' +
        '<a data-action="open" data-url="' + gmap + '" class="coord-btn coord-btn-gmap">🗺️ Google</a>' +
        '<a data-action="open" data-url="' + apple + '" class="coord-btn coord-btn-apple">🍎 Apple</a>' +
        '<a data-action="open" data-url="' + osm + '" class="coord-btn coord-btn-osm">🌍 OSM</a>' +
        '<button data-action="copy" data-coords="' + coords + '" class="coord-btn">📋 Copy</button>' +
        '<button data-action="open" data-url="' + audioUrl + '" class="audio-btn">' + audioLabel + '</button>' +
      '</div>' +
    '</div>';
  }

  function injectCardPanels() {
    document.querySelectorAll('.card[data-sno]').forEach(function(card) {
      if (card.querySelector('.coord-panel')) return;
      const sno = parseInt(card.dataset.sno);
      const temple = TEMPLES.find(function(x) { return x.sno === sno; });
      if (temple) card.insertAdjacentHTML('beforeend', buildCoordPanel(temple));
    });
  }

  function injectTamilNames() {
    document.querySelectorAll('.card[data-sno]').forEach(function(card) {
      if (card.querySelector('.card-name-ta')) return;
      if (card.querySelector('.card-name-ta-injected')) return;
      const sno = parseInt(card.dataset.sno);
      const t = TEMPLES.find(function(x) { return x.sno === sno; });
      if (!t) return;
      const ta = t.name_ta || NAME_TA_MORE[t.name];
      if (!ta) return;
      const nameEl = card.querySelector('.card-name');
      if (!nameEl) return;
      const div = document.createElement('div');
      div.className = 'card-name-ta-injected';
      div.textContent = ta;
      div.style.cssText = 'font-family:"Noto Serif Tamil",serif;font-size:0.9rem;color:#A0522D;font-weight:600;margin-top:3px;display:block;width:100%;';
      const head = card.querySelector('.card-head');
      if (head) head.insertAdjacentElement('afterend', div);
    });
  }

  function watchCards() {
    const cardsContainer = document.getElementById('cards');
    if (!cardsContainer) { setTimeout(watchCards, 200); return; }
    injectTamilNames();
    injectCardPanels();
    const observer = new MutationObserver(function() {
      setTimeout(function() { injectTamilNames(); injectCardPanels(); }, 10);
    });
    observer.observe(cardsContainer, { childList: true, subtree: false });
  }

  // ============================================================
  // J. GLOBAL CLICK DELEGATE for coord/audio buttons
  // ============================================================
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    e.stopPropagation();
    e.preventDefault();
    const action = btn.dataset.action;
    if (action === 'open') {
      const url = btn.dataset.url;
      if (url) window.open(url, '_blank', 'noopener,noreferrer');
    } else if (action === 'copy') {
      const coords = btn.dataset.coords;
      const success = function() {
        const o = btn.innerHTML;
        btn.innerHTML = "✓ Copied!";
        btn.classList.add("copied");
        setTimeout(function() { btn.innerHTML = o; btn.classList.remove("copied"); }, 1500);
      };
      if (navigator.clipboard) {
        navigator.clipboard.writeText(coords).then(success).catch(function() { fallback(coords) && success(); });
      } else {
        fallback(coords) && success();
      }
    }
  }, true);

  function fallback(t) {
    try {
      const ta = document.createElement("textarea");
      ta.value = t;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      const s = document.execCommand("copy");
      document.body.removeChild(ta);
      return s;
    } catch(e) { return false; }
  }

  // ============================================================
  // K. BUILD HERO IMAGE (Naalvar painting)
  // ============================================================
  function buildHero() {
    const placeholder = document.getElementById('hero-placeholder');
    if (placeholder) placeholder.remove();
    if (document.querySelector('.hero-image')) return;

    const hero = document.createElement('div');
    hero.className = 'hero-image';
    hero.setAttribute('style', 'position:relative;width:100%;height:auto;max-height:360px;overflow:hidden;background:#2A1810;border-bottom:3px solid #D4AF37;display:block;');

    const img = document.createElement('img');
    img.src = 'naalvar-cover.jpeg';
    img.alt = 'The Naalvar — Sambandar, Appar, Sundarar, Manikkavasakar';
    img.setAttribute('style', 'width:100%;height:auto;max-height:360px;object-fit:cover;object-position:center 35%;display:block;');
    img.onerror = function() {
      hero.style.background = 'linear-gradient(135deg,#D2691E,#A0522D)';
      hero.style.height = '200px';
      img.style.display = 'none';
    };

    const overlay = document.createElement('div');
    overlay.setAttribute('style', 'position:absolute;bottom:0;left:0;right:0;background:linear-gradient(180deg,transparent 0%,rgba(42,24,16,0.9) 100%);padding:40px 24px 16px;color:#fff;');

    const captionEn = document.createElement('div');
    captionEn.textContent = 'The Naalvar — the four Saiva poet-saints whose hymns define these 276 sthalas';
    captionEn.setAttribute('style', 'font-size:0.95rem;font-weight:500;margin-bottom:4px;');

    const captionTa = document.createElement('div');
    captionTa.textContent = 'நால்வர் — இந்த 276 தலங்களை இசை பாடிய சைவ நாயன்மார்கள்';
    captionTa.setAttribute('style', 'font-family:"Noto Serif Tamil",serif;font-size:0.9rem;color:#D4AF37;font-weight:500;');

    overlay.appendChild(captionEn);
    overlay.appendChild(captionTa);
    hero.appendChild(img);
    hero.appendChild(overlay);

    document.body.insertBefore(hero, document.body.firstChild);
  }

  // ============================================================
  // BOOT
  // ============================================================
  function boot() {
    applyDataPatches();
    setupLangToggle();
    watchCards();
    buildHero();
    rebuildFooter();
    setupHeroParallax();
    if (typeof gtag === "function") {
      gtag('event', 'patch_loaded', { event_category: 'v3', event_label: 'pps_v3_patch' });
    }
  }

  // ============================================================
  // M. REBUILD FOOTER (avoids HTML escaping issues)
  // ============================================================
  function rebuildFooter() {
    const footer = document.querySelector('footer');
    if (!footer) return;
    
    footer.innerHTML = '';
    
    function makeLink(text, href, color) {
      const a = document.createElement('a');
      a.href = href;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = text;
      if (color) a.style.color = color;
      return a;
    }
    
    function makeKbd(text) {
      const k = document.createElement('span');
      k.className = 'kbd';
      k.textContent = text;
      return k;
    }
    
    function makeRow(labelText, parts, isCta) {
      const div = document.createElement('div');
      div.className = 'footer-row' + (isCta ? ' footer-cta' : '');
      if (labelText) {
        const strong = document.createElement('strong');
        strong.textContent = labelText + ' ';
        div.appendChild(strong);
      }
      parts.forEach(function(p) {
        if (typeof p === 'string') {
          div.appendChild(document.createTextNode(p));
        } else {
          div.appendChild(p);
        }
      });
      footer.appendChild(div);
    }
    
    // Row 1: Sources

makeRow('Sources:', [
  '276-temple canonical list from ',
  makeLink('aanmeegam.org', 'https://aanmeegam.org/en/temples/276-shiva-thevaram-thiruthalangal/'),
  ' & Wikipedia · coordinates curated & geocoded via OpenStreetMap Nominatim · Tamil names from Tamil Wikipedia, shaivam.org, greenmesg.org · Kalvettu references from ',
  makeLink('SII Vols I-XIX (archive.org)', 'https://archive.org/details/in.ernet.dli.2015.95780'),
  ', ASI Annual Reports on Epigraphy, and ',
  makeLink('whatisindia.com', 'https://www.whatisindia.com/inscriptions/south_indian_inscriptions/'),
  '.'
]);
    
    // Row 2: Map credits
    makeRow('Map credits:', [
      'Streets map data © ',
      makeLink('OpenStreetMap', 'https://www.openstreetmap.org/copyright'),
      ' contributors · Satellite & topographic basemaps © ',
      makeLink('Esri', 'https://www.esri.com'),
      ', Maxar, Earthstar Geographics, National Geographic, USGS & the GIS User Community.'
    ]);
    
    // Row 3: Shortcuts
    makeRow('Shortcuts:', [
      makeKbd('/'), ' search · ',
      makeKbd('r'), ' reset · ',
      makeKbd('1-4'), ' toggle tiers'
    ]);
    
    // Row 4: Call to action
    makeRow(null, [
      '📝 Spotted an error? ',
      makeLink('Suggest a correction →', 'https://github.com/gurusubbaraman/paadal-petra-sthalams/issues/new/choose', '#D4AF37'),
      ' · ',
      makeLink('View source on GitHub', 'https://github.com/gurusubbaraman/paadal-petra-sthalams', '#D4AF37')
    ], true);
  }
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

    // ============================================================
  // L. HERO PARALLAX FADE-OUT ON SCROLLING
  // ============================================================
  function setupHeroParallax() {
    const hero = document.querySelector('.hero-image');
    if (!hero) { setTimeout(setupHeroParallax, 200); return; }
    
    const overlay = hero.querySelector('div'); // the dark overlay with captions
    const heroHeight = hero.offsetHeight;
    
    let ticking = false;
    function updateHero() {
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / heroHeight, 1); // 0 to 1
      
      // Image moves up slightly slower than scroll (parallax)
      hero.style.transform = `translateY(${scrollY * 0.4}px)`;
      
      // Fade out as you scroll
      hero.style.opacity = String(1 - progress);
      
      // Caption overlay fades faster
      if (overlay) overlay.style.opacity = String(1 - progress * 1.5);
      
      ticking = false;
    }
    
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(updateHero);
        ticking = true;
      }
    }, { passive: true });
  }
  
  // Add this line to your boot() function:
  // setupHeroParallax();
})();


/* ============================================================ */
/* SESSION_0N_LOADED — Sort cards by SNo (Nov 2026)             */
/* Replaces tier-based default sort with canonical Tevaram order */
/* ============================================================ */
(function(){
  window.SESSION_0N_LOADED = true;
  console.log("[Session 0N] SNo sort patch loading...");
  
  function sortCardsBySno() {
    var cardsWrapper = document.getElementById("cards");
    if (!cardsWrapper) return false;
    
    var allCards = Array.prototype.slice.call(cardsWrapper.querySelectorAll(".card"));
    if (allCards.length === 0) return false;
    
    // Sort by data-sno numerically
    allCards.sort(function(a, b) {
      var snoA = parseInt(a.getAttribute("data-sno")) || 0;
      var snoB = parseInt(b.getAttribute("data-sno")) || 0;
      return snoA - snoB;
    });
    
    // Reappend in sorted order (preserves event handlers)
    var fragment = document.createDocumentFragment();
    allCards.forEach(function(card) {
      fragment.appendChild(card);
    });
    cardsWrapper.appendChild(fragment);
    
    console.log("[Session 0N] Sorted " + allCards.length + " cards by SNo");
    return true;
  }
  
  function initSession0N() {
    // Try immediate sort
    var success = sortCardsBySno();
    
    if (!success) {
      // Retry after brief delay if cards not yet rendered
      setTimeout(initSession0N, 200);
      return;
    }
    
    // Watch for filter changes / card re-renders — re-sort as needed
    var cardsWrapper = document.getElementById("cards");
    if (cardsWrapper) {
      var reorderObserver = new MutationObserver(function(mutations) {
        // Only re-sort if children changed (add/remove), not attribute changes
        var childChange = mutations.some(function(m) { return m.type === "childList"; });
        if (childChange) {
          // Debounce to avoid infinite loops from our own reordering
          if (window._pps0N_reorderTimer) clearTimeout(window._pps0N_reorderTimer);
          window._pps0N_reorderTimer = setTimeout(function() {
            sortCardsBySno();
          }, 100);
        }
      });
      reorderObserver.observe(cardsWrapper, { childList: true });
    }
    
    console.log("[Session 0N] SNo sort patch active");
  }
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() { setTimeout(initSession0N, 800); });
  } else {
    setTimeout(initSession0N, 800);
  }
})();


/* ============================================================ */
/* SESSION_1A_COMBINED_LOADED — Framework + NAYANMARS (Nov 2026)*/
/* Consolidates Session 1A framework + 1A.1 NAYANMARS/cross-trad */
/* Proper initialization order — no ordering bugs               */
/* ============================================================ */
(function(){
  window.SESSION_1A_COMBINED_LOADED = true;
  console.log("[Session 1A Combined] Loading framework + NAYANMARS + cross-tradition...");
  
  // ============================================================
  // STEP 1: Initialize TEMPLE_ENRICHMENT FIRST (before any references)
  // ============================================================
  if (!window.TEMPLE_ENRICHMENT) window.TEMPLE_ENRICHMENT = {};
  
  // ============================================================
  // STEP 2: NAYANMARS Dictionary (63 Nayanmars per Periya Puranam)
  // ============================================================
  window.NAYANMARS = {
    // Naalvar (the 4 foundational saints)
    sambandar: { short: "Sambandar", full: "Thirujnana Sambandar", tamil: "திருஞானசம்பந்தர்", century: "7th CE", total_pathigams: 384, temples_sung: 219, hero_note: "Child prodigy from Sirkazhi; nursed by Devi", color: "#D2691E", avatar: "🎼", born_place_sno: 47, order: 1 },
    appar: { short: "Appar", full: "Thirunavukkarasar", tamil: "திருநாவுக்கரசர்", century: "6-7th CE", total_pathigams: 313, temples_sung: 125, hero_note: "Former Jain who reconverted; older contemporary of Sambandar", color: "#8B4513", avatar: "📿", moksha_place_sno: 153, order: 2 },
    sundarar: { short: "Sundarar", full: "Sundaramurthi Nayanar", tamil: "சுந்தரமூர்த்தி நாயனார்", century: "8th CE", total_pathigams: 100, temples_sung: 84, hero_note: "Called 'friend of Shiva'; ascended to Kailasa on white elephant", color: "#B8860B", avatar: "🌺", born_place_sno: 228, order: 3 },
    manickavasakar: { short: "Manickavasakar", full: "Manickavasakar", tamil: "மாணிக்கவாசகர்", century: "9th CE", total_pathigams: 51, temples_sung: 10, hero_note: "Composed Thiruvasagam and Thirukkovaiyar; merged into Nataraja at Chidambaram", color: "#4A0E4E", avatar: "💎", moksha_place_sno: 3, order: 4 },
    // The 63 Nayanmars canonical Periya Puranam order
    thillai_andanar: { short: "Thillai Andanar", full: "Thillaivaazh Andanar", tamil: "தில்லைவாழ் அந்தணர்", hero_note: "3000 Brahmins of Chidambaram", associated_sno: 3, order: 5 },
    murugar: { short: "Murugar", full: "Murugar Nayanar", tamil: "முருகர் நாயனார்", hero_note: "Cheerava Devotee of Puhalur", order: 6 },
    rudra_pasupathi: { short: "Rudra Pasupathi", full: "Rudra Pasupathi Nayanar", tamil: "ருத்ர பசுபதி நாயனார்", hero_note: "Stood one-legged in water reciting Rudram", order: 7 },
    thiruneelakanta: { short: "Thiruneelakanta", full: "Thiru Neelakanta Yazhpanar", tamil: "திருநீலகண்ட யாழ்ப்பாணர்", hero_note: "Sambandar's musical accompanist; yazh (harp) player", order: 8 },
    iyarpagai: { short: "Iyarpagai", full: "Iyarpagai Nayanar", tamil: "இயற்பகை நாயனார்", hero_note: "Gave his wife to a disguised Shiva", associated_sno: 40, order: 9 },
    ilayankudi_maara: { short: "Ilayankudi Maara", full: "Ilayankudi Maara Nayanar", tamil: "இளையான்குடி மாற நாயனார்", hero_note: "Cooked his family for Shiva-devotee guest", order: 10 },
    meiporul: { short: "Meiporul", full: "Meiporul Nayanar", tamil: "மெய்ப்பொருள் நாயனார்", hero_note: "Set free his assassin who wore Shiva devotee garb", associated_sno: 130, order: 11 },
    viralminda: { short: "Viralminda", full: "Viralminda Nayanar", tamil: "விறல்மிண்ட நாயனார்", hero_note: "Cut off his tongue for uttering an ill-thought of a devotee", order: 12 },
    amaraneethi: { short: "Amarneedhi", full: "Amaraneethi Nayanar", tamil: "அமர்நீதி நாயனார்", hero_note: "Weighed himself equal to a Shiva-devotee's loincloth", order: 13 },
    eripatha: { short: "Eripatha", full: "Eripatha Nayanar", tamil: "எறிபத்த நாயனார்", hero_note: "Killed elephant that trampled Shiva-devotee's flowers", associated_sno: 210, order: 14 },
    enathinathar: { short: "Enathinathar", full: "Enathinathar Nayanar", tamil: "ஏனாதிநாதர் நாயனார்", hero_note: "Warrior who spared his enemy wearing Rudraksha", order: 15 },
    kannappar: { short: "Kannappar", full: "Kannappa Nayanar", tamil: "கண்ணப்ப நாயனார்", hero_note: "Offered his own eyes to bleeding Shiva-lingam", associated_sno: 249, order: 16 },
    kungiliya_kalaya: { short: "Kungiliya Kalaya", full: "Kungiliya Kalaya Nayanar", tamil: "குங்கிலியக்கலய நாயனார்", hero_note: "Sold family assets for incense offering to Shiva", order: 17 },
    maanakkanchara: { short: "Maanakkanchara", full: "Maanakkanchara Nayanar", tamil: "மானக்கஞ்சாற நாயனார்", hero_note: "Cut off his daughter's hair for Shiva-devotee's request", order: 18 },
    arivattaya: { short: "Arivattaya", full: "Arivattaya Nayanar", tamil: "அரிவாட்டாய நாயனார்", hero_note: "Grew ragi devotedly for Shiva; sacrificed self when harvest failed", order: 19 },
    aanaya: { short: "Aanaya", full: "Aanaya Nayanar", tamil: "ஆனாய நாயனார்", hero_note: "Cowherd who played Panchakshara mantra on flute", order: 20 },
    murthi_nayanar: { short: "Murthi", full: "Murthi Nayanar", tamil: "மூர்த்தி நாயனார்", hero_note: "Sandalwood merchant; ground his own elbow for sandal paste", associated_sno: 201, order: 21 },
    thiruneelanakka: { short: "Thiruneelanakka", full: "Thiruneelanakka Nayanar", tamil: "திருநீலநக்க நாயனார்", hero_note: "Chettinadu Brahmin devotee", associated_sno: 71, order: 22 },
    nami_nandi_adigal: { short: "Nami Nandi Adigal", full: "Nami Nandi Adigal", tamil: "நமிநந்தி அடிகள்", hero_note: "Lit lamps at Arunachaleswarar with water when oil ran out", associated_sno: 226, order: 23 },
    eyarkon_kalikkama: { short: "Eyarkon Kalikkama", full: "Eyarkon Kalikkama Nayanar", tamil: "எயற்கோன் கலிக்காம நாயனார்", hero_note: "Cured Sundarar's stomach ailment", order: 24 },
    thirumular: { short: "Thirumular", full: "Thirumular", tamil: "திருமூலர்", hero_note: "Yogic saint; composed Thirumandhiram (3000 verses)", associated_sno: 34, order: 25 },
    dandi_adigal: { short: "Dandi Adigal", full: "Dandi Adigal", tamil: "தண்டி அடிகள்", hero_note: "Blind devotee of Thiruvarur temple", associated_sno: 130, order: 26 },
    murkha: { short: "Murkha", full: "Murkha Nayanar", tamil: "மூர்க்க நாயனார்", hero_note: "Gambled to feed Shiva-devotees; won consistently", order: 27 },
    somasira: { short: "Somasira", full: "Somasira Nayanar", tamil: "சோமாசி மாற நாயனார்", hero_note: "Performed Somayaga to honor Sundarar", order: 28 },
    sakkiya: { short: "Sakkiya", full: "Sakkiya Nayanar", tamil: "சாக்கிய நாயனார்", hero_note: "Buddhist-turned-Shaiva; worshipped by throwing stones", order: 29 },
    sirappuli: { short: "Sirappuli", full: "Sirappuli Nayanar", tamil: "சிறப்புலி நாயனார்", hero_note: "Brahmin devotee of Thiruvakkarai", associated_sno: 263, order: 30 },
    siruthonda: { short: "Siruthonda", full: "Siruthonda Nayanar", tamil: "சிறுத்தொண்ட நாயனார்", hero_note: "Cooked his son for disguised Shiva-devotee (Bhairava)", associated_sno: 112, order: 31 },
    cheraman_perumal: { short: "Cheraman Perumal", full: "Cheraman Perumal Nayanar", tamil: "சேரமான் பெருமாள் நாயனார்", hero_note: "Chera king; friend of Sundarar; composed Ponvannaththandaadi", associated_sno: 271, order: 32 },
    gananatha: { short: "Gananatha", full: "Gananatha Nayanar", tamil: "கணநாத நாயனார்", hero_note: "Head of Shiva-ganas", order: 33 },
    kootruva: { short: "Kootruva", full: "Kootruva Nayanar", tamil: "கூற்றுவ நாயனார்", hero_note: "Chola king who sought Chidambaram crown; refused by Nataraja", associated_sno: 3, order: 34 },
    poyyadimai: { short: "Poyyadimai", full: "Poyyadimai Illatha Pulavar", tamil: "பொய்யடிமை இல்லாத புலவர்", hero_note: "Poet who composed only truth about Shiva", order: 35 },
    pugal_chola: { short: "Pugal Chola", full: "Pugal Chola Nayanar", tamil: "புகழ்ச்சோழ நாயனார்", hero_note: "Chola king who honored Sambandar", order: 36 },
    narasinga_muniyaraya: { short: "Narasinga Muniyaraya", full: "Narasinga Muniyaraya Nayanar", tamil: "நரசிங்க முனையரைய நாயனார்", hero_note: "Warrior-devotee", order: 37 },
    adipatha: { short: "Adipatha", full: "Adipatha Nayanar", tamil: "அதிபத்த நாயனார்", hero_note: "Fisherman who dedicated first daily catch to Shiva", order: 38 },
    kalikkamba: { short: "Kalikkamba", full: "Kalikkamba Nayanar", tamil: "கலிக்கம்ப நாயனார்", hero_note: "Devotee whose wife tried to disturb Shiva-devotee's meal", order: 39 },
    kalia: { short: "Kalia", full: "Kalia Nayanar", tamil: "கலிய நாயனார்", hero_note: "Oil-monger who dedicated all oil to Shiva-lamps", order: 40 },
    satti: { short: "Satti", full: "Satti Nayanar", tamil: "சத்தி நாயனார்", hero_note: "Cut off tongue of one who spoke ill of Shiva-devotees", order: 41 },
    aiyadigal_kadavarkon: { short: "Aiyadigal Kadavarkon", full: "Aiyadigal Kadavarkon Nayanar", tamil: "ஐயடிகள் காடவர்கோன் நாயனார்", hero_note: "Pallava king who abdicated for Shiva-worship", associated_sno: 237, order: 42 },
    kanampulla: { short: "Kanampulla", full: "Kanampulla Nayanar", tamil: "கணம்புல்ல நாயனார்", hero_note: "Grass-cutter who used hair as wick for Shiva-lamp", order: 43 },
    kari_nayanar: { short: "Kari", full: "Kari Nayanar", tamil: "காரி நாயனார்", hero_note: "Poet-devotee", order: 44 },
    ninrasir_nedumara: { short: "Ninrasir Nedumara", full: "Ninrasir Nedumara Nayanar", tamil: "நின்றசீர் நெடுமாற நாயனார்", hero_note: "Pandya king; father of Koon Pandyan; devotee patron", associated_sno: 201, order: 45 },
    vayilar: { short: "Vayilar", full: "Vayilar Nayanar", tamil: "வாயிலார் நாயனார்", hero_note: "Silent worshipper", order: 46 },
    munaiyaduvar: { short: "Munaiyaduvar", full: "Munaiyaduvar Nayanar", tamil: "முனையடுவார் நாயனார்", hero_note: "Warrior-devotee", order: 47 },
    kazharsingar: { short: "Kazharsingar", full: "Kazharsingar Nayanar", tamil: "கழற்சிங்க நாயனார்", hero_note: "Cut off queen's nose for smelling flowers meant for Shiva", order: 48 },
    idangazhi: { short: "Idangazhi", full: "Idangazhi Nayanar", tamil: "இடங்கழி நாயனார்", hero_note: "Chera king; released prisoner devotee", order: 49 },
    seruthunai: { short: "Seruthunai", full: "Seruthunai Nayanar", tamil: "செருத்துணை நாயனார்", hero_note: "Cut off queen's nose for smelling flowers", order: 50 },
    pugazhthunai: { short: "Pugazhthunai", full: "Pugazhthunai Nayanar", tamil: "புகழ்த்துணை நாயனார்", hero_note: "Continued Shiva-worship even in famine", order: 51 },
    kotpuli: { short: "Kotpuli", full: "Kotpuli Nayanar", tamil: "கோட்புலி நாயனார்", hero_note: "Killed his own family for taking rice meant for Shiva-worship", order: 52 },
    pusalar: { short: "Pusalar", full: "Pusalar Nayanar", tamil: "பூசலார் நாயனார்", hero_note: "Built temple in his mind prioritized over stone temple", associated_sno: 244, order: 53 },
    mangayarkkarasi: { short: "Mangayarkkarasi", full: "Mangayarkkarasi Nayanar", tamil: "மங்கையர்க்கரசி நாயனார்", hero_note: "Pandya queen; brought Sambandar to defeat Jains", associated_sno: 201, order: 54 },
    nesa: { short: "Nesa", full: "Nesa Nayanar", tamil: "நேச நாயனார்", hero_note: "Weaver devotee who clothed all Shiva-devotees", order: 55 },
    kochengat_chola: { short: "Kochengat Chola", full: "Kochengat Chola Nayanar", tamil: "கோச்செங்கட் சோழ நாயனார்", hero_note: "Early Chola king; built 70 Shiva temples with narrow doors", associated_sno: 34, order: 56 },
    thirunilakanta_kuyava: { short: "Thirunilakanta Kuyavar", full: "Thirunilakanta Kuyava Nayanar", tamil: "திருநீலகண்ட குயவ நாயனார்", hero_note: "Potter devotee of Chidambaram", associated_sno: 3, order: 57 },
    sadaiya: { short: "Sadaiya", full: "Sadaiya Nayanar", tamil: "சடைய நாயனார்", hero_note: "Father of Sundarar", associated_sno: 228, order: 58 },
    isaijnaniyar: { short: "Isaijnaniyar", full: "Isaijnaniyar Nayanar", tamil: "இசைஞானியார் நாயனார்", hero_note: "Mother of Sundarar", associated_sno: 228, order: 59 },
    // Beloved additional Nayanmars
    nandanar: { short: "Nandanar", full: "Nandanar (Thirunalaipovar)", tamil: "நந்தனார்", hero_note: "Dalit devotee; Nandi-shifted-aside miracle; moksha at Chidambaram", associated_sno: 53, order: 60 },
    karaikkal_ammaiyar: { short: "Karaikkal Ammaiyar", full: "Karaikkal Ammaiyar (Punithavati)", tamil: "காரைக்காலம்மையார்", century: "6th CE (pre-Naalvar)", hero_note: "Female saint; composed Arputha Thiruvandhadhi; danced with Shiva at Thiruvalangadu", associated_sno: 258, order: 61 }
  };
  
  // ============================================================
  // STEP 3: CROSS-TRADITION CATEGORIES
  // ============================================================
  window.CROSS_TRADITION_TYPES = {
    "sri_vaishnava": { label_en: "Sri Vaishnava", label_ta: "ஶ்ரீ வைஷ்ணவ", color: "#1E5AA0", icon: "🕉️" },
    "shakta": { label_en: "Shakta", label_ta: "ஶாக்த", color: "#DC143C", icon: "🌺" },
    "kaumara": { label_en: "Kaumara (Murugan)", label_ta: "கௌமார", color: "#FF8C00", icon: "🦚" },
    "vaidika": { label_en: "Vaidika (Vedic)", label_ta: "வைதிக", color: "#8B4513", icon: "📿" },
    "ashta_veeratta": { label_en: "Ashta Veeratta", label_ta: "அஷ்ட வீரட்ட", color: "#7c5a00", icon: "⚡" },
    "sapta_vidanga": { label_en: "Sapta Vidanga", label_ta: "சப்த விடங்க", color: "#7c5a00", icon: "🌸" },
    "pancha_bhoota": { label_en: "Pancha Bhoota", label_ta: "பஞ்ச பூத", color: "#7c5a00", icon: "🔥" },
    "other": { label_en: "Other", label_ta: "மற்ற", color: "#666", icon: "✨" }
  };
  
  // ============================================================
  // STEP 4: CSS INJECTION
  // ============================================================
  var style = document.createElement("style");
  style.textContent = [
    ".pps-enrich { margin-top: 8px; padding-top: 8px; border-top: 1px dashed rgba(139,0,0,0.15); }",
    ".pps-enrich-goddess { display: flex; align-items: center; gap: 6px; font-size: 12px; color: #8B0000; margin-bottom: 6px; font-weight: 600; }",
    ".pps-enrich-sthala { font-size: 12px; color: #4a3528; line-height: 1.5; margin: 6px 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }",
    ".pps-enrich-sthala-link { display: inline-block; margin-top: 3px; font-size: 11px; font-weight: 600; color: #A0522D; padding: 2px 6px; border-radius: 4px; background: rgba(212,175,55,0.15); cursor: pointer; }",
    ".pps-enrich-meta { display: flex; gap: 12px; margin-top: 6px; font-size: 11px; color: #7a6b5a; flex-wrap: wrap; }",
    ".pps-enrich-meta-item { display: inline-flex; align-items: center; gap: 3px; }",
    ".pps-enrich-festivals { margin-top: 6px; font-size: 11px; color: #4a3528; }",
    ".pps-enrich-festivals-label { color: #8B0000; font-weight: 600; margin-right: 4px; }",
    ".pps-nayanmar-section { margin-top: 8px; padding-top: 6px; border-top: 1px dashed rgba(139,0,0,0.15); }",
    ".pps-nayanmar-label { font-size: 11px; color: #8B0000; font-weight: 600; margin-bottom: 4px; display: block; }",
    ".pps-nayanmar-chips { display: flex; gap: 4px; flex-wrap: wrap; }",
    ".pps-nayanmar-chip { display: inline-flex; align-items: center; gap: 3px; padding: 2px 6px; background: rgba(212,175,55,0.15); border: 1px solid rgba(139,0,0,0.2); border-radius: 10px; font-size: 10px; color: #4a3528; cursor: pointer; }",
    ".pps-nayanmar-chip:hover { background: rgba(212,175,55,0.35); }",
    ".pps-nayanmar-chip-role { color: #8B0000; font-weight: 600; margin-left: 3px; font-size: 9px; }",
    ".pps-nayanmar-story { display: none; margin-top: 6px; padding: 6px 8px; background: rgba(255,215,0,0.08); border-left: 3px solid #D2691E; font-size: 11px; color: #4a3528; line-height: 1.5; border-radius: 3px; }",
    ".pps-nayanmar-story.expanded { display: block; }",
    ".pps-crosstrad-section { margin-top: 8px; padding-top: 6px; border-top: 1px dashed rgba(139,0,0,0.15); }",
    ".pps-crosstrad-label { font-size: 11px; color: #8B0000; font-weight: 600; margin-bottom: 4px; display: block; }",
    ".pps-crosstrad-item { display: block; margin-bottom: 4px; padding: 4px 6px; background: rgba(30,90,160,0.05); border-left: 2px solid #1E5AA0; font-size: 11px; color: #4a3528; border-radius: 3px; }",
    ".pps-crosstrad-tradition { display: inline-block; padding: 1px 5px; margin-right: 4px; background: #1E5AA0; color: #fff; border-radius: 8px; font-size: 9px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.3px; }"
  ].join("\n");
  document.head.appendChild(style);
  
  // ============================================================
  // STEP 5: HELPER FUNCTIONS
  // ============================================================
  function getCurrentLang() {
    return localStorage.getItem("pps-lang") || "en";
  }
  
  function getBilingualValue(enrich, base) {
    var lang = getCurrentLang();
    if (enrich[base + "_" + lang]) return enrich[base + "_" + lang];
    if (enrich[base + "_en"]) return enrich[base + "_en"];
    return null;
  }
  
  function escapeHtml(s) {
    if (s == null) return "";
    return String(s).replace(/[&<>"']/g, function(c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  
  function roleLabel(role) {
    var labels = { birthplace: "born here", moksha_place: "attained moksha", miracle_site: "miracle", pathigam: "sang pathigam", devotee: "close devotee" };
    return labels[role] || role;
  }
  
  // ============================================================
  // STEP 6: RENDER FUNCTIONS
  // ============================================================
  function renderEnrichment(enrich) {
    var html = "";
    var lang = getCurrentLang();
    
    var goddess = getBilingualValue(enrich, "goddess");
    if (goddess) {
      html += "<div class='pps-enrich-goddess'><span>🌸</span><span>" + escapeHtml(goddess) + "</span></div>";
    }
    
    var sthala = getBilingualValue(enrich, "sthala_purana");
    if (sthala) {
      html += "<div class='pps-enrich-sthala'>" + escapeHtml(sthala) + "</div>";
      html += "<a class='pps-enrich-sthala-link' onclick='return false;'>Read Sthala Puranam →</a>";
    }
    
    var pushkarini = getBilingualValue(enrich, "pushkarini");
    var size = enrich.size_acres;
    if (pushkarini || size) {
      html += "<div class='pps-enrich-meta'>";
      if (pushkarini) html += "<span class='pps-enrich-meta-item'>💧 " + escapeHtml(pushkarini) + "</span>";
      if (size) html += "<span class='pps-enrich-meta-item'>📐 " + size + " acres</span>";
      html += "</div>";
    }
    
    var festivals = getBilingualValue(enrich, "festivals");
    if (festivals && Array.isArray(festivals) && festivals.length > 0) {
      var preview = festivals.slice(0, 2).join(" · ");
      var more = festivals.length > 2 ? " · +" + (festivals.length - 2) + " more" : "";
      html += "<div class='pps-enrich-festivals'>";
      html += "<span class='pps-enrich-festivals-label'>🎉 Festivals:</span>";
      html += "<span>" + escapeHtml(preview + more) + "</span>";
      html += "</div>";
    }
    
    return html ? "<div class='pps-enrich'>" + html + "</div>" : "";
  }
  
  function renderNayanmars(enrich) {
    if (!enrich.nayanmar_associations || enrich.nayanmar_associations.length === 0) return "";
    
    var lang = getCurrentLang();
    var html = "<div class='pps-nayanmar-section'>";
    html += "<span class='pps-nayanmar-label'>👑 " + (lang === "ta" ? "நாயன்மார்கள்" : "Nayanmars") + ":</span>";
    html += "<div class='pps-nayanmar-chips'>";
    
    enrich.nayanmar_associations.forEach(function(assoc, idx) {
      var nay = window.NAYANMARS[assoc.nayanmar];
      if (!nay) return;
      var displayName = lang === "ta" && nay.tamil ? nay.tamil : nay.short;
      var storyId = "nayanmar-story-" + assoc.nayanmar + "-" + idx;
      html += "<span class='pps-nayanmar-chip' onclick=\"var el=document.getElementById('" + storyId + "'); if(el) el.classList.toggle('expanded');\">";
      html += (nay.avatar || "🕉️") + " " + escapeHtml(displayName);
      if (assoc.role) html += "<span class='pps-nayanmar-chip-role'>" + escapeHtml(roleLabel(assoc.role)) + "</span>";
      html += "</span>";
    });
    html += "</div>";
    
    enrich.nayanmar_associations.forEach(function(assoc, idx) {
      var story = lang === "ta" && assoc.story_ta ? assoc.story_ta : assoc.story_en;
      if (!story) return;
      var storyId = "nayanmar-story-" + assoc.nayanmar + "-" + idx;
      var brief = lang === "ta" && assoc.brief_ta ? assoc.brief_ta : assoc.brief_en;
      html += "<div class='pps-nayanmar-story' id='" + storyId + "'>";
      if (brief) html += "<strong>" + escapeHtml(brief) + "</strong> — ";
      html += escapeHtml(story);
      html += "</div>";
    });
    
    html += "</div>";
    return html;
  }
  
  function renderCrossTradition(enrich) {
    var lang = getCurrentLang();
    var items = lang === "ta" && enrich.cross_tradition_ta ? enrich.cross_tradition_ta : enrich.cross_tradition_en;
    if (!items || !Array.isArray(items) || items.length === 0) return "";
    
    var html = "<div class='pps-crosstrad-section'>";
    html += "<span class='pps-crosstrad-label'>🕉️ " + (lang === "ta" ? "பாரம்பரிய இணைப்புகள்" : "Cross-Tradition Links") + ":</span>";
    
    items.forEach(function(item) {
      var tradMeta = window.CROSS_TRADITION_TYPES[item.tradition];
      var tradLabel = tradMeta ? (lang === "ta" ? tradMeta.label_ta : tradMeta.label_en) : item.tradition;
      html += "<div class='pps-crosstrad-item'>";
      html += "<span class='pps-crosstrad-tradition'>" + escapeHtml(tradLabel) + "</span>";
      html += "<span>" + escapeHtml(item.story) + "</span>";
      html += "</div>";
    });
    
    html += "</div>";
    return html;
  }
  
  function enhanceCard(card) {
    var sno = parseInt(card.getAttribute("data-sno"));
    if (!sno || !window.TEMPLE_ENRICHMENT[sno]) return;
    
    var enrich = window.TEMPLE_ENRICHMENT[sno];
    
    // Remove prior enhancement (idempotent)
    ["pps-enrich", "pps-nayanmar-section", "pps-crosstrad-section"].forEach(function(cls) {
      var el = card.querySelector("." + cls);
      if (el) el.remove();
    });
    
    var html = renderEnrichment(enrich) + renderNayanmars(enrich) + renderCrossTradition(enrich);
    if (!html) return;
    
    var wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    
    var linksEl = card.querySelector(".card-links");
    if (linksEl) {
      while (wrapper.firstChild) linksEl.parentNode.insertBefore(wrapper.firstChild, linksEl);
    } else {
      while (wrapper.firstChild) card.appendChild(wrapper.firstChild);
    }
    
    // Update town display
    var locEl = card.querySelector(".card-loc");
    if (locEl && enrich.town_ta) {
      if (!locEl.getAttribute("data-original-loc")) {
        locEl.setAttribute("data-original-loc", locEl.textContent);
      }
      var original = locEl.getAttribute("data-original-loc");
      var parts = original.split(" · ");
      if (getCurrentLang() === "ta") parts[0] = enrich.town_ta;
      locEl.textContent = parts.join(" · ");
    }
  }
  
  function enhanceAllCards() {
    var cards = document.querySelectorAll("#cards .card[data-sno]");
    var count = 0;
    cards.forEach(function(card) {
      var sno = parseInt(card.getAttribute("data-sno"));
      if (window.TEMPLE_ENRICHMENT[sno]) {
        enhanceCard(card);
        count++;
      }
    });
    if (count > 0) console.log("[Session 1A Combined] Enhanced " + count + " cards");
  }
  
  // ============================================================
  // STEP 7: TEST DATA for CHIDAMBARAM (sno 3)
  // ============================================================
  window.TEMPLE_ENRICHMENT[3] = {
    goddess_en: "Sivakami Amman",
    goddess_ta: "சிவகாமி அம்மன்",
    pushkarini_en: "Sivaganga Theertham",
    pushkarini_ta: "சிவகங்கை தீர்த்தம்",
    size_acres: 40,
    festivals_en: ["Natyanjali Dance Festival (Feb-Mar)", "Ani Thirumanjanam (Jun-Jul)", "Margazhi Thiruvadhirai (Dec-Jan)"],
    festivals_ta: ["நடாஞ்சலி நடன விழா (பங்குனி)", "ஆனி திருமஞ்சனம் (ஆடி)", "மார்கழி திருவாதிரை"],
    town_ta: "சிதம்பரம்",
    sthala_purana_en: "The Chidambaram Nataraja Temple stands as one of the Pancha Bhoota Sthalams representing Space (Akasha) — the most subtle of the five elements. The presiding deity Sri Nataraja is worshipped in the Chit Sabha (Hall of Consciousness) with the famous Chidambara Rahasyam representing the formless divine. [Placeholder — full anchor-level composition in Session 1C]",
    sthala_purana_ta: "சிதம்பரம் நடராஜர் திருக்கோயில் பஞ்ச பூத ஸ்தலங்களில் ஆகாசம் என்ற ஐந்து பூதங்களில் மிக நுட்பமானதைப் பிரதிநிதித்துவப்படுத்துகிறது. அர்ச்சிக்கப்படும் ஶ்ரீ நடராஜர் சித் சபையில் வழிபடப்படுகிறார். [தற்காலிக — முழு படைப்பு அமர்வு 1C-இல் வரும்]",
    coords_verified: true,
    nayanmar_associations: [
      {
        nayanmar: "manickavasakar",
        role: "moksha_place",
        brief_en: "Manickavasakar's moksha site",
        brief_ta: "மாணிக்கவாசகர் முக்தி பெற்ற தளம்",
        story_en: "Manickavasakar, having defeated Buddhist scholars in Sri Lanka, returned to Chidambaram. He pointed to the Nataraja idol and merged into it — attaining moksha directly by dissolving into the divine form.",
        story_ta: "மாணிக்கவாசகர், இலங்கையில் பௌத்த அறிஞர்களை வென்ற பிறகு சிதம்பரத்திற்கு திரும்பினார். நடராஜர் உருவை சுட்டிக்காட்டி அதில் கரைந்து நேரடியாக முக்தி பெற்றார்."
      },
      {
        nayanmar: "nandanar",
        role: "moksha_place",
        brief_en: "Nandanar's ultimate moksha",
        brief_ta: "நந்தனாரின் முடிவான முக்தி",
        story_en: "Nandanar, the dalit devotee barred from entry due to caste, longed to see Nataraja. He was permitted entry only after passing through fire — emerging purified. He then merged with Nataraja at Chidambaram, achieving Nayanmar status.",
        story_ta: "நந்தனார், சாதி காரணமாக ஆலய நுழைவு தடுக்கப்பட்ட தலித் பக்தர், நடராஜரைக் காண ஆசைப்பட்டார். நெருப்பின் வழியாக சென்று தூய்மைப்பட்ட பிறகுதான் நுழைய அனுமதிக்கப்பட்டார். சிதம்பரத்தில் நடராஜருடன் இணைந்து நாயன்மார் நிலையை அடைந்தார்."
      }
    ],
    cross_tradition_en: [
      { tradition: "sri_vaishnava", story: "The Govindaraja Perumal shrine within Chidambaram Nataraja Temple complex — a Sri Vaishnava counterpart to Nataraja worship. Ramanujar had significant theological engagement here regarding the primacy of Vishnu worship." },
      { tradition: "shakta", story: "The Sivakami Amman shrine within the complex represents the Shakta dimension. Sivakami is the female consort of Nataraja and represents Adi Shakti (primordial energy)." },
      { tradition: "pancha_bhoota", story: "One of the five Pancha Bhoota Sthalams — representing Space (Akasha). The formless Chidambara Rahasyam within the sanctum represents the formless divine — pure space/akasha as the most subtle of the five elements." }
    ],
    cross_tradition_ta: [
      { tradition: "sri_vaishnava", story: "சிதம்பரம் நடராஜர் திருக்கோயில் வளாகத்திற்குள் கோவிந்தராஜ பெருமாள் ஆலயம் — நடராஜர் வழிபாட்டிற்கு ஶ்ரீ வைஷ்ணவ இணை. ராமானுஜர் இங்கே விஷ்ணு வழிபாட்டின் முதன்மை பற்றி முக்கிய இறையியல் ஈடுபாட்டைக் கொண்டிருந்தார்." },
      { tradition: "shakta", story: "வளாகத்திற்குள் சிவகாமி அம்மன் ஆலயம் ஶாக்த பரிமாணத்தை பிரதிநிதித்துவப்படுத்துகிறது. சிவகாமி நடராஜரின் பெண் துணைவர் மற்றும் ஆதி சக்தியை பிரதிநிதித்துவப்படுத்துகிறார்." },
      { tradition: "pancha_bhoota", story: "பஞ்ச பூத ஸ்தலங்களில் ஒன்று — ஆகாசம் (வெளி) பிரதிநிதித்துவப்படுத்துகிறது. கருவறையில் உள்ள வடிவமற்ற சிதம்பர ரகஸ்யம் வடிவமற்ற தெய்வீகத்தை பிரதிநிதித்துவப்படுத்துகிறது." }
    ]
  };
  
  // ============================================================
  // STEP 8: INITIALIZE
  // ============================================================
  function initCombined() {
    enhanceAllCards();
    
    var cardsWrapper = document.getElementById("cards");
    if (cardsWrapper) {
      var observer = new MutationObserver(function(mutations) {
        var childChange = mutations.some(function(m) { return m.type === "childList"; });
        if (childChange) {
          if (window._pps1AC_timer) clearTimeout(window._pps1AC_timer);
          window._pps1AC_timer = setTimeout(enhanceAllCards, 200);
        }
      });
      observer.observe(cardsWrapper, { childList: true, subtree: false });
    }
    
    var langBtn = document.querySelector(".lang-toggle");
    if (langBtn) {
      langBtn.addEventListener("click", function() {
        setTimeout(enhanceAllCards, 500);
      });
    }
    
    console.log("[Session 1A Combined] Framework active.");
    console.log("[Session 1A Combined] NAYANMARS registered: " + Object.keys(window.NAYANMARS).length);
    console.log("[Session 1A Combined] Cross-tradition types: " + Object.keys(window.CROSS_TRADITION_TYPES).length);
    console.log("[Session 1A Combined] TEMPLE_ENRICHMENT slots: " + Object.keys(window.TEMPLE_ENRICHMENT).length);
  }
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() { setTimeout(initCombined, 1200); });
  } else {
    setTimeout(initCombined, 1200);
  }
})();


/* ============================================================ */
/* SESSION_1B2_V5_LOADED — Clean tab renderer (Nov 2026)        */
/* ============================================================ */
(function(){
  window.SESSION_1B2_V5_LOADED = true;
  console.log('[Session 1B.2 v5] Loading...');

  var style = document.createElement('style');
  style.textContent = [
    '#detail-panel-content { display: flex; flex-direction: column; height: 100%; }',
    '.dp-header { background: linear-gradient(135deg, #D2691E 0%, #A0522D 100%); color: #fff; padding: 20px 24px 16px; }',
    '.dp-name { font-family: "Noto Serif Tamil", serif; font-size: 1.3rem; font-weight: 700; line-height: 1.25; margin-bottom: 4px; }',
    '.dp-name-ta { font-family: "Noto Serif Tamil", serif; font-size: 0.95rem; color: #FFE4B5; margin-bottom: 8px; }',
    '.dp-loc { font-size: 0.85rem; opacity: 0.95; margin-bottom: 3px; }',
    '.dp-region { font-size: 0.82rem; color: #FFD700; font-weight: 600; margin-bottom: 12px; }',
    '.dp-badges { display: flex; gap: 6px; flex-wrap: wrap; }',
    '.dp-badge { padding: 3px 9px; background: rgba(255,255,255,0.15); border: 1.5px solid rgba(255,215,0,0.4); border-radius: 12px; font-size: 0.7rem; font-weight: 600; color: #FFD700; }',
    '.dp-coord-row { padding: 12px 20px 8px; background: #FFF8E7; border-bottom: 1px solid #e8dcc0; font-size: 0.78rem; }',
    '.dp-coord-value { font-family: monospace; color: #2A1810; font-weight: 600; margin-right: 8px; }',
    '.dp-coord-copy { padding: 2px 8px; background: #fff; border: 1px solid #e8dcc0; border-radius: 4px; cursor: pointer; font-size: 0.72rem; color: #A0522D; font-weight: 600; }',
    '.dp-coord-copy:hover { background: #D2691E; color: #fff; }',
    '.dp-map-btns { display: flex; gap: 6px; padding: 6px 20px 12px; background: #FFF8E7; border-bottom: 1px solid #e8dcc0; }',
    '.dp-map-btn { flex: 1; padding: 6px 4px; background: #fff; border: 1.5px solid #e8dcc0; border-radius: 5px; font-size: 0.72rem; font-weight: 600; color: #4a3528; cursor: pointer; text-align: center; text-decoration: none; }',
    '.dp-map-btn:hover { border-color: #D2691E; color: #A0522D; }',
    '.dp-tabs { display: flex; background: #fff; border-bottom: 2px solid #e8dcc0; position: sticky; top: 0; z-index: 5; }',
    '.dp-tab { flex: 1; padding: 12px 6px; text-align: center; font-size: 0.78rem; font-weight: 600; color: #7a6b5a; cursor: pointer; border-bottom: 3px solid transparent; }',
    '.dp-tab:hover { color: #A0522D; background: #FFF8E7; }',
    '.dp-tab.active { color: #D2691E; border-bottom-color: #D2691E; background: #FFF8E7; }',
    '.dp-body { flex: 1; overflow-y: auto; padding: 18px 22px; }',
    '.dp-section { margin-bottom: 18px; }',
    '.dp-section-title { font-size: 0.95rem; font-weight: 700; color: #A0522D; margin-bottom: 8px; }',
    '.dp-section-content { font-size: 0.88rem; color: #2A1810; line-height: 1.65; }',
    '.dp-meta-grid { display: grid; grid-template-columns: auto 1fr; gap: 8px 14px; font-size: 0.85rem; margin: 10px 0; }',
    '.dp-meta-label { color: #7a6b5a; font-weight: 600; }',
    '.dp-meta-value { color: #2A1810; }',
    '.dp-festival-list { list-style: none; padding: 0; margin: 6px 0; }',
    '.dp-festival-list li { padding: 4px 0; font-size: 0.85rem; border-bottom: 1px solid #f0e8d5; }',
    '.dp-nayanmar-item { padding: 10px 12px; background: #FFF8E7; border-left: 3px solid #D2691E; border-radius: 4px; margin-bottom: 10px; }',
    '.dp-nayanmar-name { font-weight: 700; color: #A0522D; margin-bottom: 3px; font-size: 0.9rem; }',
    '.dp-nayanmar-role { padding: 1px 8px; background: #D2691E; color: #fff; border-radius: 8px; font-size: 0.7rem; margin-left: 6px; }',
    '.dp-nayanmar-story { font-size: 0.82rem; color: #4a3528; line-height: 1.55; margin-top: 6px; }',
    '.dp-crosstrad-item { padding: 8px 10px; margin-bottom: 8px; background: #F5F8FE; border-left: 3px solid #1E5AA0; border-radius: 3px; font-size: 0.83rem; }',
    '.dp-crosstrad-tradition { padding: 2px 7px; background: #1E5AA0; color: #fff; border-radius: 8px; font-size: 0.68rem; font-weight: 700; text-transform: uppercase; margin-right: 6px; }',
    '.dp-link-row { padding: 10px 0; border-bottom: 1px solid #f0e8d5; font-size: 0.85rem; }',
    '.dp-link-row a { color: #A0522D; font-weight: 600; text-decoration: none; }',
    '.dp-empty-tab { padding: 24px 12px; text-align: center; color: #7a6b5a; font-style: italic; }',
    '.popup-title { font-family: "Noto Serif Tamil", serif; font-weight: 700; font-size: 0.98rem; color: #A0522D; margin-bottom: 3px; }',
    '.popup-loc { color: #7a6b5a; font-size: 0.75rem; margin-bottom: 6px; }',
    '.popup-tagline { font-size: 0.78rem; color: #4a3528; margin-bottom: 8px; font-style: italic; }',
    '.popup-open-btn { display: inline-block; padding: 5px 12px; background: #D2691E; color: #fff; border-radius: 4px; font-size: 0.78rem; font-weight: 600; cursor: pointer; text-decoration: none; }'
  ].join('\n');
  document.head.appendChild(style);

  function getLang() { return localStorage.getItem('pps-lang') || 'en'; }
  function esc(s) { if (s == null) return ''; return String(s).replace(/[&<>"']/g, function(c) { var m = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }; return m[c]; }); }
  function biling(obj, base) { var l = getLang(); if (!obj) return null; return obj[base + '_' + l] || obj[base + '_en'] || null; }
  function roleLabel(r) { return {birthplace:'born here',moksha_place:'attained moksha',miracle_site:'miracle',pathigam:'sang pathigam',devotee:'close devotee'}[r] || r; }
  
  function anchor(url, text, klass) {
    var a = document.createElement('a');
    a.href = url; a.target = '_blank'; a.rel = 'noopener';
    if (klass) a.className = klass;
    a.textContent = text;
    return a.outerHTML;
  }
  
  function shareButton(sno, nameEn) {
    var a = document.createElement('a');
    a.className = 'dp-map-btn'; a.href = '#'; a.id = 'dp-share-btn';
    a.textContent = '🔗 Share';
    a.setAttribute('data-sno', sno);
    a.setAttribute('data-name', nameEn);
    return a.outerHTML;
  }

  window.showTempleInPanel = function(sno) {
    var temple = window.TEMPLES && window.TEMPLES.find(function(t) { return t.sno === sno; });
    if (!temple) return;
    var enrich = window.TEMPLE_ENRICHMENT && window.TEMPLE_ENRICHMENT[sno];
    var lang = getLang();
    var panel = document.getElementById('detail-panel');
    var contentDiv = document.getElementById('detail-panel-content');
    if (!panel || !contentDiv) return;
    var townDisp = (lang === 'ta' && enrich && enrich.town_ta) ? enrich.town_ta : temple.town;
    var nameTa = temple.name_ta || (window.NAME_TA_MORE && window.NAME_TA_MORE[temple.name]) || '';
    var badges = [];
    if (temple.saints && /Sambandar/.test(temple.saints) && /Appar/.test(temple.saints) && /Sundarar/.test(temple.saints)) badges.push(lang === 'ta' ? '🙏 மூவர்' : '🙏 3 Naalvar');
    if (temple.tier) { var tl = { T1: '★ SII/ASI', T2: 'ARE', T3: 'Not Cat.', T4: 'Outside TN' }[temple.tier]; badges.push(tl || temple.tier); }
    if (temple.notes) {
      if (/Pancha Bhoota/.test(temple.notes)) badges.push(lang === 'ta' ? '🔥 பஞ்ச பூத' : '🔥 Pancha Bhoota');
      if (/Ashta Veeratta/.test(temple.notes)) badges.push(lang === 'ta' ? '⚡ அஷ்ட வீரட்ட' : '⚡ Ashta Veeratta');
      if (/Sapta Vidanga/.test(temple.notes)) badges.push(lang === 'ta' ? '🌸 சப்த விடங்க' : '🌸 Sapta Vidanga');
    }
    var lat = parseFloat(temple.lat).toFixed(4);
    var lng = parseFloat(temple.lng).toFixed(4);
    var coords = lat + ', ' + lng;
    var gmapUrl = 'https://www.google.com/maps?q=' + lat + ',' + lng + '&z=17';
    var appleUrl = 'https://maps.apple.com/?ll=' + lat + ',' + lng + '&z=17&q=' + encodeURIComponent(temple.name);
    var osmUrl = 'https://www.openstreetmap.org/?mlat=' + lat + '&mlon=' + lng + '&zoom=17';
    var parts = [];
    parts.push('<div class="dp-header">');
    parts.push('<div class="dp-name">#' + sno + ' ' + esc(temple.name) + '</div>');
    if (nameTa) parts.push('<div class="dp-name-ta">' + esc(nameTa) + '</div>');
    parts.push('<div class="dp-loc">' + esc(townDisp) + ' · ' + esc(temple.district) + '</div>');
    parts.push('<div class="dp-region">' + esc(temple.region) + '</div>');
    if (badges.length) {
      parts.push('<div class="dp-badges">');
      badges.forEach(function(b) { parts.push('<span class="dp-badge">' + esc(b) + '</span>'); });
      parts.push('</div>');
    }
    parts.push('</div>');
    parts.push('<div class="dp-coord-row"><span class="dp-coord-value">📍 ' + coords + '</span><span class="dp-coord-copy" id="dp-copy-btn">Copy</span></div>');
    parts.push('<div class="dp-map-btns">');
    parts.push(anchor(gmapUrl, '🗺️ Google', 'dp-map-btn'));
    parts.push(anchor(appleUrl, '🍎 Apple', 'dp-map-btn'));
    parts.push(anchor(osmUrl, '🌍 OSM', 'dp-map-btn'));
    parts.push(shareButton(sno, temple.name));
    parts.push('</div>');
    var tabIds = ['sthala', 'nayanmars', 'listen', 'sources', 'related'];
    var tabDefs = {
      sthala:    { icon: '🌸', label: lang === 'ta' ? 'ஸ்தலம்' : 'Sthala' },
      nayanmars: { icon: '👑', label: lang === 'ta' ? 'நாயன்மார்' : 'Nayanmars' },
      listen:    { icon: '🎵', label: lang === 'ta' ? 'செவிமடு' : 'Listen' },
      sources:   { icon: '📚', label: lang === 'ta' ? 'நூல்' : 'Sources' },
      related:   { icon: '🔗', label: lang === 'ta' ? 'தொடர்பு' : 'Related' }
    };
    parts.push('<div class="dp-tabs">');
    tabIds.forEach(function(id, i) {
      var d = tabDefs[id];
      parts.push('<div class="dp-tab' + (i === 0 ? ' active' : '') + '" data-tab="' + id + '">' + d.icon + '<span>' + d.label + '</span></div>');
    });
    parts.push('</div>');
    parts.push('<div class="dp-body" id="dp-body"></div>');
    contentDiv.innerHTML = parts.join('');
    panel.classList.add('has-content');
    panel.classList.add('mobile-open');
    
    var renderers = {
      sthala: function() {
        var b = '';
        var sthala = biling(enrich, 'sthala_purana');
        if (sthala) b += '<div class="dp-section"><div class="dp-section-title">🌸 ' + (lang === 'ta' ? 'ஸ்தல புராணம்' : 'Sthala Purana') + '</div><div class="dp-section-content">' + esc(sthala) + '</div></div>';
        var meta = [];
        var g = biling(enrich, 'goddess');
        if (g) meta.push([lang === 'ta' ? '🌸 தேவி' : '🌸 Goddess', g]);
        var p = biling(enrich, 'pushkarini');
        if (p) meta.push([lang === 'ta' ? '💧 தீர்த்தம்' : '💧 Pushkarini', p]);
        if (enrich && enrich.size_acres) meta.push([lang === 'ta' ? '📐 பரப்பளவு' : '📐 Size', enrich.size_acres + ' acres']);
        if (temple.saints) meta.push([lang === 'ta' ? '🙏 மூவர்' : '🙏 Saints', temple.saints]);
        if (meta.length) {
          b += '<div class="dp-section"><div class="dp-section-title">ℹ️ ' + (lang === 'ta' ? 'விவரங்கள்' : 'Details') + '</div><div class="dp-meta-grid">';
          meta.forEach(function(m) { b += '<div class="dp-meta-label">' + esc(m[0]) + '</div><div class="dp-meta-value">' + esc(m[1]) + '</div>'; });
          b += '</div></div>';
        }
        var festivals = biling(enrich, 'festivals');
        if (festivals && festivals.length) {
          b += '<div class="dp-section"><div class="dp-section-title">🎉 ' + (lang === 'ta' ? 'விழாக்கள்' : 'Festivals') + '</div><ul class="dp-festival-list">';
          festivals.forEach(function(f) { b += '<li>' + esc(f) + '</li>'; });
          b += '</ul></div>';
        }
        if (temple.notes && !sthala) b += '<div class="dp-section"><div class="dp-section-title">📝 Notes</div><div class="dp-section-content">' + esc(temple.notes) + '</div></div>';
        return b || '<div class="dp-empty-tab">Detailed information coming soon.</div>';
      },
      nayanmars: function() {
        var b = '';
        if (temple.pathigam && temple.pathigam !== 'nan') b += '<div class="dp-section"><div class="dp-section-title">📿 ' + (lang === 'ta' ? 'பதிகம்' : 'Pathigam') + '</div><div class="dp-section-content">' + esc(temple.pathigam) + '</div></div>';
        if (enrich && enrich.nayanmar_associations && enrich.nayanmar_associations.length) {
          b += '<div class="dp-section"><div class="dp-section-title">👑 ' + (lang === 'ta' ? 'நாயன்மார் தொடர்புகள்' : 'Nayanmar Associations') + '</div>';
          enrich.nayanmar_associations.forEach(function(a) {
            var nay = window.NAYANMARS && window.NAYANMARS[a.nayanmar];
            var name = nay ? (lang === 'ta' && nay.tamil ? nay.tamil : nay.short) : a.nayanmar;
            var story = lang === 'ta' && a.story_ta ? a.story_ta : a.story_en;
            var brief = lang === 'ta' && a.brief_ta ? a.brief_ta : a.brief_en;
            b += '<div class="dp-nayanmar-item"><div class="dp-nayanmar-name">' + (nay && nay.avatar ? nay.avatar + ' ' : '') + esc(name);
            if (a.role) b += '<span class="dp-nayanmar-role">' + esc(roleLabel(a.role)) + '</span>';
            b += '</div>';
            if (brief || story) {
              b += '<div class="dp-nayanmar-story">';
              if (brief) b += '<strong>' + esc(brief) + '</strong>';
              if (brief && story) b += ' — ';
              if (story) b += esc(story);
              b += '</div>';
            }
            b += '</div>';
          });
          b += '</div>';
        }
        return b || '<div class="dp-empty-tab">Nayanmar associations coming soon.</div>';
      },
      listen: function() {
        var b = '';
        var audioUrl = window.CURATED_AUDIO && window.CURATED_AUDIO[temple.name];
        if (audioUrl) {
          b += '<div class="dp-section"><div class="dp-section-title">🎵 ' + (lang === 'ta' ? 'பதிக ஒலி' : 'Tevaram Audio') + '</div>';
          b += '<div class="dp-link-row">' + anchor(audioUrl, '🎼 ' + (lang === 'ta' ? 'பதிகம் கேட்க' : 'Listen to curated pathigam') + ' →') + '</div></div>';
        }
        var searchUrl = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(temple.town + ' ' + temple.name + ' Thevaram pathigam');
        b += '<div class="dp-section"><div class="dp-section-title">🔍 ' + (lang === 'ta' ? 'தேடல்' : 'Search') + '</div>';
        b += '<div class="dp-link-row">' + anchor(searchUrl, '🎵 ' + (lang === 'ta' ? 'யூடியூப் தேடல்' : 'Search YouTube for pathigam') + ' →') + '</div></div>';
        return b;
      },
      sources: function() {
        var b = '';
        if (temple.status || temple.knote) {
          b += '<div class="dp-section"><div class="dp-section-title">📜 ' + (lang === 'ta' ? 'கல்வெட்டு' : 'Kalvettu / Epigraphy') + '</div>';
          if (temple.status) b += '<div class="dp-section-content"><strong>' + (lang === 'ta' ? 'நிலை: ' : 'Status: ') + '</strong>' + esc(temple.status) + '</div>';
          if (temple.knote) b += '<div class="dp-section-content" style="margin-top:6px;font-style:italic;color:#7a6b5a;">' + esc(temple.knote) + '</div>';
          b += '</div>';
        }
        if (temple.sii_url) {
          b += '<div class="dp-section"><div class="dp-section-title">📚 ' + (lang === 'ta' ? 'நூல் குறிப்பு' : 'SII Reference') + '</div>';
          b += '<div class="dp-link-row">' + anchor(temple.sii_url, '📖 ' + (temple.sii_label || 'SII Reference') + ' →') + '</div></div>';
        }
        if (temple.wiki && temple.wiki !== 'nan') {
          b += '<div class="dp-section"><div class="dp-section-title">🌐 ' + (lang === 'ta' ? 'விக்கிபீடியா' : 'Wikipedia') + '</div>';
          b += '<div class="dp-link-row">' + anchor(temple.wiki, '🔗 ' + (lang === 'ta' ? 'விக்கிபீடியாவில் காண' : 'View on Wikipedia') + ' →') + '</div></div>';
        }
        return b || '<div class="dp-empty-tab">Source references coming soon.</div>';
      },
      related: function() {
        var b = '';
        if (enrich) {
          var ct = lang === 'ta' && enrich.cross_tradition_ta ? enrich.cross_tradition_ta : enrich.cross_tradition_en;
          if (ct && ct.length) {
            b += '<div class="dp-section"><div class="dp-section-title">🕉️ ' + (lang === 'ta' ? 'பாரம்பரிய இணைப்புகள்' : 'Cross-Tradition Links') + '</div>';
            ct.forEach(function(item) {
              var tm = window.CROSS_TRADITION_TYPES && window.CROSS_TRADITION_TYPES[item.tradition];
              var lbl = tm ? (lang === 'ta' ? tm.label_ta : tm.label_en) : item.tradition;
              b += '<div class="dp-crosstrad-item"><span class="dp-crosstrad-tradition">' + esc(lbl) + '</span>' + esc(item.story) + '</div>';
            });
            b += '</div>';
          }
        }
        if (window.TEMPLES && temple.region) {
          var sameNadu = window.TEMPLES.filter(function(t) { return t.region === temple.region && t.sno !== temple.sno; });
          if (sameNadu.length) {
            b += '<div class="dp-section"><div class="dp-section-title">🗺️ ' + (lang === 'ta' ? 'இதே நாட்டில்' : 'Same Nadu') + '</div>';
            b += '<div class="dp-section-content">' + sameNadu.length + ' ' + (lang === 'ta' ? 'மற்ற ஆலயங்கள்' : 'other temples in') + ' ' + esc(temple.region) + '</div></div>';
          }
        }
        return b || '<div class="dp-empty-tab">Related information coming soon.</div>';
      }
    };
    var body = document.getElementById('dp-body');
    body.innerHTML = renderers.sthala();
    contentDiv.querySelectorAll('.dp-tab').forEach(function(tab) {
      tab.addEventListener('click', function() {
        var tabId = this.getAttribute('data-tab');
        contentDiv.querySelectorAll('.dp-tab').forEach(function(t) { t.classList.remove('active'); });
        this.classList.add('active');
        if (renderers[tabId] && body) body.innerHTML = renderers[tabId]();
      });
    });
    var copyBtn = document.getElementById('dp-copy-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', function() {
        var self = this;
        if (navigator.clipboard) navigator.clipboard.writeText(coords).then(function() { self.textContent = '✓ Copied'; setTimeout(function() { self.textContent = 'Copy'; }, 1500); });
      });
    }
    var shareBtn = document.getElementById('dp-share-btn');
    if (shareBtn) {
      shareBtn.addEventListener('click', function(e) {
        e.preventDefault();
        var shareUrl = 'https://gurusubbaraman.github.io/ppsrefresh/?sno=' + sno;
        if (navigator.share) navigator.share({ title: temple.name, url: shareUrl }).catch(function() {});
        else if (navigator.clipboard) navigator.clipboard.writeText(shareUrl);
      });
    }
    console.log('[Session 1B.2 v5] Rendered temple ' + sno);
  };

  window.buildSimplifiedPopup = function(temple) {
    var nameTa = temple.name_ta || (window.NAME_TA_MORE && window.NAME_TA_MORE[temple.name]) || '';
    var enrich = window.TEMPLE_ENRICHMENT && window.TEMPLE_ENRICHMENT[temple.sno];
    var tagline = temple.notes || (enrich ? biling(enrich, 'sthala_purana') : '') || '';
    if (tagline.length > 100) tagline = tagline.substring(0, 100) + '...';
    var parts = [];
    parts.push('<div class="popup-title">#' + temple.sno + ' ' + esc(temple.name) + '</div>');
    if (nameTa) parts.push('<div style="font-family:Noto Serif Tamil,serif;font-size:0.82rem;color:#666;margin-bottom:4px;">' + esc(nameTa) + '</div>');
    parts.push('<div class="popup-loc">' + esc(temple.town) + ' · ' + esc(temple.district) + ' · ' + esc(temple.region) + '</div>');
    if (tagline) parts.push('<div class="popup-tagline">' + esc(tagline) + '</div>');
    var btn = document.createElement('a');
    btn.className = 'popup-open-btn'; btn.href = '#';
    btn.setAttribute('data-sno', temple.sno);
    btn.textContent = 'Open Details →';
    parts.push(btn.outerHTML);
    return parts.join('');
  };

  document.addEventListener('click', function(e) {
    var target = e.target;
    if (target && target.classList && target.classList.contains('popup-open-btn')) {
      e.preventDefault();
      var sno = parseInt(target.getAttribute('data-sno'));
      if (sno) window.showTempleInPanel(sno);
    }
  });

  console.log('[Session 1B.2 v5] Ready. Test: window.showTempleInPanel(3)');
})();


/* ============================================================ */
/* SESSION_1B3_LOADED — Wire card+marker clicks to panel (Nov 2026) */
/* ============================================================ */
(function(){
  window.SESSION_1B3_LOADED = true;
  console.log('[Session 1B.3] Wiring card + marker clicks...');

  function wireCardClicks() {
    var cardsWrapper = document.getElementById('cards');
    if (!cardsWrapper) {
      console.log('[Session 1B.3] #cards wrapper not found, retrying...');
      setTimeout(wireCardClicks, 500);
      return;
    }

    cardsWrapper.addEventListener('click', function(e) {
      var target = e.target;
      while (target && target !== cardsWrapper) {
        if (target.tagName === 'A' && target.href && !target.classList.contains('pps-enrich-sthala-link')) {
          return;
        }
        if (target.classList && target.classList.contains('pps-nayanmar-chip')) {
          return;
        }
        target = target.parentElement;
      }

      var card = e.target.closest ? e.target.closest('.card[data-sno]') : null;
      if (!card) {
        var el = e.target;
        while (el && el !== cardsWrapper) {
          if (el.classList && el.classList.contains('card') && el.getAttribute('data-sno')) {
            card = el;
            break;
          }
          el = el.parentElement;
        }
      }
      if (!card) return;

      var sno = parseInt(card.getAttribute('data-sno'));
      if (sno && typeof window.showTempleInPanel === 'function') {
        window.showTempleInPanel(sno);
      }
    });

    console.log('[Session 1B.3] Card click delegation wired');
  }

  function wireSthalaLinks() {
    document.addEventListener('click', function(e) {
      var target = e.target;
      if (target && target.classList && target.classList.contains('pps-enrich-sthala-link')) {
        e.preventDefault();
        e.stopPropagation();

        var card = target.closest ? target.closest('.card[data-sno]') : null;
        if (!card) {
          var el = target;
          while (el) {
            if (el.classList && el.classList.contains('card') && el.getAttribute('data-sno')) {
              card = el;
              break;
            }
            el = el.parentElement;
          }
        }
        if (!card) return;

        var sno = parseInt(card.getAttribute('data-sno'));
        if (sno && typeof window.showTempleInPanel === 'function') {
          window.showTempleInPanel(sno);
          console.log('[Session 1B.3] Read Sthala Puranam clicked for sno ' + sno);
        }
      }
    });
    console.log('[Session 1B.3] Sthala link handler wired');
  }

  function wireMapMarkers() {
    if (!window.map || typeof window.map.eachLayer !== 'function') {
      setTimeout(wireMapMarkers, 500);
      return;
    }

    var hooked = 0;
    window.map.eachLayer(function(layer) {
      if ((layer instanceof L.CircleMarker || layer instanceof L.Marker) && !layer._pps1B3Hooked) {
        var extractSno = function() {
          var popup = layer.getPopup && layer.getPopup();
          if (popup) {
            var content = popup.getContent();
            if (typeof content === 'string') {
              var match = content.match(/#(\d+)/);
              if (match) return parseInt(match[1]);
              var snoAttr = content.match(/data-sno="?(\d+)"?/);
              if (snoAttr) return parseInt(snoAttr[1]);
            }
          }
          if (layer._temple && layer._temple.sno) return layer._temple.sno;
          if (layer.options && layer.options.sno) return layer.options.sno;
          return null;
        };

        layer.on('click', function(e) {
          var sno = extractSno();
          if (sno && typeof window.showTempleInPanel === 'function') {
            setTimeout(function() {
              window.showTempleInPanel(sno);
              if (window.map && window.map.closePopup) window.map.closePopup();
            }, 50);
          }
        });

        layer._pps1B3Hooked = true;
        hooked++;
      }
    });

    if (hooked > 0) console.log('[Session 1B.3] Hooked ' + hooked + ' map markers');

    if (!window._pps1B3MapObserverActive) {
      window._pps1B3MapObserverActive = true;
      var mapEl = document.getElementById('map');
      if (mapEl) {
        var mapObserver = new MutationObserver(function() {
          clearTimeout(window._pps1B3MapRewireTimer);
          window._pps1B3MapRewireTimer = setTimeout(wireMapMarkers, 300);
        });
        mapObserver.observe(mapEl, { childList: true, subtree: true });
      }
    }
  }

  function restoreFromUrl() {
    var params = new URLSearchParams(window.location.search);
    var sno = parseInt(params.get('sno'));
    if (sno && typeof window.showTempleInPanel === 'function') {
      var attempt = 0;
      var tryOpen = function() {
        attempt++;
        if (window.TEMPLES && window.TEMPLES.length > 0) {
          window.showTempleInPanel(sno);
          console.log('[Session 1B.3] Restored panel from URL: sno ' + sno);
        } else if (attempt < 20) {
          setTimeout(tryOpen, 300);
        }
      };
      tryOpen();
    }
  }

  function init() {
    wireCardClicks();
    wireSthalaLinks();
    wireMapMarkers();
    restoreFromUrl();
    console.log('[Session 1B.3] All click handlers wired. Cards + markers now open right panel.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { setTimeout(init, 1500); });
  } else {
    setTimeout(init, 1500);
  }
})();


/* ============================================================ */
/* SESSION_1B4_LOADED — Fixes (marker clicks, lang toggle, tabs) */
/* ============================================================ */
(function(){
  window.SESSION_1B4_LOADED = true;
  console.log('[Session 1B.4] Loading fixes...');

  function rewireMarkersDefinitely() {
    if (!window.map || typeof window.map.eachLayer !== 'function') {
      setTimeout(rewireMarkersDefinitely, 500);
      return;
    }

    var hooked = 0;
    window.map.eachLayer(function(layer) {
      if (layer instanceof L.CircleMarker || layer instanceof L.Marker) {
        layer.off('click');
        delete layer._pps0MHooked;
        delete layer._pps1B3Hooked;

        var extractSno = function() {
          var popup = layer.getPopup && layer.getPopup();
          if (popup) {
            var content = popup.getContent();
            if (typeof content === 'string') {
              var match = content.match(/#(\d+)/);
              if (match) return parseInt(match[1]);
              var snoAttr = content.match(/data-sno="?(\d+)"?/);
              if (snoAttr) return parseInt(snoAttr[1]);
            }
          }
          if (layer._temple && layer._temple.sno) return layer._temple.sno;
          if (layer.options && layer.options.sno) return layer.options.sno;
          return null;
        };

        layer.on('click', function(e) {
          var sno = extractSno();
          if (sno && typeof window.showTempleInPanel === 'function') {
            if (window.map && window.map.closePopup) {
              window.map.closePopup();
            }
            window.showTempleInPanel(sno);
          }
        });

        layer._pps1B4Hooked = true;
        hooked++;
      }
    });

    if (hooked > 0) {
      console.log('[Session 1B.4] Rewired ' + hooked + ' markers');
    }
  }

  function watchMapForNewMarkers() {
    var mapEl = document.getElementById('map');
    if (!mapEl) return;
    var observer = new MutationObserver(function() {
      clearTimeout(window._pps1B4RewireTimer);
      window._pps1B4RewireTimer = setTimeout(rewireMarkersDefinitely, 400);
    });
    observer.observe(mapEl, { childList: true, subtree: true });
    console.log('[Session 1B.4] Map observer active');
  }

  function watchLanguageToggle() {
    var toggleBtn = document.querySelector('.lang-toggle, [class*="lang-toggle"]');
    if (!toggleBtn) {
      setTimeout(watchLanguageToggle, 500);
      return;
    }

    toggleBtn.addEventListener('click', function() {
      setTimeout(function() {
        var panel = document.getElementById('detail-panel');
        var contentDiv = document.getElementById('detail-panel-content');
        if (!panel || !contentDiv || !panel.classList.contains('has-content')) return;

        var nameEl = contentDiv.querySelector('.dp-name');
        if (!nameEl) return;
        var text = nameEl.textContent || '';
        var match = text.match(/#(\d+)/);
        if (!match) return;
        var sno = parseInt(match[1]);
        if (!sno || typeof window.showTempleInPanel !== 'function') return;

        window.showTempleInPanel(sno);
        console.log('[Session 1B.4] Refreshed panel for language change (sno ' + sno + ')');
      }, 300);
    });

    console.log('[Session 1B.4] Language toggle watcher active');
  }

  function fixTabLayout() {
    var style = document.createElement('style');
    style.textContent = [
      '.dp-tab { min-height: 54px !important; align-items: center; justify-content: center; display: flex !important; flex-direction: column !important; gap: 3px !important; padding: 8px 4px !important; box-sizing: border-box; }',
      '.dp-tab > span:first-child, .dp-tab { font-size: 1.05rem; line-height: 1; }',
      '.dp-tab > span:last-child { font-size: 0.7rem !important; line-height: 1.1; white-space: nowrap; }',
      '.dp-tab[data-tab="nayanmars"] > span:last-child { font-size: 0.65rem !important; }',
      '@media (max-width: 900px) { .dp-tab { min-height: 48px !important; padding: 6px 2px !important; } .dp-tab > span:last-child { font-size: 0.65rem !important; } .dp-tab[data-tab="nayanmars"] > span:last-child { font-size: 0.6rem !important; } }'
    ].join('\n');
    style.id = 'pps-1b4-tab-styles';
    var prior = document.getElementById('pps-1b4-tab-styles');
    if (prior) prior.remove();
    document.head.appendChild(style);
    console.log('[Session 1B.4] Tab layout CSS applied');
  }

  function init() {
    fixTabLayout();
    rewireMarkersDefinitely();
    watchMapForNewMarkers();
    watchLanguageToggle();
    console.log('[Session 1B.4] All fixes applied.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { setTimeout(init, 2500); });
  } else {
    setTimeout(init, 2500);
  }
})();


/* ============================================================ */
/* SESSION_1B5_LOADED — Fix marker clicks using leafletMap      */
/* ============================================================ */
(function(){
  window.SESSION_1B5_LOADED = true;
  console.log('[Session 1B.5] Loading marker click fix (window.leafletMap)...');

  function getMap() {
    return window.leafletMap || null;
  }

  function rewireMarkers() {
    var mapInstance = getMap();
    if (!mapInstance || typeof mapInstance.eachLayer !== 'function') {
      setTimeout(rewireMarkers, 500);
      return;
    }

    var hooked = 0;
    mapInstance.eachLayer(function(layer) {
      if (!(layer instanceof L.CircleMarker || layer instanceof L.Marker)) {
        return;
      }

      layer.off('click');
      delete layer._pps0MHooked;
      delete layer._pps1B3Hooked;
      delete layer._pps1B4Hooked;
      delete layer._pps1B5Hooked;

      var extractSno = function() {
        var popup = layer.getPopup && layer.getPopup();
        if (popup) {
          var content = popup.getContent();
          if (typeof content === 'string') {
            var match = content.match(/#(\d+)/);
            if (match) return parseInt(match[1]);
            var snoAttr = content.match(/data-sno=['"]?(\d+)/);
            if (snoAttr) return parseInt(snoAttr[1]);
          }
        }
        if (layer._temple && layer._temple.sno) return layer._temple.sno;
        if (layer.options && layer.options.sno) return layer.options.sno;
        return null;
      };

      layer.on('click', function(e) {
        var sno = extractSno();
        if (sno === null || typeof window.showTempleInPanel !== 'function') {
          console.log('[Session 1B.5] Click but no sno/showTempleInPanel');
          return;
        }
        var mapInst = getMap();
        if (mapInst && mapInst.closePopup) {
          mapInst.closePopup();
        }
        window.showTempleInPanel(sno);
        console.log('[Session 1B.5] Marker click -> panel opened for sno ' + sno);
      });

      layer._pps1B5Hooked = true;
      hooked++;
    });

    console.log('[Session 1B.5] Rewired ' + hooked + ' markers');
  }

  function watchForNewMarkers() {
    var mapInstance = getMap();
    if (!mapInstance) return;

    mapInstance.on('layeradd', function(e) {
      var layer = e.layer;
      if (layer instanceof L.CircleMarker || layer instanceof L.Marker) {
        if (layer._pps1B5Hooked) return;
        setTimeout(function() {
          rewireMarkers();
        }, 100);
      }
    });

    console.log('[Session 1B.5] Layer-add watcher active on leafletMap');
  }

  function init() {
    rewireMarkers();
    watchForNewMarkers();
    console.log('[Session 1B.5] Marker click routing complete.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { setTimeout(init, 3000); });
  } else {
    setTimeout(init, 3000);
  }
})();


/* ============================================================ */
/* SESSION_1C1_LOADED — Rename Pushkarini→Theertham + Sthala Vriksha */
/* ============================================================ */
(function(){
  window.SESSION_1C1_LOADED = true;
  console.log('[Session 1C.1] Loading Theertham rename + Sthala Vriksha framework...');

  var originalShowTempleInPanel = window.showTempleInPanel;

  window.showTempleInPanel = function(sno) {
    if (typeof originalShowTempleInPanel === 'function') {
      originalShowTempleInPanel(sno);
    }
    setTimeout(function() { enhancePanel(sno); }, 50);
  };

  function getLang() { return localStorage.getItem('pps-lang') || 'en'; }
  function esc(s) { if (s == null) return ''; return String(s).replace(/[&<>"']/g, function(c) { var m = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }; return m[c]; }); }

  function enhancePanel(sno) {
    var enrich = window.TEMPLE_ENRICHMENT && window.TEMPLE_ENRICHMENT[sno];
    if (!enrich) return;
    var lang = getLang();
    var body = document.getElementById('dp-body');
    if (!body) return;

    body.querySelectorAll('.dp-meta-label').forEach(function(label) {
      var text = label.textContent;
      if (text.indexOf('Pushkarini') !== -1) {
        label.textContent = text.replace('Pushkarini', 'Theertham');
      }
      if (text.indexOf('புஷ்கரிணி') !== -1) {
        label.textContent = text.replace('புஷ்கரிணி', 'தீர்த்தம்');
      }
    });

    var svData = enrich.sthala_vriksha;
    if (!svData) return;

    var activeTab = document.querySelector('.dp-tab.active');
    if (!activeTab || activeTab.getAttribute('data-tab') !== 'sthala') return;

    var detailsGrid = body.querySelector('.dp-meta-grid');
    if (detailsGrid) {
      insertSthalaVrikshaIntoGrid(detailsGrid, svData, lang);
    } else {
      var svHtml = renderSthalaVrikshaSection(svData, lang);
      if (svHtml) {
        var section = document.createElement('div');
        section.className = 'dp-section';
        section.innerHTML = svHtml;
        var festivalsSection = body.querySelector('.dp-festival-list');
        if (festivalsSection) {
          var parent = festivalsSection.closest('.dp-section');
          if (parent) parent.parentNode.insertBefore(section, parent);
          else body.appendChild(section);
        } else {
          body.appendChild(section);
        }
      }
    }
  }

  function insertSthalaVrikshaIntoGrid(grid, svData, lang) {
    var label = lang === 'ta' ? '🌳 ஸ்தல விருக்ஷம்' : '🌳 Sthala Vriksha';
    var commonName = lang === 'ta' ? (svData.common_name_ta || svData.common_name_en) : svData.common_name_en;
    var sciName = svData.scientific_name;
    var valueHtml = esc(commonName || '');
    if (sciName) valueHtml += ' <em style="color:#7a6b5a;font-size:0.85em;">(' + esc(sciName) + ')</em>';

    var labelDiv = document.createElement('div');
    labelDiv.className = 'dp-meta-label';
    labelDiv.textContent = label;

    var valueDiv = document.createElement('div');
    valueDiv.className = 'dp-meta-value';
    valueDiv.innerHTML = valueHtml;

    var theertahLabel = null;
    grid.querySelectorAll('.dp-meta-label').forEach(function(l) {
      var t = l.textContent;
      if (t.indexOf('Theertham') !== -1 || t.indexOf('தீர்த்தம்') !== -1) {
        theertahLabel = l;
      }
    });

    if (theertahLabel && theertahLabel.nextSibling) {
      var afterTheerthamValue = theertahLabel.nextSibling.nextSibling;
      grid.insertBefore(labelDiv, afterTheerthamValue);
      grid.insertBefore(valueDiv, afterTheerthamValue);
    } else {
      grid.appendChild(labelDiv);
      grid.appendChild(valueDiv);
    }

    var significance = lang === 'ta' ? (svData.significance_ta || svData.significance_en) : svData.significance_en;
    var description = lang === 'ta' ? (svData.description_ta || svData.description_en) : svData.description_en;
    if (significance || description) {
      var expandable = document.createElement('div');
      expandable.className = 'dp-section';
      expandable.style.marginTop = '12px';
      expandable.style.padding = '10px 12px';
      expandable.style.background = 'rgba(212,175,55,0.08)';
      expandable.style.borderLeft = '3px solid #7EBC6F';
      expandable.style.borderRadius = '4px';
      expandable.style.fontSize = '0.83rem';
      expandable.style.color = '#4a3528';
      expandable.style.lineHeight = '1.55';

      var innerHtml = '';
      if (description) innerHtml += '<div style="margin-bottom:6px;">' + esc(description) + '</div>';
      if (significance) innerHtml += '<div style="font-style:italic;color:#7a6b5a;">' + esc(significance) + '</div>';
      expandable.innerHTML = innerHtml;

      var gridSection = grid.closest('.dp-section');
      if (gridSection && gridSection.nextSibling) {
        gridSection.parentNode.insertBefore(expandable, gridSection.nextSibling);
      } else if (gridSection) {
        gridSection.parentNode.appendChild(expandable);
      }
    }
  }

  function renderSthalaVrikshaSection(svData, lang) {
    if (!svData) return '';
    var label = lang === 'ta' ? 'ஸ்தல விருக்ஷம்' : 'Sthala Vriksha';
    var commonName = lang === 'ta' ? (svData.common_name_ta || svData.common_name_en) : svData.common_name_en;
    var sciName = svData.scientific_name;
    var description = lang === 'ta' ? (svData.description_ta || svData.description_en) : svData.description_en;
    var significance = lang === 'ta' ? (svData.significance_ta || svData.significance_en) : svData.significance_en;
    if (!commonName && !sciName) return '';

    var html = '<div class="dp-section-title">🌳 ' + esc(label) + '</div>';
    var content = '<strong>' + esc(commonName || '') + '</strong>';
    if (sciName) content += ' <em style="color:#7a6b5a;">(' + esc(sciName) + ')</em>';
    html += '<div class="dp-section-content">' + content + '</div>';
    if (description) html += '<div class="dp-section-content" style="margin-top:6px;">' + esc(description) + '</div>';
    if (significance) html += '<div class="dp-section-content" style="margin-top:6px;font-style:italic;color:#7a6b5a;">' + esc(significance) + '</div>';
    return html;
  }

  function renameCardLabels() {
    document.querySelectorAll('.pps-enrich-meta-item').forEach(function(item) {
      var text = item.textContent;
      if (text.indexOf('Pushkarini:') !== -1) {
        item.innerHTML = item.innerHTML.replace('Pushkarini:', 'Theertham:');
      }
    });
    document.querySelectorAll('.pps-enrich').forEach(function(enrich) {
      enrich.innerHTML = enrich.innerHTML.replace(/Pushkarini/g, 'Theertham');
      enrich.innerHTML = enrich.innerHTML.replace(/புஷ்கரிணி/g, 'தீர்த்தம்');
    });
  }

  function enhanceCardSthalaVriksha() {
    document.querySelectorAll('.card[data-sno]').forEach(function(card) {
      var sno = parseInt(card.getAttribute('data-sno'));
      if (!sno || !window.TEMPLE_ENRICHMENT || !window.TEMPLE_ENRICHMENT[sno]) return;
      var enrich = window.TEMPLE_ENRICHMENT[sno];
      var svData = enrich.sthala_vriksha;
      if (!svData) return;

      if (card.querySelector('.pps-sthala-vriksha-row')) return;

      var lang = getLang();
      var commonName = lang === 'ta' ? (svData.common_name_ta || svData.common_name_en) : svData.common_name_en;
      var sciName = svData.scientific_name;
      if (!commonName) return;

      var row = document.createElement('div');
      row.className = 'pps-enrich-meta pps-sthala-vriksha-row';
      row.style.marginTop = '4px';

      var item = document.createElement('span');
      item.className = 'pps-enrich-meta-item';
      var label = lang === 'ta' ? 'ஸ்தல விருக்ஷம்' : 'Sthala Vriksha';
      item.innerHTML = '🌳 <strong>' + esc(label) + ':</strong> ' + esc(commonName);
      if (sciName) item.innerHTML += ' <em style="color:#7a6b5a;font-size:0.9em;">(' + esc(sciName) + ')</em>';
      row.appendChild(item);

      var existingMeta = card.querySelector('.pps-enrich .pps-enrich-meta');
      if (existingMeta && existingMeta.parentNode) {
        if (existingMeta.nextSibling) {
          existingMeta.parentNode.insertBefore(row, existingMeta.nextSibling);
        } else {
          existingMeta.parentNode.appendChild(row);
        }
      } else {
        var enrichDiv = card.querySelector('.pps-enrich');
        if (enrichDiv) enrichDiv.appendChild(row);
      }
    });
  }

  function watchCards() {
    var cardsWrapper = document.getElementById('cards');
    if (!cardsWrapper) {
      setTimeout(watchCards, 500);
      return;
    }
    var observer = new MutationObserver(function() {
      clearTimeout(window._pps1C1Timer);
      window._pps1C1Timer = setTimeout(function() {
        renameCardLabels();
        enhanceCardSthalaVriksha();
      }, 250);
    });
    observer.observe(cardsWrapper, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class'] });
    console.log('[Session 1C.1] Card observer active');
  }

  function watchLanguageToggle() {
    var toggleBtn = document.querySelector('.lang-toggle, [class*="lang-toggle"]');
    if (!toggleBtn) {
      setTimeout(watchLanguageToggle, 500);
      return;
    }
    toggleBtn.addEventListener('click', function() {
      setTimeout(function() {
        renameCardLabels();
        document.querySelectorAll('.pps-sthala-vriksha-row').forEach(function(r) { r.remove(); });
        enhanceCardSthalaVriksha();
      }, 400);
    });
    console.log('[Session 1C.1] Language toggle watcher for Session 1C.1 active');
  }

  function init() {
    renameCardLabels();
    enhanceCardSthalaVriksha();
    watchCards();
    watchLanguageToggle();
    console.log('[Session 1C.1] Framework changes applied (Theertham + Sthala Vriksha).');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { setTimeout(init, 2000); });
  } else {
    setTimeout(init, 2000);
  }
})();

/* ============================================================ */
/* SESSION_1C2_LOADED — Chidambaram Full Anchor-Level Content   */
/* ============================================================ */
(function(){
  window.SESSION_1C2_LOADED = true;
  console.log('[Session 1C.2] Loading Chidambaram anchor-level content...');

  if (!window.TEMPLE_ENRICHMENT) window.TEMPLE_ENRICHMENT = {};

  // Sthala Purana - English (~750 words, anchor-level depth)
  var sthalaEn = "Chidambaram Nataraja Temple, located in Tamil Nadu near Cuddalore, is one of the most theologically foundational Shaiva shrines in India — the Akasha (Space) Sthalam among the five Pancha Bhoota temples that represent the five great elements. The temple's traditional name, Chidambaram Thillai Nataraja-koothan Kovil, combines two Sanskrit-Tamil words: 'chit' (consciousness) and 'ambaram' (space/ether/atmosphere), meaning 'the atmosphere of wisdom' or 'the space of consciousness.' This etymology encodes the temple's central teaching: Shiva is not a form to be worshipped but the very fabric of empty space in which all form arises and dissolves. The 40-acre temple complex is a masterwork of Dravidian architecture, featuring four towering gopurams (gateway towers) adorned with the 108 karanas — the classical dance poses codified in Bharata Muni's Natyashastra — making Chidambaram a living encyclopedia of Indian performing arts inscribed in stone.\n\nThe primary sthala purana centers on Sri Nataraja's Ananda Tandavam (Dance of Bliss). According to the Chidambara Mahatmya (a section of the Skanda Purana), the site of Chidambaram was once a dense forest of Thillai trees (Excoecaria agallocha) where a group of rishis practiced Karma Kanda ritualism, believing that rituals alone could compel divine grace. Shiva, disguised as Bhikshatana (a mendicant), entered the Thillai forest accompanied by Vishnu in the form of Mohini. The sages' wives were enchanted by their beauty. Enraged, the rishis performed rituals to invoke serpents, which Shiva donned as ornaments; then a fierce tiger, whose skin became his garment; then an elephant, which Shiva ripped and devoured. Finally, they summoned the demon Muyalakan — the personification of ignorance and arrogance. Shiva stepped upon Muyalakan's back and began the Ananda Tandavam, revealing his true form as Nataraja. The sages surrendered, realizing that rituals cannot control the divine. This cosmic dance, witnessed by the two great sages Vyaghrapada (tiger-footed sage) and Patanjali (author of the Yoga Sutras), established Nataraja iconography's canonical form: Shiva dancing in a ring of fire (prabhamandala), one leg raised in urdhva-tandavam, one crushing Muyalakan underfoot, with damaru (drum of creation) in his upper right hand and fire (agni, destruction) in his upper left.\n\nThe second sthala purana concerns Manickavasakar's moksha. Having defeated Buddhist scholars in Sri Lanka through his mastery of Shaiva Siddhanta philosophy, Manickavasakar returned to Chidambaram, pointed to the Nataraja idol, and merged directly into the divine form — attaining moksha not through progressive stages but by direct dissolution into the very consciousness he had spent his life invoking. His compositions, the Thiruvasagam and Thirukkovaiyar, are among the most philosophically dense Tamil Shaiva works and are recited daily in the temple.\n\nThe third sthala purana concerns the temple's cosmology. The sanctum houses the celebrated Chit Sabha (Hall of Consciousness), where the Chidambara Rahasyam (the Secret of Chidambaram) is preserved behind a curtain. Behind the curtain lies not an idol but empty space — the Akasha Lingam — signifying that Shiva is not a form to be seen but the very field of empty space in which all form appears. This is Advaita Vedanta given architectural expression: the ultimate divine is beyond all form. Adjacent to the Chit Sabha is the Kanaka Sabha (Golden Hall), where the Nataraja and Sivakami idols receive daily worship. Aditya Chola I (871-907 CE) gilded the interior of the Kanaka Sabha, and Parantaka Chola I (901-953 CE) enriched the temple with the wealth of his conquests.\n\nThe fourth layer concerns the temple's exceptional priestly tradition. The 3000 Thillai Vazh Andhanar (also called Thillai Dikshitars, Thillai Muvayiravar, or the Three Thousand of Thillai) are Vedic Shaiva Brahmins who trace their origin to sage Patanjali's induction. They wear their sacred tuft (kudumi) at the front of the head — a practice unique among Tamil Brahmins, shared only with the Namboothiris of Kerala. Every married male Dikshitar serves in rotating turns as chief priest, performing six daily poojas: the day begins at 7:00 AM with the Lord's padukas being brought from the palliyarai, and the last pooja (Arthajaama pooja at 10:00 PM) is performed with special fervor, during which the priest reveals the Chidambara Rahasyam behind the curtain. Today about 360 Dikshitar families continue this tradition, unbroken since the 12th century Sekkizhar's Periya Puranam documented their service.\n\nChidambaram is celebrated by all four Naalvar (Sambandar, Appar, Sundarar, Manickavasakar) and additional Nayanmars including Nandanar (whose Chidambaram moksha through purification-by-fire is a foundational Shaiva narrative on divine access transcending social hierarchy), Kootruva Nayanar (Chola chieftain refused ritual coronation), and Thirunilakanta Kuyavar (potter devotee). The temple uniquely houses the Govindaraja Perumal shrine (Sri Vaishnava counterpart to Nataraja worship) within its complex, making Chidambaram one of the very few temples where Shaiva and Sri Vaishnava traditions coexist in ritual proximity — a rare theological configuration. The Arudra Darshan festival in Margazhi (December-January) marks Nataraja's cosmic dance and draws hundreds of thousands of devotees; the Chittirai and Aani Uttiram festivals feature the Chariot procession (Ratha Yatra). For over twelve centuries, Chidambaram has stood as the theological, ritual, and philosophical heart of Tamil Shaivism — the eternal Hall where consciousness dances.";

  // Sthala Purana - Tamil (matching depth composition)
  var sthalaTa = "தமிழ்நாட்டில் கடலூருக்கு அருகில் அமைந்துள்ள சிதம்பரம் நடராஜர் திருக்கோயில் இந்தியாவின் மிக இறையியல் ரீதியில் அடிப்படையான ஶைவ ஆலயங்களில் ஒன்று — ஐந்து பஞ்ச பூத ஆலயங்களில் ஆகாய தத்துவத்தை பிரதிநிதித்துவப்படுத்தும் ஆகாய ஸ்தலம். இக்கோயிலின் பாரம்பரிய பெயரான 'சிதம்பரம் தில்லை நடராஜர் கூத்தன் கோயில்' இரண்டு சொற்களை இணைக்கிறது: 'சித்' (உணர்வு) மற்றும் 'அம்பரம்' (வெளி/ஆகாசம்/வளிமண்டலம்), 'ஞான ஆகாசம்' அல்லது 'உணர்வின் வெளி' என்று பொருள். இச்சொற்பிறப்பியல் கோயிலின் மைய போதனையை குறிக்கிறது: ஶிவன் வழிபடத்தக்க வடிவம் அல்ல; அவர் அனைத்து வடிவங்களும் தோன்றி மறையும் வெற்று வெளியின் அடிப்படை உண்மை. 40 ஏக்கர் பரப்பளவில் விரிந்திருக்கும் இக்கோயில் திராவிட கட்டிடக்கலையின் தலைசிறந்த படைப்பு. நான்கு உயர்ந்த கோபுரங்கள் பரத முனிவரின் நாட்யசாஸ்திரத்தில் விவரிக்கப்பட்ட 108 கரணங்களால் (செம்மைப்படுத்தப்பட்ட நடன அசைவுகள்) அலங்கரிக்கப்பட்டுள்ளன — சிதம்பரம் இந்திய நடன கலைகளின் கல்-எழுத்து இயக்கமாக நிற்கிறது.\n\nமூல ஸ்தல புராணம் ஶ்ரீ நடராஜரின் ஆனந்த தாண்டவத்தை மையமாக்கியது. ஸ்கந்த புராணத்தின் சிதம்பர மகாத்மியப் பகுதியின்படி, சிதம்பரம் ஒருகாலத்தில் தில்லை மரங்களின் (எக்ஸ்கோகேரியா அகல்லோகா) அடர்ந்த வனமாக இருந்தது. அங்கே கர்ம காண்ட சடங்கியலில் நம்பிக்கை கொண்ட ஒரு முனிவர் குழு வாழ்ந்து வந்தது — சடங்குகள் மட்டுமே தெய்வீக அருளை பெற போதுமானது என்று நம்பினர். ஶிவன் பிக்ஷாடனராக (துறவி) மாறி, விஷ்ணு மோஹினியாக, தில்லை வனத்திற்குள் நுழைந்தனர். முனிவர்களின் மனைவிகள் அவர்களின் அழகில் மயங்கினர். கோபமடைந்த முனிவர்கள் பாம்புகளை உருவாக்கும் சடங்கை செய்தனர். ஶிவன் அவற்றை ஆபரணமாக அணிந்து கொண்டார். பின்னர் ஒரு புலியை உருவாக்கினர். ஶிவன் அதன் தோலை உரித்து ஆடையாக அணிந்தார். பின்னர் ஒரு யானையை உருவாக்கினர். ஶிவன் அதை கிழித்து விழுங்கினார். இறுதியில், அவர்கள் அறியாமையின் வடிவமாகிய முயலகன் என்ற அசுரனை எழுப்பினர். ஶிவன் அமைதியாக முயலகனின் முதுகில் மிதித்து ஆனந்த தாண்டவம் ஆடி — நடராஜராகிய தமது உண்மையான வடிவத்தை வெளிப்படுத்தினார். முனிவர்கள் சரணடைந்து, சடங்குகள் தெய்வத்தை கட்டுப்படுத்த முடியாது என்பதை உணர்ந்தனர். இந்த பிரபஞ்ச நடனத்தை வியாக்ரபாதர் (புலிக்கால் முனிவர்) மற்றும் பதஞ்சலி (யோக சூத்திரங்களின் ஆசிரியர்) ஆகிய இரு மகா முனிவர்கள் கண்டு களித்தனர். இதுவே நடராஜரின் தனித்துவமான வடிவத்தை நிலைப்படுத்தியது: அக்னி மண்டலத்தில் நடனமாடும் ஶிவன், ஒரு காலை ஊர்த்வ தாண்டவத்தில் தூக்கி, மற்றொன்றால் முயலகனை மிதித்து, மேல் வலது கையில் டமருகம் (படைப்பின் ஒலி), மேல் இடது கையில் அக்னி (அழிவு).\n\nஇரண்டாம் ஸ்தல புராணம் மாணிக்கவாசகரின் முக்திய கதை. இலங்கையில் புத்த மத அறிஞர்களை ஶைவ சித்தாந்த தத்துவத்தினால் வென்ற பிறகு, மாணிக்கவாசகர் சிதம்பரம் திரும்பினார். நடராஜரை சுட்டிக்காட்டி அதில் நேரடியாக கரைந்து முக்தி அடைந்தார் — படிப்படியான நிலைகள் மூலம் அல்ல, தமது வாழ்நாள் முழுவதும் தியானித்த உணர்வில் நேரடியாக கரைந்து. அவரது இயற்றங்களான திருவாசகம் மற்றும் திருக்கோவையார் தமிழ் ஶைவ பாரம்பரியத்தின் மிக ஆழமான தத்துவ படைப்புகளில் ஒன்று. இவை இக்கோயிலில் தினமும் ஓதப்படுகின்றன.\n\nமூன்றாம் ஸ்தல புராணம் கோயிலின் பிரபஞ்சவியலைச் சார்ந்தது. கருவறையில் புகழ்பெற்ற சித் சபை (உணர்வின் சபை) அமைந்துள்ளது. அங்கே சிதம்பர ரகஸ்யம் — கோயிலின் மிக பெரிய இரகஸ்யம் — திரையின் பின் பாதுகாக்கப்படுகிறது. திரையின் பின் தெய்வ சிலை இல்லை — வெற்று வெளியே உள்ளது. இதுவே ஆகாய லிங்கம். ஶிவன் காணப்பட வேண்டிய வடிவம் அல்ல, அனைத்து வடிவங்களும் தோன்றும் வெளியின் தத்துவமே ஶிவன் என்பதை இது குறிக்கிறது. இது அத்வைத வேதாந்தத்தின் கட்டிடக்கலை வெளிப்பாடு. சித் சபைக்கு அருகில் கனக சபை (பொன்னம்பலம்) அமைந்துள்ளது. அங்கே நடராஜ மற்றும் சிவகாமியின் திருஉருவங்கள் தினசரி வழிபாட்டைப் பெறுகின்றன. ஆதித்திய சோழர் I (871-907 CE) கனக சபையின் உள்பகுதியை பொன் முலாம் பூசினார். பரந்தக சோழர் I (901-953 CE) தமது வெற்றிச் செல்வத்தால் கோயிலை செழுமைப்படுத்தினார்.\n\nநான்காம் அடுக்கு கோயிலின் அசாதாரண பூசாரி பாரம்பரியத்தைச் சார்ந்தது. 3000 தில்லை வாழ் அந்தணர் (தில்லை தீக்ஷிதர், தில்லை மூவாயிரவர், தில்லையின் மூவாயிரம் என்றும் அழைக்கப்படுவர்) என்பவர்கள் வேத ஶைவ பிராமணர்கள். அவர்கள் தமது தோற்றத்தை பதஞ்சலி முனிவரின் தீக்ஷைக்குக் கண்டறிகிறார்கள். அவர்கள் தலையின் முன்பகுதியில் குடுமி வைத்திருக்கிறார்கள் — தமிழ் பிராமணர்களில் இது தனித்துவமான பழக்கம், கேரள நம்பூதிரிகளுடன் மட்டுமே பகிர்ந்து கொள்ளப்பட்டது. திருமணமான ஒவ்வொரு தீக்ஷிதரும் சுழற்சி முறையில் தலைமை பூசாரியாக பணியாற்றுகிறார். தினமும் ஆறு பூஜைகள்: காலை 7:00 மணிக்கு பாதுகைகள் பள்ளியறையிலிருந்து கொண்டு வரப்பட்டு தொடங்கும், இரவு 10:00 மணியில் அர்த்தஜாம பூஜையுடன் முடியும். அப்போது தீக்ஷிதர் திரையை விலக்கி சிதம்பர ரகஸ்யத்தை வெளிப்படுத்துகிறார். இன்று சுமார் 360 தீக்ஷிதர் குடும்பங்கள் இப்பாரம்பரியத்தை நிலைநிறுத்துகின்றனர். 12-ம் நூற்றாண்டு சேக்கிழாரின் பெரிய புராணத்தில் இவர்களது சேவை ஆவணப்படுத்தப்பட்டதிலிருந்து இப்பரம்பரை உடையாமல் தொடர்கிறது.\n\nசிதம்பரம் நான்கு நாலாவர் (சம்பந்தர், அப்பர், சுந்தரர், மாணிக்கவாசகர்) அனைவராலும் கொண்டாடப்படுகிறது. கூடுதலாக நந்தனார் (தமது சிதம்பரம் முக்தி மூலம் ஶைவ பாரம்பரியத்தில் சாதி வெல்லும் தெய்வீக அணுகல் கதை), கூற்றுவ நாயனார் (சடங்கு முடிசூட்டல் மறுக்கப்பட்ட சோழ தலைவர்), திருநீலகண்ட குயவர் (குயவர் பக்தர்) உள்ளிட்ட பல நாயன்மார்களால் வணங்கப்படுகிறது. இக்கோயில் தமது வளாகத்திற்குள் கோவிந்தராஜ பெருமாள் ஆலயத்தை (நடராஜர் வழிபாட்டிற்கு ஶ்ரீ வைஷ்ணவ இணை) கொண்டுள்ளது. இது சிதம்பரத்தை ஶைவ மற்றும் ஶ்ரீ வைஷ்ணவ பாரம்பரியங்கள் சடங்கு ரீதியில் அருகிலிருந்து செயல்படும் ஒரு சில கோயில்களில் ஒன்றாக ஆக்குகிறது — ஒரு அரிய இறையியல் அமைப்பு. மார்கழி மாத ஆருத்ரா தரிசன விழா நடராஜரின் பிரபஞ்ச நடனத்தைக் கொண்டாடி நூற்றுக்கணக்கான ஆயிரம் பக்தர்களை ஈர்க்கிறது. சித்திரை மற்றும் ஆனி உத்திர விழாக்களில் ரத யாத்ரா (தேர் ஊர்வலம்) நடைபெறுகிறது. பன்னிரண்டு நூற்றாண்டுகளுக்கும் மேலாக, சிதம்பரம் தமிழ் ஶைவத்தின் இறையியல், சடங்கு மற்றும் தத்துவ மையமாக நிற்கிறது — உணர்வு நடனமாடும் நித்திய சபை.";

  // Store the full enrichment
  window.TEMPLE_ENRICHMENT[3] = {
    // Bilingual sthala purana (~750 words each)
    sthala_purana_en: sthalaEn,
    sthala_purana_ta: sthalaTa,

    // Goddess
    goddess_en: "Sivakami Amman",
    goddess_ta: "சிவகாமி அம்மன்",

    // Theertham (renamed from Pushkarini in display)
    pushkarini_en: "Sivaganga Theertham (also called Paramananda Kupa, Vyaghrapada Theertham)",
    pushkarini_ta: "சிவகங்கை தீர்த்தம் (பரமானந்த குபம், வியாக்ரபாத தீர்த்தம் என்றும் அழைக்கப்படுகிறது)",

    // Sthala Vriksha - RICH STRUCTURE
    sthala_vriksha: {
      common_name_en: "Thillai",
      common_name_ta: "தில்லை",
      scientific_name: "Excoecaria agallocha",
      description_en: "The Thillai (Excoecaria agallocha), also known as the milky mangrove, blinding tree, or river poison tree, is a mangrove species belonging to the Euphorbiaceae family. It grows up to 15 meters tall in saline or brackish coastal wetlands. Its milky latex is highly toxic — contact with eyes can cause temporary blindness, giving rise to its scientific name (from Latin 'excoecare' meaning 'to blind'). In ancient times, dense forests of Thillai trees surrounded the Chidambaram area, which is why the temple's traditional name is Chidambaram Thillai Nataraja-koothan Kovil.",
      description_ta: "தில்லை (எக்ஸ்கோகேரியா அகல்லோகா), 'பால் மங்ரோவ்' அல்லது 'குருடாக்கும் மரம்' என்றும் அழைக்கப்படும் இது யூஃபோர்பியேசி குடும்பத்தை சேர்ந்த மங்ரோவ் இனம். உப்புநீர் அல்லது கார நீர்நிலைகளில் 15 மீட்டர் உயரம் வரை வளரும். இதன் பால் நிற பசை மிகுந்த விஷத் தன்மை கொண்டது — கண்களில் பட்டால் தற்காலிக குருட்டுத்தன்மை ஏற்படலாம். இதன் அறிவியல் பெயர் லத்தீன் 'excoecare' (குருடாக்குதல்) என்பதிலிருந்து பெறப்பட்டது. முற்காலத்தில், தில்லை மரங்களின் அடர்ந்த வனங்கள் சிதம்பரம் பகுதியை சூழ்ந்திருந்தன. அதனால்தான் கோயிலின் பாரம்பரியப் பெயர் 'சிதம்பரம் தில்லை நடராஜர் கூத்தன் கோயில்'.",
      significance_en: "The Thillai tree gives Chidambaram its ancient name 'Thillai Ambalam' (the Hall of Thillai) and 'Perumpatrapuliyur' (Great Thillai Grove). Temple sculptures depicting Thillai trees date to the 2nd century CE. Though the once-vast Thillai forests around Chidambaram no longer exist (the environment having changed over centuries), the Thillai trees still grow abundantly in the nearby Pichavaram wetlands — the second largest mangrove forest in the world, which extends toward the temple area. Legend holds that the sages performing rituals when Shiva danced the Ananda Tandavam dwelt in this Thillai forest, making the tree inseparable from the theological narrative of the temple.",
      significance_ta: "தில்லை மரம் சிதம்பரத்திற்கு அதன் பழம்பெயரான 'தில்லை அம்பலம்' (தில்லையின் சபை) மற்றும் 'பெரும்பற்றப்புலியூர்' (பெரிய தில்லை காடு) என்ற பெயர்களை அளிக்கிறது. கோயிலின் சிற்பங்களில் தில்லை மரங்கள் 2-ம் நூற்றாண்டு CE முதல் காணப்படுகின்றன. ஒரு காலத்தில் சிதம்பரத்தை சூழ்ந்திருந்த பெரிய தில்லை வனங்கள் இப்போது இல்லை என்றாலும் (சுற்றுச்சூழல் நூற்றாண்டுகளாக மாறியிருப்பதால்), அருகிலுள்ள பிச்சாவரம் நீர்நிலைகளில் — உலகின் இரண்டாவது பெரிய மங்ரோவ் காடு — தில்லை மரங்கள் இன்னும் ஏராளமாக வளர்கின்றன. இது கோயில் பகுதி வரை நீள்கிறது. ஶிவன் ஆனந்த தாண்டவம் ஆடிய போது சடங்குகள் செய்து கொண்டிருந்த முனிவர்கள் இதே தில்லை வனத்தில் வாழ்ந்தனர் என்று புராணம் கூறுகிறது. இதனால் தில்லை மரம் கோயிலின் இறையியல் கதைச் சொல்லலில் இருந்து பிரிக்க முடியாதது."
    },

    // Size
    size_acres: 40,

    // Festivals
    festivals_en: [
      "Arudra Darshan / Margazhi Thiruvadhirai (December-January) — the primary festival marking Nataraja's cosmic dance",
      "Chittirai Ther (April-May) — the Chariot Festival with grand procession",
      "Aani Thirumanjanam (June-July) — sacred abhisheka festival",
      "Aani Uttiram (June-July) — the second Chariot Festival",
      "Panguni Uttiram (March-April) — celestial wedding festival",
      "Aadi Pooram (July-August) — Sivakami's incarnation day",
      "Natyanjali Dance Festival (February-March) — dance offering by classical dancers"
    ],
    festivals_ta: [
      "ஆருத்ரா தரிசனம் / மார்கழி திருவாதிரை (டிசம்பர்-ஜனவரி) — நடராஜரின் பிரபஞ்ச நடனத்தை கொண்டாடும் முதன்மை விழா",
      "சித்திரை தேர் (ஏப்ரல்-மே) — கம்பீரமான ஊர்வலத்துடன் தேர் விழா",
      "ஆனி திருமஞ்சனம் (ஜூன்-ஜூலை) — புனித அபிஷேக விழா",
      "ஆனி உத்திரம் (ஜூன்-ஜூலை) — இரண்டாவது தேர் விழா",
      "பங்குனி உத்திரம் (மார்ச்-ஏப்ரல்) — திருக்கல்யாண விழா",
      "ஆடி பூரம் (ஜூலை-ஆகஸ்ட்) — சிவகாமியின் அவதார தினம்",
      "நடாஞ்சலி நடன விழா (பிப்ரவரி-மார்ச்) — செம்மொழி நடனக் காணிக்கை விழா"
    ],

    town_ta: "சிதம்பரம்",
    coords_verified: true,

    // Nayanmar associations (rich, with roles + stories)
    nayanmar_associations: [
      {
        nayanmar: "manickavasakar",
        role: "moksha_place",
        brief_en: "Manickavasakar's direct moksha into Nataraja",
        brief_ta: "மாணிக்கவாசகரின் நடராஜரில் நேரடி முக்தி",
        story_en: "Having defeated Buddhist scholars in Sri Lanka through his mastery of Shaiva Siddhanta philosophy, Manickavasakar returned to Chidambaram. He pointed to the Nataraja idol and merged directly into the divine form — attaining moksha not through progressive stages but by direct dissolution into the very consciousness he had spent his life invoking. His Thiruvasagam and Thirukkovaiyar compositions are recited daily in the temple.",
        story_ta: "இலங்கையில் புத்த மத அறிஞர்களை ஶைவ சித்தாந்த தத்துவத்தினால் வென்ற பிறகு, மாணிக்கவாசகர் சிதம்பரம் திரும்பினார். நடராஜரை சுட்டிக்காட்டி அதில் நேரடியாக கரைந்து முக்தி அடைந்தார் — படிப்படியான நிலைகள் மூலம் அல்ல, தமது வாழ்நாள் முழுவதும் தியானித்த உணர்வில் நேரடியாக கரைந்து. அவரது திருவாசகம் மற்றும் திருக்கோவையார் இயற்றங்கள் இக்கோயிலில் தினமும் ஓதப்படுகின்றன."
      },
      {
        nayanmar: "nandanar",
        role: "moksha_place",
        brief_en: "Nandanar's Chidambaram moksha through fire",
        brief_ta: "நெருப்பின் மூலம் நந்தனாரின் சிதம்பரம் முக்தி",
        story_en: "Nandanar, the dalit devotee (also called Thirunalaipovar) whose caste barred him from temple entry, longed to see Nataraja. Through a purification-by-fire ritual, he emerged with a Brahminical form and gained entry to the sanctum. Upon seeing Nataraja, he merged with the deity and attained moksha. His story is a foundational Shaiva narrative on divine access transcending social hierarchy — the deity welcomes the devotee's inner purity regardless of external classification.",
        story_ta: "சாதி காரணமாக ஆலய நுழைவு தடுக்கப்பட்ட தலித் பக்தரான நந்தனார் (திருநாலைப்போவர் என்றும் அழைக்கப்படுவர்) நடராஜரைக் காண ஆசைப்பட்டார். நெருப்பின் வழியாக செல்லும் தூய்மைப்படுத்தும் சடங்கை பூர்த்தி செய்த பிறகுதான் ஆலயத்தில் நுழைய அனுமதிக்கப்பட்டார். நடராஜரைக் கண்டவுடன், அவரோடு இணைந்து முக்தி அடைந்தார். அவரது கதை சாதி வேறுபாட்டையும் தாண்டிய தெய்வீக அணுகல் என்ற ஶைவ பாரம்பரியத்தின் அடிப்படை கதை — தெய்வம் பக்தரின் உள் தூய்மையை வெளிப்புற வகைப்பாட்டைப் பொருட்படுத்தாமல் வரவேற்கிறார்."
      },
      {
        nayanmar: "thillai_andanar",
        role: "devotee",
        brief_en: "The 3000 Thillai Vazh Andanar priests",
        brief_ta: "3000 தில்லை வாழ் அந்தணர்கள்",
        story_en: "The 3000 Thillai Vazh Andanar (also called Thillai Dikshitars) are collectively counted as one Nayanar. They are Vedic Shaiva Brahmins who trace their induction to Sage Patanjali. Every married male Dikshitar becomes a hereditary trustee and archaka of the Nataraja temple, wearing his sacred tuft at the front of the head — a practice unique in Tamil Brahmin tradition, shared only with Kerala Namboothiris. They serve in rotating turns as chief priest performing six daily poojas. Their continuous service since at least the 12th century (Sekkizhar's Periya Puranam) makes them one of the longest unbroken priestly lineages in world religion.",
        story_ta: "3000 தில்லை வாழ் அந்தணர்கள் (தில்லை தீக்ஷிதர் என்றும் அழைக்கப்படுவர்) கூட்டாக ஒரு நாயனாராகக் கருதப்படுகிறார்கள். இவர்கள் வேத ஶைவ பிராமணர்கள் — பதஞ்சலி முனிவரின் தீக்ஷையிலிருந்து தமது வம்சாவளியை கண்டறிகிறார்கள். திருமணமான ஒவ்வொரு தீக்ஷிதரும் நடராஜர் திருக்கோயிலின் பரம்பரை அறங்காவலராகவும் அர்ச்சகராகவும் ஆகிறார். தலையின் முன்பகுதியில் குடுமி வைத்திருக்கிறார்கள் — தமிழ் பிராமணர்களிடையே இது தனித்துவமான பழக்கம், கேரள நம்பூதிரிகளுடன் மட்டுமே பகிர்ந்து கொள்ளப்பட்டது. சுழற்சி முறையில் தலைமை பூசாரியாக பணியாற்றி தினமும் ஆறு பூஜைகள் செய்கிறார்கள். குறைந்தபட்சம் 12-ம் நூற்றாண்டு (சேக்கிழாரின் பெரிய புராணம்) முதல் அவர்களது தொடர்ச்சியான சேவை உலக மதத்தில் மிக நீண்ட உடையாத பூசாரி பரம்பரைகளில் ஒன்றாக அவர்களை ஆக்குகிறது."
      },
      {
        nayanmar: "kootruva",
        role: "devotee",
        brief_en: "Kootruva Nayanar — Chola chieftain refused coronation",
        brief_ta: "கூற்றுவ நாயனார் — முடிசூட்டப்பட மறுக்கப்பட்ட சோழ தலைவர்",
        story_en: "Kootruva Nayanar, a Chola chieftain who conquered vast territory, sought the Thillai Dikshitars to formally crown him at Chidambaram. The Dikshitars declined, saying that they were entitled to crown only Sembiyan (true Chola) lineage kings. Rather than force them, they departed to the Chera country. Kootruva's story emphasizes that ritual legitimacy comes from divine sanction, not military conquest — a foundational statement on the theological separation of temporal and spiritual authority.",
        story_ta: "பரந்த பகுதிகளை வென்ற சோழ தலைவரான கூற்றுவ நாயனார், சிதம்பரத்தில் தமக்கு முறையாக முடிசூட்டும்படி தில்லை தீக்ஷிதர்களை கேட்டார். செம்பியன் (உண்மையான சோழ) வம்சாவளி மன்னர்களுக்கு மட்டுமே தாம் முடிசூட்ட உரிமையுடையவர்கள் என்று கூறி தீக்ஷிதர்கள் மறுத்தனர். வலுக்கட்டாயப்படுத்தாமல், அவர்கள் சேர நாட்டிற்குச் சென்றுவிட்டனர். கூற்றுவனின் கதை சடங்கு அங்கீகாரம் ராணுவ வெற்றியிலிருந்து அல்ல, தெய்வீக ஒப்புதலிலிருந்து வருகிறது என்பதை வலியுறுத்துகிறது — உலகிய அதிகாரத்திற்கும் ஆன்மிக அதிகாரத்திற்கும் இடையிலான இறையியல் பிரிவினை பற்றிய அடிப்படை அறிக்கை."
      }
    ],

    // Cross-tradition links
    cross_tradition_en: [
      { tradition: "sri_vaishnava", story: "The Govindaraja Perumal shrine stands within the Chidambaram Nataraja Temple complex — a Sri Vaishnava counterpart to Nataraja worship. This is one of the very few temples where Shaiva and Sri Vaishnava traditions coexist in ritual proximity. Sri Ramanujar visited Chidambaram and engaged in theological discussions here about the primacy of Vishnu worship. The Govindaraja shrine represents the theological affirmation that Shiva and Vishnu are not competing deities but different faces of the same ultimate reality." },
      { tradition: "shakta", story: "The Sivakami Amman shrine within the complex represents the Shakta dimension. Sivakami is the female consort of Nataraja and represents Adi Shakti (primordial energy). Chidambaram houses one of the earliest known Amman (Devi) shrines in South India, establishing the equal significance of the goddess in the Shaiva tradition." },
      { tradition: "pancha_bhoota", story: "Chidambaram is one of the five Pancha Bhoota Sthalams, representing the element of Akasha (space/ether) — the most subtle of the five great elements. The formless Chidambara Rahasyam within the sanctum represents the formless divine — pure space as the most subtle presence, showing that Shiva is not a form to be seen but the very field of empty space in which all form appears." },
      { tradition: "vaidika", story: "The 3000 Thillai Vazh Andhanar are Vedic Shaiva Brahmins who follow Vedic rituals (rather than Agamic rituals of Sivachariyars). Their unbroken tradition since at least the 12th century represents one of the longest continuous Vedic ritual lineages in the world. The temple's daily worship is conducted in Sanskrit Vedic mantras alongside Tamil Panniru Thirumurai hymns, showing the harmonious integration of Sanskrit and Tamil Shaiva traditions." },
      { tradition: "other", story: "The temple houses 108 karanas (classical dance poses) from Bharata Muni's Natyashastra, making Chidambaram a foundational site for the entire Bharatanatyam dance tradition. The Natyanjali Dance Festival held here draws classical dancers from all over India offering their art as devotional worship — a rare cultural-devotional confluence." }
    ],
    cross_tradition_ta: [
      { tradition: "sri_vaishnava", story: "சிதம்பரம் நடராஜர் திருக்கோயில் வளாகத்திற்குள் கோவிந்தராஜ பெருமாள் ஆலயம் அமைந்துள்ளது — நடராஜர் வழிபாட்டிற்கு ஶ்ரீ வைஷ்ணவ இணை. ஶைவ மற்றும் ஶ்ரீ வைஷ்ணவ பாரம்பரியங்கள் சடங்கு அருகாமையில் இணைந்து செயல்படும் ஒரு சில கோயில்களில் இதுவும் ஒன்று. ஶ்ரீ ராமானுஜர் சிதம்பரத்திற்கு வந்து விஷ்ணு வழிபாட்டின் முதன்மை பற்றி இறையியல் கலந்துரையாடல்களில் ஈடுபட்டார். கோவிந்தராஜ ஆலயம் ஶிவனும் விஷ்ணுவும் போட்டி தெய்வங்கள் அல்ல, ஒரே இறுதி உண்மையின் வெவ்வேறு முகங்கள் என்ற இறையியல் உறுதிப்பாட்டைக் குறிக்கிறது." },
      { tradition: "shakta", story: "வளாகத்திற்குள் சிவகாமி அம்மன் ஆலயம் ஶாக்த பரிமாணத்தை பிரதிநிதித்துவப்படுத்துகிறது. சிவகாமி நடராஜரின் பெண் துணைவர் மற்றும் ஆதி சக்தியை (ஆதி ஆற்றல்) பிரதிநிதித்துவப்படுத்துகிறார். சிதம்பரத்தில் தென்னிந்தியாவில் அறியப்பட்ட மிகப் பழமையான அம்மன் (தேவி) ஆலயங்களில் ஒன்று உள்ளது. இது ஶைவ பாரம்பரியத்தில் தேவியின் சம முக்கியத்துவத்தை நிலைநாட்டுகிறது." },
      { tradition: "pancha_bhoota", story: "சிதம்பரம் பஞ்ச பூத ஸ்தலங்களில் ஒன்று — ஆகாய தத்துவத்தை (வெளி/எதர்) பிரதிநிதித்துவப்படுத்துகிறது — ஐந்து பூதங்களில் மிக நுட்பமானது. கருவறையில் உள்ள வடிவமற்ற சிதம்பர ரகஸ்யம் வடிவமற்ற தெய்வீகத்தை பிரதிநிதித்துவப்படுத்துகிறது — தூய வெளி மிக நுட்பமான இருப்பாக, ஶிவன் காணப்பட வேண்டிய வடிவம் அல்ல, அனைத்து வடிவங்களும் தோன்றும் வெற்று வெளியின் தத்துவமே என்பதை காட்டுகிறது." },
      { tradition: "vaidika", story: "3000 தில்லை வாழ் அந்தணர்கள் வேத ஶைவ பிராமணர்கள். அவர்கள் வேத சடங்குகளை பின்பற்றுகிறார்கள் (ஶிவாசார்யர்களின் ஆகம சடங்குகளுக்கு பதிலாக). குறைந்தபட்சம் 12-ம் நூற்றாண்டு முதலான அவர்களது உடையாத பாரம்பரியம் உலகின் மிக நீண்ட தொடர்ச்சியான வேத சடங்கு பரம்பரைகளில் ஒன்றைக் குறிக்கிறது. கோயிலின் தினசரி வழிபாடு தமிழ் பன்னிரு திருமுறை பாசுரங்களுடன் சேர்ந்து சமஸ்கிருத வேத மந்திரங்களில் நடத்தப்படுகிறது — சமஸ்கிருத மற்றும் தமிழ் ஶைவ பாரம்பரியங்களின் இணக்கமான ஒருங்கிணைப்பைக் காட்டுகிறது." },
      { tradition: "other", story: "கோயில் பரத முனிவரின் நாட்யசாஸ்திரத்திலிருந்து 108 கரணங்களை (செம்மொழி நடன அசைவுகள்) வைத்திருக்கிறது. இது சிதம்பரத்தை முழு பரதநாட்டிய பாரம்பரியத்திற்கும் அடிப்படை தளமாக ஆக்குகிறது. இங்கே நடத்தப்படும் நடாஞ்சலி நடன விழா செம்மொழி நடனக்காரர்களை தமது கலையை பக்தி வழிபாடாக அர்ப்பணிக்க இந்தியா முழுவதிலுமிருந்து ஈர்க்கிறது — ஒரு அரிய கலாச்சார-பக்தி இணைப்பு." }
    ]
  };

  console.log('[Session 1C.2] Chidambaram (sno 3) enrichment loaded with anchor-level content.');
  console.log('[Session 1C.2] Sthala Purana length: ' + sthalaEn.length + ' chars (English), ' + sthalaTa.length + ' chars (Tamil)');
  console.log('[Session 1C.2] Sthala Vriksha: Thillai (Excoecaria agallocha) with full description + significance');
  console.log('[Session 1C.2] Nayanmar associations: 4 (Manickavasakar, Nandanar, Thillai Andanar, Kootruva)');
  console.log('[Session 1C.2] Cross-tradition links: 5 (Sri Vaishnava, Shakta, Pancha Bhoota, Vaidika, Other)');
  console.log('[Session 1C.2] Festivals: 7 (bilingual)');

  // If panel is currently showing Chidambaram, re-render to show new content
  setTimeout(function() {
    if (typeof window.showTempleInPanel === 'function') {
      var panel = document.getElementById('detail-panel');
      var contentDiv = document.getElementById('detail-panel-content');
      if (panel && panel.classList.contains('has-content') && contentDiv) {
        var nameEl = contentDiv.querySelector('.dp-name');
        if (nameEl && nameEl.textContent.indexOf('#3') !== -1) {
          window.showTempleInPanel(3);
          console.log('[Session 1C.2] Re-rendered current Chidambaram panel with new content');
        }
      }
    }
  }, 500);
})();

/* ============================================================ */
/* SESSION_1C3_LOADED — Compact sidebar + fix Naalvar count      */
/* ============================================================ */
(function(){
  window.SESSION_1C3_LOADED = true;
  console.log('[Session 1C.3] Loading compact sidebar + Naalvar count fix...');

  // ============================================================
  // FIX 1: CSS to hide enrichment sections on sidebar cards
  //        (keep them showing in right panel)
  // ============================================================
  var style = document.createElement('style');
  style.textContent = [
    // Hide Session 1A enrichment sections when they appear inside sidebar cards
    '#cards .card .pps-enrich { display: none !important; }',
    '#cards .card .pps-nayanmar-section { display: none !important; }',
    '#cards .card .pps-crosstrad-section { display: none !important; }',
    '#cards .card .pps-sthala-vriksha-row { display: none !important; }',
    // Ensure right panel still shows these
    '#detail-panel .pps-enrich, #detail-panel-content .pps-enrich { display: block !important; }',
    '#detail-panel .pps-nayanmar-section, #detail-panel-content .pps-nayanmar-section { display: block !important; }',
    '#detail-panel .pps-crosstrad-section, #detail-panel-content .pps-crosstrad-section { display: block !important; }'
  ].join('\n');
  style.id = 'pps-1c3-styles';
  var prior = document.getElementById('pps-1c3-styles');
  if (prior) prior.remove();
  document.head.appendChild(style);
  console.log('[Session 1C.3] Sidebar card CSS applied (enrichment hidden in sidebar)');

  // ============================================================
  // FIX 2: Override showTempleInPanel to correct Naalvar count
  //        Header should show "N of 4 Naalvar" accurately
  // ============================================================
  var originalShowTempleInPanel = window.showTempleInPanel;

  window.showTempleInPanel = function(sno) {
    if (typeof originalShowTempleInPanel === 'function') {
      originalShowTempleInPanel(sno);
    }
    // After panel is rendered, fix the Naalvar badge
    setTimeout(function() {
      fixNaalvarBadge(sno);
    }, 100);
  };

  function fixNaalvarBadge(sno) {
    var temple = window.TEMPLES && window.TEMPLES.find(function(t) { return t.sno === sno; });
    if (!temple) return;
    var lang = localStorage.getItem('pps-lang') || 'en';

    // Count actual Naalvar (Sambandar, Appar, Sundarar, Manickavasakar) in saints field
    var saintsStr = (temple.saints || '').toLowerCase();
    var count = 0;
    var naalvarPresent = [];
    if (/sambandar/.test(saintsStr)) { count++; naalvarPresent.push('Sambandar'); }
    if (/appar/.test(saintsStr)) { count++; naalvarPresent.push('Appar'); }
    if (/sundarar/.test(saintsStr)) { count++; naalvarPresent.push('Sundarar'); }
    if (/manickavas/.test(saintsStr) || /manikkavasagar/.test(saintsStr) || /manickavasakar/.test(saintsStr)) {
      count++;
      naalvarPresent.push('Manickavasakar');
    }

    if (count === 0) return; // No Naalvar mentioned at all

    // Find the existing Naalvar badge in the panel header
    var panel = document.getElementById('detail-panel-content');
    if (!panel) return;
    var badges = panel.querySelectorAll('.dp-badge');
    var naalvarBadge = null;
    for (var i = 0; i < badges.length; i++) {
      var t = badges[i].textContent;
      if (/Naalvar/i.test(t) || /Naalva/i.test(t) || /மூவர்/.test(t) || /நாலவர்/.test(t) || /நாலவர்/.test(t)) {
        naalvarBadge = badges[i];
        break;
      }
    }

    // Build accurate label
    var label;
    if (lang === 'ta') {
      // Tamil labels
      if (count === 4) label = '🙏 4 / 4 நாலவர்';
      else if (count === 3) label = '🙏 3 / 4 நாலவர்';
      else if (count === 2) label = '🙏 2 / 4 நாலவர்';
      else if (count === 1) label = '🙏 1 / 4 நாலவர்';
    } else {
      // English labels
      if (count === 4) label = '🙏 4 of 4 Naalvar';
      else if (count === 3) label = '🙏 3 of 4 Naalvar';
      else if (count === 2) label = '🙏 2 of 4 Naalvar';
      else if (count === 1) label = '🙏 1 of 4 Naalvar';
    }

    if (naalvarBadge) {
      naalvarBadge.textContent = label;
    } else {
      // No existing Naalvar badge — insert new one before the tier badge
      var badgesContainer = panel.querySelector('.dp-badges');
      if (badgesContainer) {
        var newBadge = document.createElement('span');
        newBadge.className = 'dp-badge';
        newBadge.textContent = label;
        badgesContainer.insertBefore(newBadge, badgesContainer.firstChild);
      }
    }

    console.log('[Session 1C.3] Naalvar badge updated: ' + label + ' (present: ' + naalvarPresent.join(', ') + ')');
  }

  // ============================================================
  // Watch language toggle to re-apply Naalvar badge fix
  // ============================================================
  function watchLangToggleForBadge() {
    var toggleBtn = document.querySelector('.lang-toggle, [class*="lang-toggle"]');
    if (!toggleBtn) {
      setTimeout(watchLangToggleForBadge, 500);
      return;
    }
    toggleBtn.addEventListener('click', function() {
      setTimeout(function() {
        // Find currently displayed sno in the panel
        var panel = document.getElementById('detail-panel');
        var contentDiv = document.getElementById('detail-panel-content');
        if (!panel || !contentDiv || !panel.classList.contains('has-content')) return;
        var nameEl = contentDiv.querySelector('.dp-name');
        if (!nameEl) return;
        var match = nameEl.textContent.match(/#(\d+)/);
        if (!match) return;
        var sno = parseInt(match[1]);
        if (sno) fixNaalvarBadge(sno);
      }, 500);
    });
  }

  // ============================================================
  // INITIALIZE
  // ============================================================
  function init() {
    watchLangToggleForBadge();
    console.log('[Session 1C.3] Compact sidebar + Naalvar count fix active.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { setTimeout(init, 2500); });
  } else {
    setTimeout(init, 2500);
  }
})();

/* ============================================================ */
/* SESSION_1C4_LOADED — Rameswaram Full Anchor-Level Content    */
/* ============================================================ */
(function(){
  window.SESSION_1C4_LOADED = true;
  console.log('[Session 1C.4] Loading Rameswaram anchor-level content...');

  if (!window.TEMPLE_ENRICHMENT) window.TEMPLE_ENRICHMENT = {};

  // ~800-word anchor-level English sthala purana
  var sthalaEn = "Ramanathaswamy Temple stands on Rameswaram island in the Gulf of Mannar, at the southeastern tip of the Indian peninsula — one of the most theologically layered pilgrimage sites in India. It is one of the twelve Jyotirlingas of Shaiva pilgrimage, one of the four Char Dhams (alongside Badrinath, Dwarka, and Puri) of pan-Hindu pilgrimage, and one of the 276 Paadal Petra Sthalams sung by the Naalvar. This exceptional convergence — a single shrine holding Jyotirlinga status, Char Dham status, and Paadal Petra Sthalam status — makes Rameswaram unique in the entire Hindu pilgrimage geography.\n\nThe primary sthala purana centers on Sri Rama's atonement for Brahmahatya dosha. After defeating Ravana in the great war of the Ramayana, Rama returned through Rameswaram with Sita and Lakshmana. Ravana, though a demon king, was born a Brahmin — his slaying carried the karmic burden of brahma-hatya dosha (the sin of killing a Brahmin). At Sage Agastya's counsel, Rama sought to consecrate a Shiva Lingam here to absolve this sin. He dispatched Hanuman to Mount Kailasa to fetch a Lingam from Shiva's own abode. But Hanuman was delayed, and the auspicious hour for consecration approached. Sita, unwilling to let the muhurta pass, fashioned a Lingam from the sand of the seashore. Rama performed the consecration with this hand-made Lingam — this is the Ramalingam ('the Lingam made by Rama'), now the central deity of the sanctum. When Hanuman finally returned with the Lingam from Kailasa, he was dismayed that his labor had been unused. To honor Hanuman's devotion, Rama installed the Kailasa Lingam (called Vishvalingam) alongside the Ramalingam, and decreed that the Vishvalingam would receive darshan first — a unique two-Lingam arrangement pilgrims still observe today. The Yuddha Kanda of Valmiki Ramayana narrates Rama himself describing this spot to Sita as supremely sacred, capable of expiating major sins.\n\nThe second sthala purana centers on the geography of the Ram Setu (Sethu Bridge). Rameswaram island is the closest landmass on the Indian peninsula to Sri Lanka, separated by the shallow Palk Strait. The chain of limestone shoals and sand banks extending from Rameswaram toward Mannar in Sri Lanka is the celebrated Ram Setu (Adam's Bridge) — the bridge built by Rama's vanara army to cross the ocean. Colonial-era survey maps and modern oceanographic charts confirm the geological existence of this bridge. The temple's eastern entrance faces the bridge's Indian end. The Agni Theertham, the sea-bathing point used at the start of the pilgrimage, looks directly across to the first islet of the shoal chain. The pilgrimage's logical anchor — Rama crossed here, this is where he consecrated the Lingam — is continuous with the geography itself.\n\nThe third sthala purana concerns the 22 Theerthams within the temple. Twenty-two sacred wells (theerthams) exist within the temple complex, each traditionally believed to have distinct medicinal and spiritual properties. Pilgrims traditionally bathe in each of the 22 theerthams (in addition to the Agni Theertham at the sea) as a purification ritual before entering the sanctum. This 23-well bathing ritual (Agni Theertham + 22 inside) is unique to Rameswaram and is considered one of the most physically demanding pilgrimage rituals in Hinduism. Named theerthams include Mahalakshmi Theertham, Savithri Theertham, Gayathri Theertham, Sita Theertham, Ganga Theertham, and Yamuna Theertham — each associated with a specific spiritual property.\n\nThe fourth sthala purana centers on the temple's exceptional architecture. Ramanathaswamy Temple houses the LONGEST TEMPLE CORRIDOR in India — the outer corridor extends 1,212 meters and is lined with 1,212 finely carved granite pillars, creating a stunning visual effect of infinite perspective. The corridor was built primarily by King Muthuramalinga Sethupathi in the 17th century. The 126-foot East Rajagopuram (Eastern Gateway Tower) with nine tiers was completed between 1897 and 1904 by the Nagarathar (Nattukottai Chettiar) community from Devakottai. The temple was expanded across many dynasties: 12th century Pandya kings established the foundational structure, King Parakramabahu of Sri Lanka renovated the sanctum sanctorum in the 12th century, and the Sethupati kings of Ramanathapuram consolidated the great expansion through the 15th-17th centuries. The Nandi Mandapam features a 17-foot Nandi statue, one of the largest in South India.\n\nThe fifth theological layer establishes Rameswaram as the spiritual counterpart of Kashi (Varanasi). Tradition holds that a Kashi pilgrimage is incomplete without visiting Rameswaram, and vice versa. Pilgrims traditionally carry Ganga water from Varanasi to abhishek the Ramanathaswamy Lingam at Rameswaram, and take sand from the Rameswaram beach back to Kashi to submerge in the Ganga — completing the Kashi-Rameswaram circuit that unites the north and south of India in a single sacred journey.\n\nAll three Naalvar of the Tevaram tradition (Sambandar, Appar, Sundarar) sang Rameswaram; the temple appears in Sambandar's 3.111 Padigam, Appar's 5.83 Padigam, and Sundarar's 7.79 Padigam. Rameswaram is uniquely revered by Shaivites, Vaishnavites, and Smartas — a rare pan-Hindu shrine where sectarian distinctions dissolve before the divine union of Rama and Shiva. The Kothandaramaswamy Temple at Dhanushkodi (20 km from Rameswaram) commemorates the site where Vibhishana surrendered to Rama; the Gandhamadhana Parvatam nearby holds Rama's footprint. For over two millennia, Rameswaram has stood as the pilgrimage destination where mythology, geology, and devotion converge — the sacred southernmost point of Hindu India where the Ramayana meets the ocean.";

  // ~800-word matching-depth Tamil sthala purana (original composition)
  var sthalaTa = "தமிழ்நாட்டின் தென்கிழக்கு முனையில், மன்னார் வளைகுடாவில் அமைந்துள்ள ராமேஸ்வரம் தீவில் நிற்கும் ஶ்ரீ ராமநாதஸ்வாமி திருக்கோயில், இந்தியாவின் மிக இறையியல் ரீதியில் அடுக்கடுக்கான யாத்திரை தளங்களில் ஒன்று. இது ஶைவ யாத்திரையின் பன்னிரண்டு ஜோதிர்லிங்கங்களில் ஒன்று, பாரதத்தின் நான்கு தாம்களில் ஒன்று (பத்ரிநாத், துவாரகை, புரி ஆகியவற்றுடன்), மற்றும் நாலாவரால் பாடப்பட்ட 276 பாடல் பெற்ற தலங்களில் ஒன்று. இந்த அசாதாரண இணைப்பு — ஒரே கோயில் ஜோதிர்லிங்க, சார் தாம், மற்றும் பாடல் பெற்ற தலம் என்ற மூன்று அந்தஸ்துகளையும் தாங்கியிருப்பது — முழு இந்து யாத்திரை புவியியலிலும் ராமேஸ்வரத்தை தனித்துவமாக்குகிறது.\n\nமூல ஸ்தல புராணம் ஸ்ரீ ராமரின் பிரம்மஹத்திய தோஷ நிவாரணத்தை மையமாக்கியது. ராமாயணத்தின் மகா யுத்தத்தில் ராவணனை வதைத்த பின்னர், ராமர் சீதை மற்றும் லக்ஷ்மணருடன் ராமேஸ்வரம் வழியாக திரும்பி வந்தார். ராவணன் அசுர மன்னராக இருந்தாலும் பிராமணராகப் பிறந்தவர் — அவரது வதம் பிரம்மஹத்திய தோஷத்தின் (பிராமணரைக் கொல்லுதலின் பாவம்) கர்ம சுமையைத் தந்தது. அகஸ்திய முனிவரின் ஆலோசனையின்படி, ராமர் இந்தப் பாவத்தை நிவர்த்திக்க இங்கே ஒரு ஶிவ லிங்கத்தை பிரதிஷ்டை செய்ய விரும்பினார். அவர் ஶிவனின் இருப்பிடமான கைலாசத்திலிருந்து லிங்கம் கொண்டு வர அனுமனை அனுப்பினார். ஆனால் அனுமன் தாமதமானார், பிரதிஷ்டைக்கான நல்ல முகூர்த்தம் நெருங்கியது. முகூர்த்தத்தை கடந்துவிட விரும்பாத சீதை, கடலோர மணலிலிருந்து ஒரு லிங்கத்தை உருவாக்கினார். ராமர் இந்தக் கை-செய்த லிங்கத்துடன் பிரதிஷ்டை செய்தார் — இதுவே ராமலிங்கம் ('ராமரால் செய்யப்பட்ட லிங்கம்'), இப்போது கருவறையின் மைய தெய்வம். அனுமன் இறுதியாக கைலாசத்திலிருந்து லிங்கத்துடன் திரும்பியபோது, தமது உழைப்பு பயன்படுத்தப்படாததை கண்டு வருந்தினார். அனுமனின் பக்தியை மதிக்கும் விதமாக, ராமர் கைலாச லிங்கத்தை (விஸ்வலிங்கம் என்று அழைக்கப்படுகிறது) ராமலிங்கத்திற்கு அருகில் நிறுவினார், மற்றும் விஸ்வலிங்கம் முதலில் தரிசனம் பெறும் என்று விதித்தார் — யாத்திரிகர்கள் இன்றும் காணும் தனித்துவமான இரண்டு-லிங்க அமைப்பு. வால்மீகி ராமாயணத்தின் யுத்த காண்டம், ராமர் இந்த இடத்தை பெரும் பாவங்களை நிவர்த்திக்கக்கூடிய உன்னத புனித இடமாக சீதைக்கு விவரிப்பதை விவரிக்கிறது.\n\nஇரண்டாம் ஸ்தல புராணம் ராம சேது (சேது பாலம்) புவியியலை மையமாக்கியது. இந்திய தீபகற்பத்தில் இலங்கைக்கு மிக நெருக்கமான நிலப்பரப்பாக ராமேஸ்வரம் தீவு, ஆழமற்ற பாக்-ஸ்திரெய்ட்டால் பிரிக்கப்பட்டுள்ளது. ராமேஸ்வரத்திலிருந்து இலங்கையின் மன்னார் நோக்கி நீளும் சுண்ணாம்பு பாறை மற்றும் மணல் திட்டுகளின் சங்கிலியே புகழ்பெற்ற ராம சேது (ஆடம்ஸ் பிரிட்ஜ்) — கடலை கடக்க ராமரின் வானர சேனை கட்டிய பாலம். காலனித்துவ கால ஆய்வு வரைபடங்களும் நவீன கடல்-அறிவியல் விளக்கப்படங்களும் இப்பாலத்தின் புவியியல் இருப்பை உறுதிப்படுத்துகின்றன. கோயிலின் கிழக்கு நுழைவாயில் பாலத்தின் இந்திய முனையை நோக்கியுள்ளது. யாத்திரையின் தொடக்கத்தில் பயன்படுத்தப்படும் கடல்-குளியல் இடமான அக்னி தீர்த்தம், சாலை சங்கிலியின் முதல் தீவை நேரடியாக நோக்குகிறது.\n\nமூன்றாம் ஸ்தல புராணம் கோயிலின் உள்ளே உள்ள 22 தீர்த்தங்களைச் சார்ந்தது. கோயில் வளாகத்தில் இருபத்திரண்டு புனித கிணறுகள் (தீர்த்தங்கள்) உள்ளன, ஒவ்வொன்றும் தனித்துவமான மருத்துவ மற்றும் ஆன்மிக பண்புகளைக் கொண்டதாக பாரம்பரியமாக நம்பப்படுகிறது. யாத்திரிகர்கள் கருவறையில் நுழைவதற்கு முன் ஒரு தூய்மைப்படுத்தும் சடங்காக 22 தீர்த்தங்களிலும் (கடலில் உள்ள அக்னி தீர்த்தத்திற்கு கூடுதலாக) பாரம்பரியமாக குளிக்கிறார்கள். இந்த 23-கிணறு குளியல் சடங்கு (அக்னி தீர்த்தம் + உள்ளே 22) ராமேஸ்வரத்திற்கு தனித்துவமானது மற்றும் இந்து மதத்தில் மிக உடல் ரீதியில் கடினமான யாத்திரை சடங்குகளில் ஒன்றாக கருதப்படுகிறது. மகாலக்ஷ்மி தீர்த்தம், சாவித்திரி தீர்த்தம், காயத்திரி தீர்த்தம், சீதா தீர்த்தம், கங்கை தீர்த்தம், யமுனை தீர்த்தம் — ஒவ்வொன்றும் ஒரு குறிப்பிட்ட ஆன்மிக பண்புடன் தொடர்புடையது.\n\nநான்காம் ஸ்தல புராணம் கோயிலின் அசாதாரண கட்டிடக்கலையை சார்ந்தது. ராமநாதஸ்வாமி திருக்கோயில் இந்தியாவின் மிக நீளமான கோயில் தாழ்வாரத்தை (Corridor) கொண்டுள்ளது — வெளிப்புற தாழ்வாரம் 1,212 மீட்டர் நீளம் கொண்டது, 1,212 நேர்த்தியாக செதுக்கப்பட்ட கிரானைட் தூண்களால் அலங்கரிக்கப்பட்டு, முடிவற்ற காட்சியின் அற்புத விளைவை உருவாக்குகிறது. இத்தாழ்வாரம் முதன்மையாக 17-ம் நூற்றாண்டில் மன்னர் முத்துராமலிங்க சேதுபதியால் கட்டப்பட்டது. ஒன்பது அடுக்குகள் கொண்ட 126 அடி கிழக்கு ராஜகோபுரம் 1897 மற்றும் 1904 ஆண்டுகளுக்கு இடையில் தேவகோட்டையின் நகரத்தார் (நாட்டுக்கோட்டை செட்டியார்) சமூகத்தால் முடிக்கப்பட்டது. கோயில் பல வம்சங்களிலும் விரிவாக்கப்பட்டது: 12-ம் நூற்றாண்டில் பாண்டிய மன்னர்கள் அடிப்படை கட்டமைப்பை நிறுவினர், அதே காலகட்டத்தில் இலங்கை மன்னர் பராக்ரமபாகு கருவறையை புதுப்பித்தார், மற்றும் ராமநாதபுரத்தின் சேதுபதி மன்னர்கள் 15-17-ம் நூற்றாண்டுகள் வழியாக பெரிய விரிவாக்கத்தை ஒருங்கிணைத்தனர். நந்தி மண்டபத்தில் தென்னிந்தியாவின் மிக பெரிய நந்தி சிலைகளில் ஒன்றான 17 அடி நந்தி சிலை உள்ளது.\n\nஐந்தாம் இறையியல் அடுக்கு ராமேஸ்வரத்தை காசியின் (வாராணசி) ஆன்மிக இணையாக நிறுவுகிறது. காசி யாத்திரை ராமேஸ்வரத்திற்கு பார்வையிடாமல் முழுமையடையாது என்றும், அதற்கு நேர்மாறாகவும் பாரம்பரியம் கூறுகிறது. யாத்திரிகர்கள் பாரம்பரியமாக வாராணசியிலிருந்து கங்கை நீரை ராமேஸ்வரத்திற்கு கொண்டு வந்து ராமநாதஸ்வாமி லிங்கத்திற்கு அபிஷேகம் செய்கிறார்கள், மற்றும் ராமேஸ்வரம் கடற்கரையிலிருந்து மணலை காசிக்கு எடுத்துச் சென்று கங்கையில் மூழ்கடிக்கிறார்கள் — காசி-ராமேஸ்வரம் சுற்று இந்தியாவின் வடக்கு மற்றும் தெற்கை ஒரே புனித பயணத்தில் இணைக்கிறது.\n\nதேவார பாரம்பரியத்தின் மூன்று நாலாவர்களும் (சம்பந்தர், அப்பர், சுந்தரர்) ராமேஸ்வரத்தைப் பாடினர்; சம்பந்தரின் 3.111 பதிகம், அப்பரின் 5.83 பதிகம், மற்றும் சுந்தரரின் 7.79 பதிகத்தில் இக்கோயில் தோன்றுகிறது. ராமேஸ்வரம் ஶைவர்கள், வைஷ்ணவர்கள், மற்றும் ஸ்மார்த்தர்களால் தனித்துவமாக வணங்கப்படுகிறது — ராமன் மற்றும் ஶிவனின் தெய்வீக ஐக்கியத்திற்கு முன் மத பிரிவினைகள் கரையும் ஒரு அரிய பான்-இந்து ஆலயம். தனுஷ்கோடியில் உள்ள கோதண்டராமஸ்வாமி திருக்கோயில் (ராமேஸ்வரத்திலிருந்து 20 கி.மீ.) விபீஷணர் ராமரிடம் சரணடைந்த இடத்தை நினைவூட்டுகிறது; அருகிலுள்ள கந்தமாதன பர்வதம் ராமரின் பாதச்சுவட்டை கொண்டுள்ளது. இரண்டு ஆயிரம் ஆண்டுகளுக்கும் மேலாக, ராமேஸ்வரம் புராணம், புவியியல், மற்றும் பக்தி இணையும் யாத்திரை தலமாக நிற்கிறது — இந்து இந்தியாவின் புனித தென் முனை, ராமாயணம் கடலைச் சந்திக்கும் இடம்.";

  window.TEMPLE_ENRICHMENT[205] = {
    sthala_purana_en: sthalaEn,
    sthala_purana_ta: sthalaTa,

    // Deity (Ramanathaswamy) already in temple.name — no need to duplicate
    // Goddess (Consort)
    goddess_en: "Parvatavardhini Amman",
    goddess_ta: "பர்வதவர்த்தினி அம்மன்",

    // Theertham (renamed from Pushkarini in display) — Rameswaram is unique for its 22 theerthams
    pushkarini_en: "Agni Theertham (the sea itself) + 22 sacred wells inside temple (Mahalakshmi, Savithri, Gayathri, Sita, Ganga, Yamuna Theerthams and more)",
    pushkarini_ta: "அக்னி தீர்த்தம் (கடல்) + கோயிலுக்குள் 22 புனித கிணறுகள் (மகாலக்ஷ்மி, சாவித்திரி, காயத்திரி, சீதா, கங்கை, யமுனை தீர்த்தங்கள் மற்றும் பல)",

    // Sthala Vriksha - Kokku (Cordia dichotoma)
    sthala_vriksha: {
      common_name_en: "Kokku",
      common_name_ta: "கொக்கு",
      scientific_name: "Cordia dichotoma",
      description_en: "The Kokku tree (Cordia dichotoma), also known as the Fragrant Manjack, Sebesten Plum, or Indian Cherry, is a small to medium-sized deciduous tree native to South Asia and Southeast Asia. It grows up to 10 meters tall, producing yellow to orange edible fruits and small white or pink flowers. The tree is well-adapted to coastal saline conditions, making it a natural companion tree to the Rameswaram island's coastal environment.",
      description_ta: "கொக்கு மரம் (Cordia dichotoma), 'நறுமண மஞ்ஜாக்' அல்லது 'இந்திய செர்ரி' என்றும் அழைக்கப்படும் இது தென்-தெற்கு ஆசியாவில் காணப்படும் ஒரு நடுத்தர அளவிலான இலையுதிர் மரம். 10 மீட்டர் உயரம் வரை வளர்ந்து, மஞ்சள்-ஆரஞ்சு உண்ணக்கூடிய பழங்களையும், சிறிய வெள்ளை அல்லது இளஞ்சிவப்பு பூக்களையும் தருகிறது. கடலோர கார நிலைமைகளுக்கு நன்கு தழுவியிருப்பதால், ராமேஸ்வரம் தீவின் கடலோர சூழலுக்கு இயற்கையான துணை மரமாக அமைந்துள்ளது.",
      significance_en: "The Kokku tree carries strong Ramayana associations at Rameswaram — the Kokku (crane) also appears in scenes where Rama and Sita rested during their journey. The tree's coastal-tolerant nature symbolizes Rameswaram's identity as the sacred meeting point of land and sea. In traditional Tamil Shaiva pilgrimage practice, the leaves and bark of the Sthala Vriksha are used in worship rituals of Ramanathaswamy.",
      significance_ta: "கொக்கு மரம் ராமேஸ்வரத்தில் வலுவான ராமாயண தொடர்புகளைக் கொண்டுள்ளது — ராமரும் சீதையும் தமது பயணத்தின்போது ஓய்வெடுத்த காட்சிகளில் கொக்கு (பறவை) தோன்றுகிறது. மரத்தின் கடலோர-தாக்குப்பிடிக்கும் தன்மை ராமேஸ்வரத்தை நிலம் மற்றும் கடலின் புனித சந்திப்புப் புள்ளியாக அடையாளப்படுத்துகிறது. பாரம்பரிய தமிழ் ஶைவ யாத்திரை நடைமுறையில், ஸ்தல விருக்ஷத்தின் இலைகள் மற்றும் பட்டைகள் ராமநாதஸ்வாமியின் வழிபாட்டு சடங்குகளில் பயன்படுத்தப்படுகின்றன."
    },

    size_acres: 15,

    festivals_en: [
      "Maha Shivaratri (Feb-Mar) — night-long prayers, most important festival",
      "Thirukalyanam (Aadi Amavasai, Jul-Aug) — celestial wedding of Ramanathaswamy and Parvatavardhini re-enacted",
      "Ramalinga Pratishtha Utsavam (Vaikasi, May-Jun) — commemorating Rama's consecration of the Lingam",
      "Aani Brahmotsavam (Jun-Jul) — 12-day annual festival with daily processions",
      "Navaratri (Sep-Oct) — nine-night festival for Devi Parvatavardhini",
      "Aadi Amavasya (Jul-Aug) — pithru karma at Agni Theertham",
      "Karthigai Deepam (Nov-Dec)",
      "Thai Amavasya (Jan-Feb)"
    ],
    festivals_ta: [
      "மகா ஶிவராத்திரி (பிப்-மார்) — இரவு நீள பிரார்த்தனைகள், மிக முக்கிய விழா",
      "திருக்கல்யாணம் (ஆடி அமாவாசை, ஜூல்-ஆக) — ராமநாதஸ்வாமி மற்றும் பர்வதவர்த்தினியின் தெய்வீக திருமணம்",
      "ராமலிங்க பிரதிஷ்டா உற்சவம் (வைகாசி, மே-ஜூன்) — ராமரின் லிங்க பிரதிஷ்டையை நினைவூட்டும் விழா",
      "ஆனி பிரம்மோற்சவம் (ஜூன்-ஜூலை) — 12-நாள் வருடாந்திர விழா, தினசரி ஊர்வலங்களுடன்",
      "நவராத்திரி (செப்-அக்) — தேவி பர்வதவர்த்தினியின் ஒன்பது-இரவு விழா",
      "ஆடி அமாவாசை (ஜூலை-ஆக) — அக்னி தீர்த்தத்தில் பித்ரு கர்மா",
      "கார்த்திகை தீபம் (நவ-டிச)",
      "தை அமாவாசை (ஜன-பிப்)"
    ],

    town_ta: "ராமேஸ்வரம்",
    coords_verified: true,

    nayanmar_associations: [
      {
        nayanmar: "sundarar",
        role: "pathigam",
        brief_en: "Sundarar's Devaram pathigam on Rameswaram",
        brief_ta: "ராமேஸ்வரம் மீது சுந்தரரின் தேவாரப் பதிகம்",
        story_en: "Sundarar sang his 7.79 pathigam on Ramanathaswamy Temple, celebrating the deity as the Lord who Rama himself worshipped. Sundarar's compositions capture the theological significance of Rameswaram as the meeting point of the two great avatars — Rama's devotion to Shiva expressed in ritual worship.",
        story_ta: "சுந்தரர் ராமநாதஸ்வாமி திருக்கோயில் மீது தமது 7.79 பதிகத்தை பாடினார், ராமரே வணங்கிய இறைவனாக தெய்வத்தைக் கொண்டாடினார். சுந்தரரின் இயற்றங்கள் ராமேஸ்வரத்தை இரண்டு மகா அவதாரங்களின் சந்திப்புப் புள்ளியாக இறையியல் ரீதியில் முக்கியத்துவம் அளிக்கிறது — ஶிவனுக்கு ராமரின் பக்தி சடங்கு வழிபாட்டில் வெளிப்பட்டது."
      },
      {
        nayanmar: "sambandar",
        role: "pathigam",
        brief_en: "Sambandar's 3.111 pathigam on Rameswaram",
        brief_ta: "ராமேஸ்வரம் மீது சம்பந்தரின் 3.111 பதிகம்",
        story_en: "Thirujnana Sambandar visited Rameswaram during his southern pilgrimage and composed his 3.111 pathigam. His verses emphasize the pilgrimage merit of the 22 theerthams and describe the temple's connection to the Ramayana narrative.",
        story_ta: "திருஞானசம்பந்தர் தமது தென் யாத்திரையின்போது ராமேஸ்வரம் வந்து தமது 3.111 பதிகத்தை இயற்றினார். அவரது பாசுரங்கள் 22 தீர்த்தங்களின் யாத்திரை புண்ணியத்தை வலியுறுத்துகின்றன மற்றும் ராமாயண கதைக்கு கோயிலின் தொடர்பை விவரிக்கின்றன."
      },
      {
        nayanmar: "appar",
        role: "pathigam",
        brief_en: "Appar's 5.83 pathigam on Rameswaram",
        brief_ta: "ராமேஸ்வரம் மீது அப்பரின் 5.83 பதிகம்",
        story_en: "Thirunavukkarasar (Appar) composed his 5.83 pathigam at Rameswaram, celebrating the deity as Ramanathaswamy — the Lord of Rama. Appar's compositions reflect the philosophical depth of the shrine's significance: Shiva accepts worship from Rama himself, showing that all divinity is ultimately unified.",
        story_ta: "திருநாவுக்கரசர் (அப்பர்) ராமேஸ்வரத்தில் தமது 5.83 பதிகத்தை இயற்றினார், தெய்வத்தை ராமநாதஸ்வாமி — ராமரின் இறைவன் என்று கொண்டாடினார். அப்பரின் இயற்றங்கள் ஆலயத்தின் முக்கியத்துவத்தின் தத்துவ ஆழத்தை பிரதிபலிக்கின்றன: ஶிவன் ராமரிடமிருந்தே வழிபாட்டை ஏற்கிறார், அனைத்து தெய்வீகமும் இறுதியில் ஒற்றுமையானது என்பதைக் காட்டுகிறது."
      }
    ],

    cross_tradition_en: [
      { tradition: "sri_vaishnava", story: "Rameswaram is uniquely revered in Sri Vaishnava tradition as the temple where Sri Rama (the seventh avatar of Vishnu) himself performed Shiva worship. The Kothandaramaswamy Temple at Dhanushkodi (20 km away) is a dedicated Rama shrine commemorating Vibhishana's surrender. The site's dual Rama-Shiva veneration makes it one of the very few temples where Shaiva and Sri Vaishnava traditions merge in ritual — a Vishnu avatar worshipping Shiva. This theological unity is why Rameswaram is one of the four Char Dhams alongside three Vaishnava sites (Badrinath, Dwarka, Puri)." },
      { tradition: "shakta", story: "The Parvatavardhini Amman shrine within the complex represents the Shakta dimension. Parvatavardhini (meaning 'One who nurtures the Mountain-daughter') is Parvati, and the Ramayana narrative includes her presence as Sita at Rameswaram. The Navaratri festival celebrates Devi's nine-night worship." },
      { tradition: "vaidika", story: "Rameswaram's exceptional 23-well bathing ritual (Agni Theertham + 22 inside) preserves an ancient Vedic pilgrimage practice. The daily poojas follow strict Vedic protocols with mantras invoking each of the 22 theerthams by name, connecting the temple's ritual practice to the Vedic Kalpa Sutras. The Ardhajama Pooja at 8:30 PM specifically features Vedic hymns from the Sri Rudram." },
      { tradition: "other", story: "Rameswaram uniquely holds Jyotirlinga status among the 12, Char Dham status among the 4, and Paadal Petra Sthalam status among the 276 — the only temple in India with all three designations. This convergence establishes it as one of the most pan-Hindu shrines in South Asia. The Kashi-Rameswaram circuit (carrying Ganga water to Rameswaram, taking Rameswaram sand to Kashi) unites the north and south of India in a single sacred journey." }
    ],
    cross_tradition_ta: [
      { tradition: "sri_vaishnava", story: "ஶ்ரீ ராமர் (விஷ்ணுவின் ஏழாவது அவதாரம்) தாமே ஶிவ வழிபாட்டைச் செய்த கோயிலாக ராமேஸ்வரம் ஶ்ரீ வைஷ்ணவ பாரம்பரியத்தில் தனித்துவமாக மதிக்கப்படுகிறது. தனுஷ்கோடியில் உள்ள கோதண்டராமஸ்வாமி திருக்கோயில் (20 கி.மீ. தொலைவில்) விபீஷணரின் சரணடைவை நினைவூட்டும் ஒரு ராம ஆலயம். தளத்தின் இரட்டை ராம-ஶிவ வழிபாடு ஶைவ மற்றும் ஶ்ரீ வைஷ்ணவ பாரம்பரியங்கள் சடங்கு ரீதியில் இணையும் ஒரு சில கோயில்களில் ஒன்றாக இதை ஆக்குகிறது — ஒரு விஷ்ணு அவதாரம் ஶிவனை வணங்குதல். இந்த இறையியல் ஒற்றுமை காரணமாகவே மூன்று வைஷ்ணவ தலங்களுடன் (பத்ரிநாத், துவாரகை, புரி) சேர்த்து ராமேஸ்வரம் நான்கு தாம்களில் ஒன்று." },
      { tradition: "shakta", story: "வளாகத்திற்குள் பர்வதவர்த்தினி அம்மன் ஆலயம் ஶாக்த பரிமாணத்தை பிரதிநிதித்துவப்படுத்துகிறது. பர்வதவர்த்தினி (மலை-மகளை போஷிப்பவர் என்று பொருள்) பார்வதி, மற்றும் ராமாயண கதையில் ராமேஸ்வரத்தில் சீதாவாக அவரது இருப்பு அடங்கியுள்ளது. நவராத்திரி விழா தேவியின் ஒன்பது-இரவு வழிபாட்டைக் கொண்டாடுகிறது." },
      { tradition: "vaidika", story: "ராமேஸ்வரத்தின் அசாதாரண 23-கிணறு குளியல் சடங்கு (அக்னி தீர்த்தம் + உள்ளே 22) ஒரு பழம் வைதிக யாத்திரை நடைமுறையை பாதுகாக்கிறது. தினசரி பூஜைகள் 22 தீர்த்தங்களை ஒவ்வொன்றையும் பெயரால் அழைக்கும் மந்திரங்களுடன் கடினமான வைதிக நடைமுறையை பின்பற்றுகின்றன, கோயிலின் சடங்கு நடைமுறையை வைதிக கல்ப சூத்திரங்களுடன் இணைக்கிறது. இரவு 8:30 மணிக்கு நடத்தப்படும் அர்த்தஜாம பூஜை குறிப்பாக ஶ்ரீ ருத்திரத்தில் இருந்து வேத பாசுரங்களை உள்ளடக்கியது." },
      { tradition: "other", story: "12 ஜோதிர்லிங்கங்களில் ஜோதிர்லிங்க அந்தஸ்து, 4 சார் தாம்களில் சார் தாம் அந்தஸ்து, மற்றும் 276 பாடல் பெற்ற ஸ்தலங்களில் பாடல் பெற்ற ஸ்தலம் அந்தஸ்து — மூன்றும் ஒரே கோயிலில் இருக்கும் ஒரே தளம் இந்தியாவில் ராமேஸ்வரம் மட்டுமே. இந்த ஒருங்கிணைப்பு தென் ஆசியாவின் மிக பான்-இந்து ஆலயங்களில் ஒன்றாக இதை நிறுவுகிறது. காசி-ராமேஸ்வரம் சுற்று (கங்கை நீரை ராமேஸ்வரத்திற்கு எடுத்துச் செல்வது, ராமேஸ்வரம் மணலை காசிக்கு எடுத்துச் செல்வது) ஒரே புனித பயணத்தில் இந்தியாவின் வடக்கு மற்றும் தெற்கை இணைக்கிறது." }
    ]
  };

  console.log('[Session 1C.4] Rameswaram (sno 205) enrichment loaded with anchor-level content.');
  console.log('[Session 1C.4] Sthala Purana length: ' + sthalaEn.length + ' chars (English), ' + sthalaTa.length + ' chars (Tamil)');
  console.log('[Session 1C.4] Sthala Vriksha: Kokku (Cordia dichotoma) with full description + significance');
  console.log('[Session 1C.4] Nayanmar associations: 3 (Sundarar, Sambandar, Appar - pathigams)');
  console.log('[Session 1C.4] Cross-tradition links: 4 (Sri Vaishnava, Shakta, Vaidika, Other)');
  console.log('[Session 1C.4] Festivals: 8 (bilingual)');

  // If panel is currently showing Rameswaram, re-render to show new content
  setTimeout(function() {
    if (typeof window.showTempleInPanel === 'function') {
      var panel = document.getElementById('detail-panel');
      var contentDiv = document.getElementById('detail-panel-content');
      if (panel && panel.classList.contains('has-content') && contentDiv) {
        var nameEl = contentDiv.querySelector('.dp-name');
        if (nameEl && nameEl.textContent.indexOf('#205') !== -1) {
          window.showTempleInPanel(205);
          console.log('[Session 1C.4] Re-rendered current Rameswaram panel with new content');
        }
      }
    }
  }, 500);
})();

/* ============================================================ */
/* SESSION_1C5_LOADED — Madurai Meenakshi Anchor-Level Content  */
/* ============================================================ */
(function(){
  window.SESSION_1C5_LOADED = true;
  console.log('[Session 1C.5] Loading Madurai Meenakshi Sundareswarar anchor-level content...');

  if (!window.TEMPLE_ENRICHMENT) window.TEMPLE_ENRICHMENT = {};

  var sthalaEn = "The Meenakshi Sundareswarar Temple stands at the heart of Madurai — Tamil Nadu's ancient capital and one of India's most continuously inhabited cities — on the southern bank of the Vaigai River. Also known formally as Arulmigu Meenakshi Sundaraswarar Temple, this vast 14-acre complex is one of the most theologically and architecturally significant Shaiva shrines in India. Uniquely, it is dedicated jointly to Goddess Meenakshi (a form of Parvati, revered as the ruling deity) and her divine consort Sundareswarar (Shiva) — a rare configuration where the goddess-shrine is larger and given ritual primacy over the god-shrine. The temple is celebrated by all Naalvar; both Sambandar (3.120 pathigam) and Appar (5.83 padigam of Thiruvaalavai) composed dedicated pathigams here.\n\nThe primary sthala purana centers on Indra's atonement for Brahmahatya dosha. Indra, king of the Devas, had killed the demon Vritrasura who was born a Brahmin — bringing upon himself the terrible sin of brahma-hatya. Wandering the three worlds seeking redemption, Indra visited every sacred site associated with Shiva but the sin still pursued him. Finally, in a dense forest of Kadamba trees in the south (the Kadamba Vanam, later to become Madurai), Indra felt the burden miraculously lift. He discovered a self-manifested Swayambhu Shiva Lingam beneath a Kadamba tree, beside a golden pond covered with lotuses. Indra offered the golden lotuses to the Lingam and was purified. Grateful, he requested Vishwakarma, the divine architect, to build a shrine to protect the Lingam. This foundational narrative establishes Madurai's origin as Kadamba Vanam (the Kadamba forest) and the sacred pond as Potramarai Kulam (the Golden Lotus Tank) — both of which remain central to the temple today. It is believed that Shiva grants darshan to Indra amongst the Kadamba grove on the full moon day of Chittirai each year, continuing this cosmic devotional relationship.\n\nThe second sthala purana centers on Meenakshi's divine birth. The Pandya king Malayadhwaja and queen Kanchanamalai were childless despite many prayers. They performed the Puthra Kameshti Yagam, and from the sacred fire emerged a radiant three-year-old female child — but with three breasts. A celestial voice prophesied: 'This is no ordinary child. Nurture her as you would a male heir, make her the queen; and when she meets her destined consort, her third breast shall vanish.' The child was named Thadatakai (later Meenakshi, 'fish-eyed goddess'). Raised as a warrior-queen, she mastered arts, statecraft, and arms; she extended Pandya sovereignty in all four directions, conquering realms one after another. Finally, in a climactic ascent, Meenakshi journeyed to Mount Kailasa to challenge Shiva himself. The moment their gazes met, her third breast vanished — the prophecy fulfilled, mutual recognition complete. Shiva accompanied her back to Madurai as Sundareswarar ('the Beautiful Lord'), where their celestial wedding was celebrated. This wedding is the theological foundation of Chittirai Thiruvizha, Madurai's grandest festival.\n\nThe third sthala purana centers on the 64 Thiruvilaiyadal Puranam (the 64 divine sports of Shiva at Madurai). Composed by Paranjothi Munivar, these 64 narratives describe how Shiva, as Sundareswarar-Sokkanathar, engaged in playful yet profound acts to teach, test, and grace his devotees in Madurai. Stories include Shiva restraining a bird's greed to teach patience, Shiva selling firewood to help a poor woman, Shiva rescuing devotees, and countless acts of divine intervention. The Thiruvilaiyadal Puranam is one of the most beloved narrative traditions in Tamil Shaivism and gives Madurai its distinctive theological character as a city where the divine engages intimately with human concerns.\n\nThe fourth theological layer establishes Madurai as Madhurapuri ('the sweet city'), sanctified by divine nectar (madhu) said to have fallen from Shiva's matted locks. Legend recounts that when Shiva shook his hair during the divine wedding, celestial nectar dripped upon the ground below, giving the city its name. This etymology is preserved in Tamil Sangam literature and marks Madurai as a city whose very soil is theologically sanctified.\n\nThe architectural grandeur of the temple matches its theological richness. The complex features 14 gopurams (gateway towers): 4 nine-storey outer gopurams at the cardinal directions (the southern gopuram at 170 feet or 52 meters is the tallest, built around 1559 CE under Vishvanatha Nayaka), 1 seven-storey gopuram, 5 five-storey gopurams, 2 three-storey gopurams, and 2 gilded vimana crown-roofs above the sancta. The southern gopuram alone bears over 1,500 individual stucco figures of deities, dancers, and mythological scenes, repainted every twelve years during the Kumbhabhishekam. The Hall of Thousand Pillars actually contains 985 finely carved granite pillars, including the celebrated 'musical pillars' that emit different musical notes when tapped. The Ashta Shakti Mandapam, Meenakshi Nayakkar Mandapam, and Kalyana Mandapam display sculptural narratives of the Ashtashakti (eight forms of Devi) and the divine wedding. The temple has been rebuilt across multiple dynasties: original Pandya foundations (12th-13th century CE), Vijayanagara period reconstruction (14th century after Delhi Sultanate destruction under Malik Kafur in 1311 CE), and the great Nayak expansion (16th-17th century) under Thirumalai Nayak.\n\nThe temple houses 33,000 sculptures — one of the highest sculpture counts in any Hindu temple. It stands as one of the Pancha Sabha (five celestial dance halls of Shiva), the Silver Sabha (Velli Ambalam), where Shiva performs the divine dance. Meenakshi is also revered as one of the 51 Shakti Peethas — the fingernail (kai viral) of Devi Sati is believed to have fallen here.\n\nAll four Naalvar sing Madurai: Sambandar's 3.120 pathigam and Appar's 5.83 padigam on Thiruvaalavai are foundational. Sundarar and Manickavasakar have references. Additionally, Ninrasir Nedumara Nayanar (Pandya king, father of Koon Pandyan) and Mangayarkkarasi Nayanar (Pandya queen, wife of Ninrasir) are two of the 63 Nayanmars whose stories center on Madurai — Mangayarkkarasi brought Sambandar to Madurai to defeat the Jain scholars, leading to the famous Samana Samharam episode. For over two thousand years, Madurai Meenakshi Sundareswarar Temple has stood as the theological, ritual, cultural, and civic heart of Tamil Nadu — the city where Meenakshi rules and Sundareswarar accompanies.";

  var sthalaTa = "தமிழ்நாட்டின் பழம் தலைநகரமும் இந்தியாவின் மிக தொடர்ச்சியாக மனிதர் வாழும் நகரங்களில் ஒன்றுமான மதுரையின் இதயத்தில், வைகை நதியின் தென் கரையில் நிற்கும் ஶ்ரீ மீனாட்சி சுந்தரேஸ்வரர் திருக்கோயில் இந்தியாவின் மிக இறையியல் மற்றும் கட்டிடக்கலை ரீதியில் முக்கியமான ஶைவ ஆலயங்களில் ஒன்று. அருள்மிகு மீனாட்சி சுந்தரேஸ்வரர் திருக்கோயில் என்று அதிகாரப்பூர்வமாக அழைக்கப்படும் இந்த பரந்த 14 ஏக்கர் வளாகம், தேவி மீனாட்சி (பார்வதியின் ஒரு வடிவம், ஆளும் தெய்வமாக மதிக்கப்படுவர்) மற்றும் அவரது தெய்வீக துணைவரான சுந்தரேஸ்வரர் (ஶிவன்) ஆகியோருக்கு இணைந்து அர்ப்பணிக்கப்பட்டுள்ளது — அரிதான ஒரு அமைப்பில் தேவி ஆலயம் பெரிதாக இருந்து சடங்கு முதன்மையை வைத்திருக்கிறது. கோயில் அனைத்து நாலாவராலும் கொண்டாடப்படுகிறது; சம்பந்தரின் 3.120 பதிகமும் அப்பரின் திருஆலவாய் 5.83 பதிகமும் இங்கே அர்ப்பணிக்கப்பட்டவை.\n\nமூல ஸ்தல புராணம் இந்திரனின் பிரம்மஹத்திய தோஷ நிவாரணத்தை மையமாக்கியது. தேவர்களின் அரசன் இந்திரன், பிராமணராக பிறந்த விருத்திராசுரனை கொன்று பயங்கர பிரம்மஹத்தி பாவத்தை பெற்றார். மூன்று உலகங்களிலும் விடுதலைக்காக அலைந்து, ஶிவனுடன் தொடர்புடைய அனைத்து புனித தளங்களையும் பார்வையிட்டார் ஆனால் பாவம் அவரை பின்தொடர்ந்தது. இறுதியில், தெற்கில் அடர்ந்த கடம்ப மரங்களின் காட்டில் (கடம்ப வனம், பின்னர் மதுரையாக ஆனது), இந்திரன் சுமை அற்புதமாக அகற்றப்படுவதை உணர்ந்தார். கடம்ப மரத்தின் கீழ் தன்னால் தோன்றிய சுயம்பு ஶிவ லிங்கத்தையும், தாமரைகளால் மூடப்பட்ட ஒரு தங்க குளத்தையும் கண்டுபிடித்தார். இந்திரன் தங்க தாமரைகளை லிங்கத்திற்கு அர்ப்பணித்து தூய்மைப்படுத்தப்பட்டார். நன்றியுடன், லிங்கத்தைப் பாதுகாக்க ஒரு ஆலயத்தை கட்ட தெய்வீக கட்டிடக்கலைஞர் விஶ்வகர்மாவை கேட்டார். இந்த அடிப்படை கதை மதுரையை கடம்ப வனமாகவும், புனித குளத்தை பொற்றாமரை குளமாகவும் நிறுவுகிறது — இரண்டும் இன்றும் கோயிலின் மையமாக உள்ளன. ஒவ்வொரு ஆண்டும் சித்திரை மாதத்தின் பூரணை தினத்தில் கடம்ப வனத்தில் இந்திரனுக்கு ஶிவன் தரிசனம் அளிக்கிறார் என்று நம்பப்படுகிறது.\n\nஇரண்டாம் ஸ்தல புராணம் மீனாட்சியின் தெய்வீக பிறப்பை மையமாக்கியது. பாண்டிய அரசன் மலயத்வஜனும், மகாராணி காஞ்சனமாலையும் பல பிரார்த்தனைகள் இருந்தபோதிலும் குழந்தையின்றி இருந்தனர். புத்திர காமேஷ்டி யாகத்தை நிகழ்த்தினர். புனித அக்னியிலிருந்து ஒரு ஒளிமயமான மூன்று வயது பெண் குழந்தை வெளிப்பட்டார் — ஆனால் மூன்று மார்புகளுடன். ஒரு தெய்வீக குரல் முன்னறிவித்தது: 'இது சாதாரண குழந்தை அல்ல. அவளை ஒரு ஆண் வாரிசாக வளர்த்து அரசியாக ஆக்குங்கள்; அவள் தமது விதிக்கப்பட்ட துணைவரை சந்திக்கும்போது, மூன்றாம் மார்பு மறையும்.' குழந்தை தடாதகை (பின்னர் மீனாட்சி, 'மீன்-கண்ணி') என்று பெயரிடப்பட்டார். ஒரு போர்-ராணியாக வளர்க்கப்பட்டு கலைகள், அரசியல் மற்றும் ஆயுதங்களை தேர்ச்சி பெற்றார்; பாண்டிய இறையாட்சியை நான்கு திசைகளிலும் விரிவுபடுத்தினார். இறுதியில், மீனாட்சி ஶிவனையே சவால் விடுக்க கைலாசம் நோக்கி பயணித்தார். அவர்களின் பார்வைகள் சந்தித்தவுடன், அவரது மூன்றாம் மார்பு மறைந்தது — முன்னறிவிப்பு நிறைவேறியது, பரஸ்பர அங்கீகாரம் முழுமையானது. ஶிவன் அவளுடன் மதுரைக்கு சுந்தரேஸ்வரராக ('அழகான இறைவன்') திரும்பினார், அங்கே அவர்களது தெய்வீக திருமணம் கொண்டாடப்பட்டது. இந்த திருமணம் மதுரையின் மிக பெரிய விழாவான சித்திரை திருவிழாவின் இறையியல் அடிப்படை.\n\nமூன்றாம் ஸ்தல புராணம் மதுரையில் ஶிவனின் 64 திருவிளையாடல் புராணத்தை மையமாக்கியது. பரஞ்சோதி முனிவரால் இயற்றப்பட்ட இந்த 64 கதைகள் மதுரையில் தமது பக்தர்களுக்கு கற்பிக்க, சோதிக்க, மற்றும் அருள்புரிய சுந்தரேஸ்வரர்-சொக்கநாதர் எனச் செய்த விளையாட்டு போலவும் ஆழமான செயல்களை விவரிக்கின்றன. கதைகளில் ஶிவன் ஒரு பறவையின் பேராசையை கட்டுப்படுத்தி பொறுமையை கற்றுத்தந்தது, ஶிவன் ஒரு ஏழை பெண்ணுக்கு உதவ விறகு விற்றது, ஶிவன் பக்தர்களை காப்பாற்றியது ஆகிய அனைத்தும் அடங்கும். திருவிளையாடல் புராணம் தமிழ் ஶைவத்தின் மிக அன்பான கதைகள் மரபுகளில் ஒன்றாகும், மற்றும் மதுரைக்கு தெய்வம் மனித கவலைகளுடன் நெருக்கமாக ஈடுபடும் நகரமாக அதன் தனித்துவமான இறையியல் தன்மையை அளிக்கிறது.\n\nநான்காம் இறையியல் அடுக்கு மதுரையை மதுராபுரி ('இனிமையான நகரம்') என்று நிறுவுகிறது, ஶிவனின் ஜடையிலிருந்து விழுந்த தெய்வீக அமிர்தத்தால் (மது) புனிதப்படுத்தப்பட்டது. தெய்வீக திருமணத்தின் போது ஶிவன் தமது தலைமுடியை உலுக்கியபோது, தெய்வீக அமிர்தம் கீழே தரையில் சொட்டியது, நகரத்திற்கு அதன் பெயரை அளித்தது என்று புராணம் கூறுகிறது. இந்த சொற்பிறப்பியல் தமிழ் சங்க இலக்கியத்தில் பாதுகாக்கப்பட்டு, மதுரையை அதன் மண் இறையியல் ரீதியில் புனிதப்படுத்தப்பட்ட நகரமாக அடையாளப்படுத்துகிறது.\n\nகோயிலின் கட்டிடக்கலை மகிமை அதன் இறையியல் செழுமையுடன் பொருந்துகிறது. வளாகம் 14 கோபுரங்களைக் (நுழைவாயில் கோபுரங்கள்) கொண்டுள்ளது: நான்கு திசைகளிலும் 4 ஒன்பது-அடுக்கு வெளிப்புற கோபுரங்கள் (தென் கோபுரம் 170 அடி அல்லது 52 மீட்டர் உயரம், மிக உயரமானது, 1559 CE இல் விஶ்வநாத நாயக்கரின் கீழ் கட்டப்பட்டது), 1 ஏழு-அடுக்கு கோபுரம், 5 ஐந்து-அடுக்கு கோபுரங்கள், 2 மூன்று-அடுக்கு கோபுரங்கள், மற்றும் கருவறைகளுக்கு மேலே 2 தங்கமுலாம் பூசப்பட்ட விமான உச்சி-கூரைகள். தென் கோபுரம் மட்டுமே 1,500-க்கும் மேற்பட்ட தனித்தனி தெய்வங்கள், நடனக்காரர்கள், மற்றும் கதை காட்சிகளின் ஸ்டக்கோ உருவங்களை தாங்கியுள்ளது, ஒவ்வொரு பன்னிரண்டு வருடங்களிலும் கும்பாபிஷேகத்தின் போது மீண்டும் வர்ணம் பூசப்படுகிறது. ஆயிரம் தூண் மண்டபத்தில் உண்மையில் 985 நேர்த்தியாக செதுக்கப்பட்ட கிரானைட் தூண்கள் உள்ளன, தட்டப்படும்போது வெவ்வேறு இசை நோட்டுகளை உமிழும் புகழ்பெற்ற 'இசை தூண்கள்' உட்பட. அஷ்ட சக்தி மண்டபம், மீனாட்சி நாயக்கர் மண்டபம், மற்றும் கல்யாண மண்டபம் அஷ்டசக்திகளின் (தேவியின் எட்டு வடிவங்கள்) மற்றும் தெய்வீக திருமணத்தின் சிற்ப கதைகளை காட்டுகின்றன. கோயில் பல வம்சங்களில் மீண்டும் கட்டப்பட்டது: அசல் பாண்டியர் அடித்தளங்கள் (12-13-ம் நூற்றாண்டு CE), 1311 CE இல் மாலிக் காஃபூரின் கீழ் டெல்லி சுல்தானகத்தின் அழிவுக்குப் பிறகு விஜயநகர கால புனரமைப்பு (14-ம் நூற்றாண்டு), மற்றும் திருமலை நாயக்கரின் கீழ் பெரிய நாயக்கர் விரிவாக்கம் (16-17-ம் நூற்றாண்டு).\n\nகோயில் 33,000 சிற்பங்களை கொண்டுள்ளது — எந்த இந்து கோயிலிலும் மிக அதிகமான சிற்ப எண்ணிக்கைகளில் ஒன்று. இது ஶிவனின் ஐந்து தெய்வீக நடன சபைகளில் ஒன்றான வெள்ளி சபை (வெள்ளி அம்பலம்), அங்கே ஶிவன் தெய்வீக நடனத்தை நிகழ்த்துகிறார். மீனாட்சி 51 சக்தி பீடங்களில் ஒருவராகவும் மதிக்கப்படுகிறார் — சதி தேவியின் நகம் (கை விரல்) இங்கே விழுந்ததாக நம்பப்படுகிறது.\n\nஅனைத்து நான்கு நாலாவரும் மதுரையைப் பாடினர்: சம்பந்தரின் 3.120 பதிகமும் அப்பரின் திருஆலவாய் 5.83 பதிகமும் அடிப்படை. சுந்தரர் மற்றும் மாணிக்கவாசகருக்கு குறிப்புகள் உள்ளன. கூடுதலாக, நின்றசீர் நெடுமார நாயனார் (பாண்டிய அரசன், கூன் பாண்டியனின் தந்தை) மற்றும் மங்கையர்க்கரசி நாயனார் (பாண்டிய மகாராணி, நின்றசீரின் மனைவி) ஆகியோர் மதுரையை மையமாகக் கொண்ட கதைகளுடன் கூடிய 63 நாயன்மார்களில் இருவர் — மங்கையர்க்கரசி ஜைன அறிஞர்களை தோற்கடிக்க சம்பந்தரை மதுரைக்கு அழைத்து வந்தார், புகழ்பெற்ற சமண சம்ஹார நிகழ்வுக்கு வழிவகுத்தார். இரண்டு ஆயிரம் ஆண்டுகளுக்கும் மேலாக, மதுரை மீனாட்சி சுந்தரேஸ்வரர் திருக்கோயில் தமிழ்நாட்டின் இறையியல், சடங்கு, கலாச்சார மற்றும் குடிமை இதயமாக நின்று வருகிறது — மீனாட்சி ஆட்சி செய்யும், சுந்தரேஸ்வரர் துணை வரும் நகரம்.";

  window.TEMPLE_ENRICHMENT[201] = {
    sthala_purana_en: sthalaEn,
    sthala_purana_ta: sthalaTa,

    goddess_en: "Meenakshi Amman (also Angayarkanni)",
    goddess_ta: "மீனாட்சி அம்மன் (அங்கயற்கண்ணி)",

    pushkarini_en: "Potramarai Kulam (Golden Lotus Tank) — the sacred pond where Indra offered golden lotuses; approximately 50m square, still central to daily ritual",
    pushkarini_ta: "பொற்றாமரை குளம் (தங்க தாமரை குளம்) — இந்திரன் தங்க தாமரைகளை அர்ப்பணித்த புனித குளம்; சுமார் 50 மீட்டர் சதுரம், இன்றும் தினசரி சடங்கின் மையம்",

    sthala_vriksha: {
      common_name_en: "Kadamba (Vellai Kadambu / Bur-flower Tree)",
      common_name_ta: "கடம்பு (வெள்ளை கடம்பு)",
      scientific_name: "Neolamarckia cadamba",
      description_en: "The Kadamba (Neolamarckia cadamba), also known in Tamil as Vellai Kadambu and in English as the Bur-flower Tree or Cadamba, is a large tropical hardwood tree native to South and Southeast Asia. It grows up to 45 meters tall with a straight cylindrical bole. Its distinctive orange-yellow spherical flower heads (about 5.5 cm diameter) with white protruding stamens release a sweet fragrance at dusk that attracts pollinators. In ancient times, dense forests of Kadamba trees covered the entire Madurai region, giving the land its original name Kadamba Vanam (Kadamba Forest).",
      description_ta: "கடம்பு (Neolamarckia cadamba), தமிழில் வெள்ளை கடம்பு என்றும் ஆங்கிலத்தில் 'பர்-பூ மரம்' என்றும் அழைக்கப்படும் இது தென் மற்றும் தென்கிழக்கு ஆசியாவின் மிக பெரிய வெப்பமண்டல வன்-மர வகை. 45 மீட்டர் உயரம் வரை வளர்ந்து, நேரான உருளை வடிவ தண்டு கொண்டது. அதன் தனித்துவமான ஆரஞ்சு-மஞ்சள் கோள வடிவ பூக்கள் (சுமார் 5.5 செ.மீ. விட்டம்) வெள்ளை நீட்டிய மகரந்தத்தாள்கள் கொண்டவை, இருள் நேரத்தில் இனிய நறுமணத்தை வெளியிடுகின்றன. முற்காலத்தில், அடர்ந்த கடம்ப மர வனங்கள் முழு மதுரை பகுதியையும் சூழ்ந்திருந்தன, நிலத்திற்கு அதன் அசல் பெயரான கடம்ப வனம் அளித்தன.",
      significance_en: "The Kadamba tree is the very origin of Madurai — the entire city was once known as Kadamba Vanam (the Kadamba Forest). It was under a Kadamba tree that Indra found the self-manifested Swayambhu Shivalinga and was freed from his Brahmahatya sin. The stump of the ancient Kadamba tree from that founding narrative is still preserved inside the Meenakshi Temple, protected under a silver plate. Kadambari Amman is a form of Devi associated with this tree, and Goddess Parvati is lovingly called Kadamba Vana Vasini ('She who dwells in the Kadamba forest'). The Chittirai full moon day is when Shiva grants darshan to Indra in the Kadamba grove — the annual reaffirmation of the temple's founding narrative. In Sanskrit tradition, the Kadamba tree is also sacred to Krishna, connecting the tree across Shaiva and Vaishnava traditions.",
      significance_ta: "கடம்ப மரம் மதுரையின் தோற்றமே — முழு நகரமும் ஒருகாலத்தில் கடம்ப வனம் (கடம்ப காடு) என்று அழைக்கப்பட்டது. கடம்ப மரத்தின் கீழேயே இந்திரன் தன்னால் தோன்றிய சுயம்பு ஶிவலிங்கத்தை கண்டுபிடித்து பிரம்மஹத்திய பாவத்திலிருந்து விடுவிக்கப்பட்டார். அந்த அடிப்படை கதையிலிருந்து பழம் கடம்ப மரத்தின் அடிமரம் இன்றும் மீனாட்சி கோயிலின் உள்ளே பாதுகாக்கப்பட்டு, ஒரு வெள்ளி தட்டின் கீழ் பாதுகாக்கப்படுகிறது. கடம்பரி அம்மன் இந்த மரத்துடன் தொடர்புடைய தேவியின் ஒரு வடிவம், மற்றும் தேவி பார்வதி அன்பாக கடம்ப வன வாசினி ('கடம்ப காட்டில் வசிக்கும் அவள்') என்று அழைக்கப்படுகிறார். சித்திரை பூரணை நாளில் கடம்ப தோப்பில் இந்திரனுக்கு ஶிவன் தரிசனம் அளிக்கிறார் — கோயிலின் அடிப்படை கதையின் ஆண்டு மறு-நிலைநாட்டல்."
    },

    size_acres: 14,

    festivals_en: [
      "Chittirai Thiruvizha (April-May) — 12-day grand festival culminating in Meenakshi Thirukalyanam (celestial wedding, day 10) and Ther Thiruvizha (chariot festival, day 11); brings millions of devotees",
      "Avani Moolam (Aug-Sep) — celebrates Sundareswarar's 64 divine sports (Thiruvilaiyadal)",
      "Navaratri (Sep-Oct) — nine-night festival for Meenakshi as Devi",
      "Meenakshi Tirukalyanam / Panguni Uthiram — celestial wedding celebrations",
      "Maha Shivaratri (Feb-Mar) — night-long worship of Sundareswarar",
      "Thiruvathira (Dec-Jan) — celebration of Shiva's Ananda Tandavam",
      "Aani Thirumanjanam (Jun-Jul) — sacred abhisheka festival",
      "Karthigai Deepam (Nov-Dec) — festival of lights"
    ],
    festivals_ta: [
      "சித்திரை திருவிழா (ஏப்-மே) — 12-நாள் மகா விழா, மீனாட்சி திருக்கல்யாணத்தில் (தெய்வீக திருமணம், 10-ம் நாள்) உச்சம்; தேர் திருவிழா (11-ம் நாள்); மில்லியன் கணக்கான பக்தர்கள் வருகை",
      "ஆவணி மூலம் (ஆக-செப்) — சுந்தரேஸ்வரரின் 64 திருவிளையாடல்களை கொண்டாடும் விழா",
      "நவராத்திரி (செப்-அக்) — தேவி மீனாட்சிக்கான ஒன்பது-இரவு விழா",
      "மீனாட்சி திருக்கல்யாணம் / பங்குனி உத்திரம் — தெய்வீக திருமண கொண்டாட்டங்கள்",
      "மகா ஶிவராத்திரி (பிப்-மார்) — சுந்தரேஸ்வரரின் இரவு நீள வழிபாடு",
      "திருவாதிரை (டிச-ஜன) — ஶிவனின் ஆனந்த தாண்டவத்தின் கொண்டாட்டம்",
      "ஆனி திருமஞ்சனம் (ஜூன்-ஜூலை) — புனித அபிஷேக விழா",
      "கார்த்திகை தீபம் (நவ-டிச) — விளக்குகளின் விழா"
    ],

    town_ta: "மதுரை",
    coords_verified: true,

    nayanmar_associations: [
      {
        nayanmar: "mangayarkkarasi",
        role: "devotee",
        brief_en: "Mangayarkkarasi Nayanar — Pandya queen who brought Sambandar to Madurai",
        brief_ta: "மங்கையர்க்கரசி நாயனார் — சம்பந்தரை மதுரைக்கு கொண்டு வந்த பாண்டிய மகாராணி",
        story_en: "Mangayarkkarasi, the queen of Ninrasir Nedumara Pandya (who had converted to Jainism), remained a devoted Shaiva. Concerned about Shaivism's decline in the Pandya kingdom, she invited Thirujnana Sambandar and Kulachirai Nayanar to Madurai. Sambandar defeated the 8000 Jain scholars in fierce theological debate, and the Pandya king reconverted to Shaivism. This event, known as the Samana Samharam ('the defeat of the Jains'), reestablished Shaivism as the state religion of the Pandya kingdom. Mangayarkkarasi's devotion and diplomatic acumen saved the tradition — she is honored as one of the 63 Nayanmars for this act of preservation.",
        story_ta: "நின்றசீர் நெடுமார பாண்டியனின் மகாராணியான மங்கையர்க்கரசி (ஜைன மதத்திற்கு மாறியிருந்தார்) தமது ஶைவ பக்தியை பாதுகாத்து வந்தார். பாண்டிய அரசாட்சியில் ஶைவத்தின் வீழ்ச்சி பற்றி கவலைப்பட்டு, திருஞானசம்பந்தரையும் குலச்சிறை நாயனாரையும் மதுரைக்கு அழைத்தார். சம்பந்தர் 8000 ஜைன அறிஞர்களை கடினமான இறையியல் விவாதத்தில் தோற்கடித்தார், பாண்டிய அரசன் மீண்டும் ஶைவ மதத்திற்கு திரும்பினார். சமண சம்ஹாரம் ('ஜைனர்களின் தோல்வி') என்று அறியப்பட்ட இந்த நிகழ்வு, பாண்டிய அரசாட்சியில் ஶைவத்தை மாநில மதமாக மீண்டும் நிலைநாட்டியது. மங்கையர்க்கரசியின் பக்தியும் இராஜதந்திர திறமையும் பாரம்பரியத்தை காப்பாற்றியது — இந்த பாதுகாப்பு செயலுக்காக 63 நாயன்மார்களில் ஒருவராக மதிக்கப்படுகிறார்."
      },
      {
        nayanmar: "ninrasir_nedumara",
        role: "devotee",
        brief_en: "Ninrasir Nedumara Nayanar — Pandya king, father of Koon Pandyan",
        brief_ta: "நின்றசீர் நெடுமார நாயனார் — பாண்டிய அரசன், கூன் பாண்டியனின் தந்தை",
        story_en: "Ninrasir Nedumara Pandya was the Pandya king who initially converted to Jainism under the influence of the Jain monks who had entered the court. When Sambandar defeated the Jain scholars through his mastery of Shaiva Siddhanta, Ninrasir Nedumara returned to Shaivism and became a devoted patron of Madurai Meenakshi Temple. His story parallels other patron-king Nayanmars — royal power directed toward temple preservation and Shaiva restoration. Together with his queen Mangayarkkarasi and the minister Kulachirai Nayanar, he is honored as a Nayanar for this act of religious restoration.",
        story_ta: "நின்றசீர் நெடுமார பாண்டியன் ஆரம்பத்தில் அரசவைக்குள் நுழைந்த ஜைன துறவிகளின் செல்வாக்கின் கீழ் ஜைன மதத்திற்கு மாறிய பாண்டிய அரசன். சம்பந்தர் ஶைவ சித்தாந்த தேர்ச்சி மூலம் ஜைன அறிஞர்களை தோற்கடித்தபோது, நின்றசீர் நெடுமார ஶைவத்திற்கு திரும்பி மதுரை மீனாட்சி கோயிலின் அர்ப்பணிப்புள்ள ஆதரவாளராக ஆனார். அவரது கதை மற்ற ஆதரவாளர்-அரசன் நாயன்மார்களுக்கு இணையானது — கோயில் பாதுகாப்பு மற்றும் ஶைவ மறு-நிலைநாட்டலுக்கு அரச அதிகாரம் திசைப்படுத்தப்பட்டது."
      },
      {
        nayanmar: "murthi_nayanar",
        role: "devotee",
        brief_en: "Murthi Nayanar — sandalwood merchant who ground his elbow for sandal paste",
        brief_ta: "மூர்த்தி நாயனார் — சந்தன பேஸ்டிற்காக தமது முழங்கையை அரைத்த சந்தன வியாபாரி",
        story_en: "Murthi Nayanar was a devoted sandalwood merchant of Madurai whose sole aim was to provide sandal paste for the daily worship of Shiva at the Meenakshi Sundareswarar Temple. When a Jain king (during the earlier period of Jain influence in the Pandya kingdom) blocked the supply of sandalwood, Murthi ground his own elbow on the sandal-grinding stone to produce sandal paste. Impressed by his unwavering devotion, Shiva miraculously ended the Jain influence in the kingdom. Murthi Nayanar became a hereditary king of the Pandya realm through Shiva's blessing.",
        story_ta: "மூர்த்தி நாயனார் மதுரையின் அர்ப்பணிப்புள்ள சந்தன வியாபாரி, மீனாட்சி சுந்தரேஸ்வரர் கோயிலில் ஶிவனின் தினசரி வழிபாட்டிற்கு சந்தன பேஸ்ட் வழங்குவதே அவரது ஒரே நோக்கம். பாண்டிய அரசாட்சியில் ஜைன செல்வாக்கின் முந்தைய காலகட்டத்தில் ஒரு ஜைன அரசன் சந்தன மர விநியோகத்தை தடுத்தபோது, சந்தன பேஸ்ட் தயாரிக்க மூர்த்தி சந்தன-அரைக்கும் கல்லில் தமது சொந்த முழங்கையை அரைத்தார். அவரது நிலையான பக்தியால் ஈர்க்கப்பட்ட ஶிவன், அரசாட்சியில் ஜைன செல்வாக்கை அற்புதமாக முடித்தார். ஶிவனின் அருள் மூலம் மூர்த்தி நாயனார் பாண்டிய நாட்டின் பரம்பரை அரசன் ஆனார்."
      },
      {
        nayanmar: "sambandar",
        role: "pathigam",
        brief_en: "Sambandar's Thiruvaalavai pathigam (3.120)",
        brief_ta: "சம்பந்தரின் திருஆலவாய் பதிகம் (3.120)",
        story_en: "Thirujnana Sambandar composed his 3.120 pathigam on Madurai Meenakshi Sundareswarar (called Thiruvaalavai in Devaram tradition). His visit to Madurai at the invitation of Mangayarkkarasi Nayanar led to the Samana Samharam episode. Sambandar's Devaram compositions on Madurai are among the most celebrated in Tamil Shaiva literature.",
        story_ta: "திருஞானசம்பந்தர் மதுரை மீனாட்சி சுந்தரேஸ்வரர் (தேவார பாரம்பரியத்தில் திருஆலவாய் என்று அழைக்கப்படுகிறார்) மீது தமது 3.120 பதிகத்தை இயற்றினார். மங்கையர்க்கரசி நாயனாரின் அழைப்பில் அவர் மதுரைக்கு பார்வையிட்டது சமண சம்ஹார நிகழ்வுக்கு வழிவகுத்தது. மதுரை மீதான சம்பந்தரின் தேவார இயற்றங்கள் தமிழ் ஶைவ இலக்கியத்தில் மிக கொண்டாடப்பட்டவற்றில் ஒன்று."
      }
    ],

    cross_tradition_en: [
      { tradition: "sri_vaishnava", story: "Chittirai Thiruvizha uniquely weaves together Shaiva and Sri Vaishnava traditions. Alongside Meenakshi's celestial wedding, the festival celebrates Kallazhagar (a form of Vishnu from the nearby Alagar Kovil, 20km away) who travels to Madurai as the brother of Meenakshi to attend her wedding. According to legend, Kallazhagar arrives late and instead enters the Vaigai River rather than the wedding ceremony. This event draws enormous crowds and is one of the largest joint Shaiva-Vaishnava festivals in India, symbolizing the harmony of the two traditions." },
      { tradition: "shakta", story: "The Meenakshi Sundareswarar Temple is one of the 51 Shakti Peethas — the fingernail (kai viral) of Devi Sati is believed to have fallen at this site. Meenakshi Amman is worshipped as the primary deity (larger shrine, ritual precedence), making this one of the few major temples where Devi takes precedence over her consort. The Navaratri festival for Meenakshi as Manthrini Devi is one of the most significant Shakta celebrations in Tamil Nadu." },
      { tradition: "pancha_sabha", story: "The temple contains the Velli Ambalam (Silver Sabha) — one of the five celestial dance halls (Pancha Sabha) where Shiva performs his cosmic dance. The other four are Chidambaram Kanaka Sabha (gold), Thiruvalangadu Ratna Sabha (ruby), Kutralanathar Chitra Sabha (picture), and Thirunelveli Tamra Sabha (copper). Being one of the Pancha Sabha places Madurai in the highest tier of Shaiva ritual geography." },
      { tradition: "kaumara", story: "Immediately south of Madurai lies Thiruparankundram (8 km away), one of the six most sacred abodes of Muruga (Kaumara tradition). The proximity of the two major shrines — Meenakshi in the city center and Subramanya at Thiruparankundram — establishes Madurai as a joint Shaiva-Kaumara pilgrimage geography. Subramanya is Meenakshi's son in Shaiva theology, making the mother-son dyad geographically inseparable." },
      { tradition: "vaidika", story: "The Thiruvilaiyadal Puranam (64 divine sports) composed by Paranjothi Munivar is one of the most extensive Tamil purana narratives in the Shaiva tradition. It represents the localization of Vedic-Puranic narrative in Tamil culture — the divine engaging directly with human concerns through 64 stories, each with theological and ethical lessons. The temple's daily worship follows both Vedic and Agama protocols, connecting Sanskrit and Tamil traditions in single ritual practice." }
    ],
    cross_tradition_ta: [
      { tradition: "sri_vaishnava", story: "சித்திரை திருவிழா ஶைவ மற்றும் ஶ்ரீ வைஷ்ணவ பாரம்பரியங்களை தனித்துவமாக இணைக்கிறது. மீனாட்சியின் தெய்வீக திருமணத்துடன், அருகிலுள்ள அழகர் கோயிலிலிருந்து (20 கி.மீ. தொலைவில்) விஷ்ணுவின் ஒரு வடிவமான கள்ளழகர் மீனாட்சியின் சகோதரராக அவரது திருமணத்தில் கலந்து கொள்ள மதுரைக்கு பயணிக்கிறார் என்று விழா கொண்டாடுகிறது. புராணப்படி, கள்ளழகர் தாமதமாக வந்து திருமண விழாவை விட வைகை நதியில் இறங்குகிறார். இந்த நிகழ்வு பரந்த கூட்டத்தை ஈர்க்கிறது மற்றும் இந்தியாவின் மிக பெரிய கூட்டு ஶைவ-வைஷ்ணவ விழாக்களில் ஒன்றாகும், இரண்டு பாரம்பரியங்களின் ஒற்றுமையை அடையாளப்படுத்துகிறது." },
      { tradition: "shakta", story: "மீனாட்சி சுந்தரேஸ்வரர் திருக்கோயில் 51 சக்தி பீடங்களில் ஒன்று — சதி தேவியின் நகம் (கை விரல்) இந்த தளத்தில் விழுந்ததாக நம்பப்படுகிறது. மீனாட்சி அம்மன் முதன்மை தெய்வமாக (பெரிய ஆலயம், சடங்கு முதன்மை) வழிபடப்படுகிறார், தேவி தமது துணைவரைவிட முதன்மை பெறும் ஒரு சில முக்கிய கோயில்களில் இதுவும் ஒன்று. மந்திரிணி தேவியாக மீனாட்சிக்கான நவராத்திரி விழா தமிழ்நாட்டின் மிக முக்கியமான ஶாக்த கொண்டாட்டங்களில் ஒன்று." },
      { tradition: "pancha_sabha", story: "கோயில் வெள்ளி அம்பலம் (வெள்ளி சபை) கொண்டுள்ளது — ஶிவன் தமது பிரபஞ்ச நடனத்தை நிகழ்த்தும் ஐந்து தெய்வீக நடன சபைகளில் (பஞ்ச சபை) ஒன்று. மற்ற நான்கு: சிதம்பரம் கனக சபை (பொன்), திருவாலங்காடு ரத்ன சபை (மாணிக்கம்), குற்றாலநாதர் சித்திர சபை (படம்), மற்றும் திருநெல்வேலி தாம்ர சபை (செம்பு). பஞ்ச சபையில் ஒன்றாக இருப்பது மதுரையை ஶைவ சடங்கு புவியியலின் மிக உயர் நிலையில் வைக்கிறது." },
      { tradition: "kaumara", story: "மதுரையின் தெற்கே திருப்பரங்குன்றம் (8 கி.மீ. தொலைவில்) அமைந்துள்ளது, முருகனின் ஆறு புனிதமான வாசஸ்தலங்களில் ஒன்று (கௌமார பாரம்பரியம்). நகர மையத்தில் மீனாட்சி மற்றும் திருப்பரங்குன்றத்தில் சுப்ரமணியர் — இரு முக்கிய ஆலயங்களின் அருகாமை மதுரையை கூட்டு ஶைவ-கௌமார யாத்திரை புவியியலாக நிறுவுகிறது. ஶைவ இறையியலில் சுப்ரமணியர் மீனாட்சியின் மகன், தாய்-மகன் ஜோடி புவியியல் ரீதியில் பிரிக்க முடியாதவர்களாக ஆக்குகிறது." },
      { tradition: "vaidika", story: "பரஞ்சோதி முனிவரால் இயற்றப்பட்ட திருவிளையாடல் புராணம் (64 தெய்வீக விளையாட்டுகள்) ஶைவ பாரம்பரியத்தின் மிக விரிவான தமிழ் புராண கதைகளில் ஒன்று. வேத-புராணிக கதைகளின் தமிழ் கலாச்சார உள்ளூர்மயமாக்கலை இது பிரதிநிதித்துவப்படுத்துகிறது — 64 கதைகள் மூலம் மனித கவலைகளுடன் நேரடியாக ஈடுபடும் தெய்வம், ஒவ்வொன்றும் இறையியல் மற்றும் நெறிமுறை பாடங்களுடன். கோயிலின் தினசரி வழிபாடு வேத மற்றும் ஆகம நடைமுறைகள் இரண்டையும் பின்பற்றுகிறது, சமஸ்கிருத மற்றும் தமிழ் பாரம்பரியங்களை ஒரே சடங்கு நடைமுறையில் இணைக்கிறது." }
    ]
  };

  console.log('[Session 1C.5] Madurai Meenakshi (sno 201) enrichment loaded with anchor-level content.');
  console.log('[Session 1C.5] Sthala Purana length: ' + sthalaEn.length + ' chars (English), ' + sthalaTa.length + ' chars (Tamil)');
  console.log('[Session 1C.5] Sthala Vriksha: Kadamba (Neolamarckia cadamba) with founding narrative significance');
  console.log('[Session 1C.5] Nayanmar associations: 4 (Mangayarkkarasi, Ninrasir Nedumara, Murthi, Sambandar)');
  console.log('[Session 1C.5] Cross-tradition links: 5 (Sri Vaishnava, Shakta, Pancha Sabha, Kaumara, Vaidika)');
  console.log('[Session 1C.5] Festivals: 8 (bilingual)');

  setTimeout(function() {
    if (typeof window.showTempleInPanel === 'function') {
      var panel = document.getElementById('detail-panel');
      var contentDiv = document.getElementById('detail-panel-content');
      if (panel && panel.classList.contains('has-content') && contentDiv) {
        var nameEl = contentDiv.querySelector('.dp-name');
        if (nameEl && nameEl.textContent.indexOf('#201') !== -1) {
          window.showTempleInPanel(201);
          console.log('[Session 1C.5] Re-rendered current Madurai Meenakshi panel with new content');
        }
      }
    }
  }, 500);
})();

/* ============================================================ */
/* SESSION_1C5A_LOADED — Naalvar override mechanism + fixes     */
/* ============================================================ */
(function(){
  window.SESSION_1C5A_LOADED = true;
  console.log('[Session 1C.5a] Loading Naalvar override mechanism + Madurai/Rameswaram fixes...');

  if (!window.TEMPLE_ENRICHMENT) window.TEMPLE_ENRICHMENT = {};

  // ============================================================
  // Add naalvar_present array to enrichments for temples where
  // the base saints field is incomplete. Format: 
  // naalvar_present: ["sambandar", "appar", "sundarar", "manickavasakar"]
  // Only include the Naalvar who actually sang/celebrated the temple.
  // ============================================================

  // Chidambaram - all 4 Naalvar
  // (Manickavasakar attained moksha here - direct connection)
  if (!window.TEMPLE_ENRICHMENT[3]) window.TEMPLE_ENRICHMENT[3] = {};
  window.TEMPLE_ENRICHMENT[3].naalvar_present = ["sambandar", "appar", "sundarar", "manickavasakar"];

  // Rameswaram - 3 Naalvar (Sambandar 3.111, Appar 5.83, Sundarar 7.79)
  // Manickavasakar did not sing Rameswaram
  if (!window.TEMPLE_ENRICHMENT[205]) window.TEMPLE_ENRICHMENT[205] = {};
  window.TEMPLE_ENRICHMENT[205].naalvar_present = ["sambandar", "appar", "sundarar"];

  // Madurai Meenakshi Sundareswarar - all 4 Naalvar
  // Sambandar 3.120, Appar 5.83 (Thiruvaalavai), Sundarar (7.72 Thiruthondar Thogai references Nayanmars of Madurai),
  // Manickavasakar (chief minister to Pandya king, life connected to Madurai; Thiruvasagam compositions)
  if (!window.TEMPLE_ENRICHMENT[201]) window.TEMPLE_ENRICHMENT[201] = {};
  window.TEMPLE_ENRICHMENT[201].naalvar_present = ["sambandar", "appar", "sundarar", "manickavasakar"];

  console.log('[Session 1C.5a] Naalvar overrides set:');
  console.log('  Chidambaram (3): 4 of 4');
  console.log('  Rameswaram (205): 3 of 4');
  console.log('  Madurai Meenakshi (201): 4 of 4');

  // ============================================================
  // Override the badge fix logic to use naalvar_present array
  // when available; fall back to saints string detection.
  // ============================================================
  
  // Re-hook showTempleInPanel to run the corrected badge logic
  var priorShowTempleInPanel = window.showTempleInPanel;
  
  window.showTempleInPanel = function(sno) {
    if (typeof priorShowTempleInPanel === 'function') {
      priorShowTempleInPanel(sno);
    }
    setTimeout(function() {
      correctNaalvarBadge(sno);
    }, 200);
  };

  function correctNaalvarBadge(sno) {
    var temple = window.TEMPLES && window.TEMPLES.find(function(t) { return t.sno === sno; });
    if (!temple) return;
    var enrich = window.TEMPLE_ENRICHMENT[sno];
    var lang = localStorage.getItem('pps-lang') || 'en';
    var count = 0;

    // First priority: check naalvar_present override in enrichment
    if (enrich && enrich.naalvar_present && Array.isArray(enrich.naalvar_present)) {
      count = enrich.naalvar_present.length;
    } else {
      // Fallback: detect from saints string
      var saintsStr = (temple.saints || '').toLowerCase();
      if (/sambandar/.test(saintsStr)) count++;
      if (/appar/.test(saintsStr)) count++;
      if (/sundarar/.test(saintsStr)) count++;
      if (/manickavas|manikkavasagar|manickavasakar/.test(saintsStr)) count++;
    }

    if (count === 0) return;

    var panel = document.getElementById('detail-panel-content');
    if (!panel) return;

    var label;
    if (lang === 'ta') {
      if (count === 4) label = '🙏 4 / 4 நாலவர்';
      else if (count === 3) label = '🙏 3 / 4 நாலவர்';
      else if (count === 2) label = '🙏 2 / 4 நாலவர்';
      else if (count === 1) label = '🙏 1 / 4 நாலவர்';
    } else {
      if (count === 4) label = '🙏 4 of 4 Naalvar';
      else if (count === 3) label = '🙏 3 of 4 Naalvar';
      else if (count === 2) label = '🙏 2 of 4 Naalvar';
      else if (count === 1) label = '🙏 1 of 4 Naalvar';
    }

    // Find the Naalvar badge in the panel header
    var badges = panel.querySelectorAll('.dp-badge');
    var naalvarBadge = null;
    for (var i = 0; i < badges.length; i++) {
      var t = badges[i].textContent;
      if (/Naalvar/i.test(t) || /நாலவர்/.test(t) || /Naalva/i.test(t)) {
        naalvarBadge = badges[i];
        break;
      }
    }

    if (naalvarBadge) {
      naalvarBadge.textContent = label;
    } else {
      // Insert new badge
      var badgesContainer = panel.querySelector('.dp-badges');
      if (badgesContainer) {
        var newBadge = document.createElement('span');
        newBadge.className = 'dp-badge';
        newBadge.textContent = label;
        badgesContainer.insertBefore(newBadge, badgesContainer.firstChild);
      }
    }

    console.log('[Session 1C.5a] Corrected Naalvar badge: ' + label + ' (source: ' + (enrich && enrich.naalvar_present ? 'override' : 'saints field') + ')');
  }

  // Watch language toggle to re-apply
  function watchLangToggle() {
    var toggleBtn = document.querySelector('.lang-toggle, [class*="lang-toggle"]');
    if (!toggleBtn) {
      setTimeout(watchLangToggle, 500);
      return;
    }
    toggleBtn.addEventListener('click', function() {
      setTimeout(function() {
        var panel = document.getElementById('detail-panel');
        var contentDiv = document.getElementById('detail-panel-content');
        if (!panel || !contentDiv || !panel.classList.contains('has-content')) return;
        var nameEl = contentDiv.querySelector('.dp-name');
        if (!nameEl) return;
        var match = nameEl.textContent.match(/#(\d+)/);
        if (!match) return;
        var sno = parseInt(match[1]);
        if (sno) correctNaalvarBadge(sno);
      }, 600);
    });
  }

  function init() {
    watchLangToggle();

    // If a temple is currently showing in the panel, re-run the badge fix
    var panel = document.getElementById('detail-panel');
    var contentDiv = document.getElementById('detail-panel-content');
    if (panel && panel.classList.contains('has-content') && contentDiv) {
      var nameEl = contentDiv.querySelector('.dp-name');
      if (nameEl) {
        var match = nameEl.textContent.match(/#(\d+)/);
        if (match) {
          var sno = parseInt(match[1]);
          correctNaalvarBadge(sno);
        }
      }
    }

    console.log('[Session 1C.5a] Naalvar override mechanism active.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { setTimeout(init, 2800); });
  } else {
    setTimeout(init, 2800);
  }
})();

/* ============================================================ */
/* SESSION_1C6_LOADED — Thiruvarur Thyagaraja Anchor Content    */
/* ============================================================ */
(function(){
  window.SESSION_1C6_LOADED = true;
  console.log('[Session 1C.6] Loading Thiruvarur Thyagarajaswamy anchor-level content...');

  if (!window.TEMPLE_ENRICHMENT) window.TEMPLE_ENRICHMENT = {};

  var sthalaEn = "The Thyagarajaswamy Temple at Thiruvarur (historically Arur) is one of the theologically most significant and architecturally largest Shiva temples in India — a 30-acre complex on the southern bank of the Kaveri River in Tamil Nadu's Thiruvarur district. Uniquely, the temple houses TWO Mulavars (principal deities) worshipped side by side: Vanmikanathar (the ancient Swayambhu Shivalingam that emerged from a valmika, an anthill) and Thyagarajaswamy in the Somaskanda form (Shiva with Uma and Skanda). The two-deity configuration is philosophically profound: Vanmikanathar represents Shiva's formless nirguna aspect (the manifested-from-anthill Lingam), while Thyagarajaswamy represents Shiva's saguna form as the compassionate divine family. Together they make Thiruvarur the theological heart of Saptha Vidanga Sthalam tradition — the temple is the FIRST and FOREMOST of the seven Sapta Vidanga temples where the Vidanga Lingams (uncrafted, self-manifested icons) reside.\n\nThe primary sthala purana centers on Muchukunda Chakravarti's boon from Indra. Muchukunda, a great Chola king and devoted Shiva bhakta, once traveled to Indraloka at Indra's request to help him defeat the demon Vaalasuran. Grateful for Muchukunda's valor, Indra offered him any boon. Muchukunda requested the emerald Vidanga Lingam (Thyagaraja idol) that Indra had been worshipping. Indra, unwilling to part with the original, created six replicas and placed all seven before the king. Through pure devotion, Muchukunda recognized the true Lingam. Impressed by his spiritual insight, Indra granted all seven — each representing a unique cosmic dance of Shiva. Muchukunda placed the seven Vidanga Lingams at seven sites, establishing what became known as the Sapta Vidanga Sthalams. Thiruvarur received the foremost — the Veedhi Vidangar, associated with Ajapa Natanam (dance without chanting, performed on Vishnu's chest). The six others: Thirunallaru (Nagara Natanam), Nagapattinam (Ananda Natanam), Thirukkaravasal (Kukkuta Natanam), Thirukolili (Bhringa Natanam), Vedaranyam (Hamsa Natanam), and Thirukkuvalai (Paramananda Natanam) — each with its own Vidanga Lingam and unique dance form.\n\nThe second sthala purana centers on Sundarar's birth and early life at Thiruvarur. Nambi Aroorar (later renamed Sundarar or Sundaramoorthy Nayanar by Shiva himself) was born to Sadaiya Nayanar and Isainaniyaar of Thirunavalur, but Thiruvarur was central to his life. He was raised by the Chola prince Narasinga Munaiyaraiyar and later married Paravayaar of Thiruvarur. The Thyagaraja Temple was Sundarar's spiritual home — Shiva called him 'Pittha' (madman) and initiated him at Thiruvennainallur, but Thiruvarur was where Sundarar returned repeatedly. His marriage to Paravayaar at Thiruvarur and later Sangili Nachiyar at Thiruvorriyur created the famous Sundarar-Cheraman Perumal-Rama parallels celebrated in Periya Puranam. Because of this deep connection, Thiruvarur is where Sundarar wrote his THIRUTHONDAR THOGAI — the 10-verse hymn listing all 63 Nayanmars — the foundational text on which Sekkizhar's Periya Puranam is based. This makes Thiruvarur the LITERARY BIRTHPLACE OF THE NAYANMAR CANON — the site where the concept of the 63 Nayanmars was first articulated as a coherent tradition.\n\nThe third sthala purana centers on the temple's exceptional Shakti Peetha status. The consort deity Kamalambika (also Kamalambal) is worshipped in a separate shrine within the complex. Kamalambika is regarded as one of the 51 Shakti Peethas of Devi, and her shrine at Thiruvarur is one of the most important Shakta and Tantric centers in Tamil Nadu. Kamalambika is considered a Manthrini form of Devi — the divine minister of Sri Devi in the Sri Chakra tradition. Legend holds that Parvati as Kamalambika wished to marry Shiva as Thyagarajaswamy, but her wish remained unfulfilled — establishing the unusual configuration where the goddess and god are worshipped in separate shrines rather than as consort-couple. The Kamalambika shrine is one of the very few in India where Sri Vidya Tantra worship is practiced continuously, with the goddess seated on a lotus (padmasana) with her navel opening representing the cosmos.\n\nThe fourth theological layer establishes Thiruvarur as the Mooladhara Sthalam — the site representing the Mooladhara Chakra (root chakra) among the seven chakras corresponding to different Shiva temples in Tamil Nadu. This makes Thiruvarur the foundational chakra of Tamil Shaiva sacred geography. Additionally, the temple's Kamalalayam Tank (Lotus Abode) is one of the largest temple tanks in India, covering approximately 25 acres — sometimes described as larger than the entire temple complex of many other temples. The tank is central to the Aazhi Ther Utsavam procession and is said to have healing properties.\n\nThe fifth layer describes the temple's architectural grandeur. The complex spans 30 acres (some sources say 33 acres) with NINE gopurams (gateway towers), the tallest being the eastern gopuram at 118 feet with 9 tiers. Inside, the temple houses 365 Shivalingams (one for each day of the year), 86 Vinayaka idols, 70+ subsidiary shrines, 13 mandapams (pillared halls), and 12 perimeter walls (prakarams). The temple complex is designed in the form of the Sri Chakra — the innermost enclosure represents the bindu (center point) and outer enclosures represent successive avaranas (layers). The Nandi is unique — standing on all four legs, unlike most temples where Nandi is seated. The temple's Aazhi Ther (Rath) is the LARGEST TEMPLE CHARIOT IN ASIA — 96 feet tall, weighing over 300 tons, requiring thousands of devotees to pull. The Panguni Utthiram Chariot Festival featuring Aazhi Ther draws hundreds of thousands of pilgrims annually.\n\nThe present stone temple was built during Chola dynasty in the 9th century, though earlier brick structures existed. Major expansions occurred under Rajendra Chola I (1012-1044 CE) who added gold plating and endowments; Kulothunga Chola II (1133-1150 CE) added structural elements and festivals; and the Vijayanagara and Nayak dynasties (14th-17th centuries) added additional shrines. The temple has been continuously worshipped for over 2000 years.\n\nAll FOUR NAALVAR sing Thiruvarur: Sambandar (2.104 pathigam Vazhipadu Thirukoyilur), Appar (4.20 pathigam), Sundarar (7.51 pathigam — as Sundarar's spiritual home), and Manickavasakar (Thirukovaiyar references). Additionally, Sundarar's parents Sadaiya Nayanar and Isainaniyaar are among the 63 Nayanmars, as are Muruga Nayanar (Puhaloor), Dandi Adigal Nayanar (blind Thiruvarur devotee), Meiporul Nayanar, and many others born or associated with Thiruvarur. This makes Thiruvarur the birthplace of MORE NAYANMARS than any other single temple town in Tamil Nadu, cementing its status as the theological, ritual, and literary heart of Tamil Shaiva tradition.";

  var sthalaTa = "தமிழ்நாட்டின் திருவாரூர் மாவட்டத்தில், காவேரி நதியின் தென் கரையில் அமைந்துள்ள திருவாரூர் தியாகராஜஸ்வாமி திருக்கோயில் (பழம் பெயர் ஆரூர்) இந்தியாவின் மிக இறையியல் ரீதியில் முக்கியமான மற்றும் கட்டிடக்கலை ரீதியில் மிக பெரிய ஶிவ கோயில்களில் ஒன்று — 30 ஏக்கர் பரப்பளவில் விரிந்துள்ள வளாகம். தனித்துவமாக, கோயில் இரண்டு மூலவர்களை (முதன்மை தெய்வங்கள்) இணைந்து வழிபடுகிறது: வான்மீகநாதர் (புற்றிலிருந்து — வால்மீகம் — உருவான பழம் சுயம்பு ஶிவலிங்கம்) மற்றும் சோமஸ்கந்த வடிவில் தியாகராஜஸ்வாமி (உமையுடன் மற்றும் ஸ்கந்தனுடன் ஶிவன்). இரண்டு-தெய்வ அமைப்பு தத்துவ ரீதியில் ஆழமானது: வான்மீகநாதர் ஶிவனின் வடிவமற்ற நிர்குண அம்சத்தை (புற்றிலிருந்து வெளிப்பட்ட லிங்கம்) பிரதிநிதித்துவப்படுத்துகிறார், தியாகராஜஸ்வாமி ஶிவனின் சகுண வடிவமான கருணையுள்ள தெய்வீக குடும்பமாக பிரதிநிதித்துவப்படுத்துகிறார். இணைந்து, இவர்கள் திருவாரூரை சப்த விடங்க ஸ்தலம் பாரம்பரியத்தின் இறையியல் இதயமாக ஆக்குகிறார்கள் — கோயில் ஏழு சப்த விடங்க கோயில்களில் முதல் மற்றும் முதன்மையானது, விடங்க லிங்கங்கள் (செதுக்கப்படாத, தன்னால் தோன்றிய திருவுருவங்கள்) வசிக்கும் இடம்.\n\nமூல ஸ்தல புராணம் இந்திரனிடமிருந்து முசுகுந்த சக்ரவர்த்தி பெற்ற வரத்தை மையமாக்கியது. முசுகுந்தன், ஒரு பெரிய சோழ மன்னன் மற்றும் அர்ப்பணிப்புள்ள ஶிவ பக்தன், வாலசுரன் என்ற அசுரனை தோற்கடிக்க உதவ இந்திரனின் வேண்டுகோளின்படி இந்திரலோகத்திற்கு ஒருமுறை பயணித்தார். முசுகுந்தனின் வீரத்திற்கு நன்றியுடன், இந்திரன் அவருக்கு எந்த வரமும் அளித்தார். இந்திரன் வழிபட்டு வந்த மரகத விடங்க லிங்கத்தை (தியாகராஜ திருவுரு) முசுகுந்தன் கேட்டார். அசலைப் பிரிக்க விரும்பாத இந்திரன், ஆறு நகல்களை உருவாக்கி மன்னன் முன் ஏழையும் வைத்தார். தூய பக்தி மூலம், முசுகுந்தன் உண்மையான லிங்கத்தை அடையாளம் கண்டார். அவரது ஆன்மிக பார்வையால் ஈர்க்கப்பட்ட இந்திரன், ஏழையும் அளித்தார் — ஒவ்வொன்றும் ஶிவனின் தனித்துவமான பிரபஞ்ச நடனத்தை பிரதிநிதித்துவப்படுத்துகிறது. முசுகுந்தன் ஏழு விடங்க லிங்கங்களை ஏழு தளங்களில் வைத்தார், இது சப்த விடங்க ஸ்தலங்கள் என்று அறியப்பட்டது. திருவாரூர் முதன்மையானதைப் பெற்றது — வீதி விடங்கர், அஜப நடனத்துடன் (சொல்லாத நடனம், விஷ்ணுவின் மார்பில் நிகழ்த்தப்பட்டது) தொடர்புடையது. மற்ற ஆறு: திருநள்ளாறு (நகர நடனம்), நாகப்பட்டினம் (ஆனந்த நடனம்), திருக்கரவாசல் (குக்குட நடனம்), திருக்கோலிலி (பிருங்க நடனம்), வேதாரண்யம் (ஹம்ச நடனம்), மற்றும் திருக்குவளை (பரமானந்த நடனம்) — ஒவ்வொன்றும் தமது சொந்த விடங்க லிங்கம் மற்றும் தனித்துவமான நடன வடிவத்துடன்.\n\nஇரண்டாம் ஸ்தல புராணம் திருவாரூரில் சுந்தரரின் பிறப்பு மற்றும் ஆரம்ப வாழ்க்கையை மையமாக்கியது. நம்பி ஆரூரர் (பின்னர் ஶிவனாலேயே சுந்தரர் அல்லது சுந்தரமூர்த்தி நாயனார் என்று பெயர் மாற்றப்பட்டவர்) திருநாவலூரின் சடைய நாயனாருக்கும் இசைஞானியாருக்கும் பிறந்தார், ஆனால் திருவாரூர் அவரது வாழ்க்கையின் மையமாக இருந்தது. அவர் சோழ இளவரசர் நரசிங்க முனையரையரால் வளர்க்கப்பட்டு பின்னர் திருவாரூரின் பரவையார் என்பவரை மணந்தார். தியாகராஜ திருக்கோயில் சுந்தரரின் ஆன்மிக இல்லமாக இருந்தது — ஶிவன் அவரை 'பித்தன்' (பைத்தியம்) என்று அழைத்து திருவெண்ணைநல்லூரில் தீக்ஷை அளித்தார், ஆனால் திருவாரூர் சுந்தரர் மீண்டும் மீண்டும் திரும்பிய இடமாக இருந்தது. திருவாரூரில் பரவையாருடனான அவரது திருமணம் மற்றும் பின்னர் திருவொற்றியூரில் சங்கிலி நாச்சியாருடன் திருமணம் பெரிய புராணத்தில் கொண்டாடப்பட்ட புகழ்பெற்ற சுந்தரர்-சேரமான் பெருமாள்-ராம இணைகளை உருவாக்கியது. இந்த ஆழமான இணைப்பு காரணமாக, திருவாரூர் சுந்தரர் தமது திருத்தொண்டர் தொகை என்ற 63 நாயன்மார்கள் அனைவரையும் பட்டியலிடும் 10-பாசுர பாடலை எழுதிய இடம் — சேக்கிழாரின் பெரிய புராணத்தின் அடிப்படை நூல். இது திருவாரூரை நாயன்மார் விதிமுறையின் இலக்கிய பிறப்பிடமாக ஆக்குகிறது — 63 நாயன்மார்களின் கருத்து ஒரு ஒத்திசைவான பாரம்பரியமாக முதன்முதலில் வெளிப்படுத்தப்பட்ட இடம்.\n\nமூன்றாம் ஸ்தல புராணம் கோயிலின் அசாதாரண சக்தி பீட நிலையை மையமாக்கியது. துணைத் தேவி கமலாம்பிகை (கமலாம்பாள் என்றும்) வளாகத்திற்குள் ஒரு தனி ஆலயத்தில் வழிபடப்படுகிறார். கமலாம்பிகை தேவியின் 51 சக்தி பீடங்களில் ஒருவராகக் கருதப்படுகிறார், திருவாரூரில் அவரது ஆலயம் தமிழ்நாட்டின் மிக முக்கியமான ஶாக்த மற்றும் தாந்திரிக மையங்களில் ஒன்று. கமலாம்பிகை தேவியின் மந்திரிணி வடிவமாக கருதப்படுகிறார் — ஶ்ரீ சக்கர பாரம்பரியத்தில் ஶ்ரீ தேவியின் தெய்வீக மந்திரி. பார்வதி கமலாம்பிகையாக தியாகராஜஸ்வாமியை மணக்க விரும்பினார், ஆனால் அவரது விருப்பம் நிறைவேறவில்லை என்று புராணம் கூறுகிறது — இது தேவியும் தெய்வமும் துணை-ஜோடியாக இல்லாமல் தனித்தனி ஆலயங்களில் வழிபடப்படும் அசாதாரண அமைப்பை நிறுவுகிறது.\n\nநான்காம் இறையியல் அடுக்கு திருவாரூரை மூலாதார ஸ்தலமாக நிறுவுகிறது — தமிழ்நாட்டின் வெவ்வேறு ஶிவ கோயில்களுக்கு தொடர்புடைய ஏழு சக்கரங்களுள் மூலாதார சக்கரத்தை (மூல சக்கரம்) பிரதிநிதித்துவப்படுத்தும் தளம். இது திருவாரூரை தமிழ் ஶைவ புனித புவியியலின் அடிப்படை சக்கரமாக ஆக்குகிறது. கூடுதலாக, கோயிலின் கமலாலயம் குளம் (தாமரை வாசஸ்தலம்) இந்தியாவின் மிக பெரிய கோயில் குளங்களில் ஒன்று, சுமார் 25 ஏக்கர் பரப்பளவில். ஆழி தேர் உற்சவம் ஊர்வலத்தில் குளம் மையமாக உள்ளது மற்றும் நோய் தீர்க்கும் பண்புகள் கொண்டதாக கூறப்படுகிறது.\n\nஐந்தாம் அடுக்கு கோயிலின் கட்டிடக்கலை மகிமையை விவரிக்கிறது. வளாகம் 30 ஏக்கர் (சில ஆதாரங்கள் 33 ஏக்கர்) பரப்பளவில் ஒன்பது கோபுரங்களுடன் உள்ளது, மிக உயரமானது 118 அடி உயரம் கொண்ட கிழக்கு கோபுரம் 9 அடுக்குகளுடன். உள்ளே, கோயில் 365 ஶிவலிங்கங்களை (ஆண்டின் ஒவ்வொரு நாளுக்கும் ஒன்று), 86 விநாயகர் திருவுருக்களை, 70+ துணை ஆலயங்களை, 13 மண்டபங்களை, மற்றும் 12 சுற்று சுவர்களை (பிராகாரங்கள்) வைத்திருக்கிறது. கோயில் வளாகம் ஶ்ரீ சக்கர வடிவில் வடிவமைக்கப்பட்டுள்ளது — உள் சுற்று பிந்துவை (மைய புள்ளி) பிரதிநிதித்துவப்படுத்துகிறது மற்றும் வெளிப்புற சுற்றுகள் தொடர்ச்சியான ஆவரணங்களை (அடுக்குகள்) பிரதிநிதித்துவப்படுத்துகின்றன. நந்தி தனித்துவமானது — நான்கு கால்களிலும் நிற்கிறார், பெரும்பாலான கோயில்களில் நந்தி அமர்ந்திருக்கும் வழக்கத்திற்கு மாறாக. கோயிலின் ஆழி தேர் (ரத்) ஆசியாவின் மிக பெரிய கோயில் தேர் — 96 அடி உயரம், 300 டன்களுக்கும் அதிக எடை, ஆயிரக்கணக்கான பக்தர்கள் இழுக்க தேவைப்படுகிறது. பங்குனி உத்திரம் தேர் விழா, ஆழி தேர் கொண்ட, ஆண்டுதோறும் நூறாயிரக்கணக்கான யாத்திரிகர்களை ஈர்க்கிறது.\n\nதற்போதைய கல் கோயில் 9-ம் நூற்றாண்டில் சோழர் காலத்தில் கட்டப்பட்டது, முந்தைய செங்கல் கட்டமைப்புகள் இருந்தபோதிலும். பெரிய விரிவாக்கங்கள் இராஜேந்திர சோழர் I (1012-1044 CE) கீழ் நடைபெற்றன, அவர் தங்க முலாம் மற்றும் ஆசாரம் சேர்த்தார்; குலோத்துங்க சோழர் II (1133-1150 CE) கட்டமைப்பு உறுப்புகள் மற்றும் விழாக்களை சேர்த்தார்; மற்றும் விஜயநகர மற்றும் நாயக்கர் வம்சங்கள் (14-17 நூற்றாண்டுகள்) கூடுதல் ஆலயங்களை சேர்த்தனர். கோயில் 2000 வருடங்களுக்கும் மேலாக தொடர்ச்சியாக வழிபடப்பட்டு வருகிறது.\n\nநான்கு நாலாவரும் திருவாரூரைப் பாடினர்: சம்பந்தர் (2.104 வழிபாடு திருக்கோயிலூர் பதிகம்), அப்பர் (4.20 பதிகம்), சுந்தரர் (7.51 பதிகம் — சுந்தரரின் ஆன்மிக இல்லமாக), மற்றும் மாணிக்கவாசகர் (திருக்கோவையார் குறிப்புகள்). கூடுதலாக, சுந்தரரின் பெற்றோர் சடைய நாயனார் மற்றும் இசைஞானியார் 63 நாயன்மார்களில் அடங்குகிறார்கள், முருக நாயனார் (புகலூர்), தண்டி அடிகள் நாயனார் (குருட்டு திருவாரூர் பக்தர்), மெய்ப்பொருள் நாயனார், மற்றும் திருவாரூரில் பிறந்த அல்லது தொடர்புடைய பலரும் அடங்குகிறார்கள். இது திருவாரூரை தமிழ்நாட்டின் எந்த ஒற்றை கோயில் நகரத்தை விட அதிக நாயன்மார்களின் பிறப்பிடமாக ஆக்குகிறது, தமிழ் ஶைவ பாரம்பரியத்தின் இறையியல், சடங்கு, மற்றும் இலக்கிய இதயமாக அதன் நிலையை உறுதிப்படுத்துகிறது.";

  window.TEMPLE_ENRICHMENT[130] = {
    sthala_purana_en: sthalaEn,
    sthala_purana_ta: sthalaTa,

    goddess_en: "Neelotpalambika (Kondi Amman) — the presiding consort; also Kamalambika (separate shrine, one of 51 Shakti Peethas, center of Sri Vidya Tantra)",
    goddess_ta: "நீலோற்பலாம்பிகை (கொண்டி அம்மன்) — முதன்மை துணை தேவி; மேலும் கமலாம்பிகை (தனி ஆலயம், 51 சக்தி பீடங்களில் ஒன்று, ஶ்ரீ வித்யா தந்திர மையம்)",

    pushkarini_en: "Kamalalayam Tank (Lotus Abode) — one of the largest temple tanks in India at ~25 acres; central to Aazhi Ther procession and traditional healing properties",
    pushkarini_ta: "கமலாலயம் குளம் (தாமரை வாசஸ்தலம்) — இந்தியாவின் மிக பெரிய கோயில் குளங்களில் ஒன்று, சுமார் 25 ஏக்கர்; ஆழி தேர் ஊர்வலத்தின் மையம் மற்றும் பாரம்பரிய நோய் தீர்க்கும் பண்புகள்",

    sthala_vriksha: {
      common_name_en: "Padri (Trumpet Flower Tree)",
      common_name_ta: "பாதிரி",
      scientific_name: "Stereospermum chelonoides",
      description_en: "The Padri tree (Stereospermum chelonoides), known in English as the Trumpet Flower Tree, is a large deciduous tree native to India and Southeast Asia. It grows up to 25 meters tall with a straight trunk and spreading crown. Its distinctive purplish-pink or white trumpet-shaped flowers bloom in large panicles during summer, followed by long slender fruit pods. The wood is prized for its strength and durability, traditionally used in temple construction. The tree is well-adapted to the Kaveri delta environment.",
      description_ta: "பாதிரி மரம் (Stereospermum chelonoides), ஆங்கிலத்தில் 'ட்ரம்ப்பெட் ஃப்ளவர் ட்ரீ' என்று அழைக்கப்படுவது, இந்தியா மற்றும் தென்கிழக்கு ஆசியாவின் ஒரு பெரிய இலையுதிர் மரம். 25 மீட்டர் உயரம் வரை வளர்ந்து, நேரான தண்டு மற்றும் விரிந்த மகுடம் கொண்டது. கோடையில் வெளிவரும் தனித்துவமான ஊதா-இளஞ்சிவப்பு அல்லது வெள்ளை எக்காளம் வடிவ பூக்கள் பெரிய கொத்துகளில் மலரும், அதைத் தொடர்ந்து நீண்ட ஒல்லியான பழம் தோலி வெளிப்படும். மரம் அதன் வலிமை மற்றும் ஆற்றுகைக்கு பாராட்டப்படுகிறது, பாரம்பரியமாக கோயில் கட்டுமானத்தில் பயன்படுத்தப்படுகிறது. மரம் காவேரி டெல்டா சூழலுக்கு நன்கு தழுவியிருக்கிறது.",
      significance_en: "The Padri tree at Thiruvarur Thyagaraja Temple is theologically significant as it is one of the trees associated with the Ashta Dikpalakas (the eight guardians of directions). The Padri flower is offered to Thyagarajaswami in ritual worship. In Tamil Shaiva tradition, the Padri tree is called 'Vriksha' — meaning tree — and its association with Thiruvarur's Thyagarajaswami temple establishes it as the Sthala Vriksha for the Sapta Vidanga tradition. The wood was traditionally used in constructing the temple's massive Aazhi Ther chariot (300+ tons), and portions of the ancient Padri tree are preserved in the temple. The Padri tree flourishes across the Kaveri delta and connects Thiruvarur to the broader Sapta Vidanga sacred geography — many of the other six Sapta Vidanga temples also feature the Padri as their Sthala Vriksha.",
      significance_ta: "திருவாரூர் தியாகராஜ கோயிலில் பாதிரி மரம் இறையியல் ரீதியில் முக்கியமானது, இது அஷ்ட திக்பாலகர்களுடன் (திசைகளின் எட்டு காவலர்கள்) தொடர்புடைய மரங்களில் ஒன்று. பாதிரி பூ சடங்கு வழிபாட்டில் தியாகராஜஸ்வாமியிலிருந்து அர்ப்பணிக்கப்படுகிறது. தமிழ் ஶைவ பாரம்பரியத்தில், பாதிரி மரம் 'விருக்ஷம்' — மரம் — என்று அழைக்கப்படுகிறது, மற்றும் திருவாரூரின் தியாகராஜஸ்வாமி கோயிலுடன் அதன் தொடர்பு இதை சப்த விடங்க பாரம்பரியத்திற்கான ஸ்தல விருக்ஷமாக நிறுவுகிறது. மரம் பாரம்பரியமாக கோயிலின் பெரிய ஆழி தேர் தேரை (300+ டன்) கட்ட பயன்படுத்தப்பட்டது, மற்றும் பழம் பாதிரி மரத்தின் பகுதிகள் கோயிலில் பாதுகாக்கப்படுகின்றன. பாதிரி மரம் காவேரி டெல்டா முழுவதும் செழிப்பாக வளர்கிறது மற்றும் திருவாரூரை பரந்த சப்த விடங்க புனித புவியியலுடன் இணைக்கிறது — மற்ற ஆறு சப்த விடங்க கோயில்களில் பலவும் தமது ஸ்தல விருக்ஷமாக பாதிரியை வைத்திருக்கின்றன."
    },

    size_acres: 30,

    festivals_en: [
      "Panguni Uttiram Aazhi Ther Festival (March-April) — 25+ day festival featuring Asia's largest temple chariot (96ft tall, 300 tons); hundreds of thousands of pilgrims",
      "Chariot Festival (Ther Utsavam) — annual grand procession; second largest festival at the temple",
      "Maha Shivaratri (Feb-Mar) — main night-worship festival",
      "Arudra Darshan / Margazhi Thiruvadhirai (Dec-Jan) — commemorating Shiva's cosmic dance",
      "Navaratri (Sep-Oct) — nine-night festival for Kamalambika Devi",
      "Aani Thirumanjanam (Jun-Jul) — sacred abhisheka festival",
      "Karthigai Deepam (Nov-Dec) — festival of lights",
      "Vinayaka Chaturthi (Aug-Sep) — for the temple's 86 Ganesha shrines",
      "Muchukunda Utsavam (during Chariot Festival) — commemorating the founding narrative"
    ],
    festivals_ta: [
      "பங்குனி உத்திரம் ஆழி தேர் விழா (மார்ச்-ஏப்) — 25+ நாள் விழா, ஆசியாவின் மிக பெரிய கோயில் தேர் (96 அடி உயரம், 300 டன்); நூறாயிரக்கணக்கான யாத்திரிகர்கள்",
      "தேர் விழா (தேர் உற்சவம்) — ஆண்டு பெரிய ஊர்வலம்; கோயிலின் இரண்டாவது பெரிய விழா",
      "மகா ஶிவராத்திரி (பிப்-மார்) — முதன்மை இரவு-வழிபாடு விழா",
      "ஆருத்ரா தரிசனம் / மார்கழி திருவாதிரை (டிச-ஜன) — ஶிவனின் பிரபஞ்ச நடனத்தை நினைவூட்டுதல்",
      "நவராத்திரி (செப்-அக்) — கமலாம்பிகை தேவிக்கான ஒன்பது-இரவு விழா",
      "ஆனி திருமஞ்சனம் (ஜூன்-ஜூலை) — புனித அபிஷேக விழா",
      "கார்த்திகை தீபம் (நவ-டிச) — விளக்குகளின் விழா",
      "விநாயக சதுர்த்தி (ஆக-செப்) — கோயிலின் 86 விநாயக ஆலயங்களுக்கு",
      "முசுகுந்த உற்சவம் (தேர் விழாவின் போது) — அடிப்படை கதையை நினைவூட்டுதல்"
    ],

    town_ta: "திருவாரூர்",
    coords_verified: true,

    // Include all 4 Naalvar override
    naalvar_present: ["sambandar", "appar", "sundarar", "manickavasakar"],

    nayanmar_associations: [
      {
        nayanmar: "sundarar",
        role: "birthplace",
        brief_en: "Sundarar's spiritual home and birthplace of Thiruthondar Thogai",
        brief_ta: "சுந்தரரின் ஆன்மிக இல்லம் மற்றும் திருத்தொண்டர் தொகையின் பிறப்பிடம்",
        story_en: "Nambi Aroorar (later renamed Sundarar or Sundaramoorthy Nayanar by Shiva himself) was raised at Thiruvarur by the Chola prince Narasinga Munaiyaraiyar and married Paravayaar of Thiruvarur. The Thyagaraja Temple was Sundarar's spiritual home throughout his life. Most significantly, Sundarar composed the THIRUTHONDAR THOGAI here — the 10-verse hymn listing all 63 Nayanmars, the foundational text on which Sekkizhar's Periya Puranam is based. This makes Thiruvarur the LITERARY BIRTHPLACE OF THE NAYANMAR CANON — the site where the concept of 63 Nayanmars was first articulated as a coherent tradition. Sundarar's 7.51 pathigam and many other Devaram compositions center on Thiruvarur.",
        story_ta: "நம்பி ஆரூரர் (பின்னர் ஶிவனாலேயே சுந்தரர் அல்லது சுந்தரமூர்த்தி நாயனார் என்று பெயர் மாற்றப்பட்டவர்) சோழ இளவரசர் நரசிங்க முனையரையரால் திருவாரூரில் வளர்க்கப்பட்டு திருவாரூரின் பரவையாரை மணந்தார். தியாகராஜ கோயில் அவரது வாழ்நாள் முழுவதும் சுந்தரரின் ஆன்மிக இல்லமாக இருந்தது. மிக முக்கியமாக, சுந்தரர் திருத்தொண்டர் தொகையை — 63 நாயன்மார்கள் அனைவரையும் பட்டியலிடும் 10-பாசுர பாடல் — இங்கே இயற்றினார், சேக்கிழாரின் பெரிய புராணத்தின் அடிப்படை நூல். இது திருவாரூரை நாயன்மார் விதிமுறையின் இலக்கிய பிறப்பிடமாக ஆக்குகிறது — 63 நாயன்மார்களின் கருத்து ஒரு ஒத்திசைவான பாரம்பரியமாக முதன்முதலில் வெளிப்படுத்தப்பட்ட இடம். சுந்தரரின் 7.51 பதிகம் மற்றும் பல தேவார இயற்றங்கள் திருவாரூரை மையமாகக் கொண்டவை."
      },
      {
        nayanmar: "sadaiya",
        role: "devotee",
        brief_en: "Sadaiya Nayanar — Sundarar's father",
        brief_ta: "சடைய நாயனார் — சுந்தரரின் தந்தை",
        story_en: "Sadaiya Nayanar was the father of Sundarar. Though he lived at Thirunavalur, his son's spiritual life centered at Thiruvarur. Sadaiya's devotion to Shiva was so profound that he is honored as one of the 63 Nayanmars — a rare distinction for the parent of another Nayanmar, showing how deeply Shaiva devotion was woven into the family lineage.",
        story_ta: "சடைய நாயனார் சுந்தரரின் தந்தை. அவர் திருநாவலூரில் வாழ்ந்திருந்தாலும், அவரது மகனின் ஆன்மிக வாழ்க்கை திருவாரூரை மையமாகக் கொண்டிருந்தது. சடையாரின் ஶிவ பக்தி மிக ஆழமாக இருந்தது என்பதால், அவர் 63 நாயன்மார்களில் ஒருவராக மதிக்கப்படுகிறார் — மற்றொரு நாயன்மாரின் பெற்றோருக்கான ஒரு அரிய மரியாதை, ஶைவ பக்தி குடும்ப பரம்பரையில் எவ்வளவு ஆழமாக பின்னப்பட்டிருந்தது என்பதைக் காட்டுகிறது."
      },
      {
        nayanmar: "isaijnaniyar",
        role: "devotee",
        brief_en: "Isaijnaniyaar Nayanar — Sundarar's mother",
        brief_ta: "இசைஞானியார் நாயனார் — சுந்தரரின் தாய்",
        story_en: "Isaijnaniyaar Nayanar was the mother of Sundarar. She is unique among the 63 Nayanmars as one of only three women (with Karaikkal Ammaiyar and Mangayarkkarasi) in the canon. Her devotion — combined with Sadaiya Nayanar's — created the spiritual foundation for Sundarar's life. Isaijnaniyaar's inclusion in the 63 Nayanmars, both as Sundarar's mother and in her own right, shows the elevated position of women in Tamil Shaiva devotional history.",
        story_ta: "இசைஞானியார் நாயனார் சுந்தரரின் தாய். அவர் 63 நாயன்மார்களில் தனித்துவமானவர் — காரைக்கால் அம்மையார் மற்றும் மங்கையர்க்கரசியுடன் சேர்ந்து விதிமுறையில் மூன்று பெண்களில் ஒருவர். அவரது பக்தி — சடைய நாயனாருடன் இணைந்து — சுந்தரரின் வாழ்க்கைக்கான ஆன்மிக அடித்தளத்தை உருவாக்கியது. சுந்தரரின் தாயாகவும், தமது சொந்த உரிமையிலும் 63 நாயன்மார்களில் இசைஞானியாரின் இணைப்பு தமிழ் ஶைவ பக்தி வரலாற்றில் பெண்களின் உயர்நிலையை காட்டுகிறது."
      },
      {
        nayanmar: "dandi_adigal",
        role: "devotee",
        brief_en: "Dandi Adigal Nayanar — the blind devotee of Thiruvarur",
        brief_ta: "தண்டி அடிகள் நாயனார் — திருவாரூரின் குருட்டு பக்தர்",
        story_en: "Dandi Adigal Nayanar was a blind devotee who lived at Thiruvarur and served the Thyagaraja Temple with extraordinary devotion. Despite his blindness, he could sense the true form of divinity in the temple. Once, when Jains defiled the temple, Dandi Adigal warned them and challenged them to prove their faith. Through his devotion, Shiva miraculously restored his sight and dispelled the Jains. Dandi Adigal became one of the earliest Shaiva-Jain conflict figures in the Nayanmar tradition. His story is a foundational Shaiva narrative on divine intervention through devotional purity.",
        story_ta: "தண்டி அடிகள் நாயனார் திருவாரூரில் வாழ்ந்து தியாகராஜ கோயிலுக்கு அசாதாரண பக்தியுடன் சேவை செய்த ஒரு குருட்டு பக்தர். அவரது குருட்டுத்தன்மை இருந்தபோதிலும், அவர் கோயிலில் தெய்வத்தின் உண்மையான வடிவத்தை உணர முடிந்தது. ஒருமுறை, ஜைனர்கள் கோயிலை அவமதித்தபோது, தண்டி அடிகள் அவர்களை எச்சரித்து தமது நம்பிக்கையை நிரூபிக்க சவால் விட்டார். அவரது பக்தி மூலம், ஶிவன் அவரது பார்வையை அற்புதமாக மீட்டெடுத்து ஜைனர்களை விரட்டினார்."
      },
      {
        nayanmar: "meiporul",
        role: "devotee",
        brief_en: "Meiporul Nayanar — set free his assassin wearing Shaiva garb",
        brief_ta: "மெய்ப்பொருள் நாயனார் — ஶைவ வேடம் அணிந்த தமது கொலைகாரனை விடுவித்தார்",
        story_en: "Meiporul Nayanar was a warrior-devotee of Thiruvarur. When an enemy sent to assassinate him disguised himself as a Shaiva Sannyasin, Meiporul recognized the disguise but refused to harm anyone wearing the sacred Shaiva garb (rudraksha and vibhuti). He allowed himself to be killed rather than violate the sanctity of Shaiva symbols. His self-sacrifice honoring the mere APPEARANCE of Shaiva devotion is one of the most poignant Nayanmar narratives on the primacy of external devotional signs.",
        story_ta: "மெய்ப்பொருள் நாயனார் திருவாரூரின் வீரர்-பக்தர். அவரை கொல்ல அனுப்பப்பட்ட ஒரு எதிரி தன்னை ஶைவ சந்நியாசியாக மாறிக்கொண்டபோது, மெய்ப்பொருள் மாறுவேடத்தை அறிந்து கொண்டார் ஆனால் புனித ஶைவ வேடம் (ருத்ராக்ஷம் மற்றும் விபூதி) அணிந்த யாருக்கும் தீங்கு செய்ய மறுத்தார். ஶைவ சின்னங்களின் புனிதத்தை மீறுவதை விட தன்னைக் கொல்ல அனுமதித்தார்."
      }
    ],

    cross_tradition_en: [
      { tradition: "shakta", story: "Kamalambika Shrine at Thiruvarur is one of the 51 Shakti Peethas of Devi — the fingernail (kai viral) of Devi Sati is believed to have fallen at this site. Kamalambika is worshipped in the Sri Vidya Tantra tradition as the Manthrini form of Devi (the divine minister of Sri Devi in Sri Chakra tradition). The shrine is one of the most important Shakta and Tantric centers in Tamil Nadu, with continuous Sri Vidya Tantra worship. Muthuswami Dikshitar (1775-1835), the great Carnatic music composer, composed his celebrated 'Kamalamba Navavarna' — nine kritis in praise of Kamalamba — at this shrine, honoring Kamalambika's Shakti Peetha status." },
      { tradition: "sri_vaishnava", story: "The temple houses a rare Vanmikanathar shrine within its complex — a Vishnu shrine dedicated to Vanmikanathar (Vishnu manifested through the anthill/valmika). This is one of the few temples where Shaiva and Sri Vaishnava traditions coexist. Additionally, the Ajapa Natanam performed by Thyagarajaswami at Thiruvarur takes place on Vishnu's chest — a rare theological configuration acknowledging Shiva-Vishnu unity. The Thyagaraja Somaskanda form with Uma (Parvati) and Skanda (Muruga) also represents cosmic wholeness beyond sectarian divisions." },
      { tradition: "sapta_vidanga", story: "Thiruvarur is the FOREMOST of the seven Sapta Vidanga Sthalams — temples housing the seven Vidanga Lingams (uncrafted, self-manifested icons) brought to earth by King Muchukunda Chakravarti. The seven temples and their unique dance forms: Thiruvarur (Ajapa Natanam), Thirunallaru (Nagara Natanam), Nagapattinam (Ananda Natanam), Thirukkaravasal (Kukkuta Natanam), Thirukolili (Bhringa Natanam), Vedaranyam (Hamsa Natanam), and Thirukkuvalai (Paramananda Natanam). Each represents a unique cosmic dance of Shiva, with Thiruvarur's Ajapa Natanam being the primary — performed on Vishnu's chest without any chanting, representing the silent inner dance of consciousness." },
      { tradition: "vaidika", story: "Thiruvarur is designated as the MOOLADHARA STHALAM — the site representing the Mooladhara Chakra (root chakra) among the seven chakras corresponding to different Shiva temples in Tamil Nadu. This chakra correspondence establishes Thiruvarur as the foundational chakra of Tamil Shaiva sacred geography, where the ascent through the seven chakras begins. The temple is also the birthplace of Sundarar's Thiruthondar Thogai (the 10-verse listing of 63 Nayanmars), making Thiruvarur the literary birthplace of the Nayanmar canon — the site where the concept of the 63 Nayanmars was first articulated." },
      { tradition: "other", story: "Thiruvarur is the birthplace of MORE NAYANMARS than any other single temple town in Tamil Nadu, including Sundarar (foremost of Naalvar), his parents Sadaiya Nayanar and Isainaniyaar, the blind Dandi Adigal Nayanar, Meiporul Nayanar, and others. The temple is also the birthplace of the great Carnatic Trinity: Tyagaraja (1767-1847) was named after Thyagarajaswamy, born in Thiruvarur; Muthuswami Dikshitar (1775-1835) composed his Kamalamba Navavarna kritis here; and Syama Sastri (1762-1827) also had deep Thiruvarur connections. This makes Thiruvarur the SPIRITUAL BIRTHPLACE OF SOUTH INDIAN CARNATIC MUSIC — Carnatic tradition traces itself to the Thyagarajaswami-inspired compositions of the Trinity." }
    ],
    cross_tradition_ta: [
      { tradition: "shakta", story: "திருவாரூரில் கமலாம்பிகை ஆலயம் தேவியின் 51 சக்தி பீடங்களில் ஒன்று — சதி தேவியின் நகம் (கை விரல்) இந்த தளத்தில் விழுந்ததாக நம்பப்படுகிறது. கமலாம்பிகை ஶ்ரீ வித்யா தந்திர பாரம்பரியத்தில் தேவியின் மந்திரிணி வடிவமாக வழிபடப்படுகிறார் (ஶ்ரீ சக்கர பாரம்பரியத்தில் ஶ்ரீ தேவியின் தெய்வீக மந்திரி). ஆலயம் தமிழ்நாட்டின் மிக முக்கியமான ஶாக்த மற்றும் தாந்திரிக மையங்களில் ஒன்று, தொடர்ச்சியான ஶ்ரீ வித்யா தந்திர வழிபாட்டுடன். முத்துஸ்வாமி தீக்ஷிதர் (1775-1835), பெரிய கர்நாடக இசை இயற்றுநர், தமது புகழ்பெற்ற 'கமலாம்பா நவவர்ண' — கமலாம்பாவின் புகழுக்கு ஒன்பது கீர்த்தனைகள் — இந்த ஆலயத்தில் இயற்றினார்." },
      { tradition: "sri_vaishnava", story: "கோயில் தனது வளாகத்திற்குள் ஒரு அரிய வான்மீகநாதர் ஆலயத்தை கொண்டுள்ளது — வான்மீகநாதருக்கு (புற்று/வால்மீகம் மூலம் வெளிப்பட்ட விஷ்ணு) அர்ப்பணிக்கப்பட்ட ஒரு விஷ்ணு ஆலயம். ஶைவ மற்றும் ஶ்ரீ வைஷ்ணவ பாரம்பரியங்கள் இணைந்து செயல்படும் ஒரு சில கோயில்களில் இது ஒன்று. கூடுதலாக, திருவாரூரில் தியாகராஜஸ்வாமியால் நிகழ்த்தப்படும் அஜப நடனம் விஷ்ணுவின் மார்பில் நடைபெறுகிறது — ஶிவ-விஷ்ணு ஒற்றுமையை ஒப்புக்கொள்ளும் அரிய இறையியல் அமைப்பு." },
      { tradition: "sapta_vidanga", story: "திருவாரூர் ஏழு சப்த விடங்க ஸ்தலங்களில் முதன்மையானது — முசுகுந்த சக்ரவர்த்தி மன்னரால் பூமிக்கு கொண்டு வரப்பட்ட ஏழு விடங்க லிங்கங்களை (செதுக்கப்படாத, தன்னால் தோன்றிய திருவுருக்கள்) வைத்திருக்கும் கோயில்கள். ஏழு கோயில்கள் மற்றும் அவற்றின் தனித்துவமான நடன வடிவங்கள்: திருவாரூர் (அஜப நடனம்), திருநள்ளாறு (நகர நடனம்), நாகப்பட்டினம் (ஆனந்த நடனம்), திருக்கரவாசல் (குக்குட நடனம்), திருக்கோலிலி (பிருங்க நடனம்), வேதாரண்யம் (ஹம்ச நடனம்), மற்றும் திருக்குவளை (பரமானந்த நடனம்). ஒவ்வொன்றும் ஶிவனின் தனித்துவமான பிரபஞ்ச நடனத்தை பிரதிநிதித்துவப்படுத்துகிறது, திருவாரூரின் அஜப நடனம் முதன்மையானது — விஷ்ணுவின் மார்பில் எந்த மந்திரமும் இல்லாமல் நிகழ்த்தப்படுகிறது, உணர்வின் அமைதியான உள் நடனத்தை பிரதிநிதித்துவப்படுத்துகிறது." },
      { tradition: "vaidika", story: "திருவாரூர் மூலாதார ஸ்தலமாக நியமிக்கப்பட்டுள்ளது — தமிழ்நாட்டின் வெவ்வேறு ஶிவ கோயில்களுக்கு தொடர்புடைய ஏழு சக்கரங்களுள் மூலாதார சக்கரத்தை (மூல சக்கரம்) பிரதிநிதித்துவப்படுத்தும் தளம். இந்த சக்கர இணைப்பு திருவாரூரை தமிழ் ஶைவ புனித புவியியலின் அடிப்படை சக்கரமாக நிறுவுகிறது, ஏழு சக்கரங்கள் மூலம் ஏறுவது தொடங்கும் இடம். சுந்தரரின் திருத்தொண்டர் தொகை (63 நாயன்மார்களின் 10-பாசுர பட்டியல்) பிறந்த இடம் இதுவே." },
      { tradition: "other", story: "திருவாரூர் தமிழ்நாட்டின் எந்த ஒற்றை கோயில் நகரத்தை விட அதிக நாயன்மார்களின் பிறப்பிடமாகும், சுந்தரர் (நாலாவரின் முதன்மையானவர்), அவரது பெற்றோர் சடைய நாயனார் மற்றும் இசைஞானியார், குருட்டு தண்டி அடிகள் நாயனார், மெய்ப்பொருள் நாயனார், மற்றும் பலரும் அடங்குகிறார்கள். கோயில் மேலும் பெரிய கர்நாடக மும்மூர்த்திகளின் பிறப்பிடம்: த்யாகராஜர் (1767-1847) தியாகராஜஸ்வாமியின் பெயரால் பெயரிடப்பட்டு திருவாரூரில் பிறந்தார்; முத்துஸ்வாமி தீக்ஷிதர் (1775-1835) தமது கமலாம்பா நவவர்ண கிர்த்தனைகளை இங்கே இயற்றினார்; மற்றும் ஶ்யாம சாஸ்திரி (1762-1827) க்கும் ஆழமான திருவாரூர் தொடர்புகள் இருந்தன. இது திருவாரூரை தென்னிந்திய கர்நாடக இசையின் ஆன்மிக பிறப்பிடமாக ஆக்குகிறது — கர்நாடக பாரம்பரியம் மும்மூர்த்திகளின் தியாகராஜஸ்வாமி-ஈர்க்கப்பட்ட இயற்றங்களிலிருந்து தன்னை கண்டறிகிறது." }
    ]
  };

  console.log('[Session 1C.6] Thiruvarur Thyagarajaswamy (sno 130) enrichment loaded with anchor-level content.');
  console.log('[Session 1C.6] Sthala Purana length: ' + sthalaEn.length + ' chars (English), ' + sthalaTa.length + ' chars (Tamil)');
  console.log('[Session 1C.6] Sthala Vriksha: Padri Tree (Stereospermum chelonoides) with Sapta Vidanga significance');
  console.log('[Session 1C.6] Nayanmar associations: 5 (Sundarar birthplace, Sadaiya, Isaijnaniyaar, Dandi Adigal, Meiporul)');
  console.log('[Session 1C.6] Cross-tradition links: 5 (Shakta, Sri Vaishnava, Sapta Vidanga, Vaidika, Other/Carnatic)');
  console.log('[Session 1C.6] Festivals: 9 (bilingual)');
  console.log('[Session 1C.6] Naalvar override: 4/4 (Sambandar, Appar, Sundarar, Manickavasakar)');

  setTimeout(function() {
    if (typeof window.showTempleInPanel === 'function') {
      var panel = document.getElementById('detail-panel');
      var contentDiv = document.getElementById('detail-panel-content');
      if (panel && panel.classList.contains('has-content') && contentDiv) {
        var nameEl = contentDiv.querySelector('.dp-name');
        if (nameEl && nameEl.textContent.indexOf('#130') !== -1) {
          window.showTempleInPanel(130);
          console.log('[Session 1C.6] Re-rendered current Thiruvarur panel with new content');
        }
      }
    }
  }, 500);
})();


/* SESSION_1C7_LOADED — Vaitheeswaran Koil Anchor Content       */
/* ============================================================ */
(function(){
  window.SESSION_1C7_LOADED = true;
  console.log('[Session 1C.7] Loading Vaitheeswaran Koil (Vaidyanatha Swamy) anchor-level content...');

  if (!window.TEMPLE_ENRICHMENT) window.TEMPLE_ENRICHMENT = {};

  var sthalaEn = "The Vaidyanatha Swamy Temple at Vaitheeswaran Koil (ancient Pullirukkuvelur) is the great Shaiva healing shrine of Tamil Nadu — a temple on the Cauvery delta plain of Nagapattinam district where Shiva himself takes the form of Vaidyanatha, the divine physician, and where every ailment of body, mind, and karma is said to find its cure. The temple's name Vaitheeswaran (from Sanskrit Vaidya-Ishvara) literally means 'Lord of Medicine,' and pilgrims have travelled here for over a thousand years carrying the illnesses of the world to the compassionate physician-god who waits inside the western-facing sanctum. Uniquely among major Shiva temples of Tamil Nadu, Vaitheeswaran Koil combines three distinct anchor identities: it is the principal Navagraha parihara sthalam for Angaraka (Mars); it is a Sapta Vidanga-adjacent Chola-country temple where medicinal-oil (thailam) is dispensed as prasadam; and it is the global centre of Naadi Jyotisham, the palm-leaf astrology tradition. The presiding lingam is a swayambhu — self-manifest — rising within the sanctum as a small, unusually smooth dark stone, and beside it stands the goddess Thaiyalnayaki (Balambika) holding a small silver kalasa of medicinal oil that priests dispense to devotees as blessed remedy.\n\n" +
    "The temple's oldest sthala purana layer belongs to Rama and Jatayu. After the killing of Jatayu by Ravana during the abduction of Sita, tradition holds that the great vulture-king was cremated on this soil by Rama himself. The three ritual pits (kundams) dug for the funerary rites — Rama Kundam, Lakshmana Kundam, and Jatayu Kundam — are still shown to pilgrims to this day and form a distinct devotional circuit within the temple complex. The Tamil town-name Pullirukkuvelur is traditionally unpacked as 'the sacred town (velur) where the bird (pull) resided (irukku)' — the bird being Jatayu, whose devotion to Rama earned him moksha at this site. This Rama-Jatayu association makes Vaitheeswaran Koil one of the rare Shaiva temples where Vaishnava devotional narratives are honoured within the temple's own liturgical identity, and pilgrims of both Shaiva and Sri Vaishnava traditions revere the three kundams equally.\n\n" +
    "The second and most dominant sthala purana strand centres on Angaraka, the personified planet Mars. Angaraka, afflicted with a terrible skin disease that no other deity could cure, undertook severe penance on this soil. Shiva appeared as Vaidyanatha, cured him, and granted him a permanent place beside himself as the presiding planetary lord of the temple. From this moment Vaitheeswaran Koil became the principal parihara sthalam for Angaraka (Chevvai / Mars) dosha across the entire Navagraha circuit of Tamil Nadu — the pre-eminent temple for remedying the astrological afflictions attributed to Mars. Tuesdays and Sundays, the days sacred to Angaraka, draw enormous crowds seeking remedy for Mars-related afflictions: inflammatory illnesses, blood disorders, marital delays, litigation troubles, and property disputes. The temple issues small yellow cloth pouches containing homam ash, pepper, jaggery, and specific medicinal herbs as protective amulets against Angaraka's malefic influence, and this practice has continued unbroken from at least the Chola period.\n\n" +
    "The third sthala purana strand centres on Sukra, the preceptor of the asuras. When Sukra's eye was pierced by Vamana's kusa grass during the Vamana avatara, he too came to this place seeking cure. Shiva restored his sight, and in gratitude Sukra installed the vimana over the sanctum. The four Vedas, personified, joined the consecration ceremony, and the vimana came to be called Vedha Vimana. This story is why the temple is regarded as sovereign for cures of eye ailments in particular, and why Ratha Saptami — the day of Surya's chariot — is celebrated here with unusual intensity. The Vedha Vimana crowns the sanctum in the classical Chola form, and its association with the four Vedas gives Vaitheeswaran Koil a distinctive Vedic-Vaidika identity woven into its otherwise Agamic Shaiva ritual.\n\n" +
    "The Muthukumara Swamy shrine, dedicated to Subrahmanya, occupies an unusually elevated position within the temple and is one of the most beloved child-deity shrines in the Tamil country. Muthukumara — 'the pearl-child' — is worshipped here as the divine infant who cured his own devotees of infertility, and Thai Poosam sees continuous abhishekam through the day. The image of Muthukumara Swamy is small, jewelled, and portrayed as a young child; devotees seeking children, or seeking cure for their children's ailments, come here in enormous numbers, and the shrine's independent Utsavam attracts pilgrims from across the delta.\n\n" +
    "Architecturally the temple retains a Chola nucleus with substantial Vijayanagara and Nayaka additions. The current western-facing arrangement of the main sanctum — unusual for a major Shiva temple, most of which face east — is preserved from the original layout and is considered theologically significant, since medicine (aushadhi) traditionally flows from west to east. The seven-tiered eastern rajagopuram rises above the entrance, the vast Siddhamrita Theertham tank flanked by pillared mandapas dominates the eastern approach, and the wide inner prakaras hold subsidiary shrines to the Navagrahas, Bhairava, Chandikeswara, Nataraja, and the goddess Thaiyalnayaki in her separate shrine. The Navagraha shrine here is one of the most important in Tamil Nadu, and its Angaraka image receives daily oil abhishekam that pilgrims collect as parihara-prasadam.\n\n" +
    "Three of the Naalvar — Sambandar, Appar, and Sundarar — hymned Vaitheeswaran Koil in the Thevaram canon. Sambandar sang two padigams here (Thiruppullirukkuvelur), praising the Lord as the master of Vedic wisdom and the healer of chronic afflictions. Appar's hymn dwells on Vaidyanatha's compassion as the physician who cures the deepest ailments of karma. Sundarar praises Vaitheeswaran Koil as a place of unfailing refuge from the diseases of samsara. Manickavasakar's Thiruvasagam does not name Vaitheeswaran Koil, so the temple recognises three of the four Naalvar. Vaitheeswaran Koil is also today world-famous for a very different reason: it is one of the principal centres of Naadi Jyotisham, the palm-leaf astrology tradition in which ancient sages are believed to have inscribed predictions for individual souls thousands of years in advance. Pilgrims from across India and abroad come to consult these leaves, and the practice — while extra-canonical to the temple's Shaiva liturgy — has made the town internationally known. In the living devotion of Tamil Shaivas, Vaitheeswaran Koil remains what it has been for centuries: the last hospital, the merciful physician, the place where the incurable are cured.";

  var sthalaTa = "நாகப்பட்டினம் மாவட்டத்தில் காவிரிக் கழிமுகச் சமவெளியில் அமைந்துள்ள வைத்தீஸ்வரன் கோயில் (பண்டைப் பெயர் புள்ளிருக்குவேளூர்) தமிழகத்தின் தலைசிறந்த சைவ மருத்துவத் திருத்தலமாகும். இங்கே சிவபெருமான் வைத்தியநாதப் பெருமான் என்னும் திருக்கோலத்தில் காட்சி தந்து, உடல் நோய், மனத் துயர், வினைத் தொல்லை என அனைத்தையும் தீர்ப்பதாக ஆயிரம் ஆண்டுகளுக்கும் மேலாக நம்பப்பட்டு வருகிறது. வைத்தீஸ்வரன் என்னும் திருநாமம் 'மருந்தின் இறைவன்' என்று பொருள்படும். மேற்கு நோக்கிய திருமூலத்தானத்தில் அமர்ந்திருக்கும் கருணை மிகுந்த வைத்தியப் பெருமானை நாடி உலகின் நோய்களைச் சுமந்து பக்தர்கள் இங்கே வந்து செல்கிறார்கள். தமிழகத்தின் பெருங்கோயில்களில் தனித்துவமாக, வைத்தீஸ்வரன் கோயில் மூன்று அடையாளங்களை ஒருங்கே சுமக்கிறது: நவகிரகங்களில் அங்காரகன் (செவ்வாய்) தோஷ பரிகாரத்திற்கான முதன்மைத் தலம்; காவேரி மண்டல சோழநாட்டுக் கோயில்களில் மருந்து எண்ணெய் (தையிலம்) பிரசாதமாக வழங்கப்படும் அரிய தலம்; மற்றும் நாடி ஜோதிடத்தின் உலக மையம். திருமூலத்தான லிங்கம் ஒரு சுயம்பு — தானாகவே உதித்தது — சிறியதாகவும், அதிசயமாக மென்மையாகவும் காட்சி தருகிறது. அதற்குப் பக்கத்தில் தையல்நாயகி அம்பாள் (பாலாம்பிகை) மருந்து எண்ணெய் நிறைந்த சிறு வெள்ளிக் கலசத்தை ஏந்தி நிற்கிறாள்; அர்ச்சகர்கள் அந்த மருந்து எண்ணெயை பக்தர்களுக்குப் பிரசாதமாக வழங்குகின்றனர்.\n\n" +
    "கோயிலின் மிகப் பழமையான தல புராண அடுக்கு ராமபிரானையும் ஜடாயுவையும் சார்ந்தது. இராவணனால் சிறகறுக்கப்பட்டு வீழ்ந்த ஜடாயுவின் இறுதிக் கிரியைகள் இத்தலத்திலேயே ராமபிரானால் நடத்தப்பட்டன என்பது ஐதீகம். அப்போது அமைக்கப்பட்ட மூன்று சடங்குக் குண்டங்கள் — ராம குண்டம், லக்ஷ்மண குண்டம், ஜடாயு குண்டம் — இன்றும் யாத்திரிகர்களுக்குக் காட்டப்பட்டு, கோயில் வளாகத்திற்குள் ஒரு தனி பக்திச் சுற்றை உருவாக்குகின்றன. தமிழ்ப் பெயர் புள்ளிருக்குவேளூர், 'புள் (பறவை) இருக்கு (தங்கிய) வேளூர் (திருத்தலம்)' என்று பிரிக்கப்படுகிறது — அப்பறவை ஜடாயுவே; அவனுடைய ராம பக்தி காரணமாக அவனுக்கு இத்தலத்தில் மோட்சம் கிடைத்தது. இந்த ராம-ஜடாயு தொடர்பு காரணமாக, சைவ மற்றும் ஶ்ரீ வைஷ்ணவ மரபுகள் இரண்டின் பக்திக் கூறுகளும் ஆலயத்தின் திருப்பணி வழிபாட்டில் ஒருங்கே கௌரவிக்கப்படும் அரிய சைவத் தலங்களில் இதுவும் ஒன்று.\n\n" +
    "இரண்டாவது மற்றும் மேலான புராண இழை அங்காரகனுடையது — அதாவது செவ்வாய்க் கிரகம். மற்ற எந்தத் தெய்வத்தாலும் தீர்க்க முடியாத பயங்கரமான தோல் நோயால் அவதிப்பட்ட அங்காரகன் இத்தலத்தில் கடும் தவம் புரிந்தான். சிவபெருமான் வைத்தியநாதராக எழுந்தருளி அவனை நோய் நீக்கிக் காத்து, தன் அருகிலேயே கிரக நாயகனாக நிலைநிறுத்தினார். அந்த நிமிடம் முதல், வைத்தீஸ்வரன் கோயில் நவகிரக மண்டலத்தில் அங்காரக (செவ்வாய்) தோஷ பரிகாரத்திற்கான முதன்மைத் தலமாகி விட்டது — தமிழகம் முழுவதிலும் செவ்வாய் தோஷ நிவர்த்திக்கான மிக முக்கியமான ஆலயம். செவ்வாய், ஞாயிற்றுக் கிழமைகளில் — வெப்ப நோய், ரத்தக் கோளாறு, திருமணத் தடை, வழக்கு-வம்பு, சொத்து சர்ச்சை போன்ற செவ்வாய் தோஷப் பாதிப்புகளை நீக்கிக் கொள்ள எண்ணற்ற பக்தர்கள் இங்கே கூடுகிறார்கள். ஹோம விபூதி, மிளகு, வெல்லம், சிறப்பு மூலிகைகள் கலந்த சிறு மஞ்சள் துணிப் பைகள் அங்காரகனின் தீய தாக்கத்திற்கு எதிரான காப்பாக பக்தர்களுக்கு அளிக்கப்படுகின்றன — சோழர் காலம் தொட்டு இடையறாது தொடர்ந்து வரும் மரபு.\n\n" +
    "மூன்றாவது தல புராண இழை சுக்கிரனுடையது — அசுர குருவாகிய சுக்கிரன், வாமன அவதாரத்தின்போது வாமனனின் தர்ப்பைப் புல்லால் கண் குருடானான். அவனும் இங்கே வந்து சிவனை வேண்டினான். இறைவன் அவனது கண்பார்வையை மீட்டுத் தந்தார்; நன்றியறிதலாக சுக்கிரன் திருமூலத்தான விமானத்தை நிறுவினான். நான்கு வேதங்களும் உருவெடுத்து இக்கும்பாபிஷேகத்தில் கலந்து கொண்டதால் இவ்விமானம் வேத விமானம் எனப் பெயர் பெற்றது. இக்காரணத்தால் தான், கண் நோய்களைத் தீர்ப்பதில் இக்கோயில் தலைசிறந்ததாகக் கருதப்படுகிறது; சூரியனின் ரதத்தை நினைவுகூறும் ரத சப்தமி இங்கே சிறப்பாகக் கொண்டாடப்படுகிறது. வேத விமானம் திருமூலத்தானத்தின் மேல் சோழர் காலக் கட்டிடக்கலை வடிவில் உயர்ந்து நிற்கிறது; நான்கு வேதங்களுடனான அதன் தொடர்பு ஆக்ரமிய சைவ வழிபாட்டுக்குள் ஒரு தனித்துவமான வைதிக அடையாளத்தை உருவாக்குகிறது.\n\n" +
    "முத்துக்குமார சுவாமி சந்நிதி — சுப்பிரமணியப் பெருமானின் திருக்கோயில் — ஆலயத்தில் உயர்ந்த இடத்தில் அமைந்துள்ளது. தமிழகத்தின் மிக விரும்பப்படும் குழந்தை வடிவ முருகன் சந்நிதிகளில் இதுவும் ஒன்று. முத்துக்குமார என்றால் முத்துக் குழந்தை — குழந்தையின்மைத் துயர் நீக்கும் திருமகனாக இங்கே அவர் வழிபடப்படுகிறார். தைப்பூசம் நாள் முழுவதும் இடையறாத அபிஷேகம் நடைபெறுகிறது. முத்துக்குமார சுவாமியின் திருவுரு சிறியதாக, ஆபரணங்களால் அலங்கரிக்கப்பட்டு, இளம் குழந்தை வடிவில் திகழ்கிறது. மகப்பேறு வேண்டி வரும் தம்பதிகளும், தமது குழந்தைகளின் நோய் தீர வேண்டும் என்று வரும் பெற்றோர்களும் இங்கே பெரும் எண்ணிக்கையில் வந்து செல்கின்றனர்.\n\n" +
    "கட்டிடக்கலை அடிப்படையில், சோழர்கால மையக் கருவறையை உள்ளடக்கி, விஜயநகர மற்றும் நாயக்க கால கூடுதல் அமைப்புகளுடன் இக்கோயில் திகழ்கிறது. பெருங்கோயில்களிலேயே அரிதாகக் காணப்படும் மேற்கு நோக்கிய திருமூலத்தான அமைப்பு இங்கே பழைய உருவமாகவே பாதுகாக்கப்பட்டுள்ளது — பெரும்பாலான சிவாலயங்கள் கிழக்கு நோக்கியிருக்கும் நிலையில், மருந்து (ஔஷதி) மேற்கிலிருந்து கிழக்கு நோக்கிப் பாயும் என்ற இறையியல் கருத்தால் இது தனித்துவமாகக் கருதப்படுகிறது. கிழக்கே ஏழு நிலை ராஜகோபுரம், அகன்ற சித்தாமிர்த தீர்த்தக் குளம், நவகிரகங்கள், பைரவர், சண்டிகேசுவரர், நடராஜர், தையல்நாயகி அம்பாள் ஆகியோருக்கான உபசந்நிதிகள் — இவை அனைத்தும் சேர்ந்து தமிழகத்தின் மிக முழுமையான மருத்துவம் சார்ந்த ஆலயக் கட்டிடக்கலையாக இக்கோயிலை நிலைநிறுத்துகின்றன. இக்கோயிலின் நவகிரக சந்நிதி தமிழகத்தில் மிக முக்கியமானதொன்று; அதன் அங்காரக மூர்த்திக்கு தினமும் நடைபெறும் எண்ணெய் அபிஷேகத்தில் திரட்டப்படும் திரவம் பரிகார-பிரசாதமாக பக்தர்களால் கொள்ளப்படுகிறது.\n\n" +
    "நால்வரில் மூவர் — திருஞானசம்பந்தர், திருநாவுக்கரசர், சுந்தரர் — தேவாரப் பதிகங்களில் வைத்தீஸ்வரன் கோயிலைப் பாடியுள்ளனர். சம்பந்தர் திருப்புள்ளிருக்குவேளூர் மேல் இரண்டு பதிகங்களைப் பாடி, இறைவனை வேதப் பொருளின் அறிஞனாகவும், நாள்பட்ட நோய்களைத் தீர்ப்பவனாகவும் போற்றியுள்ளார். திருநாவுக்கரசரின் பதிகம் வினைப் பேறான ஆழ்நோய்களை நீக்கும் வைத்தியப் பெருமானின் கருணையை நோக்கிப் பாடுகிறது. சுந்தரர் இத்தலத்தை சம்சாரப் பிணிகளிலிருந்து விடுதலை தரும் தலமாகப் புகழ்ந்துள்ளார். மாணிக்கவாசகரின் திருவாசகத்தில் இத்தலம் இடம் பெறவில்லை; ஆகவே, இக்கோயிலில் நால்வரில் மூவர் என்று அடையாளப்படுத்தப்படுகிறது. வேறொரு காரணத்தினாலும் வைத்தீஸ்வரன் கோயில் இன்று உலகறியப்பட்டதாக ஆகியுள்ளது — நாடி ஜோதிடம். ஆயிரக்கணக்கான ஆண்டுகளுக்கு முன்னரே ரிஷிகளால் ஒவ்வொரு ஆத்மாவுக்கும் தனித்தனியாக ஏடுகளில் எழுதி வைக்கப்பட்ட எதிர்கால முன்னறிவிப்புகள் இங்கே பாதுகாக்கப்பட்டுள்ளதாக நம்பப்படுகிறது. இந்தியா முழுவதிலிருந்தும் வெளிநாடுகளிலிருந்தும் ஏடுகளைக் காண இங்கே பக்தர்கள் வருகிறார்கள். இது ஆலயத்தின் சைவப் பூஜா மரபுக்கு வெளியே இருந்தாலும், இத்தலத்தை உலகறியச் செய்துள்ளது. இன்றைய தமிழ் சைவப் பக்தர்களின் உயிர்த்துடிக்கும் நினைவில், வைத்தீஸ்வரன் கோயில் நூற்றாண்டுகளாக என்ன இருந்ததோ அதுவே ஆகியிருக்கிறது — கடைசி மருத்துவமனை, கருணை மிகுந்த மருத்துவன், தீர முடியாத நோய்களும் தீர்ந்து போகும் திருத்தலம்.";

  window.TEMPLE_ENRICHMENT[49] = {
    sthala_purana_en: sthalaEn,
    sthala_purana_ta: sthalaTa,

    goddess_en: "Thaiyalnayaki (Balambika) — the compassionate mother-physician who stands beside Vaidyanatha holding a small silver kalasa of medicinal oil, offering it as remedy to devotees; worshipped as the nursing mother who heals the ailing.",
    goddess_ta: "தையல்நாயகி (பாலாம்பிகை) — வைத்தியநாதப் பெருமான் அருகில் மருந்து எண்ணெய் நிறைந்த சிறு வெள்ளிக் கலசத்தை ஏந்தி நிற்கும் கருணை மிகுந்த தாய்-வைத்தியர்; நோயுற்றோரை அரவணைத்துக் காக்கும் தாயாக வழிபடப்படுகிறாள்.",

    pushkarini_en: "Siddhamrita Theertham (main tank, east of the temple) — said to have been prepared by Dhanvantari, the divine physician, containing traces of every medicinal herb; a bath here on Sundays is considered curative for chronic ailments. The temple campus also holds 18 subsidiary tirthams including the Rama Kundam, Lakshmana Kundam, and Jatayu Kundam associated with Jatayu's last rites.",
    pushkarini_ta: "சித்தாமிர்த தீர்த்தம் (கிழக்கு பெருங்குளம்) — தன்வந்தரி மருத்துவனால் அமுதம் கலந்து அமைக்கப்பட்டதாகக் கூறப்படுவது, அனைத்து மூலிகைகளின் சாரம் கொண்டதாகக் கருதப்படுகிறது; ஞாயிற்றுக்கிழமைகளில் இதில் நீராடினால் நீண்ட நாள் நோய்கள் தீரும். திருக்கோயில் வளாகத்தில் ராம குண்டம், லக்ஷ்மண குண்டம், ஜடாயு குண்டம் உட்பட 18 உபதீர்த்தங்கள் உள்ளன.",

    sthala_vriksha: {
      common_name_en: "Neem (Margosa Tree)",
      common_name_ta: "வேப்ப மரம்",
      scientific_name: "Azadirachta indica",
      description_en: "The Neem tree (Azadirachta indica), known in Tamil as Vembu, is a fast-growing evergreen tree native to the Indian subcontinent, reaching 15–20 meters in height with a broad, dense crown. Its small compound leaves, white fragrant flowers, and yellow drupes are all medicinally active. Every part of the neem — leaves, bark, seeds, oil — is used in traditional Ayurvedic and Siddha medicine as antimicrobial, anti-inflammatory, and blood-purifying agent. The tree is remarkably drought-tolerant and flourishes throughout the Cauvery delta.",
      description_ta: "வேப்ப மரம் (Azadirachta indica), தமிழில் வேம்பு என்று அழைக்கப்படுவது, இந்திய துணைக்கண்டத்திற்கு உரிய விரைவாக வளரும் பசுமையான மரமாகும். 15–20 மீட்டர் உயரம் வரை வளர்ந்து அகன்ற அடர்ந்த மகுடம் கொண்டது. அதன் சிறிய கூட்டு இலைகள், வெண்மையான நறுமண மலர்கள், மஞ்சள் நிறத் தரிசுப் பழங்கள் அனைத்தும் மருத்துவ குணமுள்ளவை. வேம்பின் ஒவ்வொரு பகுதியும் — இலை, மரப்பட்டை, விதை, எண்ணெய் — பாரம்பரிய ஆயுர்வேத மற்றும் சித்த மருத்துவத்தில் நுண்ணுயிர் எதிர்ப்பு, வீக்க எதிர்ப்பு மற்றும் ரத்தம் தூய்மைப்படுத்தும் மருந்தாகப் பயன்படுகிறது.",
      significance_en: "The Neem tree at Vaitheeswaran Koil is revered as the living body of the goddess Thaiyalnayaki. Pilgrims tie small yellow cloth pouches of medicinal powders to the tree's branches as prayers for healing, and the temple priests distribute neem leaves as parihara-prasadam for skin ailments and Angaraka dosha. The neem's traditional identity as the 'village pharmacy' of Tamil Nadu makes it the theologically perfect Sthala Vriksha for the temple of the divine physician — Neem itself is considered the botanical form of divine healing, and the tree at Vaitheeswaran Koil is one of the most venerated in the Tamil country. Its identification with the goddess also connects Vaitheeswaran Koil to the broader tradition of goddess-as-tree worship (vriksha-devi) that runs through Tamil Shaiva sacred geography.",
      significance_ta: "வைத்தீஸ்வரன் கோயிலின் வேப்ப மரம் தையல்நாயகி அம்பாளின் உயிர்த்த வடிவமாகக் கருதப்படுகிறது. பக்தர்கள் மருந்துப் பொடிகளை மஞ்சள் துணியில் கட்டி மரக்கிளைகளில் தொங்கவிட்டு நோய் தீர வேண்டுகின்றனர்; அர்ச்சகர்கள் வேப்பிலைகளை தோல் நோய்களுக்கும் அங்காரக தோஷத்திற்குமான பரிகார-பிரசாதமாக வழங்குகின்றனர். தமிழகத்தின் 'கிராம மருந்தகம்' என்ற வேம்பின் பாரம்பரிய அடையாளம், இதை மருத்துவப் பெருமானின் தலத்திற்கான இறையியல் ரீதியில் சரியான ஸ்தல விருக்ஷமாக ஆக்குகிறது — வேம்பு தானே தெய்வீக நோய் நிவர்த்தியின் தாவர வடிவமாகக் கருதப்படுகிறது. அம்பாளுடனான அதன் அடையாளம், வைத்தீஸ்வரன் கோயிலை மரம் வடிவத் தேவி (விருக்ஷ-தேவி) வழிபாட்டின் விரிவான தமிழ் சைவப் புனித புவியியலுடன் இணைக்கிறது."
    },

    size_acres: 6.3,

    festivals_en: [
      "Panguni Brahmotsavam (Mar-Apr) — 13-day annual festival, temple's largest utsavam",
      "Thai Poosam (Jan-Feb) — grand day-long abhishekam to Muthukumara Swamy",
      "Ratha Saptami (Feb) — Surya worship day, especially efficacious for eye ailments",
      "Sunday Angaraka Worship (weekly) — dedicated day for Mars parihara (Chevvai dosha)",
      "Tuesday Angaraka Worship (weekly) — second dedicated day for Mars parihara",
      "Aadi Pooram (Jul-Aug) — festival of Thaiyalnayaki Ambal",
      "Karthigai Deepam (Nov-Dec) — festival of lights",
      "Vaikasi Visakam (May-Jun) — festival of Muthukumara Swamy",
      "Maha Shivaratri (Feb-Mar) — night-worship festival"
    ],
    festivals_ta: [
      "பங்குனி பிரம்மோற்சவம் (பங்குனி மாதம்) — 13 நாள் வருடாந்திர விழா, கோயிலின் மிக பெரிய உற்சவம்",
      "தைப்பூசம் (தை மாதம்) — முத்துக்குமார சுவாமிக்கு நாள் முழுவதும் சிறப்பு அபிஷேகம்",
      "ரத சப்தமி (மாசி மாதம்) — சூரிய வழிபாட்டு நாள், கண் நோய் நிவர்த்திக்கு சிறப்பானது",
      "ஞாயிறு அங்காரக வழிபாடு (வாராந்திர) — செவ்வாய் தோஷ பரிகாரத்திற்கான சிறப்பு நாள்",
      "செவ்வாய் அங்காரக வழிபாடு (வாராந்திர) — செவ்வாய் தோஷ பரிகாரத்திற்கான இரண்டாம் சிறப்பு நாள்",
      "ஆடிப்பூரம் (ஆடி மாதம்) — தையல்நாயகி அம்பாள் விழா",
      "கார்த்திகை தீபம் (கார்த்திகை மாதம்) — விளக்குகளின் விழா",
      "வைகாசி விசாகம் (வைகாசி மாதம்) — முத்துக்குமார சுவாமி விழா",
      "மகா ஶிவராத்திரி (மாசி மாதம்) — இரவு-வழிபாடு விழா"
    ],

    town_ta: "வைத்தீஸ்வரன் கோயில்",
    coords_verified: true,

    naalvar_present: ["sambandar", "appar", "sundarar"],

    nayanmar_associations: [
      {
        nayanmar: "sambandar",
        role: "pilgrim_poet",
        brief_en: "Sambandar sang two Thevaram padigams on Vaitheeswaran Koil (Thiruppullirukkuvelur)",
        brief_ta: "வைத்தீஸ்வரன் கோயில் (திருப்புள்ளிருக்குவேளூர்) மேல் திருஞானசம்பந்தர் இரண்டு தேவாரப் பதிகங்களைப் பாடினார்",
        story_en: "Thirugnana Sambandar visited Vaitheeswaran Koil during his pilgrimage through the Chola country and composed TWO padigams here — a rare distinction indicating the special significance the child-poet-saint saw in this temple. His hymns address the Lord as 'Pullirukkuvelurudaiyar' (the master of Pullirukkuvelur) and 'Vetha Vithai Vitthagan' (the master of Vedic wisdom), praising Vaidyanatha as both the healer of chronic afflictions and the theological source of Vedic knowledge. Sambandar's Thevaram hymns established Vaitheeswaran Koil firmly within the canonical 275 Paadal Petra Sthalams and made the temple a mandatory station on any serious Shaiva pilgrimage.",
        story_ta: "திருஞானசம்பந்தர் சோழநாட்டு யாத்திரையின்போது வைத்தீஸ்வரன் கோயிலைத் தரிசித்து இங்கே இரண்டு பதிகங்களை இயற்றினார் — இளம் சிறுவப் பாவலர் இக்கோயிலில் கண்ட சிறப்பை அறிவிக்கும் அரிய தனித்துவம். அவரது பதிகங்கள் இறைவனை 'புள்ளிருக்குவேளூருடையார்' என்றும் 'வேத விதை வித்தகன்' என்றும் விளித்து, வைத்தியநாதப் பெருமானை நாள்பட்ட நோய்களைத் தீர்ப்பவனாகவும் வேத அறிவின் இறையியல் ஊற்றுமூலமாகவும் போற்றுகின்றன. சம்பந்தரின் தேவாரப் பாடல்கள் வைத்தீஸ்வரன் கோயிலை 275 பாடல் பெற்ற தலங்களில் நிலைநிறுத்தி, அனைத்து சைவ யாத்திரிகர்களுக்கும் கட்டாய தரிசன தலமாக ஆக்கின."
      },
      {
        nayanmar: "appar",
        role: "pilgrim_poet",
        brief_en: "Thirunavukkarasar (Appar) sang Vaitheeswaran Koil in his Thevaram padigam on Thiruppullirukkuvelur",
        brief_ta: "திருநாவுக்கரசர் (அப்பர்) திருப்புள்ளிருக்குவேளூர் மேல் தேவாரப் பதிகம் பாடினார்",
        story_en: "Thirunavukkarasar, the senior of the three Moovar and Sambandar's beloved companion in pilgrimage, sang Vaitheeswaran Koil in his own Thevaram padigam. Appar had himself been cured by Shiva's grace of an incurable stomach ailment inflicted by his sister Thilakavathiyar's prayer — an experience that gave his hymn on the divine physician of Pullirukkuvelur a deeply personal resonance. His padigam praises Vaidyanatha as the compassionate physician who reaches the ailments of karma that no worldly medicine can touch, and dwells with unusual tenderness on the mercy of the Lord who never turns away the suffering.",
        story_ta: "மூவரில் மூத்தவரும், சம்பந்தரின் அன்பு யாத்திரைத் தோழருமான திருநாவுக்கரசர் தமது சொந்த தேவாரப் பதிகத்தில் வைத்தீஸ்வரன் கோயிலைப் பாடினார். அப்பர் தம் சகோதரியார் திலகவதியாரின் பிரார்த்தனையால் ஏற்பட்ட தீராத வயிற்று நோயிலிருந்து சிவனின் திருவருளால் குணமடைந்த அனுபவம் கொண்டவர் — இதனாலேயே புள்ளிருக்குவேளூர் மருத்துவப் பெருமான் மேல் அவர் பாடிய பதிகம் ஆழ்ந்த சுய அனுபவத்தின் எதிரொலியாக அமைந்தது. அவரது பதிகம் உலக மருந்து எட்டமுடியாத வினை நோய்களைத் தீர்க்கும் கருணை மிகுந்த வைத்தியனாக வைத்தியநாதரைப் போற்றி, நோயுற்றோரை என்றுமே வெறுக்காத இறைவனின் அருளை அசாதாரண மென்மையுடன் விவரிக்கிறது."
      },
      {
        nayanmar: "sundarar",
        role: "pilgrim_poet",
        brief_en: "Sundaramoorthy Nayanar sang Vaitheeswaran Koil in his Thevaram padigam praising the temple as refuge from samsaric disease",
        brief_ta: "சுந்தரமூர்த்தி நாயனார் வைத்தீஸ்வரன் கோயிலை சம்சாரப் பிணிகளிலிருந்து விடுதலை தரும் தலமாகப் புகழ்ந்து தேவாரப் பதிகம் பாடினார்",
        story_en: "Sundaramoorthy Nayanar (Sundarar), the youngest of the three Moovar and the beloved-of-Shiva who wrote the Thiruthondar Thogai, sang Vaitheeswaran Koil in his own Thevaram padigam. His hymn frames the temple in a distinctive theological register: while Sambandar praises Vaidyanatha as the master of Vedic wisdom and Appar dwells on the compassion of the physician, Sundarar addresses the deepest wound — the disease of samsara itself, the endless cycle of birth and suffering — and praises Vaitheeswaran Koil as the place of unfailing refuge from that final ailment. Sundarar's pilgrimage to Vaitheeswaran Koil, together with those of Sambandar and Appar, sealed the temple's status as one of the three-Moovar-Sthalams — hymned by all three of the Moovar bodies of the Thevaram — a distinction shared by only a small subset of the 275 Paadal Petra Sthalams.",
        story_ta: "மூவரில் இளையவரும், சிவனின் அன்புத் தோழருமான, திருத்தொண்டர் தொகையை இயற்றிய சுந்தரமூர்த்தி நாயனார் (சுந்தரர்) வைத்தீஸ்வரன் கோயிலைத் தமது சொந்த தேவாரப் பதிகத்தில் பாடினார். அவரது பாடல் கோயிலை தனித்துவமான இறையியல் நோக்கில் அமைக்கிறது: சம்பந்தர் வைத்தியநாதரை வேத அறிஞனாகப் போற்றுகிறார், அப்பர் மருத்துவப் பெருமானின் கருணையை நினைந்து பாடுகிறார்; ஆனால் சுந்தரர் மிக ஆழ்ந்த காயத்தை நோக்கிப் பாடுகிறார் — சம்சாரப் பிணி, பிறப்பு-துன்பச் சுழற்சி என்ற இறுதி நோய் — அதிலிருந்து விடுதலை தரும் தலமாக வைத்தீஸ்வரன் கோயிலைப் புகழ்கிறார். சம்பந்தர், அப்பர், சுந்தரர் என்ற மூவரும் இக்கோயிலைப் பாடியதால், வைத்தீஸ்வரன் கோயில் 275 பாடல் பெற்ற தலங்களில் மிகச் சிறிய பகுதியாக இருக்கும் மூவர்-பாடிய-தலங்களில் ஒன்றாக நிலை பெற்றது."
      }
    ],

    cross_tradition_en: [
      { tradition: "shakta", story: "The goddess Thaiyalnayaki (Balambika) at Vaitheeswaran Koil is worshipped in a distinctive Shakta register as the compassionate mother-physician (matri-vaidya). She stands beside Vaidyanatha holding a small silver kalasa of medicinal oil, actively offering it as remedy to devotees — a form unique among goddess iconographies in Tamil Nadu. This Shakta identity connects her to the broader tradition of goddesses associated with healing, most notably Kamalambika at Thiruvarur and Meenakshi at Madurai, all of whom embody the maternal healing aspect of Devi. Devotees seeking cure for children's ailments, marital difficulties, and menstrual disorders come to Thaiyalnayaki as their principal Shakta protector, and her separate shrine within the complex maintains an independent daily worship cycle including morning abhishekam with medicinal oil." },
      { tradition: "sri_vaishnava", story: "Vaitheeswaran Koil is one of the rare Shaiva temples where a Vaishnava devotional narrative — the Rama-Jatayu story — is honoured within the temple's own liturgical identity. Tradition holds that after Ravana killed Jatayu during the abduction of Sita, Rama himself performed the funerary rites for the great vulture-king at this site, digging three ritual pits: Rama Kundam, Lakshmana Kundam, and Jatayu Kundam. These three kundams are still preserved and form a distinct devotional circuit within the temple complex. Sri Vaishnava pilgrims visit Vaitheeswaran Koil to honour Jatayu's moksha at this site, and the temple's Tamil name Pullirukkuvelur ('the sacred town where the bird resided') directly commemorates Jatayu. This shared Shaiva-Vaishnava sacred geography makes Vaitheeswaran Koil a rare bridge between the two great Tamil devotional traditions." },
      { tradition: "navagraha", story: "Vaitheeswaran Koil is the PRINCIPAL PARIHARA STHALAM for Angaraka (Chevvai / Mars) in the entire Navagraha circuit of Tamil Nadu — the pre-eminent temple for remedying the astrological afflictions attributed to Mars. The sthala purana centres on Angaraka's healing by Shiva-as-Vaidyanatha from a terrible skin disease, and Shiva's grant of a permanent place beside himself as the presiding planetary lord. Tuesdays and Sundays draw enormous crowds seeking remedy for Mars-related afflictions: inflammatory illnesses, blood disorders, marital delays (Chevvai dosha in horoscopes), litigation, and property disputes. The Navagraha shrine here receives daily oil abhishekam, and its Angaraka image is one of the most powerful in South Indian temple tradition. Vaitheeswaran Koil's identity as the Angaraka parihara sthalam makes it structurally parallel to Thirunallaru (Shani), Kanchipuram Ekambareswarar (associated with Budha in some traditions), and other Navagraha anchor temples across Tamil Nadu." },
      { tradition: "vaidika", story: "Vaitheeswaran Koil holds a distinctive Vaidika identity through the Sukra episode. When Sukra, preceptor of the asuras, was blinded by Vamana's kusa grass during the Vamana avatara, he came to this temple seeking cure. Shiva restored his sight, and in gratitude Sukra installed the vimana over the sanctum. The four Vedas, personified, joined the consecration ceremony, and the vimana came to be called Vedha Vimana — a name preserved unchanged for over a thousand years. This Vedic association makes Vaitheeswaran Koil one of the temples where the Agamic Shaiva ritual system coexists with a strong Vedic-Vaidika theological register, and the vimana above the sanctum is one of the very few in Tamil Nadu named after the four Vedas themselves. Ratha Saptami — the day of Surya's chariot, a specifically Vedic Solar festival — is therefore celebrated here with unusual intensity, drawing devotees seeking Vedic-Solar remedy for eye ailments." },
      { tradition: "other", story: "Vaitheeswaran Koil is today world-famous as one of the principal centres of NAADI JYOTISHAM, the palm-leaf astrology tradition in which ancient sages — most prominently Agastya, Bhrigu, Kaushika, Vasishtha, Vishwamitra, Shukra, and Suka — are believed to have inscribed predictions for individual souls thousands of years in advance. Pilgrims from across India and abroad come to consult these leaves, which are read by hereditary Naadi readers who match the seeker's thumbprint to the appropriate leaf-bundle. While Naadi Jyotisham is extra-canonical to the temple's Shaiva liturgy, its association with Vaitheeswaran Koil has made the town internationally known and draws pilgrims year-round including significant numbers from Malaysia, Singapore, Sri Lanka, and the global Tamil diaspora. The tradition's association with Vaitheeswaran Koil is especially meaningful because Vaidyanatha, as the divine physician, is understood to prescribe not only remedies for bodily illness but also foresight into the karmic patterns of the soul — and the Naadi leaves are read as an extension of that healing knowledge into the domain of destiny itself." }
    ],
    cross_tradition_ta: [
      { tradition: "shakta", story: "வைத்தீஸ்வரன் கோயிலின் தையல்நாயகி அம்பாள் (பாலாம்பிகை) தனித்துவமான ஶாக்த வழிபாட்டில் கருணை மிகுந்த தாய்-வைத்தியராக (மாத்ரு-வைத்யா) வழிபடப்படுகிறாள். வைத்தியநாதப் பெருமான் அருகில் மருந்து எண்ணெய் நிறைந்த சிறு வெள்ளிக் கலசத்தை ஏந்தி, பக்தர்களுக்கு அதைத் தீவிரமாக நோய் நிவர்த்திக்காக அளிக்கும் திருக்கோலம் — இது தமிழகத்தில் தேவி வழிபாட்டில் தனித்துவமான வடிவம். இந்த ஶாக்த அடையாளம் அவளை நோய் நிவர்த்தியுடன் தொடர்புடைய பரந்த தேவி மரபுடன் இணைக்கிறது — திருவாரூர் கமலாம்பிகை, மதுரை மீனாட்சி போன்ற தேவி வடிவங்களுடன், அனைவரும் நோய் நீக்கும் தாய்-அம்சத்தை உருவகப்படுத்துபவர்கள். குழந்தை நோய், திருமணத் தடை, மாதவிடாய் கோளாறுகள் நீங்க வேண்டும் என்று வரும் பக்தர்கள் தையல்நாயகியை முதன்மையான ஶாக்த பாதுகாவலராக நாடி வருகின்றனர்." },
      { tradition: "sri_vaishnava", story: "வைத்தீஸ்வரன் கோயில் வைஷ்ணவப் பக்திக் கதை — ராம-ஜடாயு புராணம் — கோயிலின் சொந்த வழிபாட்டு அடையாளத்திற்குள் கௌரவிக்கப்படும் அரிய சைவத் தலங்களில் ஒன்று. ராவணன் சீதையை அபகரிக்கும்போது ஜடாயுவைக் கொன்ற பிறகு, ராமபிரானே இத்தலத்தில் அப்பறவை அரசனுக்கு இறுதிக் கிரியைகளை நடத்தி, மூன்று சடங்குக் குண்டங்களை அமைத்தார் என்பது ஐதீகம்: ராம குண்டம், லக்ஷ்மண குண்டம், ஜடாயு குண்டம். இம்மூன்று குண்டங்களும் இன்றும் பாதுகாக்கப்பட்டு கோயில் வளாகத்திற்குள் ஒரு தனி பக்திச் சுற்றை உருவாக்குகின்றன. ஸ்ரீ வைஷ்ணவ யாத்திரிகர்கள் இத்தலத்தில் ஜடாயுவின் மோட்சத்தை வணங்க வருகின்றனர்; கோயிலின் தமிழ்ப் பெயர் புள்ளிருக்குவேளூர் ('பறவை தங்கிய திருத்தலம்') நேரடியாக ஜடாயுவை நினைவூட்டுகிறது." },
      { tradition: "navagraha", story: "வைத்தீஸ்வரன் கோயில் தமிழக நவகிரக மண்டலத்தில் அங்காரகனுக்கான (செவ்வாய்) முதன்மைப் பரிகார ஸ்தலம் — செவ்வாய் தோஷ நிவர்த்திக்கான தமிழகத்தின் தலைசிறந்த ஆலயம். தல புராணத்தின் மையம் அங்காரகனின் பயங்கர தோல் நோய் சிவனால் — வைத்தியநாதராக — தீர்க்கப்பட்டு, தன் அருகிலேயே கிரக நாயகனாக நிரந்தர இடம் அளிக்கப்பட்ட நிகழ்வு. செவ்வாய், ஞாயிற்றுக் கிழமைகள் — வெப்ப நோய், ரத்த கோளாறு, திருமணத் தடை (ஜாதகங்களில் செவ்வாய் தோஷம்), வழக்குகள், சொத்து சர்ச்சை போன்ற செவ்வாய் தொடர்பான பாதிப்புகள் நீக்க வேண்டி பெரும் கூட்டம் கூடுகிறது. இங்குள்ள நவகிரக சந்நிதிக்கு தினமும் எண்ணெய் அபிஷேகம் நடைபெறுகிறது; அதன் அங்காரக மூர்த்தி தென்னிந்திய ஆலய மரபில் மிக சக்தி வாய்ந்ததாகக் கருதப்படுகிறது." },
      { tradition: "vaidika", story: "வைத்தீஸ்வரன் கோயில் சுக்கிரன் நிகழ்வின் மூலம் தனித்துவமான வைதிக அடையாளத்தைக் கொண்டது. வாமன அவதாரத்தின்போது வாமனனின் தர்ப்பைப் புல்லால் கண் குருடான அசுர குரு சுக்கிரன், இக்கோயிலுக்கு நோய் தீர வந்தான். சிவன் அவனது பார்வையை மீட்டுத் தந்தார்; நன்றியறிதலாக சுக்கிரன் திருமூலத்தான விமானத்தை நிறுவினான். நான்கு வேதங்களும் உருவெடுத்து இக்கும்பாபிஷேகத்தில் கலந்து கொண்டதால் இவ்விமானம் வேத விமானம் எனப் பெயர் பெற்றது — ஆயிரம் ஆண்டுகளுக்கும் மேலாக மாறாமல் பாதுகாக்கப்படும் திருநாமம். இந்த வேதத் தொடர்பு வைத்தீஸ்வரன் கோயிலை ஆக்ரமிய சைவ சடங்கு அமைப்பும் வலிமையான வைதிக இறையியல் பதிவும் இணைந்து செயல்படும் அரிய தலங்களில் ஒன்றாக ஆக்குகிறது. சூரியனின் ரதத்தை நினைவூட்டும் வைதிக சூரிய விழாவான ரத சப்தமி இங்கே சிறப்பாகக் கொண்டாடப்படுகிறது." },
      { tradition: "other", story: "வைத்தீஸ்வரன் கோயில் இன்று உலகறியப்பட்ட நாடி ஜோதிடத்தின் முதன்மை மையங்களில் ஒன்று. அகஸ்தியர், பிருகு, கௌசிகர், வசிஷ்டர், விஶ்வாமித்திரர், சுக்கிரர், சுகர் போன்ற பண்டைய ரிஷிகள் ஆயிரக்கணக்கான ஆண்டுகளுக்கு முன்னரே ஒவ்வொரு ஆத்மாவுக்கும் தனித்தனியாக ஏடுகளில் எழுதி வைத்த எதிர்கால முன்னறிவிப்புகள் இங்கே பாதுகாக்கப்பட்டுள்ளதாக நம்பப்படுகிறது. இந்தியா முழுவதிலிருந்தும், மலேஷியா, சிங்கப்பூர், இலங்கை, மற்றும் உலகத் தமிழ் புலம்பெயர் சமூகங்களிலிருந்தும் பக்தர்கள் ஏடுகளைக் காண இங்கே வருகின்றனர்; பரம்பரை நாடி வாசகர்கள் தேடுபவரின் கட்டைவிரல் ரேகையைக் கொண்டு தொடர்புடைய ஏடு-கட்டைக் கண்டறிந்து வாசிக்கின்றனர். நாடி ஜோதிடம் ஆலயத்தின் சைவப் பூஜா மரபுக்கு வெளியே இருந்தாலும், வைத்தியநாதப் பெருமான் — தெய்வீக மருத்துவனாக — உடல் நோய்க்கான மருந்தை மட்டுமல்ல, ஆத்மாவின் வினைச் சுவடுகளுக்கான முன்னறிதலையும் அளிப்பதாக கருதப்படும் காரணத்தால், இத்தொடர்பு ஆழ்ந்த இறையியல் தன்மை பெறுகிறது — நாடி ஏடுகள் மருத்துவ ஞானத்தின் விதி-மண்டலம் நோக்கிய நீட்சியாக வாசிக்கப்படுகின்றன." }
    ]
  };

  console.log('[Session 1C.7] Vaitheeswaran Koil (sno 49) enrichment loaded with anchor-level content.');
  console.log('[Session 1C.7] Sthala Purana length: ' + sthalaEn.length + ' chars (English), ' + sthalaTa.length + ' chars (Tamil)');
  console.log('[Session 1C.7] Sthala Vriksha: Neem Tree (Azadirachta indica) with divine-physician significance');
  console.log('[Session 1C.7] Nayanmar associations: 3 (Sambandar pilgrim_poet, Appar pilgrim_poet, Sundarar pilgrim_poet)');
  console.log('[Session 1C.7] Cross-tradition links: 5 (Shakta, Sri Vaishnava, Navagraha, Vaidika, Other/Naadi Jyotisham)');
  console.log('[Session 1C.7] Festivals: 9 (bilingual)');
  console.log('[Session 1C.7] Naalvar override: 3/4 (Sambandar, Appar, Sundarar; no Manickavasakar)');

  setTimeout(function() {
    if (typeof window.showTempleInPanel === 'function') {
      var panel = document.getElementById('detail-panel');
      var contentDiv = document.getElementById('detail-panel-content');
      if (panel && panel.classList.contains('has-content') && contentDiv) {
        var nameEl = contentDiv.querySelector('.dp-name');
        if (nameEl && nameEl.textContent.indexOf('#49') !== -1) {
          window.showTempleInPanel(49);
          console.log('[Session 1C.7] Re-rendered current Vaitheeswaran Koil panel with new content');
        }
      }
    }
  }, 500);
})();


/* SESSION_1C8_LOADED — Thiruvannamalai Arunachaleswarar Content*/
/* ============================================================ */
(function(){
  window.SESSION_1C8_LOADED = true;
  console.log('[Session 1C.8] Loading Thiruvannamalai Arunachaleswarar anchor-level content...');

  if (!window.TEMPLE_ENRICHMENT) window.TEMPLE_ENRICHMENT = {};

  var sthalaEn = "The Arunachaleswarar Temple at Thiruvannamalai — historically Thiruvannamalai, from the Tamil 'thiru-annamalai' meaning 'the sacred mountain that cannot be reached' — stands at the foot of the great Arunachala Hill in the northern Tamil Nadu district of Thiruvannamalai. It is one of the most theologically foundational Shiva shrines in India, holding a rare and multifaceted anchor status: it is the AGNI STHALAM among the five Pancha Bhoota temples that represent the five great elements of the cosmos, uniquely dedicated to the element of fire; it is the site of Karthigai Deepam, one of the largest continuous devotional flames in the world; it is the destination of the monthly Girivalam pilgrimage in which hundreds of thousands of devotees walk 14 kilometres barefoot around the sacred hill on every full moon; and it is the temple where Manickavasakar composed his celebrated Thiruvempavai, one of the most beloved sections of the Thiruvasagam. The presiding deity Annamalaiyar (literally 'lord of the unreachable mountain') is worshipped as the embodiment of the Arunachala Hill itself — the theology holds that the temple is a doorway, but the hill is the god. The consort deity Unnamulai Ammai (also revered as Apeetha Kuchambika) shares the sanctum in her own separate shrine. The complex spans 25 acres, features NINE gopurams and 360 subsidiary theerthams, and the eastern Rajagopuram at 217 feet (66 metres) with eleven storeys is one of the tallest temple towers in India — built by King Krishnadevaraya in the 16th century.\n\nThe primary sthala purana centres on the Brahma-Vishnu contest for supremacy. Once, Brahma the creator and Vishnu the preserver argued over which of them was the greater deity. Their dispute escalated into a cosmic confrontation. To resolve it, Shiva manifested before them as an infinite column of blazing fire (jyotirlinga) — a pillar of light without beginning or end. He challenged the two: whichever of them could find the top or the bottom of this column of fire would be recognised as supreme. Vishnu assumed the form of a boar (Varaha) and burrowed downward into the earth seeking the base; Brahma took the form of a swan (Hamsa) and flew upward seeking the crown. Both journeyed for aeons. Vishnu returned honestly, confessing that the base was unreachable. Brahma, unable to find the top, encountered a falling ketaki (screwpine) flower on his ascent and persuaded it to bear false witness that he had reached the summit. Shiva revealed the deception, cursed Brahma to be worshipped nowhere on earth (which is why Brahma temples are so rare), and cursed the ketaki flower to be excluded from Shiva worship. Then, at the pleas of the two devas, Shiva condensed the infinite column of fire into the mountain of Arunachala itself, so that pilgrims could approach and worship what could otherwise never be grasped. This foundational narrative establishes Thiruvannamalai as the site where the formless fire of divine consciousness took the form of a mountain, and where Shiva as Agni Lingam continues to reside — visible in stone yet remaining, in essence, the same infinite jyoti.\n\nThe second sthala purana centres on Karthigai Deepam, the great annual flame ritual. On the full moon (poornima) day of the Tamil month of Karthigai (November–December), which typically coincides with Kritika nakshatra, a massive beacon of ghee, camphor, and cotton is lit at the summit of the 2,668-foot Arunachala Hill using an enormous cauldron over five feet in diameter. The flame burns continuously for approximately eleven days, visible for over fifty kilometres in every direction, and is regarded as the physical manifestation of the original jyotirlinga fire that Shiva revealed to Brahma and Vishnu. Simultaneously, in the temple below, a five-wick sacred lamp called the Bharani Deepam is lit in the sanctum sanctorum, and its flame is carried up the hill in a ceremonial procession to ignite the Karthigai Deepam beacon at the summit. Millions of pilgrims — the largest devotional gathering at Thiruvannamalai each year — witness the moment of ignition. The Karthigai Deepam draws pilgrims from every corner of the Tamil-speaking world and increasingly from the global Hindu diaspora, and is one of the oldest continuously performed public rituals in Indian religious practice, referenced in Sangam-era Tamil literature over two thousand years ago.\n\nThe third sthala purana centres on Girivalam, the sacred circumambulation of the Arunachala Hill. Every full moon night, hundreds of thousands of devotees (on peak festival full moons, over a million) walk the 14-kilometre pradakshina path around the base of the hill — traditionally barefoot, silently, and completed within one full lunar cycle from moonrise to moonrise. The Girivalam path passes eight directional lingams (Ashta Lingams) that mark the eight cardinal and inter-cardinal directions: Indra Lingam (east), Agni Lingam (southeast), Yama Lingam (south), Nirruti Lingam (southwest), Varuna Lingam (west), Vayu Lingam (northwest), Kubera Lingam (north), and Ishanya Lingam (northeast). At each lingam pilgrims pause for darshan, and the completed circuit is considered equivalent to the merit of visiting all eight cosmic quarters. Full moon Girivalam is especially efficacious for the removal of astrological doshas, the resolution of long-standing familial or karmic issues, and — for those who walk in the last hour before sunrise — direct communion with Arunachala as guru. The Girivalam pilgrimage is one of the most enduring public devotional practices in India, and Thiruvannamalai on full moon nights becomes a moving river of devotees encircling the sacred hill.\n\nThe fourth theological layer centres on Manickavasakar's composition of the Thiruvempavai at Thiruvannamalai. Manickavasakar, chief minister to the Pandya king and one of the four Naalvar of Tamil Shaivism, stayed at the Adhi Arunachaleswarar Temple in Adi Annamalai (on the Girivalam path) during the sacred Tamil month of Margazhi. Because it was the traditional season when Tamil women bathe at dawn and observe the pavai vrata (a month-long vow of devotion), Manickavasakar composed the twenty verses of the Thiruvempavai here so that the women could sing them at their pre-dawn bath. Recognising Arunachala as Shiva himself in his infinite jyotirlinga form, Manickavasakar opened his composition with the immortal invocation 'Aadhiyum andhamum illa arutperum jothiye' — 'O flame of grace without beginning or end.' This line, now inscribed in temples and homes across the Tamil world, is one of the most philosophically profound utterances in the Thiruvasagam. The Thiruvempavai verses are sung every dawn during Margazhi in every Shiva temple in Tamil Nadu; the tradition also travelled to the Thai royal court, where the verses are recited at the coronation of the Thai king to this day. A separate Manickavasakar shrine at Adi Annamalai commemorates the site of composition.\n\nThe fifth theological layer establishes Thiruvannamalai's place in the 63 Nayanmars canon. Nami Nandi Adigal Nayanar — one of the 63 Nayanmars per the Periya Puranam — is directly associated with this temple. As a poor devotee, unable to afford ghee to light the temple lamps, he attempted to light them with water in place of oil. Through his pure devotion, the water miraculously ignited and burned as if it were oil, and the temple was fully illuminated. This miracle established Nami Nandi Adigal's canonical place among the 63 Nayanmars. Additionally, all four Naalvar — Sambandar, Appar, Sundarar, and Manickavasakar — sang the temple: Sambandar sang two Thevaram padigams at Thiruvannamalai; Appar composed his hymn on Arunachaleswarar; Sundarar included the temple in his Thiruthondar Thogai geography of pilgrimage; and Manickavasakar's Thiruvempavai, as noted, was composed on-site. This makes Thiruvannamalai one of the very few temples celebrated by all four Naalvar, cementing its status as a four-Naalvar Sthalam.\n\nThe sixth theological layer establishes Thiruvannamalai as a global centre of Advaita Vedanta through the presence of Bhagavan Sri Ramana Maharshi (1879-1950), one of the greatest sages of modern Indian spiritual history. Ramana Maharshi came to Thiruvannamalai as a sixteen-year-old boy in 1896, drawn by a mystical experience in which he realised that Arunachala was calling him. He spent the remaining fifty-four years of his life at the foot of the hill, first in the temple's Patala Lingam cave, then at Virupaksha Cave on the hillside, and finally at Ramanashram at the southern base. His central teaching — that Arunachala is not merely a mountain but the visible form of Shiva as pure consciousness, and that the practice of self-enquiry (atma-vichara) through the question 'Who am I?' leads to the direct realisation of the Self — has drawn devotees and seekers from every continent. Ramana Maharshi identified Arunachala itself as the guru, and his composed Five Hymns to Arunachala are among the most beloved modern devotional works in the Tamil language. Ramanashram continues today as one of the principal centres of contemporary Advaita practice, and the Arunachala–Ramana connection has made Thiruvannamalai perhaps the most internationally significant Tamil Shaiva site of the twentieth and twenty-first centuries.\n\nArchitecturally the temple is one of the largest in India. The 25-acre complex is organised into seven prakaras (concentric enclosures) built across several dynasties: the innermost two prakaras were built by the Pandya kings in the 9th–12th centuries; the outer prakaras were added by the Cholas (11th–13th centuries) and later Hoysala kings from Karnataka (13th century); the great Rajagopuram at 217 feet was built by King Krishnadevaraya of the Vijayanagara Empire in the 16th century and is one of the tallest gopurams in India. The complex houses the famous thousand-pillared mandapam built during the Vijayanagara period, the Brahma Theertham and Shiva Ganga Theertham tanks, 360 named subsidiary theerthams (one for each day of the traditional lunar year), and countless subsidiary shrines including the Patala Lingam cave where Ramana Maharshi first sat in samadhi. The Agni Lingam in the sanctum is the swayambhu (self-manifested) representation of the fire-form of Shiva, and the Agni Yoni of Unnamulai Ammai in the consort shrine represents the receptive feminine dimension of the same fire.\n\nFor over twelve centuries, Thiruvannamalai Arunachaleswarar has stood as one of the pre-eminent theological, ritual, and philosophical centres of Tamil Shaivism — the temple where the infinite fire of divine consciousness took the visible form of a mountain, where all four Naalvar sang, where Manickavasakar composed the Thiruvempavai, where Nami Nandi Adigal lit lamps with water, where Karthigai Deepam blazes each year, where the Girivalam draws millions each month, and where Ramana Maharshi found his home. It remains what it has always been: the mountain that is the god, the fire that never goes out, the sacred pradakshina at the heart of Tamil Shaiva geography.";

  var sthalaTa = "தமிழ்நாட்டின் வடபகுதியில், திருவண்ணாமலை மாவட்டத்தில், பெருமையுடன் நிற்கும் அருணாசல மலையின் அடிவாரத்தில் அமைந்துள்ள திருவண்ணாமலை அருணாசலேஸ்வரர் திருக்கோயில் — 'திரு' + 'அண்ணாமலை' ('எட்ட முடியாத புனித மலை') என்ற தமிழ்ச் சொற்களால் ஆனது — இந்தியாவின் இறையியல் ரீதியில் மிக அடிப்படையான சிவாலயங்களில் ஒன்று. இக்கோயில் ஒரு அரிய பன்முக அடையாளத்தை சுமக்கிறது: பஞ்ச பூத ஸ்தலங்களில் அக்னி (நெருப்பு) தத்துவத்தை பிரதிநிதித்துவப்படுத்தும் ஒரே ஆலயம்; உலகின் மிக பெரிய தொடர்ச்சியான பக்தி விளக்குகளில் ஒன்றான கார்த்திகை தீபத்தின் தளம்; ஒவ்வொரு பௌர்ணமிக்கும் லட்சக்கணக்கான பக்தர்கள் புனித மலையைச் சுற்றி வெறுங்காலால் 14 கிலோமீட்டர் நடக்கும் கிரிவலம் யாத்திரையின் இலக்கு; மற்றும் மாணிக்கவாசகர் தமது புகழ்பெற்ற திருவெம்பாவையை இயற்றிய இடம். ஆளும் தெய்வம் அண்ணாமலையார் ('எட்ட முடியாத மலையின் இறைவன்') அருணாசல மலையின் உருவகமாகவே வணங்கப்படுகிறார் — கோயில் நுழைவாயில், மலையே இறைவன் என்பது இக்கோயிலின் இறையியல். துணை தேவி உன்னாமுலை அம்மை (அபீத குசாம்பிகை) தமது தனி சந்நிதியில் வழிபாட்டைப் பெறுகிறார். வளாகம் 25 ஏக்கர் பரப்பளவில் ஒன்பது கோபுரங்களுடன், 360 உபதீர்த்தங்களுடன் நிற்கிறது; 217 அடி உயரம் (66 மீட்டர்) கொண்ட பதினொரு அடுக்கு கிழக்கு ராஜகோபுரம் — 16-ம் நூற்றாண்டில் ஶ்ரீ கிருஷ்ணதேவராயரால் கட்டப்பட்டது — இந்தியாவின் மிக உயரமான கோயில் கோபுரங்களில் ஒன்று.\n\nமூல ஸ்தல புராணம் பிரம்மா-விஷ்ணு மேலான்மைப் போட்டியை மையமாக்கியது. படைப்பாளராகிய பிரம்மாவும் காப்பாளராகிய விஷ்ணுவும் தமது இருவரில் யார் பெரியவர் என்று ஒருகாலத்தில் விவாதித்தனர். இப்பிரச்சினை பிரபஞ்ச மோதலாக வளர்ந்தது. இதை தீர்க்க, சிவபெருமான் அவர்கள் முன் தொடக்கமும் முடிவும் இல்லாத எரியும் ஜோதிர்லிங்கமாக (ஜ்யோதி-லிங்கம் — ஒளித்தூண்) தோன்றினார். 'உங்களில் யாருவது இந்த அக்னித்தூணின் மேல்-நுனியையோ அடி-நுனியையோ கண்டறிந்தால், அவரே மேலானவர்' என்று அவர் சவால் விட்டார். விஷ்ணு வராகமாக (பன்றி) உருமாற்றி பூமிக்கு அடியில் அடி-நுனியைத் தேட நுழைந்தார்; பிரம்மா ஹம்சமாக (அன்னம்) உருமாற்றி மேல்-நுனியைத் தேட உயரப் பறந்தார். இருவரும் யுகங்களாக பயணித்தனர். விஷ்ணு நேர்மையாக திரும்பி, அடி-நுனி எட்ட முடியாதது என்று ஒப்புக்கொண்டார். பிரம்மா, மேல்-நுனியைக் கண்டறிய முடியாமல், இறங்கும் ஒரு தாழம் பூவை (கேதகி) சந்தித்து, அது தமக்கு உச்சி எட்டியதாக பொய் சாட்சி சொல்ல வேண்டுமென்று கேட்டார். சிவன் இந்த ஏமாற்றை வெளிப்படுத்தி, பிரம்மாவை பூமியில் எங்கும் வழிபடப்படாதவராக (அதனால்தான் பிரம்மா கோயில்கள் மிக அரிது) சபித்தார், மற்றும் தாழம் பூவை சிவ வழிபாட்டிலிருந்து விலக்கினார். பின்னர், தேவர்கள் இருவரின் வேண்டுகோளால், சிவன் அந்த தொடக்கமும் முடிவும் இல்லாத அக்னித்தூணை அருணாசல மலையாகவே திரட்டி நிலைநிறுத்தினார் — யாத்திரிகர்கள் அணுக முடியாத அந்த ஒளியை மலை வடிவில் அணுகி வழிபட முடியும் என்பதற்காக. இக்கதை திருவண்ணாமலையை தெய்வீக உணர்வின் வடிவமற்ற அக்னி மலை வடிவம் பெற்ற தளமாக நிறுவுகிறது.\n\nஇரண்டாவது ஸ்தல புராணம் கார்த்திகை தீபம் என்னும் பெரும் ஆண்டு விழாவை மையமாக்கியது. தமிழ் மாதம் கார்த்திகையின் (நவம்பர்-டிசம்பர்) பௌர்ணமி நாள் — கிருத்திகா நக்ஷத்திரத்துடன் இணையும் — 2,668 அடி உயரமான அருணாசல மலையின் உச்சியில் ஐந்து அடி விட்டம் கொண்ட மிகப் பெரிய கொப்பரையில் நெய், கற்பூரம், மற்றும் பஞ்சு நிரப்பப்பட்டு ஒரு பெரும் தீ ஏற்றப்படுகிறது. இத்தீ சுமார் பதினொரு நாட்கள் தொடர்ச்சியாக எரிந்து, ஐம்பது கிலோமீட்டர் தூரம் வரை எல்லா திசைகளிலும் காணப்படுகிறது. இதுவே சிவன் பிரம்மாவுக்கும் விஷ்ணுவுக்கும் காட்டிய அசல் ஜோதிர்லிங்கத்தின் உலகமய வெளிப்பாடாக கருதப்படுகிறது. அதே சமயம், கீழே கோயிலின் கருவறையில் பரணி தீபம் என்னும் ஐந்து-திரி புனித விளக்கு ஏற்றப்பட்டு, அதன் தீ ஒரு ஊர்வலத்தில் மலையின் மேலே கொண்டு செல்லப்பட்டு உச்சி தீபத்தை ஏற்றுகிறது. இக்கார்த்திகை தீபம் ஏற்றும் நிமிடத்தை லட்சக்கணக்கான பக்தர்கள் — திருவண்ணாமலையின் ஆண்டின் மிக பெரிய பக்தி கூட்டம் — கண்டு களிக்கின்றனர். இது இந்தியாவின் மிக பழமையான தொடர்ச்சியாக நிகழ்த்தப்படும் பொது சடங்குகளில் ஒன்று, இரண்டு ஆயிரம் ஆண்டுகளுக்கு முன்னரே சங்க இலக்கியத்தில் குறிப்பிடப்பட்டுள்ளது.\n\nமூன்றாவது ஸ்தல புராணம் கிரிவலம் — அருணாசல மலையை புனிதமாக சுற்றுவதை மையமாக்கியது. ஒவ்வொரு பௌர்ணமி இரவும், லட்சக்கணக்கான பக்தர்கள் (கார்த்திகை போன்ற சிறப்பு பௌர்ணமிகளில் பத்து லட்சத்திற்கும் அதிகமானோர்) மலையின் அடிவாரத்தைச் சுற்றி 14 கிலோமீட்டர் பிரதக்ஷிண பாதையில் நடக்கிறார்கள் — பாரம்பரியமாக வெறுங்காலால், மௌனமாக, சந்திரோதயத்திலிருந்து அடுத்த சந்திரோதயம் வரை ஒரு முழு சந்திர சுற்றுக்குள் நிறைவு செய்யப்படுகிறது. கிரிவலம் பாதை எட்டு திசை லிங்கங்களை (அஷ்ட லிங்கங்கள்) கடந்து செல்கிறது: இந்திர லிங்கம் (கிழக்கு), அக்னி லிங்கம் (தென்கிழக்கு), யம லிங்கம் (தெற்கு), நிருதி லிங்கம் (தென்மேற்கு), வருண லிங்கம் (மேற்கு), வாயு லிங்கம் (வடமேற்கு), குபேர லிங்கம் (வடக்கு), மற்றும் ஈஶான்ய லிங்கம் (வடகிழக்கு). ஒவ்வொரு லிங்கத்திலும் யாத்திரிகர்கள் தரிசனத்திற்காக நிற்கிறார்கள்; முழு சுற்று பிரபஞ்சத்தின் எட்டு திசைகளையும் தரிசித்ததற்கு இணையான புண்ணியத்தை அளிக்கிறது. பௌர்ணமி கிரிவலம் ஜோதிட தோஷ நிவர்த்திக்கு, நீண்டகால குடும்ப அல்லது வினை சிக்கல்களை தீர்க்க, மற்றும் — சூரிய உதயத்திற்கு முந்தைய ஒரு மணி நேரத்தில் நடப்பவர்களுக்கு — குருவாக அருணாசலருடன் நேரடி தொடர்பு பெற சிறப்பாக பலனளிக்கிறது. கிரிவலம் இந்தியாவின் மிக நீடித்த பொது பக்தி பயிற்சிகளில் ஒன்று.\n\nநான்காம் இறையியல் அடுக்கு மாணிக்கவாசகரின் திருவெம்பாவை இயற்றத்தை மையமாக்கியது. மாணிக்கவாசகர், பாண்டிய அரசருக்கு தலைமை மந்திரி மற்றும் தமிழ் ஶைவத்தின் நான்கு நாலாவரில் ஒருவர், மார்கழி புனித மாதத்தின்போது அருணாசலத்தின் கிரிவல பாதையில் உள்ள அதிக அண்ணாமலையில் ஆதி அருணாசலேஸ்வரர் திருக்கோயிலில் தங்கியிருந்தார். மார்கழி மாதம் தமிழ் பெண்கள் விடியலுக்கு முன் நீராடி பாவை நோன்பு (ஒரு மாத பக்தி விரதம்) அனுஷ்டிக்கும் காலம் என்பதால், மாணிக்கவாசகர் அப்பெண்கள் விடிவதற்குமுன் நீராடி பாட ஏற்றதாக திருவெம்பாவையின் இருபது பாசுரங்களை இங்கே இயற்றினார். அருணாசலத்தை சிவனாகவே — அதன் முடிவற்ற ஜோதிர்லிங்க வடிவில் — கண்டறிந்து, அவர் தமது இயற்றத்தை 'ஆதியும் அந்தமும் இல்லா அருட்பெரும் ஜோதியே' என்று அமர வரிகளால் தொடங்கினார். இப்பாசுரம் இப்போது தமிழ் உலகின் கோயில்களிலும் வீடுகளிலும் பொறிக்கப்பட்டுள்ளது; இது திருவாசகத்தின் மிக ஆழமான தத்துவ கூற்றுக்களில் ஒன்று. திருவெம்பாவை பாசுரங்கள் மார்கழி மாதம் ஒவ்வொரு விடியலிலும் தமிழ்நாட்டின் ஒவ்வொரு சிவாலயத்திலும் பாடப்படுகின்றன; அப்பாரம்பரியம் தாய்லாந்து அரச நீதிமன்றத்திற்கும் பயணித்தது, அங்கே தாய் அரசரின் முடிசூட்டு விழாவின்போது இப்பாசுரங்கள் இன்றும் ஓதப்படுகின்றன. இயற்றிய தளத்தில் ஒரு தனி மாணிக்கவாசகர் சந்நிதி கட்டப்பட்டுள்ளது.\n\nஐந்தாம் இறையியல் அடுக்கு திருவண்ணாமலையை 63 நாயன்மார் விதிமுறையில் நிலைநிறுத்துகிறது. பெரிய புராணத்தின்படி 63 நாயன்மார்களில் ஒருவரான நமிநந்தி அடிகள் நாயனார் நேரடியாக இக்கோயிலுடன் தொடர்புடையவர். ஏழை பக்தராக, கோயில் விளக்குகளை ஏற்ற நெய் வாங்க பணமில்லாதவர், அவர் நெய்க்கு பதிலாக தண்ணீரால் விளக்குகளை ஏற்ற முயன்றார். அவரது தூய பக்தியால், தண்ணீரே அற்புதமாக நெய்யாக ஆகி எரிந்தது, மற்றும் கோயில் முழுவதுமாக ஒளிபெற்றது. இந்த அற்புதம் நமிநந்தி அடிகளின் 63 நாயன்மார்களுள் நிலையை நிறுவியது. கூடுதலாக, நான்கு நாலாவரும் — சம்பந்தர், அப்பர், சுந்தரர், மற்றும் மாணிக்கவாசகர் — இக்கோயிலைப் பாடினர்: சம்பந்தர் திருவண்ணாமலை மேல் இரண்டு தேவாரப் பதிகங்களைப் பாடினார்; அப்பர் அருணாசலேஸ்வரர் மேல் தமது பதிகத்தை இயற்றினார்; சுந்தரர் இக்கோயிலை தமது திருத்தொண்டர் தொகை யாத்திரை புவியியலில் சேர்த்தார்; மற்றும் மாணிக்கவாசகரின் திருவெம்பாவை, குறிப்பிட்டதுபோல, இங்கே இயற்றப்பட்டது. இதனால் திருவண்ணாமலை நான்கு நாலாவராலும் பாடப்பட்ட ஒரு சில கோயில்களில் ஒன்றாக நிற்கிறது.\n\nஆறாம் இறையியல் அடுக்கு திருவண்ணாமலையை நவீன இந்திய ஆன்மிக வரலாற்றின் மிக பெரிய ரிஷிகளில் ஒருவரான ஶ்ரீ ரமண மகரிஷியின் (1879-1950) இருப்பிடமாக அத்வைத வேதாந்தத்தின் உலகளாவிய மையமாக நிறுவுகிறது. ரமண மகரிஷி 1896-ல் பதினாறு வயது சிறுவனாக திருவண்ணாமலைக்கு வந்தார், 'அருணாசலம் என்னை அழைக்கிறது' என்ற மறை-அனுபவத்தால் ஈர்க்கப்பட்டு. அவர் தமது வாழ்வின் மீதமுள்ள 54 ஆண்டுகளை மலையின் அடிவாரத்தில் கழித்தார் — முதலில் கோயிலின் பாதாள லிங்க குகையில், பின்னர் மலைப்பக்க விருபாக்ஷ குகையில், இறுதியில் தென் அடிவாரத்தில் ரமணாஶ்ரமத்தில். அவரது மைய போதனை — அருணாசலம் ஒரு மலை மட்டுமல்ல, சிவனின் தூய உணர்வு வடிவம் என்றும், 'நான் யார்' என்ற ஆத்ம விசாரணை பயிற்சி மூலம் ஆத்மாவின் நேரடி உணர்தல் கிடைக்கும் என்றும் — உலகின் ஒவ்வொரு கண்டத்திலுமிருந்து பக்தர்களையும் தேடுநர்களையும் ஈர்த்துள்ளது. ரமண மகரிஷி அருணாசலத்தையே குருவாக அடையாளப்படுத்தினார், மற்றும் அவர் இயற்றிய அருணாசலப் பஞ்சரத்தினம் தமிழ் மொழியில் மிக அன்பான நவீன பக்தி இயற்றங்களில் ஒன்று.\n\nகட்டிடக்கலை அடிப்படையில் இக்கோயில் இந்தியாவின் மிக பெரிய கோயில்களில் ஒன்று. 25 ஏக்கர் வளாகம் ஏழு பிராகாரங்களாக (செங்குத்து சுற்றுவட்டங்கள்) பல வம்சங்களால் கட்டப்பட்டுள்ளது: உள் இரண்டு பிராகாரங்கள் 9-12-ம் நூற்றாண்டுகளில் பாண்டிய மன்னர்களால்; வெளிப்புற பிராகாரங்கள் சோழர்களால் (11-13-ம் நூற்றாண்டு) மற்றும் பின்னர் கர்நாடகத்தின் ஹோய்சள மன்னர்களால் (13-ம் நூற்றாண்டு) சேர்க்கப்பட்டன; 217 அடி உயரமான பெரும் ராஜகோபுரம் 16-ம் நூற்றாண்டில் விஜயநகர பேரரசின் கிருஷ்ணதேவராயரால் கட்டப்பட்டது, இந்தியாவின் மிக உயரமான கோபுரங்களில் ஒன்று. வளாகம் விஜயநகர காலத்தில் கட்டப்பட்ட புகழ்பெற்ற ஆயிரம்-தூண் மண்டபம், பிரம்ம தீர்த்தம் மற்றும் ஶிவ கங்கை தீர்த்தக் குளங்கள், 360 பெயரிடப்பட்ட உபதீர்த்தங்கள் (பாரம்பரிய சந்திர வருடத்தின் ஒவ்வொரு நாளுக்கும் ஒன்று), மற்றும் ரமண மகரிஷி முதலில் சமாதியில் அமர்ந்த பாதாள லிங்க குகை உட்பட எண்ணற்ற உபசந்நிதிகளைக் கொண்டுள்ளது. கருவறையில் உள்ள அக்னி லிங்கம் சிவனின் அக்னி வடிவத்தின் சுயம்பு (தானாகவே உதித்த) பிரதிநிதித்துவம், மற்றும் துணை சந்நிதியில் உன்னாமுலை அம்மையின் அக்னி யோனி அதே அக்னியின் ஏற்கும் பெண் பரிமாணத்தை பிரதிநிதித்துவப்படுத்துகிறது.\n\nபன்னிரண்டு நூற்றாண்டுகளுக்கும் மேலாக, திருவண்ணாமலை அருணாசலேஸ்வரர் தமிழ் ஶைவத்தின் முதன்மை இறையியல், சடங்கு, மற்றும் தத்துவ மையங்களில் ஒன்றாக நிற்கிறது — தெய்வீக உணர்வின் முடிவற்ற அக்னி மலை வடிவம் பெற்ற கோயில், நான்கு நாலாவரும் பாடிய கோயில், மாணிக்கவாசகர் திருவெம்பாவையை இயற்றிய இடம், நமிநந்தி அடிகள் தண்ணீரால் விளக்குகளை ஏற்றிய இடம், ஒவ்வொரு ஆண்டும் கார்த்திகை தீபம் எரியும் இடம், ஒவ்வொரு மாதமும் லட்சக்கணக்கானோர் கிரிவலம் செய்யும் இடம், ரமண மகரிஷி தமது இல்லம் கண்டறிந்த இடம். இது என்றும் அதுவே ஆகியிருக்கிறது — கடவுளாகிய மலை, என்றும் அணையாத தீ, தமிழ் ஶைவ புவியியலின் இதயத்தில் உள்ள புனித பிரதக்ஷிணம்.";

  window.TEMPLE_ENRICHMENT[226] = {
    sthala_purana_en: sthalaEn,
    sthala_purana_ta: sthalaTa,

    goddess_en: "Unnamulai Ammai (Apeetha Kuchambika) — the consort of Annamalaiyar, worshipped in her own separate shrine within the complex. She represents the receptive feminine dimension of the Agni Lingam (fire-lingam), embodied as the Agni Yoni. Devotees revere her as the maternal grace that receives and channels the infinite fire of Shiva.",
    goddess_ta: "உன்னாமுலை அம்மை (அபீத குசாம்பிகை) — அண்ணாமலையாரின் துணை தேவி, வளாகத்திற்குள் தமது தனி சந்நிதியில் வழிபடப்படுகிறார். அக்னி லிங்கத்தின் ஏற்கும் பெண் பரிமாணத்தை அக்னி யோனியாக பிரதிநிதித்துவப்படுத்துகிறார். சிவனின் முடிவற்ற அக்னியை ஏற்று வழிநடத்தும் தாய்-அருளாக பக்தர்களால் வணங்கப்படுகிறார்.",

    pushkarini_en: "Brahma Theertham and Shiva Ganga Theertham (the two main tanks within the complex) plus 360 named subsidiary tirthams — one for each day of the traditional lunar year. Pilgrims traditionally bathe in the Shiva Ganga Theertham before entering the main sanctum; the Brahma Theertham is associated with the founding narrative of Brahma's atonement after his falsehood before Shiva.",
    pushkarini_ta: "பிரம்ம தீர்த்தம் மற்றும் ஶிவ கங்கை தீர்த்தம் (வளாகத்திற்குள்ளுள்ள இரண்டு பெருங்குளங்கள்) மற்றும் 360 பெயரிடப்பட்ட உபதீர்த்தங்கள் — பாரம்பரிய சந்திர வருடத்தின் ஒவ்வொரு நாளுக்கும் ஒன்று. யாத்திரிகர்கள் பாரம்பரியமாக ஶிவ கங்கை தீர்த்தத்தில் நீராடி பின் கருவறையில் நுழைகின்றனர்; பிரம்ம தீர்த்தம் சிவனுக்கு முன் தமது பொய்யுரைத்த பிரம்மாவின் பிராயச்சித்த கதையுடன் தொடர்புடையது.",

    sthala_vriksha: {
      common_name_en: "Magizham (Bulletwood Tree)",
      common_name_ta: "மகிழம் மரம்",
      scientific_name: "Mimusops elengi",
      description_en: "The Magizham tree (Mimusops elengi), known in English as the Spanish Cherry or Bulletwood, is a medium-sized evergreen tree native to India and South Asia. It reaches 10–15 metres in height with a dense crown of glossy dark green leaves. Its small, cream-white star-shaped flowers are exceptionally fragrant — often described as one of the sweetest floral scents in Indian botanical tradition — and continue to release their perfume even after falling. The tree bears small edible orange berries. The wood is prized as one of the hardest and most durable in South Indian carpentry, traditionally used for temple beams and heirloom furniture.",
      description_ta: "மகிழம் மரம் (Mimusops elengi), ஆங்கிலத்தில் ஸ்பானிஷ் செர்ரி அல்லது புல்லெட்வுட் என்று அழைக்கப்படுவது, இந்தியா மற்றும் தென் ஆசியாவின் ஒரு நடுத்தர அளவிலான பசுமையான மரம். 10-15 மீட்டர் உயரம் வரை வளர்ந்து, மின்னும் அடர் பசுமை இலைகளின் அடர்ந்த மகுடம் கொண்டது. அதன் சிறிய கிரீம்-வெண்மை நட்சத்திர வடிவ மலர்கள் அசாதாரண நறுமணம் கொண்டவை — இந்திய தாவரவியல் மரபில் மிக இனிய மலர் நறுமணங்களில் ஒன்றாக விவரிக்கப்படுவது — மற்றும் விழுந்த பின்னும் நறுமணத்தை வெளியிடுகின்றன. மரம் சிறிய சாப்பிடத்தக்க ஆரஞ்சு பழங்களைத் தருகிறது. மரப்பொருள் தென்னிந்திய தச்சு வேலையில் மிக கடினமான மற்றும் நீடித்தவற்றில் ஒன்றாக மதிக்கப்படுகிறது, பாரம்பரியமாக கோயில் உத்தரங்களுக்கும் பரம்பரை மரச்சாமான்களுக்கும் பயன்படுத்தப்படுகிறது.",
      significance_en: "The Magizham tree at Arunachaleswarar Temple is theologically significant as the Sthala Vriksha of one of India's greatest Shaiva shrines. Its fragrant flowers are offered daily to Annamalaiyar and Unnamulai Ammai in ritual worship. In Tamil Shaiva tradition, the Magizham is considered auspicious for marriage — devotees seeking marital harmony offer its flowers and tie small wishing-cloths to the tree. The tree's association with Thiruvannamalai connects it to the broader Tamil Shaiva tradition of specific Sthala Vrikshas at Paadal Petra Sthalams, and its remarkable ability to retain fragrance in fallen flowers is often taken as a devotional metaphor for the enduring nature of true bhakti — devotion that continues to give even after the outer form has faded.",
      significance_ta: "அருணாசலேஸ்வரர் திருக்கோயிலின் மகிழம் மரம் இந்தியாவின் மிக முக்கியமான ஶைவ ஆலயங்களில் ஒன்றின் ஸ்தல விருக்ஷமாக இறையியல் ரீதியில் முக்கியமானது. அதன் நறுமண மலர்கள் தினமும் அண்ணாமலையார் மற்றும் உன்னாமுலை அம்மைக்கு சடங்கு வழிபாட்டில் அர்ப்பணிக்கப்படுகின்றன. தமிழ் ஶைவ பாரம்பரியத்தில், மகிழம் திருமணத்திற்கு சுபமாக கருதப்படுகிறது — திருமண இணக்கம் நாடும் பக்தர்கள் அதன் மலர்களை அர்ப்பணித்து மரத்தில் சிறிய விருப்ப-துணிகளைக் கட்டுகிறார்கள். திருவண்ணாமலையுடனான மரத்தின் தொடர்பு, பாடல் பெற்ற தலங்களில் குறிப்பிட்ட ஸ்தல விருக்ஷங்கள் என்ற பரந்த தமிழ் ஶைவ மரபுடன் இணைக்கிறது; மற்றும் விழுந்த மலர்களில் நறுமணத்தை தக்க வைத்துக்கொள்ளும் அதன் அசாதாரண திறமை, உண்மையான பக்தியின் நீடித்த தன்மைக்கு ஒரு பக்தி உருவகமாக அடிக்கடி எடுத்துக்கொள்ளப்படுகிறது — வெளிப் புற வடிவம் மறைந்த பின்னும் தொடர்ந்து தரும் பக்தி."
    },

    size_acres: 25,

    festivals_en: [
      "Karthigai Deepam (Nov-Dec) — the great flame festival on the full moon of Karthigai; massive beacon lit atop Arunachala Hill, visible for 50+ km; largest annual gathering",
      "Girivalam Poornima (monthly, full moon) — sacred 14 km barefoot circumambulation of Arunachala Hill; hundreds of thousands to over a million pilgrims each full moon",
      "Maha Shivaratri (Feb-Mar) — night-long worship with special abhishekam and all-night jagaran",
      "Thai Thiruvudal Utsavam (Jan-Feb) — the divine marital dispute-and-reconciliation of Annamalaiyar and Unnamulai",
      "Maasi Magam (Feb-Mar) — sacred bathing festival with theppam (float) procession on the temple tank",
      "Aani Thirumanjanam (Jun-Jul) — grand abhishekam festival during Aani month",
      "Margazhi Thiruvathirai (Dec-Jan) — commemorates Shiva's cosmic dance; Arudra Darshan",
      "Thiruvempavai Utsavam (Dec-Jan) — recitation of Manickavasakar's Thiruvempavai composed here; 20-day festival",
      "Navratri (Sep-Oct) — nine-night festival dedicated to Unnamulai Ammai",
      "Panguni Uttiram (Mar-Apr) — 10-day Brahmotsavam festival with chariot procession"
    ],
    festivals_ta: [
      "கார்த்திகை தீபம் (கார்த்திகை மாதம்) — அருணாசல மலை உச்சியில் கார்த்திகை பௌர்ணமியன்று ஏற்றப்படும் பெரும் தீ; 50+ கிமீ தூரம் காணப்படும்; ஆண்டின் மிக பெரிய கூட்டம்",
      "கிரிவலம் பௌர்ணமி (மாதம் தோறும்) — அருணாசல மலையின் புனித 14 கிமீ வெறுங்கால் பிரதக்ஷிணம்; ஒவ்வொரு பௌர்ணமியிலும் லட்சக்கணக்கானோர் முதல் பத்து லட்சத்திற்கும் மேலானோர்",
      "மகா ஶிவராத்திரி (மாசி மாதம்) — சிறப்பு அபிஷேகம் மற்றும் இரவு முழுவதும் ஜாகரணத்துடன் இரவு-நீள வழிபாடு",
      "தை திருவுடல் உற்சவம் (தை மாதம்) — அண்ணாமலையார் மற்றும் உன்னாமுலையின் தெய்வீக இல்லற ஊடலும் ஒற்றுமையும்",
      "மாசி மகம் (மாசி மாதம்) — கோயில் குளத்தில் தெப்ப ஊர்வலத்துடன் புனித நீராடல் விழா",
      "ஆனி திருமஞ்சனம் (ஆனி மாதம்) — ஆனி மாதத்தில் பெரும் அபிஷேக விழா",
      "மார்கழி திருவாதிரை (மார்கழி மாதம்) — சிவனின் பிரபஞ்ச நடனத்தை நினைவூட்டுதல்; ஆருத்ரா தரிசனம்",
      "திருவெம்பாவை உற்சவம் (மார்கழி மாதம்) — இங்கே இயற்றப்பட்ட மாணிக்கவாசகரின் திருவெம்பாவை ஓதுதல்; 20 நாள் விழா",
      "நவராத்திரி (புரட்டாசி மாதம்) — உன்னாமுலை அம்மைக்கு அர்ப்பணிக்கப்பட்ட ஒன்பது-இரவு விழா",
      "பங்குனி உத்திரம் (பங்குனி மாதம்) — தேர் ஊர்வலத்துடன் 10 நாள் பிரம்மோற்சவ விழா"
    ],

    town_ta: "திருவண்ணாமலை",
    coords_verified: true,

    naalvar_present: ["sambandar", "appar", "sundarar", "manickavasakar"],

    nayanmar_associations: [
      {
        nayanmar: "nami_nandi_adigal",
        role: "miracle_site",
        brief_en: "Nami Nandi Adigal's miracle of lighting lamps with water",
        brief_ta: "தண்ணீரால் விளக்குகளை ஏற்றிய நமிநந்தி அடிகள் நாயனாரின் அற்புதம்",
        story_en: "Nami Nandi Adigal Nayanar, one of the 63 Nayanmars, was a poor devotee at the Arunachaleswarar Temple who could not afford ghee to light the temple lamps. Rather than let the lamps remain unlit during the sacred hour, he brought water from the temple tank and attempted to fill the lamps with it. Through the sheer purity of his devotion, the water miraculously ignited and burned as brightly and as long as if it were the finest ghee. The temple was fully illuminated, and Shiva revealed himself to Nami Nandi Adigal in grace. This miracle established Nami Nandi Adigal's canonical place among the 63 Nayanmars, and his story remains one of the most beloved narratives in the Periya Puranam — a teaching that true devotion transforms even the most humble offering into the highest sacred act. His shrine at Thiruvannamalai continues to receive daily worship, and the temple lamps in his memory are lit every evening at dusk.",
        story_ta: "63 நாயன்மார்களில் ஒருவரான நமிநந்தி அடிகள் நாயனார், அருணாசலேஸ்வரர் திருக்கோயிலில் கோயில் விளக்குகளுக்கு நெய் வாங்க பணமில்லாத ஏழை பக்தராக இருந்தார். புனித நேரத்தில் விளக்குகள் அணைந்து போக விடாமல், அவர் கோயில் குளத்திலிருந்து தண்ணீரை எடுத்து விளக்குகளில் நிரப்ப முயன்றார். அவரது பக்தியின் தூய்மையால், தண்ணீரே அற்புதமாக நெய்யாக ஆகி — சிறந்த நெய்யைப் போலவே பிரகாசமாகவும் நீளமாகவும் — எரிந்தது. கோயில் முழுவதுமாக ஒளியேற்றப்பட்டது, மற்றும் சிவன் நமிநந்தி அடிகளிடம் அருள் காட்டினார். இந்த அற்புதம் நமிநந்தி அடிகளின் 63 நாயன்மார்களுள் விதிமுறை நிலையை நிறுவியது, மற்றும் அவரது கதை பெரிய புராணத்தின் மிக அன்பான கதைகளில் ஒன்றாக நிலைத்திருக்கிறது — உண்மையான பக்தி மிக அடக்கமான காணிக்கையை கூட உயர்ந்த புனித செயலாக மாற்றுகிறது என்ற போதனை."
      },
      {
        nayanmar: "manickavasakar",
        role: "composer",
        brief_en: "Manickavasakar composed the Thiruvempavai at Adi Annamalai on the Girivalam path",
        brief_ta: "கிரிவல பாதையில் அதி அண்ணாமலையில் மாணிக்கவாசகர் திருவெம்பாவையை இயற்றினார்",
        story_en: "Manickavasakar, chief minister to the Pandya king and one of the four Naalvar, stayed at the Adhi Arunachaleswarar Temple in Adi Annamalai (on the Girivalam path around the sacred hill) during the sacred Tamil month of Margazhi. Because Margazhi is the traditional season when Tamil women bathe before dawn and observe the pavai vrata (a month-long vow of devotion), Manickavasakar composed the twenty verses of the Thiruvempavai here so that the women could sing them during their pre-dawn bath. Recognising Arunachala as Shiva himself in his infinite jyotirlinga form, Manickavasakar opened his composition with the immortal invocation 'Aadhiyum andhamum illa arutperum jothiye' — 'O flame of grace without beginning or end.' This is one of the most philosophically profound utterances in the entire Thiruvasagam. The Thiruvempavai continues to be sung every dawn during Margazhi in every Shiva temple in Tamil Nadu, and the tradition also travelled to the Thai royal court, where the verses are recited at the coronation of the Thai king to this day.",
        story_ta: "பாண்டிய அரசருக்கு தலைமை மந்திரி மற்றும் தமிழ் ஶைவத்தின் நான்கு நாலாவரில் ஒருவரான மாணிக்கவாசகர், மார்கழி புனித மாதத்தின்போது புனித மலையைச் சுற்றியுள்ள கிரிவல பாதையில் உள்ள அதி அண்ணாமலையில் ஆதி அருணாசலேஸ்வரர் திருக்கோயிலில் தங்கியிருந்தார். மார்கழி மாதம் தமிழ் பெண்கள் விடியலுக்கு முன் நீராடி பாவை நோன்பு (ஒரு மாத பக்தி விரதம்) அனுஷ்டிக்கும் காலம் என்பதால், மாணிக்கவாசகர் அப்பெண்கள் விடிவதற்குமுன் நீராடி பாட ஏற்றதாக திருவெம்பாவையின் இருபது பாசுரங்களை இங்கே இயற்றினார். அருணாசலத்தை சிவனாகவே — அதன் முடிவற்ற ஜோதிர்லிங்க வடிவில் — கண்டறிந்து, அவர் தமது இயற்றத்தை 'ஆதியும் அந்தமும் இல்லா அருட்பெரும் ஜோதியே' என்று அமர வரிகளால் தொடங்கினார். இது முழு திருவாசகத்தின் மிக ஆழமான தத்துவ கூற்றுக்களில் ஒன்று. திருவெம்பாவை மார்கழி மாதம் ஒவ்வொரு விடியலிலும் தமிழ்நாட்டின் ஒவ்வொரு சிவாலயத்திலும் இன்றும் பாடப்படுகிறது; அப்பாரம்பரியம் தாய்லாந்து அரச நீதிமன்றத்திற்கும் பயணித்தது."
      },
      {
        nayanmar: "sambandar",
        role: "pilgrim_poet",
        brief_en: "Sambandar sang two Thevaram padigams on Thiruvannamalai",
        brief_ta: "திருஞானசம்பந்தர் திருவண்ணாமலை மேல் இரண்டு தேவாரப் பதிகங்கள் பாடினார்",
        story_en: "Thirugnana Sambandar, the child prodigy poet-saint of Tamil Shaivism, visited Thiruvannamalai during his pilgrimage and composed TWO Thevaram padigams here, a rare distinction indicating the special significance he saw in this Agni Sthalam. His hymns invoke Annamalaiyar as the infinite fire that took the form of a mountain, and describe the sacred pradakshina around the hill — one of the earliest textual references to the Girivalam tradition. Sambandar's Thevaram compositions established Thiruvannamalai firmly within the canonical 275 Paadal Petra Sthalams and cemented its status as one of the pre-eminent pilgrimage destinations of Tamil Shaivism.",
        story_ta: "தமிழ் ஶைவத்தின் இளம் சிறுவப் பாவலரான திருஞானசம்பந்தர் தமது யாத்திரையின்போது திருவண்ணாமலையைத் தரிசித்து இங்கே இரண்டு தேவாரப் பதிகங்களை இயற்றினார் — இந்த அக்னி ஸ்தலத்தில் அவர் கண்ட சிறப்பை அறிவிக்கும் அரிய தனித்துவம். அவரது பதிகங்கள் அண்ணாமலையாரை மலை வடிவம் பெற்ற முடிவற்ற அக்னியாக விளித்து, மலையைச் சுற்றியுள்ள புனித பிரதக்ஷிணத்தை விவரிக்கின்றன — கிரிவல பாரம்பரியத்திற்கான மிக பழமையான உரை குறிப்புகளில் ஒன்று. சம்பந்தரின் தேவாரப் பாடல்கள் திருவண்ணாமலையை 275 பாடல் பெற்ற தலங்களில் நிலைநிறுத்தி, தமிழ் ஶைவத்தின் முதன்மை யாத்திரை தலங்களில் ஒன்றாக அதன் நிலையை உறுதிப்படுத்தின."
      },
      {
        nayanmar: "appar",
        role: "pilgrim_poet",
        brief_en: "Thirunavukkarasar (Appar) composed his Thevaram padigam on Arunachaleswarar",
        brief_ta: "திருநாவுக்கரசர் (அப்பர்) அருணாசலேஸ்வரர் மேல் தேவாரப் பதிகம் இயற்றினார்",
        story_en: "Thirunavukkarasar (Appar), the senior of the three Moovar, composed his Thevaram padigam on Arunachaleswarar. Having himself been cured by Shiva's grace of an incurable stomach ailment earlier in his life, Appar approached the divine with a devotional register of gratitude and surrender. His padigam on Thiruvannamalai dwells on Annamalaiyar as the compassionate lord who takes the form of a mountain so that the seeker — who cannot approach the formless infinite — may still have a place to lay his head. Appar's contribution sealed the temple's status as a three-Moovar Sthalam alongside Sambandar and Sundarar.",
        story_ta: "மூவரில் மூத்தவரான திருநாவுக்கரசர் (அப்பர்) அருணாசலேஸ்வரர் மேல் தமது தேவாரப் பதிகத்தை இயற்றினார். தமது வாழ்க்கையின் முற்பகுதியில் தீராத வயிற்று நோயிலிருந்து சிவனின் திருவருளால் குணமடைந்த அனுபவம் கொண்ட அப்பர், நன்றி மற்றும் சரணாகதியின் பக்தி நோக்கில் இறைவனை அணுகினார். திருவண்ணாமலை மேல் அவரது பதிகம் அண்ணாமலையாரை — வடிவமற்ற முடிவற்றதை அணுக முடியாத தேடுபவனுக்கும் தலை சாய்க்க இடம் தருவதற்காக மலை வடிவம் கொண்ட கருணை மிகுந்த இறைவனாக — நினைந்து பாடுகிறது. அப்பரின் பங்களிப்பு சம்பந்தர் மற்றும் சுந்தரருடன் சேர்ந்து இக்கோயிலின் மூவர் ஸ்தல நிலையை உறுதிப்படுத்தியது."
      },
      {
        nayanmar: "sundarar",
        role: "pilgrim_poet",
        brief_en: "Sundaramoorthy Nayanar sang Thiruvannamalai in his Thevaram compositions",
        brief_ta: "சுந்தரமூர்த்தி நாயனார் தமது தேவார இயற்றங்களில் திருவண்ணாமலையைப் பாடினார்",
        story_en: "Sundaramoorthy Nayanar (Sundarar), the youngest of the three Moovar and the beloved-of-Shiva who wrote the Thiruthondar Thogai (the 10-verse hymn listing all 63 Nayanmars), sang Thiruvannamalai in his own Thevaram composition. He included the temple in his devotional geography of pilgrimage and praised Annamalaiyar as one of the pre-eminent Shaiva sacred destinations. Along with Sambandar, Appar, and Manickavasakar, Sundarar's pilgrimage to Thiruvannamalai confirmed the temple's rare status as a four-Naalvar Sthalam — hymned by all four foundational saints of Tamil Shaivism — a distinction shared by only a very small subset of the 275 Paadal Petra Sthalams.",
        story_ta: "மூவரில் இளையவரும், சிவனின் அன்புத் தோழருமான, திருத்தொண்டர் தொகையை (63 நாயன்மார்கள் அனைவரையும் பட்டியலிடும் 10-பாசுர பாடல்) இயற்றிய சுந்தரமூர்த்தி நாயனார் (சுந்தரர்) தமது சொந்த தேவார இயற்றத்தில் திருவண்ணாமலையைப் பாடினார். அவர் இக்கோயிலைத் தமது யாத்திரை பக்தி புவியியலில் சேர்த்து, அண்ணாமலையாரை முதன்மை ஶைவ புனித தளங்களில் ஒன்றாகப் புகழ்ந்தார். சம்பந்தர், அப்பர், மாணிக்கவாசகர் ஆகியோருடன் சேர்ந்து, சுந்தரரின் திருவண்ணாமலை யாத்திரை இக்கோயிலின் அரிய நான்கு-நாலாவர் ஸ்தல நிலையை உறுதிப்படுத்தியது — தமிழ் ஶைவத்தின் அனைத்து நான்கு அடிப்படை புனிதர்களாலும் பாடப்பட்ட நிலை — 275 பாடல் பெற்ற தலங்களில் மிகச் சிறிய பகுதி மட்டுமே பகிர்ந்து கொள்ளும் தனித்துவம்."
      }
    ],

    cross_tradition_en: [
      { tradition: "pancha_bhoota", story: "Thiruvannamalai Arunachaleswarar is the AGNI STHALAM among the five Pancha Bhoota Sthalams — the five temples representing the five great elements of the cosmos. The five and their elements are: Chidambaram Nataraja (Akasha / space), Thiruvanaikkaval Jambukeswarar (Ap / water), Thiruvannamalai Arunachaleswarar (Agni / fire), Sri Kalahasti (Vayu / air), and Kanchipuram Ekambareswarar (Prithvi / earth). Arunachaleswarar's Agni identity is embodied in the sanctum's Agni Lingam (self-manifested fire-lingam), in the Karthigai Deepam beacon lit atop the Arunachala Hill each year, and in the theological identification of the mountain itself as the frozen form of the infinite jyotirlinga fire that Shiva revealed to Brahma and Vishnu. To visit Arunachaleswarar is to worship the element of fire in its highest cosmic form — the fire that is neither burning nor being burned, but the pure light of divine consciousness itself." },
      { tradition: "shakta", story: "Unnamulai Ammai, the consort deity at Arunachaleswarar Temple, is worshipped in her own separate shrine within the complex and holds a distinctive Shakta identity. She is also revered as Apeetha Kuchambika, and her iconography as the Agni Yoni — the receptive feminine dimension of the Agni Lingam — represents the theological principle that fire (agni), the most active and transformative of the five elements, cannot manifest without the receptive vessel that shapes and channels it. Devotees seeking marital harmony, fertility, and the resolution of feminine health concerns come to Unnamulai Ammai as their principal Shakta protector. The Thai Thiruvudal Utsavam in January-February enacts the divine marital dispute-and-reconciliation of Annamalaiyar and Unnamulai — one of the most beloved festival narratives in Tamil Shaivism, drawing devotees especially of the Shakta tradition." },
      { tradition: "sri_vaishnava", story: "Vaishnava tradition honours Thiruvannamalai through the founding narrative of Shiva's jyotirlinga manifestation to Vishnu. In the sthala purana, when Brahma and Vishnu disputed supremacy, Shiva revealed himself as an infinite column of fire and challenged them to find its beginning or end. Vishnu took the form of a Varaha (boar) and burrowed downward through the earth in a genuine effort. Though unable to find the base, Vishnu returned honestly, and Shiva rewarded his truthfulness. This narrative is one of the few in the entire Shaiva canon where Vishnu is honoured as truthful and worthy — establishing Thiruvannamalai as a rare Shaiva-Vaishnava bridge site. Sri Vaishnavas honour the Varaha-avatara aspect of the founding narrative, and the temple town includes several nearby Vaishnava shrines that pilgrims of both traditions visit." },
      { tradition: "vaidika", story: "Thiruvannamalai holds a foundational Vaidika identity through the Brahma-Vishnu contest narrative, which is one of the most important theological texts on the primacy of Shiva as the source of both creation and preservation. The narrative also establishes why Brahma is worshipped in almost no temples on earth — his falsehood before Shiva earned him that curse — and thereby explains a striking feature of Hindu ritual geography. Additionally, the temple houses one of the most active traditions of Vedic recitation among South Indian temples: the temple's Nithya Puja follows the Kamika Agama with substantial Vedic overlay, and the temple's dawn recitation of the Sri Rudram is one of the oldest continuous Vedic practices in the Tamil country. The 360 named theerthams within the complex are traditionally associated with the 360 days of the sidereal lunar year in Vedic cosmology." },
      { tradition: "other", story: "In the twentieth and twenty-first centuries, Thiruvannamalai has become one of the world's principal centres of contemporary Advaita Vedanta through the life and teaching of Bhagavan Sri Ramana Maharshi (1879-1950). Ramana came to Thiruvannamalai as a sixteen-year-old boy in 1896, drawn by the mystical experience that Arunachala was calling him, and spent the remaining fifty-four years of his life at the foot of the hill — first in the temple's Patala Lingam cave, then at Virupaksha Cave, and finally at Ramanashram at the southern base of the mountain. His central teaching — that Arunachala is not merely a mountain but the visible form of Shiva as pure consciousness, and that the practice of self-enquiry (atma-vichara) through the question 'Who am I?' leads to direct realisation of the Self — has drawn devotees from every continent. Ramana's Five Hymns to Arunachala are among the most beloved modern Tamil devotional works. Additionally, the 14th-century Tamil poet Arunagirinathar composed his celebrated Tiruppukal here — over 1,300 devotional songs to Muruga and Shiva, forming one of the most important Kaumara (Muruga-worship) textual corpora — establishing Thiruvannamalai as a significant site for Kaumara tradition as well." }
    ],
    cross_tradition_ta: [
      { tradition: "pancha_bhoota", story: "திருவண்ணாமலை அருணாசலேஸ்வரர் ஐந்து பஞ்ச பூத ஸ்தலங்களில் அக்னி ஸ்தலம் — பிரபஞ்சத்தின் ஐந்து பெரும் தத்துவங்களை பிரதிநிதித்துவப்படுத்தும் ஐந்து ஆலயங்கள். ஐவரும் அவற்றின் தத்துவங்கள்: சிதம்பரம் நடராஜர் (ஆகாசம்), திருவானைக்காவல் ஜம்புகேஸ்வரர் (அப்பு/நீர்), திருவண்ணாமலை அருணாசலேஸ்வரர் (அக்னி/நெருப்பு), ஶ்ரீ காளஹஸ்தி (வாயு/காற்று), மற்றும் காஞ்சி ஏகாம்பரேஸ்வரர் (பிருதிவி/பூமி). அருணாசலேஸ்வரரின் அக்னி அடையாளம் கருவறையின் அக்னி லிங்கத்திலும் (சுயம்பு அக்னி-லிங்கம்), ஒவ்வொரு ஆண்டும் அருணாசல மலை உச்சியில் ஏற்றப்படும் கார்த்திகை தீப ஜோதியிலும், மலையையே சிவன் பிரம்மாவுக்கும் விஷ்ணுவுக்கும் வெளிப்படுத்திய முடிவற்ற ஜோதிர்லிங்க அக்னியின் திண்ம வடிவமாகக் கருதும் இறையியலிலும் உருவகப்படுத்தப்பட்டுள்ளது." },
      { tradition: "shakta", story: "அருணாசலேஸ்வரர் திருக்கோயிலின் துணை தேவியான உன்னாமுலை அம்மை வளாகத்திற்குள் தமது தனி சந்நிதியில் வழிபடப்படுகிறார், தனித்துவமான ஶாக்த அடையாளத்தை கொண்டுள்ளார். அபீத குசாம்பிகை என்றும் மதிக்கப்படுகிறார், மற்றும் அக்னி யோனியாக அவரது சின்னம் — அக்னி லிங்கத்தின் ஏற்கும் பெண் பரிமாணம் — அக்னி (நெருப்பு), ஐந்து தத்துவங்களில் மிக சுறுசுறுப்பான மற்றும் மாற்றத்தை ஏற்படுத்தும் தத்துவம், அதை வடிவப்படுத்தி வழிநடத்தும் ஏற்கும் கலசம் இல்லாமல் வெளிப்பட முடியாது என்ற இறையியல் தத்துவத்தை பிரதிநிதித்துவப்படுத்துகிறது. திருமண இணக்கம், மகப்பேறு, மற்றும் பெண்-சார்ந்த ஆரோக்கிய பிரச்சினைகளின் தீர்வு நாடும் பக்தர்கள் உன்னாமுலை அம்மையை தமது முதன்மை ஶாக்த பாதுகாவலராக நாடி வருகின்றனர்." },
      { tradition: "sri_vaishnava", story: "வைஷ்ணவ மரபு விஷ்ணுவுக்கு சிவனின் ஜோதிர்லிங்க வெளிப்பாட்டின் அடிப்படை கதை மூலம் திருவண்ணாமலையை கௌரவிக்கிறது. ஸ்தல புராணத்தில், பிரம்மாவும் விஷ்ணுவும் மேலான்மையைக் குறித்து விவாதித்தபோது, சிவன் தமது தொடக்கமும் முடிவும் இல்லாத அக்னித்தூணாக வெளிப்பட்டு அதன் ஆரம்பம் அல்லது முடிவைக் கண்டறிய அவர்களை சவால் விட்டார். விஷ்ணு வராகமாக (பன்றி) உருமாற்றி பூமி வழியாக நேர்மையான முயற்சியில் அடி நோக்கி நுழைந்தார். அடியை கண்டறிய முடியாதபோதிலும், விஷ்ணு நேர்மையாக திரும்பினார், மற்றும் சிவன் அவரது உண்மைத்தன்மைக்கு வெகுமதி அளித்தார். இக்கதை முழு ஶைவ விதிமுறையிலும் விஷ்ணு நேர்மையானவராகவும் தகுதியானவராகவும் கௌரவிக்கப்படும் ஒரு சில கதைகளில் ஒன்று — திருவண்ணாமலையை ஒரு அரிய ஶைவ-வைஷ்ணவ இணைப்புத் தளமாக நிறுவுகிறது." },
      { tradition: "vaidika", story: "திருவண்ணாமலை பிரம்மா-விஷ்ணு போட்டி கதையின் மூலம் அடிப்படை வைதிக அடையாளத்தை கொண்டது — படைப்பு மற்றும் காப்பாளர் இருவரின் மூலமாக சிவனின் மேலான்மையை நிறுவும் இறையியல் கூற்றுகளில் மிக முக்கியமான ஒன்று. இக்கதை பூமியில் எந்த கோயிலிலும் பிரம்மா ஏன் கிட்டத்தட்ட வழிபடப்படுவதில்லை என்பதையும் நிறுவுகிறது — சிவனுக்கு முன் தமது பொய்யுரை அச்சாபத்தை அவருக்கு தந்தது. கூடுதலாக, தென்னிந்திய கோயில்களில் மிக செயலூக்கமான வேத ஓதுதல் மரபுகளில் ஒன்றை இக்கோயில் கொண்டுள்ளது: கோயிலின் நித்தியப் பூஜை காமிக ஆகமத்தை பின்பற்றி, கணிசமான வேத மேல்-அமைப்புடன் நடைபெறுகிறது. வளாகத்திற்குள்ளுள்ள 360 பெயரிடப்பட்ட தீர்த்தங்கள் வேத பிரபஞ்சவியலில் நாட்சத்திரக் காலெண்டரின் 360 நாட்களுடன் பாரம்பரியமாக தொடர்புடையவை." },
      { tradition: "other", story: "20-ம் மற்றும் 21-ம் நூற்றாண்டுகளில், பகவான் ஶ்ரீ ரமண மகரிஷியின் (1879-1950) வாழ்க்கை மற்றும் போதனை மூலம் திருவண்ணாமலை உலகின் முதன்மை சமகால அத்வைத வேதாந்த மையங்களில் ஒன்றாக ஆகியுள்ளது. ரமணர் 1896-ல் பதினாறு வயது சிறுவனாக 'அருணாசலம் என்னை அழைக்கிறது' என்ற மறை-அனுபவத்தால் ஈர்க்கப்பட்டு திருவண்ணாமலைக்கு வந்தார், மற்றும் தமது வாழ்வின் மீதமுள்ள 54 ஆண்டுகளை மலையின் அடிவாரத்தில் கழித்தார் — முதலில் கோயிலின் பாதாள லிங்க குகையில், பின்னர் விருபாக்ஷ குகையில், இறுதியில் மலையின் தென் அடிவாரத்தில் ரமணாஶ்ரமத்தில். அவரது மைய போதனை — அருணாசலம் ஒரு மலை மட்டுமல்ல, சிவனின் தூய உணர்வு வடிவம் என்றும், 'நான் யார்' என்ற ஆத்ம விசாரணை பயிற்சி மூலம் ஆத்மாவின் நேரடி உணர்தல் கிடைக்கும் என்றும் — ஒவ்வொரு கண்டத்திலுமிருந்து பக்தர்களை ஈர்த்துள்ளது. கூடுதலாக, 14-ம் நூற்றாண்டு தமிழ் புலவர் அருணகிரிநாதர் தமது புகழ்பெற்ற திருப்புகழை இங்கே இயற்றினார் — முருகனுக்கும் சிவனுக்கும் 1,300-க்கும் மேற்பட்ட பக்திப் பாடல்கள், மிக முக்கியமான கௌமார (முருக வழிபாடு) உரை தொகுப்புகளில் ஒன்று — திருவண்ணாமலையை கௌமார பாரம்பரியத்திற்கும் ஒரு முக்கிய தளமாக நிறுவுகிறது." }
    ]
  };

  console.log('[Session 1C.8] Thiruvannamalai Arunachaleswarar (sno 226) enrichment loaded with anchor-level content.');
  console.log('[Session 1C.8] Sthala Purana length: ' + sthalaEn.length + ' chars (English), ' + sthalaTa.length + ' chars (Tamil)');
  console.log('[Session 1C.8] Sthala Vriksha: Magizham (Mimusops elengi) with fragrant flower symbolism');
  console.log('[Session 1C.8] Nayanmar associations: 5 (Nami Nandi Adigal miracle, Manickavasakar composer, Sambandar/Appar/Sundarar pilgrim_poet)');
  console.log('[Session 1C.8] Cross-tradition links: 5 (Pancha Bhoota/Agni, Shakta, Sri Vaishnava, Vaidika, Ramana/Advaita+Arunagirinathar/Kaumara)');
  console.log('[Session 1C.8] Festivals: 10 (bilingual)');
  console.log('[Session 1C.8] Naalvar override: 4/4 (Sambandar, Appar, Sundarar, Manickavasakar - Thiruvempavai composed here)');

  setTimeout(function() {
    if (typeof window.showTempleInPanel === 'function') {
      var panel = document.getElementById('detail-panel');
      var contentDiv = document.getElementById('detail-panel-content');
      if (panel && panel.classList.contains('has-content') && contentDiv) {
        var nameEl = contentDiv.querySelector('.dp-name');
        if (nameEl && nameEl.textContent.indexOf('#226') !== -1) {
          window.showTempleInPanel(226);
          console.log('[Session 1C.8] Re-rendered current Thiruvannamalai panel with new content');
        }
      }
    }
  }, 500);
})();
