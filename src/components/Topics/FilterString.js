import React, {Component} from 'react'

class FilterString extends Component {
    constructor(){
        super()
        this.state = {
            overwatchTanks: ['Orisa', 'Reinhardt', 'Sigma', 'Dva', 'Wrecking Ball', 'Zarya', 'Winston'],
            userInput: '',
            filteredTanks: []
        }
    }

    handleChange(val){
        this.setState({
            userInput: val
        })
    }

    filterArray(userInput){
        let tanks = this.state.overwatchTanks
        let filteredTanks = []

        for(let i=0; i<tanks.length; i++){
            if(tanks[i].includes(userInput)){
                filteredTanks.push(tanks[i])
            }
        }
        this.setState({ filteredTanks: filteredTanks })
    }


    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4> Filter String </h4>
                <span className='puzzleText'> Overwatch Tanks: { JSON.stringify(this.state.overwatchTanks, null, 10) } </span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)} />
                <button className='confirmationButton' onClick={() => this.filterArray(this.state.userInput) }> Filter </button>
                <span className='resultsBox filterStringRB'> Filtered Tanks: { JSON.stringify(this.state.filteredTanks, null, 10) } </span>
            </div>
        )
    }
}

export default FilterString