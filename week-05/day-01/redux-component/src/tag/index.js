import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTag, removeTag, removeTags } from './actionCreators'
import Tags from './component/tags';
import AddTag from './component/addTag';
import ComplexCounter from './component/complexCounter';
import RemoveTag from  './component/removeTag';
import RemoveAllTags from  './component/removeAllTags';

export default function Tag() {
  const whatever = useSelector(state => state.tag);
  const dispatch = useDispatch();
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