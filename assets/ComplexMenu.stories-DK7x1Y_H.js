import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-oMrpzdbu.js";import{C as p}from"./ComplexMenu-Bxf3lLKl.js";import"./createSvgIcon-xRD0VMrj.js";import"./index-CqkHQv7x.js";import"./iframe-BgwGFO8A.js";import"./createTheme-DvYKiu1i.js";import"./DefaultPropsProvider-7vp5Xg1U.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-DcxGxVMb.js";import"./useTheme-zcMKTfSN.js";import"./Tooltip-DFYygHVR.js";import"./index-DbzZg3-5.js";import"./useSlot-DEhbeWXQ.js";import"./useForkRef-DcEMbDda.js";import"./useTimeout-uliFliSc.js";import"./useControlled-CFGJwztc.js";import"./getReactElementRef-C8AieGDO.js";import"./index-BfHw4MxA.js";import"./index-CdBb3X1w.js";import"./Grow-ZrcNPb6n.js";import"./Popper-yYY1hnWk.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-BxLOkaBN.js";import"./ContentCopyTwoTone-BUwhZVov.js";import"./HelpOutlineTwoTone-xfsRudZ1.js";import"./ErrorOutlined-CV-T3VLH.js";import"./GetAppTwoTone-C472OS1F.js";import"./InfoOutlined-BLqluNyi.js";import"./PhoneTwoTone-BfNwYvyb.js";import"./DeleteTwoTone-BCrRtq0-.js";import"./CheckCircleTwoTone-DY5SAgNm.js";import"./DropdownMenu-B2Y1tgk_.js";import"./Button-DazhXTx4.js";import"./createSimplePaletteValueFilter-DaZ5Yv0h.js";import"./ButtonBase-e0UzDey_.js";import"./CircularProgress-B8_AL_Fq.js";import"./Typography-fLt1zesl.js";import"./index-xaCPz-JY.js";import"./extendSxProp-DtYjKP0k.js";import"./Fade-bYr3BlVk.js";import"./Paper-Bv7lETL1.js";import"./ClickAwayListener-DnQUb8HH.js";import"./MenuList-BYV4P6ae.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-BaIfK7WA.js";import"./MenuItem-DSYPXiw3.js";import"./dividerClasses-JWI-jhcs.js";import"./ListItemIcon-D_NoH5Yn.js";import"./ListItemText-BIoX_IyJ.js";import"./Divider-m_sCI_Fc.js";import"./IconSvgButton-C5AXkU92.js";import"./IconButton-C4TIHZyt.js";import"./index-CKxjd7_V.js";import"./getThemeProps-sRjEXcdv.js";import"./Box-CzGTAvbF.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
