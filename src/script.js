console.log("script.js loaded!"); // to see if script is connected to htmls


// Step 1: Define the JSON data
const data = {
  "instruments": [
    {
      "name": "Guitars",
      "description": "Electric/Acoustic Guitars",
      "image": "https://images.guitarguitar.co.uk/cdn/small/160/753_gg_vintage23_lp1.jpg",
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
      "image": "https://danvillemusic.com/cdn/shop/articles/gibson-les-paul-standard-featured-image1.webp?v=1711060996",
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
    {
      "name": "Craftine CD11C Dreadnought Acoustic Guitar",
      "type": "Guitar",
      "description": "Classic Acoustic Guitars for folk and country music.",
      "image": "https://xmusic.ie/app/uploads/2022/12/cd11c.jpg",
      "price": "€349.99"
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

