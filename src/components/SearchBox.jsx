
import React from 'react'

class SearchBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSearch = this.onSearch.bind(this)
  }
  onChange (event) {
    this.setState({
      value: event.target.value
    })
  }
  onSearch (event) {
    this.props.onSearch(this.state.value)
  }
  render () {
    return (
      <div>
        <input type='text' value={this.state.value} onChange={this.onChange} />
        &nbsp;
        <button onClick={this.onSearch}><i className='fa fa-search' /> Search</button>
      </div>
    )
  }
}

SearchBox.propTypes = {
  onSearch: React.PropTypes.func.isRequired
}

export default SearchBox
