import { useState, useEffect } from 'react'

function App() {
  // Aquí guardaremos los datos que lleguen de Python
  const [datosPython, setDatosPython] = useState(null)

  // useEffect hace que la petición se ejecute automáticamente al cargar la página
  useEffect(() => {
    fetch('http://localhost:8000/api/datos')
      .then(respuesta => respuesta.json())
      .then(datos => {
        console.log("Datos recibidos:", datos);
        setDatosPython(datos);
      })
      .catch(error => console.error("Error al conectar con Python:", error));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>React + Python 🚀</h1>
      
      
      {datosPython ? (
        <div style={{ background: '#f0f0f0', padding: '15px', borderRadius: '8px' }}>
          <h2>Mensaje del servidor:</h2>
          <p><strong>{datosPython.mensaje}</strong></p>
          <h3>Stack tecnológico:</h3>
          <ul>
            {datosPython.tecnologias.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Conectando con Python...</p>
      )}
    </div>
  )
}

export default App