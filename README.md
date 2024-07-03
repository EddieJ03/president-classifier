# President Classifier Website
This repo contains the website to interact with my deployed President Text Classifier model. 

## President Classifier
My President Text Classifier model is a Transformer Encoder. Given a short snippet of text, the model attempts to predict which President said it (without any other context). I curated my dataset by essentially breaking down every recorded speech given by a President into chunks.
 
HuggingFace Space: https://huggingface.co/spaces/edwjin/docker-classifier/tree/main (also where the code files and datasets are!)

All my training is done on a Google Colab (for that free TPU): https://colab.research.google.com/drive/15NDeBQ0AsHys_8Hbp1S81auwyJGGWw8M

Still working on ways to improve it! (current statistics: Training Accuracy: ~95%, Test Accuracy: ~80%)
