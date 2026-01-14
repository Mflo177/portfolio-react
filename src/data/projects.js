const projects = [
  {
    id: 1,
    title: "VIN Scanner AI",
    description: 'Vehicle inventory management control application that uses computer vision for VIN detection. ',
    image: "/images/vin-scanner/vin-scanner-thumb.png",
    github: "https://github.com/Mflo177/vinscanner-ai", 
    technologies: ["ML Kit", "Computer Vision", "Android Studio", "Java"],
    longDescription: `VinScanner AI uses computer vision and machine learning to detect VIN numbers 
    from windshields and barcodes in real-time using the device's camera for automotive inventory
    management. Detected VINs are organized into an editable list and exported as CSV files for email 
    sharing. The app streamlines data collection and reduces errors.`,
    videoDemo: "https://www.youtube.com/embed/q8jsdynda60?si=lteJ9Z1ugJJnk4ZI",
    featuredImages: [
      "/images/vin-scanner/1scan_vin_barcode.jpg", 
      "/images/vin-scanner/main_menu.jpg",
      "/images/vin-scanner/insert_notes.jpg",
      "/images/vin-scanner/lists_menu.jpg",
    ],
     allImages: [
      { src: "/images/vin-scanner/1scan_vin_barcode.jpg", caption: "Barcode scanning" },
      { src: "/images/vin-scanner/main_menu.jpg", caption: "Main menu navigation" },
      { src: "/images/vin-scanner/insert_notes.jpg", caption: "Add custom notes to scanned VINs" },
      { src: "/images/vin-scanner/lists_menu.jpg", caption: "Manage multiple VIN lists" },
      { src: "/images/vin-scanner/vin_list.jpg", caption: "Organized VIN list with details" },
      { src: "/images/vin-scanner/scan_vin_barcode.jpg", caption: "Camera view during scanning" },
      { src: "/images/vin-scanner/insert_vin_data.jpg", caption: "Manual VIN entry with location data" },
      { src: "/images/vin-scanner/select_row.jpg", caption: "Select VIN entry for editing" },
      { src: "/images/vin-scanner/succesfully_added_vin.jpg", caption: "VIN successfully added confirmation" },
      { src: "/images/vin-scanner/drop_menu.jpg", caption: "Export and sharing options" },
      { src: "/images/vin-scanner/swipe_delete.jpg", caption: "Swipe to delete VIN entry" },
      { src: "/images/vin-scanner/delete_confirmation.jpg", caption: "Delete confirmation dialog" }
    ]
  },
  {
    id: 2,
    title: "",
    description: "Instantly understand why stocks move. AI-powered stock analyzer explains why stocks move using multiple sources.",
    image: "/images/stock-sense/stacked_icon.png",
    github: '#',
    demo: '#',
    status: "🚧 In Development",
    technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
    longDescription: `StockSense is an AI-powered financial intelligence platform that instantly 
    analyzes why stocks move by aggregating news from multiple sources. Instead of spending 30+ 
    minutes manually researching, investors get AI-driven explanations with source attribution 
    and weighted consensus in seconds.`,
  },
];

export default projects;