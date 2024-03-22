import { useState } from "react";
import { useEffect } from "react";

const PrincipalComponent = () => {
  const urlBase = "http://localhost:3000/generate-diagram";
  const [pythonCode, setPythonCode] = useState("");
  const [imagen, setImage] = useState(null); // Inicializa la imagen como null

  const sendCode = async () => {
    try {
      const response = await fetch(urlBase, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: pythonCode,
      });

      if (response.ok) {
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setImage(imageUrl);
      } else {
        console.error("Response not OK:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending code:", error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(sendCode, 2000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pythonCode]);

  return (
    <div className="main-div">
      <div></div>
      <div className="input-div">
        <textarea
          className="input-area"
          placeholder="Enter the python code here..."
          value={pythonCode}
          onChange={(event) => setPythonCode(event.target.value)}
        />
        <button onClick={sendCode} className="submmit-button">
          Submmit code
        </button>
      </div>
      <div className="image-div">
        {imagen && (
          <img className="image-container" src={imagen} alt="Diagram" />
        )}{" "}
      </div>
    </div>
  );
};

export default PrincipalComponent;
