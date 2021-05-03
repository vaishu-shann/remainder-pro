import React, { Component } from 'react';
import { connect} from 'react-redux'; 
import {addRemainder, deleteRemainder} from '../actions';
import moment from 'moment';


class App extends Component{
    constructor(props){
        super(props);
            this.state={
                text:'',
                dueDate: ' '
            }
        
        }

    addRemainder() {
        console.log('this.state.dueDate', this.state.dueDate);
            this.props.addRemainder(this.state.text, this.state.dueDate);
    } 

    deleteRemainder(id){
            this.props.deleteRemainder(id);
    }


    renderRemainders() {
        const {remainders}= this.props;
        return(
            <ul className="list-group col-sm-4">
            {
                remainders.map(remainder =>{
                    return(
                        <li key={remainder.id} className=" list-group-item">
                            <div className="list-item ">
                                <div>{remainder.text} </div> 
                                <div><em> {moment(new Date(remainder.dueDate)).fromNow()}</em></div>
                            </div>
                            <div className="list-item delete-button"
                            onClick={() => this.deleteRemainder(remainder.id)}
                            > 
                            &#x2715;
                            </div>
                        </li>
                    )
                })
            }
            </ul>
        )
    }

    render() {
        
        return(
            <div className="App">
                <div className="title">
                    Remainder Pro 
                </div>
                <div className="form-inline remainder-form">
                    <div className="form-group">
                    <input 
                        className="form-control"
                        placeholder="to do..."
                        onChange={(event)=> this.setState({text:event.target.value})}
                        onKeyPress={event =>{
                            if(event.key === 'Enter'){
                                this.addRemainder()
                            }
                        }
                    }
                         />
                        <input 
                        className="form-control"
                        type="datetime-local"
                        onChange={ event => this.setState({dueDate:event.target.value})}
                        />

                        
                    </div>
                    <button
                    type="button"
                    className="btn btn-success"
                    onClick={()=>this.addRemainder()}
                    > Add Remainder
                    </button>
                </div>
                                   
               {this.renderRemainders() }
            </div>
         
        )
    }
}
function mapStateToProps(state) {
      return{
        remainders: state
    }
}

export default connect( mapStateToProps, {addRemainder, deleteRemainder})( App);