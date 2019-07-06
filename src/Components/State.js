import React, { Component } from 'react';
import './CardStyle.css';
class State extends Component {
    state={
        name:"",
        batchCode:"",
        class:""
    }

    render() {
        return (
        <div className="bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                    <div className="buttons">
                    <button>POST</button>
                    </div>
                        <div className="state">
                            <form>
                            <input type="text" placeholder="Enter your name" value={this.state.name} onChange={(val)=> (
                                this.setState({
                                    name:val.target.value
                                })
                            )}  />

                            <input type="number" placeholder="Enter your Batch Code" value={this.state.batchCode} onChange={(val)=> (
                                this.setState({
                                    batchCode:val.target.value
                                })
                            )}  />

                            <input type="text" placeholder="Enter your Section" value={this.state.class} onChange={(val)=> (
                                this.setState({
                                    class:val.target.value
                                })
                            )}/>
                        </form>
                            <div className="showData">
                            <p><span className="span_1">Name:</span><span className="span_2">{this.state.name}</span></p> 
                            <p><span className="span_1">Batch Code:</span><span className="span_2">{this.state.batchCode}</span></p> 
                            <p><span className="span_1">Section:</span><span className="span_2">{this.state.class}</span></p> 
                                
                        </div>
                        </div>        
                    </div>
                </div>
            </div>
            
        </div>
        );
    }
}
export default State;
