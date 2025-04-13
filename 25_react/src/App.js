import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load_more_data';
import TreeView from './components/tree_view';
import menus from './components/tree_view/data';

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian /> */}

      {/* Random Color component */}
      {/* <RandomColor /> */}

      {/* Star Rating component */}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image slider component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page={"1"}/> */}

      {/* Load More Products component */}
      {/* <LoadMoreData /> */}

      {/* Tree view component/menu UI component/ recursive navigation menu */}
      <TreeView menus= {menus} />
    </div>
  );
}

export default App;
