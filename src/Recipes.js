import { labels } from "./labels";

function Recipes({element}) {
    return (
        <div className="recipe">
            <div className="reicpe-title">
                <h2>{element.label}</h2>
            </div>
            <div className="details">
                <div className="recipe-left">
                    <img src={element.image} alt="dish" className="dish"/>
                    <p>{element.calories.toFixed()} calories</p>
                    <div className="labels">
                        {labels.map((item, index) => {
                            if (element.healthLabels.includes(item.label)) {
                                return (
                                    <p key={index} className={item.class + " label"}>{"• " + item.label}</p>
                                )
                            }
                            return null;
                        })}
                    </div>
                </div>
                <div className="recipe-right">
                    <ul>
                        {element.ingredients.map((ingredient, index) => (
                            <li key={index}>
                                <img src="https://img.icons8.com/metro/512/checked.png" alt="icon" width="16px" className="icon"/>
                                {ingredient.text}
                            </li>
                        ))}
                    </ul>
                    <a href={element.url} target="_blank" rel="noopener noreferrer">See recipe &gt;&gt;</a>    
                </div> 
            </div>       
        </div>
    )
}

export default Recipes;