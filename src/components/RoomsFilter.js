import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from './Title'

//get only unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext)
    const {
        handleChange,
        type,
        capacity,
        price, 
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast, 
        pets
    } = context
    //get unique types
    let types = getUnique(rooms, 'type')
    //add all
    types = ['all', ...types]
    //map to jsx
    let options = types.map((item, index)=> {
        return <option key={index} value={item}>{item}</option>
    })
    //get unique capacity
    let people = getUnique(rooms, 'capacity')
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })
    return (
        <section className='filter-container'>
            <Title title='search rooms' />
            <form className='filter-form'>
                {/* select type */}
                <div className='form-group'>
                    <label htmlFor="type">room type</label>
                    <select 
                        name="type" 
                        id="type" 
                        value={type} 
                        className='form-control'
                        onChange={handleChange}
                    >
                        {options}
                    </select>
                </div>
                {/* end select type */}
                {/* select Guest */}
                <div className='form-group'>
                    <label htmlFor="capacity">Guest</label>
                    <select 
                        name="capacity" 
                        id="capacity" 
                        value={capacity} 
                        className='form-control'
                        onChange={handleChange}
                    >
                        {people}
                    </select>
                </div>
                {/* end select Guest */}
                {/** filter by price */}
                <div className='form-group'>
                    <label htmlFor='price'>
                        room price ${price}
                    </label>
                    <input 
                        type="range" 
                        name="price" 
                        id="price"
                        min={minPrice}
                        max={maxPrice}
                        value={price}
                        onChange={handleChange}
                        className='form-control'
                    />
                </div>
                {/** end filter by price */}
                {/** filter by size */}
                <div className='form-group'>
                    <label htmlFor="size">rooms size</label>
                    <div className='size-inputs'>
                        <input 
                            type="number" 
                            name="minSize" 
                            id="size"
                            value={minSize}
                            onChange={handleChange}
                            className='size-input'
                        />
                        <input 
                            type="number" 
                            name="maxSize" 
                            id="size"
                            value={maxSize}
                            onChange={handleChange}
                            className='size-input'
                        />
                    </div>
                </div>
                {/** end filter by size */}
                {/** filter the extras */}
                <div className='form-group'>
                    <div className='single-extra'>
                        <input 
                            type="checkbox" 
                            name="breakfast" 
                            id="breakfast"
                            checked={breakfast}
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className='single-extra'>
                        <input 
                            type="checkbox" 
                            name="pets" 
                            id="pets"
                            checked={pets}
                            onChange={handleChange}
                        />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/**end filter the extras */}
            </form>
        </section>
    )
}
