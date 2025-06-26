import{j as i}from"./jsx-runtime-l2JOfHlU.js";import{I as n}from"./IconSvg-BBaCmBg7.js";import{C as p}from"./ComplexMenu-DCuRUjQh.js";import"./index-DhsIdlB6.js";import"./iframe-CLh-v2EG.js";import"./createSvgIcon-BQZtTy5l.js";import"./createTheme--Vxq6Yu5.js";import"./DefaultPropsProvider-Bq1HBsor.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-DZn9zuh6.js";import"./useTheme-Jy3glTIZ.js";import"./Tooltip-X5ttJ9Im.js";import"./index-BOumIDmZ.js";import"./useSlot-rxoZph7w.js";import"./useForkRef-C9baLs8u.js";import"./useTimeout-Qi8fPrDU.js";import"./useControlled-Dc62HDZy.js";import"./getReactElementRef-D07nHqbQ.js";import"./index-DwHlnEf2.js";import"./index-B1hrXRSl.js";import"./Grow-DAU1H3gG.js";import"./Popper-dGtXYx0v.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DYasQqn8.js";import"./ContentCopyTwoTone-I6e7FA06.js";import"./HelpOutlineTwoTone-iOoJ2zV0.js";import"./ErrorOutlined-ttlr5jFl.js";import"./GetAppTwoTone-BuLSesFX.js";import"./InfoOutlined-COiqgqeN.js";import"./PhoneTwoTone-aAvLaTTi.js";import"./DeleteTwoTone-Bl0qC-NK.js";import"./CheckCircleTwoTone-Ck-Ybsjm.js";import"./DropdownMenu-BQ4kTQEo.js";import"./Button-DlRALsF5.js";import"./createSimplePaletteValueFilter-B9d18wK8.js";import"./ButtonBase-D0mIbvCb.js";import"./CircularProgress-BwR0mYGb.js";import"./Typography-DTRBBvQY.js";import"./index-CDwEJlle.js";import"./extendSxProp-CimpErXC.js";import"./Fade-BUu47Rql.js";import"./Paper-BuJm1n8g.js";import"./ClickAwayListener-C9mcQmon.js";import"./MenuList-0DmohkSS.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-BI_JpESs.js";import"./MenuItem-CMZW1zCt.js";import"./dividerClasses-CiwpZyoO.js";import"./ListItemIcon-BxrMRNHb.js";import"./ListItemText-Dj_1IsFW.js";import"./Divider-BFGcRRaf.js";import"./IconSvgButton-DjfRIPmA.js";import"./IconButton-DgFPdk3S.js";import"./index-CsRX_q_4.js";import"./getThemeProps-Dg3p2Zs5.js";import"./Box-BXrzqanv.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
