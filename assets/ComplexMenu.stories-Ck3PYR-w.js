import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-pkUNrCKA.js";import{C as p}from"./ComplexMenu-PtIf4_MH.js";import"./createSvgIcon-BgHtG-ZK.js";import"./index-Fvy6OXvx.js";import"./iframe-B8dXxRrz.js";import"./createTheme-Bqan8iSd.js";import"./DefaultPropsProvider-CvOM3crP.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-LIw16y-R.js";import"./useTheme-ITUjA_qS.js";import"./Tooltip-DX-SU6uL.js";import"./index-Cq9dyCaH.js";import"./useSlot-OhfiPf_i.js";import"./useForkRef-BeT6GA-1.js";import"./useTimeout-BI-r7Chh.js";import"./useControlled-uX7GhbF6.js";import"./getReactElementRef-CVCbp7Cp.js";import"./index-BcRRWnYW.js";import"./index-BDgQoSql.js";import"./Grow-wuCwDJHH.js";import"./Popper-CXqOJrMB.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-iZd8Yw3F.js";import"./ContentCopyTwoTone-Bri-QOf9.js";import"./HelpOutlineTwoTone-suwU6zMB.js";import"./ErrorOutlined-CRbXzMiC.js";import"./GetAppTwoTone-DBVEUo2F.js";import"./InfoOutlined-CkIduoMl.js";import"./PhoneTwoTone-BjFI7oHG.js";import"./DeleteTwoTone-Cj_vX_Dm.js";import"./CheckCircleTwoTone-CdZKEvy8.js";import"./DropdownMenu-9k_tkhAg.js";import"./Button-BHN8_UXu.js";import"./createSimplePaletteValueFilter-BCFu5tCD.js";import"./ButtonBase-DHedW4PR.js";import"./CircularProgress-wOG2gwEP.js";import"./Typography-6dkO2MTM.js";import"./index-DK62uATf.js";import"./extendSxProp-D-vpv-1y.js";import"./Fade-CUSl01b3.js";import"./Paper-CNcRBNAa.js";import"./ClickAwayListener-D1GBWBlV.js";import"./MenuList-B2UoPz8K.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-D4Vts0uI.js";import"./MenuItem-CVVaquVB.js";import"./dividerClasses-DTIC4WWs.js";import"./ListItemIcon-CYdGBZmJ.js";import"./ListItemText-CjXjPaYT.js";import"./Divider-Mg8QBUql.js";import"./IconSvgButton-_pEbWXR0.js";import"./IconButton-C_XoYKbu.js";import"./index-CqCMGeDR.js";import"./getThemeProps-D7jKhtgM.js";import"./Box-CbSz_dhW.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
