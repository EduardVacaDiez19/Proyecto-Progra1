from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Creamos una ruta (API) simple
@app.get("/api/datos")
def enviar_datos():
    return {
        "mensaje": "¡Conexión exitosa!",
        "tecnologias": ["React", "Vite", "Python", "FastAPI"]
    }