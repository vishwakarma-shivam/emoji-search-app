import logo from './logo.svg';
import './App.css';
import { PureComponent } from 'react';
import Header from './Header';
import filterEmoji from './FilterEmoji'
import SearchInput from './SearchInput';
import EmojiResults from './EmojiResults';

export default class App extends PureComponent{
  constructor(props){
    super(props);
    this.state={
      filteredEmoji:filterEmoji("", 20)
    };
  }
  handleSearchChange = (event)=>{
    this.setState({
      filteredEmoji:filterEmoji(event.target.value,20)
    })
  }

  render(){
    return(
      <div>
        <Header/>
        <SearchInput textChange={this.handleSearchChange} /> 
        <EmojiResults emojiData = {this.state.filteredEmoji}/>
      </div>  
    ) 
  }
}