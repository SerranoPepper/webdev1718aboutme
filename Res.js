@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 1000px;
    margin: 50px auto;
    padding: 20px;
    background-color: #efefef;
}

.app {
    width: 100%;
    position: relative;
}

.app #start-camera {
    display: none;
    border-radius: 3px;
    max-width: 400px;
    color: #fff;
    background-color: #448AFF;
    text-decoration: none;
    padding: 15px;
    opacity: 0.8;
    margin: 50px auto;
    text-align: center;
}

.app video#camera-stream {
    display: none;
    width: 100%;
}

.app img#snap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    display: none;
}

.app #error-message {
    width: 100%;
    background-color: #ccc;
    color: #9b9b9b;
    font-size: 28px;
    padding: 200px 100px;
    text-align: center;
    display: none;
}

.app .controls {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 30px;
    display: none;
}

.app .controls a {
    border-radius: 50%;
    color: #fff;
    background-color: #111;
    text-decoration: none;
    padding: 15px;
    line-height: 0;
    opacity: 0.7;
    outline: none;
    -webkit-tap-highlight-color: transparent;
}

.app .controls a:hover {
    opacity: 1;
}

.app .controls a.disabled {
    background-color: #555;
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
}

.app .controls a.disabled:hover {
    opacity: 0.5;
}

.app .controls a i {
    font-size: 18px;
}

.app .controls #take-photo i {
    font-size: 32px;
}

.app canvas {
    display: none;
}

.app video#camera-stream.visible,
.app img#snap.visible,
.app #error-message.visible {
    display: block;
}

.app .controls.visible {
    display: flex;
}

@media(max-width: 1000px) {
    .container {
        margin: 40px;
    }
    .app #start-camera.visible {
        display: block;
    }
    .app .controls a i {
        font-size: 16px;
    }
    .app .controls #take-photo i {
        font-size: 24px;
    }
}

@media(max-width: 600px) {
    .container {
        margin: 10px;
    }
    .app #error-message {
        padding: 80px 50px;
        font-size: 18px;
    }
    .app .controls a i {
        font-size: 12px;
    }
    .app .controls #take-photo i {
        font-size: 18px;
    }
}

body {
    background-image: url("https://tinypng.com/images/apng/panda-waving.png")
}

.map {
    margin: 50px auto;
}

h1 {
    text-align: center;
    color: purple;
}

a {
    color: red;
}

footer {
    color: orange;
}

.button {
    background-color: #4CAF50;
    text-align: center;
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.8s;
}

.button1 {
    background-color: white;
    color: black;
    border: 2px solid #4CAF50;
}

.button1:hover {
    background-color: #4CAF50;
    color: white;
}

div {
    text-align: center;
}
