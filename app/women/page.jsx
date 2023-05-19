'use client'
import React, { useContext, useEffect, useState } from 'react'
import PriceRangeBar from '../components/PriceRangeBar'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import QuickAddCards from '../components/QuickAddCards'
// import { Context } from '../context/appContext'
import Link from 'next/link'

const page = () => {
    // const {store, actions}= useContext(Context)
    // console.log(store.msg)
    const [openActiveFilters, setOpenActiveFilters] = useState(false)
    const [openDesignerFilters, setOpenDesignerFilters] = useState(false)
    const [openCategoryFilters, setOpenCategoryFilters] = useState(false)
    const [openSizeFilters, setOpenSizeFilters] = useState(false)
    const [openColorFilters, setOpenColorFilters] = useState(false)
    const [openPriceFilters, setOpenPriceFilters] = useState(false)
    console.log('active', openActiveFilters, 'designer', openDesignerFilters, 'category', openCategoryFilters, 'size',openSizeFilters, 'color', openColorFilters, 'price',openPriceFilters)
    const openCloseFilters = (filter) => {
        let currentFilter = filter.toLowerCase()
        let checkFilter = null
        if(filter === 'designer'){
            checkFilter = openDesignerFilters
        }else if(filter === 'category'){
            checkFilter = openCategoryFilters
        }else if(filter === 'size'){
            checkFilter = openSizeFilters
        }else if(filter === 'color'){
            checkFilter = openColorFilters
        }else{checkFilter = openPriceFilters}
        // console.log(`open${filter}Filters`, )
        if (checkFilter) {
            console.log()
            document.querySelector(`.${currentFilter}-filters-body`).classList.add('open-filters')
            document.querySelector(`.${currentFilter}-plus`).classList.add('close-filters')
            document.querySelector(`.${currentFilter}-minus`).classList.add('open-filters')
        }else {
            document.querySelector(`.${currentFilter}-filters-body`).classList.remove('open-filters')
            document.querySelector(`.${currentFilter}-plus`).classList.remove('close-filters')
            document.querySelector(`.${currentFilter}-minus`).classList.remove('open-filters')
        }
    }
    useEffect(() => {
        // openCloseFilters('Active')
        openCloseFilters('designer')
        openCloseFilters('category')
        openCloseFilters('size')
        openCloseFilters('color')
        openCloseFilters('price')

    }, [openActiveFilters, openCategoryFilters, openColorFilters, openDesignerFilters, openSizeFilters, openPriceFilters])
    let contentArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
  return (
    <div className='woman-page'>
        <header className="woman-page-header">
            <span className='header-link-span'><Link href={'/'} className='header-link'>Home</Link> &gt; <Link href={'/women'} className='header-link' >Woman</Link></span>
            <p className='header-text'>Women's Clothing & Accessories </p> 
        </header>
        <main className="woman-page-body">
            {/* left side of the page with all filters  */}
            <div className="category-filter-container">
                <div className="active-filters">
                    <div className="active-filters-header">
                        <p>FILTER</p>
                        <p>clear all</p>
                    </div>
                    <div className="active-filters-body">
                        <p>Jewelry:<strong>Necklaces</strong><span>x</span></p>
                    </div>
                </div>
                <div className="designer-filters">
                    <div className="designer-filters-header">
                        <p>DESIGNERS</p>
                        <p 
                            className='designer-plus'
                            onClick={() => setOpenDesignerFilters(!openDesignerFilters)}
                        ><AiOutlinePlus/></p>
                        <p 
                            className='designer-minus'
                            onClick={() => setOpenDesignerFilters(!openDesignerFilters)}
                        ><AiOutlineMinus/></p>
                    </div>
                    <div className="designer-filters-body">
                        <div className="designer-filter-search">
                            some search bar
                        </div>
                        <div className="designer-filter-search-results">
                            <p>ChaCha Temers</p>

                        </div>
                    </div>
                </div>
                <div className="category-filters">
                    <div className="category-filters-header">
                        <p>CATEGORY</p>
                        <p 
                            className='category-plus'
                            onClick={() => setOpenCategoryFilters(!openCategoryFilters)}
                        ><AiOutlinePlus/></p>
                        <p 
                            className='category-minus'
                            onClick={() => setOpenCategoryFilters(!openCategoryFilters)}
                        ><AiOutlineMinus/></p>
                    </div>
                    <div className="category-filters-body">
                        {/* loop over all categories and return a component 
                        that is a dropdown with all subcategories of 
                        the one category passed  */}
                        <p>Clothing  +/-</p>
                        <p>Shoes  +/-</p>
                        <p>Bags  +/-</p>
                        <p>Jewelry  +/-</p>
                    </div>
                </div>
                <div className="size-filters">
                    <div className="size-filters-header">
                        <p>SIZES</p>
                        <p 
                            className='size-plus'
                            onClick={() => setOpenSizeFilters(!openSizeFilters)}
                        ><AiOutlinePlus/></p>
                        <p 
                            className='size-minus'
                            onClick={() => setOpenSizeFilters(!openSizeFilters)}
                        ><AiOutlineMinus/></p>
                    </div>
                    <div className="size-filters-body">
                        {/* All sizes offered updated by filters  */}
                        <p>big</p>
                        <p>small</p>
                        <p>Fat</p>
                        <p>Super Fat</p>
                        <p>Eat something</p>
                    </div>
                </div>
                <div className="color-filters">
                    <div className="color-filters-header">
                        <p>COLORS</p>
                        <p 
                            className='color-plus'
                            onClick={() => setOpenColorFilters(!openColorFilters)}
                        ><AiOutlinePlus/></p>
                        <p 
                            className='color-minus'
                            onClick={() => setOpenColorFilters(!openColorFilters)}
                        ><AiOutlineMinus/></p>
                    </div>
                    <div className="color-filters-body">
                        {/* All colors offered*/}
                        <p>blue</p>
                        <p>gold</p>
                        <p>green</p>
                        <p>Purple</p>
                        <p>Black/White</p>
                    </div>
                </div>
                <div className="price-filters">
                    <div className="price-filters-header">
                        <p>PRICE</p>
                        <p 
                            className='price-plus'
                            onClick={() => setOpenPriceFilters(!openPriceFilters)}
                        ><AiOutlinePlus/></p>
                        <p 
                            className='price-minus'
                            onClick={() => setOpenPriceFilters(!openPriceFilters)}
                        ><AiOutlineMinus/></p>
                    </div>
                    <div className="price-filters-body">
                        {/* range slider componet to range a min and max price to filter */}
                        <PriceRangeBar
                            min={0}
                            max={80000}
                            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                        />
                    </div>
                </div>
                        

            </div>
            {/* right side of the page with all results based on filters if any */}
            <div className="category-filter-results-container">
                {/* return items as card with quick add || updates when filters are applied  */}
                <div className='results-header'>
                    <p style={{fontWeight: '500'}}>{contentArr.length} ITEMS</p>
                    <div style={{display: 'flex', gap: '1rem'}}>
                        <p style={{fontWeight: '500'}}>SORT BY:</p>
                        <p>Newest</p>
                        <p>Price Low-High</p>
                        <p>Price High-Low</p>
                        <p>Discount</p>
                    </div>
                </div>
                <div className='filter-results-card-container'>
                    {
                        contentArr.map((item, idx) => {
                            return <QuickAddCards  key={idx} id={idx}/>
                        })
                    }
                </div>
            </div>
        </main>
    </div>
  )
}

export default page