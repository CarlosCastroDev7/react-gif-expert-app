import { useState } from "react"

export const AddCategory = ( { onAddCategory } ) => {
    const [inputValue, setinputValue] = useState('')

    const onInputChange = (event) =>{
        setinputValue( event.target.value )
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length < 1) return;
        onAddCategory( inputValue.trim() )
        // setcategories( (categories) => [inputValue , ... categories]);
        setinputValue('')
    }
    
  return (
    <form onSubmit={onSubmit}>
        <input
            type="text" 
            placeholder="Buscar gifts"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}
