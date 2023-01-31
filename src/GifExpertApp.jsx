import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Valorant']);
    
    const onAddCategory = ( newCategory ) =>{
        if( categories.includes(newCategory)) return;
        setcategories([newCategory,... categories])
    }

  return (
   <>
        <h1>GiftExpertApp</h1>

        <AddCategory
            onAddCategory = { (newCategory) => onAddCategory(newCategory)}
        />

        { categories.map( category => ( 
            <GifGrid 
                key={category} 
                category={category}
            />
        ))}
   </>
  )
}
