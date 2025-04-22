console.log("script.js loaded!"); // to see js is connecting 


// JSON data
const data = {
  "instruments": [
    {
      "name": "Guitars",
      "description": "Electric/Acoustic Guitars",
      "image": "/FEWDproject/public/images/les_paul2.jpeg", // local stored image instead of link
      "target": "#/Instruments/guitar"
    },
    {
      "name": "Piano",
      "description": "Upright Pianos",
      "image": "https://eu.steinway.com/fileadmin/user_upload/Fluegel_B_Black_03.jpg",
      "target": "#/Instruments/piano"
    },
    {
      "name": "Drums",
      "description": "Discover top-quality drum kits and percussion instruments.",
      "image": "https://r2.gear4music.com/media/113/1132674/600/preview.jpg",
      "target": "#/Instruments/drums"
    },
    {
      "name": "Violin",
      "description": "Acoustic Violins for classical and contemporary music.",
      "image": "https://www.corilon.com/media/image/f8/e5/22/peter-hornsteiner-5377-1a_1890x1890.jpg",
      "target": "#/Instruments/violin"
    },
    {
      "name": "Synthesisers",
      "description": "Explore analog and digital synthesisers for creating unique sounds.",
      "image": "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_55/553838/18348199_800.jpg",
      "target": "#/Instruments/synthesisers"
    },
    {
      "name": "Recording Equipment",
      "description": "High-quality microphones, mixers, and studio gear for professional recordings.",
      "image": "https://sordan.ie/uploaded/photos/5435/1.jpg",
      "target": "#/Instruments/recording_equipment"
    }
  ],
  "guitars": [
    {
      "name": "Les Paul",
      "type": "Guitar",
      "description": "Classic Electric Guitar with a rich, warm tone.",
      "image": "/FEWDproject/public/images/les_paul2.jpeg", // local stored image instead of link
      "price": "€2,799.99" // changed price
    },
    {
      "name": "Telecaster",
      "type": "Guitar",
      "description": "Electric Guitar with a bright, cutting sound.",
      "image": "https://r2.gear4music.com/media/103/1034459/600/preview.jpg",
      "price": "€1,199.99"
    },
    {
      "name": "Fender Stratocaster",
      "type": "Guitar",
      "description": "Popular Electric Guitar known for its bright, sharp tones.",
      "image": "https://images.musicstore.de/images/1280/fender-american-vintage-ii-1973-stratocaster-mn-lake-placid-blue_1_GIT0059210-000.jpg",
      "price": "€1,799.99"
    },
    {
      "name": "Gibson SG",
      "type": "Guitar",
      "description": "Electric Guitar with a powerful sound and a classic rock vibe.",
      "image": "https://r2.gear4music.com/media/60/604503/600/preview.jpg",
      "price": "€1,099.99"
    },
  ],
    "drums": [
    {
      "name": "Pearl Export Drum Kit",
      "type": "Drums",
      "description": "Complete 5-piece drum kit with hardware and cymbals.",
      "image": "https://media.sweetwater.com/m/products/image/b3c214b3c3eykiECiWtmPv3L9B142T46axxO6I54.jpg?quality=82&width=750&ha=b3c214b3c3a9566d",
      "price": "€699.99"
    },
    {
      "name": "Tama Imperialstar Drum Kit",
      "type": "Drums",
      "description": "Affordable, professional-grade drum set.",
      "image": "https://www.samash.com/media/catalog/product/t/i/tie52ccpm.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1200&width=1200&canvas=1200:1200",
      "price": "€799.99"
    },
    {
      "name": "Ludwig Breakbeats",
      "type": "Drums",
      "description": "Compact drum kit for urban and studio settings.",
      "image": "https://m.media-amazon.com/images/I/71da5qMfRZL._AC_UF894,1000_QL80_.jpg",
      "price": "€599.99"
    },
    {
      "name": "DW Performance Series",
      "type": "Drums",
      "description": "High-end drums known for their quality sound.",
      "image": "https://drumfactory.com.au/cdn/shop/products/ScreenShot2022-09-29at2.24.22pm.png?v=1664432339",
      "price": "€1,999.99"
    }
  ],
  "pianos": [
    {
      "name": "Steinway & Sons Model B",
      "type": "Piano",
      "description": "Grand Piano with a rich, full-bodied sound.",
      "image": "https://eu.steinway.com/fileadmin/user_upload/Fluegel_B_Black_03.jpg",
      "price": "€85,000.00"
    },
    {
      "name": "Yamaha U1",
      "type": "Piano",
      "description": "Popular upright piano for both beginners and professionals.",
      "image": "https://images.musicstore.de/images/0960/yamaha-u1-sh-pe-121-cm-incl-mute-switch_1_PIA0001841-000.jpg",
      "price": "€7,499.99"
    },
    {
      "name": "Kawai K-300",
      "type": "Piano",
      "description": "Upright Piano with a warm, powerful tone.",
      "image": "https://www.chuppspianos.com/wp-content/uploads/2017/08/Kawai-K-300-Professional-Upright-Piano-Ebony-Chupps-Pianos-1024x683.jpg",
      "price": "€5,999.99"
    },
    {
      "name": "Casio Privia PX-160",
      "type": "Piano",
      "description": "Digital piano with realistic sound and touch.",
      "image": "https://r2.gear4music.com/media/14/148610/600/preview.jpg",
      "price": "€499.99"
    }
  ],
  "synthesisers": [
    {
      "name": "Moog Minimoog Model D",
      "type": "Synthesiser",
      "description": "Classic analog synthesizer with rich, full tones.",
      "image": "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_55/553838/18348199_800.jpg",
      "price": "€3,299.99"
    },
    {
      "name": "Korg Minilogue XD",
      "type": "Synthesiser",
      "description": "Polyphonic analog synthesizer with advanced features.",
      "image": "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_47/478597/14923795_800.jpg",
      "price": "€649.99"
    },
    {
      "name": "Roland JUNO-DS61",
      "type": "Synthesiser",
      "description": "Portable synthesizer with a wide range of sounds.",
      "image": "https://www.iconsshop.co.za/wp-content/uploads/2023/09/products-DS612_0.75x.jpg",
      "price": "€649.00"
    }
  ],
  "recordingEquipment": [
    {
      "name": "Shure SM7B Microphone",
      "type": "Recording Equipment",
      "description": "Dynamic cardioid microphone for vocals and instruments.",
      "image": "https://sc1.musik-produktiv.com/pic-010014469xl/shure-sm7b.jpg",
      "price": "€399.99"
    },
    {
      "name": "Focusrite Scarlett 2i2 Audio Interface",
      "type": "Recording Equipment",
      "description": "USB audio interface with two Scarlett microphone inputs.",
      "image": "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_46/467950/14226632_800.jpg",
      "price": "€99.99"
    },
    {
      "name": "Audio-Technica ATH-M50X Headphones",
      "type": "Recording Equipment",
      "description": "Professional over-ear headphones for monitoring and mixing.",
      "image": "https://r2.gear4music.com/media/16/165126/600/preview.jpg",
      "price": "€169.99"
    },
    {
      "name": "KRK Rokit 5 G4 Studio Monitors",
      "type": "Recording Equipment",
      "description": "Active studio monitor speakers with precise sound.",
      "image": "https://support.musicgateway.com/wp-content/uploads/2021/06/KRK-Rokit-5-G4.jpg",
      "price": "€179.99"
    }
  ],
  "violins": [
    {
      "name": "Yamaha V5 Series",
      "type": "Violin",
      "description": "Ideal for students, this violin offers excellent playability and tone at an affordable price.",
      "image": "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_17/172522/14389014_800.jpg",
      "price": "€599.99"
    },
    {
      "name": "Fender FV-1 Violin",
      "type": "Violin",
      "description": "Electric violin with a sleek design and great sound for modern performances.",
      "image": "https://rvb-img.reverb.com/image/upload/s--A_S9yjQy--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1379362371/mxoumpgfthoiqchurlvw.jpg",
      "price": "€899.99"
    },
    {
      "name": "Cremona SV-175",
      "type": "Violin",
      "description": "High-quality student violin with a rich, full tone and easy playability.",
      "image": "https://clarkesmusiccompany.com/image/cache/catalog/product-4828-550x550.jpg",
      "price": "€399.99"
    }
  ],
  

};

// Saves the data to localStorage as a string
localStorage.setItem("musicStoreData", JSON.stringify(data));

// Retrieves and parse the data from localStorage when needed
const retrievedData = JSON.parse(localStorage.getItem("musicStoreData"));

// Logs the retrieved data
console.log(retrievedData);



