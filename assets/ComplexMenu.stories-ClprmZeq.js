import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-B6yzOPiy.js";import{C as p}from"./ComplexMenu-C_u2CDFh.js";import"./createSvgIcon-2weW28Tb.js";import"./index-iWrNDPyn.js";import"./iframe-BriZTfYJ.js";import"./createTheme-BKSRxlFY.js";import"./DefaultPropsProvider-Dk_kZRJu.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-CeiPl9f9.js";import"./useTheme-DrVid__q.js";import"./Tooltip-BBkEZVsV.js";import"./index-DwfN2JNN.js";import"./useSlot-wM5YqEUc.js";import"./useForkRef-BYwnSTRU.js";import"./useTimeout-Brm08kXR.js";import"./useControlled-NJoxe6_U.js";import"./getReactElementRef-BQegNSOc.js";import"./index-5Pe9y6Wq.js";import"./index-D7oizWyO.js";import"./Grow-Bl2jRLCy.js";import"./Popper-D5FqFR9Q.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-BEWDtzjH.js";import"./ContentCopyTwoTone-DKUMVH0q.js";import"./HelpOutlineTwoTone-CsR0O1al.js";import"./ErrorOutlined-HTMOkeq9.js";import"./GetAppTwoTone-Ca71QNg6.js";import"./InfoOutlined-ZL0CXlFE.js";import"./PhoneTwoTone-CRfjBapv.js";import"./DeleteTwoTone-Dy-7kujY.js";import"./CheckCircleTwoTone-CwvS_rbb.js";import"./DropdownMenu-CzJRXXFR.js";import"./Button-BnbeuRI8.js";import"./createSimplePaletteValueFilter-BlKw8DgR.js";import"./ButtonBase-CUjN_ROa.js";import"./CircularProgress-BbQEZxBg.js";import"./Typography-DBnBHKj4.js";import"./index-CTlyCBQq.js";import"./extendSxProp-Bi5llsJC.js";import"./Fade-CRjWlsVL.js";import"./Paper-BMBeNgEo.js";import"./ClickAwayListener-BZqRSxmE.js";import"./MenuList-B0VUEq9J.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-BG9jrAsw.js";import"./MenuItem-KX8LZ-HD.js";import"./dividerClasses-C3k9VAqv.js";import"./ListItemIcon-CoKe4YXH.js";import"./ListItemText-Cw5bllfg.js";import"./Divider-Cu-4IEDa.js";import"./IconSvgButton-BvPgSUkH.js";import"./IconButton-BRNCMgf9.js";import"./index-CeJYCVS2.js";import"./getThemeProps-BTWYATJj.js";import"./Box-Be4ueMoe.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
