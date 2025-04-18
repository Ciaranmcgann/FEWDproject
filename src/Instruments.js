console.log("script.js loaded!"); // to see if script is connected to htmls


// Step 1: Define the JSON data
const data = {
  "instruments": [
    {
      "name": "Guitars",
      "description": "Electric/Acoustic Guitars",
      "image": "/FEWDproject/public/images/les-paul2.jpeg", // local stored image instead of link
      "target": "#/Instruments/guitar"
    },
    {
      "name": "Piano",
      "description": "Upright Pianos",
      "image": "https://upload.wikimedia.org/wikipedia/commons/0/01/Steinway_Vienna_002.JPG",
      "target": "#/Instruments/piano"
    },
    {
      "name": "Drums",
      "description": "Discover top-quality drum kits and percussion instruments.",
      "image": "https://assets.xlnaudio.com/pages/addictive_drums/2.5/dream-kit-bg-with-transition-1352px-2x.jpg",
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
      "image": "https://api.moogmusic.com/sites/default/files/styles/large_key/public/key_image/2022-11/Minimoog_Model_D_Website-5.jpg?itok=AEvGT6_I",
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
      "image": "/FEWDproject/public/images/les-paul2.jpeg", // local stored image instead of link
      "price": "€1,499.99"
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
      "image": "https://www.pearl-drums.com/wp-content/uploads/2022/04/export-drum-set.jpg",
      "price": "€699.99"
    },
    {
      "name": "Tama Imperialstar Drum Kit",
      "type": "Drums",
      "description": "Affordable, professional-grade drum set.",
      "image": "https://www.tama.com/media/imperialstar-kit-hero.jpg",
      "price": "€799.99"
    },
    {
      "name": "Ludwig Breakbeats",
      "type": "Drums",
      "description": "Compact drum kit for urban and studio settings.",
      "image": "https://www.ludwig-drums.com/media/breakbeats.jpg",
      "price": "€599.99"
    },
    {
      "name": "DW Performance Series",
      "type": "Drums",
      "description": "High-end drums known for their quality sound.",
      "image": "https://www.dwdrums.com/images/performance-series.jpg",
      "price": "€1,999.99"
    }
  ],
  "pianos": [
    {
      "name": "Steinway & Sons Model B",
      "type": "Piano",
      "description": "Grand Piano with a rich, full-bodied sound.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/0/01/Steinway_Vienna_002.JPG",
      "price": "€85,000.00"
    },
    {
      "name": "Yamaha U1",
      "type": "Piano",
      "description": "Popular upright piano for both beginners and professionals.",
      "image": "https://www.yamaha.com/images/yamaha-u1-piano.jpg",
      "price": "€7,499.99"
    },
    {
      "name": "Kawai K-300",
      "type": "Piano",
      "description": "Upright Piano with a warm, powerful tone.",
      "image": "https://www.kawai-global.com/images/k300.jpg",
      "price": "€5,999.99"
    },
    {
      "name": "Casio Privia PX-160",
      "type": "Piano",
      "description": "Digital piano with realistic sound and touch.",
      "image": "https://www.casio-europe.com/privia-px160.jpg",
      "price": "€499.99"
    }
  ],
  "synthesisers": [
    {
      "name": "Moog Minimoog Model D",
      "type": "Synthesiser",
      "description": "Classic analog synthesizer with rich, full tones.",
      "image": "https://api.moogmusic.com/sites/default/files/styles/large_key/public/key_image/2022-11/Minimoog_Model_D_Website-5.jpg?itok=AEvGT6_I",
      "price": "€3,299.99"
    },
    {
      "name": "Korg Minilogue XD",
      "type": "Synthesiser",
      "description": "Polyphonic analog synthesizer with advanced features.",
      "image": "https://www.korg.com/uk/products/synthesizers/minilogue_xd/images/front.jpg",
      "price": "€649.99"
    },
    {
      "name": "Roland JUNO-DS61",
      "type": "Synthesiser",
      "description": "Portable synthesizer with a wide range of sounds.",
      "image": "https://www.roland.com/us/products/juno_ds61/",
      "price": "€649.00"
    }
  ],
  "recordingEquipment": [
    {
      "name": "Shure SM7B Microphone",
      "type": "Recording Equipment",
      "description": "Dynamic cardioid microphone for vocals and instruments.",
      "image": "https://www.shure.com/en-US/products/microphones/sm7b",
      "price": "€399.99"
    },
    {
      "name": "Focusrite Scarlett 2i2 Audio Interface",
      "type": "Recording Equipment",
      "description": "USB audio interface with two Scarlett microphone inputs.",
      "image": "https://focusrite.com/img/scarlett-2i2.jpg",
      "price": "€99.99"
    },
    {
      "name": "Audio-Technica ATH-M50X Headphones",
      "type": "Recording Equipment",
      "description": "Professional over-ear headphones for monitoring and mixing.",
      "image": "https://www.audio-technica.com/en-us/ath-m50x",
      "price": "€169.99"
    },
    {
      "name": "KRK Rokit 5 G4 Studio Monitors",
      "type": "Recording Equipment",
      "description": "Active studio monitor speakers with precise sound.",
      "image": "https://www.krksys.com/product/rokit-5-g4/",
      "price": "€179.99"
    }
  ],
  "violins": [
    {
      "name": "Yamaha V5 Series",
      "type": "Violin",
      "description": "Ideal for students, this violin offers excellent playability and tone at an affordable price.",
      "image": "https://www.yamaha.com/violin-v5.jpg",
      "price": "€599.99"
    },
    {
      "name": "Fender FV-1 Violin",
      "type": "Violin",
      "description": "Electric violin with a sleek design and great sound for modern performances.",
      "image": "https://www.fender.com/electric-violin.jpg",
      "price": "€899.99"
    },
    {
      "name": "Cremona SV-175",
      "type": "Violin",
      "description": "High-quality student violin with a rich, full tone and easy playability.",
      "image": "https://www.cremona-violins.com/sv-175.jpg",
      "price": "€399.99"
    }
  ],
  
  // (Continue with other categories: drums, pianos, etc.)
};

// Step 2: Save the data to localStorage as a string
localStorage.setItem("musicStoreData", JSON.stringify(data));

// Step 3: Retrieve and parse the data from localStorage when needed
const retrievedData = JSON.parse(localStorage.getItem("musicStoreData"));

// Example usage: Log the retrieved data
console.log(retrievedData);



