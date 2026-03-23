import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <p>
                Hello World, Im drew, dont question it
            </p>
            <h1>This is heading text</h1>;
            <p>This is just a paragraph of text. It can go onto multiple lines, if you want.</p>;
            <Button onClick={ () => { console.log("Hello World!") } }>Log Hello World</Button>
            <Container>
                <Row>
                    <Col><p>First column.</p></Col>
                    <Col>
                        <p>Second column.
                        You can put whatever you want in here, and it will be on the right side.
                        Maybe try adding an image?</p>
                        <div
                            style ={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}>
                        </div>
                    </Col>

                    <Col><p>First column.</p></Col>
                    <Col>
                        <p>Second column.
                        You can put whatever you want in here, and it will be on the right side.
                        Maybe try adding an image?</p>
                        <div
                            style ={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}>
                        </div>
                        <img src= {fsh} alt="A picture of my dog Ada" />
                    </Col>
                        
                </Row>


            </Container>
         <ul>
            <li>First thing</li>
            <li>Another thing</li>
            <li>A third item</li>
        </ul>
            
        </div>
    );


}


export default App;
