# Aplicación de Detección de Números

Una aplicación completa (full-stack) que captura imágenes mediante una aplicación móvil y detecta números utilizando un modelo de aprendizaje automático en el servidor (backend).

El objetivo de esta aplicación móvil es permitir al usuario capturar imágenes de números y procesarlas utilizando un algoritmo de Inteligencia Artificial basado en Análisis de Componentes Principales (PCA) para identificar el dígito escrito. La aplicación mantiene un historial local de todos los escaneos realizados.

## Estructura del Proyecto

El proyecto se divide en dos partes principales:

- **mobile/**: Una aplicación móvil desarrollada en React Native (Expo).
- **backend/**: Un servidor Python Flask que sirve un modelo Keras/TensorFlow.

## Requisitos Previos

- **Node.js** y **npm** (para la aplicación móvil)
- **Python 3.8+** (para el backend)
- **Expo Go** en tu teléfono (o Simulador iOS / Emulador Android)

## Guía de Inicio

### 1. Configuración del Backend

El backend aloja el modelo de Deep Learning utilizado para el reconocimiento de números.

1.  Navega al directorio backend:
    ```bash
    cd backend
    ```

2.  Crea un entorno virtual (opcional pero recomendado):
    ```bash
    python -m venv venv
    source venv/bin/activate  # En Windows: venv\Scripts\activate
    ```

3.  Instala las dependencias:
    ```bash
    pip install -r requirements.txt
    ```

4.  Inicia el servidor:
    ```bash
    python app.py
    ```
    El servidor se iniciará en `http://0.0.0.0:5001`.

### 2. Configuración de la Aplicación Móvil

La aplicación móvil captura imágenes y las envía al backend.

1.  Navega al directorio mobile:
    ```bash
    cd mobile
    ```

2.  Instala las dependencias:
    ```bash
    npm install
    # o
    yarn install
    ```

3.  **Configuración**:
    La aplicación intenta detectar automáticamente la dirección IP de tu computadora para comunicarse con el backend.
    
    Si encuentras problemas de conexión, verifica `mobile/src/services/ApiService.ts`. El comportamiento predeterminado utiliza `Expo Constants` para encontrar la IP del host, con `localhost` como respaldo.

4.  Inicia la aplicación:
    ```bash
    npx expo start
    ```

5.  Escanea el código QR con **Expo Go** (Android/iOS) o presiona `i` para el Simulador iOS / `a` para el Emulador Android.

## Detalles de la Aplicación Móvil

La aplicación móvil está construida con React Native y Expo. Consta de las siguientes pantallas principales:

### Pantalla de Inicio (Home Screen)
El punto de entrada principal de la aplicación. Ofrece al usuario dos acciones principales:
- **Cámara**: Abre la cámara del dispositivo para capturar una nueva imagen de un número.
- **Galería**: Abre la galería de fotos del dispositivo para seleccionar una imagen existente.
Cuando se selecciona o captura una imagen, esta se envía automáticamente al backend para su reconocimiento antes de ser guardada.

### Historial (History Screen)
Muestra una lista de todos los números escaneados previamente. Cada registro muestra:
- El número reconocido.
- La fecha y hora del escaneo.
- Una miniatura de la imagen.
Los usuarios pueden tocar cualquier registro para ver más detalles.

### Vista Detallada (Detail View)
Muestra la información completa de un registro de escaneo específico.
- Muestra la imagen a tamaño completo.
- Muestra el dígito reconocido con alta visibilidad.
- Permite al usuario eliminar el registro del almacenamiento local.

## Detalles de la Aplicación Backend

El backend es una aplicación Flask separada responsable de la inferencia de aprendizaje automático.

### Servidor Flask (`app.py`)
Este script inicializa el servidor web y carga el modelo Keras.
- **Carga del Modelo**: Al inicio, carga el archivo `mnist_svhn_model.keras`. Si no se encuentra el modelo, el servidor se iniciará pero devolverá errores en las solicitudes de predicción.
- **Puerto**: El servidor se ejecuta en el puerto **5001** para evitar conflictos con servicios estándar del sistema (como AirPlay en macOS).

### Procesamiento de Imágenes
Antes de que el modelo pueda hacer una predicción, la imagen pasa por un proceso de preprocesamiento:
1.  **Redimensionamiento**: La imagen se redimensiona a 32x32 píxeles para coincidir con el requisito de entrada del modelo.
2.  **Normalización**: Los valores de los píxeles se escalan de 0-255 a 0.0-1.0.
3.  **Formato**: La imagen se convierte en un array NumPy con la forma `(1, 32, 32, 3)`.

### Endpoint de Predicción (`/predict`)
El endpoint principal de la aplicación.
- **Método**: POST
- **Carga útil**: Acepta una solicitud `multipart/form-data` con una clave `file` que contiene el archivo de imagen.
- **Respuesta**: Devuelve un objeto JSON con el `digit` predicho (entero) y el puntaje de `confidence` (flotante).

## Tecnologías

- **Frontend**: React Native, Expo, TypeScript, Expo FileSystem.
- **Backend**: Python, Flask, TensorFlow/Keras, Pillow.
- **Modelo**: CNN personalizada entrenada con datasets MNIST/SVHN.
