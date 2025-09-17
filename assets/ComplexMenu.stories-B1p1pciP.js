import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-BOAjVdLX.js";import{C as p}from"./ComplexMenu-vdKJsh1X.js";import"./createSvgIcon-C9Qu0LqJ.js";import"./index-Bc8RXlNF.js";import"./iframe-DqtJT-CI.js";import"./createTheme-B-WGvCZV.js";import"./DefaultPropsProvider-BZTOi2Nb.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-CnLnUCUF.js";import"./useTheme-C9VVxehU.js";import"./Tooltip-D5aOZOwW.js";import"./index-DgC7vvPA.js";import"./useSlot-BE5lb3ME.js";import"./useForkRef-2fHpQHUh.js";import"./useTimeout-DkJzioRi.js";import"./useControlled-kiYK4enm.js";import"./getReactElementRef-DBTURC4m.js";import"./index-CcY_nMfh.js";import"./index-DgNGjvVA.js";import"./Grow-C-w8O3Bv.js";import"./Popper-Ccwyg-S0.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-CiQZnKt8.js";import"./ContentCopyTwoTone-CvwD0Miq.js";import"./HelpOutlineTwoTone-BKsnjMpo.js";import"./ErrorOutlined-DQmFeGta.js";import"./GetAppTwoTone-Lg3-Wt0y.js";import"./InfoOutlined-Dvk66SaN.js";import"./PhoneTwoTone-C7Ju3bft.js";import"./DeleteTwoTone-CqTUk57l.js";import"./CheckCircleTwoTone-D-sclXL9.js";import"./DropdownMenu-DyBbUegd.js";import"./Button-D1_V94c4.js";import"./createSimplePaletteValueFilter-B6DTm-vX.js";import"./ButtonBase-D6Nhhqqr.js";import"./CircularProgress-BAgXRlg8.js";import"./Typography-D9diGUsI.js";import"./index-BIlcAsR4.js";import"./extendSxProp-eP26Hwbg.js";import"./Fade-Iv3fPh82.js";import"./Paper-BtBe2Ap-.js";import"./ClickAwayListener-DtQh59tZ.js";import"./MenuList-CbhYmKwS.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-DtodLoNg.js";import"./MenuItem-CBa4Se4S.js";import"./dividerClasses-DeF1tQLC.js";import"./ListItemIcon-CVETVbNT.js";import"./ListItemText-BXQPYy3O.js";import"./Divider-yAvrAxOl.js";import"./IconSvgButton-CYPMF_e0.js";import"./IconButton-W3ZhFBsx.js";import"./index-CszCNHlj.js";import"./getThemeProps-xXfwRdzB.js";import"./Box-nLN5geWp.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
