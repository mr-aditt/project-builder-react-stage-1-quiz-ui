import React, { Component } from 'react'
import './quizcomponent.css'

class QUIZ extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="quiz-container">
                <h2>Question</h2>
                <div className="question-space">
                    <span className="qno">4 of 15</span>
                    <span>Which is the only mammel which can't jump?</span>
                </div>
                <div className="options">
                    <button>Dog</button>
                    <button>Goat</button>
                    <button>Elephant</button>
                    <button>Lion</button>
                </div>
                <div className="btns" id="actions-btns">
                    <button id="acton-previous">Previous</button>
                    <button id="acton-next">Next</button>
                    <button id="acton-quit">Quit</button>
                </div>
            </div>
        );
    }
}
 
export default QUIZ;