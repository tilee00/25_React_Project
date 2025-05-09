import './App.css';
import Accordian from './components/1-accordian';
import TabTest from './components/10-custom_tabs/tab_test';
import ModalTest from './components/11-custom_modal_popup/modal_test';
import GithubProfileFinder from './components/12-github_profile_finder';
import SearchAutoComplete from './components/13-search_autocomplete_with_api';
import TicTacToe from './components/14-tic_tac_toe';
import RandomColor from './components/2-random-color';
import StarRating from './components/3-star-rating';
import ImageSlider from './components/4-image-slider';
import LoadMoreData from './components/5-load_more_data';
import TreeView from './components/6-tree_view';
import menus from './components/6-tree_view/data';
import QRCodeGenerator from './components/7-qr_code_generator';
import LightDarkMode from './components/8-light_dark_mode';
import ScrollIndicator from './components/9-scroll_indicator';

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
      {/* <TreeView menus= {menus} /> */}

      {/* QR Code Generator */}
      {/* <QRCodeGenerator /> */}

      {/* Light and dark theme switch */}
      {/* <LightDarkMode /> */}

      {/* Scroll indicator component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* Custom tabs components */}
      {/* <TabTest /> */}

      {/* Custom Modal component */}
      {/* <ModalTest /> */}

      {/* Github profile finder */}
      {/* <GithubProfileFinder /> */}

      {/* Search AutoComplete */}
      {/* <SearchAutoComplete /> */}

      {/* Tic Tac Toe */}
      <TicTacToe />
    </div>
  );
}

export default App;
