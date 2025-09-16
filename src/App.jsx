import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import RandomColor from "./components/random-color";
import StarRating from "./components/star_rating";
import TreeView from "./components/tree-view/index.jsx";
import menus from "./components/tree-view/data.js";
import QrCodeGenerator from "./components/qr-code-generator/index.jsx";
import LightDarkMode from "./components/light-dark-mode/index.jsx";
import ScrollIndicator from "./components/scroll-indicator/index.jsx";
import TabTest from "./components/custom-tabs/tab-test.jsx";
import ModalTest from "./components/custom-modal-popup/modal-test.jsx";
import GithubProfileFinder from "./components/github-profile-finder/index.jsx";
import SearchAutoComplete from "./components/search-autocomplete-with-api/index.jsx";

const App = () => {
  return (
    <div className="flex justify-cen">
      {/* Accordian */}
      {/* <Accordian /> */}
      {/* Random Color */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <ImageSlider url={`https://picsum.photos/v2/list`} limit={"10"} page={'1'}/> */}
      {/*<LoadMoreData />*/}
      {/*<TreeView menus={menus} />*/}
      {/*<QrCodeGenerator />*/}
      {/*<LightDarkMode />*/}
      {/*<ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />*/}
      {/*  <TabTest/>*/}
      {/*<ModalTest />*/}
      {/* <GithubProfileFinder/> */}
      <SearchAutoComplete />
    </div>
  );
};

export default App;
