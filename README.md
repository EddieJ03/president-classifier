# President Classifier Website
This repo contains the website to interact with my deployed President Text Classifier model. I am working on a multi-GPU distributed version here: https://github.com/EddieJ03/distributed-pytorch 

## President Classifier
My President Text Classifier model is a Transformer Encoder. Given a short snippet of text, the model attempts to predict which President said it (without any other context). I curated my dataset by essentially breaking down every recorded speech given by a President into chunks.
 
HuggingFace Space: https://huggingface.co/spaces/edwjin/docker-classifier/tree/main (also where the code files and datasets are!)

Repo with distributed GPU model training code can be found here: [Training Code](https://github.com/EddieJ03/distributed-pytorch)

Still working on ways to improve it! (Current Test Accuracy: ~82%)
