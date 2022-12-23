TODO:
brew install mkcert
mkcert -install
mkdir reactcert
mkcert -key-file ./reactcert/key.pem -cert-file ./reactcert/cert.pem "localhost"

<!-- SCRIPTS REACT -->
"scripts": {
    "start":
        "HTTPS=true <strong>SSL_CRT_FILE=./reactcert/cert.pem SSL_KEY_FILE=./reactcert/key.pem</strong> react-scripts start"
}