import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"
// Getting Started
import Installation from "./components/Getting Started/Installation"
// Core Concepts
import ResponsiveDesign from "./components/Core Concepts/ResponsiveDesign"
import Colors from "./components/Core Concepts/Colors"
import UtilityFunda from "./components/Core Concepts/UtilityFunda"

// Tables
import BorderCollapse from "./components/Tables/BorderCollapse"
import TableLayout from "./components/Tables/TableLayout"
// Accessibility
import ScreenReader from "./components/Accessibility/ScreenReader";
// Backgrounds
import BackgroundAttachment from "./components/Backgrounds/BackgroundAttachment";
import BackgroundClip from "./components/Backgrounds/BackgroundClip";
import BackgroundColor from "./components/Backgrounds/BackgroundColor";
import BackgroundImage from "./components/Backgrounds/BackgroundImage";
import BackgroundOpacity from "./components/Backgrounds/BackgroundOpacity";
import BackgroundOrigin from "./components/Backgrounds/BackgroundOrigin";
import BackgroundPosition from "./components/Backgrounds/BackgroundPosition";
import BackgroundRepeat from "./components/Backgrounds/BackgroundRepeat";
import BackgroundSize from "./components/Backgrounds/BackgroundSize";
import GradientColorStops from "./components/Backgrounds/GradientColorStops";
// Borders
import BorderColor from "./components/Borders/BorderColor";
import BorderOpacity from "./components/Borders/BorderOpacity";
import BorderRadius from "./components/Borders/BorderRadius";
import BorderStyle from "./components/Borders/BorderStyle";
import BorderWidth from "./components/Borders/BorderWidth";
import DivideColor from "./components/Borders/DivideColor";
import DivideOpacity from "./components/Borders/DivideOpacity";
import DivideStyle from "./components/Borders/DivideStyle";
import DivideWidth from "./components/Borders/DivideWidth";
import RingColor from "./components/Borders/RingColor";
import RingOffsetColor from "./components/Borders/RingOffsetColor";
import RingOffsetWidth from "./components/Borders/RingOffsetWidth";
import RingOpacity from "./components/Borders/RingOpacity";
import RingWidth from "./components/Borders/RingWidth";
// Effects
import BackgroundBlendMode from "./components/Effects/BackgroundBlendMode";
import MixBlendMode from "./components/Effects/MixBlendMode";
import Opacity from "./components/Effects/Opacity";
import BoxShadow from "./components/Effects/BoxShadow";
// Filters
import BackdropBlur from "./components/Filters/BackdropBlur";
import BackdropBrightness from "./components/Filters/BackdropBrightness";
import BackdropContrast from "./components/Filters/BackdropContrast";
import BackdropFilter from "./components/Filters/BackdropFilter";
import BackdropGrayscale from "./components/Filters/BackdropGrayscale";
import BackdropHueRotate from "./components/Filters/BackdropHueRotate";
import BackdropInvert from "./components/Filters/BackdropInvert";
import BackdropOpacity from "./components/Filters/BackdropOpacity";
import BackdropSaturate from "./components/Filters/BackdropSaturate";
import Blur from "./components/Filters/Blur";
import Brightness from "./components/Filters/Brightness";
import Contrast from "./components/Filters/Contrast";
import DropShadow from "./components/Filters/DropShadow";
import Grayscale from "./components/Filters/Grayscale";
import HueRotate from "./components/Filters/HueRotate";
import Invert from "./components/Filters/Invert";
import Saturate from "./components/Filters/Saturate";
import Sepia from "./components/Filters/Sepia";
import Filter from "./components/Filters/Filter";
// FlexGrid
import FlexDirection from "./components/FlexGrid/FlexDirection";
import FlexGrow from "./components/FlexGrid/FlexGrow";
import FlexShrink from "./components/FlexGrid/FlexShrink";
import FlexWrap from "./components/FlexGrid/FlexWrap";
import Gap from "./components/FlexGrid/Gap";
import GridAutoColumns from "./components/FlexGrid/GridAutoColumns";
import GridAutoFlow from "./components/FlexGrid/GridAutoFlow";
import GridAutoRows from "./components/FlexGrid/GridAutoRows";
import GridColumnStartEnd from "./components/FlexGrid/GridColumnStartEnd";
import GridRowStartEnd from "./components/FlexGrid/GridRowStartEnd";
import GridTemplateColumns from "./components/FlexGrid/GridTemplateColumns";
import GridTemplateRows from "./components/FlexGrid/GridTemplateRows";
import JustifyContent from "./components/FlexGrid/JustifyContent";
import JustifyItems from "./components/FlexGrid/JustifyItems";
import JustifySelf from "./components/FlexGrid/JustifySelf";
import Order from "./components/FlexGrid/Order";
import PlaceContent from "./components/FlexGrid/PlaceContent";
import PlaceItems from "./components/FlexGrid/PlaceItems";
import PlaceSelf from "./components/FlexGrid/PlaceSelf";
import AlignContent from "./components/FlexGrid/AlignContent";
import AlignItems from "./components/FlexGrid/AlignItems";
import AlignSelf from "./components/FlexGrid/AlignSelf";
// Interactivity
import Appearance from "./components/Interactivity/Appearance";
import Cursor from "./components/Interactivity/Cursor";
import Outline from "./components/Interactivity/Outline";
import PointerEvents from "./components/Interactivity/PointerEvents";
import Resize from "./components/Interactivity/Resize";
import UserSelect from "./components/Interactivity/UserSelect";
// Layout
import BoxDeco from "./components/Layout/BoxDeco";
import BoxSizing from "./components/Layout/BoxSizing";
import Clear from "./components/Layout/Clear";
import Floats from "./components/Layout/Floats";
import Isolation from "./components/Layout/Isolation";
import ObjectFit from "./components/Layout/ObjectFit";
import ObjectPos from "./components/Layout/ObjectPos";
import Overflow from "./components/Layout/Overflow";
import Position from "./components/Layout/Position";
import TBLR from "./components/Layout/TBLR";
import Visibility from "./components/Layout/Visibility";
import ZIndex from "./components/Layout/ZIndex";
import Container from "./components/Layout/Container";
import Display from "./components/Layout/Display";
import Overscroll from "./components/Layout/Overscroll";
// Sizing
import Height from "./components/Sizing/Height";
import MaxHeight from "./components/Sizing/MaxHeight";
import MaxWidth from "./components/Sizing/MaxWidth";
import MinHeight from "./components/Sizing/MinHeight";
import MinWidth from "./components/Sizing/MinWidth";
import Width from "./components/Sizing/Width";

// Spacing
import Padding from "./components/Spacing/Padding";
import SpaceBetween from "./components/Spacing/SpaceBetween";
import Margin from "./components/Spacing/Margin";
// SVGS
import Fill from "./components/SVGS/Fill";
import Stroke from "./components/SVGS/Stroke";
import StrokeWidth from "./components/SVGS/StrokeWidth";
// Transform
import Rotate from "./components/Transform/Rotate";
import Scale from "./components/Transform/Scale";
import Skew from "./components/Transform/Skew";
import Transform from "./components/Transform/Transform";
import TransformOrigin from "./components/Transform/TransformOrigin";
import Translate from "./components/Transform/Translate";
// TransitionAn
import Animation from "./components/TransitionAn/Animation";
import TransitionDelay from "./components/TransitionAn/TransitionDelay";
import TransitionDuration from "./components/TransitionAn/TransitionDuration";
import TransitionProperty from "./components/TransitionAn/TransitionProperty";
import TransitionTimingFunction from "./components/TransitionAn/TransitionTimingFunction";
// Typography
import FontFamily from "./components/Typography/FontFamily";
import FontSize from "./components/Typography/FontSize";
import FontSmoothing from "./components/Typography/FontSmoothing";
import FontStyle from "./components/Typography/FontStyle";
import FontVariantNumeric from "./components/Typography/FontVariantNumeric";
import FontWeight from "./components/Typography/FontWeight";
import LetterSpacing from "./components/Typography/LetterSpacing";
import LineHeight from "./components/Typography/LineHeight";
import ListStylePosition from "./components/Typography/ListStylePosition";
import ListStyleType from "./components/Typography/ListStyleType";
import PlaceholderColor from "./components/Typography/PlaceholderColor";
import PlaceholderOpacity from "./components/Typography/PlaceholderOpacity";
import TextAlign from "./components/Typography/TextAlign";
import TextColor from "./components/Typography/TextColor";
import TextDecoration from "./components/Typography/TextDecoration";
import TextOpacity from "./components/Typography/TextOpacity";
import TextOverflow from "./components/Typography/TextOverflow";
import TextTransform from "./components/Typography/TextTransform";
import VerticalAlign from "./components/Typography/VerticalAlign";
import Whitespace from "./components/Typography/Whitespace";
import WordBreak from "./components/Typography/WordBreak";


export default function Docs() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 from-40% via-blue-600 via-60% to-blue-700 to-100%">
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex pt-24 h-[calc(100vh-1rem)]">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="flex-1 overflow-y-auto px-4">
          <Routes>
            <Route path="/" element={<Navigate to="Getting Started/Installation" replace />} />
            <Route path="/Getting Started/Installation" element={<Installation />} />

            <Route path="/Core Concepts/ResponsiveDesign" element={<ResponsiveDesign />} />
            <Route path="/Core Concepts/Colors" element={<Colors />} />
            {/* <Route path="/Core Concepts/UtilityFunda" element={<UtilityFunda />} /> */}


            <Route path="/Tables/BorderCollapse" element={<BorderCollapse />} />
            <Route path="/Tables/TableLayout" element={<TableLayout />} />

            <Route path="/Accessibility/ScreenReader" element={<ScreenReader />} />

            <Route path="/FlexGrid/AlignContent" element={<AlignContent />} />
            <Route path="/FlexGrid/AlignItems" element={<AlignItems />} />
            <Route path="/FlexGrid/AlignSelf" element={<AlignSelf />} />
            <Route path="/FlexGrid/FlexDirection" element={<FlexDirection />} />
            <Route path="/FlexGrid/FlexGrow" element={<FlexGrow />} />
            <Route path="/FlexGrid/FlexShrink" element={<FlexShrink />} />
            <Route path="/FlexGrid/FlexWrap" element={<FlexWrap />} />
            <Route path="/FlexGrid/JustifyContent" element={<JustifyContent />} />
            <Route path="/FlexGrid/JustifyItems" element={<JustifyItems />} />
            <Route path="/FlexGrid/JustifySelf" element={<JustifySelf />} />
            <Route path="/FlexGrid/Order" element={<Order />} />
            <Route path="/FlexGrid/PlaceContent" element={<PlaceContent />} />
            <Route path="/FlexGrid/PlaceItems" element={<PlaceItems />} />
            <Route path="/FlexGrid/PlaceSelf" element={<PlaceSelf />} />
            <Route path="/FlexGrid/Gap" element={<Gap />} />
            <Route path="/FlexGrid/GridAutoColumns" element={<GridAutoColumns />} />
            <Route path="/FlexGrid/GridAutoFlow" element={<GridAutoFlow />} />
            <Route path="/FlexGrid/GridAutoRows" element={<GridAutoRows />} />
            <Route path="/FlexGrid/GridColumnStartEnd" element={<GridColumnStartEnd />} />
            <Route path="/FlexGrid/GridRowStartEnd" element={<GridRowStartEnd />} />
            <Route path="/FlexGrid/GridTemplateColumns" element={<GridTemplateColumns />} />
            <Route path="/FlexGrid/GridTemplateRows" element={<GridTemplateRows />} />

            <Route path="/Interactivity/Appearance" element={<Appearance />} />
            <Route path="/Interactivity/Cursor" element={<Cursor />} />
            <Route path="/Interactivity/Outline" element={<Outline />} />
            <Route path="/Interactivity/PointerEvents" element={<PointerEvents />} />
            <Route path="/Interactivity/Resize" element={<Resize />} />
            <Route path="/Interactivity/UserSelect" element={<UserSelect />} />
            <Route path="/Interactivity/Visibility" element={<Visibility />} />

            <Route path="/Layout/BoxDeco" element={<BoxDeco />} />
            <Route path="/Layout/Display" element={<Display />} />
            <Route path="/Layout/Position" element={<Position />} />
            <Route path="/Layout/Overflow" element={<Overflow />} />
            <Route path="/Layout/ZIndex" element={<ZIndex />} />
            <Route path="/Layout/Container" element={<Container />} />
            <Route path="/Layout/Floats" element={<Floats />} />
            <Route path="/Layout/Clear" element={<Clear />} />
            <Route path="/Layout/Isolation" element={<Isolation />} />
            <Route path="/Layout/ObjectFit" element={<ObjectFit />} />
            <Route path="/Layout/ObjectPos" element={<ObjectPos />} />
            <Route path="/Layout/TBLR" element={<TBLR />} />
            <Route path="/Layout/Overscroll" element={<Overscroll />} />
            <Route path="/Layout/BoxSizing" element={<BoxSizing />} />
            <Route path="/Layout/Visibility" element={<Visibility />} />
            <Route path="/Layout/ZIndex" element={<ZIndex />} />

            <Route path="/Typography/FontFamily" element={<FontFamily />} />
            <Route path="/Typography/FontSize" element={<FontSize />} />
            <Route path="/Typography/FontSmoothing" element={<FontSmoothing />} />
            <Route path="/Typography/FontStyle" element={<FontStyle />} />
            <Route path="/Typography/FontVariantNumeric" element={<FontVariantNumeric />} />
            <Route path="/Typography/FontWeight" element={<FontWeight />} />
            <Route path="/Typography/LetterSpacing" element={<LetterSpacing />} />
            <Route path="/Typography/LineHeight" element={<LineHeight />} />
            <Route path="/Typography/TextAlign" element={<TextAlign />} />
            <Route path="/Typography/TextDecoration" element={<TextDecoration />} />
            <Route path="/Typography/TextTransform" element={<TextTransform />} />
            <Route path="/Typography/VerticalAlign" element={<VerticalAlign />} />
            <Route path="/Typography/Whitespace" element={<Whitespace />} />
            <Route path="/Typography/WordBreak" element={<WordBreak />} />
            <Route path="/Typography/TextColor" element={<TextColor />} />
            <Route path="/Typography/TextOpacity" element={<TextOpacity />} />
            <Route path="/Typography/PlaceholderColor" element={<PlaceholderColor />} />
            <Route path="/Typography/PlaceholderOpacity" element={<PlaceholderOpacity />} />
            <Route path="/Typography/TextOverflow" element={<TextOverflow />} />
            <Route path="/Typography/ListStylePosition" element={<ListStylePosition />} />
            <Route path="/Typography/ListStyleType" element={<ListStyleType />} />

            <Route path="/Sizing/Height" element={<Height />} />
            <Route path="/Sizing/MaxHeight" element={<MaxHeight />} />
            <Route path="/Sizing/MaxWidth" element={<MaxWidth />} />
            <Route path="/Sizing/MinHeight" element={<MinHeight />} />
            <Route path="/Sizing/MinWidth" element={<MinWidth />} />
            <Route path="/Sizing/Width" element={<Width />} />

            <Route path="/Spacing/Padding" element={<Padding />} />
            <Route path="/Spacing/SpaceBetween" element={<SpaceBetween />} />
            <Route path="/Spacing/Margin" element={<Margin />} />

            <Route path="/Borders/BorderColor" element={<BorderColor />} />
            <Route path="/Borders/BorderOpacity" element={<BorderOpacity />} />
            <Route path="/Borders/BorderRadius" element={<BorderRadius />} />
            <Route path="/Borders/BorderWidth" element={<BorderWidth />} /> 
            <Route path="/Borders/BorderStyle" element={<BorderStyle />} />
            <Route path="/Borders/DivideColor" element={<DivideColor />} />
            <Route path="/Borders/DivideOpacity" element={<DivideOpacity />} />
            <Route path="/Borders/DivideWidth" element={<DivideWidth />} />
            <Route path="/Borders/DivideStyle" element={<DivideStyle />} />
            <Route path="/Borders/RingColor" element={<RingColor />} />
            <Route path="/Borders/RingOpacity" element={<RingOpacity />} />
            <Route path="/Borders/RingOffsetColor" element={<RingOffsetColor />} />
            <Route path="/Borders/RingOffsetWidth" element={<RingOffsetWidth />} />
            <Route path="/Borders/RingWidth" element={<RingWidth />} />

            <Route path="/Effects/BoxShadow" element={<BoxShadow />} />
            <Route path="/Effects/BackgroundBlendMode" element={<BackgroundBlendMode />} />
            <Route path="/Effects/MixBlendMode" element={<MixBlendMode />} />
            <Route path="/Effects/Opacity" element={<Opacity />} />
            
            <Route path="/Filters/BackdropBlur" element={<BackdropBlur />} />
            <Route path="/Filters/BackdropBrightness" element={<BackdropBrightness />} />
            <Route path="/Filters/BackdropContrast" element={<BackdropContrast />} />
            <Route path="/Filters/BackdropFilter" element={<BackdropFilter />} />
            <Route path="/Filters/BackdropGrayscale" element={<BackdropGrayscale />} />
            <Route path="/Filters/BackdropHueRotate" element={<BackdropHueRotate />} />
            <Route path="/Filters/BackdropInvert" element={<BackdropInvert />} />
            <Route path="/Filters/BackdropOpacity" element={<BackdropOpacity />} />
            <Route path="/Filters/BackdropSaturate" element={<BackdropSaturate />} />
            <Route path="/Filters/Blur" element={<Blur />} />
            <Route path="/Filters/Brightness" element={<Brightness />} />
            <Route path="/Filters/Contrast" element={<Contrast />} />
            <Route path="/Filters/Grayscale" element={<Grayscale />} />
            <Route path="/Filters/HueRotate" element={<HueRotate />} />
            <Route path="/Filters/Invert" element={<Invert />} />
            <Route path="/Filters/Saturate" element={<Saturate />} />
            <Route path="/Filters/Sepia" element={<Sepia />} />
            <Route path="/Filters/DropShadow" element={<DropShadow />} />
            <Route path="/Filters/Filter" element={<Filter />} />

            <Route path="/Backgrounds/BackgroundAttachment" element={<BackgroundAttachment />} />
            <Route path="/Backgrounds/BackgroundClip" element={<BackgroundClip />} />
            <Route path="/Backgrounds/BackgroundColor" element={<BackgroundColor />} />
            <Route path="/Backgrounds/BackgroundImage" element={<BackgroundImage />} />
            <Route path="/Backgrounds/BackgroundOpacity" element={<BackgroundOpacity />} />
            <Route path="/Backgrounds/BackgroundOrigin" element={<BackgroundOrigin />} />
            <Route path="/Backgrounds/BackgroundPosition" element={<BackgroundPosition />} />
            <Route path="/Backgrounds/BackgroundRepeat" element={<BackgroundRepeat />} />
            <Route path="/Backgrounds/BackgroundSize" element={<BackgroundSize />} />
            <Route path="/Backgrounds/GradientColorStops" element={<GradientColorStops />} />

            <Route path="/Transform/Rotate" element={<Rotate />} />
            <Route path="/Transform/Scale" element={<Scale />} /> 
            <Route path="/Transform/Skew" element={<Skew />} />
            <Route path="/Transform/Transform" element={<Transform />} />
            <Route path="/Transform/TransformOrigin" element={<TransformOrigin />} />
            <Route path="/Transform/Translate" element={<Translate />} />

            <Route path="/TransitionAn/Animation" element={<Animation />} />
            <Route path="/TransitionAn/TransitionDelay" element={<TransitionDelay />} />
            <Route path="/TransitionAn/TransitionDuration" element={<TransitionDuration />} />
            <Route path="/TransitionAn/TransitionProperty" element={<TransitionProperty />} />
            <Route path="/TransitionAn/TransitionTimingFunction" element={<TransitionTimingFunction />} />

            <Route path="/SVGS/Fill" element={<Fill />} />
            <Route path="/SVGS/Stroke" element={<Stroke />} />
            <Route path="/SVGS/StrokeWidth" element={<StrokeWidth />} />

          </Routes>
        </main>
      </div>
    </div>
  )
}

