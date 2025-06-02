import React from "react";

interface SmartTagProps {
  brandName: string;
  productName: string;
  size?: string;
  measurements?: string; // Made optional
  material: string;
  careInstructions: string[];
  scanwearId: string;
  brandMessage?: string;
  imageUrl?: string;
  fabricJourney?: string;
}

const SmartTag: React.FC<SmartTagProps> = ({
  brandName,
  size,
  measurements,
  material,
  careInstructions,
  scanwearId,
  brandMessage,
  imageUrl,
  fabricJourney,
}) => {
  return (
    <div style={styles.tagCard}>
      {imageUrl && <img src={imageUrl} alt="Brand Logo" style={styles.logo} />}
      <h1 style={styles.brand}>{brandName}</h1>
      {/* <h2 style={styles.product}>{productName}</h2> */}
      {measurements ? (
        <p><strong>Measurements:</strong> {measurements}</p>
      ) : size ? (
        <p><strong>Size:</strong> {size}</p>
      ) : null}
      <p><strong>Material:</strong> {material}</p>

      <div style={styles.section}>
        <h3 style={styles.subheading}>Care Instructions</h3>
        {/* Language switcher in the same line, centered */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, margin: '12px 0 18px 0' }}>
          <span style={{ fontSize: 20 }}>🌐 </span>
          <span style={{ fontSize: 17, color: '#1e88e5', fontWeight: 'bold' }}>[ English | Español | 中文 | 한국어 ]</span>
          <button style={{
            background: '#e3f2fd',
            border: '2px solid #1e88e5',
            borderRadius: 10,
            padding: '8px 18px',
            fontSize: 18,
            color: '#1e88e5',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 2px 8px #bbdefb',
            marginLeft: 8
          }}>
            📸 Visual Guide
          </button>
        </div>
        {/* Centered care instructions, not a list */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          {careInstructions.map((instruction, index) => (
            <div key={index} style={{ color: "#444", fontSize: 18 }}>{instruction}</div>
          ))}
        </div>
      </div>

      {fabricJourney && (
        <div style={styles.section}>
          <h3 style={styles.subheading}>Fabric Journey</h3>
          <p>{fabricJourney}</p>
        </div>
      )}

      <p><strong>Scanwear ID:</strong> {scanwearId}</p>

      {brandMessage && (
        <div style={styles.messageBox}>
          <p>{brandMessage}</p>
        </div>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  tagCard: {
    fontFamily: "'Segoe UI', sans-serif",
    width: "800px", // Much wider tag
    padding: "24px",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
    textAlign: "center",
    border: "2px dashed #c7e8ca",
  },
  logo: {
    width: "160px",
    height: "160px",
    objectFit: "contain",
    marginBottom: "18px",
    borderRadius: "16px",
    border: "4px solid #8fd19e", // Brighter green border
    background: "#e6f9ed", // Light green background
    boxShadow: "0 4px 16px rgba(143, 209, 158, 0.25)",
  },
  brand: {
    fontSize: "34px",
    fontWeight: "bold",
    color: "#388e3c", // Deeper green
    marginBottom: "8px",
    letterSpacing: "1px",
    textShadow: "0 2px 8px #c7e8ca",
  },
  product: {
    fontSize: "24px",
    color: "#2e5247",
    marginBottom: "18px",
    fontWeight: "bold",
  },
  section: {
    marginTop: "20px",
  },
  subheading: {
    fontSize: "26px",
    color: "#388e3c",
    marginBottom: "8px",
    fontWeight: "bold",
    letterSpacing: "0.5px",
  },
  list: {
    listStyleType: "circle",
    paddingLeft: "20px",
    textAlign: "left",
    color: "#444",
  },
  messageBox: {
    marginTop: "24px",
    padding: "16px",
    backgroundColor: "#e6f9ed",
    borderLeft: "6px solid #388e3c",
    borderRadius: "8px",
    fontStyle: "italic",
    color: "#2e5247",
    fontWeight: "bold",
    fontSize: "18px",
  },
};

export default SmartTag;




// import React from "react";

// interface SmartTagProps {
//   brandName: string;
//   productName: string;
//   size: string;
//   material: string;
//   careInstructions: string[];
//   scanwearId: string;
//   brandMessage?: string;
//   imageUrl?: string;
//   fabricJourney?: string;
// }

// const SmartTag: React.FC<SmartTagProps> = ({
//   brandName,
//   productName,
//   size,
//   material,
//   careInstructions,
//   scanwearId,
//   brandMessage,
//   imageUrl,
//   fabricJourney,
// }) => {
//   return (
//     <div style={styles.container}>
//       {imageUrl && <img src={imageUrl} alt="Brand Logo" style={styles.logo} />}
//       <h1 style={styles.brand}>{brandName}</h1>
//       <h2 style={styles.product}>{productName}</h2>
//       <p><strong>Size:</strong> {size}</p>
//       <p><strong>Material:</strong> {material}</p>

//       <div style={styles.section}>
//         <h3>Care Instructions</h3>
//         <ul>
//           {careInstructions.map((instruction, index) => (
//             <li key={index}>{instruction}</li>
//           ))}
//         </ul>
//       </div>

//       {fabricJourney && (
//         <div style={styles.section}>
//           <h3>Fabric Journey</h3>
//           <p>{fabricJourney}</p>
//         </div>
//       )}

//       <p><strong>Scanwear ID:</strong> {scanwearId}</p>

//       {brandMessage && (
//         <div style={styles.messageBox}>
//           <p>{brandMessage}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// const styles: { [key: string]: React.CSSProperties } = {
//   container: {
//     fontFamily: "Arial, sans-serif",
//     maxWidth: "360px",
//     margin: "40px auto",
//     padding: "20px",
//     border: "1px solid #ccc",
//     borderRadius: "10px",
//     backgroundColor: "#fff",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//   },
//   logo: {
//     width: "100px",
//     height: "auto",
//     marginBottom: "10px",
//   },
//   brand: {
//     margin: "0",
//     fontSize: "24px",
//   },
//   product: {
//     margin: "4px 0 12px",
//     fontSize: "18px",
//     color: "#555",
//   },
//   section: {
//     marginTop: "16px",
//   },
//   messageBox: {
//     marginTop: "20px",
//     padding: "10px",
//     backgroundColor: "#f7f7f7",
//     borderRadius: "6px",
//     fontStyle: "italic",
//   },
// };

// export default SmartTag;
