pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                echo "Clonando"
            }
        }
        stage('Build') {
            steps {
                npm install
            }
        }
        stage('Test') {
            steps {
                npm test
            }
        }
        stage('Build Docker Image') {
            steps {
                docker build -t mi-aplicacion .
            }
        }
        stage('Push Docker Image') {
            steps {
                // Asume que ya has iniciado sesión en tu registro de Docker (docker login)
                docker push mi-aplicacion
            }
        }
    }
}
