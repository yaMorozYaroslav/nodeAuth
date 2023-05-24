import React from 'react'
import {FiltContext} from '../Context/Contexts'
import {ItemContext} from '../Context/Contexts'


export const Filter =(props)=> {
	
	const {state, setCategory, setSearch,setMinPrice, setMaxPrice} = React.useContext(FiltContext)
	const {fetchItems} = React.useContext(ItemContext)
	//console.log(state)
	function onCategory(event){
		event.preventDefault()
		setCategory(event.target.value)
		//setCategory(event.target.value)	
		}
	function onSearch(event){
		event.preventDefault()
		setSearch(event.target.value)
		}
	function onMinPrice(event){
		setMinPrice(event.target.value)
		}
	function onMaxPrice(event){
		setMaxPrice(event.target.value)
		}
	return <>
	     <input onChange={onMinPrice} placeholder='MinPrice' type='num'/>
	     <input onChange={onMaxPrice} placeholder='MaxPrice' type='num'/>
	     <input onChange={onSearch} placeholder='Search'/>
	     <select onClick={()=>fetchItems(1,state.itemCategory)} name='howFilter' onChange={onCategory}>
	       <option value='soil'>Soils</option>
	       <option value='pesticide'>Pesticides</option>
	       <option value='seed'>Seeds</option>
	     
	     </select>
	</>
	}
