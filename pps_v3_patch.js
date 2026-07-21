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
/* SESSION_1B2_LOADED — Tab Structure + Rendering (Nov 2026)   */
/* Right panel tabs + Leaflet popup simplification              */
/* ============================================================ */
(function(){
  window.SESSION_1B2_LOADED = true;
  console.log("[Session 1B.2] Loading tab structure + rendering...");
  
  // ============================================================
  // CSS for right panel content, tabs, simplified popup
  // ============================================================
  var style = document.createElement("style");
  style.textContent = [
    "#detail-panel-content { display: flex; flex-direction: column; height: 100%; }",
    ".dp-header { background: linear-gradient(135deg, #D2691E 0%, #A0522D 100%); color: #fff; padding: 20px 24px 16px; }",
    ".dp-header .dp-name { font-family: 'Noto Serif Tamil', serif; font-size: 1.3rem; font-weight: 700; line-height: 1.25; margin-bottom: 4px; }",
    ".dp-header .dp-name-ta { font-family: 'Noto Serif Tamil', serif; font-size: 0.95rem; color: #FFE4B5; font-weight: 500; margin-bottom: 8px; line-height: 1.3; }",
    ".dp-header .dp-loc { font-size: 0.85rem; opacity: 0.95; margin-bottom: 3px; }",
    ".dp-header .dp-region { font-size: 0.82rem; color: #FFD700; font-weight: 600; margin-bottom: 12px; }",
    ".dp-badges { display: flex; gap: 6px; flex-wrap: wrap; }",
    ".dp-badge { display: inline-flex; align-items: center; gap: 4px; padding: 3px 9px; background: rgba(255,255,255,0.15); border: 1.5px solid rgba(255,215,0,0.4); border-radius: 12px; font-size: 0.7rem; font-weight: 600; color: #FFD700; }",
    ".dp-coord-row { padding: 12px 20px 8px; background: #FFF8E7; border-bottom: 1px solid #e8dcc0; font-size: 0.78rem; }",
    ".dp-coord-value { font-family: monospace; color: #2A1810; font-weight: 600; margin-right: 8px; }",
    ".dp-coord-copy { display: inline-block; padding: 2px 8px; background: #fff; border: 1px solid #e8dcc0; border-radius: 4px; cursor: pointer; font-size: 0.72rem; color: #A0522D; font-weight: 600; }",
    ".dp-coord-copy:hover { background: #D2691E; color: #fff; border-color: #D2691E; }",
    ".dp-map-btns { display: flex; gap: 6px; padding: 6px 20px 12px; background: #FFF8E7; border-bottom: 1px solid #e8dcc0; }",
    ".dp-map-btn { flex: 1; padding: 6px 4px; background: #fff; border: 1.5px solid #e8dcc0; border-radius: 5px; font-size: 0.72rem; font-weight: 600; color: #4a3528; cursor: pointer; text-align: center; text-decoration: none; transition: all 0.15s; display: flex; flex-direction: column; align-items: center; gap: 2px; }",
    ".dp-map-btn:hover { border-color: #D2691E; color: #A0522D; background: #FFF8E7; }",
    ".dp-map-btn-icon { font-size: 1rem; }",
    ".dp-tabs { display: flex; background: #fff; border-bottom: 2px solid #e8dcc0; position: sticky; top: 0; z-index: 5; }",
    ".dp-tab { flex: 1; padding: 12px 6px; text-align: center; font-size: 0.78rem; font-weight: 600; color: #7a6b5a; cursor: pointer; border-bottom: 3px solid transparent; transition: all 0.15s; display: flex; flex-direction: column; align-items: center; gap: 2px; }",
    ".dp-tab:hover { color: #A0522D; background: #FFF8E7; }",
    ".dp-tab.active { color: #D2691E; border-bottom-color: #D2691E; background: #FFF8E7; }",
    ".dp-tab-icon { font-size: 1.1rem; }",
    ".dp-body { flex: 1; overflow-y: auto; padding: 18px 22px; }",
    ".dp-section { margin-bottom: 18px; }",
    ".dp-section-title { font-size: 0.95rem; font-weight: 700; color: #A0522D; margin-bottom: 8px; display: flex; align-items: center; gap: 6px; }",
    ".dp-section-content { font-size: 0.88rem; color: #2A1810; line-height: 1.65; }",
    ".dp-meta-grid { display: grid; grid-template-columns: auto 1fr; gap: 8px 14px; font-size: 0.85rem; margin: 10px 0; }",
    ".dp-meta-label { color: #7a6b5a; font-weight: 600; }",
    ".dp-meta-value { color: #2A1810; }",
    ".dp-festival-list { list-style: none; padding: 0; margin: 6px 0; }",
    ".dp-festival-list li { padding: 4px 0; font-size: 0.85rem; color: #2A1810; border-bottom: 1px solid #f0e8d5; }",
    ".dp-festival-list li:last-child { border-bottom: none; }",
    ".dp-nayanmar-item { padding: 10px 12px; background: #FFF8E7; border-left: 3px solid #D2691E; border-radius: 4px; margin-bottom: 10px; }",
    ".dp-nayanmar-name { font-weight: 700; color: #A0522D; margin-bottom: 3px; font-size: 0.9rem; }",
    ".dp-nayanmar-role { display: inline-block; padding: 1px 8px; background: #D2691E; color: #fff; border-radius: 8px; font-size: 0.7rem; margin-left: 6px; font-weight: 600; }",
    ".dp-nayanmar-story { font-size: 0.82rem; color: #4a3528; line-height: 1.55; margin-top: 6px; }",
    ".dp-crosstrad-item { padding: 8px 10px; margin-bottom: 8px; background: #F5F8FE; border-left: 3px solid #1E5AA0; border-radius: 3px; font-size: 0.83rem; color: #2A1810; line-height: 1.55; }",
    ".dp-crosstrad-tradition { display: inline-block; padding: 2px 7px; background: #1E5AA0; color: #fff; border-radius: 8px; font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.3px; margin-right: 6px; margin-bottom: 3px; }",
    ".dp-link-row { display: flex; align-items: center; gap: 8px; padding: 10px 0; border-bottom: 1px solid #f0e8d5; font-size: 0.85rem; }",
    ".dp-link-row:last-child { border-bottom: none; }",
    ".dp-link-row a { color: #A0522D; font-weight: 600; text-decoration: none; }",
    ".dp-link-row a:hover { text-decoration: underline; }",
    ".dp-link-icon { font-size: 1rem; }",
    ".dp-empty-tab { padding: 24px 12px; text-align: center; color: #7a6b5a; font-size: 0.88rem; font-style: italic; }",
    /* Simplified Leaflet popup */
    ".leaflet-popup-content { margin: 8px 12px !important; }",
    ".popup-title { font-family: 'Noto Serif Tamil', serif; font-weight: 700; font-size: 0.98rem; color: #A0522D; margin-bottom: 3px; line-height: 1.25; }",
    ".popup-title-ta { font-family: 'Noto Serif Tamil', serif; font-size: 0.82rem; color: #666; margin-bottom: 4px; }",
    ".popup-loc { color: #7a6b5a; font-size: 0.75rem; margin-bottom: 6px; }",
    ".popup-tagline { font-size: 0.78rem; color: #4a3528; line-height: 1.45; margin-bottom: 8px; font-style: italic; }",
    ".popup-open-btn { display: inline-block; padding: 5px 12px; background: #D2691E; color: #fff !important; border-radius: 4px; font-size: 0.78rem; font-weight: 600; text-decoration: none !important; cursor: pointer; }",
    ".popup-open-btn:hover { background: #A0522D; }",
    /* Mobile adjustments */
    "@media (max-width: 900px) { .dp-header { padding: 16px 18px 12px; } .dp-header .dp-name { font-size: 1.15rem; } .dp-body { padding: 14px 16px; } .dp-tab { padding: 10px 4px; font-size: 0.72rem; } }"
  ].join("\n");
  document.head.appendChild(style);
  
  // ============================================================
  // Helper functions
  // ============================================================
  function getCurrentLang() {
    return localStorage.getItem("pps-lang") || "en";
  }
  
  function esc(s) {
    if (s == null) return "";
    return String(s).replace(/[&<>"']/g, function(c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  
  function getBilingualValue(obj, base) {
    var lang = getCurrentLang();
    if (obj[base + "_" + lang]) return obj[base + "_" + lang];
    if (obj[base + "_en"]) return obj[base + "_en"];
    return null;
  }
  
  function roleLabel(role) {
    var labels = { birthplace: "born here", moksha_place: "attained moksha", miracle_site: "miracle", pathigam: "sang pathigam", devotee: "close devotee" };
    return labels[role] || role;
  }
  
  // ============================================================
  // Tab renderers
  // ============================================================
  function renderSthalaTab(temple, enrich) {
    var lang = getCurrentLang();
    var html = "";
    
    // Sthala Purana
    var sthala = enrich ? getBilingualValue(enrich, "sthala_purana") : null;
    if (sthala) {
      html += "<div class='dp-section'>";
      html += "<div class='dp-section-title'>🌸 " + (lang === "ta" ? "ஸ்தல புராணம்" : "Sthala Purana") + "</div>";
      html += "<div class='dp-section-content'>" + esc(sthala) + "</div>";
      html += "</div>";
    }
    
    // Meta grid: Goddess, Pushkarini, Size
    var meta = [];
    var goddess = enrich ? getBilingualValue(enrich, "goddess") : null;
    if (goddess) meta.push(["🌸 " + (lang === "ta" ? "தேவி" : "Goddess"), goddess]);
    var pushkarini = enrich ? getBilingualValue(enrich, "pushkarini") : null;
    if (pushkarini) meta.push(["💧 " + (lang === "ta" ? "தீர்த்தம்" : "Pushkarini"), pushkarini]);
    if (enrich && enrich.size_acres) meta.push(["📐 " + (lang === "ta" ? "பரப்பளவு" : "Size"), enrich.size_acres + " acres"]);
    if (temple.saints) meta.push(["🙏 " + (lang === "ta" ? "நாயன்மார்" : "Saints"), temple.saints]);
    
    if (meta.length > 0) {
      html += "<div class='dp-section'>";
      html += "<div class='dp-section-title'>ℹ️ " + (lang === "ta" ? "விவரங்கள்" : "Details") + "</div>";
      html += "<div class='dp-meta-grid'>";
      meta.forEach(function(m) {
        html += "<div class='dp-meta-label'>" + esc(m[0]) + "</div><div class='dp-meta-value'>" + esc(m[1]) + "</div>";
      });
      html += "</div></div>";
    }
    
    // Festivals
    var festivals = enrich ? getBilingualValue(enrich, "festivals") : null;
    if (festivals && Array.isArray(festivals) && festivals.length > 0) {
      html += "<div class='dp-section'>";
      html += "<div class='dp-section-title'>🎉 " + (lang === "ta" ? "விழாக்கள்" : "Festivals") + "</div>";
      html += "<ul class='dp-festival-list'>";
      festivals.forEach(function(f) { html += "<li>" + esc(f) + "</li>"; });
      html += "</ul></div>";
    }
    
    // Notes / cultural note fallback
    if (temple.notes && !sthala) {
      html += "<div class='dp-section'>";
      html += "<div class='dp-section-title'>📝 " + (lang === "ta" ? "குறிப்புகள்" : "Notes") + "</div>";
      html += "<div class='dp-section-content'>" + esc(temple.notes) + "</div>";
      html += "</div>";
    }
    
    if (!html) {
      html = "<div class='dp-empty-tab'>" + (lang === "ta" ? "விவரங்கள் வர இருக்கின்றன" : "Detailed sthala information coming soon for this temple.") + "</div>";
    }
    
    return html;
  }
  
  function renderNayanmarsTab(temple, enrich) {
    var lang = getCurrentLang();
    var html = "";
    
    // Pathigam (Naalvar) info from base data
    if (temple.pathigam && temple.pathigam !== "nan") {
      html += "<div class='dp-section'>";
      html += "<div class='dp-section-title'>📿 " + (lang === "ta" ? "பதிகம்" : "Pathigam") + "</div>";
      html += "<div class='dp-section-content'>" + esc(temple.pathigam) + "</div>";
      html += "</div>";
    }
    
    // Nayanmar associations from enrichment
    if (enrich && enrich.nayanmar_associations && enrich.nayanmar_associations.length > 0) {
      html += "<div class='dp-section'>";
      html += "<div class='dp-section-title'>👑 " + (lang === "ta" ? "நாயன்மார் தொடர்புகள்" : "Nayanmar Associations") + "</div>";
      enrich.nayanmar_associations.forEach(function(assoc) {
        var nay = window.NAYANMARS ? window.NAYANMARS[assoc.nayanmar] : null;
        var displayName = nay ? (lang === "ta" && nay.tamil ? nay.tamil : nay.short) : assoc.nayanmar;
        var story = lang === "ta" && assoc.story_ta ? assoc.story_ta : assoc.story_en;
        var brief = lang === "ta" && assoc.brief_ta ? assoc.brief_ta : assoc.brief_en;
        
        html += "<div class='dp-nayanmar-item'>";
        html += "<div class='dp-nayanmar-name'>" + (nay && nay.avatar ? nay.avatar + " " : "") + esc(displayName);
        if (assoc.role) html += "<span class='dp-nayanmar-role'>" + esc(roleLabel(assoc.role)) + "</span>";
        html += "</div>";
        if (brief) html += "<div class='dp-nayanmar-story'><strong>" + esc(brief) + "</strong> — " + esc(story || "") + "</div>";
        else if (story) html += "<div class='dp-nayanmar-story'>" + esc(story) + "</div>";
        html += "</div>";
      });
      html += "</div>";
    }
    
    if (!html) {
      html = "<div class='dp-empty-tab'>" + (lang === "ta" ? "நாயன்மார் தொடர்புகள் வர இருக்கின்றன" : "Nayanmar associations coming soon for this temple.") + "</div>";
    }
    
    return html;
  }
  
  function renderListenTab(temple, enrich) {
    var lang = getCurrentLang();
    var html = "";
    var audioUrl = null;
    
    // Curated audio from CURATED_AUDIO (from existing base patch)
    if (window.CURATED_AUDIO && window.CURATED_AUDIO[temple.name]) {
      audioUrl = window.CURATED_AUDIO[temple.name];
    }
    
    if (audioUrl) {
      html += "<div class='dp-section'>";
      html += "<div class='dp-section-title'>🎵 " + (lang === "ta" ? "பதிக ஒலி" : "Tevaram Audio") + "</div>";
      html += "<div class='dp-link-row'><span class='dp-link-icon'>🎼</span>" + esc(audioUrl) + "'>" + (lang === "ta" ? "பதிகம் கேட்க →" : "Listen to pathigam →") + "</a></div>";
      html += "</div>";
    }
    
    // Fallback YouTube search
    var searchQuery = temple.town + " " + temple.name + " Thevaram pathigam";
    var searchUrl = "https://www.youtube.com/results?search_query=" + encodeURIComponent(searchQuery);
    html += "<div class='dp-section'>";
    html += "<div class='dp-section-title'>🔍 " + (lang === "ta" ? "தேடல்" : "Search") + "</div>";
    html += "<div class='dp-link-row'><span class='dp-link-icon'>🎵</span>" + esc(searchUrl) + "" + (lang === "ta" ? "யூடியூப் தேடல் →" : "Search YouTube for pathigam →") + "</a></div>";
    html += "</div>";
    
    return html;
  }
  
  function renderSourcesTab(temple, enrich) {
    var lang = getCurrentLang();
    var html = "";
    
    // Kalvettu / Epigraphy
    if (temple.status || temple.knote) {
      html += "<div class='dp-section'>";
      html += "<div class='dp-section-title'>📜 " + (lang === "ta" ? "கல்வெட்டு" : "Kalvettu / Epigraphy") + "</div>";
      if (temple.status) html += "<div class='dp-section-content'><strong>" + (lang === "ta" ? "நிலை: " : "Status: ") + "</strong>" + esc(temple.status) + "</div>";
      if (temple.knote) html += "<div class='dp-section-content' style='margin-top:6px;font-style:italic;color:#7a6b5a;'>" + esc(temple.knote) + "</div>";
      html += "</div>";
    }
    
    // SII Reference
    if (temple.sii_url) {
      html += "<div class='dp-section'>";
      html += "<div class='dp-section-title'>📚 " + (lang === "ta" ? "நூல் குறிப்பு" : "SII Reference") + "</div>";
      html += "<div class='dp-link-row'><span class='dp-link-icon'>📖</span>sii_url) + "' target='_blank' rel='noopener'>" + esc(temple.sii_label || "SII Reference") + " →</a></div>";
      html += "</div>";
    }
    
    // Wikipedia
    if (temple.wiki && temple.wiki !== "nan") {
      html += "<div class='dp-section'>";
      html += "<div class='dp-section-title'>🌐 " + (lang === "ta" ? "விக்கிபீடியா" : "Wikipedia") + "</div>";
      html += "<div class='dp-link-row'><span class='dp-link-icon'>🔗</span>" + esc(temple.wiki) + "" + (lang === "ta" ? "விக்கிபீடியாவில் காண →" : "View on Wikipedia →") + "</a></div>";
      html += "</div>";
    }
    
    if (!html) {
      html = "<div class='dp-empty-tab'>" + (lang === "ta" ? "நூல் குறிப்புகள் வர இருக்கின்றன" : "Source references coming soon for this temple.") + "</div>";
    }
    
    return html;
  }
  
  function renderRelatedTab(temple, enrich) {
    var lang = getCurrentLang();
    var html = "";
    
    // Cross-tradition links from enrichment
    if (enrich) {
      var crosstrad = lang === "ta" && enrich.cross_tradition_ta ? enrich.cross_tradition_ta : enrich.cross_tradition_en;
      if (crosstrad && Array.isArray(crosstrad) && crosstrad.length > 0) {
        html += "<div class='dp-section'>";
        html += "<div class='dp-section-title'>🕉️ " + (lang === "ta" ? "பாரம்பரிய இணைப்புகள்" : "Cross-Tradition Links") + "</div>";
        crosstrad.forEach(function(item) {
          var tradMeta = window.CROSS_TRADITION_TYPES ? window.CROSS_TRADITION_TYPES[item.tradition] : null;
          var tradLabel = tradMeta ? (lang === "ta" ? tradMeta.label_ta : tradMeta.label_en) : item.tradition;
          html += "<div class='dp-crosstrad-item'>";
          html += "<span class='dp-crosstrad-tradition'>" + esc(tradLabel) + "</span>";
          html += esc(item.story);
          html += "</div>";
        });
        html += "</div>";
      }
    }
    
    // Same Nadu temples (nearby exploration hint)
    if (window.TEMPLES && temple.region) {
      var sameNadu = window.TEMPLES.filter(function(t) { return t.region === temple.region && t.sno !== temple.sno; });
      if (sameNadu.length > 0) {
        html += "<div class='dp-section'>";
        html += "<div class='dp-section-title'>🗺️ " + (lang === "ta" ? "இதே நாட்டில்" : "Same Nadu") + " (" + esc(temple.region) + ")</div>";
        html += "<div class='dp-section-content'>" + sameNadu.length + " " + (lang === "ta" ? "மற்ற ஆலயங்கள்" : "other temples in this region") + ".</div>";
        html += "</div>";
      }
    }
    
    if (!html) {
      html = "<div class='dp-empty-tab'>" + (lang === "ta" ? "தொடர்புடைய கோயில் தகவல் வர இருக்கின்றன" : "Related temple information coming soon.") + "</div>";
    }
    
    return html;
  }
  
  // ============================================================
  // Main render function
  // ============================================================
  window.showTempleInPanel = function(sno) {
    var temple = window.TEMPLES ? window.TEMPLES.find(function(t) { return t.sno === sno; }) : null;
    if (!temple) { console.log("[Session 1B.2] Temple sno " + sno + " not found"); return; }
    
    var enrich = window.TEMPLE_ENRICHMENT ? window.TEMPLE_ENRICHMENT[sno] : null;
    var lang = getCurrentLang();
    
    var panel = document.getElementById("detail-panel");
    var contentDiv = document.getElementById("detail-panel-content");
    if (!panel || !contentDiv) return;
    
    // Build header
    var townDisplay = temple.town;
    if (lang === "ta" && enrich && enrich.town_ta) townDisplay = enrich.town_ta;
    
    var badges = [];
    if (temple.saints && temple.saints.indexOf("Sambandar") !== -1 && temple.saints.indexOf("Appar") !== -1 && temple.saints.indexOf("Sundarar") !== -1) {
      badges.push({ icon: "🙏", label: (lang === "ta" ? "மூவர்" : "3 Naalvar") });
    }
    if (temple.tier) {
      var tierLabel = { T1: "★ SII/ASI", T2: "ARE", T3: "Not Cat.", T4: "Outside TN" }[temple.tier] || temple.tier;
      badges.push({ icon: "", label: tierLabel });
    }
    if (temple.notes && temple.notes.indexOf("Pancha Bhoota") !== -1) badges.push({ icon: "🔥", label: (lang === "ta" ? "பஞ்ச பூத" : "Pancha Bhoota") });
    if (temple.notes && temple.notes.indexOf("Ashta Veeratta") !== -1) badges.push({ icon: "⚡", label: (lang === "ta" ? "அஷ்ட வீரட்ட" : "Ashta Veeratta") });
    if (temple.notes && temple.notes.indexOf("Sapta Vidanga") !== -1) badges.push({ icon: "🌸", label: (lang === "ta" ? "சப்த விடங்க" : "Sapta Vidanga") });
    
    var badgesHtml = badges.map(function(b) { return "<span class='dp-badge'>" + (b.icon ? b.icon + " " : "") + esc(b.label) + "</span>"; }).join("");
    
    var nameEn = temple.name;
    var nameTa = (temple.name_ta) || (window.NAME_TA_MORE && window.NAME_TA_MORE[temple.name]) || "";
    
    // Coordinates
    var lat = parseFloat(temple.lat).toFixed(4);
    var lng = parseFloat(temple.lng).toFixed(4);
    var coords = lat + ", " + lng;
    var gmapUrl = "https://www.google.com/maps?q=" + lat + "," + lng + "&z=17";
    var appleUrl = "https://maps.apple.com/?ll=" + lat + "," + lng + "&z=17&q=" + encodeURIComponent(temple.name);
    var osmUrl = "https://www.openstreetmap.org/?mlat=" + lat + "&mlon=" + lng + "&zoom=17";
    var shareUrl = "https://gurusubbaraman.github.io/ppsrefresh/?sno=" + sno;
    
    var html = "";
    html += "<div class='dp-header'>";
    html += "<div class='dp-name'>#" + sno + " " + esc(nameEn) + "</div>";
    if (nameTa) html += "<div class='dp-name-ta'>" + esc(nameTa) + "</div>";
    html += "<div class='dp-loc'>" + esc(townDisplay) + " · " + esc(temple.district) + "</div>";
    html += "<div class='dp-region'>" + esc(temple.region) + "</div>";
    if (badgesHtml) html += "<div class='dp-badges'>" + badgesHtml + "</div>";
    html += "</div>";
    
    html += "<div class='dp-coord-row'>";
    html += "<span class='dp-coord-value'>📍 " + coords + "</span>";
    html += "<span class='dp-coord-copy' onclick=\"navigator.clipboard && navigator.clipboard.writeText('" + coords + "').then(function(){this.textContent='✓ Copied';var self=event.target;setTimeout(function(){self.textContent='Copy';},1500);}.bind(this)); event.target.textContent='✓ Copied'; setTimeout(function(t){t.textContent='Copy';}.bind(null,event.target),1500);\">Copy</span>";
    html += "</div>";
    
    html += "<div class='dp-map-btns'>";
    html += "" + gmapUrl + "<span class='dp-map-btn-icon'>🗺️</span><span>Google</span></a>";
    html += "" + appleUrl + "<span class='dp-map-btn-icon'>🍎</span><span>Apple</span></a>";
    html += "" + osmUrl + "<span class='dp-map-btn-icon'>🌍</span><span>OSM</span></a>";
    html += "<a class='dp-map-btn' onclick=\"navigator.share ? navigator.share({title: '" + esc(nameEn) + "', url: '" + shareUrl + "'}).catch(function(){}) : navigator.clipboard.writeText('" + shareUrl + "'); return false;\" href='#'><span class='dp-map-btn-icon'>🔗</span><span>Share</span></a>";
    html += "</div>";
    
    // Tabs
    var tabs = [
      { id: "sthala", label: (lang === "ta" ? "ஸ்தலம்" : "Sthala"), icon: "🌸", renderer: renderSthalaTab },
      { id: "nayanmars", label: (lang === "ta" ? "நாயன்மார்" : "Nayanmars"), icon: "👑", renderer: renderNayanmarsTab },
      { id: "listen", label: (lang === "ta" ? "செவிமடு" : "Listen"), icon: "🎵", renderer: renderListenTab },
      { id: "sources", label: (lang === "ta" ? "நூல்" : "Sources"), icon: "📚", renderer: renderSourcesTab },
      { id: "related", label: (lang === "ta" ? "தொடர்பு" : "Related"), icon: "🔗", renderer: renderRelatedTab }
    ];
    
    html += "<div class='dp-tabs'>";
    tabs.forEach(function(t, i) {
      html += "<div class='dp-tab" + (i === 0 ? " active" : "") + "' data-tab='" + t.id + "'><span class='dp-tab-icon'>" + t.icon + "</span><span>" + t.label + "</span></div>";
    });
    html += "</div>";
    
    html += "<div class='dp-body' id='dp-body'></div>";
    
    contentDiv.innerHTML = html;
    panel.classList.add("has-content");
    panel.classList.add("mobile-open");
    
    // Render first tab
    var body = document.getElementById("dp-body");
    body.innerHTML = tabs[0].renderer(temple, enrich);
    
    // Wire tab switching
    contentDiv.querySelectorAll(".dp-tab").forEach(function(tabEl) {
      tabEl.addEventListener("click", function() {
        var tabId = this.getAttribute("data-tab");
        contentDiv.querySelectorAll(".dp-tab").forEach(function(t) { t.classList.remove("active"); });
        this.classList.add("active");
        var tabDef = tabs.find(function(t) { return t.id === tabId; });
        if (tabDef && body) body.innerHTML = tabDef.renderer(temple, enrich);
      });
    });
    
    console.log("[Session 1B.2] Temple " + sno + " (" + temple.name + ") rendered in right panel");
  };
  
  // ============================================================
  // Simplified Leaflet popup override
  // ============================================================
  window.buildSimplifiedPopup = function(temple) {
    var lang = getCurrentLang();
    var nameTa = (temple.name_ta) || (window.NAME_TA_MORE && window.NAME_TA_MORE[temple.name]) || "";
    var enrich = window.TEMPLE_ENRICHMENT ? window.TEMPLE_ENRICHMENT[temple.sno] : null;
    var tagline = temple.notes || (enrich ? getBilingualValue(enrich, "sthala_purana") : null) || "";
    if (tagline.length > 100) tagline = tagline.substring(0, 100) + "...";
    
    var html = "";
    html += "<div class='popup-title'>#" + temple.sno + " " + esc(temple.name) + "</div>";
    if (nameTa) html += "<div class='popup-title-ta'>" + esc(nameTa) + "</div>";
    html += "<div class='popup-loc'>" + esc(temple.town) + " · " + esc(temple.district) + " · " + esc(temple.region) + "</div>";
    if (tagline) html += "<div class='popup-tagline'>" + esc(tagline) + "</div>";
    html += "<a class='popup-open-btn' onclick='event.preventDefault(); window.showTempleInPanel(" + temple.sno + "); return false;' href='#'>Open Details →</a>";
    return html;
  };
  
  console.log("[Session 1B.2] showTempleInPanel + buildSimplifiedPopup registered");
  console.log("[Session 1B.2] TEST: paste window.showTempleInPanel(3) in console to see Chidambaram");
})();
