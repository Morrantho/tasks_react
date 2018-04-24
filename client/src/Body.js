import React, { Component } from 'react';
import './Body.css';

class Body extends Component {
	constructor(props){
        super(props);
        this.state = {
            tasks:[],
            task:{
                title:"",
                description:"",
                completed:false
            }
        };
    }

    setTitle(elem){
        let task = this.state.task;
        task.title = elem.target.value;
        this.setState({task:task});
    }

    setDescription(elem){
        let task = this.state.task;
        task.description = elem.target.value;
        this.setState({task:task});
    }

    setCompleted(elem){
        let task = this.state.task;
        task.completed = elem.target.value;
        this.setState({task:task});
    }

    render(){
        return (
            <div className="Body">
                <h1>2. {this.props.title} Component</h1>
                <div>
                    <table className="tasks">
                        <thead>                        
                            <tr>
                                <th>Title:</th>
                                <th>Description:</th>
                                <th>Completed:</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.tasks}
                        </tbody>
                    </table>

                    <form>
                        <p>{JSON.stringify(this.state.task)}</p>

                        <p>Title:<input type="text" onChange={(elem)=>{this.setTitle(elem);}} /></p>   
                        <p>Description:<input type="text" onChange={(elem)=>{this.setDescription(elem);}} /></p>                     
                        <p>Completed: <input type="checkbox" onChange={(elem)=>{this.setCompleted(elem);}} /></p>
                    </form>

                    <button onClick={this.props.cb} >Call Parent</button>
                </div>
            </div>
        );
    }

    componentDidMount(){
        fetch("http://localhost:8000/api/tasks")
        .then(data=>data.json())
        .then(tasks=>{
            for(let task in tasks){
                tasks[task] = (
                    <tr key={tasks[task]._id}>
                        <td>{tasks[task].title}</td>                        
                        <td>{tasks[task].description}</td>  
                        <td>{tasks[task].completed}</td>                        
                    </tr>
                );
            }

            this.setState({tasks:tasks});
        })
        .catch(err=>console.log(err))
    }
}

export default Body;
