pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                echo "Clonando"
            }
        }
        stage('Build docker') {
            steps {
                sh('docker build -t sicei .')
                sh('docker image ls')
            }
        }
        stage('Run docker') {
            steps {
                sh('docker container stop sicei-container || true')
                sh('docker container rm sicei-container || true')
                sh('docker run -dp 8000:8000 --name "sicei-container" sicei')
                sh('docker container ls')
            }
        }
    }
}
