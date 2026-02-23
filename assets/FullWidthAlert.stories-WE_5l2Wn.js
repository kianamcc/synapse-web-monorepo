import{ay as a,j as r,r as i}from"./iframe-Dmz0OYQW.js";import{S as c}from"./SynapseNavDrawer-Desu-6WH.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-6g8wkK4y.js";import"./useInfiniteQuery-BvWsAshg.js";import"./useDownloadList-CFpd7DrF.js";import"./waitForAsyncResult-DMyxyCIC.js";import"./useUserBundle-BQiPRbYK.js";import"./useSuspenseQuery-DBtfLQcz.js";import"./CreateProjectModal-Dl0Qurx1.js";import"./ConfirmationDialog-91A2i7b8.js";import"./DialogBase-D4eQljKx.js";import"./Close-DJMVqFXZ.js";import"./HelpPopover-DDEeoZql.js";import"./MarkdownPopover-BJM8rGXo.js";import"./LightTooltip-B4ee2TOH.js";import"./MarkdownSynapse-BRO4x38K.js";import"./SkeletonButton--ocR4MjZ.js";import"./SkeletonInlineBlock-DMCr-ZDU.js";import"./SkeletonTable-DZOOfuw_.js";import"./SkeletonParagraph-BbQFsbPl.js";import"./SynapseHomepageNavBar-DAVjwoTx.js";import"./SageResourcesPopover-KnRiYE1I.js";import"./Grid-Du4p1N6T.js";import"./index-Bgq-5rD6.js";import"./MenuItem-CDWx0QZm.js";import"./UserBadge-Dn0Lha6s.js";import"./Card-BwP6E97B.js";import"./Chip-CDOlQzO-.js";import"./searchDefaults-DPEWxtW_.js";import"./Slide-BYrZGGAY.js";import"./InputAdornment-DfV1miPS.js";import"./listItemButtonClasses-BDHR41mL.js";import"./Badge-BxbtG8uQ.js";import"./usePreviousProps-C6N-Wksh.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
