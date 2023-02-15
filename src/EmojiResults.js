import React, { Component } from 'react';
import Clipboard from "clipboard";
import PropTypes from 'prop-types';
import "./css/EmojiResults.css";
import EmojiResultRow from './EmojiResultRow';


export default class EmojiResults extends Component {

    static propTypes = {
        emojiData:PropTypes.array
    };
    componentDidMount(){
        this.clipboard = new Clipboard(".copy-to-clipboard");
    };

    componentWillUnmount() {
        this.clipboard.destroy();
    };
  render() {
    return (
      <div className="component-emoji-results">
            {this.props.emojiData.map(emojiData=>(
                <EmojiResultRow
                    key={emojiData.title}
                    symbol = {emojiData.symbol}
                    title ={emojiData.title}
                />
            ))}

      </div>
    )
  }
}
