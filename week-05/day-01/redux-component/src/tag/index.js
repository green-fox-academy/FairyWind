import React from 'react';
import Tags from './component/tags';
import AddTag from './component/addTag';
import ComplexCounter from './component/complexCounter';
import RemoveTag from  './component/removeTag';
import RemoveAllTags from  './component/removeAllTags';

export default function Tag() {
  return (
    <div className="function">
      <Tags />
      <AddTag/>
      <ComplexCounter />
      <RemoveTag />
      <RemoveAllTags />
    </div>
  )
}