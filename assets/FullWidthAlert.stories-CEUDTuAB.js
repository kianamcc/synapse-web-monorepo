import{ax as a,r as i,j as r}from"./iframe-Bs_Prdk_.js";import{S as c}from"./SynapseNavDrawer-_7jEDe5k.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BaKxs_Di.js";import"./useInfiniteQuery-BFUuL85S.js";import"./useDownloadList-qGC2y18X.js";import"./waitForAsyncResult-iLgfRtaq.js";import"./useUserBundle-CXGw3t_9.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-DZZeKReN.js";import"./ConfirmationDialog-fiIuTmNs.js";import"./DialogBase-CNTtoPKS.js";import"./Close-Dhu31KS6.js";import"./HelpPopover-DsZu1FFV.js";import"./MarkdownPopover-CEEU5Nmq.js";import"./LightTooltip-COqi4IFI.js";import"./MarkdownSynapse-BoHcENa8.js";import"./SkeletonButton-B-1H7QMA.js";import"./SkeletonInlineBlock-Djc2NMos.js";import"./SkeletonTable-Q4aEQVXF.js";import"./SkeletonParagraph-NTXhe3CA.js";import"./RadioGroup-_hPcb7DO.js";import"./Radio-B_jSkH30.js";import"./SwitchBase-CC1BS3iN.js";import"./FormGroup-D8Xw06dH.js";import"./FormControlLabel-D0PCi45L.js";import"./Chip-D6_WALXy.js";import"./SynapseHomepageNavBar-BzRS0x3b.js";import"./SageResourcesPopover-CYraR5NU.js";import"./Grid-CR1iINHr.js";import"./index-CYslwlK8.js";import"./MenuItem-DQ2i9Xmi.js";import"./UserBadge-DwAlTeJ-.js";import"./Card-1Ir83r-T.js";import"./searchDefaults-DEYEAGdD.js";import"./Slide-CyqhJo1q.js";import"./InputAdornment-DlZi7743.js";import"./listItemButtonClasses-BakoQbJF.js";import"./Badge-B3XR6wKH.js";import"./usePreviousProps-_O8gdq38.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const V=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,V as __namedExportsOrder,Q as default};
