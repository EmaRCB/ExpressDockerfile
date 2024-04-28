pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                sh 'git clone https://github.com/EmaRCB/ExpressDockerfile.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t mi-aplicacion .'
            }
        }
        stage('Push Docker Image') {
            steps {
                // Asume que ya has iniciado sesión en tu registro de Docker (docker login)
                sh 'docker push mi-aplicacion'
            }
        }
    }
}
