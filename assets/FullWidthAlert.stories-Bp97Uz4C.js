import{ax as a,r as i,j as r}from"./iframe--e7tPOH7.js";import{S as c}from"./SynapseNavDrawer-DykLrUkD.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BrZAIVCv.js";import"./useInfiniteQuery-DhFcZOnt.js";import"./useDownloadList-C83FY-zX.js";import"./waitForAsyncResult-FypeM4e3.js";import"./useUserBundle-Cvjt2mpu.js";import"./CreateProjectModal-CUwARTuz.js";import"./ConfirmationDialog-DPfClze9.js";import"./DialogBase-DNF9auJc.js";import"./Close-B-eQ4kzT.js";import"./HelpPopover-D1896MTn.js";import"./MarkdownPopover-DgdSpLQA.js";import"./LightTooltip-CfxxK8Nb.js";import"./MarkdownSynapse-Bzo0baHo.js";import"./SkeletonButton-_aLRz4g8.js";import"./SkeletonInlineBlock-CYh7Z-UU.js";import"./SkeletonTable-CaoeDxPi.js";import"./SkeletonParagraph-DxfKrJwN.js";import"./SynapseHomepageNavBar-Bk-uZPv7.js";import"./SageResourcesPopover-7F1AAn7g.js";import"./Grid-D5P_9YO-.js";import"./index-B0hb1_FS.js";import"./MenuItem-ClPLR1c1.js";import"./UserBadge-BS9OSWR1.js";import"./useUserGroupHeader-s0veRE4v.js";import"./Card-BExoznwr.js";import"./Chip-BjLa75DM.js";import"./searchDefaults-CtxLOqMY.js";import"./Slide-BOu13XRJ.js";import"./InputAdornment-C81UJFZy.js";import"./listItemButtonClasses-CUCHuFXh.js";import"./Badge-CDayIdoR.js";import"./usePreviousProps-C2VjmU0C.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Package has been downloaded',
    description: 'The files contained in this zip file have been removed from your list.',
    isGlobal: false
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Success',
    description: 'Lorem ipsum dolor sit amet',
    primaryButtonConfig: {
      text: 'Accept and Continue',
      onClick: () => alert('Accepted')
    },
    isGlobal: true,
    onClose: undefined
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...SuccessAlertWithPrimaryButtonOnly.args
  },
  render: args => <>
      <SynapseNavDrawer initIsOpen={false} gotoPlace={(href: string) => {
      window.alert(\`Nav bar calling back to change route to \${href}\`);
    }} />
      <FullWidthAlert {...args} />
    </>,
  decorators: [Story => {
    useEffect(() => {
      // SWC applies this class when SynapseNavDrawer is visible
      document.body.classList.add('SynapseNavDrawerIsShowing');
      return () => {
        // ...and removes it when SynapseNavDrawer is not visible
        document.body.classList.remove('SynapseNavDrawerIsShowing');
      };
    }, []);
    return <Story />;
  }]
}`,...o.parameters?.docs?.source}}};const H=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,H as __namedExportsOrder,q as default};
