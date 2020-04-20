
import React from 'react'

class Ref  extends React.Component {

inputRef = React.createRef() 
  componentDidMount(){
      this.inputRef.current.focus()
  }

  inputEventhandler=()=>{
      alert(this.inputRef.current.value)
  }
    render() { 
        return ( <div>
      <input ref={this.inputRef}/>
      <button onClick={this.inputEventhandler}>click</button>
        </div> );
    }
}
 
export default Ref