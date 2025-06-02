import SmartTagCard from "./SmartTag";

function App() {
  return (
    <div style={containerStyle}>
      <SmartTagCard
        productName="Sustainable Bamboo Tee"
        measurements="Bust: 36in / Waist: 28in / Length: 24in"
        material="70% Bamboo / 30% Organic Cotton"
        careInstructions={[
          "🧼 Wash (or below) 30°C (gentle cycle, 30 min)",
          "🧴 Use mild eco detergent",
          "🌬️ Dry on low tumble for 30 mins",
          "🚫 Do not bleach or dry clean",
          "🧲 Cool iron with cloth if needed"
        ]}
        scanwearId="ECO-QT123"
        brandMessage="From our low-impact line — created to honor the planet and your everyday glow. 🌱"
        imageUrl="/tag.png"
        sustainabilityStats={{
          carbonSaved: "2.3kg CO₂",
          waterSaved: "15L of water saved vs. conventional production"
        }}
        fabricJourney="Grown in India → Woven in Portugal → Assembled in USA"
        tagFeatures="No printed label. This QR replaces the traditional tag using biodegradable ink."
      />
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  width: "100vw",
  backgroundColor: "#f0f4f3",
};

export default App;



// import SmartTag from "./SmartTag";

// function App() {
//   return (
//     <div style={containerStyle}>
//       <SmartTag
//         brandName="TeamName"
//         productName="Sustainable Bamboo Tee"
//         size="M"
//         material="70% Bamboo / 30% Organic Cotton"
//         careInstructions={[
//           "Wash cold on gentle cycle",
//           "Hang dry or tumble low",
//           "Do not bleach",
//           "Iron low if needed"
//         ]}
//         scanwearId="ECO-QT123"
//         brandMessage="From our low-impact line — created to honor the planet and your everyday glow. 🌱"
//         imageUrl="https://via.placeholder.com/100x100.png?text=Logo"
//       />
//     </div>
//   );
// }

// const containerStyle: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "center", // Center horizontally
//   alignItems: "center",     // Center vertically
//   minHeight: "100vh",
//   width: "100vw",            // Ensure it spans full width
//   backgroundColor: "#f0f4f3",
// };

// export default App;






// import SmartTag from "./SmartTag";

// function App() {
//   return (
//     <div>
//       <SmartTag
//         brandName="QRious Tags"
//         productName="Midweight Organic Tee"
//         size="M"
//         material="100% Organic Cotton"
//         careInstructions={[
//           "Machine wash cold",
//           "Do not bleach",
//           "Tumble dry low",
//           "Cool iron if needed"
//         ]}
//         scanwearId="QR-23A7T91"
//         brandMessage="Thanks for scanning! Designed with sustainability in mind."
//         imageUrl="/logo-placeholder.png"  // Add this image to `public/` folder
//       />
//     </div>
//   );
// }

// export default App;
