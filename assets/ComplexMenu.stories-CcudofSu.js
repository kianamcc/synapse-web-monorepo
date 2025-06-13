import{j as i}from"./jsx-runtime-bs3iHWgH.js";import{I as n}from"./IconSvg-LdGJ3KEc.js";import{C as p}from"./ComplexMenu-4Bb3_CCJ.js";import"./index-1G0jIe_K.js";import"./iframe-CAE0AedR.js";import"./createSvgIcon-7ZLvw587.js";import"./createTheme-DDXry1D5.js";import"./DefaultPropsProvider-BrwCbwq3.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-HySVWCes.js";import"./useTheme-N3QqDEBY.js";import"./Tooltip-CWPBJei9.js";import"./index-DOxN_OSL.js";import"./useSlot-D5PFbywt.js";import"./useForkRef-BnsVc4W5.js";import"./useTimeout-D-YFSzxf.js";import"./useControlled-CKYe0QIs.js";import"./getReactElementRef-lg4qkuS3.js";import"./index-Cp0bzr_k.js";import"./index-Dj_HbVa7.js";import"./Grow-BehZzC11.js";import"./Popper-DCwTo5EU.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DDy7CZFw.js";import"./ContentCopyTwoTone-D3pdvfpB.js";import"./HelpOutlineTwoTone-DIz94qha.js";import"./ErrorOutlined-BVFe0EKv.js";import"./GetAppTwoTone-D9_OXm0l.js";import"./InfoOutlined-ChIBoazp.js";import"./PhoneTwoTone-DnuRvyQr.js";import"./DeleteTwoTone-CbhVUqgK.js";import"./CheckCircleTwoTone-C9sAhxWz.js";import"./DropdownMenu-ByZi1qES.js";import"./Button-5ZLAf8y7.js";import"./createSimplePaletteValueFilter-CvTarr9j.js";import"./ButtonBase-BLNh9xJi.js";import"./CircularProgress-C1j2DwHt.js";import"./Typography-BTyGK9kh.js";import"./index-B1JGVqhl.js";import"./extendSxProp-DpAf3ZlK.js";import"./Fade-DACgj7ig.js";import"./Paper-TiPNohsC.js";import"./ClickAwayListener-C1dZSwOc.js";import"./MenuList-BPUHa1dt.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-JaubXJ70.js";import"./MenuItem-aYaSA5LW.js";import"./dividerClasses-C1OV_8bl.js";import"./ListItemIcon-g0CgwfKt.js";import"./ListItemText-9vDTDIRV.js";import"./Divider-BqDhbnUe.js";import"./IconSvgButton-DQgPw_OT.js";import"./IconButton-Cc16ts0x.js";import"./index-BdPhiM_y.js";import"./getThemeProps-BEgO2NgN.js";import"./Box-CwOOQtt7.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
