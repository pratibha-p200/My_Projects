import React from "react";
import "./Tag.css";

const Tag = ({tagName, selectTag, selected}) => {
    const tagStyle = {
      HTML : {backgroundcolor : "#fda821"},
      CSS : {backgroundcolor : "#15d4c8",},
      JavaScript : {backgroundcolor : "#ffd12c"},
      React : {backgroundcolor : "#4cdafc"},
      default : {backgroundcolor : "#f9f9f9"},
    };
      return (
          <button type="button" 
          className='tag' 
          style={selected ? tagStyle[tagName] : tagStyle.default}
          onClick={() =>selectTag(tagName)}>
          {tagName}
          </button>
      );
}

export default Tag;
