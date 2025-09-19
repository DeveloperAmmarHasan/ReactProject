import { Provider } from "react-redux";
import { store } from "./components/TodoReduxToolkit/app/store.js";
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
import TicTacToe from "./components/tic-tac-toe/index.jsx";
import FeatureFlagGlobalState from "./components/feature-flags/context/index.jsx";
import FeatureFlags from "./components/feature-flags/index.jsx";
import UseFetchHookTest from "./components/use-fetch/test.jsx";
import UseOnClickOutsideTest from "./components/use-click-outside/test.jsx";
import UseWindowResizeTest from "./components/use-window-size/test.jsx";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom/index.jsx";
import ScrollToSection from "./components/scroll-to-section/index.jsx";
import Counter from "./components/counter/Counter.jsx";
import BgChanger from "./components/BgChanger/App.jsx";
import PasswordGenerator from "./components/Password-generator/PasswordGenerator.jsx";
import CurrencyConvertor from "./components/CurrencyConvertor/CurrencyConvertor.jsx";
import RouterApply from "./components/Router/RouterApply.jsx";
import TodoContext from "./components/TodoContextApi/TodoContextApp.jsx";
import TodoContextApp from "./components/TodoContextApi/TodoContextApp.jsx";
import TodoReduxTookit from "./components/TodoReduxToolkit/TodoReduxTookit.jsx";

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
      {/* <SearchAutoComplete /> */}
      {/* <TicTacToe /> */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}
      {/* <UseFetchHookTest /> */}
      {/* <UseOnClickOutsideTest /> */}
      {/* <UseWindowResizeTest /> */}
      {/* <ScrollToTopAndBottom /> */}
      {/* <ScrollToSection /> */}
      {/* <Counter /> */}
      {/* <BgChanger /> */}
      {/* <PasswordGenerator /> */}
      {/* <CurrencyConvertor /> */}
      {/* <RouterApply /> */}
      {/* <TodoContextApp /> */}
      <Provider store={store}>
        <TodoReduxTookit />
      </Provider>
    </div>
  );
};

export default App;
