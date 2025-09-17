import React, { useContext } from "react";
import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../tic-tac-toe";
import RandomColor from "../random-color";
import Accordian from "../accordian";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data";
export default function FeatureFlags() {
  const { enabledFlags, loading } = useContext(FeatureFlagsContext);
  const componentsToRender = [
    {
      key: "showLightAndMode",
      components: <LightDarkMode />,
    },
    {
      key: "showTicTacToe",
      components: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      components: <RandomColor />,
    },
    {
      key: "ShowAccordian",
      components: <Accordian />,
    },
    {
      key: "showTreeView",
      components: <TreeView menus={menus} />,
    },
  ];
  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }
  if (loading) return <div>Loading data Please wait</div>;

  return (
    <div className="min-w-full">
      <h1>Feature Flags</h1>
      {componentsToRender.map(
        (componentItem) =>
          checkEnabledFlags(componentItem.key) && componentItem.components
      )}
    </div>
  );
}
