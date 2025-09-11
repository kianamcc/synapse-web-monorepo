import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-7BfCXlDf.js";import{C as p}from"./ComplexMenu-BcHt-bxh.js";import"./createSvgIcon-Bp3iCONJ.js";import"./index-6vxeCzL4.js";import"./iframe-CjifT74g.js";import"./createTheme-Dy0-m8-A.js";import"./DefaultPropsProvider-DuHQt5tX.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-DxuATEnu.js";import"./useTheme-DYfQlcXU.js";import"./Tooltip-D4mylLgV.js";import"./index-D050dNpj.js";import"./useSlot-Bh66Acib.js";import"./useForkRef-D3GN_CBh.js";import"./useTimeout-DAnP99B3.js";import"./useControlled-DS0tk13e.js";import"./getReactElementRef-BVECeuLd.js";import"./index-Calt9S7p.js";import"./index-CEnxySY1.js";import"./Grow-AKYW22Tv.js";import"./Popper-Hnc_u6mX.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-Cz8G73AH.js";import"./ContentCopyTwoTone-CCkNj-E9.js";import"./HelpOutlineTwoTone-BcWivEdN.js";import"./ErrorOutlined-D-WVJJO-.js";import"./GetAppTwoTone-DxBbp8aG.js";import"./InfoOutlined-Cyh4lrPb.js";import"./PhoneTwoTone-C5oPHTz4.js";import"./DeleteTwoTone-Cat_9Kh7.js";import"./CheckCircleTwoTone-BCUKw-TQ.js";import"./DropdownMenu-DVKF4EYb.js";import"./Button-BVPpZjkW.js";import"./createSimplePaletteValueFilter-BJFb3sY0.js";import"./ButtonBase-CbRzwM7N.js";import"./CircularProgress-oIAkzJX4.js";import"./Typography-CHNd49HH.js";import"./index-BEFSRFSM.js";import"./extendSxProp-DBncvLzO.js";import"./Fade-BieE9Iqq.js";import"./Paper-BgoErbyD.js";import"./ClickAwayListener-Dxjx-8zF.js";import"./MenuList-D_gvAhKa.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-zAC0j8DL.js";import"./MenuItem-BD8I7c-S.js";import"./dividerClasses-vzKAWrLV.js";import"./ListItemIcon-CcROZxF4.js";import"./ListItemText-BSFCOr4T.js";import"./Divider-J2d34M1h.js";import"./IconSvgButton-duHy08KL.js";import"./IconButton-kCilc8aH.js";import"./index-DCHuFasX.js";import"./getThemeProps-DQzIp4hW.js";import"./Box-4s3DQrSt.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
