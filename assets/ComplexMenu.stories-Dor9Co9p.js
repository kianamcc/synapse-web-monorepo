import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-IA9r5eyT.js";import{C as p}from"./ComplexMenu-BnTKcyAk.js";import"./createSvgIcon-Bk0gUnDt.js";import"./index-B1Y1SQar.js";import"./iframe-D6gq1sv4.js";import"./createTheme-B4hKxUS9.js";import"./DefaultPropsProvider-DZdPioNL.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-Cp5Ie4ZG.js";import"./useTheme-DTxpHhlU.js";import"./Tooltip-X5cfteO5.js";import"./index-B3zxRHeA.js";import"./useSlot-6G-U546i.js";import"./useForkRef-Cym8eqpZ.js";import"./useTimeout-AyHDji-w.js";import"./useControlled-CRvO6k9i.js";import"./getReactElementRef-BfWTqiuC.js";import"./index-vSos4i3w.js";import"./index-Pxasz3mk.js";import"./Grow-C1PLrN8K.js";import"./Popper-CoeHOVbM.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-B7EfCnAz.js";import"./ContentCopyTwoTone-B2r27jF9.js";import"./HelpOutlineTwoTone-DEdLs5Us.js";import"./ErrorOutlined-VVG6AVxG.js";import"./GetAppTwoTone-B9lLA1Cp.js";import"./InfoOutlined-CWmYMyEO.js";import"./PhoneTwoTone-B5ZGtGCL.js";import"./DeleteTwoTone-BOHWykvW.js";import"./CheckCircleTwoTone-C6_eyISX.js";import"./DropdownMenu-C929r90b.js";import"./Button-Di83tVtK.js";import"./createSimplePaletteValueFilter-CkzHcWbd.js";import"./ButtonBase-BM_vlHn6.js";import"./CircularProgress-BwsSwLYa.js";import"./Typography-huEi4QvC.js";import"./index-DtMmAOuf.js";import"./extendSxProp-CJZLwvsA.js";import"./Fade-CFP0AL3B.js";import"./Paper-DWozaVgO.js";import"./ClickAwayListener-CHA6O-3v.js";import"./MenuList-C17DFYm9.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-ZLCRfw6D.js";import"./MenuItem-CqEmyfW0.js";import"./dividerClasses-DMeQzdJb.js";import"./ListItemIcon-BpWgbuvS.js";import"./ListItemText-BrI_Pe-o.js";import"./Divider-CXRmrUOq.js";import"./IconSvgButton-zpYnIjId.js";import"./IconButton-BlF3WGn2.js";import"./index-DZ30YIPI.js";import"./getThemeProps-uTljI9bI.js";import"./Box-BE-t5V3S.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    iconButtons: [{
      icon: 'edit',
      tooltipText: 'This is an icon button',
      onClick: onClickHandler('edit icon')
    }, {
      icon: 'label',
      tooltipText: 'View annotations',
      onClick: onClickHandler('label icon')
    }, {
      icon: 'createVersion',
      tooltipText: 'Create new version',
      onClick: onClickHandler('createVersion icon')
    }],
    dropdownMenus: [{
      dropdownButtonText: 'You can have...',
      buttonProps: {
        endIcon: <IconSvg icon="upload" wrap={false} />
      },
      items: [[{
        text: 'Do something cool',
        onClick: onClickHandler(0)
      }, {
        text: 'This one has a tooltip',
        tooltipText: 'Some more info',
        onClick: onClickHandler(1)
      }, {
        text: 'This one is disabled',
        disabled: true,
        onClick: onClickHandler(3)
      }, {
        text: 'This one has both',
        disabled: true,
        tooltipText: "You can't do this for reasons",
        onClick: onClickHandler(4)
      }], [{
        text: 'You can organize actions into groups',
        onClick: onClickHandler(5)
      }]]
    }, {
      dropdownButtonText: '...multiple dropdown menus!',
      buttonProps: {
        endIcon: <IconSvg icon="download" wrap={false} />
      },
      items: [[{
        text: 'Do something cool',
        onClick: onClickHandler(0)
      }, {
        text: 'This one has a tooltip',
        tooltipText: 'Some more info',
        onClick: onClickHandler(1)
      }, {
        text: 'This one is disabled',
        disabled: true,
        onClick: onClickHandler(3)
      }, {
        text: 'This one has both',
        disabled: true,
        tooltipText: "You can't do this for reasons",
        onClick: onClickHandler(4)
      }], [{
        text: 'You can organize actions into groups',
        onClick: onClickHandler(5)
      }]]
    }]
  }
}`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const Co=["Demo"];export{t as Demo,Co as __namedExportsOrder,xo as default};
