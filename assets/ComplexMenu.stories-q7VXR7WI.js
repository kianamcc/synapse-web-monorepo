import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-CjzZFXJW.js";import{C as p}from"./ComplexMenu-BmgWZzEW.js";import"./createSvgIcon-CyNw1tPa.js";import"./index-A1tc7t_S.js";import"./iframe-BEGfRuJB.js";import"./createTheme-C9QfBZB0.js";import"./DefaultPropsProvider-Bp935OVr.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-D9u2oh3Q.js";import"./useTheme-BgGj2ygo.js";import"./Tooltip-S4uZ93WX.js";import"./index-CvgZCu6o.js";import"./useSlot-CdLEriE5.js";import"./useForkRef-DKMFgSSO.js";import"./useTimeout-CHX4ymYs.js";import"./useControlled-K6Jx4gPQ.js";import"./getReactElementRef-CCLzASj8.js";import"./index-Ck4Elmxo.js";import"./index-BH77Eq3n.js";import"./Grow-BfuUnZ7i.js";import"./Popper-ecVHViea.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DgVk229s.js";import"./ContentCopyTwoTone-Cp6TTZwD.js";import"./HelpOutlineTwoTone-DKu1KbiC.js";import"./ErrorOutlined-3OUn9Qxn.js";import"./GetAppTwoTone-AnSvktXK.js";import"./InfoOutlined-DoSl6c3T.js";import"./PhoneTwoTone-DME5nYJr.js";import"./DeleteTwoTone-Dda6QzIH.js";import"./CheckCircleTwoTone-BV_-JSye.js";import"./DropdownMenu-gfCOp1Nw.js";import"./Button-BvTAjK4M.js";import"./createSimplePaletteValueFilter-nAgvpgra.js";import"./ButtonBase-CiPk1y-x.js";import"./CircularProgress-ClMIew1C.js";import"./Typography-Ck1NaRDY.js";import"./index-AmHoeYPv.js";import"./extendSxProp-BoReKpGK.js";import"./Fade-DOA4wU7Q.js";import"./Paper-CGHoN7LX.js";import"./ClickAwayListener-C1YqEdP3.js";import"./MenuList-RGQCdAQ1.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-gqqcijEE.js";import"./MenuItem-DCOjBD_J.js";import"./dividerClasses-Cm5EITje.js";import"./ListItemIcon-CAxKv4QA.js";import"./ListItemText-CzCmWQm1.js";import"./Divider-B1Qo7EwT.js";import"./IconSvgButton-u-3ajctF.js";import"./IconButton-D2HqYlCj.js";import"./index-C7oTz7tu.js";import"./getThemeProps-CbvsNq-J.js";import"./Box-Bhf3FGw6.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
