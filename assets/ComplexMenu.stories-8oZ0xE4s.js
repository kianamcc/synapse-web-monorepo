import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-Ctqg29w2.js";import{C as p}from"./ComplexMenu-DCLvcgpM.js";import"./createSvgIcon-zcikS4QR.js";import"./index-iHqCGgSD.js";import"./iframe-B7lNEjCA.js";import"./createTheme-DVjZoLcM.js";import"./DefaultPropsProvider-Cyw12EVv.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-DdAf-Ccq.js";import"./useTheme-BpTHkjke.js";import"./Tooltip-lUCmHMJ3.js";import"./index-Do8mbRFX.js";import"./useSlot-Co92EhaQ.js";import"./useForkRef-QOk-agIc.js";import"./useTimeout-BDErO9dO.js";import"./useControlled-CTTwHfL4.js";import"./getReactElementRef-Deaobhwy.js";import"./index-CuVSgrUP.js";import"./index-BqdGDFpd.js";import"./Grow-D_bI5i2G.js";import"./Popper-DbiyN3lk.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-OzBaNcyW.js";import"./ContentCopyTwoTone-BntuHcdS.js";import"./HelpOutlineTwoTone-CgVanTZ9.js";import"./ErrorOutlined-DZW_dTZq.js";import"./GetAppTwoTone-C22AJoso.js";import"./InfoOutlined-DJ8fy-IJ.js";import"./PhoneTwoTone-BRHqzCS0.js";import"./DeleteTwoTone-k1aZ8QYv.js";import"./CheckCircleTwoTone-Ck5csnvz.js";import"./DropdownMenu-CSFdJeb4.js";import"./Button-D1Zc7cY5.js";import"./createSimplePaletteValueFilter-BiBnMtNg.js";import"./ButtonBase-CpibtBKw.js";import"./CircularProgress-CSoU-aEZ.js";import"./Typography-DBnwRkQ7.js";import"./index--3ZaasC4.js";import"./extendSxProp-C7d5w1mF.js";import"./Fade-BrjpvEaI.js";import"./Paper-l2vU89bV.js";import"./ClickAwayListener-DrGahT-8.js";import"./MenuList-Bwdvqrjp.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-DqNWR_cw.js";import"./MenuItem-tMZOAqGu.js";import"./dividerClasses-s6IjwoiZ.js";import"./ListItemIcon-CMIE2xLV.js";import"./ListItemText-D4vp3RN4.js";import"./Divider-CJK-vQmM.js";import"./IconSvgButton-CXctRetv.js";import"./IconButton-MRX9Tl10.js";import"./index-JwmK9Zjv.js";import"./getThemeProps-D1SG0DsT.js";import"./Box-CDAuR3Sa.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
