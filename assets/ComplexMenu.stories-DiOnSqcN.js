import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-CgkvdIjM.js";import{C as p}from"./ComplexMenu-DvfRa6Rj.js";import"./createSvgIcon-364Lzn_b.js";import"./index-CkFnR4ru.js";import"./iframe-CKvnnJhq.js";import"./createTheme-DcsDOw1A.js";import"./DefaultPropsProvider-CGqxt6ob.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-bpf5HOw7.js";import"./useTheme-VJ2j0frp.js";import"./Tooltip-DC2q4Wz4.js";import"./index-CHLvizmL.js";import"./useSlot-Bju1dyXB.js";import"./useForkRef-BJQkitpf.js";import"./useTimeout-BqUVErKz.js";import"./useControlled-BvqV3f_O.js";import"./getReactElementRef-JptPm9gh.js";import"./index-BqxOl3YS.js";import"./index-BPjGFZ8d.js";import"./Grow-DqmkwxJ5.js";import"./Popper-cjOWIAbd.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-D0myDhRn.js";import"./ContentCopyTwoTone-C1c9_2em.js";import"./HelpOutlineTwoTone-B28k7bNY.js";import"./ErrorOutlined-CRFOwhri.js";import"./GetAppTwoTone-B431n5bV.js";import"./InfoOutlined--CY1tT3m.js";import"./PhoneTwoTone-C3hHeKiJ.js";import"./DeleteTwoTone-tNK8eKV0.js";import"./CheckCircleTwoTone-DasE1-rH.js";import"./DropdownMenu-B4QRzcWZ.js";import"./Button-BdFuUL1S.js";import"./createSimplePaletteValueFilter-B9aGn8G9.js";import"./ButtonBase-CGWLsOy4.js";import"./CircularProgress-DK0_NXfb.js";import"./Typography-DUXOvTJX.js";import"./index-BDhwziWJ.js";import"./extendSxProp-B2jDyka1.js";import"./Fade-DvSChFD7.js";import"./Paper-Bxri_9-b.js";import"./ClickAwayListener-BpdWOejG.js";import"./MenuList-CpiaU4H8.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-DP1aYMgr.js";import"./MenuItem-C7Nn1X9K.js";import"./dividerClasses-eQuyENVl.js";import"./ListItemIcon-5yhPx_5p.js";import"./ListItemText-D3sSboJa.js";import"./Divider-kcFWna7c.js";import"./IconSvgButton-jX6JrZBn.js";import"./IconButton-CsuOJx-T.js";import"./index-CNkX6e0V.js";import"./getThemeProps-CmXJJfNS.js";import"./Box-CDBIpvwF.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
