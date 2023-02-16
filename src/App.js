import logo from './logo.svg';
import './App.css';
import { PureComponent } from 'react';
import Header from './Header';
import filterEmoji from './FilterEmoji'
import SearchInput from './SearchInput';
import EmojiResults from './EmojiResults';
import Footer from './Footer';

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

<a href="https://github.com/svshiva/emoji-search-app/"
 target="_blank"
style={{position:'absolute', right:'0', zIndex:'1'}}
><img decoding="async" loading="lazy" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_red_aa0000.png?resize=149%2C149" class="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1"/></a>
      
        <Header/>
        <SearchInput textChange={this.handleSearchChange} /> 
        <EmojiResults emojiData = {this.state.filteredEmoji}/>
        <Footer/>
      </div>  
    ) 
  }
}