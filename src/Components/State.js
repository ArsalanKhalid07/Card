import React, { Component } from 'react';
import './CardStyle.css';
import logo from '../Components/images/apptron.png';
class State extends Component {
    
    state={
        name:"",
        batchCode:"",
        class:"",
        student:[]
    }
        
    

     formSubmit =(event) => {
        event.preventDefault()

        this.state.student.push({
            name:this.state.name,
            batchCode:this.state.batchCode,
            class:this.state.class
        })
     }
    render() {
        return (
        <div className="bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                    <div className="buttons">
                    {/* <button onClick={this.formSubmit}>POST</button> */}
                    </div>
                        <div className="state">
                            <form>
                                <img src={logo} alt="logo"></img>
                            <input type="text" placeholder="Enter your name" value={this.state.name} onChange={(val)=> (
                                this.setState({
                                    // if(this.state.name == ""){
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
                               <button onClick={this.formSubmit}>POST</button>
                        </form>

                        </div>        
                        {this.state.student.map((item,i)=>(
                            <div key={i} >
                            <div className="showData">
                            <img src={logo} alt="logo"></img>
                            <p><span className="span_1">Name:</span><span className="span_2">{item.name}</span></p> 
                            <p><span className="span_1">Batch Code:</span><span className="span_2">{item.batchCode}</span></p> 
                            <p><span className="span_1">Section:</span><span className="span_2">{item.class}</span></p>     
                          </div>
                                </div>
                         ))}
                            
                         
                    </div>
                </div>
            </div>
            
        </div>
        );
    }
}
export default State;
