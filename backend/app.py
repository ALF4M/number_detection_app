import os
from flask import Flask, request, jsonify
import tensorflow as tf
from PIL import Image
import numpy as np
import io

app = Flask(__name__)

# Load model
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'models/mnist_svhn_model.keras')
try:
    model = tf.keras.models.load_model(MODEL_PATH)
    print(f"Model loaded successfully from {MODEL_PATH}")
    print(f"Model input shape: {model.input_shape}")
except Exception as e:
    print(f"Error loading model: {e}")
    model = None

def preprocess_image(image_bytes):
    try:
        # Open image
        img = Image.open(io.BytesIO(image_bytes))
        
        # Convert to RGB (in case of RGBA or Grayscale)
        if img.mode != 'RGB':
            img = img.convert('RGB')
            
        # Resize to 32x32
        img = img.resize((32, 32))
        
        # Convert to numpy array
        img_array = np.array(img)
        
        # Normalize to 0-1
        img_array = img_array.astype('float32') / 255.0
        
        # Add batch dimension (1, 32, 32, 3)
        img_array = np.expand_dims(img_array, axis=0)
        
        return img_array
    except Exception as e:
        print(f"Error preprocessing image: {e}")
        return None

@app.route('/predict', methods=['POST'])
def predict():
    if model is None:
        return jsonify({'error': 'Model not loaded'}), 500

    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
        
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
        
    try:
        image_bytes = file.read()
        processed_image = preprocess_image(image_bytes)
        
        if processed_image is None:
            return jsonify({'error': 'Failed to process image'}), 400
            
        # Prediction
        prediction = model.predict(processed_image)
        predicted_class = int(np.argmax(prediction, axis=1)[0])
        confidence = float(np.max(prediction))
        
        return jsonify({
            'digit': predicted_class,
            'confidence': confidence
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
