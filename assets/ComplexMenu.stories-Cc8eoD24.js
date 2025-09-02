import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-zsm3Fm_D.js";import{C as p}from"./ComplexMenu-BkvlFuIi.js";import"./createSvgIcon-GnSjhHwe.js";import"./index-BLkVaqQU.js";import"./iframe-D1OUWgU8.js";import"./createTheme-WgZwGEUU.js";import"./DefaultPropsProvider-CH3a_DkB.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-DCyIfbaq.js";import"./useTheme-DMtfHtJq.js";import"./Tooltip-CkaNIw4Q.js";import"./index-BscvuTv2.js";import"./useSlot-Dq2qON5u.js";import"./useForkRef-Ig4Zmx52.js";import"./useTimeout-ClfH_HF0.js";import"./useControlled-yelixl_y.js";import"./getReactElementRef-CIFt_A8T.js";import"./index-IrKQg-yb.js";import"./index-BLl-bmD9.js";import"./Grow-DhrVRGR6.js";import"./Popper-D7cy8wUq.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-C19y_E4o.js";import"./ContentCopyTwoTone-DxXPgQCU.js";import"./HelpOutlineTwoTone-DMmUoJRS.js";import"./ErrorOutlined-BoBSR5JJ.js";import"./GetAppTwoTone-K-pWCDbV.js";import"./InfoOutlined-CNYyoV5q.js";import"./PhoneTwoTone-DURZ2tI-.js";import"./DeleteTwoTone-glJvUVj0.js";import"./CheckCircleTwoTone-o604Y7DM.js";import"./DropdownMenu-C4D6Y42o.js";import"./Button-CosI4lZc.js";import"./createSimplePaletteValueFilter-Dndo3dQe.js";import"./ButtonBase-CKvKduXZ.js";import"./CircularProgress-C3fM0KPH.js";import"./Typography-CnElUjJF.js";import"./index-DDGHBRu9.js";import"./extendSxProp-CcNmwxbI.js";import"./Fade-DL6kU-O8.js";import"./Paper-CNOpQakA.js";import"./ClickAwayListener-DeeCbT0O.js";import"./MenuList-BNmuQ05y.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-CEj2iUci.js";import"./MenuItem-BwKSayJ3.js";import"./dividerClasses-CyFW_Iiw.js";import"./ListItemIcon-D1lNZZDs.js";import"./ListItemText-CVqIJvov.js";import"./Divider-CHPO1FEz.js";import"./IconSvgButton-D3LPgLLY.js";import"./IconButton-CVSYLB8I.js";import"./index-1DVoikjL.js";import"./getThemeProps-DmkHaZxY.js";import"./Box-BWGLgO_L.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
