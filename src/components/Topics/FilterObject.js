import React, {Component} from 'react'

class FilterObject extends Component {
    constructor(){
        super()
        this.state = {
            unFilteredArray: [
                {
                    name: 'Jake',
                    eyecolor: 'blue',
                    age: 27
                },
                {
                    name: 'Carson',
                    height: 79,
                    haircolor: 'brown'
                },
                {
                    title: 'driver',
                    height: 69,
                    age: 32
                }
            ],
            userInput: '',
            filteredArray: [],
            }
        }
    
    handleChange(val) {
            this.setState({
                userInput: val
            })
        }

    filterArray(prop){
        let friends = this.state.unFilteredArray
        let filteredFriends = []
            for(let i = 0; i<friends.length; i++){
                if(friends[i].hasOwnProperty(prop)) {
                    filteredFriends.push(friends[i])
                }
            }
        
        this.setState({ filteredArray: filteredFriends })
        }


    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4> Filter Object </h4>
                <span className='puzzleText'> Original: {JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
                <input onChange={(e) => this.handleChange(e.target.value) } className='inputLine'/>
                <button className='confirmationButton' onClick={() => this.filterArray(this.state.userInput) }> Filter </button>
                <span className='resultsBox filterObjectRB'> Filtered: {JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}

export default FilterObject