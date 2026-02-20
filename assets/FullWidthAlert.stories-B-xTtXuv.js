import{az as a,j as r,r as i}from"./iframe-CkxBXYUS.js";import{S as c}from"./SynapseNavDrawer-CNPKGdwu.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-Bfb0431k.js";import"./useInfiniteQuery-GEnPT25t.js";import"./useDownloadList-rRVGhP_n.js";import"./waitForAsyncResult-CdMXMIam.js";import"./useUserBundle-r9Y7ADD5.js";import"./useSuspenseQuery-CY63kBJ7.js";import"./CreateProjectModal-BiQU21KS.js";import"./ConfirmationDialog-CtJfMeS4.js";import"./DialogBase-A-L2CAQ2.js";import"./Close-CMCH1D24.js";import"./HelpPopover-8rjafscZ.js";import"./MarkdownPopover-3C7AALW8.js";import"./LightTooltip-iqHVnLEB.js";import"./MarkdownSynapse-Cl6WuhRF.js";import"./SkeletonButton-BkLf8D0r.js";import"./SkeletonInlineBlock-DEQxpJiN.js";import"./SkeletonTable-BxoX6BC7.js";import"./SkeletonParagraph-DYUWrGET.js";import"./SynapseHomepageNavBar-9ybD3eVS.js";import"./SageResourcesPopover-BJxfLbvI.js";import"./Grid-DspLooeH.js";import"./index-SFhbXU88.js";import"./MenuItem-CEfDuclk.js";import"./UserBadge-CJBqeQOM.js";import"./Card-h-vZuF9_.js";import"./Chip-CZ1spSeI.js";import"./searchDefaults-DmfYyq9i.js";import"./Slide-B-GH3O66.js";import"./InputAdornment-DGo24dSd.js";import"./listItemButtonClasses-Do4tbNvZ.js";import"./Badge-qcJzysT9.js";import"./usePreviousProps-CGwlHOmp.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
