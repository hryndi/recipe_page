import previewImage from "./assets/image-omelette.jpeg";
function App() {
  return (
    <>
      <main>
        <img src={previewImage} alt="" /> <h1>Simple Omelette Recipe</h1>
        <p className="description">
          An easy and quick dish, perfekt for any meal. This classic omelette combines beaten eggs cooked to perfection,
          optionally filled with your choice of cheese, vegetables, or meats.
        </p>
        <div className="preparation-time">
          <h3>Preparation time</h3>
          <ul className="preparation-time-li">
            <li>
              <b>Total: </b>Approximately 10 minutes
            </li>
            <li>
              <b>Preparation: </b> 5 minutes
            </li>
            <li>
              <b>Cooking: </b> 5 minutes
            </li>
          </ul>
        </div>
        <h2>Ingredients</h2>
        <ul className="ingredients-li">
          <li>2-3 large eggs</li> <li>Salt, to taste</li> <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li> Optional fillings: cheese, diced vegetables, cooked meats, herbs </li>
        </ul>
        <hr /> <h2>Instructions</h2>
        <ol className="instructions-ol">
          <li>
            <span>
              <b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
              You can add a tablespoon of water or milk for a fluffier texture.
            </span>
          </li>
          <li>
            <span>
              <b>Heat the pan:</b> Place a non-stick frying pan over medium heat and add butteer or oil.
            </span>
          </li>
          <li>
            <span>
              <b>Cook the omelette:</b> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
              the eggs evenly coat the surface
            </span>
          </li>
          <li>
            <span>
              <b>Add fillings (optional):</b> When the eggs begin to set at the edges but are still slightly runny in
              the middle, sprinkle your chosen fillings over one half of the omelette.
            </span>
          </li>
          <li>
            <span>
              <b>Fold and serve:</b> As the omelette continues to cook, carefully lift one edge and fold it over the
              fillings. Let it cook for another minute, then slide it onto a plate.
            </span>
          </li>
          <li>
            <span>
              <b>Enjoy:</b> Serve hat, with additional salt and pepper if needed.
            </span>
          </li>
        </ol>
        <hr /> <h2>Nutrition</h2>
        <p className="nutrion-description">
          The table below shows nutritional values per serving without the additional fillings.
        </p>
        <table>
          <tr className="bordered">
            <td>Calories</td> <td>277kcal</td> {/* <hr className="table-hr" /> */}
          </tr>
          <tr>
            <td>Carbs</td> <td>0g</td> {/* <hr className="table-hr" /> */}
          </tr>
          <tr>
            <td>Protein</td> <td>20g</td>
          </tr>
          <tr>
            <td>Fat</td> <td>22g</td>
          </tr>
        </table>
      </main>
    </>
  );
}
export default App;
