import{j as i}from"./jsx-runtime-5V4FT3Kv.js";import{I as n}from"./IconSvg-2xJ5Wrm2.js";import{C as p}from"./ComplexMenu-CqZIKLNg.js";import"./index-BsDJGuG7.js";import"./iframe-BhfxnZs8.js";import"./createSvgIcon-CPu07qPr.js";import"./createTheme-Bx_6hso5.js";import"./DefaultPropsProvider-DXLQE8lZ.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-D_f1sKc-.js";import"./useTheme-Chj9yEMG.js";import"./Tooltip-W2aXJr8G.js";import"./index-CQfBwZoQ.js";import"./useSlot-DMlCntah.js";import"./useForkRef-BXWNwB78.js";import"./useTimeout-CKAPd5h7.js";import"./useControlled-DHqSgfGl.js";import"./getReactElementRef-Quyt_ej6.js";import"./index-vxSVzDii.js";import"./index-D_MZvsil.js";import"./Grow-Bdc_wmCE.js";import"./Popper-Ha1u7XjY.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DP7V4ITi.js";import"./ContentCopyTwoTone-Cua-MxPP.js";import"./HelpOutlineTwoTone-BI0c_Xli.js";import"./ErrorOutlined-3Rv5WH_h.js";import"./GetAppTwoTone-Bg1nbhNr.js";import"./InfoOutlined-BieHj1Q7.js";import"./PhoneTwoTone-Mr-iiQBh.js";import"./DeleteTwoTone-DH---1TX.js";import"./CheckCircleTwoTone-CwWsjzjm.js";import"./DropdownMenu-D0xbLi_N.js";import"./Button-CAMJXbHu.js";import"./createSimplePaletteValueFilter-BCRasMuj.js";import"./ButtonBase-BMHnZ5Xj.js";import"./CircularProgress-BWcICyRh.js";import"./Typography-B2qjncXA.js";import"./index-BK5Ern9U.js";import"./extendSxProp-DayZZBSa.js";import"./Fade-Q-eCOSTL.js";import"./Paper-D_zxpmzK.js";import"./ClickAwayListener-B5sfNDkG.js";import"./MenuList-Bo4Ssjfp.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-Fl6Fugnm.js";import"./MenuItem-EUUOy1mf.js";import"./dividerClasses-XSOHsVhW.js";import"./ListItemIcon-C5IKa_lW.js";import"./ListItemText-CrAzLtI2.js";import"./Divider-vqTQk_WY.js";import"./IconSvgButton-CCZKMiMm.js";import"./IconButton-D1whgVvs.js";import"./index-Dm_4isMV.js";import"./getThemeProps-BJ2M0tqL.js";import"./Box-DXz1EWn6.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
