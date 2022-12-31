import './App.css';
import { Helmet } from "react-helmet";

function App() {
    return (
        <>
            <div class="container disable">
                <h2>Easy Image Editor</h2>
                <div class="wrapper">
                    <div class="editor-panel">
                        <div class="filter">
                            <label class="title">Filters</label>
                            <div class="options">
                                <button id="brightness" class="active">Brightness</button>
                                <button id="saturation">Saturation</button>
                                <button id="inversion">Inversion</button>
                                <button id="grayscale">Grayscale</button>
                            </div>
                            <div class="slider">
                                <div class="filter-info">
                                    <p class="name">Brighteness</p>
                                    <p class="value">100%</p>
                                </div>
                                <input type="range" value="100" min="0" max="200" />
                            </div>
                        </div>
                        <div class="rotate">
                            <label class="title">Rotate & Flip</label>
                            <div class="options">
                                <button id="left"><i class="fa-solid fa-rotate-left"></i></button>
                                <button id="right"><i class="fa-solid fa-rotate-right"></i></button>
                                <button id="horizontal"><i class='bx bx-reflect-vertical'></i></button>
                                <button id="vertical"><i class='bx bx-reflect-horizontal' ></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="preview-img">
                        <img src="image-placeholder.svg" alt="preview-img" />
                    </div>
                </div>
                <div class="controls">
                    <button class="reset-filter">Reset Filters</button>
                    <div class="row">
                        <input type="file" class="file-input" accept="image/*" hidden />
                        <button class="choose-img">Choose Image</button>
                        <button class="save-img">Save Image</button>
                    </div>
                </div>
            </div>
            <Helmet>
                <script type="text/javascript" src="./script.js"></script>
            </Helmet>
        </>
    );
}

export default App;
