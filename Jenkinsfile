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
                sh('cd ExpressDockerfile')
                sh('npm install')
            }
        }
        stage('Test') {
            steps {
                sh('npm test')
            }
        }
        stage('Build docker') {
            steps {
                sh('docker build -t sicei .')
                sh('docker push sicei')
            }
        }
    }
}
