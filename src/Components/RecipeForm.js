import React, { useState } from 'react';
import './RecipeForm.css';


function RecipeForm({setIndian}) {

  const [dynamicItems, setDynamicItems,index] = useState([]);
  const [staticItem1, setStaticItem1] = useState('');
  const [staticItem2, setStaticItem2] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [description1, setDescription]=useState('');

  const handleDynamicItemAdd = () => {
    setDynamicItems([...dynamicItems, '']);
  };

  const [isVisible1, setIsVisible1] = useState(false);

  const handleDynamicItemChange = (index, value) => {
    const updatedItems = [...dynamicItems];
    updatedItems[index] = value;
    setDynamicItems(updatedItems);
  };

  const handleRemoveField = (index) => {
    const values = [...dynamicItems];
    values.splice(index, 1);
    setDynamicItems(values);
  };

  const handleSubmit = ()=> {
    setIndian(prev=> [...prev, {id: prev.length+1, title: staticItem1, ingredients: dynamicItems, steps: staticItem2, img: imgUrl, description: description1}]);
    setIsVisible1(false);
  }

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImgUrl(URL.createObjectURL(event.target.files[0]));
    }
   }


  return (<>
  <div className='view-div' id='view-more-recipe'>
    <button id='view_form' className='view_form_btn' onClick={() => setIsVisible1(!isVisible1)}>Add a Recipe</button>
    </div>
    {isVisible1 && (
    <div className='add_recform'>
        <forms className="addd" >
            <p id='add-heading'>ADD YOUR RECIPES</p>

            {/* Static Section 1 */}
            <div className='icon_title'>
                <img src='images/title_icon.png' className='rec_img' />
                <input
                type="text"
                value={staticItem1}
                onChange={(e) => setStaticItem1(e.target.value)}
                className='title-input'
                placeholder='Add a Title to your Recipe'
                />
            </div>


            <div className="form-img">
            <p id='addimg'> ADD IMAGE : </p>
              <div className='icon_img'>
                  <img src='images/img_icon.png' className='addimg-icon' />
                  <input id="formimg" type="file" className='image-input' placeholder='ADD IMAGE' onChange={onImageChange} />
              </div>
              </div>



                <div className='icon_ingre'>
                    {/* <h2>Ingredients</h2> */}
                    <img src='images/ingredient.png' className='ingredientimg' />
                    <button  className="rec_button" onClick={handleDynamicItemAdd}>ADD INGREDIENT</button>
                    <button type="button" className="rec_button1"  onClick={() => handleRemoveField(index)}>x</button>
                    {dynamicItems.map((item, index) => (

                        <div key={index} >
                          {/* <label>INGREDIENTS :</label>  */}
                          <div className='icon_ingredients'>
                            <img src='images/ingre_icon.png' id='ingreimg'/>
                          <input
                            type="text" name = "Ingredients"
                            value={item.ingredients}
                            onChange={(e) => handleDynamicItemChange(index, e.target.value)}
                            className='ingre-input'
                            placeholder='Add your Ingredients'
                            />
                            </div>
                        </div>
                    ))}
                    
              </div><br/>
              <div className='description'>
              <img src='images/caption.png' className='despimg' />
              <input
                type="text"
                value={description1}
                onChange={(e) => setDescription(e.target.value)}
                className='desc-input'
                placeholder='Add a Description to your Recipe'
                />
              </div>
            {/* {'\n'} */}

            {/* Static Section 2 */}
            <div className='icon_steps'>
                {/* <label>STEPS TO PREPARE : </label> */}
                <img src='images/prep_icon.png' className='stepsimg' />
                <textarea
                type="text"
                value={staticItem2}
                onChange={(e) => setStaticItem2(e.target.value)}
                className='stepsinput'
                placeholder='Steps To Prepare'
                />
            </div>
             <div className='submitbtn'>     
                  <button id='form-close' className="rec_butt1" type="submit" onClick={handleSubmit} >SUBMIT</button>
             </div>
             <button id='close_form' className='close_form' onClick={() => setIsVisible1(!isVisible1)}>X</button>
      </forms>
    
    </div>
    )}
    </>
  );
}

export default RecipeForm;