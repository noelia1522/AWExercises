import React from 'react'

type ShoppingListProps = {
  items:
  {
  id: number,
  name: string,
  count?: number
  }[]
}
type StateProps = {
  quantity: number,
  date: any
}
//The Component is defined like so:
//interface Component<P = {}, S = {}> extends ComponentLifecycle<P, S> { }
// Meaning that the default type for the state (and props) is: {}.
// Change it to:
//class App extends React.Component<MyProps, MyState> {..}
 class ShoppingListc extends React.Component<ShoppingListProps, StateProps > {

  constructor(props: ShoppingListProps){
    super(props);
    this.state = {
      quantity: 0,
      date: new Date().toLocaleTimeString
    };
    //1
    setInterval(() => {this.setState({quantity: this.state.quantity + 1})},1000);
  };

//2
//Until arrow functions, every new function defined its own this value [...]. This proved to be annoying with an object-oriented style of programming.
// Arrow functions capture the this value of the enclosing context.

//if you don't use arrow functions, bind these two:
////This is due to this.delta not being bound to this.
// this.updateQuantity = this.updateQuantity.bind(this);
  updateQuantity = (): any =>{
      this.setState({quantity: this?.state?.quantity + 1}, () =>{
        console.log(this?.state?.quantity);
      });
    };

  render(){
    return(
      <div className="list">
        {/* <div style= {{padding: "20px", border: "5px solid"}}></div> */}
      <ul>
        {
        this.props.items.map((item) =>
        <li style={{padding: "10px 0 10px 0", listStyleType:"none"}} key={item.name}>
            <span style = {{paddingRight: "5px", fontSize: "20px"}}>{item.name} : {this.state?.quantity}</span>
            <button onClick={this.updateQuantity}
                      style={{padding: "5px 19spx"}}>Add</button>
        </li>
            )
        }
      </ul>
    </div>
    )
  }
}

export default ShoppingListc;
