import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-Ckg_bepJ.js";import{C as p}from"./ComplexMenu-DzK1OjqG.js";import"./createSvgIcon-DUQWWt-z.js";import"./index-BlqYlNqH.js";import"./iframe-DCM7iHZO.js";import"./createTheme-CX2Fjxji.js";import"./DefaultPropsProvider-BnvpeM39.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-BpONhpPf.js";import"./useTheme-B9tfsfzJ.js";import"./Tooltip-BLdHd-MN.js";import"./index-WIo8OHGx.js";import"./useSlot-BGFFn2Yp.js";import"./useForkRef-CuaJz7-Y.js";import"./useTimeout-DNpXQZXA.js";import"./useControlled-DNjUBqvl.js";import"./getReactElementRef-B-FQDB6t.js";import"./index-Dr007Q5D.js";import"./index-qpPU8qdy.js";import"./Grow-BeiywY4t.js";import"./Popper-BLn1Ov7-.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-BA5zvfWV.js";import"./ContentCopyTwoTone-CovBRX9n.js";import"./HelpOutlineTwoTone-BkQiZrs0.js";import"./ErrorOutlined-BwbGTiJM.js";import"./GetAppTwoTone-CIqy5enk.js";import"./InfoOutlined-6Djax1NJ.js";import"./PhoneTwoTone-hQqJo0RY.js";import"./DeleteTwoTone-DVmmLmUZ.js";import"./CheckCircleTwoTone-DJ65aMmV.js";import"./DropdownMenu-DyjLh1j5.js";import"./Button-B5V1-M1A.js";import"./createSimplePaletteValueFilter-p4K6Mnoc.js";import"./ButtonBase-Dr_L7g0l.js";import"./CircularProgress-B_PETcC2.js";import"./Typography-BGL1ewSU.js";import"./index-BBXrvSSK.js";import"./extendSxProp-ClQEqrR8.js";import"./Fade-DXKqJCZP.js";import"./Paper-CF2lzpio.js";import"./ClickAwayListener-wANS1sm5.js";import"./MenuList-YmtN0dkE.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-CZF0orBn.js";import"./MenuItem-eMD9Vmvp.js";import"./dividerClasses-CaMRh6Pu.js";import"./ListItemIcon-CIb_b6e-.js";import"./ListItemText-DQipgvwz.js";import"./Divider-CT6tC6lo.js";import"./IconSvgButton-DkYKdOW3.js";import"./IconButton-BIB-CAZ9.js";import"./index-DirosUBR.js";import"./getThemeProps-C7E0PQ7U.js";import"./Box-BAunhwEm.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
