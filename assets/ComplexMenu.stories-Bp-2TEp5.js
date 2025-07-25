import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-BvTvgdJO.js";import{C as p}from"./ComplexMenu-24wb82PE.js";import"./createSvgIcon-B1ET5Q7C.js";import"./index-DaerQfh4.js";import"./iframe-DG_0Yb8T.js";import"./createTheme-DWPhXL4x.js";import"./DefaultPropsProvider-C35g19ng.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-1eWS1mKW.js";import"./useTheme-Bq26F_mY.js";import"./Tooltip-XZsCFdUo.js";import"./index-Bsstuy1M.js";import"./useSlot-8fqGYfNr.js";import"./useForkRef-chIAXqkx.js";import"./useTimeout-BtgfChTQ.js";import"./useControlled-BuXgd8DV.js";import"./getReactElementRef-O4bMEre0.js";import"./index-BkAjmFmp.js";import"./index-BZI1VTjl.js";import"./Grow-DbLtzD-y.js";import"./Popper-CHXNkUvh.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-D8c5w8Us.js";import"./ContentCopyTwoTone-DrkCTFE2.js";import"./HelpOutlineTwoTone-C981Qq72.js";import"./ErrorOutlined-DjcV4wIf.js";import"./GetAppTwoTone-Xw82N-hu.js";import"./InfoOutlined-DXdKc2f6.js";import"./PhoneTwoTone-B_EGMhqw.js";import"./DeleteTwoTone-DAw9SU1Z.js";import"./CheckCircleTwoTone-CpNxRNCX.js";import"./DropdownMenu-BZb22Fmd.js";import"./Button-Bpa-g8Di.js";import"./createSimplePaletteValueFilter-BR2dnVNl.js";import"./ButtonBase-D7gcgVwq.js";import"./CircularProgress-DfPFzaPe.js";import"./Typography-DvSiE9Go.js";import"./index--HKoRW_u.js";import"./extendSxProp-DtCxMq59.js";import"./Fade-Pl-VaJW2.js";import"./Paper-DXnLpHDO.js";import"./ClickAwayListener-BH5tDWrA.js";import"./MenuList-BxnNEK-4.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-HbhrSGjw.js";import"./MenuItem-Cc1IY8_n.js";import"./dividerClasses-DEVmhUJM.js";import"./ListItemIcon-DoqfnrbN.js";import"./ListItemText-CGSU1EIz.js";import"./Divider-C-u7HNwS.js";import"./IconSvgButton-Clbm23Qj.js";import"./IconButton-CbX8V5dQ.js";import"./index-DHDeeeZJ.js";import"./getThemeProps-Zq_eg-hT.js";import"./Box-DSkGfUnd.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
